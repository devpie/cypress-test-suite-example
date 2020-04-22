FROM cypress/browsers:node11.13.0-chrome73
RUN npm install --save-dev cypress
RUN $(npm bin)/cypress verify
