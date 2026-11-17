
import {
    Frame,
    Page,
    TextField,
    EventData,
    Dialogs
} from '@nativescript/core';

import {
    agregarPokemon,
    existePokemon
} from './pokemon';

// Guardar Pokemon
export async function guardarPokemon(args: EventData) {

    const pagina = args.object.page as Page;

    const campoNombre =
        pagina.getViewById<TextField>('campoNombre');

    const campoTipo =
        pagina.getViewById<TextField>('campoTipo');

    const campoNivel =
        pagina.getViewById<TextField>('campoNivel');

    const nombre = (campoNombre.text || '').trim();

    const tipo = (campoTipo.text || '').trim();

    const textoNivel = (campoNivel.text || '').trim();

    // Validar campos vacios
    if (nombre === '' ||
        tipo === '' ||
        textoNivel === '') {

        await Dialogs.alert({
            title: 'Datos incompletos',
            message: 'Debe completar todos los campos.',
            okButtonText: 'Aceptar'
        });

        return;
    }

    // Validar duplicados
    if (existePokemon(nombre)) {

        await Dialogs.alert({
            title: 'Pokemon duplicado',
            message: 'Este Pokemon ya esta registrado.',
            okButtonText: 'Aceptar'
        });

        return;
    }

    // Validar nivel
    const nivel = Number(textoNivel);

    if (!Number.isInteger(nivel) ||
        nivel < 1 ||
        nivel > 100) {

        await Dialogs.alert({
            title: 'Nivel incorrecto',
            message: 'El nivel debe estar entre 1 y 100.',
            okButtonText: 'Aceptar'
        });

        return;
    }

    // Guardar Pokemon en JSON
    try {

        agregarPokemon(nombre, tipo, nivel);

        await Dialogs.alert({
            title: 'Registro exitoso',
            message: nombre + ' fue guardado en JSON.',
            okButtonText: 'Aceptar'
        });

        Frame.topmost().goBack();

    } catch (error) {

        console.log('Error al guardar JSON:', error);

        await Dialogs.alert({
            title: 'Error al guardar',
            message: 'No se pudo guardar el Pokemon.',
            okButtonText: 'Aceptar'
        });
    }
}

// Cancelar
export function cancelar() {

    Frame.topmost().goBack();
}
