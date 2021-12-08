import { SimpleOptions } from 'types';
import { PanelData, InterpolateFunction} from '@grafana/data';
import { DataUps } from 'components/variables';
import modoControlStyles from 'styles/modoControlStyles';
import alarmsStyles from 'styles/alarmsStyles';
import estadoStyles from 'styles/estadoStyles';


const dataUps = (data: PanelData, options:SimpleOptions, replaceVariables:InterpolateFunction): DataUps => {  
    console.log('data: ', data);
    console.log('options: ', options);
    console.log(replaceVariables);
       

    let INPUT_VOLTAGE_MAX = data.series.find(({ name }) => name?.includes('DATA.INPUT_VOLTAGE_MAX.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_VOLTAGE = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_VOLTAGE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let BATTERY_VOLTAGE = data.series.find(({ name }) => name?.includes('DATA.BATTERY_VOLTAGE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let INVERTER_ON_OFF = data.series.find(({ name }) => name?.includes('DATA.INVERTER_ON_OFF.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ESTIMATED_MINUTES_REMAINING = data.series.find(({ name }) => name?.includes('DATA.ESTIMATED_MINUTES_REMAINING.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ESTIMATED_CHARGE_REMAINING  = data.series.find(({ name }) => name?.includes('DATA.ESTIMATED_CHARGE_REMAINING.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let INPUT_VOLTAGE_MIN  = data.series.find(({ name }) => name?.includes('DATA.INPUT_VOLTAGE_MIN.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_CURRENT  = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_CURRENT.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_CURRENT_2  = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_CURRENT_2.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_CURRENT_3  = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_CURRENT_3.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_POWER  = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_POWER.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_POWER_2  = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_POWER_2.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_POWER_3  = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_POWER_3.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_PERCENT_LOAD  = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_PERCENT_LOAD.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_PERCENT_LOAD_2  = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_PERCENT_LOAD_2.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_PERCENT_LOAD_3  = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_PERCENT_LOAD_3.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ALARMS_PRESENT  = data.series.find(({ name }) => name?.includes('DATA.ALARMS_PRESENT.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let BYPASS_ON_OFF  = data.series.find(({ name }) => name?.includes('DATA.BYPASS_ON_OFF.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let RECTIFIER_ON_OFF  = data.series.find(({ name }) => name?.includes('DATA.RECTIFIER_ON_OFF'))?.fields[1].state?.calcs
    ?.lastNotNull;
        
   
let ups: DataUps ={
    DatosGenerales: {
        Nombre: '',
        Fase: 'A',
        Sistema: '1&2',
        Marca: 'GENERAL ELECTRIC',
        Modelo: 'SG-200KVA',
        Ubicacion: 'CUARTOS UPS SIST. 1&2',

    },
    Principal: {
        Estado: '',
        Estado_class: modoControlStyles.SinConexion,
        Botón: modoControlStyles.SinConexion,
        InVolmax: 0,
        OutVolt: 0,
        VBateria: 0,
    },
    Alarmas: {
        Presente: modoControlStyles.SinConexion,
        Inversor: modoControlStyles.SinConexion,
        Bypass: modoControlStyles.SinConexion,
        Rectificador: modoControlStyles.SinConexion
    },
    Parametros: {
        VBateria: 0,
        MinEstimados: 0,
        CargaEstimada: 0,
        InVoltmin: 0,
        InVoltmax: 0,
        CorrienteOut: 0,
        PotenciaOut: 0,
        PorcenCarga1: 0,
        PorcenCarga2: 0,
        PorcenCarga3: 0,
    },
}

//INTERPOLACION DE VARIABLES

let variableNombre = replaceVariables('$EQUIPO')
ups.DatosGenerales.Nombre = variableNombre !==''? variableNombre: options.nombre

//PARAMETROS
ups.Principal.InVolmax = ups.Parametros.InVoltmax = Number.parseFloat(INPUT_VOLTAGE_MAX?.toFixed(2));
ups.Principal.OutVolt = Number.parseFloat(OUTPUT_VOLTAGE?.toFixed(2));
ups.Principal.Estado = INVERTER_ON_OFF === 1? 'ENCENDIDO' : 'APAGADO';
ups.Parametros.MinEstimados = Number.parseFloat(ESTIMATED_MINUTES_REMAINING?.toFixed(2));
ups.Parametros.CargaEstimada = Number.parseFloat(ESTIMATED_CHARGE_REMAINING?.toFixed(2));
ups.Parametros.InVoltmin = Number.parseFloat(INPUT_VOLTAGE_MIN?.toFixed(2)); 
ups.Parametros.PorcenCarga1 = Number.parseFloat(OUTPUT_PERCENT_LOAD?.toFixed(2)); 
ups.Parametros.PorcenCarga2 = Number.parseFloat(OUTPUT_PERCENT_LOAD_2?.toFixed(2)); 
ups.Parametros.PorcenCarga3 = Number.parseFloat(OUTPUT_PERCENT_LOAD_3?.toFixed(2)); 

//CALCULOS
let CorrienteOut = (OUTPUT_CURRENT + OUTPUT_CURRENT_2 + OUTPUT_CURRENT_3) / 30;
if (OUTPUT_CURRENT !== undefined && OUTPUT_CURRENT_2 !== undefined && OUTPUT_CURRENT_3 !== undefined) {
   ups.Parametros.CorrienteOut = Number.parseFloat(CorrienteOut?.toFixed(2));
}
let PotenciaOut = (OUTPUT_POWER + OUTPUT_POWER_2 + OUTPUT_POWER_3)/1000;
if (OUTPUT_POWER !== undefined && OUTPUT_POWER_2 !== undefined && OUTPUT_POWER_3 !== undefined) {
    ups.Parametros.PotenciaOut = Number.parseFloat(PotenciaOut?.toFixed(2));
}
let VBateria = BATTERY_VOLTAGE / 10;
if (BATTERY_VOLTAGE !== undefined) {
   ups.Principal.VBateria = ups.Parametros.VBateria = Number.parseFloat(VBateria?.toFixed(2));
}

//ALARMAS
ups.Alarmas.Presente = ALARMS_PRESENT > 0? alarmsStyles.on : alarmsStyles.off;
ups.Alarmas.Bypass = BYPASS_ON_OFF === 1? alarmsStyles.on : alarmsStyles.off;
ups.Alarmas.Inversor = INVERTER_ON_OFF === 1? modoControlStyles.On : modoControlStyles.SinConexion;
ups.Alarmas.Rectificador = RECTIFIER_ON_OFF === 1? modoControlStyles.On : modoControlStyles.SinConexion;
ups.Principal.Estado_class = INVERTER_ON_OFF === 1? estadoStyles.ok1 : estadoStyles.sinConexion;
ups.Principal.Botón = INVERTER_ON_OFF === 1? modoControlStyles.On : estadoStyles.sinConexion;

console.log(ups);
return ups;
};

export default dataUps;