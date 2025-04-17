import os
import cv2
import easyocr
import requests
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])  # Ensure this matches your frontend URL


# Set up EasyOCR
reader = easyocr.Reader(['en'])

# API Keys & URLs
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes?q="

def extract_text(image_path: str) -> str:
    """Extract text from an image using EasyOCR."""
    img = cv2.imread(image_path)
    if img is None:
        raise ValueError(f"Image not found: {image_path}")
    
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    results = reader.readtext(gray, detail=0)
    
    return "\n".join(results)

def get_book_details_from_gemini(text: str):
    """Extract book title, author, and category using Gemini API."""
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={GEMINI_API_KEY}"
    headers = {"Content-Type": "application/json"}
    
    prompt_text = f"""
    From the following text extracted via OCR from a book cover, identify the book title, author, and category.
    Respond ONLY with a valid JSON object containing "title", "author", and "category".
    Example: {{"title": "Example Book Title", "author": "Jane Doe", "category": "Fiction"}}
    
    OCR Text:
    ---
    {text}
    ---
    """
    
    data = {"contents": [{"role": "user", "parts": [{"text": prompt_text}]}]}
    
    try:
        response = requests.post(url, headers=headers, json=data)
        if response.status_code == 200:
            response_json = response.json()
            raw_text_content = response_json["candidates"][0]["content"]["parts"][0]["text"].strip()
            
            if raw_text_content.startswith("```json"):
                raw_text_content = raw_text_content[7:]
            if raw_text_content.endswith("```"):
                raw_text_content = raw_text_content[:-3]
            
            book_info = json.loads(raw_text_content)
            return book_info.get("title"), book_info.get("author"), book_info.get("category")
        
    except (requests.exceptions.RequestException, KeyError, json.JSONDecodeError, IndexError, TypeError):
        pass
    
    return None, None, None

def get_book_isbn(title, author):
    """Fetch book ISBN from Google Books API."""
    query = f"{title}+inauthor:{author}"
    url = f"{GOOGLE_BOOKS_API}{query}"
    
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if "items" in data and len(data["items"]) > 0:
            book = data["items"][0]["volumeInfo"]
            return next((id["identifier"] for id in book.get("industryIdentifiers", []) if id["type"] == "ISBN_13"), "Not Found")
    
    return "Not Found"

# Enable CORS in Flask
CORS(app)

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided"}), 400
    
    image_file = request.files['image']
    image_path = os.path.join("uploads", image_file.filename)
    
    if not os.path.exists("uploads"):
        os.makedirs("uploads")
    
    image_file.save(image_path)
    print(image_path)

    try:
        extracted_text = extract_text(image_path)
        title, author, category = get_book_details_from_gemini(extracted_text)
        
        if title and author and category:
            isbn = get_book_isbn(title, author)
            return jsonify({"title": title, "author": author, "category": category, "isbn": isbn}), 200
        
        return jsonify({"error": "Could not extract book details"}), 500
    except Exception as e:
        return jsonify({"error": f"Internal Server Error: {str(e)}"}), 500


if __name__ == '__main__':
    app.run(debug=True, port = 5004)
