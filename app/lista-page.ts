
import {
    Frame,
    Page,
    NavigatedData,
    fromObject,
    Dialogs
} from '@nativescript/core';

import {
    pokemones,
    cargarPokemones
} from './pokemon';

let cargaCorrecta = false;

// Cargar Pokemon y actualizar pantalla
export async function onNavigatingTo(args: NavigatedData) {

    const pagina = args.object as Page;

    try {

        cargarPokemones();

        cargaCorrecta = true;

        pagina.bindingContext = fromObject({
            pokemones: pokemones,
            total: 'Pokemon registrados: ' + pokemones.length
        });

    } catch (error) {

        cargaCorrecta = false;

        console.log('Error al cargar JSON:', error);

        await Dialogs.alert({
            title: 'Error de lectura',
            message: 'No se pudieron cargar los Pokemon guardados.',
            okButtonText: 'Aceptar'
        });
    }
}

// Abrir formulario
export async function abrirFormulario() {

    if (!cargaCorrecta) {

        await Dialogs.alert({
            title: 'No disponible',
            message: 'Primero debe cargarse el archivo JSON.',
            okButtonText: 'Aceptar'
        });

        return;
    }

    Frame.topmost().navigate('formulario-page');
}
