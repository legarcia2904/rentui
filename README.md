# Rentui

## Introducción

Rentui es un sitio web para gestionar casas en Renta. <br>
Provee las funcionalidades para acceder a los datos de las casas y de los arrendatarios que publican las ofertas.<br>
El formato de la información es JSON.<br>

## Requisitos:
- Mostrar el mapa de Google Maps con las casas señaladas.
- Mostrar el listado de casas en renta. Con los botones para permitir visualizar, modificar y eliminar una casa.


## Pasos para ejecutar

// Descargar el proyecto (https://github.com/legarcia2904/rentui.git)
git clone 

Conexion a MongoDB<br>
-mongod.exe<br>
-mongo.exe<br>

// Instalar dependencias
npm install
bower install

// Ejecutar la aplicación
npm start

## PETICIONES
GET<br>
localhost:3000/casas  <br>
localhost:3000/arrendadores <br>
localhost:3000/casas?param1=value&param2=value<br>
localhost:3000/arrendadores/:id/casas <br><br>
POST<br>
localhost:3000/casas   <br>
localhost:3000/arrendadores<br><br>
PUT<br>
localhost:3000/casas/:id <br>
localhost:3000/arrendadores/:nombre<br><br>
DELETE<br>
localhost:3000/casas/:id  delete<br>
localhost:3000/arrendadores/:id 
