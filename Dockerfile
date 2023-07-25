FROM node:19-alpine AS deps
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app

COPY package*.json /app/
RUN npm add sharp
RUN npm ci

COPY . /app

RUN npm run build

CMD ["npm", "run", "start"]
