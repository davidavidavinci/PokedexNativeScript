
import {
    Frame,
    Page,
    TextField,
    NavigatedData,
    alert
} from '@nativescript/core';

import { agregarPokemon } from './pokemon';

let pagina: Page;

export function onNavigatingTo(args: NavigatedData) {
    pagina = args.object as Page;
}

export async function guardarPokemon() {

    const campoNombre =
        pagina.getViewById<TextField>('campoNombre');

    const campoTipo =
        pagina.getViewById<TextField>('campoTipo');

    const campoNivel =
        pagina.getViewById<TextField>('campoNivel');

    const nombre =
        (campoNombre.text || '').trim();

    const tipo =
        (campoTipo.text || '').trim();

    const textoNivel =
        (campoNivel.text || '').trim();

    // Validar que los campos no esten vacios
    if (nombre === '' ||
        tipo === '' ||
        textoNivel === '') {

        await alert('Debe completar todos los campos.');
        return;
    }

    // Convertir el nivel a numero
    const nivel = Number(textoNivel);

    // Validar que el nivel este entre 1 y 100
    if (!Number.isInteger(nivel) ||
        nivel < 1 ||
        nivel > 100) {

        await alert(
            'El nivel debe ser un numero entre 1 y 100.'
        );
        return;
    }

    // Agregar el Pokemon
    agregarPokemon(nombre, tipo, nivel);

    // Mostrar confirmacion
    await alert('Pokemon registrado correctamente.');

    // Regresar a la pantalla principal
    Frame.topmost().goBack();
}

export function cancelar() {
    Frame.topmost().goBack();
}
