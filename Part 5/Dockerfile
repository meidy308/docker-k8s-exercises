# Specify a base image
FROM node:14-alpine

WORKDIR /usr/app

# Install some dependenciess
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]