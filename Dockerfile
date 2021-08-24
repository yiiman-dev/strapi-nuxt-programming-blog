FROM alpine:3.14

# set front port

ARG DB_CLIENT='mysql'
ARG DB_HOST='0.0.0.0'
ARG DB_PORT=3306
ARG DB_USERNAME='root'
ARG DB_PASSWORD=''
ARG DB_NAME='pblog'

ARG NUXT_HOST='0.0.0.0'
ARG NUXT_PORT=5000

ARG BACK_URL="http://localhost:1337"
ARG BACK_HOST='0.0.0.0'
ARG BACK_PORT=1337


ENV DATABASE_CLIENT=$DB_PORT
ENV DATABASE_PORT=$DB_PORT
ENV HOST=$BACK_HOST
ENV NUXT_HOST=$NUXT_HOST
ENV NUXT_PORT=$NUXT_PORT
ENV API_URL=$BACK_URL
ENV PORT=$BACK_PORT
# expose 5000,1337 on container
EXPOSE $BACK_PORT
EXPOSE $NUXT_PORT

RUN echo "db client :" $DB_CLIENT;
RUN echo "db host :" $DB_HOST;
RUN echo "db post :" $DB_PORT;
RUN echo "db username :" $DB_USERNAME;
RUN echo "db name :" $DB_NAME;

RUN apk add git
RUN apk add nodejs
RUN apk add npm




RUN git clone https://github.com/amintado/strapi-nuxt-programming-blog.git
RUN mkdir /var/src
RUN mkdir /var/src/yiiman
RUN mv strapi-nuxt-programming-blog/* /var/src/yiiman/

WORKDIR /var/src/yiiman/


RUN rm -rf /home/yiiman/strapi-nuxt-programming-blog
RUN rm yarn.lock
RUN rm frontend/yarn.lock
RUN npm i
RUN npm i -g yarn
RUN npm run build
#RUN npm run start



RUN npm run installer  --force
WORKDIR /var/src/yiiman/frontend

WORKDIR /var/src/yiiman
RUN npm run build --force

# backend

# start the app

CMD [ "npm", "start" ]
