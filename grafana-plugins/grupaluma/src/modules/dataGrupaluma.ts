import { PanelData, InterpolateFunction} from '@grafana/data';
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
    let EVAP_FAN_SPEED = data.series.find(({ name }) => name?.includes('DATA.EVAP_FAN_SPEED.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;

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

    //VALVULAS SIS1
    let S1UMA_ST = [];
    let R1UMA_ST = [];
    for (let i = 1; i <= 12; i++) {
    S1UMA_ST[i] = data.series.find(({ name }) => name?.includes('DATA.S1UM' + i + '_S.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
    R1UMA_ST[i] = data.series.find(({ name }) => name?.includes('DATA.R1UM' + i + '_S.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
    if (S1UMA_ST[i] === null || S1UMA_ST[i] ===0){
        S1UMA_ST[i] = 'OFF';
    } else {
        if (S1UMA_ST[i] === 1){
        S1UMA_ST[i] = 'ON';
        }
    }

   if (R1UMA_ST[i] === null || R1UMA_ST[i] ===0){
    R1UMA_ST[i] = 'OFF';
} else {
    if (R1UMA_ST[i] === 1){
    R1UMA_ST[i] = 'ON';
    }
}
}  
    //VALVULAS SIS2
    let S2UMA_ST = [];
    let R2UMA_ST = [];
    for (let i = 1; i <= 12; i++) {
    S2UMA_ST[i] = data.series.find(({ name }) => name?.includes('DATA.S2UM' + i + '_S.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
    R2UMA_ST[i] = data.series.find(({ name }) => name?.includes('DATA.R2UM' + i + '_S.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
    if (S2UMA_ST[i] === null || S2UMA_ST[i] ===0){
        S2UMA_ST[i] = 'OFF';
    } else {
        if (S2UMA_ST[i] === 1){
        S2UMA_ST[i] = 'ON';
        }
    }

    if (R2UMA_ST[i] === null || R2UMA_ST[i] ===0){
    R2UMA_ST[i] = 'OFF';
    } else {
    if (R2UMA_ST[i] === 1){
    R2UMA_ST[i] = 'ON';
    }
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
        HorasFunc: 0,
        EstadoFan: '',
        PorcFuncFan: 0,
    },
    Valvulas: {
        S1ValvSum: '',
        R1ValvRet: '',
        S2ValvSum: '',
        R2ValvRet: '',
    },
    Indicadores:{
        Estado: estadosStyles.off,
        Alarma: estadosStyles.off,
        Mant: estadosStyles.off,
    },
}

//INTERPOLACION DE VARIABLES
let variableNombre = replaceVariables('');
grupaluma.DatosGenerales.Nombre = variableNombre !==''? variableNombre: options.nombre;

    //PARAMETROS 
    grupaluma.Parametros.TempSum = Number.parseFloat(DELI_AIR_TEMP?.toFixed(2));
    grupaluma.Parametros.TempRet = Number.parseFloat(ROOM_TEMP?.toFixed(2));
    grupaluma.Parametros.TempRoom = Number.parseFloat(ROOM_TEMP?.toFixed(2));
    grupaluma.Parametros.HumRel = Number.parseFloat(ROOM_REL_HUM?.toFixed(2));
    grupaluma.Parametros.EstadoValv = COLD_WAT_VALV === 1? 'ON' : 'OFF';
    grupaluma.Parametros.HorasFunc = Number.parseFloat(UNIT_RUN_ALARM?.toFixed(2));
    grupaluma.Parametros.EstadoFan = SYS_ON === 1? 'ON' : 'OFF';
    grupaluma.Parametros.PorcFuncFan = Number.parseFloat(EVAP_FAN_SPEED?.toFixed(2));
    
    //VALVULAS
    grupaluma.Valvulas.S1ValvSum = S1UMA_ST[1] || S1UMA_ST[2] || S1UMA_ST[3] || S1UMA_ST[4] || S1UMA_ST[5] || S1UMA_ST[6]
                                || S1UMA_ST[7] || S1UMA_ST[8] || S1UMA_ST[9] || S1UMA_ST[10] || S1UMA_ST[11] || S1UMA_ST[12];
    grupaluma.Valvulas.R1ValvRet = R1UMA_ST[1] || R1UMA_ST[2] || R1UMA_ST[3] || R1UMA_ST[4] || R1UMA_ST[5] || R1UMA_ST[6]
                                || R1UMA_ST[7] || R1UMA_ST[8] || R1UMA_ST[9] || R1UMA_ST[10] || R1UMA_ST[11] || R1UMA_ST[12];
    grupaluma.Valvulas.S2ValvSum = S2UMA_ST[1] || S2UMA_ST[2] || S2UMA_ST[3] || S2UMA_ST[4] || S2UMA_ST[5] || S2UMA_ST[6]
                                || S2UMA_ST[7] || S2UMA_ST[8] || S2UMA_ST[9] || S2UMA_ST[10] || S2UMA_ST[11] || S2UMA_ST[12];
    grupaluma.Valvulas.R2ValvRet = R2UMA_ST[1] || R2UMA_ST[2] || R2UMA_ST[3] || R2UMA_ST[4] || R2UMA_ST[5] || R2UMA_ST[6]
                                || R2UMA_ST[7] || R2UMA_ST[8] || R2UMA_ST[9] || R2UMA_ST[10] || R2UMA_ST[11] || R2UMA_ST[12];
      
    //ESTADOS Y ALARMAS
    grupaluma.Indicadores.Estado = SYS_ON ===1? estadosStyles.on : estadosStyles.off;
    grupaluma.Indicadores.Alarma = UNIT_ALARM ===1? estadosStyles.alarma : estadosStyles.off; 
    
    if (UNIT_ALARM ===1 || UNIT_RUN_ALARM ===1 || FILTER_ALARM  ===1 || FLOODING_ALARM  ===1 || HEAT_OVER_ALARM  ===1 || 
        HUMIDIFIER_ALARM  ===1 || HUM_RUN_HOURS  ===1|| LOSS_OF_AIR  ===1|| SMOKE_FIRE_ALARM  ===1){
            grupaluma.Indicadores.Alarma = estadosStyles.alarma}
        else {  
            grupaluma.Indicadores.Alarma = estadosStyles.off}
    
    console.log(grupaluma);

    return grupaluma;

};

export default dataGrupaluma;
