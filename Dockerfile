FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

# Remove o npm (e suas próprias dependências internas, como o 'tar')
# da imagem final. Não precisamos do npm para RODAR a aplicação,
# só para instalá-la — e isso já foi feito no passo acima.
RUN rm -rf /usr/local/lib/node_modules/npm \
    /usr/local/lib/node_modules/corepack \
    /usr/local/bin/npm \
    /usr/local/bin/npx \
    /usr/local/bin/corepack \
    /opt/yarn-v*

EXPOSE 3000

CMD ["node", "app.js"]