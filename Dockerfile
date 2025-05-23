FROM node:18-alpine

WORKDIR /src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5003

CMD ["npm", "run", "start"]