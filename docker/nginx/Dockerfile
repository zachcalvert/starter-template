FROM node:21-alpine3.18 as build

WORKDIR /app/frontend
ARG REACT_APP_DJANGO_URL
ENV REACT_APP_DJANGO_URL https://site-domain.com/

COPY ./client/package.json ./
COPY ./client/package-lock.json ./
RUN npm ci --silent

COPY ./client/ ./
RUN npm run build

# The second stage
# Copy React static files and start nginx
FROM nginx:stable-alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
