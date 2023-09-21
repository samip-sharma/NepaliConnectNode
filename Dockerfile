# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your application will run on (adjust as needed)
EXPOSE 3000

# Define the command to run your application
CMD ["yarn", "start"]
