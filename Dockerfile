FROM node:6.9.2
EXPOSE 8080

RUN mkdir hello-es && cd hello-es
RUN npm install aws-es --save

COPY index.js .
CMD node index.js
