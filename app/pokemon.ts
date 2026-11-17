
import { ObservableArray } from '@nativescript/core';

export interface Pokemon {
    nombre: string;
    tipo: string;
    nivel: number;
}

// Lista donde se guardan los Pokemon
export const pokemones = new ObservableArray<Pokemon>([]);

// Funcion para agregar un Pokemon
export function agregarPokemon(
    nombre: string,
    tipo: string,
    nivel: number
): void {

    pokemones.push({
        nombre: nombre,
        tipo: tipo,
        nivel: nivel
    });

}
