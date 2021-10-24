import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'nombre',
      name: 'ID EQUIPO',
      description: 'Nombre del generador',
    })
    //.addTextInput({
     // path: 'marca',
      //name: 'MARCA',
      //description: 'Marca del generador',
    //});
});