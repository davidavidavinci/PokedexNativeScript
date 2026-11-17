
import {
    Frame,
    Page,
    NavigatedData,
    fromObject
} from '@nativescript/core';

import { pokemones } from './pokemon';

export function onNavigatingTo(args: NavigatedData) {

    const pagina = args.object as Page;

    pagina.bindingContext = fromObject({
        pokemones: pokemones
    });

}

export function abrirFormulario() {

    Frame.topmost().navigate('formulario-page');

}
