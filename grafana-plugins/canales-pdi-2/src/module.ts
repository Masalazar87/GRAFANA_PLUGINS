import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'nombre1',
      name: 'ID EQUIPO',
      //description: 'Description of panel option',
      //defaultValue: 'Default value of text input option',
    })

    .addTextInput({
      path: 'marca',
      name: 'MARCA',
      //description: 'Description of panel option',
      //defaultValue: 'Default value of text input option',
    })
});
