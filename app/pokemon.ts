
import {
    ObservableArray,
    knownFolders,
    File,
    path
} from '@nativescript/core';

// Datos que tiene cada Pokemon
export interface Pokemon {
    nombre: string;
    tipo: string;
    nivel: number;
    detalle: string;
}

// Lista de Pokemon
export const pokemones = new ObservableArray<Pokemon>([]);

// Ubicacion del archivo JSON
const carpeta = knownFolders.documents();

const ruta = path.join(
    carpeta.path,
    'pokemones.json'
);

// Evitar cargar varias veces
let datosCargados = false;

// Cargar los Pokemon guardados
export function cargarPokemones(): void {

    if (datosCargados) {
        return;
    }

    if (File.exists(ruta)) {

        const archivo = File.fromPath(ruta);

        const contenido = archivo.readTextSync();

        const datos = JSON.parse(contenido);

        if (!Array.isArray(datos)) {
            throw new Error('El archivo JSON no es valido.');
        }

        // Validar los datos antes de cargarlos
        for (let i = 0; i < datos.length; i++) {

            const p = datos[i];

            if (!p ||
                typeof p.nombre !== 'string' ||
                typeof p.tipo !== 'string' ||
                !Number.isInteger(p.nivel) ||
                p.nivel < 1 ||
                p.nivel > 100) {

                throw new Error(
                    'El JSON contiene un Pokemon invalido.'
                );
            }
        }

        for (let i = 0; i < datos.length; i++) {

            const p = datos[i];

            pokemones.push({
                nombre: p.nombre,
                tipo: p.tipo,
                nivel: p.nivel,
                detalle: 'Tipo: ' + p.tipo +
                         ' | Nivel: ' + p.nivel
            });
        }
    }

    datosCargados = true;
}

// Comprobar Pokemon duplicado
export function existePokemon(nombre: string): boolean {

    for (let i = 0; i < pokemones.length; i++) {

        const p = pokemones.getItem(i);

        if (p.nombre.toLowerCase() ===
            nombre.toLowerCase()) {

            return true;
        }
    }

    return false;
}

// Registrar Pokemon y guardar en JSON
export function agregarPokemon(
    nombre: string,
    tipo: string,
    nivel: number
): void {

    // Crear lista con los registros actuales
    const datos: Pokemon[] = [];

    for (let i = 0; i < pokemones.length; i++) {

        datos.push(pokemones.getItem(i));
    }

    // Crear el nuevo Pokemon
    const nuevoPokemon: Pokemon = {
        nombre: nombre,
        tipo: tipo,
        nivel: nivel,
        detalle: 'Tipo: ' + tipo +
                 ' | Nivel: ' + nivel
    };

    datos.push(nuevoPokemon);

    // Convertir los datos a JSON
    const contenido = JSON.stringify(datos, null, 4);

    // Guardar primero en el archivo
    const archivo = File.fromPath(ruta);

    archivo.writeTextSync(contenido);

    // Actualizar la lista solo si se guardo
    pokemones.push(nuevoPokemon);
}
