FROM node:18
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy Prisma schema
COPY prisma ./prisma

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 5003

# Run prisma generate and start the app
CMD npx prisma generate && node index.js