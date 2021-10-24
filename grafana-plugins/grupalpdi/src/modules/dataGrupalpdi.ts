import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataGrupalpdi } from 'components/variables';
import indicadoresStyles from 'styles/indicadoresStyles';

const dataGrupalpdi = (data: PanelData, options: SimpleOptions): DataGrupalpdi => {  
    console.log('data: ', data);
    console.log('options: ', options);


    //let COMM_ALM = data.series.find(({ name }) => name?.includes('DATA.COMM_ALM.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let DOOR_OPEN_ALM = data.series.find(({ name }) => name?.includes('DATA.DOOR_OPEN_ALMMM_ALM.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    let GEN_ALARM = data.series.find(({ name }) => name?.includes('DATA.GEN_ALARM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let IN1_AB_VOL = data.series.find(({ name }) => name?.includes('DATA.IN1_AB_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let IN1_BC_VOL = data.series.find(({ name }) => name?.includes('DATA.IN1_BC_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let IN1_CA_VOL = data.series.find(({ name }) => name?.includes('DATA.IN1_CA_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
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
    let MODBUS_ST = data.series.find(({ name }) => name?.includes('DATA.MODBUS_ST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //let MV = data.series.find(({ name }) => name?.includes('DATA.MV.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let NEUT_CUR = data.series.find(({ name }) => name?.includes('DATA.NEUT_CUR.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;    
    let OUT1_AB_VOL = data.series.find(({ name }) => name?.includes('DATA.OUT1_AB_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUT1_BC_VOL = data.series.find(({ name }) => name?.includes('DATA.OUT1_BC_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUT1_CA_VOL = data.series.find(({ name }) => name?.includes('DATA.OUT1_CA_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //let OUT1_A_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_A_CUR.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let OUT1_B_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_B_CUR.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let OUT1_C_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_C_CUR.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let OUT1_A_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_A_COS_FI.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let OUT1_B_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_B_COS_FI.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let OUT1_C_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_C_COS_FI.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let OUT1_KWH = data.series.find(({ name }) => name?.includes('DATA.OUT1_KWH.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let OUT1_TOTAL_KVA = data.series.find(({ name }) => name?.includes('DATA.OUT1_TOTAL_KVA.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    let KW = data.series.find(({ name }) => name?.includes('DATA.KW.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
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
        IoR : 0,
        IoS : 0,
        IoT : 0,
        PotR: 0,
        PotS: 0,
        PotT: 0,
        FPR : 0,
        FPS : 0,
        FPT : 0,
    },
    ParametrosP1 : {
        VoutRS : 0,
        VoutST : 0,
        VoutTR : 0,
        IoutR : 0,
        IoutS : 0,
        IoutT : 0,
        PotR: 0,
        PotS: 0,
        PotT: 0,
        FPR : 0,
        FPS : 0,
        FPT : 0,
    },
    ParametrosP2 : {
        VoutRS : 0,
        VoutST : 0,
        VoutTR : 0,
        IoutR : 0,
        IoutS : 0,
        IoutT : 0,
        PotR: 0,
        PotS: 0,
        PotT: 0,
        FPR : 0,
        FPS : 0,
        FPT : 0,
    },
    Indicadores : {
        ModbusST : indicadoresStyles.off,
        Alarma : indicadoresStyles.off,
    },
}

grupalpdi.Indicadores.Alarma = GEN_ALARM === 1? indicadoresStyles.on1 : indicadoresStyles.off;
grupalpdi.Indicadores.ModbusST = MODBUS_ST === 0? indicadoresStyles.on : indicadoresStyles.off;

grupalpdi.ParametrosIn.VinRS = Number.parseFloat(IN1_AB_VOL?.toFixed(2));
grupalpdi.ParametrosIn.VinST = Number.parseFloat(IN1_BC_VOL?.toFixed(2));
grupalpdi.ParametrosIn.VinTR = Number.parseFloat(IN1_CA_VOL?.toFixed(2));
grupalpdi.ParametrosIn.IoR = Number.parseFloat(OUT1_AB_VOL?.toFixed(2));
grupalpdi.ParametrosIn.IoS = Number.parseFloat(OUT1_BC_VOL?.toFixed(2));
grupalpdi.ParametrosIn.IoT = Number.parseFloat(OUT1_CA_VOL?.toFixed(2));
grupalpdi.ParametrosP1.VoutRS = Number.parseFloat(OUT1_AB_VOL?.toFixed(2));
grupalpdi.ParametrosP1.VoutST = Number.parseFloat(OUT1_BC_VOL?.toFixed(2));
grupalpdi.ParametrosP1.VoutTR = Number.parseFloat(OUT1_CA_VOL?.toFixed(2));
grupalpdi.ParametrosP2.VoutRS = Number.parseFloat(OUT1_AB_VOL?.toFixed(2));
grupalpdi.ParametrosP2.VoutST = Number.parseFloat(OUT1_BC_VOL?.toFixed(2));
grupalpdi.ParametrosP2.VoutTR = Number.parseFloat(OUT1_CA_VOL?.toFixed(2));
grupalpdi.ParametrosIn.PotR = Number.parseFloat(KW?.toFixed(2));
    
console.log(grupalpdi);
    return grupalpdi;
};
export default dataGrupalpdi;