import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataGrupalpdi } from 'components/variables';
import indicadoresStyles from 'styles/indicadoresStyles';

const dataGrupalpdi = (data: PanelData, options: SimpleOptions): DataGrupalpdi => {  
    console.log('data: ', data);
    console.log('options: ', options);

    let MODBUS_ST = data.series.find(({ name }) => name?.includes('DATA.MODBUS_ST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let GEN_ALARM = data.series.find(({ name }) => name?.includes('DATA.GEN_ALARM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let IN1_AB_VOL = data.series.find(({ name }) => name?.includes('DATA.IN1_AB_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull/10;
    let IN1_BC_VOL = data.series.find(({ name }) => name?.includes('DATA.IN1_BC_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull/10;
    let IN1_CA_VOL = data.series.find(({ name }) => name?.includes('DATA.IN1_CA_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull/10;
    let OUT1_AB_VOL = data.series.find(({ name }) => name?.includes('DATA.OUT1_AB_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull/10;
    let OUT1_BC_VOL = data.series.find(({ name }) => name?.includes('DATA.OUT1_BC_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull/10;
    let OUT1_CA_VOL = data.series.find(({ name }) => name?.includes('DATA.OUT1_CA_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull/10;
    let OUT1_A_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_A_CUR.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull/10;
    let OUT1_B_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_B_CUR.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull/10;
    let OUT1_C_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_C_CUR.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull/10;
    let OUT1_A_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_A_COS_FI.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUT1_B_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_B_COS_FI.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUT1_C_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_C_COS_FI.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUT1_KWH = data.series.find(({ name }) => name?.includes('DATA.OUT1_KWH.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUT1_TOTAL_KVA = data.series.find(({ name }) => name?.includes('DATA.OUT1_TOTAL_KVA.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull/10;
    let NEUT_CUR = data.series.find(({ name }) => name?.includes('DATA.NEUT_CUR.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull/10; 
    //let KW = data.series.find(({ name }) => name?.includes('DATA.KW.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let COMM_ALM = data.series.find(({ name }) => name?.includes('DATA.COMM_ALM.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let DOOR_OPEN_ALM = data.series.find(({ name }) => name?.includes('DATA.DOOR_OPEN_ALMMM_ALM.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let IN1_VOL_HI_ALM = data.series.find(({ name }) => name?.includes('DATA.IN1_VOL_HI_ALM.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let IN1_VOL_LOW_ALM = data.series.find(({ name }) => name?.includes('DATA.IN1_VOL_LOW_ALM.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let IN2_VOL_HI_ALM = data.series.find(({ name }) => name?.includes('DATA.IN1_VOL_HI_ALM.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let IN2_VOL_LOW_ALM = data.series.find(({ name }) => name?.includes('DATA.IN1_VOL_LOW_ALM.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let OUT1_VOL_HI_ALM = data.series.find(({ name }) => name?.includes('DATA.OUT1_VOL_HI_ALM.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let OUT1_VOL_LOW_ALM = data.series.find(({ name }) => name?.includes('DATA.OUT1_VOL_LOW_ALM.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let OUT2_VOL_HI_ALM = data.series.find(({ name }) => name?.includes('DATA.OUT2_VOL_HI_ALM.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let OUT2_VOL_LOW_ALM = data.series.find(({ name }) => name?.includes('DATA.OUT2_VOL_LOW_ALM.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let MAIN_TRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.MAIN_TRIP_ALM.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let MC = data.series.find(({ name }) => name?.includes('DATA.MC.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let MV = data.series.find(({ name }) => name?.includes('DATA.MV.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;      
    //let KWH = data.series.find(({ name }) => name?.includes('DATA.KWH.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;


let grupalpdi: DataGrupalpdi = {
        DatosGenerales: {
        Nombre: options.nombre,
    },
    ParametrosIn : {
        VinRS : 0,
        VinST : 0,
        VinTR : 0,
        VinRn : 0,
        VinSn : 0,
        VinTn : 0,
    },
    ParametrosOut : {
        VoutRS : 0,
        VoutST : 0,
        VoutTR : 0,
        VoutRn : 0,
        VoutSn : 0,
        VoutTn : 0,
        IoutR : 0,
        IoutS : 0,
        IoutT : 0,
        IoutProm: 0,
        PotR: 0,
        PotS: 0,
        PotT: 0,
        PotTotal: 0,
        KvaR: 0,
        KvaS: 0,
        KvaT: 0,
        KVAprom: 0,
        FPR : 0,
        FPS : 0,
        FPT : 0,
        FPprom: 0,
        KWH: 0,
        KWHR: 0,
        KWHS: 0,
        KWHT: 0,
        INEUTRO: 0,
    },
    Indicadores : {
        ModbusST : indicadoresStyles.off,
        Alarma : indicadoresStyles.off,
    },
}

//ESTADOS Y ALARMAS
grupalpdi.Indicadores.Alarma = GEN_ALARM === 1? indicadoresStyles.on1 : indicadoresStyles.off;
grupalpdi.Indicadores.ModbusST = MODBUS_ST === 0? indicadoresStyles.on : indicadoresStyles.off;

//VOLTAJES Y CORRIENTES DE ENTRADA
grupalpdi.ParametrosIn.VinRS = Number.parseFloat(IN1_AB_VOL?.toFixed(2));
grupalpdi.ParametrosIn.VinST = Number.parseFloat(IN1_BC_VOL?.toFixed(2));
grupalpdi.ParametrosIn.VinTR = Number.parseFloat(IN1_CA_VOL?.toFixed(2));
//grupalpdi.ParametrosIn.IoR = Number.parseFloat(OUT1_A_CUR?.toFixed(2));
//grupalpdi.ParametrosIn.IoS = Number.parseFloat(OUT1_B_CUR?.toFixed(2));
//grupalpdi.ParametrosIn.IoT = Number.parseFloat(OUT1_C_CUR?.toFixed(2));

//VOLTAJES Y CORRIENTES DE SALIDA
grupalpdi.ParametrosOut.VoutRS = Number.parseFloat(OUT1_AB_VOL?.toFixed(2));
grupalpdi.ParametrosOut.VoutST = Number.parseFloat(OUT1_BC_VOL?.toFixed(2));
grupalpdi.ParametrosOut.VoutTR = Number.parseFloat(OUT1_CA_VOL?.toFixed(2));
grupalpdi.ParametrosOut.IoutR = Number.parseFloat(OUT1_A_CUR?.toFixed(2));
grupalpdi.ParametrosOut.IoutS = Number.parseFloat(OUT1_B_CUR?.toFixed(2));
grupalpdi.ParametrosOut.IoutT = Number.parseFloat(OUT1_C_CUR?.toFixed(2));
grupalpdi.ParametrosOut.INEUTRO = Number.parseFloat(NEUT_CUR?.toFixed(2));

//FACTOR DE POTENCIA Y ENERGÍA
grupalpdi.ParametrosOut.FPR = Number.parseFloat(OUT1_A_COS_FI?.toFixed(2));
grupalpdi.ParametrosOut.FPS = Number.parseFloat(OUT1_B_COS_FI?.toFixed(2));
grupalpdi.ParametrosOut.FPT = Number.parseFloat(OUT1_C_COS_FI?.toFixed(2));
//grupalpdi.ParametrosOut.PotTotal = Number.parseFloat(KW?.toFixed(2));
grupalpdi.ParametrosOut.KWH = Number.parseFloat(OUT1_KWH?.toFixed(2));
grupalpdi.ParametrosOut.KVAprom = Number.parseFloat(OUT1_TOTAL_KVA?.toFixed(2));

//CALCULOS
let IoutProm = (OUT1_A_CUR + OUT1_B_CUR + OUT1_C_CUR) / 3;
if (OUT1_A_CUR !== undefined && OUT1_B_CUR !== undefined && OUT1_C_CUR !==undefined) {
   grupalpdi.ParametrosOut.IoutProm = Number.parseFloat(IoutProm?.toFixed(2));
}
let FPprom = (OUT1_A_COS_FI + OUT1_B_COS_FI + OUT1_C_COS_FI) / 3;
if (OUT1_A_COS_FI !== undefined && OUT1_B_COS_FI !== undefined && OUT1_C_COS_FI !==undefined) {
   grupalpdi.ParametrosOut.FPprom = Number.parseFloat(FPprom?.toFixed(2));
}
let VinRn = (IN1_AB_VOL) / 1.732;
if (IN1_AB_VOL !== undefined) {
   grupalpdi.ParametrosIn.VinRn = Number.parseFloat(VinRn?.toFixed(2));
}
let VinSn = (IN1_BC_VOL) / 1.732;
if (IN1_BC_VOL !== undefined) {
   grupalpdi.ParametrosIn.VinSn = Number.parseFloat(VinSn?.toFixed(2));
}
let VinTn = (IN1_CA_VOL) / 1.732;
if (IN1_CA_VOL !== undefined) {
   grupalpdi.ParametrosIn.VinTn = Number.parseFloat(VinTn?.toFixed(2));
}
let VoutRn = (OUT1_AB_VOL) / 1.732;
if (OUT1_AB_VOL !== undefined) {
   grupalpdi.ParametrosOut.VoutRn = Number.parseFloat(VoutRn?.toFixed(2));
}
let VoutSn = (OUT1_BC_VOL) / 1.732;
if (OUT1_BC_VOL !== undefined) {
   grupalpdi.ParametrosOut.VoutSn = Number.parseFloat(VoutSn?.toFixed(2));
}
let VoutTn = (OUT1_CA_VOL) / 1.732;
if (OUT1_CA_VOL !== undefined) {
   grupalpdi.ParametrosOut.VoutTn = Number.parseFloat(VoutTn?.toFixed(2));
}
let PotR = (VoutRn * OUT1_A_CUR * OUT1_A_COS_FI) / 1000
if (VoutRn !== undefined && OUT1_A_CUR !== undefined && OUT1_A_COS_FI !== undefined) {
   grupalpdi.ParametrosOut.PotR = Number.parseFloat(PotR?.toFixed(2));
}
let PotS = (VoutSn * OUT1_B_CUR * OUT1_B_COS_FI) / 1000
if (VoutRn !== undefined && OUT1_B_CUR !== undefined && OUT1_B_COS_FI !== undefined) {
   grupalpdi.ParametrosOut.PotS = Number.parseFloat(PotS?.toFixed(2));
}
let PotT = (VoutTn * OUT1_C_CUR * OUT1_C_COS_FI) / 1000
if (VoutTn !== undefined && OUT1_C_CUR !== undefined && OUT1_C_COS_FI !== undefined) {
   grupalpdi.ParametrosOut.PotT = Number.parseFloat(PotT?.toFixed(2));
}

let PotTotal = (PotR + PotS + PotT)
   grupalpdi.ParametrosOut.PotTotal = Number.parseFloat(PotTotal?.toFixed(2));

let KvaR = (VoutRn * OUT1_A_CUR) / 1000
if (VoutRn !== undefined && OUT1_A_CUR !== undefined) {
   grupalpdi.ParametrosOut.KvaR = Number.parseFloat(KvaR?.toFixed(2));
}
let KvaS = (VoutSn * OUT1_B_CUR) / 1000
if (VoutSn !== undefined && OUT1_B_CUR !== undefined) {
   grupalpdi.ParametrosOut.KvaS = Number.parseFloat(KvaS?.toFixed(2));
}
let KvaT = (VoutTn * OUT1_C_CUR) / 1000
if (VoutTn !== undefined && OUT1_C_CUR !== undefined) {
   grupalpdi.ParametrosOut.KvaT = Number.parseFloat(KvaT?.toFixed(2));
}

console.log(grupalpdi);
    return grupalpdi;
};
export default dataGrupalpdi;