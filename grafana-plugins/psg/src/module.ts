import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder
  .addTextInput({
    path: 'fase',
    name: 'FASE',
    description: 'Fase en donde está el ups',
  })
  .addTextInput({
    path: 'sistema',
    name: 'SISTEMA',
    description: 'Sistema en donde está el ups',
  })
  .addTextInput({
    path: 'marca',
    name: 'MARCA',
    description: 'Marca del ups',
  })
  .addTextInput({
    path: 'modelo',
    name: 'MODELO',
    description: 'Modelo del ups',
  })
  .addTextInput({
    path: 'ubicacion',
    name: 'UBICACION',
    description: 'Ubicación del ups',
  });
});

