import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataGrupaluma } from 'components/variables';
import estadosStyles from 'styles/estadosStyles';

const dataGrupaluma = (data: PanelData, options: SimpleOptions): DataGrupaluma => {  
    console.log('data: ', data);
    console.log('options: ', options);

    //variables de parametros
    let DELI_AIR_TEMP = data.series.find(({ name }) => name?.includes('DATA.DELI_AIR_TEMP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ROOM_TEMP = data.series.find(({ name }) => name?.includes('DATA.ROOM_TEMP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ROOM_REL_HUM = data.series.find(({ name }) => name?.includes('DATA.ROOM_REL_HUM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let COLD_WAT_VALV = data.series.find(({ name }) => name?.includes('DATA.COLD_WAT_VALV.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let UNIT_RUN_ALARM = data.series.find(({ name }) => name?.includes('DATA.UNIT_RUN_ALARM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS_ON = data.series.find(({ name }) => name?.includes('DATA.SYS_ON.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let UNIT_ALARM = data.series.find(({ name }) => name?.includes('DATA.UNIT_ALARM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;

    //variables de alarmas
    //let SMOKE_FIRE_ALARM = data.series.find(({ name }) => name?.includes('DATA.SMOKE_FIRE_ALARM.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let FLOODING_ALARM = data.series.find(({ name }) => name?.includes('DATA.FLOODING_ALARM.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let HEAT_OVER_ALARM = data.series.find(({ name }) => name?.includes('DATA.HEAT_OVER_ALARM.VALUE'))?.fields[1].state?.calcs
    // ?.lastNotNull;
    //let LOSS_OF_AIR = data.series.find(({ name }) => name?.includes('DATA.LOSS_OF_AIR.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;

          
let grupaluma: DataGrupaluma = {
    DatosGenerales: {
        Nombre: options.nombre,
    },
    Parametros: {
        TempSum: 0,
        TempRet: 0,
        TempRoom: 0,
        HumRel: 0,
        EstadoValv: '',
        OpenValvSum: 0,
        OpernValvRet: 0,
        HorasFunc: 0,
        EstadoFan: '',
        PorcFuncFan: 0,
    },
    Indicadores:{
        Estado: estadosStyles.off,
        Alarma: estadosStyles.off,
        Mant: estadosStyles.off,
    },
}

    grupaluma.Parametros.TempSum = Number.parseFloat(DELI_AIR_TEMP?.toFixed(2));
    grupaluma.Parametros.TempRet = Number.parseFloat(ROOM_TEMP?.toFixed(2));
    grupaluma.Parametros.TempRoom = Number.parseFloat(ROOM_TEMP?.toFixed(2));
    grupaluma.Parametros.HumRel = Number.parseFloat(ROOM_REL_HUM?.toFixed(2));
    grupaluma.Parametros.EstadoValv = COLD_WAT_VALV === 1? 'ON' : 'OFF';
    grupaluma.Parametros.HorasFunc = Number.parseFloat(UNIT_RUN_ALARM?.toFixed(2));
    grupaluma.Parametros.EstadoFan = SYS_ON === 1? 'ON' : 'OFF';
    grupaluma.Parametros.PorcFuncFan = Number.parseFloat(COLD_WAT_VALV?.toFixed(2));
    grupaluma.Parametros.OpenValvSum = Number.parseFloat(COLD_WAT_VALV?.toFixed(2));

    //ESTADOS Y ALARMAS
    grupaluma.Indicadores.Estado = SYS_ON ===1? estadosStyles.on : estadosStyles.off;
    grupaluma.Indicadores.Alarma = UNIT_ALARM ===1? estadosStyles.alarma : estadosStyles.off; 
    console.log(grupaluma);

    return grupaluma;

};

export default dataGrupaluma;

