import { PanelData} from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataGrupalats } from 'components/variables';
//import modoControlStyles from 'styles/modoControlStyles';

const dataGrupalats = (data: PanelData, options: SimpleOptions): DataGrupalats => {  
    console.log('data: ', data);
    console.log('options: ', options);


let grupalats: DataGrupalats = {
    DatosGenerales:{
        Nombre: options.nombre,
        Marca: options.marca, 
    },
    Parametros:{
        Fuente1: '',
        Fuente2: '',
        TotalTransfF1: 0,
        TotalTransfF2: 0,
        TotalFallas: 0,
    },
    Indicadores:{
        PresenciaF1: '',
        PresenciaF2: '',
        ActivaF1: '',
        ActivaF2: '',
        ModbusST: '',
    },

}

    console.log(grupalats);

    return grupalats;

};

export default dataGrupalats;