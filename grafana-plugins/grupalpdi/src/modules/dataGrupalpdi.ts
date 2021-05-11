import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataGrupalpdi } from 'components/variables';
import indicadoresStyles from 'styles/indicadoresStyles';

const dataGrupalpdi = (data: PanelData, options: SimpleOptions): DataGrupalpdi => {  
    console.log('data: ', data);
    console.log('options: ', options);


let grupalpdi: DataGrupalpdi = {
        DatosGenerales: {
        Nombre: options.nombre,
    },
    
    ParametrosIn : {
        VinRS : 0,
        VinST : 0,
        VinTR : 0,
        IoR : 0,
        IoS : 0,
        IoT : 0,
        PotR: 0,
        PotS: 0,
        PotT: 0,
        FPR : 0,
        FPS : 0,
        FPT : 0,
    },
    
    ParametrosP1 : {
        VoutRS : 0,
        VoutST : 0,
        VoutTR : 0,
        IoutR : 0,
        IoutS : 0,
        IoutT : 0,
        PotR: 0,
        PotS: 0,
        PotT: 0,
        FPR : 0,
        FPS : 0,
        FPT : 0,
    },
    
    ParametrosP2 : {
        VoutRS : 0,
        VoutST : 0,
        VoutTR : 0,
        IoutR : 0,
        IoutS : 0,
        IoutT : 0,
        PotR: 0,
        PotS: 0,
        PotT: 0,
        FPR : 0,
        FPS : 0,
        FPT : 0,
    },
    
    Indicadores : {
        ModbusST : indicadoresStyles.off,
        Alarma : indicadoresStyles.off,
    },
}

console.log(grupalpdi);

    return grupalpdi;

};

export default dataGrupalpdi;