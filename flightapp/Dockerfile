FROM node:6.11.5
WORKDIR /usr/src/app
RUN npm install -g http-server
COPY . .
ENTRYPOINT ["http-server"]
