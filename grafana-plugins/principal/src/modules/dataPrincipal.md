import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataPrincipal } from 'components/variables';
import estadosStyles from 'styles/estadosStyles';
import alarmasStyles from 'styles/alarmasStyles';

const dataPrincipal = (data: PanelData, options: SimpleOptions): DataPrincipal => {  
    console.log('data: ', data);
    console.log('options: ', options);
//----------------------------------------VARIABLES DE ESTADOS------------------------------------------    
//ESTADOS
let st_on = estadosStyles.on;
let st_off = estadosStyles.sinconexion;
//WARNINGS
let warning_on = alarmasStyles.on1;
let warning_off = alarmasStyles.sinconexion;
//ALARMS
let alarm_on = alarmasStyles.on;
let alarm_off = alarmasStyles.sinconexion;


//--------------------------------------ESTADOS Y ALARMAS DE UMAS---------------------------------------
 //ESTADOS DE UMAS
let st_uma = [];
let al_uma = [];

for (let i = 1; i <= 12; i++) {
st_uma[i] = data.series.find(({ name }) => name?.includes('ST_UMA' + i))?.fields[1].state?.calcs?.lastNotNull;
al_uma[i] = data.series.find(({ name }) => name?.includes('AL_UMA' + i))?.fields[1].state?.calcs?.lastNotNull;

if (st_uma[i] === 1) {
    st_uma[i] = st_on;
    }   else {
    st_uma[i] = st_off;
    }
    if (al_uma[i] === 1) {
        al_uma[i] = alarm_on;
        }   else {
        al_uma[i] = alarm_off;
        }
}

/*let ST_UMA1 = data.series.find(({ name }) => name?.includes('ST_UMA1'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UMA2 = data.series.find(({ name }) => name?.includes('ST_UMA2'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UMA3 = data.series.find(({ name }) => name?.includes('ST_UMA3'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UMA4 = data.series.find(({ name }) => name?.includes('ST_UMA4'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UMA5 = data.series.find(({ name }) => name?.includes('ST_UMA5'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UMA6 = data.series.find(({ name }) => name?.includes('ST_UMA6'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UMA7 = data.series.find(({ name }) => name?.includes('ST_UMA7'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UMA8 = data.series.find(({ name }) => name?.includes('ST_UMA8'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UMA9 = data.series.find(({ name }) => name?.includes('ST_UMA9'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UMA10 = data.series.find(({ name }) => name?.includes('ST_UMA10'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UMA11 = data.series.find(({ name }) => name?.includes('ST_UMA11'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UMA12 = data.series.find(({ name }) => name?.includes('ST_UMA12'))?.fields[1].state?.calcs
?.lastNotNull;*/
//ALARMAS DE UMAS
let AL_UMA1 = data.series.find(({ name }) => name?.includes('AL_UMA1'))?.fields[1].state?.calcs
?.lastNotNull;
let AL_UMA2 = data.series.find(({ name }) => name?.includes('AL_UMA2'))?.fields[1].state?.calcs
?.lastNotNull;
let AL_UMA3 = data.series.find(({ name }) => name?.includes('AL_UMA3'))?.fields[1].state?.calcs
?.lastNotNull;
let AL_UMA4 = data.series.find(({ name }) => name?.includes('AL_UMA4'))?.fields[1].state?.calcs
?.lastNotNull;
let AL_UMA5 = data.series.find(({ name }) => name?.includes('AL_UMA5'))?.fields[1].state?.calcs
?.lastNotNull;
let AL_UMA6 = data.series.find(({ name }) => name?.includes('AL_UMA6'))?.fields[1].state?.calcs
?.lastNotNull;
let AL_UMA7 = data.series.find(({ name }) => name?.includes('AL_UMA7'))?.fields[1].state?.calcs
?.lastNotNull;
let AL_UMA8 = data.series.find(({ name }) => name?.includes('AL_UMA8'))?.fields[1].state?.calcs
?.lastNotNull;
let AL_UMA9 = data.series.find(({ name }) => name?.includes('AL_UMA9'))?.fields[1].state?.calcs
?.lastNotNull;
let AL_UMA10 = data.series.find(({ name }) => name?.includes('AL_UMA10'))?.fields[1].state?.calcs
?.lastNotNull;
let AL_UMA11 = data.series.find(({ name }) => name?.includes('AL_UMA11'))?.fields[1].state?.calcs
?.lastNotNull;
let AL_UMA12 = data.series.find(({ name }) => name?.includes('AL_UMA12'))?.fields[1].state?.calcs
?.lastNotNull;
//TEMP. SUMINISTRO UMAS
let TS_UMA1 = data.series.find(({ name }) => name?.includes('TS_UMA1'))?.fields[1].state?.calcs
?.lastNotNull;
let TS_UMA2 = data.series.find(({ name }) => name?.includes('TS_UMA2'))?.fields[1].state?.calcs
?.lastNotNull;
let TS_UMA3 = data.series.find(({ name }) => name?.includes('TS_UMA3'))?.fields[1].state?.calcs
?.lastNotNull;
let TS_UMA4 = data.series.find(({ name }) => name?.includes('TS_UMA4'))?.fields[1].state?.calcs
?.lastNotNull;
let TS_UMA5 = data.series.find(({ name }) => name?.includes('TS_UMA5'))?.fields[1].state?.calcs
?.lastNotNull;
let TS_UMA6 = data.series.find(({ name }) => name?.includes('TS_UMA6'))?.fields[1].state?.calcs
?.lastNotNull;
let TS_UMA7 = data.series.find(({ name }) => name?.includes('TS_UMA7'))?.fields[1].state?.calcs
?.lastNotNull;
let TS_UMA8 = data.series.find(({ name }) => name?.includes('TS_UMA8'))?.fields[1].state?.calcs
?.lastNotNull;
let TS_UMA9 = data.series.find(({ name }) => name?.includes('TS_UMA9'))?.fields[1].state?.calcs
?.lastNotNull;
let TS_UMA10 = data.series.find(({ name }) => name?.includes('TS_UMA10'))?.fields[1].state?.calcs
?.lastNotNull;
let TS_UMA11 = data.series.find(({ name }) => name?.includes('TS_UMA11'))?.fields[1].state?.calcs
?.lastNotNull;
let TS_UMA12 = data.series.find(({ name }) => name?.includes('TS_UMA12'))?.fields[1].state?.calcs
?.lastNotNull;
//TEMP. RETORNO UMAS
let TR_UMA1 = data.series.find(({ name }) => name?.includes('TR_UMA1'))?.fields[1].state?.calcs
?.lastNotNull;
let TR_UMA2 = data.series.find(({ name }) => name?.includes('TR_UMA2'))?.fields[1].state?.calcs
?.lastNotNull;
let TR_UMA3 = data.series.find(({ name }) => name?.includes('TR_UMA3'))?.fields[1].state?.calcs
?.lastNotNull;
let TR_UMA4 = data.series.find(({ name }) => name?.includes('TR_UMA4'))?.fields[1].state?.calcs
?.lastNotNull;
let TR_UMA5 = data.series.find(({ name }) => name?.includes('TR_UMA5'))?.fields[1].state?.calcs
?.lastNotNull;
let TR_UMA6 = data.series.find(({ name }) => name?.includes('TR_UMA6'))?.fields[1].state?.calcs
?.lastNotNull;
let TR_UMA7 = data.series.find(({ name }) => name?.includes('TR_UMA7'))?.fields[1].state?.calcs
?.lastNotNull;
let TR_UMA8 = data.series.find(({ name }) => name?.includes('TR_UMA8'))?.fields[1].state?.calcs
?.lastNotNull;
let TR_UMA9 = data.series.find(({ name }) => name?.includes('TR_UMA9'))?.fields[1].state?.calcs
?.lastNotNull;
let TR_UMA10 = data.series.find(({ name }) => name?.includes('TR_UMA10'))?.fields[1].state?.calcs
?.lastNotNull;
let TR_UMA11 = data.series.find(({ name }) => name?.includes('TR_UMA11'))?.fields[1].state?.calcs
?.lastNotNull;
let TR_UMA12 = data.series.find(({ name }) => name?.includes('TR_UMA12'))?.fields[1].state?.calcs
?.lastNotNull;
//--------------------------------------------------------------------------------------------------
//---------------------------------------PARAMETROS UPS CHI ----------------------------------------
let VIN_UPS_CHI_1A = data.series.find(({ name }) => name?.includes('VIN_UPS_CHI_1A'))?.fields[1].state?.calcs
?.lastNotNull;
let VOUT_UPS_CHI_1A = data.series.find(({ name }) => name?.includes('VOUT_UPS_CHI_1A'))?.fields[1].state?.calcs
?.lastNotNull;
let IOUT_UPS_CHI_1A = data.series.find(({ name }) => name?.includes('IOUT_UPS_CHI_1A'))?.fields[1].state?.calcs
?.lastNotNull/10;
let LOAD_UPS_CHI_1A = data.series.find(({ name }) => name?.includes('LOAD_UPS_CHI_1A'))?.fields[1].state?.calcs
?.lastNotNull;

let VIN_UPS_CHI_2A = data.series.find(({ name }) => name?.includes('VIN_UPS_CHI_2A'))?.fields[1].state?.calcs
?.lastNotNull;
let VOUT_UPS_CHI_2A = data.series.find(({ name }) => name?.includes('VOUT_UPS_CHI_2A'))?.fields[1].state?.calcs
?.lastNotNull;
let IOUT_UPS_CHI_2A = data.series.find(({ name }) => name?.includes('IOUT_UPS_CHI_2A'))?.fields[1].state?.calcs
?.lastNotNull/10;
let LOAD_UPS_CHI_2A = data.series.find(({ name }) => name?.includes('LOAD_UPS_CHI_2A'))?.fields[1].state?.calcs
?.lastNotNull;
//--------------------------------------------------------------------------------------------------
//---------------------------------------ESTADOS UPS SISTEMA 1--------------------------------------
let ST_UPS1_1A = data.series.find(({ name }) => name?.includes('ST_UPS1_1A'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UPS1_2A = data.series.find(({ name }) => name?.includes('ST_UPS1_2A'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UPS1_3A = data.series.find(({ name }) => name?.includes('ST_UPS1_3A'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UPS1_4A = data.series.find(({ name }) => name?.includes('ST_UPS1_4A'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UPS1_5A = data.series.find(({ name }) => name?.includes('ST_UPS1_5A'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UPS1_6A = data.series.find(({ name }) => name?.includes('ST_UPS1_6A'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UPS_CHI_1A = data.series.find(({ name }) => name?.includes('ST_UPS_CHI_1A'))?.fields[1].state?.calcs
?.lastNotNull;
//---------------------------------------ESTADOS UPS SISTEMA 2--------------------------------------
let ST_UPS2_1A = data.series.find(({ name }) => name?.includes('ST_UPS2_1A'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UPS2_2A = data.series.find(({ name }) => name?.includes('ST_UPS2_2A'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UPS2_3A = data.series.find(({ name }) => name?.includes('ST_UPS2_3A'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UPS2_4A = data.series.find(({ name }) => name?.includes('ST_UPS2_4A'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UPS2_5A = data.series.find(({ name }) => name?.includes('ST_UPS2_5A'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UPS2_6A = data.series.find(({ name }) => name?.includes('ST_UPS2_6A'))?.fields[1].state?.calcs
?.lastNotNull;
let ST_UPS_CHI_2A = data.series.find(({ name }) => name?.includes('ST_UPS_CHI_2A'))?.fields[1].state?.calcs
?.lastNotNull;
//---------------------------------------ALARMAS UPS SISTEMA 1--------------------------------------
let AL_UPS_CHI_1A = data.series.find(({ name }) => name?.includes('AL_UPS_CHI_1A'))?.fields[1].state?.calcs
?.lastNotNull;
let AL_UPS_CHI_2A = data.series.find(({ name }) => name?.includes('AL_UPSCHI_2A'))?.fields[1].state?.calcs
?.lastNotNull;
//--------------------------------------------------------------------------------------------------
//---------------------------------------ESTADOS CHILLERS SISTEMA 2--------------------------------------
let F1_EA_1_S = data.series.find(({ name }) => name?.includes('F1_EA_1_S'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_EA_2_S = data.series.find(({ name }) => name?.includes('F1_EA_2_S'))?.fields[1].state?.calcs
?.lastNotNull;
//---------------------------------------ALARMAS CHILLERS SISTEMA 2----------------------------------------
let F1_EA_1_MS = data.series.find(({ name }) => name?.includes('F1_EA_1_MS'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_EA_2_MS = data.series.find(({ name }) => name?.includes('F1_EA_2_MS'))?.fields[1].state?.calcs
?.lastNotNull;
//---------------------------------------PARAMETROS CHILLERS SISTEMA 2--------------------------------------
let TSUM_EA_1 = data.series.find(({ name }) => name?.includes('TSUM_EA_1'))?.fields[1].state?.calcs
?.lastNotNull;
let TRET_EA_1 = data.series.find(({ name }) => name?.includes('TRET_EA_1'))?.fields[1].state?.calcs
?.lastNotNull;
let TSUM_EA_2 = data.series.find(({ name }) => name?.includes('TSUM_EA_2'))?.fields[1].state?.calcs
?.lastNotNull;
let TRET_EA_2 = data.series.find(({ name }) => name?.includes('TRET_EA_2'))?.fields[1].state?.calcs
?.lastNotNull;

//-------------------------------------------------------------------------------------------------------
//---------------------------------------ESTADOS, ALARMAS DE BOMBAS y VALVULAS --------------------------------------
//SISTEMA2
let F1_B1_1_S = data.series.find(({ name }) => name?.includes('DATA.F1_B1_1_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_2_S = data.series.find(({ name }) => name?.includes('DATA.F1_B1_2_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_3_S = data.series.find(({ name }) => name?.includes('DATA.F1_B1_3_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_1_S = data.series.find(({ name }) => name?.includes('DATA.F1_B2_1_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_2_S = data.series.find(({ name }) => name?.includes('DATA.F1_B2_2_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_1_L = data.series.find(({ name }) => name?.includes('DATA.F1_B2_1_L.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_2_L = data.series.find(({ name }) => name?.includes('DATA.F1_B2_2_L.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV1_S = data.series.find(({ name }) => name?.includes('DATA.ISOV1_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV1_C = data.series.find(({ name }) => name?.includes('DATA.ISOV1_C.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV2_S = data.series.find(({ name }) => name?.includes('DATA.ISOV2_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV2_C = data.series.find(({ name }) => name?.includes('DATA.ISOV2_C.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
//SISTEMA2

//--------------------------------------------------------------------------------------------------
//---------------------------------------BREAKERS TUPS IN & OUT--------------------------------------
//BREAKERS SIS2
let V_TUPSIN_2A_0 = data.series.find(({ name }) => name?.includes('V_TUPSIN_2A_0'))?.fields[1].state?.calcs
?.lastNotNull;
let V_TUPSOUT_2A_0 = data.series.find(({ name }) => name?.includes('V_TUPSOUT_2A_0'))?.fields[1].state?.calcs
?.lastNotNull;
let I_TUPSOUT_2A_0 = data.series.find(({ name }) => name?.includes('I_TUPSOUT_2A_0'))?.fields[1].state?.calcs
?.lastNotNull;
let P_TUPSOUT_2A_0 = data.series.find(({ name }) => name?.includes('P_TUPSOUT_2A_0'))?.fields[1].state?.calcs
?.lastNotNull/10;
//--------------------------------------------------------------------------------------------------
//---------------------------------------SENSORES SITEMA 1&2 ---------------------------------------
//SENSORES SIS2
let TEMP_S_PRI = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_PRI.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_S_SEC = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_SEC.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_S_TAN = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_TAN.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_R = data.series.find(({ name }) => name?.includes('DATA.TEMP_R.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
//---------------------------------------ESTAOD Y ALARMAS DE GENERADORES ---------------------------------------
let st_gen = [];
let e_stop_gen = [];

for (let i = 1; i <= 6; i++) {
e_stop_gen[i] = data.series.find(({ name }) => name?.includes('E_STOP_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
st_gen[i] = data.series.find(({ name }) => name?.includes('VOL_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;

if (e_stop_gen[i] === 3) {
    e_stop_gen[i] = warning_on;
    }   else {
    e_stop_gen[i] = warning_off;
    }
if (parseFloat (st_gen[i]) >= 420) {
    st_gen[i] = st_on;
    }    else {
    st_gen[i] = st_off;
    }
}

/*let OIL_GEN_1 = data.series.find(({ name }) => name?.includes('OIL_GEN_1'))?.fields[1].state?.calcs
?.lastNotNull;
let COOL_GEN_1 = data.series.find(({ name }) => name?.includes('COOL_GEN_1'))?.fields[1].state?.calcs
?.lastNotNull;
let U_SPEED_GEN_1 = data.series.find(({ name }) => name?.includes('U_SPEED_GEN_1'))?.fields[1].state?.calcs
?.lastNotNull;*/


let principal: DataPrincipal = {
    ParametrosElec: {
        V_inTransf: 0,
        V_outTransf: 0,
        I_inTransf: 0,
        I_outTransf: 0,
        P_inTransf: 0,
        P_outTrasnf: 0,
        V_CMT: 0,
        V_inUPS: 0,
        V_outUPS: 0,
        //PUE: 0,
        //DCIE: 0,
    },
    ParametrosClima: {
        T_sumin: 0,
        T_ret: 0,
        uma1_TS: 0, uma2_TS: 0, uma3_TS: 0, uma4_TS: 0, uma5_TS: 0, uma6_TS: 0,
        uma7_TS: 0, uma8_TS: 0, uma9_TS: 0, uma10_TS: 0, uma11_TS: 0, uma12_TS: 0,
        uma1_TR: 0, uma2_TR: 0, uma3_TR: 0, uma4_TR: 0, uma5_TR: 0, uma6_TR: 0,
        uma7_TR: 0, uma8_TR: 0, uma9_TR: 0, uma10_TR: 0, uma11_TR: 0, uma12_TR: 0,
    },
    ParametrosUPS_SIS1: {
        V_in: 0, V_out: 0, I_out: 0, P_out: 0, Load: 0,
        V_inCHI: 0, V_outCHI: 0, I_outCHI: 0, P_outCHI: 0, LoadCHI: 0,
    }, 
        ParametrosUPS_SIS2: {
            V_in: 0, V_out: 0, I_out: 0, P_out: 0, Load: 0,
            V_inCHI: 0, V_outCHI: 0, I_outCHI: 0, P_outCHI: 0, LoadCHI: 0,
    }, 
    ParametrosClima_SIS1: {
        T_sumEA3: 0, T_retEA3: 0,
        T_sumEA4: 0, T_retEA4: 0,
        T_sum_prim: 0, T_sum_sec: 0, T_tanque: 0, T_ret: 0,
        LoadB3: 0, LoadB4: 0,
    },
    ParametrosClima_SIS2: {
        T_sumEA1: 0, T_retEA1: 0,
        T_sumEA2: 0, T_retEA2: 0,
        T_sum_prim: 0, T_sum_sec: 0, T_tanque: 0, T_ret: 0,
        LoadB1: 0, LoadB2: 0,
    },
    ParametrosGEN_SIS1: {
        V_out: 0,
        I_out: 0,
        P_out: 0,
        Load: 0,
    },
    ParametrosGEN_SIS2: {
        V_out: 0,
        I_out: 0,
        P_out: 0,
        Load: 0,
    },
    Estados_Principales: {
        ups_SIS1: '', ups_SIS2: '',
        gen_SIS1: '', gen_SIS2: '',
        transf_in: '', transf_out: '',
        clima_SIS1: '', clima_SIS2: '',
        uma1: estadosStyles.sinconexion, uma2: estadosStyles.sinconexion, uma3: estadosStyles.sinconexion,
        uma4: estadosStyles.sinconexion, uma5: estadosStyles.sinconexion, uma6: estadosStyles.sinconexion,
        uma7: estadosStyles.sinconexion, uma8: estadosStyles.sinconexion, uma9: estadosStyles.sinconexion,
        uma10: estadosStyles.sinconexion, uma11: estadosStyles.sinconexion, uma12: estadosStyles.sinconexion,
    },
    Estados_SIS1: {
        ups1: '', ups2: '', ups3: '', ups4: '', ups5: '', ups6: '', upschi1: '',
        gen1: '', gen2: '', gen3: '',
        Ea3: '', Ea4: '',
        b1_4: '', b1_5: '', b1_6: '',
        b2_3: '', b2_4: '',
        V1aux: '', V2aux: '',
    },
    Estados_SIS2: {
        ups1: '', ups2: '', ups3: '', ups4: '', ups5: '', ups6: '', upschi2: '',
        gen4: '', gen5: '', gen6: '',
        Ea1: '', Ea2: '',
        b1_1: '', b1_2: '', b1_3: '',
        b2_1: '', b2_2: '',
        V1aux: '', V2aux: '',
    },
    Alarmas: {
        uma1: estadosStyles.sinconexion, uma2: estadosStyles.sinconexion, uma3: estadosStyles.sinconexion,
        uma4: estadosStyles.sinconexion, uma5: estadosStyles.sinconexion, uma6: estadosStyles.sinconexion,
        uma7: estadosStyles.sinconexion, uma8: estadosStyles.sinconexion, uma9: estadosStyles.sinconexion,
        uma10: estadosStyles.sinconexion, uma11: estadosStyles.sinconexion, uma12: estadosStyles.sinconexion,
    },
    Alarmas_SIS1: {
        ups1: '', ups2: '', ups3: '', ups4: '', ups5: '', ups6: '', upschi1: '',
        gen1: '', gen2: '', gen3: '',
        Ea3: '', Ea4: '',
        b1_4: '', b1_5: '', b1_6: '',
        b2_3: '', b2_4: '',
    },
    Alarmas_SIS2: {
        ups1: '', ups2: '', ups3: '', ups4: '', ups5: '', ups6: '', upschi2: '',
        gen4: '', gen5: '', gen6: '',
        Ea1: '', Ea2: '', Ea1mant: '', Ea2mant: '',
        b1_1: '', b1_2: '', b1_3: '',
        b2_1: '', b2_2: '',
        V1aux: '', V2aux: '',
    },
}
//---------------------------------------------------------------------------------------------
//--------------------------------------------- UMAS ------------------------------------------
//---------------------------------------------------------------------------------------------
//ESTADOS UMAS

principal.Estados_Principales.uma1 = st_uma[1];
principal.Estados_Principales.uma2 = st_uma[2];
principal.Estados_Principales.uma3 = st_uma[3];
principal.Estados_Principales.uma4 = st_uma[4];
principal.Estados_Principales.uma5 = st_uma[5];
principal.Estados_Principales.uma6 = st_uma[6];
principal.Estados_Principales.uma7 = st_uma[7];
principal.Estados_Principales.uma8 = st_uma[8];
principal.Estados_Principales.uma9 = st_uma[9];
principal.Estados_Principales.uma10 = st_uma[10];
principal.Estados_Principales.uma11 = st_uma[11];
principal.Estados_Principales.uma12 = st_uma[12];
/*principal.Estados_Principales.uma1 = ST_UMA1 === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.uma2 = ST_UMA2 === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.uma3 = ST_UMA3 === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.uma4 = ST_UMA4 === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.uma5 = ST_UMA5 === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.uma6 = ST_UMA6 === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.uma7 = ST_UMA7 === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.uma8 = ST_UMA8 === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.uma9 = ST_UMA9 === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.uma10 = ST_UMA10 === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.uma11 = ST_UMA11 === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.uma12 = ST_UMA12 === 1? estadosStyles.on : estadosStyles.sinconexion;*/
//ALARMAS UMAS
principal.Alarmas.uma1 = AL_UMA1 === 1? estadosStyles.alarma : estadosStyles.sinconexion;
principal.Alarmas.uma2 = AL_UMA2 === 1? estadosStyles.alarma : estadosStyles.sinconexion;
principal.Alarmas.uma3 = AL_UMA3 === 1? estadosStyles.alarma : estadosStyles.sinconexion;
principal.Alarmas.uma4 = AL_UMA4 === 1? estadosStyles.alarma : estadosStyles.sinconexion;
principal.Alarmas.uma5 = AL_UMA5 === 1? estadosStyles.alarma : estadosStyles.sinconexion;
principal.Alarmas.uma6 = AL_UMA6 === 1? estadosStyles.alarma : estadosStyles.sinconexion;
principal.Alarmas.uma7 = AL_UMA7 === 1? estadosStyles.alarma : estadosStyles.sinconexion;
principal.Alarmas.uma8 = AL_UMA8 === 1? estadosStyles.alarma : estadosStyles.sinconexion;
principal.Alarmas.uma9 = AL_UMA9 === 1? estadosStyles.alarma : estadosStyles.sinconexion;
principal.Alarmas.uma10 = AL_UMA10 === 1? estadosStyles.alarma : estadosStyles.sinconexion;
principal.Alarmas.uma11 = AL_UMA11 === 1? estadosStyles.alarma : estadosStyles.sinconexion;
principal.Alarmas.uma12 = AL_UMA12 === 1? estadosStyles.alarma : estadosStyles.sinconexion;
//TEMP SUMINISTRO UMAS
principal.ParametrosClima.uma1_TS = Number.parseFloat(TS_UMA1?.toFixed(2));
principal.ParametrosClima.uma2_TS = Number.parseFloat(TS_UMA2?.toFixed(2));
principal.ParametrosClima.uma3_TS = Number.parseFloat(TS_UMA3?.toFixed(2));
principal.ParametrosClima.uma4_TS = Number.parseFloat(TS_UMA4?.toFixed(2));
principal.ParametrosClima.uma5_TS = Number.parseFloat(TS_UMA5?.toFixed(2));
principal.ParametrosClima.uma6_TS = Number.parseFloat(TS_UMA6?.toFixed(2));
principal.ParametrosClima.uma7_TS = Number.parseFloat(TS_UMA7?.toFixed(2));
principal.ParametrosClima.uma8_TS = Number.parseFloat(TS_UMA8?.toFixed(2));
principal.ParametrosClima.uma9_TS = Number.parseFloat(TS_UMA9?.toFixed(2));
principal.ParametrosClima.uma10_TS = Number.parseFloat(TS_UMA10?.toFixed(2));
principal.ParametrosClima.uma11_TS = Number.parseFloat(TS_UMA11?.toFixed(2));
principal.ParametrosClima.uma12_TS = Number.parseFloat(TS_UMA12?.toFixed(2));

//TEMP RETORNO DE UMAS
principal.ParametrosClima.uma1_TR = Number.parseFloat(TR_UMA1?.toFixed(2));
principal.ParametrosClima.uma2_TR = Number.parseFloat(TR_UMA2?.toFixed(2));
principal.ParametrosClima.uma3_TR = Number.parseFloat(TR_UMA3?.toFixed(2));
principal.ParametrosClima.uma4_TR = Number.parseFloat(TR_UMA4?.toFixed(2));
principal.ParametrosClima.uma5_TR = Number.parseFloat(TR_UMA5?.toFixed(2));
principal.ParametrosClima.uma6_TR = Number.parseFloat(TR_UMA6?.toFixed(2));
principal.ParametrosClima.uma7_TR = Number.parseFloat(TR_UMA7?.toFixed(2));
principal.ParametrosClima.uma8_TR = Number.parseFloat(TR_UMA8?.toFixed(2));
principal.ParametrosClima.uma9_TR = Number.parseFloat(TR_UMA9?.toFixed(2));
principal.ParametrosClima.uma10_TR = Number.parseFloat(TR_UMA10?.toFixed(2));
principal.ParametrosClima.uma11_TR = Number.parseFloat(TR_UMA11?.toFixed(2));
principal.ParametrosClima.uma12_TR = Number.parseFloat(TR_UMA12?.toFixed(2));

//---------------------------------------------------------------------------------------------
//---------------------------------------- UPS SISTEMA 1&2-------------------------------------
//PARAMETROS UPS CHI
principal.ParametrosUPS_SIS1.V_inCHI =  Number.parseFloat(VIN_UPS_CHI_1A?.toFixed(2));
principal.ParametrosUPS_SIS1.V_outCHI =  Number.parseFloat(VOUT_UPS_CHI_1A?.toFixed(2));
principal.ParametrosUPS_SIS1.I_outCHI =  Number.parseFloat(IOUT_UPS_CHI_1A?.toFixed(2));
principal.ParametrosUPS_SIS1.LoadCHI =  Number.parseFloat(LOAD_UPS_CHI_1A?.toFixed(2));

principal.ParametrosUPS_SIS2.V_inCHI =  Number.parseFloat(VIN_UPS_CHI_2A?.toFixed(2));
principal.ParametrosUPS_SIS2.V_outCHI =  Number.parseFloat(VOUT_UPS_CHI_2A?.toFixed(2));
principal.ParametrosUPS_SIS2.I_outCHI =  Number.parseFloat(IOUT_UPS_CHI_2A?.toFixed(2));
principal.ParametrosUPS_SIS2.LoadCHI =  Number.parseFloat(LOAD_UPS_CHI_2A?.toFixed(2));
//---------------------------------------------------------------------------------------------
//ESTADOS UPS SIS1

principal.Estados_SIS1.ups1 = ST_UPS1_1A === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS1.ups2 = ST_UPS1_2A === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS1.ups3 = ST_UPS1_3A === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS1.ups4 = ST_UPS1_4A === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS1.ups5 = ST_UPS1_5A === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS1.ups6 = ST_UPS1_6A === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS1.upschi1 = ST_UPS_CHI_1A === 1? estadosStyles.on : estadosStyles.sinconexion;
//ESTADOS UPS SIS2
principal.Estados_SIS2.ups1 = ST_UPS2_1A === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.ups2 = ST_UPS2_2A === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.ups3 = ST_UPS2_3A === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.ups4 = ST_UPS2_4A === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.ups5 = ST_UPS2_5A === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.ups6 = ST_UPS2_6A === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.upschi2 = ST_UPS_CHI_2A === 1? estadosStyles.on : estadosStyles.sinconexion;
// ALARMAS UPS CHI
principal.Alarmas_SIS1.upschi1 = AL_UPS_CHI_1A === 1? alarmasStyles.on : alarmasStyles.sinconexion;
principal.Alarmas_SIS2.upschi2 = AL_UPS_CHI_2A === 1? alarmasStyles.on : alarmasStyles.sinconexion;
//---------------------------------------------------------------------------------------------
//---------------------------------------- CHILLERS -------------------------------------------
//---------------------------------------------------------------------------------------------
//ESTADOS CHILLERS SIS2
principal.Estados_SIS2.Ea1 = F1_EA_1_S === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.Ea2 = F1_EA_2_S === 1? estadosStyles.on : estadosStyles.sinconexion;
//ALARMAS CHILLER SIS2
principal.Alarmas_SIS2.Ea1mant = F1_EA_1_MS === 2? alarmasStyles.on1 : alarmasStyles.sinconexion;
principal.Alarmas_SIS2.Ea2mant = F1_EA_2_MS === 2? alarmasStyles.on1 : alarmasStyles.sinconexion;
//ESTADOS CHILLERS SIS1

//PARAMETROS CHILLERS SIS2
principal.ParametrosClima_SIS2.T_sumEA1 = Number.parseFloat(TSUM_EA_1?.toFixed(2));
principal.ParametrosClima_SIS2.T_retEA1 = Number.parseFloat(TRET_EA_1?.toFixed(2));
principal.ParametrosClima_SIS2.T_sumEA2 = Number.parseFloat(TSUM_EA_2?.toFixed(2));
principal.ParametrosClima_SIS2.T_retEA2 = Number.parseFloat(TRET_EA_2?.toFixed(2));

//---------------------------------------------------------------------------------------------
//---------------------------------------- BOMBAS Y VALVULAS-----------------------------------
//---------------------------------------------------------------------------------------------
principal.Estados_SIS2.b1_1 = F1_B1_1_S === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.b1_2 = F1_B1_2_S === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.b1_3 = F1_B1_3_S === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.b2_1 = F1_B2_1_S === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.b2_2 = F1_B2_2_S === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.ParametrosClima_SIS2.LoadB1 = Number.parseFloat(F1_B2_1_L?.toFixed(2));
principal.ParametrosClima_SIS2.LoadB2 = Number.parseFloat(F1_B2_2_L?.toFixed(2));
principal.Estados_SIS2.V1aux = (ISOV1_S && ISOV1_C) === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.V2aux = (ISOV2_S && ISOV2_C) === 1? estadosStyles.on : estadosStyles.sinconexion;

//---------------------------------------------------------------------------------------------
//---------------------------------------- BREAKERS TUPS IN OUT -------------------------------
//---------------------------------------------------------------------------------------------
principal.ParametrosUPS_SIS2.V_in = Number.parseFloat(V_TUPSIN_2A_0?.toFixed(2));
principal.ParametrosUPS_SIS2.V_out = Number.parseFloat(V_TUPSOUT_2A_0?.toFixed(2));
principal.ParametrosUPS_SIS2.I_out = Number.parseFloat(I_TUPSOUT_2A_0?.toFixed(2));
principal.ParametrosUPS_SIS2.P_out = Number.parseFloat(P_TUPSOUT_2A_0?.toFixed(2));

//---------------------------------------------------------------------------------------------
//---------------------------------------- SENSORES --------------------------------------------
//---------------------------------------------------------------------------------------------
//SISTEMA 2
principal.ParametrosClima_SIS2.T_sum_prim = Number.parseFloat(TEMP_S_PRI ?.toFixed(2));
principal.ParametrosClima_SIS2.T_sum_sec = Number.parseFloat(TEMP_S_SEC ?.toFixed(2));
principal.ParametrosClima_SIS2.T_tanque = Number.parseFloat(TEMP_S_TAN ?.toFixed(2));
principal.ParametrosClima_SIS2.T_ret = Number.parseFloat(TEMP_R ?.toFixed(2));

//---------------------------------------------------------------------------------------------
//---------------------------------------- ESTADOS DE GENERADORES------------------------------
//---------------------------------------------------------------------------------------------
principal.Estados_SIS1.gen1 = st_gen[1];
principal.Estados_SIS1.gen2 = st_gen[2];
principal.Estados_SIS1.gen3 = st_gen[3];
principal.Estados_SIS2.gen4 = st_gen[4];
principal.Estados_SIS2.gen5 = st_gen[5];
principal.Estados_SIS2.gen6 = st_gen[6];
/*principal.Estados_SIS1.gen1 = VOL_GEN_1 >=420? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS1.gen2 = VOL_GEN_2 >=420? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS1.gen3 = VOL_GEN_3 >=420? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.gen4 = VOL_GEN_4 >=420? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.gen5 = VOL_GEN_5 >=420? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.gen6 = VOL_GEN_6 >=420? estadosStyles.on : estadosStyles.sinconexion;*/

//---------------------------------------------------------------------------------------------
//---------------------------------------- ALARMAS DE GENERADORES------------------------------
//---------------------------------------------------------------------------------------------
principal.Alarmas_SIS1.gen1 = e_stop_gen[1];
principal.Alarmas_SIS1.gen2 = e_stop_gen[2];
principal.Alarmas_SIS1.gen3 = e_stop_gen[3];
principal.Alarmas_SIS2.gen4 = e_stop_gen[4];
principal.Alarmas_SIS2.gen5 = e_stop_gen[5];
principal.Alarmas_SIS2.gen6 = e_stop_gen[6];

console.log(principal);

return principal;

};

export default dataPrincipal;