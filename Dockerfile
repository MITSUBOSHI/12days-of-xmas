FROM node:22-bookworm

ENV HOST 0.0.0.0

WORKDIR /app

COPY package.json package-lock.json /app/

RUN apt-get update -q && apt-get install -y curl bash git sudo && apt-get clean
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]