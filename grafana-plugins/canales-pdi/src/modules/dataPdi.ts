import { PanelData,InterpolateFunction } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataPdi } from 'components/variables';
import estadosStyles from 'styles/estadosStyles';

const dataPdi = (data: PanelData, options: SimpleOptions,replaceVariables:InterpolateFunction): DataPdi => {  
    console.log('data: ', data);
    console.log('options: ', options);
    console.log(replaceVariables);
    
// ESTADOS
let GEN_ALM = data.series.find(({ name }) => name?.includes('DATA.GEN_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
let MODBUS_ST = data.series.find(({ name }) => name?.includes('DATA.MODBUS_ST.VALUE'))?.fields[1].state?.calcs?.lastNotNull

//------------------------------------POTENCIA KVA P1------------------------------//
let KVA_1_CH1 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_1_CH2 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_1_CH3 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH3.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_1_CH4 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH4.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_1_CH5 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH5.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_1_CH6 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH6.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_1_CH7 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH7.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_1_CH8 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH8.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_1_CH9 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH9.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_1_CH10 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH10.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_1_CH11 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH11.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_1_CH12 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH12.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_1_CH13 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH13.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_1_CH14 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH14.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_1_CH15 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH15.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;





 //------------------------------------POTENCIA KVA P2------------------------------//
let KVA_2_CH1 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_2_CH2 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_2_CH3 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH3.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;

 //------------------------------------ENERGIA KW/H P1 ------------------------------//

let KWH_1_CH1 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH2 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH3 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH3.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH4 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH4.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH5 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH5.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH6 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH6.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH7 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH7.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH8 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH8.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH9 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH9.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH10 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH10.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH11 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH11.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH12 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH12.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH13 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH13.VALUE'))?.fields[1].state?.calcs
?.lastNotNull
let KWH_1_CH14 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH14.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH15 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH15.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;



 //------------------------------------ENERGIA KW/H P2 ------------------------------//

let KWH_2_CH1 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_2_CH2 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_2_CH3 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH3.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;

 //------------------------------------DATOS PRINCIPALES------------------------------//
 //let IN1_AB_VOL = data.series.find(({ name }) => name?.includes('DATA.IN1_AB_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //let IN1_BC_VOL = data.series.find(({ name }) => name?.includes('DATA.IN1_BC_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //let IN1_CA_VOL= data.series.find(({ name }) => name?.includes('DATA.IN1_CA_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 let OUT1_AB_VOL= data.series.find(({ name }) => name?.includes('DATA.OUT1_AB_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 let OUT1_BC_VOL = data.series.find(({ name }) => name?.includes('DATA.OUT1_BC_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 let OUT1_CA_VOL = data.series.find(({ name }) => name?.includes('DATA.OUT1_CA_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //let OUT1_A_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_A_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //let OUT1_B_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_B_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //let OUT1_C_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_C_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //let NEUT_CUR = data.series.find(({ name }) => name?.includes('DATA.NEUT_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //let OUT1_A_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_A_COS_FI.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //let OUT1_B_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_B_COS_FI.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //let OUT1_C_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_C_COS_FI.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  

let pdi: DataPdi = {
    DatosGenerales: {
        Nombre:'',
    },
    Estado:{
        Status: estadosStyles.off,
        Status_ON: estadosStyles.off,
        Alarma:'',
    },
    Panel1_kva:{
        CH1: 0, CH2: 0, CH3: 0, CH4: 0, CH5: 0, CH6: 0, CH7: 0, CH8: 0, CH9: 0, CH10: 0, CH11: 0,
        CH12: 0, CH13: 0, CH14: 0, CH15: 0, CH16: 0, CH17: 0, CH18: 0, CH19: 0, CH20: 0, CH21: 0, CH22: 0,
        CH23: 0, CH24: 0, CH25: 0, CH26: 0, CH27: 0, CH28: 0, CH29: 0, CH30: 0, CH31: 0, CH32: 0, CH33: 0,
        CH34: 0, CH35: 0, CH36: 0, CH37: 0, CH38: 0, CH39: 0, CH40: 0, CH41: 0, CH42: 0, 
    },
    Panel1_kwh: {
        CH1: 0, CH2: 0, CH3: 0, CH4: 0, CH5: 0, CH6: 0, CH7: 0, CH8: 0, CH9: 0, CH10: 0, CH11: 0,
        CH12: 0, CH13: 0, CH14: 0, CH15: 0, CH16: 0, CH17: 0, CH18: 0, CH19: 0, CH20: 0, CH21: 0, CH22: 0,
        CH23: 0, CH24: 0, CH25: 0, CH26: 0, CH27: 0, CH28: 0, CH29: 0, CH30: 0, CH31: 0, CH32: 0, CH33: 0,
        CH34: 0, CH35: 0, CH36: 0, CH37: 0, CH38: 0, CH39: 0, CH40: 0, CH41: 0, CH42: 0, 
    },
    Panel1_Amps: {
        CH1: 0, CH2: 0, CH3: 0, CH4: 0, CH5: 0, CH6: 0, CH7: 0, CH8: 0, CH9: 0, CH10: 0, CH11: 0,
        CH12: 0, CH13: 0, CH14: 0, CH15: 0, CH16: 0, CH17: 0, CH18: 0, CH19: 0, CH20: 0, CH21: 0, CH22: 0,
        CH23: 0, CH24: 0, CH25: 0, CH26: 0, CH27: 0, CH28: 0, CH29: 0, CH30: 0, CH31: 0, CH32: 0, CH33: 0,
        CH34: 0, CH35: 0, CH36: 0, CH37: 0, CH38: 0, CH39: 0, CH40: 0, CH41: 0, CH42: 0, 
    },
    Panel2_kva: {
        CH1: 0, CH2: 0, CH3: 0,
    },
    Panel2_kwh: {
        CH1: 0, CH2: 0, CH3: 0,
    },
    Panel2_Amps: {
        CH1: 0, CH2: 0, CH3: 0,
    },
}


//INTERPOLACION DE VARIABLES
let variableNombre = replaceVariables('$EQUIPO')
pdi.DatosGenerales.Nombre = variableNombre !==''? variableNombre: options.nombre

//DATOS P1 POTENCIA KVA----------------------------------
pdi.Panel1_kva.CH1 = Number.parseFloat(KVA_1_CH1?.toFixed(2));
pdi.Panel1_kva.CH2 = Number.parseFloat(KVA_1_CH2?.toFixed(2));
pdi.Panel1_kva.CH3 = Number.parseFloat(KVA_1_CH3?.toFixed(2));
pdi.Panel1_kva.CH4 = Number.parseFloat(KVA_1_CH4?.toFixed(2));
pdi.Panel1_kva.CH5 = Number.parseFloat(KVA_1_CH5?.toFixed(2));
pdi.Panel1_kva.CH6 = Number.parseFloat(KVA_1_CH6?.toFixed(2));
pdi.Panel1_kva.CH7 = Number.parseFloat(KVA_1_CH7?.toFixed(2));
pdi.Panel1_kva.CH8 = Number.parseFloat(KVA_1_CH8?.toFixed(2));
pdi.Panel1_kva.CH9 = Number.parseFloat(KVA_1_CH9?.toFixed(2));
pdi.Panel1_kva.CH10 = Number.parseFloat(KVA_1_CH10?.toFixed(2));
pdi.Panel1_kva.CH11 = Number.parseFloat(KVA_1_CH11?.toFixed(2));
pdi.Panel1_kva.CH12 = Number.parseFloat(KVA_1_CH12?.toFixed(2));
pdi.Panel1_kva.CH13 = Number.parseFloat(KVA_1_CH13?.toFixed(2));
pdi.Panel1_kva.CH14 = Number.parseFloat(KVA_1_CH14?.toFixed(2));
pdi.Panel1_kva.CH15 = Number.parseFloat(KVA_1_CH15?.toFixed(2));

//DATOS P1 ENERGIA KWH-----------------------------------
pdi.Panel1_kwh.CH1 = Number.parseFloat(KWH_1_CH1?.toFixed(2));
pdi.Panel1_kwh.CH2 = Number.parseFloat(KWH_1_CH2?.toFixed(2));
pdi.Panel1_kwh.CH3 = Number.parseFloat(KWH_1_CH3?.toFixed(2));
pdi.Panel1_kwh.CH4 = Number.parseFloat(KWH_1_CH4?.toFixed(2));
pdi.Panel1_kwh.CH5 = Number.parseFloat(KWH_1_CH5?.toFixed(2));
pdi.Panel1_kwh.CH6 = Number.parseFloat(KWH_1_CH6?.toFixed(2));
pdi.Panel1_kwh.CH7 = Number.parseFloat(KWH_1_CH7?.toFixed(2));
pdi.Panel1_kwh.CH8 = Number.parseFloat(KWH_1_CH8?.toFixed(2));
pdi.Panel1_kwh.CH9 = Number.parseFloat(KWH_1_CH9?.toFixed(2));
pdi.Panel1_kwh.CH10 = Number.parseFloat(KWH_1_CH10?.toFixed(2));
pdi.Panel1_kwh.CH11 = Number.parseFloat(KWH_1_CH11?.toFixed(2));
pdi.Panel1_kwh.CH12 = Number.parseFloat(KWH_1_CH12?.toFixed(2));
pdi.Panel1_kwh.CH13 = Number.parseFloat(KWH_1_CH13?.toFixed(2));
pdi.Panel1_kwh.CH14 = Number.parseFloat(KWH_1_CH14?.toFixed(2));
pdi.Panel1_kwh.CH15 = Number.parseFloat(KWH_1_CH15?.toFixed(2));

//CALCULOS CORRIENTE PANEL 1-------------------------------------
let Ap1CH1 = (KVA_1_CH1*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH1 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH1 = Number.parseFloat(Ap1CH1.toFixed(2));
    }
let Ap1CH2 = (KVA_1_CH2*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH2 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH2 = Number.parseFloat(Ap1CH2.toFixed(2));
    }
let Ap1CH3 = (KVA_1_CH3*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH3 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH3 = Number.parseFloat(Ap1CH3.toFixed(2));
    }
let Ap1CH4 = (KVA_1_CH4*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH1 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH4 = Number.parseFloat(Ap1CH4.toFixed(2));
    }
let Ap1CH5 = (KVA_1_CH5*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH2 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH5 = Number.parseFloat(Ap1CH5.toFixed(2));
    }
let Ap1CH6 = (KVA_1_CH6*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH3 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH6 = Number.parseFloat(Ap1CH6.toFixed(2));
    }
let Ap1CH7 = (KVA_1_CH7*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH1 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH7 = Number.parseFloat(Ap1CH7.toFixed(2));
    }
let Ap1CH8 = (KVA_1_CH8*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH2 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH8 = Number.parseFloat(Ap1CH8.toFixed(2));
    }
let Ap1CH9 = (KVA_1_CH9*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH9 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH9 = Number.parseFloat(Ap1CH9.toFixed(2));
    }
let Ap1CH10 = (KVA_1_CH10*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH10 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH10 = Number.parseFloat(Ap1CH10.toFixed(2));
    }
let Ap1CH11 = (KVA_1_CH11*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH11 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH11 = Number.parseFloat(Ap1CH11.toFixed(2));
    }
let Ap1CH12 = (KVA_1_CH12*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH12 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH12 = Number.parseFloat(Ap1CH12.toFixed(2));
    }
let Ap1CH13 = (KVA_1_CH4*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH13 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH13 = Number.parseFloat(Ap1CH13.toFixed(2));
    }
let Ap1CH14 = (KVA_1_CH5*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH14 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH14 = Number.parseFloat(Ap1CH14.toFixed(2));
    }
let Ap1CH15 = (KVA_1_CH6*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH15 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH15 = Number.parseFloat(Ap1CH15.toFixed(2));
    }





//DATOS P2 POTENCIA KVA----------------------------------
pdi.Panel2_kva.CH1 = Number.parseFloat(KVA_2_CH1?.toFixed(2));
pdi.Panel2_kva.CH2 = Number.parseFloat(KVA_2_CH2?.toFixed(2));
pdi.Panel2_kva.CH3 = Number.parseFloat(KVA_2_CH3?.toFixed(2));
    
//DATOS P2 ENERGIA KWH-----------------------------------
pdi.Panel2_kwh.CH1 = Number.parseFloat(KWH_2_CH1?.toFixed(2));
pdi.Panel2_kwh.CH2 = Number.parseFloat(KWH_2_CH2?.toFixed(2));
pdi.Panel2_kwh.CH3 = Number.parseFloat(KWH_2_CH3?.toFixed(2));
    
    
//CALCULOS CORRIENTE PANEL 2 -------------------------------------
let Ap2CH1 = (KVA_2_CH1*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_2_CH1 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel2_Amps.CH1 = Number.parseFloat(Ap2CH1.toFixed(2));
    }
let Ap2CH2 = (KVA_1_CH2*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH2 !== undefined && OUT1_BC_VOL !== undefined) {
    pdi.Panel2_Amps.CH2 = Number.parseFloat(Ap2CH2.toFixed(2));
    }
let Ap2CH3 = (KVA_1_CH3*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH3 !== undefined && OUT1_CA_VOL !== undefined) {
    pdi.Panel2_Amps.CH3 = Number.parseFloat(Ap2CH3.toFixed(2));
    }

//ESTADOS
pdi.Estado.Alarma = GEN_ALM === 1? estadosStyles.on : estadosStyles.off;
pdi.Estado.Status = MODBUS_ST  === 1? estadosStyles.off : estadosStyles.on1;
pdi.Estado.Status_ON = MODBUS_ST  === 1? estadosStyles.off : estadosStyles.on2;

console.log(pdi);

return pdi;

};

export default dataPdi;