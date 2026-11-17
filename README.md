
# Pokedex - NativeScript

## Descripción

Aplicación móvil desarrollada utilizando
NativeScript y TypeScript.

Permite registrar Pokémon y consultar
los registros desde una interfaz móvil.

## Herramientas utilizadas

- NativeScript
- TypeScript
- XML
- Visual Studio Code
- Android Studio

## Estructura del proyecto

app/
  app.ts
  app-root.xml
  pokemon.ts
  lista-page.xml
  lista-page.ts
  formulario-page.xml
  formulario-page.ts

## Instalación

Instalar Node.js, JDK y Android SDK.

Instalar NativeScript:

npm install -g nativescript

Descargar el proyecto e instalar dependencias:

npm install

Verificar el entorno:

ns doctor android

## Ejecución

Iniciar el emulador Android.

Ejecutar:

ns run android

## Funcionalidades

- Registrar Pokémon
- Consultar Pokémon registrados
- Validar los campos del formulario
- Validar niveles entre 1 y 100
- Navegar entre pantallas
- Mostrar registros dinámicamente

## Funcionamiento

La pantalla principal muestra los Pokémon
mediante ListView.

La pantalla del formulario permite ingresar
nombre, tipo y nivel.

Los datos se almacenan temporalmente
mediante ObservableArray.

## Limitaciones

Los datos no son persistentes.
Al reiniciar la aplicación, los registros
pueden perderse.

No se utiliza una base de datos ni API REST.
