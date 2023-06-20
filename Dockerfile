FROM node:16.14-slim as build



# Set working directory
WORKDIR /app
# Install dependencies

# Copy app source code
COPY . .


RUN npm install

RUN mkdir /app/node_modules/.vite \
&& chown -R node:node /app/node_modules/.vite

# Build the Angular app
RUN npm run build

# Production environment
FROM nginx:stable-alpine3.17

# Copy the built app from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html


# Start Nginx
CMD ["nginx","-g","daemon off;"]