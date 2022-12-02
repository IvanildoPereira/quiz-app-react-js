FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN chown -R node /app/node_modules

USER node

EXPOSE 3000
# required for docker desktop port mapping

CMD ["npm", "start"]