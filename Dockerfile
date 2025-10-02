# 1) Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2) Serve stage
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/build ./build
COPY package*.json ./
RUN npm ci --production
EXPOSE 8080
CMD ["npm", "start"]
