import { PanelData, InterpolateFunction } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataGrupaluma } from 'components/variables';
import estadosStyles from 'styles/estadosStyles';

const dataGrupaluma = (data: PanelData, options: SimpleOptions, replaceVariables:InterpolateFunction): DataGrupaluma => {  
    console.log('data: ', data);
    console.log('options: ', options);
    console.log(replaceVariables);

    //VARIABLES DE PARAMETROS
    let COLD_WAT_VALV = data.series.find(({ name }) => name?.includes('DATA.COLD_WAT_VALV.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let DELI_AIR_TEMP = data.series.find(({ name }) => name?.includes('DATA.DELI_AIR_TEMP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //let EVAP_FAN_SPEED = data.series.find(({ name }) => name?.includes('DATA.EVAP_FAN_SPEED.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;

    let ROOM_REL_HUM = data.series.find(({ name }) => name?.includes('DATA.ROOM_REL_HUM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ROOM_TEMP = data.series.find(({ name }) => name?.includes('DATA.ROOM_TEMP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //let ROOM_TEMP_LIMIT = data.series.find(({ name }) => name?.includes('DATA.ROOM_TEMP_LIMIT.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let SETP_COOL_RET_AIR = data.series.find(({ name }) => name?.includes('DATA.SETP_COOL_RET_AIR.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
     //let SNS_COOL_RET_AIR = data.series.find(({ name }) => name?.includes('DATA.SNS_COOL_RET_AIR.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    let SYS_ON = data.series.find(({ name }) => name?.includes('DATA.SYS_ON.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let UNIT_ALARM = data.series.find(({ name }) => name?.includes('DATA.UNIT_ALARM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let UNIT_RUN_ALARM = data.series.find(({ name }) => name?.includes('DATA.UNIT_RUN_ALARM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  
    //VARIABLES DE ALARMAS
    let FILTER_ALARM = data.series.find(({ name }) => name?.includes('DATA.FILTER_ALARM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let FLOODING_ALARM = data.series.find(({ name }) => name?.includes('DATA.FLOODING_ALARM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let HEAT_OVER_ALARM = data.series.find(({ name }) => name?.includes('DATA.HEAT_OVER_ALARM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let HUMIDIFIER_ALARM = data.series.find(({ name }) => name?.includes('DATA.HUMIDIFIER_ALARM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let HUM_RUN_HOURS = data.series.find(({ name }) => name?.includes('DATA.HUM_RUN_HOURS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let LOSS_OF_AIR = data.series.find(({ name }) => name?.includes('DATA.LOSS_OF_AIR.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SMOKE_FIRE_ALARM = data.series.find(({ name }) => name?.includes('DATA.SMOKE_FIRE_ALARM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;

    //VALVULAS
    /*let SUM12_S = data.series.find(({ name }) => name?.includes('DATA.SUM12_S.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let RET12_S = data.series.find(({ name }) => name?.includes('DATA.RET12_S.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;*/

    let VSUM_ST = [];
    let VRET_ST = [];
    for (let i = 1; i <= 12; i++) {
        VSUM_ST[i] = data.series.find(({ name }) => name?.includes('VSUM_ST_U' + i))?.fields[1].state?.calcs?.lastNotNull;   
        VRET_ST[i] = data.series.find(({ name }) => name?.includes('vRET_ST_U' + i))?.fields[1].state?.calcs?.lastNotNull;   
    if (VSUM_ST[i] === null || VSUM_ST[i] === 0) {
        VSUM_ST[i] = 'OFF';
        }   else {
            VSUM_ST[i] = 'ON';
        } 
        if (VRET_ST[i] === null || VRET_ST[i] === 0) {
            VRET_ST[i] = 'OFF';
            }   else {
                VRET_ST[i] = 'ON';
            }
        } 
        
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
        ValvSum: '',
        ValvRet: '',
        HorasFunc: 0,
        EstadoFan: '',
        PorcFuncFan: 0,
    },
    Valvulas: {
        Sumin:'',
    },
    Indicadores:{
        Estado: estadosStyles.off,
        Alarma: estadosStyles.off,
        Mant: estadosStyles.off,
    },
}
    //PARAMETROS 
    grupaluma.Parametros.TempSum = Number.parseFloat(DELI_AIR_TEMP?.toFixed(2));
    grupaluma.Parametros.TempRet = Number.parseFloat(ROOM_TEMP?.toFixed(2));
    grupaluma.Parametros.TempRoom = Number.parseFloat(ROOM_TEMP?.toFixed(2));
    grupaluma.Parametros.HumRel = Number.parseFloat(ROOM_REL_HUM?.toFixed(2));
    grupaluma.Parametros.EstadoValv = COLD_WAT_VALV === 1? 'ON' : 'OFF';
    grupaluma.Parametros.HorasFunc = Number.parseFloat(UNIT_RUN_ALARM?.toFixed(2));
    grupaluma.Parametros.EstadoFan = SYS_ON === 1? 'ON' : 'OFF';
    grupaluma.Parametros.PorcFuncFan = Number.parseFloat(COLD_WAT_VALV?.toFixed(2));
    
    //ESTADOS Y ALARMAS
    grupaluma.Indicadores.Estado = SYS_ON ===1? estadosStyles.on : estadosStyles.off;
    grupaluma.Indicadores.Alarma = UNIT_ALARM ===1? estadosStyles.alarma : estadosStyles.off; 
    
    if (UNIT_ALARM ===1 || UNIT_RUN_ALARM ===1 || FILTER_ALARM  ===1 || FLOODING_ALARM  ===1 || HEAT_OVER_ALARM  ===1 || 
        HUMIDIFIER_ALARM  ===1 || HUM_RUN_HOURS  ===1|| LOSS_OF_AIR  ===1|| SMOKE_FIRE_ALARM  ===1){
            grupaluma.Indicadores.Alarma = estadosStyles.alarma}
        else {  
            grupaluma.Indicadores.Alarma = estadosStyles.off}
    
    let uma = replaceVariables('$1_UMA_2')
    uma = '$1_UMA_2';
    if (uma = '$1_UMA_2'){
    (grupaluma.Parametros.ValvSum = (VSUM_ST[1])) && (grupaluma.Parametros.ValvRet = (VRET_ST[1]));}
    else{
        (grupaluma.Parametros.ValvSum = 'no') && (grupaluma.Parametros.ValvRet = 'no');}
    
    
     


    console.log(grupaluma);

    return grupaluma;

};

export default dataGrupaluma;

