FROM alpine:3.14
RUN apk add git
RUN apk add nodejs
RUN apk add npm
RUN mkdir /home/yiiman
WORKDIR /home/yiiman
RUN git clone https://github.com/amintado/strapi-nuxt-programming-blog.git
RUN mv /home/yiiman/strapi-nuxt-programming-blog/* /home/yiiman/
RUN rm -rf /home/yiiman/strapi-nuxt-programming-blog
RUN npm i
RUN npm i -g yarn

# expose 5000,1337 on container
EXPOSE 5000
EXPOSE 1337

# set front port
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000

RUN npm run installer  --force
WORKDIR /home/yiiman/frontend
RUN npm uninstall @babel/preset-env
RUN npm install @babel/preset-env@7.12.13
WORKDIR /home/yiiman
RUN npm run build

# backend
ENV HOST=0.0.0.0
ENV PORT=1337

# start the app
CMD [ "npm", "start" ]
