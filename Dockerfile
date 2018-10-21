# FROM node:10-alpine

# WORKDIR /usr/local/dipko
# COPY . .

# EXPOSE 4200

# RUN npm config set http-proxy http://proxy.msg.de:3128
# RUN npm config set https-proxy http://proxy.msg.de:3128
#RUN npm install

#CMD ["npm", "start"]

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/frontend-cloud-app/ .