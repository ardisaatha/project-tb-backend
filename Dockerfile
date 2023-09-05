FROM node:18

# Create app directory
WORKDIR /app-be

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /app-be

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . /app-be

CMD [ "node", "index.js" ]