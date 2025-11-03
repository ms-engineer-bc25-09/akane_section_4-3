FROM node:lts

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000
EXPOSE 9229

CMD "npm" "run" "start:debug"