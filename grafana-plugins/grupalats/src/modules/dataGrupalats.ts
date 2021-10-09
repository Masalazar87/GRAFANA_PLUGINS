import { PanelData} from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataGrupalats } from 'components/variables';
import indicadoresStyles from 'Styles/indicadoresStyles';

const dataGrupalats = (data: PanelData, options: SimpleOptions): DataGrupalats => {  
    console.log('data: ', data);
    console.log('options: ', options);

    //let AUT_TRANS_REL = data.series.find(({ name }) => name?.includes('DATA.AUT_TRANS_REL.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    let F1_AVAIL = data.series.find(({ name }) => name?.includes('DATA.F1_AVAIL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let F1_POSIC = data.series.find(({ name }) => name?.includes('DATA.F1_POSIC.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let F2_AVAIL = data.series.find(({ name }) => name?.includes('DATA.F2_AVAIL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let F2_POSIC = data.series.find(({ name }) => name?.includes('DATA.F2_POSIC.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let TOT_TRANS_F1 = data.series.find(({ name }) => name?.includes('DATA.TOT_TRANS_F1.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let TOT_TRANS_F2 = data.series.find(({ name }) => name?.includes('DATA.TOT_TRANS_F2.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let TOT_FAULT = data.series.find(({ name }) => name?.includes('DATA.TOT_FAULT.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let NOT_IN_AUTO = data.series.find(({ name }) => name?.includes('DATA.NOT_IN_AUTO.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let MODBUS_ST = data.series.find(({ name }) => name?.includes('DATA.MODBUS_ST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    

let grupalats: DataGrupalats = {
    DatosGenerales:{
        Nombre: options.nombre,
        Marca: 'GENERAL ELECTRIC', 
    },
    Parametros:{
        Fuente1: '',
        Fuente2: '',
        TotalTransfF1: 0,
        TotalTransfF2: 0,
        TotalFallas: 0,
    },
    Indicadores:{
        PresenciaF1: indicadoresStyles.off,
        PresenciaF2: indicadoresStyles.off,
        ActivaF1: indicadoresStyles.off,
        ActivaF2: indicadoresStyles.off,
        ModbusST: indicadoresStyles.off,
        Estado: indicadoresStyles.off,
    },

}
    //PARAMETROS
    grupalats.Parametros.Fuente1 = F1_AVAIL === 1? 'ON' : 'OFF';
    grupalats.Parametros.Fuente2 = F2_AVAIL === 1? 'ON' : 'OFF';
    grupalats.Parametros.TotalTransfF1 = Number.parseFloat(TOT_TRANS_F1?.toFixed(2));
    grupalats.Parametros.TotalTransfF2 = Number.parseFloat(TOT_TRANS_F2?.toFixed(2));
    grupalats.Parametros.TotalFallas = Number.parseFloat(TOT_FAULT?.toFixed(2));

    //INDICADORES Y ALARMAS
    grupalats.Indicadores.PresenciaF1 = F1_AVAIL === 1? indicadoresStyles.on : indicadoresStyles.off;
    grupalats.Indicadores.PresenciaF2 = F2_AVAIL === 1? indicadoresStyles.on1 : indicadoresStyles.off;
    grupalats.Indicadores.ActivaF1 = F1_POSIC === 1? indicadoresStyles.on : indicadoresStyles.off;
    grupalats.Indicadores.ActivaF2 = F2_POSIC === 1? indicadoresStyles.on1 : indicadoresStyles.off;
    grupalats.Indicadores.ModbusST = MODBUS_ST === 0? indicadoresStyles.on : indicadoresStyles.on2;
    grupalats.Indicadores.Estado = NOT_IN_AUTO === 0? indicadoresStyles.on : indicadoresStyles.off;


    console.log(grupalats);

    return grupalats;

};

export default dataGrupalats;