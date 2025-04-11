FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .



# Expose the port that the React app will run on (usually 3000)
EXPOSE 3000

# Start the React app when the container runs
CMD ["npm", "start"]