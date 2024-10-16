# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Ejecutar el proyecto con Docker

Este proyecto está configurado para ser ejecutado en un contenedor Docker. Sigue estos pasos para construir y ejecutar la aplicación usando Docker:

### Prerrequisitos

- Asegúrate de tener [Docker](https://www.docker.com/get-started) instalado en tu sistema.

### Pasos para ejecutar

1. Clona el repositorio:
   ```
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. Construye la imagen Docker:
   ```
   docker build -t hugo-portfolio .
   ```
   Este comando construirá una imagen Docker basada en el Dockerfile en el directorio actual y la etiquetará como `hugo-portfolio`.

3. Ejecuta el contenedor:
   ```
   docker run -p 80:80 hugo-portfolio
   ```
   Este comando iniciará un contenedor basado en la imagen `hugo-portfolio` y mapeará el puerto 80 del contenedor al puerto 80 de tu máquina host.

4. Accede a la aplicación:
   Abre tu navegador y visita `http://localhost`. Deberías ver tu aplicación React ejecutándose.

### Detener el contenedor

Para detener el contenedor, puedes usar `Ctrl+C` en la terminal donde lo ejecutaste, o usar el siguiente comando en otra terminal:

```
docker stop $(docker ps -q --filter ancestor=hugo-portfolio)
```

### Desarrollo con Docker

Si deseas desarrollar mientras usas Docker, puedes montar tu directorio de código como un volumen:

```
docker run -p 80:80 -v $(pwd):/app hugo-portfolio
```

Esto permitirá que los cambios en tu código local se reflejen inmediatamente en el contenedor.

### Notas adicionales

- La imagen Docker utiliza Nginx para servir los archivos estáticos generados por la build de React.
- El Dockerfile está configurado para una build de producción. Para desarrollo, considera crear un Dockerfile.dev separado.

Si encuentras algún problema o tienes preguntas sobre la configuración de Docker, no dudes en abrir un issue en este repositorio.
