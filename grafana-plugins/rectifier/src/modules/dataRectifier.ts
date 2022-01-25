import { SimpleOptions } from 'types';
import { PanelData, InterpolateFunction } from '@grafana/data';
import { DataRectifier } from 'components/variables';
import alarmsStyles from 'styles/alarmsStyles';

const DataRectifier = (data: PanelData, options:SimpleOptions, replaceVariables:InterpolateFunction): DataRectifier => {  
    console.log('data: ', data);
    console.log('options: ', options);
    console.log(replaceVariables);
       
    let POW_SYS_STAT = data.series.find(({ name }) => name?.includes('DATA.POW_SYS_STAT.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let MAIN_VOL_VALU = data.series.find(({ name }) => name?.includes('DATA.MAIN_VOL_VALU.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let REC_CUR_STAT = data.series.find(({ name }) => name?.includes('DATA.REC_CUR_STAT.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let REC_CUR_ENAB = data.series.find(({ name }) => name?.includes('DATA.REC_CUR_ENAB.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let REC_CUR_VALU  = data.series.find(({ name }) => name?.includes('DATA.REC_CUR_VALU.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let REC_INP_VALU  = data.series.find(({ name }) => name?.includes('DATA.REC_INP_VALU.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let BAT_VOL_STAT  = data.series.find(({ name }) => name?.includes('DATA.BAT_VOL_STAT.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let REC_TEMP_VALU  = data.series.find(({ name }) => name?.includes('DATA.REC_TEMP_VALU.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let BATT_VOL_VALU  = data.series.find(({ name }) => name?.includes('DATA.BATT_VOL_VALU.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
            
let rectifier: DataRectifier ={
    DatosGenerales: {
        Nombre: '',
        Fase: 'A',
        Sistema: '1&2',
        Marca: 'GENERAL ELECTRIC',
        Modelo: 'SG-200KVA',
        Ubicacion: 'C. RECT. SIST. 1&2',
    },
    Principal: {
        EstadoON: '',
        EstadoOFF: '',
        Estado_box: alarmsStyles.off,
        Botón: alarmsStyles.off,
        In_Voltage: 0,
        Out_Current: 0,
        V_Bateria: 0,
        Alarma_box: alarmsStyles.off,
        Alarma: '',
    },
    Alarmas: {
        BatteryStatus: alarmsStyles.off,
        CurrentStatus: alarmsStyles.off,
        CurrentAlarm: alarmsStyles.off,
        WarningAlarm: alarmsStyles.off,
    },
    Parametros: {
        In_Voltage: 0,
        V_Rectifier: 0,
        C_Rectifier: 0,
        V_Battery: 0,
        T_Rectifier: 0,
    },
}

//INTERPOLACION DE VARIABLES
let variableNombre = replaceVariables('$EQUIPO')
rectifier.DatosGenerales.Nombre = variableNombre !==''? variableNombre: options.nombre

//PARAMETROS
rectifier.Principal.In_Voltage = Number.parseFloat(MAIN_VOL_VALU?.toFixed(2));
rectifier.Principal.Out_Current = Number.parseFloat(REC_CUR_VALU?.toFixed(2));
rectifier.Principal.V_Bateria = Number.parseFloat(BATT_VOL_VALU?.toFixed(2));

//PRINCIPAL
rectifier.Parametros.In_Voltage = rectifier.Principal.In_Voltage;
rectifier.Parametros.V_Rectifier = Number.parseFloat(REC_INP_VALU?.toFixed(2));
rectifier.Parametros.C_Rectifier = Number.parseFloat(REC_CUR_VALU?.toFixed(2));
rectifier.Parametros.V_Battery = rectifier.Principal.V_Bateria;
rectifier.Parametros.T_Rectifier = Number.parseFloat(REC_TEMP_VALU?.toFixed(2));

//ESTADOS Y ALARMAS
rectifier.Alarmas.BatteryStatus = BAT_VOL_STAT ===1? alarmsStyles.on1 : alarmsStyles.off,
rectifier.Alarmas.CurrentStatus = REC_CUR_STAT ===1? alarmsStyles.on1 : alarmsStyles.off,
rectifier.Alarmas.CurrentAlarm = REC_CUR_ENAB ===1? alarmsStyles.on1 : alarmsStyles.off,

rectifier.Principal.Estado_box = POW_SYS_STAT ===1? alarmsStyles.on1 : alarmsStyles.off,
rectifier.Principal.Alarma_box = POW_SYS_STAT >=2? alarmsStyles.on2 : '',

rectifier.Principal.EstadoON = POW_SYS_STAT ===1? 'ENCENDIDO' : '',
rectifier.Principal.EstadoOFF = POW_SYS_STAT ===0? 'APAGADO' : '',
rectifier.Principal.Alarma = POW_SYS_STAT >=2? 'ALARMADO': '',
rectifier.Alarmas.WarningAlarm= POW_SYS_STAT >=2? alarmsStyles.on2 : alarmsStyles.off,

console.log(rectifier);
return rectifier;
};

export default DataRectifier;