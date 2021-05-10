FROM node:12.18-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3300

CMD [ "node", "src/index.js" ]
