# Use an official Node.js runtime as the base image
FROM node:20.6.0

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your application will run on (adjust as needed)
EXPOSE 3001

# Define the command to run your application
CMD ["yarn", "start"]
