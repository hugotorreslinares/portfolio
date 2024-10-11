# Etapa de construcción
FROM node:16 as build

WORKDIR /app

# Copia los archivos package.json y package-lock.json (si está disponible)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia los archivos del proyecto al directorio de trabajo del contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa de producción
FROM nginx:stable-alpine

# Copia los archivos de construcción desde la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]