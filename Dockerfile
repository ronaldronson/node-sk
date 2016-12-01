FROM node:6

WORKDIR /app
COPY package.json /app/
RUN npm install
ADD . /app

CMD ["npm", "run", "start"]
EXPOSE 8080
