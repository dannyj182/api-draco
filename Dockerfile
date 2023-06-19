# Utiliza una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto a la imagen
COPY . .

# Variables de entorno
ENV PORT=8081
ENV URI='mongodb://localhost:27017'
ENV DB='MONGO'
ENV BASE='draco-openiot'

# Expone el puerto que usa tu aplicación
EXPOSE $PORT

# Comando para ejecutar tu aplicación
CMD [ "npm", "start" ]