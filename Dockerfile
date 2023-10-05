# Base NodeJS image:
FROM node:18

# Creates a working directory in the container:
WORKDIR /app

# Copy all dependencies from package.json to the container:
COPY package*.json ./

# Install dependecies:
RUN yarn

# Copy the project to the container:
COPY . .

# Defines the port where the app will be executed from:
EXPOSE 3000

# Command fro initializing the application:
CMD ["yarn", "dev"]
