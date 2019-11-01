FROM node:carbon

# Env
# ENV MONGODB_DB_MAIN=manage_courses_crm_db
# ENV MONGODB_URI=mongodb://655c5be043f2:27017/

# Create Directory for the Container
WORKDIR /opt/app/manage_courses_crm

# Only copy the package.json file to work directory
COPY package-lock.json package.json ./
# Install all Packages
RUN npm i --production

# Copy all other source code to work directory
COPY ./build ./

# Start
ENTRYPOINT node ./config/server/index.js
EXPOSE 3000