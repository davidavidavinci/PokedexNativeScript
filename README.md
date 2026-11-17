
# Pokedex - NativeScript

## Descripción

Aplicación móvil desarrollada utilizando
NativeScript y TypeScript.

Permite registrar Pokémon y consultar
los registros desde una interfaz móvil.

## Integrantes
- David Chang Castañeda
- Windell Urroz Cortes
- Enzo Bejarano Mejias


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

## Instalacion
1. Instalar Node.js, JDK y Android SDK.
2. Instalar NativeScript CLI:

   npm install -g nativescript

3. Instalar dependencias del proyecto:

   npm install

4. Verificar el entorno:

   ns doctor android

## Ejecucion
1. Iniciar un emulador Android.
2. Ejecutar:

   ns run android

## Estructura
- app.ts: inicio de la aplicacion
- app-root.xml: pantalla inicial
- pokemon.ts: modelo y lista de Pokemon
- lista-page.xml: interfaz del listado
- lista-page.ts: logica del listado
- formulario-page.xml: formulario
- formulario-page.ts: validaciones y registro

## Funcionalidades
- Registro de Pokemon
- Listado dinamico
- Navegacion entre dos pantallas
- Validacion de campos
- Validacion de niveles
- Control de nombres duplicados
- Contador de Pokemon

## Almacenamiento de datos

La aplicacion utiliza un archivo pokemones.json
para almacenar los Pokemon registrados.

El archivo se guarda en el almacenamiento
privado de la aplicacion mediante NativeScript.

Al iniciar la aplicacion, los registros se
cargan automaticamente desde el JSON.

## Limitaciones

- Los datos se almacenan localmente.
- No se utiliza base de datos ni API REST.
- Los datos no se sincronizan entre dispositivos.
- Al desinstalar la aplicacion se pueden perder
  los registros guardados.
