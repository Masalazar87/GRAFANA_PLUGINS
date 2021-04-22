import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'nombre',
      name: 'ID EQUIPO',
      description: 'Nombre del chiller',
      //description: 'Description of panel option',
      //defaultValue: 'Default value of text input option',
    })
    .addTextInput({
      path: 'fase',
      name: 'FASE',
      description: 'Fase en dónde está el chiller',
    })
    .addTextInput({
      path: 'sistema',
      name: 'SISTEMA',
      description: 'Sistema en dónde está el chiller',
    })
    .addTextInput({
      path: 'marca',
      name: 'MARCA',
      description: 'Marca del chiller',
    })
    .addTextInput({
      path: 'modelo',
      name: 'MODELO',
      description: 'Modelo del chiller',
    })
    .addTextInput({
      path: 'ubicacion',
      name: 'UBICACION',
      description: 'Ubicación del chiller',
    })
});
