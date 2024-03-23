FROM node:20-alpine3.18 

# Set up working directory
WORKDIR /app

# Copy package.json to root directory
COPY package.json .

# Copy yarn.lock to root directory
COPY yarn.lock .

# Install dependencies, use frozen lockfile fixed versions and fail if something is wrong
RUN yarn config set network-timeout 600000 -g && yarn install --frozen-lockfile

# Copy strapi project files
COPY favicon.png ./favicon.png
COPY src/ src/
COPY public/ public/
COPY database/ database/
COPY config/ config/
# NB! Keep tsconfig to avoid the error like this, or remove tsconfig once it's fixed.
#| $ strapi start
#| [2023-08-24 07:26:19.792] debug: ⛔️ Server wasn't able to start properly.
#| [2023-08-24 07:26:19.797] error: Cannot read properties of undefined (reading 'push')
#| TypeError: Cannot read properties of undefined (reading 'push')
#|     at Object.addCreateLocalizationAction (/app/node_modules/@strapi/plugin-i18n/server/services/core-api.js:189:48)
#|     at /app/node_modules/@strapi/plugin-i18n/server/register.js:78:22
COPY tsconfig.json ./tsconfig.json 
# ...

# Build admin panel
RUN yarn build

# Run on port 1337
EXPOSE 1337

# Start strapi server
CMD ["yarn", "start"]