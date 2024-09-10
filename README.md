# API CRUD con Node.js y MongoDB

Este proyecto es una API creada con Node.js y MongoDB que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre usuarios. La API está construida usando el framework Express para el manejo de las rutas y Mongoose para la conexión y manipulación de datos en MongoDB.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir aplicaciones web y APIs en Node.js.
- **MongoDB**: Base de datos NoSQL para almacenar datos.
- **Mongoose**: Biblioteca para modelar los datos en MongoDB y facilitar la interacción con la base de datos.

## Instalación

1. **Clona el repositorio**:
2. Instala las dependencias:
npm init -y
npm i express mongoose nodemon

3. Configura la base de datos: Asegúrate de tener MongoDB en ejecución y configurado correctamente. La conexión a la base de datos se realiza en el archivo config.js.

4. Ejecuta el servidor
npm run dev


Endpoints
Crear Usuario
Ruta: POST /
Descripción: Crea un nuevo usuario en la base de datos.
Cuerpo de la Solicitud (Request Body):
{
  "name": "Nombre del Usuario",
  "email": "correo@example.com",
  "contrasenia": "contraseña",
  "edad": 30
}



Leer Todos los Usuarios
Ruta: GET /
Descripción: Obtiene una lista de todos los usuarios.
Respuesta: Una lista de usuarios.
Leer Usuario por ID
Ruta: GET /:id
Descripción: Obtiene un usuario específico por su ID.
Respuesta: El usuario con el ID proporcionado.
Actualizar Usuario
Ruta: PUT /:id
Descripción: Actualiza la información de un usuario específico por su ID.
Cuerpo de la Solicitud (Request Body):
{
  "name": "Nuevo Nombre",
  "email": "nuevo_correo@example.com",
  "contrasenia": "nueva_contraseña",
  "edad": 31
}


Eliminar Usuario
Ruta: DELETE /:id
Descripción: Elimina un usuario específico por su ID.
Respuesta: Confirmación de la eliminación.
Ejemplos de Datos de Prueba
Para probar la API, puedes usar herramientas como Postman o Thunder Client en VS Code. Aquí hay algunos ejemplos de datos que puedes enviar:

Crear Usuario:
{
  "name": "Juan Pérez",
  "email": "juan.perez@example.com",
  "contrasenia": "password123",
  "edad": 30
}

