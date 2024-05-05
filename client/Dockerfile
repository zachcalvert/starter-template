# pull official base image
FROM node:21-alpine3.18

# set working directory
WORKDIR /code

# add `/app/node_modules/.bin` to $PATH
ENV PATH /code/node_modules/.bin:$PATH
ARG REACT_APP_DJANGO_URL
ENV REACT_APP_DJANGO_URL http://localhost:8000/

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]
