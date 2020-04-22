FROM cypress/browsers:node12.13.0-chrome80-ff74
RUN npm install --no-save cypress
RUN $(npm bin)/cypress verify
