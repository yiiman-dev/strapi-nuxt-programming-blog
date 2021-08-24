# if you're doing anything beyond your local machine, please pin this to a specific version at https://hub.docker.com/_/node/
# FROM node:12-alpine also works here for a smaller image
FROM node:14.17-slim as base

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

EXPOSE $NUXT_PORT

RUN echo "db client :" $DB_CLIENT;
RUN echo "db host :" $DB_HOST;
RUN echo "db post :" $DB_PORT;
RUN echo "db username :" $DB_USERNAME;
RUN echo "db name :" $DB_NAME;



# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV


# you'll likely want the latest npm, regardless of node version, for speed and fixes
# but pin this version for the best stability
RUN npm i npm@latest -g


RUN mkdir -p /var/src/yiiman/ && chown node:node /var/src/yiiman/
COPY --chown=node:node . /var/src/yiiman/

# the official node image provides an unprivileged user as a security best practice
# but we have to manually enable it. We put it here so npm installs dependencies as the same
# user who runs the app.
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
USER node

FROM base as backend-dev

EXPOSE $BACK_PORT
WORKDIR /var/src/yiiman/backend/
RUN npm install --no-optional && npm cache clean --force
RUN npm run build --production --loglevel=error
CMD [ "npm", "start" ]


FROM base as frontend-dev
WORKDIR /var/src/yiiman/frontend/
RUN npm install --no-optional && npm cache clean --force
RUN npm run build --production --loglevel=error

CMD [ "npm", "start" ]
