FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY prisma ./prisma
COPY . .
EXPOSE 5004
CMD npx prisma generate && node index.js