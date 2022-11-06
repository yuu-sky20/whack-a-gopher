FROM node:19.0

CMD ["/bin/sh"]

WORKDIR /app

RUN apt-get update && \
    npm install -g create-next-app && \

ADD ./app/package.json /app

RUN npm install