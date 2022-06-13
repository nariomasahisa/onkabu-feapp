FROM --platform=linux/amd64 node:16

WORKDIR /app
COPY ./package.json /app/
COPY ./runserver.sh /app/
RUN chmod 777 /app/runserver.sh

ENTRYPOINT [ "/app/runserver.sh" ]