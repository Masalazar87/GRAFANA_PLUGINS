import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataGrupalchiller } from 'components/variables';
import alarmsStyles from 'styles/alarmsStyles';

const dataGrupalchiller = (data: PanelData, options: SimpleOptions): DataGrupalchiller => {  
    console.log('data: ', data);
    console.log('options: ', options);

    let LEAVE_CHILL_TEMP = data.series.find(({ name }) => name?.includes('DATA.LEAVE_CHILL_TEMP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let RET_CHILL_TEMP = data.series.find(({ name }) => name?.includes('DATA.RET_CHILL_TEMP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let CHI_AMPS = data.series.find(({ name }) => name?.includes('DATA.CHI_AMPS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let CHILL_RUN = data.series.find(({ name }) => name?.includes('DATA.CHILL_RUN.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let CHILL_ALARM = data.series.find(({ name }) => name?.includes('DATA.CHILL_ALARM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS1_COMP_RUN_ST = data.series.find(({ name }) => name?.includes('DATA.SYS1_COMP_RUN_ST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS2_COMP_RUN_ST = data.series.find(({ name }) => name?.includes('DATA.SYS2_COMP_RUN_ST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS1_OIL_TEMP = data.series.find(({ name }) => name?.includes('DATA.SYS1_OIL_TEMP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS2_OIL_TEMP = data.series.find(({ name }) => name?.includes('DATA.SYS2_OIL_TEMP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS1_SUC_PRESS = data.series.find(({ name }) => name?.includes('DATA.SYS1_SUC_PRESS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS2_SUC_PRESS = data.series.find(({ name }) => name?.includes('DATA.SYS2_SUC_PRESS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS1_DESC_PRESS = data.series.find(({ name }) => name?.includes('DATA.SYS1_DESC_PRESS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //let SYS1_OPER_COD = data.series.find(({ name }) => name?.includes('DATA.SYS1_OPER_COD.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let SYS2_OPER_COD = data.series.find(({ name }) => name?.includes('DATA.SYS1_OPER_COD.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    let SYS2_DESC_PRESS = data.series.find(({ name }) => name?.includes('DATA.SYS2_DESC_PRESS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS1_TOTAL_RUN_HOURS = data.series.find(({ name }) => name?.includes('DATA.SYS1_TOTAL_RUN_HOURS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS2_TOTAL_RUN_HOURS = data.series.find(({ name }) => name?.includes('DATA.SYS2_TOTAL_RUN_HOURS.VALUE'))?.fields[1].state?.calcs   
    ?.lastNotNull;    

    let grupalchiller: DataGrupalchiller = {
    DatosGenerales: {
        IdEquipo: options.nombre,   
        TempSuministro: 0,
        TempRetorno: 0,
        Corriente: 0,
    },
    Compresor1: {
        Estado: '',
        TempAceite: 0,
        PSuccion: 0,
        PDescarga: 0,
        HFunc: 0,
    },
    Compresor2: {
        Estado: '',
        TempAceite: 0,
        PSuccion: 0,
        PDescarga: 0,
        HFunc: 0,
    },
    Indicadores: {
        Señal: '',
        Switch: '',
        Orden: '',
        Alarma: '',
    },
}

grupalchiller.DatosGenerales.TempSuministro = Number.parseFloat(LEAVE_CHILL_TEMP?.toFixed(2));
grupalchiller.DatosGenerales.TempRetorno = Number.parseFloat(RET_CHILL_TEMP?.toFixed(2));
grupalchiller.DatosGenerales.Corriente =  Number.parseFloat(CHI_AMPS?.toFixed(2));

grupalchiller.Compresor1.Estado = SYS1_COMP_RUN_ST === 1? 'ON' : 'OFF';
grupalchiller.Compresor1.TempAceite = Number.parseFloat(SYS1_OIL_TEMP?.toFixed(2));
grupalchiller.Compresor1.PSuccion = Number.parseFloat(SYS1_SUC_PRESS?.toFixed(2));
grupalchiller.Compresor1.PDescarga = Number.parseFloat(SYS1_DESC_PRESS?.toFixed(2));
grupalchiller.Compresor1.HFunc = Number.parseFloat(SYS1_TOTAL_RUN_HOURS?.toFixed(2));

grupalchiller.Compresor2.Estado = SYS2_COMP_RUN_ST === 1? 'ON' : 'OFF';
grupalchiller.Compresor2.TempAceite = Number.parseFloat(SYS2_OIL_TEMP?.toFixed(2));
grupalchiller.Compresor2.PSuccion = Number.parseFloat(SYS2_SUC_PRESS?.toFixed(2));
grupalchiller.Compresor2.PDescarga = Number.parseFloat(SYS2_DESC_PRESS?.toFixed(2));
grupalchiller.Compresor2.HFunc = Number.parseFloat(SYS2_TOTAL_RUN_HOURS?.toFixed(2));

grupalchiller.Indicadores.Señal = CHILL_RUN === 1? alarmsStyles.on : alarmsStyles.off;
//grupalchiller.Indicadores.Switch = 
grupalchiller.Indicadores.Orden = grupalchiller.Indicadores.Señal
grupalchiller.Indicadores.Alarma =  CHILL_ALARM === 1? alarmsStyles.on1 : alarmsStyles.off;

    console.log(grupalchiller);

    return grupalchiller;

};

export default dataGrupalchiller;