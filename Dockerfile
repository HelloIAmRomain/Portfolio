# Use a Node.js base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the React app for production
RUN npm run build

# Use an Nginx image to serve the built app
FROM nginx:1.21

# Copy the build output to the Nginx html folder
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
