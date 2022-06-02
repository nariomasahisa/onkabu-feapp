FROM node:16.13

WORKDIR /app
COPY . /app
RUN npm install
RUN npm install -g @angular/cli

CMD [ "npm", "start" ]