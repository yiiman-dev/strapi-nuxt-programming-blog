FROM alpine:3.14
RUN apk add git
RUN apk add nodejs
RUN apk add npm

#RUN git clone https://github.com/amintado/strapi-nuxt-programming-blog.git


COPY . /var/src/yiiman/
WORKDIR /var/src/yiiman/
#RUN mv /home/yiiman/strapi-nuxt-programming-blog/* /home/yiiman/
#RUN rm -rf /home/yiiman/strapi-nuxt-programming-blog
RUN npm i
RUN npm i -g yarn

# expose 5000,1337 on container
EXPOSE 5000
EXPOSE 1337

# set front port
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000
ENV API_URL="http://localhost:1337"

RUN npm run installer  --force
WORKDIR /var/src/yiiman/frontend

WORKDIR /var/src/yiiman
RUN npm run build --force

# backend
ENV HOST=0.0.0.0
ENV PORT=1337

# start the app
CMD [ "npm", "start" ]
