# API - Draco

Es una API que se conecta a la base de datos de Draco que está en MongoDB, realizada usando Node.js y Express.
La API permite obtener los históricos de las entidades según su ID.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias ejecutando el siguiente comando:

   ```shell
   npm install
3. Configura las variables de entorno en un archivo .env. Puedes copiar el archivo .env.example y ajustar los valores según tu configuración.

## Uso

1. Inicia el servidor ejecutando el siguiente comando:

   ```shell
   npm start
2. La API estará disponible en http://localhost:8081. Puedes utilizar herramientas como Postman o cURL para realizar solicitudes a la API.

## Endpoints

1. Obtener colección de entidad por ID:

   ```shell
   GET /entity/:id
   ```
Obtiene la colección de la entidad con el ID especificado. Devuelve un array con los documentos de la colección.

Parámetros de la URL:

id: ID de la entidad.
Ejemplo de solicitud:

   ```shell
   GET /entity/urn:ngsi-ld:AirQualityObserved:001
   ```
Ejemplo de respuesta:

   ```shell
   [
    {
        "_id": "648fc482be94140227adb397",
        "recvTime": "2023-06-19T02:59:14.544Z",
        "recvTimeTs": 1687143554544,
        "address": "{\"address\":{\"streetAddress\":\"Urquiza, S2000 Rosario, Santa Fe\",\"addressLocality\":\"Rosario\",\"addressRegion\":\"Provincia de Santa Fe, Argentina\"}}",
        "pm25": "39.95",
        "pm1": "23.10",
        "reliability": "0.31",
        "pm10": "96.78",
        "temperature": "7.8",
        "location": "{\"coordinates\":[-32.9421,-60.6393]}",
        "dataProvider": "Respirar",
        "ownerId": "urn:ngsi-ld:user001",
        "TimeInstant": "2023-06-19T02:59:14.520Z"
    },
    {
        "_id": "648e05c6be94140227adb390",
        "recvTime": "2023-06-17T19:13:10.647Z",
        "recvTimeTs": 1687029190647,
        "address": "{\"address\":{\"streetAddress\":\"Urquiza, S2000 Rosario, Santa Fe\",\"addressLocality\":\"Rosario\",\"addressRegion\":\"Provincia de Santa Fe, Argentina\"}}",
        "pm25": "null",
        "pm1": "null",
        "reliability": "null",
        "temperature": "null",
        "pm10": "null",
        "location": "{\"coordinates\":[-32.9421,-60.6393]}",
        "dataProvider": "Respirar",
        "ownerId": "urn:ngsi-ld:user001",
        "TimeInstant": "2023-06-17T19:13:10.556Z"
    }
   ]
   ```

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún problema, tienes alguna pregunta o tienes alguna sugerencia de mejora, por favor sigue los pasos a continuación:

Revisa la sección de Issues en este repositorio para verificar si el problema o la sugerencia ya han sido reportados o discutidos. Si es así, siéntete libre de agregar comentarios relevantes o votar por el problema.
Si no encuentras un problema o sugerencia similar, crea un nuevo Issue haciendo clic en el botón "New Issue" en la página de Issues.
Proporciona una descripción clara y concisa del problema o la sugerencia. Si es relevante, incluye pasos o ejemplos para reproducir el problema.
Si tienes una solución o una implementación propuesta, puedes crear una rama en tu repositorio y enviar una solicitud de extracción (Pull Request) para que sea revisada y considerada para su incorporación.
Sé respetuoso con los demás colaboradores y mantén un ambiente colaborativo y positivo.
¡Gracias por tu interés en contribuir a este proyecto! Tus contribuciones son valiosas para mejorar el proyecto y hacerlo aún mejor.

Recuerda seguir las políticas y directrices de contribución específicas del repositorio si las hay.

Si tienes alguna pregunta, no dudes en preguntar. ¡Esperamos ver tus contribuciones pronto!

¡Anímate a contribuir y hacer crecer el proyecto en GitHub!

## Licencia
Este proyecto está bajo la licencia MIT.