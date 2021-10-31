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
  
    let INPUT_VOLTAGE = data.series.find(({ name }) => name?.includes('DATA.INPUT_VOLTAGE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_VOLTAGE = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_VOLTAGE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let BATTERY_VOLTAGE = data.series.find(({ name }) => name?.includes('DATA.BATTERY_VOLTAGE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ESTIMATED_MINUTES_REMAINING = data.series.find(({ name }) => name?.includes('DATA.ESTIMATED_MINUTES_REMAINING.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ESTIMATED_CHARGE_REMAINING  = data.series.find(({ name }) => name?.includes('DATA.ESTIMATED_CHARGE_REMAINING.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_CURRENT  = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_CURRENT.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_POWER  = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_POWER.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ALARMS_PRESENT  = data.series.find(({ name }) => name?.includes('DATA.ALARMS_PRESENT.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let BYPASS_POWER  = data.series.find(({ name }) => name?.includes('DATA.BYPASS_POWER.VALUE'))?.fields[1].state?.calcs
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
        InVolt: 0,
        OutVolt: 0,
        VBateria: 0,
    },
    Alarmas: {
        Presente: modoControlStyles.SinConexion,
        VEntrada: modoControlStyles.SinConexion,
        VSalida: modoControlStyles.SinConexion,
        Bypass: modoControlStyles.SinConexion,
        },

    Parametros: {
        VBateria: 0,
        MinEstimados: 0,
        CargaEstimada: 0,
        InVolt: 0,
        OutVolt: 0,
        CorrienteOut: 0,
        PotenciaOut: 0,
        PorcenCarga: 0,
    },
}

//INTERPOLACION DE VARIABLES

let variableNombre = replaceVariables('$EQUIPO')
ups.DatosGenerales.Nombre = variableNombre !==''? variableNombre: options.nombre

//PARAMETROS
ups.Principal.InVolt = Number.parseFloat(INPUT_VOLTAGE?.toFixed(2));
ups.Principal.OutVolt = Number.parseFloat(OUTPUT_VOLTAGE?.toFixed(2));
ups.Parametros.InVolt = ups.Principal.InVolt;
ups.Parametros.OutVolt = ups.Principal.OutVolt;
ups.Parametros.MinEstimados = Number.parseFloat(ESTIMATED_MINUTES_REMAINING?.toFixed(2));
ups.Parametros.CargaEstimada = Number.parseFloat(ESTIMATED_CHARGE_REMAINING?.toFixed(2));

//CALCULOS
let CorrienteOut = (OUTPUT_CURRENT) / 10;
if (OUTPUT_CURRENT !== undefined) {
   ups.Parametros.CorrienteOut = Number.parseFloat(CorrienteOut?.toFixed(2));
}
let PotenciaOut = (OUTPUT_POWER)/1000;
if (OUTPUT_CURRENT !== undefined) {
   ups.Parametros.PotenciaOut = Number.parseFloat(PotenciaOut?.toFixed(2));
}
let VBateria = BATTERY_VOLTAGE / 10;
if (BATTERY_VOLTAGE !== undefined) {
   ups.Principal.VBateria = ups.Parametros.VBateria = Number.parseFloat(VBateria?.toFixed(2));
}
let PorcenCarga = (OUTPUT_POWER * 100 / 20) / 1000;
if (OUTPUT_CURRENT !== undefined) {
    ups.Parametros.PorcenCarga = Number.parseFloat(PorcenCarga?.toFixed(2));
 }

//ESTADOS
ups.Principal.Estado = (INPUT_VOLTAGE >=200 && OUTPUT_VOLTAGE >=200)? 'ENCENDIDO' : 'APAGADO';
ups.Principal.Estado_class = (INPUT_VOLTAGE >=200 && OUTPUT_VOLTAGE >=200)? estadoStyles.ok : estadoStyles.sinConexion;
ups.Principal.Botón = (INPUT_VOLTAGE >=200 && OUTPUT_VOLTAGE >=200)? modoControlStyles.On : estadoStyles.sinConexion;

//ALARMAS
ups.Alarmas.Presente = ALARMS_PRESENT === 1? alarmsStyles.on : alarmsStyles.off;
ups.Alarmas.Bypass = BYPASS_POWER === 1? alarmsStyles.on : alarmsStyles.off;
ups.Alarmas.VEntrada = INPUT_VOLTAGE >=200? estadoStyles.ok : estadoStyles.sinConexion
ups.Alarmas.VSalida = OUTPUT_VOLTAGE >=200? estadoStyles.ok : estadoStyles.sinConexion

console.log(ups);
return ups;
};

export default dataUps;