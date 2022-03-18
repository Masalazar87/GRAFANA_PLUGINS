import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataEcoluz } from 'components/variables';

import estadosStyles from 'styles/estadosStyles';
//import alarmasStyles from 'styles/alarmasStyles';

const dataEcoluz = (data: PanelData, options: SimpleOptions): DataEcoluz => {  
    console.log('data: ', data);
    console.log('options: ', options);

let st_on = estadosStyles.on;
let st_off = estadosStyles.sinconexion;  
let alarm_on = estadosStyles.alarma; 

let VLL_AVG = data.series.find(({ name }) => name?.includes('DATA.VLL_AVG.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let VLL_AB = data.series.find(({ name }) => name?.includes('DATA.VLL_AB.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let VLL_BC = data.series.find(({ name }) => name?.includes('DATA.VLL_BC.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let VLL_CA = data.series.find(({ name }) => name?.includes('DATA.VLL_CA.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let VLN_A = data.series.find(({ name }) => name?.includes('DATA.VLN_A.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let VLN_B = data.series.find(({ name }) => name?.includes('DATA.VLN_B.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let VLN_C = data.series.find(({ name }) => name?.includes('DATA.VLN_C.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let I_AVG = data.series.find(({ name }) => name?.includes('DATA.I_AVG.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let I_A = data.series.find(({ name }) => name?.includes('DATA.I_A.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let I_B = data.series.find(({ name }) => name?.includes('DATA.I_B.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let I_C = data.series.find(({ name }) => name?.includes('DATA.I_C.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let FREQ = data.series.find(({ name }) => name?.includes('DATA.FREQ.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let V_UNB = data.series.find(({ name }) => name?.includes('DATA.V_UNB.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let I_UNB = data.series.find(({ name }) => name?.includes('DATA.I_UNB.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let KW_TOTAL = data.series.find(({ name }) => name?.includes('DATA.KW_TOTAL.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let KVA_TOTAL = data.series.find(({ name }) => name?.includes('DATA.KVA_TOTAL.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let KWH_E = data.series.find(({ name }) => name?.includes('DATA.KWH_E.VALUE'))?.fields[1].state?.calcs?.lastNotNull;


let ecoluz: DataEcoluz = {
    Parametros: {
        Vprom: 0,
        Iprom: 0,
        Frec: 0,
        Vab: 0,
        Vbc: 0,
        Vca: 0,
        Ia: 0,
        Ib: 0,
        Ic: 0,
        Unb_Vol: 0,
        Unb_Curr: 0,
        Pot_active: 0,
        Pot_apparent: 0,
        Energy: 0,
    },
    DatosGenerales: {
        Fase: '',
        Sistema: '',
        Marca: '',
        Modelo: '',
        Ubicacion: '',
    },
    Estados: {
        Estado_equipo: '',
        Estado_box: '',
        Estado_boton: '',
    },
    Alarmas: {
        Falla_A: '',
        Falla_B: '',
        Falla_C: '',
    },
}

//PARAMETROS VOLTAJE
let VOLTAGE_AVG = VLL_AVG / 1000;
ecoluz.Parametros.Vprom = Number.parseFloat(VOLTAGE_AVG?.toFixed(2));
   
let VOLTAGE_AB = VLL_AB / 1000;
ecoluz.Parametros.Vab = Number.parseFloat(VOLTAGE_AB?.toFixed(2));

let VOLTAGE_BC = VLL_BC / 1000;
ecoluz.Parametros.Vbc = Number.parseFloat(VOLTAGE_BC?.toFixed(2));

let VOLTAGE_CA = VLL_CA / 1000;
ecoluz.Parametros.Vca = Number.parseFloat(VOLTAGE_CA?.toFixed(2));

let UNB_VOLTAGE = V_UNB / 1000;
ecoluz.Parametros.Unb_Vol = Number.parseFloat(UNB_VOLTAGE?.toFixed(2));

// PARAMETROS CORRIENTE
ecoluz.Parametros.Iprom = Number.parseFloat(I_AVG?.toFixed(2));
ecoluz.Parametros.Ia = Number.parseFloat(I_A?.toFixed(2));
ecoluz.Parametros.Ib = Number.parseFloat(I_B?.toFixed(2));
ecoluz.Parametros.Ic = Number.parseFloat(I_C?.toFixed(2));
ecoluz.Parametros.Unb_Curr = Number.parseFloat(I_UNB?.toFixed(2));

// PARAMETRO DE FRECUENCIA
let FREQUENCY = FREQ / 10;
ecoluz.Parametros.Frec = Number.parseFloat(FREQUENCY?.toFixed(2));

// PARAMETROS DE POTENCIA Y ENERGIA
ecoluz.Parametros.Pot_active = Number.parseFloat(KW_TOTAL?.toFixed(2));
ecoluz.Parametros.Pot_apparent = Number.parseFloat(KVA_TOTAL?.toFixed(2));
ecoluz.Parametros.Energy = Number.parseFloat(KWH_E?.toFixed(2));

// ESTADO DE EQUIPO
if (VOLTAGE_AVG > 13){
    ecoluz.Estados.Estado_box = st_on;
    ecoluz.Estados.Estado_boton = st_on;
    ecoluz.Estados.Estado_equipo = 'ENCENDIDO';
    } else {
        ecoluz.Estados.Estado_box = st_off;
        ecoluz.Estados.Estado_boton = st_off;
        ecoluz.Estados.Estado_equipo = 'APAGADO';
    }

// ALARMAS
let VOLTAGE_AN = VLN_A / 1000;
if (VOLTAGE_AN < 7.2) {
    ecoluz.Alarmas.Falla_A = alarm_on;
} else {
    ecoluz.Alarmas.Falla_A = st_on;
}

let VOLTAGE_BN = VLN_B / 1000;
if (VOLTAGE_BN < 7.2) {
    ecoluz.Alarmas.Falla_B = alarm_on;
} else {
    ecoluz.Alarmas.Falla_B = st_on;
}

let VOLTAGE_CN = VLN_C / 1000;
if (VOLTAGE_CN < 7.2) {
    ecoluz.Alarmas.Falla_C = alarm_on;
} else {
    ecoluz.Alarmas.Falla_C = st_on;
}


console.log(ecoluz);
return ecoluz;

};

export default dataEcoluz;