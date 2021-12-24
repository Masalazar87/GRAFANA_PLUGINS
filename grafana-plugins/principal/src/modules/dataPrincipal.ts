import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataPrincipal } from 'components/variables';
import estadosStyles from 'styles/estadosStyles';
import alarmasStyles from 'styles/alarmasStyles';

const dataPrincipal = (data: PanelData, options: SimpleOptions): DataPrincipal => {  
    console.log('data: ', data);
    console.log('options: ', options);
//-------------------------------------------VARIABLES DE ESTADOS--------------------------------------------    
//ESTADOS
let st_on = estadosStyles.on;
let st_off = estadosStyles.sinconexion;
//ALARMS
let alarm_on = alarmasStyles.on;
let alarm_off = alarmasStyles.sinconexion;
//WARNINGS
/*let warning_on = alarmasStyles.on1;
let warning_off = alarmasStyles.sinconexion;*/

//----------------------------------------ESTADOS Y ALARMAS DE UMAS------------------------------------------
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
//---------------------------------------------PARAMETROS DE UMAS--------------------------------------------
//TEMP. SUMINISTRO Y RETORNO UMAS
let tsum_uma = [];
let tret_uma = [];
for (let i = 1; i <= 12; i++) {
    tsum_uma[i] = data.series.find(({ name }) => name?.includes('TS_UMA' + i))?.fields[1].state?.calcs?.lastNotNull;   
    tret_uma[i] = data.series.find(({ name }) => name?.includes('TR_UMA' + i))?.fields[1].state?.calcs?.lastNotNull;   
    if (tsum_uma[i] === null || tsum_uma[i] === 0) {
        tsum_uma[i] = 0;
        }   else {
            tsum_uma[i] = parseFloat(tsum_uma[i]).toFixed(1);
        } 
    if (tret_uma[i] === null || tret_uma[i] === 0) {
        tret_uma[i] = 0;
        }   else {
            tret_uma[i] = parseFloat(tret_uma[i]).toFixed(1);
        } 
    }
//--------------------------------------ESTADOS Y ALARMAS DE UPS 200KVA--------------------------------------
let st_ups1a = [];
let st_ups2a = [];
let al_ups1a = [];
let al_ups2a = [];
for (let i = 1; i <= 6; i++) {
    st_ups1a[i] = data.series.find(({ name }) => name?.includes('ST_UPS1A_' + i))?.fields[1].state?.calcs?.lastNotNull;
    st_ups2a[i] = data.series.find(({ name }) => name?.includes('ST_UPS2A_' + i))?.fields[1].state?.calcs?.lastNotNull;
    al_ups1a[i] = data.series.find(({ name }) => name?.includes('AL_UPS1A_' + i))?.fields[1].state?.calcs?.lastNotNull;
    al_ups2a[i] = data.series.find(({ name }) => name?.includes('AL_UPS2A_' + i))?.fields[1].state?.calcs?.lastNotNull;
    if (st_ups1a[i] === 1) {
        st_ups1a[i] = st_on;
        }   else {
            st_ups1a[i] = st_off;
        }
    if (st_ups2a[i] === 1) {
        st_ups2a[i] = st_on;
        }   else {
            st_ups2a[i] = st_off;
        }
    if (al_ups1a[i] > 0) {
        al_ups1a[i] = alarm_on;
        }   else {
            al_ups1a[i] = alarm_off;
        } 
    if (al_ups2a[i] > 0) {
        al_ups2a[i] = alarm_on;
        }   else {
            al_ups1a[i] = alarm_off;
        }    
}
//---------------------------------------ESTADOS Y ALARMAS DE UPS CHI 200KVA---------------------------------
let st_upschi = [];
let al_upschi = [];
for (let i = 1; i <= 2; i++) {
    st_upschi[i] = data.series.find(({ name }) => name?.includes('ST_UPS_CHI_' + i + 'A'))?.fields[1].state?.calcs?.lastNotNull;
    al_upschi[i] = data.series.find(({ name }) => name?.includes('AL_UPS_CHI_' + i + 'A'))?.fields[1].state?.calcs?.lastNotNull;
    if (st_upschi[i] === 1) {
        st_upschi[i] = st_on;
        }   else {
            st_upschi[i] = st_off;
        }
    if (al_upschi[i] > 0) {
        al_upschi[i] = alarm_on;
        }   else {
            al_upschi[i] = alarm_off;
        }
}
//--------------------------------------------PARAMETROS UPS CHI 200KVA--------------------------------------
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
//--------------------------------------ESTADOS DE UPS 10KVA Y RECTIFICADORES -------------------------------
let alups10kva = [];
let stups10kva = [];
let strec = [];
for (let i = 1; i <= 4; i++) {
    alups10kva[i] = data.series.find(({ name }) => name?.includes('AL_UPS10KVA_' + i))?.fields[1].state?.calcs?.lastNotNull;
    stups10kva[i] = data.series.find(({ name }) => name?.includes('ST_UPS10KVA_' + i))?.fields[1].state?.calcs?.lastNotNull;    
    if (alups10kva[i] > 0 ){
        alups10kva[i] = alarm_on;
    } else {alups10kva[i] = alarm_off;
    }
    if (stups10kva[i] > 220 ){
        stups10kva[i] = st_on;
    } else {stups10kva[i] = st_off;
    }
}
for (let i = 1; i <= 2; i++) {
    strec[i] = data.series.find(({ name }) => name?.includes('ST_REC_' + i + 'A'))?.fields[1].state?.calcs?.lastNotNull;
    if (strec[i] === 1 ){
        strec[i] = st_on;
    } else 
        if (strec[i] === 2 ){
            strec[i] = alarm_on;
    }else 
        if (strec[i] === 0){
        strec[i] = st_off;
        }
}
//-------------------------------------------------------------------------------------------------------------
//---------------------------------------ESTADOS Y ALARMAS CHILLERS SISTEMA 2----------------------------------
let F1_EA_1_S = data.series.find(({ name }) => name?.includes('F1_EA_1_S'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_EA_2_S = data.series.find(({ name }) => name?.includes('F1_EA_2_S'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_EA_1_MS = data.series.find(({ name }) => name?.includes('F1_EA_1_MS'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_EA_2_MS = data.series.find(({ name }) => name?.includes('F1_EA_2_MS'))?.fields[1].state?.calcs
?.lastNotNull;
//-----------------------------------------PARAMETROS CHILLERS SISTEMA 2---------------------------------------
let TSUM_EA_1 = data.series.find(({ name }) => name?.includes('TSUM_EA_1'))?.fields[1].state?.calcs
?.lastNotNull;
let TRET_EA_1 = data.series.find(({ name }) => name?.includes('TRET_EA_1'))?.fields[1].state?.calcs
?.lastNotNull;
let TSUM_EA_2 = data.series.find(({ name }) => name?.includes('TSUM_EA_2'))?.fields[1].state?.calcs
?.lastNotNull;
let TRET_EA_2 = data.series.find(({ name }) => name?.includes('TRET_EA_2'))?.fields[1].state?.calcs
?.lastNotNull;
//------------------------------------------------------------------------------------------------------------
//-----------------------------------ESTADOS, ALARMAS DE BOMBAS y VALVULAS------------------------------------
//BOMBAS PRIMARIAS
let st_1b1 = [];
let al_1b1 = [];
for (let i = 1; i <= 6; i++) {
    st_1b1[i] = data.series.find(({ name }) => name?.includes('DATA.F1_B1_' + i + '_S.VALUE'))?.fields[1].state?.calcs?.lastNotNull;   
    al_1b1[i] = data.series.find(({ name }) => name?.includes('DATA.F1_B1_' + i + '_A.VALUE'))?.fields[1].state?.calcs?.lastNotNull;   
    if (st_1b1[i] === 1) {
        st_1b1[i] = st_on;
        }   else {
            st_1b1[i] = st_off;
        }
    if (al_1b1[i] === 1) {
        al_1b1[i] = alarm_on;
        }   else {
            al_1b1[i] = alarm_off;
        }
}
//BOMBAS SECUNDARIAS
let st_1b2 = [];
let load_1b2 = [];
let al_1b2 = [];
for (let i = 1; i <= 4; i++) {
    st_1b2[i] = data.series.find(({ name }) => name?.includes('DATA.F1_B2_' + i + '_S.VALUE'))?.fields[1].state?.calcs?.lastNotNull;   
    load_1b2[i] = data.series.find(({ name }) => name?.includes('DATA.F1_B2_' + i + '_L.VALUE'))?.fields[1].state?.calcs?.lastNotNull;   
    al_1b2[i] = data.series.find(({ name }) => name?.includes('DATA.F1_B2_' + i + '_A.VALUE'))?.fields[1].state?.calcs?.lastNotNull;   
    if (st_1b2[i] === 1) {
        st_1b2[i] = st_on;
        }   else {
            st_1b2[i] = st_off;
        }
    if (load_1b2[i] === 0) {
        load_1b2[i] = 0;
        }   else {
            load_1b2[i] = parseFloat(load_1b2[i]).toFixed(0);
        } 
    if (al_1b2[i] === 1) {
        al_1b2[i] = alarm_on;
        }   else {
            al_1b2[i] = alarm_off;
        }
}
//VALVULAS SIST. 2
let ISOV1_S = data.series.find(({ name }) => name?.includes('DATA.ISOV1_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV1_C = data.series.find(({ name }) => name?.includes('DATA.ISOV1_C.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV2_S = data.series.find(({ name }) => name?.includes('DATA.ISOV2_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV2_C = data.series.find(({ name }) => name?.includes('DATA.ISOV2_C.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
//------------------------------------------------------------------------------------------------------------
//-----------------------------------PARAMETROS BREAKERS TUPS IN & OUT----------------------------------------
//BREAKERS SIS1
let V_TUPSIN_1A_0 = data.series.find(({ name }) => name?.includes('V_TUPSIN_1A_0'))?.fields[1].state?.calcs
?.lastNotNull;
let V_TUPSOUT_1A_0 = data.series.find(({ name }) => name?.includes('V_TUPSOUT_1A_0'))?.fields[1].state?.calcs
?.lastNotNull;
let I_TUPSOUT_1A_0 = data.series.find(({ name }) => name?.includes('I_TUPSOUT_1A_0'))?.fields[1].state?.calcs
?.lastNotNull;
let P_TUPSOUT_1A_0 = data.series.find(({ name }) => name?.includes('P_TUPSOUT_1A_0'))?.fields[1].state?.calcs
?.lastNotNull/10;
//BREAKERS SIS2
let V_TUPSIN_2A_0 = data.series.find(({ name }) => name?.includes('V_TUPSIN_2A_0'))?.fields[1].state?.calcs
?.lastNotNull;
let V_TUPSOUT_2A_0 = data.series.find(({ name }) => name?.includes('V_TUPSOUT_2A_0'))?.fields[1].state?.calcs
?.lastNotNull;
let I_TUPSOUT_2A_0 = data.series.find(({ name }) => name?.includes('I_TUPSOUT_2A_0'))?.fields[1].state?.calcs
?.lastNotNull;
let P_TUPSOUT_2A_0 = data.series.find(({ name }) => name?.includes('P_TUPSOUT_2A_0'))?.fields[1].state?.calcs
?.lastNotNull/10;
//-------------------------------------------------------------------------------------------------------------
//--------------------------------SENSORES DE CLIMATIZACIÓN SISTEMA 1&2----------------------------------------
//SENSORES SIST. 2
let TEMP_S_PRI = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_PRI.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_S_SEC = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_SEC.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_S_TAN = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_TAN.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_R = data.series.find(({ name }) => name?.includes('DATA.TEMP_R.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
//----------------------------------- ESTADO Y ALARMAS DE GENERADORES -----------------------------------------
let st_gen = [];
let e_stop_gen = [];
for (let i = 1; i <= 6; i++) {
e_stop_gen[i] = data.series.find(({ name }) => name?.includes('E_STOP_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
st_gen[i] = data.series.find(({ name }) => name?.includes('VOL_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;

if (e_stop_gen[i] === 2 || e_stop_gen[i] === 3 || e_stop_gen[i] === 4) {
    e_stop_gen[i] = alarm_on;
    }    else {e_stop_gen[i] = alarm_off;}
if  (st_gen[i] >= 420) {
    st_gen[i] = st_on;
    }    else {
    st_gen[i] = st_off;
    }
}
//------------------------------PARAMETROS RINCIPALES DE SISTEMA DE GENERADORES ------------------------------
let st_gen_carga = [];
let vll_genSIS = [];
let pot_genSIS = [];
for (let i = 1; i <= 6; i++) {
vll_genSIS[i] = data.series.find(({ name }) => name?.includes('VOL_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
st_gen_carga[i] = data.series.find(({ name }) => name?.includes('CUR_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
pot_genSIS[i] = data.series.find(({ name }) => name?.includes('POT_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
    if (vll_genSIS[i] === null || vll_genSIS[i] === 0 ){
        vll_genSIS[i] = 0;// &&
        //st_gen[i] === 0;
    } else { 
        if (vll_genSIS[i] > 0){
            vll_genSIS[i] =  Number.parseFloat(vll_genSIS[i])?.toFixed(1);// && 
            //st_gen[i] === 1;
    }}
    if (st_gen_carga[i] === null || st_gen_carga[i] === 0 ){
        st_gen_carga[i] = 0;
    } else {
        st_gen_carga[i] = Number.parseFloat(st_gen_carga[i])?.toFixed(1)
    }
    if (pot_genSIS[i] === null || pot_genSIS[i] === 0 ){
        pot_genSIS[i] = 0;
    } else { 
        if (pot_genSIS[i] > 0){
            pot_genSIS[i] =  Number.parseFloat(pot_genSIS[i])?.toFixed(1);
    }
    }
}
//-------------------------------------ESTADOS DE SISTEMA DE CLIMATIZACÓN--------------------------------------
//-------------------------------------------------------------------------------------------------------------
/*let SYS_1_EN = data.series.find(({ name }) => name?.includes('SYS_1_EN'))?.fields[1].state?.calcs
?.lastNotNull;*/
let SYS_2_EN = data.series.find(({ name }) => name?.includes('DATA.SYS_EN.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------PARAMETROS DE TRANSFORMADOR (PQM)---------------------------------------
let VAB_TR01 = data.series.find(({ name }) => name?.includes('DATA.VOL_VAB.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let VBC_TR01 = data.series.find(({ name }) => name?.includes('DATA.VOL_VBC.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let VCA_TR01 = data.series.find(({ name }) => name?.includes('DATA.VOL_VCA.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let Ia_TR01 = data.series.find(({ name }) => name?.includes('DATA.CURR_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let Ib_TR01 = data.series.find(({ name }) => name?.includes('DATA.CURR_B.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let Ic_TR01 = data.series.find(({ name }) => name?.includes('DATA.CURR_C.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let Pt_TR01 = data.series.find(({ name }) => name?.includes('DATA.REALPOW_3PHAS.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------PARAMETROS DE CELDA (ECOLUZ)--------------------------------------------
let VAB_CMT = data.series.find(({ name }) => name?.includes('DATA.VLL_AB.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let VBC_CMT = data.series.find(({ name }) => name?.includes('DATA.VLL_BC.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let VCA_CMT = data.series.find(({ name }) => name?.includes('DATA.VLL_CA.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let VAVG_CMT = data.series.find(({ name }) => name?.includes('DATA.VLL_AVG.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
let principal: DataPrincipal = {
    ParametrosElec: {
        Vab_Tr01: 0,
        Vbc_Tr01: 0,
        Vca_Tr01: 0,
        Ia_Tr01: 0,
        Ib_Tr01: 0,
        Ic_Tr01: 0,
        Pt_Tr01: 0,
        V_CMTAVG: 0,
        V_CMTL1: 0,
        V_CMTL2: 0,
        V_CMTL3: 0,
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
        transf_in: estadosStyles.sinconexion, transf_out: estadosStyles.sinconexion,
        clima_SIS1: estadosStyles.sinconexion, clima_SIS2: estadosStyles.sinconexion,
        uma1: estadosStyles.sinconexion, uma2: estadosStyles.sinconexion, uma3: estadosStyles.sinconexion,
        uma4: estadosStyles.sinconexion, uma5: estadosStyles.sinconexion, uma6: estadosStyles.sinconexion,
        uma7: estadosStyles.sinconexion, uma8: estadosStyles.sinconexion, uma9: estadosStyles.sinconexion,
        uma10: estadosStyles.sinconexion, uma11: estadosStyles.sinconexion, uma12: estadosStyles.sinconexion,
        VAB_CMT: estadosStyles.sinconexion, VBC_CMT: estadosStyles.sinconexion,  VCA_CMT: estadosStyles.sinconexion,
        ST_CMT: estadosStyles.sinconexion,
    },
    Estados_SIS1: {
        ups1: '', ups2: '', ups3: '', ups4: '', ups5: '', ups6: '', upschi1: '',
        gen1: '', gen2: '', gen3: '',
        Ea3: '', Ea4: '',
        b1_4: '', b1_5: '', b1_6: '',
        b2_3: '', b2_4: '',
        V1aux: '', V2aux: '',
        upsoffices_1a: '', upssat_1a: '', rec_1a: '',
    },
    Estados_SIS2: {
        ups1: '', ups2: '', ups3: '', ups4: '', ups5: '', ups6: '', upschi2: '',
        gen4: '', gen5: '', gen6: '',
        Ea1: '', Ea2: '',
        b1_1: '', b1_2: '', b1_3: '',
        b2_1: '', b2_2: '',
        V1aux: '', V2aux: '',
        upsnoc_2a: '', upssat_2a: '', rec_2a: '',
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
        upsoffices_1a: '', upssat_1a: '', //rec_1a: '',
    },
    Alarmas_SIS2: {
        ups1: '', ups2: '', ups3: '', ups4: '', ups5: '', ups6: '', upschi2: '',
        gen4: '', gen5: '', gen6: '',
        Ea1: '', Ea2: '', Ea1mant: '', Ea2mant: '',
        b1_1: '', b1_2: '', b1_3: '',
        b2_1: '', b2_2: '',
        V1aux: '', V2aux: '',
        upsnoc_2a: '', upssat_2a: '', //rec_2a: '',
    },
}
//PRESENTACIÓN DE LA VARIABLE//
//------------------------------------------------ UMAS -------------------------------------------------
//ESTADOS UMAS
principal.Estados_Principales.uma1 = st_uma[1];     principal.Estados_Principales.uma2 = st_uma[2];
principal.Estados_Principales.uma3 = st_uma[3];     principal.Estados_Principales.uma4 = st_uma[4];
principal.Estados_Principales.uma5 = st_uma[5];     principal.Estados_Principales.uma6 = st_uma[6];
principal.Estados_Principales.uma7 = st_uma[7];     principal.Estados_Principales.uma8 = st_uma[8];
principal.Estados_Principales.uma9 = st_uma[9];     principal.Estados_Principales.uma10 = st_uma[10];
principal.Estados_Principales.uma11 = st_uma[11];   principal.Estados_Principales.uma12 = st_uma[12];
//ALARMAS UMAS
principal.Alarmas.uma1 = al_uma[1];     principal.Alarmas.uma2 = al_uma[2];
principal.Alarmas.uma3 = al_uma[3];     principal.Alarmas.uma4 = al_uma[4];
principal.Alarmas.uma5 = al_uma[5];     principal.Alarmas.uma6 = al_uma[6];
principal.Alarmas.uma7 = al_uma[7];     principal.Alarmas.uma8 = al_uma[8];
principal.Alarmas.uma9 = al_uma[9];     principal.Alarmas.uma10 = al_uma[10];
principal.Alarmas.uma11 = al_uma[11];   principal.Alarmas.uma12 = al_uma[12];
//TEMP SUMINISTRO UMAS
principal.ParametrosClima.uma1_TS = tsum_uma[1];    principal.ParametrosClima.uma2_TS = tsum_uma[2];
principal.ParametrosClima.uma3_TS = tsum_uma[3];    principal.ParametrosClima.uma4_TS = tsum_uma[4];
principal.ParametrosClima.uma5_TS = tsum_uma[5];    principal.ParametrosClima.uma6_TS = tsum_uma[6];
principal.ParametrosClima.uma7_TS = tsum_uma[7];    principal.ParametrosClima.uma8_TS = tsum_uma[8];
principal.ParametrosClima.uma9_TS = tsum_uma[9];    principal.ParametrosClima.uma10_TS = tsum_uma[10];
principal.ParametrosClima.uma11_TS = tsum_uma[11];  principal.ParametrosClima.uma12_TS = tsum_uma[12];
//TEMP RETORNO DE UMAS
principal.ParametrosClima.uma1_TR = tret_uma[1];    principal.ParametrosClima.uma2_TR = tret_uma[2];
principal.ParametrosClima.uma3_TR = tret_uma[3];    principal.ParametrosClima.uma4_TR = tret_uma[4];
principal.ParametrosClima.uma5_TR = tret_uma[5];    principal.ParametrosClima.uma6_TR = tret_uma[6];
principal.ParametrosClima.uma7_TR = tret_uma[7];    principal.ParametrosClima.uma8_TR = tret_uma[8];
principal.ParametrosClima.uma9_TR = tret_uma[9];    principal.ParametrosClima.uma10_TR = tret_uma[10];
principal.ParametrosClima.uma11_TR = tret_uma[11];  principal.ParametrosClima.uma12_TR = tret_uma[12];

//--------------------------------------------------------------------------------------------------------
//------------------------------------------UPS 200KVA SISTEMA 1&2----------------------------------------
//PARAMETROS UPS CHI SIS1
principal.ParametrosUPS_SIS1.V_inCHI =  Number.parseFloat(VIN_UPS_CHI_1A?.toFixed(2));
principal.ParametrosUPS_SIS1.V_outCHI =  Number.parseFloat(VOUT_UPS_CHI_1A?.toFixed(2));
principal.ParametrosUPS_SIS1.I_outCHI =  Number.parseFloat(IOUT_UPS_CHI_1A?.toFixed(2));
principal.ParametrosUPS_SIS1.LoadCHI =  Number.parseFloat(LOAD_UPS_CHI_1A?.toFixed(2));
//PARAMETROS UPS CHI SIS2
principal.ParametrosUPS_SIS2.V_inCHI =  Number.parseFloat(VIN_UPS_CHI_2A?.toFixed(2));
principal.ParametrosUPS_SIS2.V_outCHI =  Number.parseFloat(VOUT_UPS_CHI_2A?.toFixed(2));
principal.ParametrosUPS_SIS2.I_outCHI =  Number.parseFloat(IOUT_UPS_CHI_2A?.toFixed(2));
principal.ParametrosUPS_SIS2.LoadCHI =  Number.parseFloat(LOAD_UPS_CHI_2A?.toFixed(2));
//ESTADOS UPS 200 KVA SIS1
principal.Estados_SIS1.ups1 = st_ups1a[1];  principal.Estados_SIS1.ups2 = st_ups1a[2];
principal.Estados_SIS1.ups3 = st_ups1a[3];  principal.Estados_SIS1.ups4 = st_ups1a[4];
principal.Estados_SIS1.ups5 = st_ups1a[5];  principal.Estados_SIS1.ups6 = st_ups1a[6];
principal.Estados_SIS1.upschi1 = st_upschi[1];
//ESTADOS UPS 200 KVA SIS2
principal.Estados_SIS2.ups1 = st_ups2a[1];  principal.Estados_SIS2.ups2 = st_ups2a[2];
principal.Estados_SIS2.ups3 = st_ups2a[3];  principal.Estados_SIS2.ups4 = st_ups2a[4];
principal.Estados_SIS2.ups5 = st_ups2a[5];  principal.Estados_SIS2.ups6 = st_ups2a[6];
principal.Estados_SIS2.upschi2 = st_upschi[2];
//ALARMAS UPS 200 KVA SIS1
principal.Alarmas_SIS1.ups1 = al_ups1a[1]; principal.Alarmas_SIS1.ups2 = al_ups1a[2]; 
principal.Alarmas_SIS1.ups3 = al_ups1a[3]; principal.Alarmas_SIS1.ups4 = al_ups1a[4]; 
principal.Alarmas_SIS1.ups5 = al_ups1a[5]; principal.Alarmas_SIS1.ups6 = al_ups1a[6]; 
//ALARMAS UPS 200 KVA SIS2
principal.Alarmas_SIS2.ups1 = al_ups2a[1]; principal.Alarmas_SIS2.ups2 = al_ups2a[2]; 
principal.Alarmas_SIS2.ups3 = al_ups2a[3]; principal.Alarmas_SIS2.ups4 = al_ups2a[4]; 
principal.Alarmas_SIS2.ups5 = al_ups2a[5]; principal.Alarmas_SIS2.ups6 = al_ups2a[6]; 
// ALARMAS UPS SIS1&2
principal.Alarmas_SIS1.upschi1 = al_upschi[1];
principal.Alarmas_SIS2.upschi2 = al_upschi[2];
//-----------------------------------------ESTADOS DE SISTEMA DE UPS´S-----------------------------------------
principal.Estados_Principales.ups_SIS1 = st_ups1a[1] === st_on || st_ups1a[2] === st_on || st_ups1a[3] === st_on || st_ups1a[4] === st_on || st_ups1a[5] === st_on || st_ups1a[6] === st_on? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.ups_SIS2 = st_ups2a[1] === st_on || st_ups2a[2] === st_on || st_ups2a[3] === st_on || st_ups2a[4] === st_on || st_ups2a[5] === st_on || st_ups2a[6] === st_on? estadosStyles.on : estadosStyles.sinconexion;
//-----------------------------------------ALARMAS DE UPS´S 10kva Y RECTIFICADORES-----------------------------------
principal.Alarmas_SIS1.upsoffices_1a = alups10kva[1];
principal.Alarmas_SIS1.upssat_1a = alups10kva[2];
principal.Alarmas_SIS2.upsnoc_2a = alups10kva[3];
principal.Alarmas_SIS2.upssat_2a = alups10kva[4];
principal.Estados_SIS1.upsoffices_1a = stups10kva[1];
principal.Estados_SIS1.upssat_1a = stups10kva[2];
principal.Estados_SIS2.upsnoc_2a = stups10kva[3];
principal.Estados_SIS2.upssat_2a = stups10kva[4];
principal.Estados_SIS1.rec_1a = strec[1];
principal.Estados_SIS2.rec_2a = strec[2];
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------CHILLERS----------------------------------------------------
//ESTADOS CHILLERS SIS2
principal.Estados_SIS2.Ea1 = F1_EA_1_S === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.Ea2 = F1_EA_2_S === 1? estadosStyles.on : estadosStyles.sinconexion;
//AL. MANTENIMIENTO CHILLER SIS2
principal.Alarmas_SIS2.Ea1mant = F1_EA_1_MS === 2? alarmasStyles.on1 : alarmasStyles.sinconexion;
principal.Alarmas_SIS2.Ea2mant = F1_EA_2_MS === 2? alarmasStyles.on1 : alarmasStyles.sinconexion;
//PARAMETROS CHILLERS SIS2
principal.ParametrosClima_SIS2.T_sumEA1 = Number.parseFloat(TSUM_EA_1?.toFixed(2));
principal.ParametrosClima_SIS2.T_retEA1 = Number.parseFloat(TRET_EA_1?.toFixed(2));
principal.ParametrosClima_SIS2.T_sumEA2 = Number.parseFloat(TSUM_EA_2?.toFixed(2));
principal.ParametrosClima_SIS2.T_retEA2 = Number.parseFloat(TRET_EA_2?.toFixed(2));
//-----------------------------------------BOMBAS Y VALVULAS----------------------------------------------
//--------------------------------------------------------------------------------------------------------
//ESTADOS B. PRIM Y SEC SIS1
principal.Estados_SIS1.b1_4 = st_1b1[4];   
principal.Estados_SIS1.b1_5 = st_1b1[5];
principal.Estados_SIS1.b1_6 = st_1b1[6];    
principal.Estados_SIS1.b2_3 = st_1b2[3];
principal.Estados_SIS1.b2_4 = st_1b2[4];    
principal.ParametrosClima_SIS1.LoadB3 = load_1b2[3];
principal.ParametrosClima_SIS1.LoadB4 = load_1b2[4];
//ESTADOS B. PRIM & SEC SIS2/VAUX
principal.Estados_SIS2.b1_1 = st_1b1[1];    
principal.Estados_SIS2.b1_2 = st_1b1[2];
principal.Estados_SIS2.b1_3 = st_1b1[3];    
principal.Estados_SIS2.b2_1 = st_1b2[1];
principal.Estados_SIS2.b2_2 = st_1b2[2];    
principal.ParametrosClima_SIS2.LoadB1 = load_1b2[1];
principal.ParametrosClima_SIS2.LoadB2 = load_1b2[2];
principal.Estados_SIS2.V1aux = (ISOV1_S && ISOV1_C) === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.V2aux = (ISOV2_S && ISOV2_C) === 1? estadosStyles.on : estadosStyles.sinconexion;
//----------------------------------------BREAKERS TUPS IN OUT---------------------------------------------
//---------------------------------------------------------------------------------------------------------
//PARAMETROS DE UPS SIS1
principal.ParametrosUPS_SIS1.V_in = Number.parseFloat(V_TUPSIN_1A_0?.toFixed(2));
principal.ParametrosUPS_SIS1.V_out = Number.parseFloat(V_TUPSOUT_1A_0?.toFixed(2));
principal.ParametrosUPS_SIS1.I_out = Number.parseFloat(I_TUPSOUT_1A_0?.toFixed(2));
principal.ParametrosUPS_SIS1.P_out = Number.parseFloat(P_TUPSOUT_1A_0?.toFixed(2));
//PARAMETROS DE UPS SIS2
principal.ParametrosUPS_SIS2.V_in = Number.parseFloat(V_TUPSIN_2A_0?.toFixed(2));
principal.ParametrosUPS_SIS2.V_out = Number.parseFloat(V_TUPSOUT_2A_0?.toFixed(2));
principal.ParametrosUPS_SIS2.I_out = Number.parseFloat(I_TUPSOUT_2A_0?.toFixed(2));
principal.ParametrosUPS_SIS2.P_out = Number.parseFloat(P_TUPSOUT_2A_0?.toFixed(2));
//----------------------------------------------SENSORES --------------------------------------------------
//---------------------------------------------------------------------------------------------------------
//SENSORES DE TUBERIAS SIS2
principal.ParametrosClima_SIS2.T_sum_prim = Number.parseFloat(TEMP_S_PRI ?.toFixed(2));
principal.ParametrosClima_SIS2.T_sum_sec = Number.parseFloat(TEMP_S_SEC ?.toFixed(2));
principal.ParametrosClima_SIS2.T_tanque = Number.parseFloat(TEMP_S_TAN ?.toFixed(2));
principal.ParametrosClima_SIS2.T_ret = Number.parseFloat(TEMP_R ?.toFixed(2));
//-----------------------------------ESTADOS, ALARMAS Y PARÁMETROS DE GENERADORES--------------------------
//---------------------------------------------------------------------------------------------------------
//ESTADOS
principal.Estados_SIS1.gen1 = st_gen[1];
principal.Estados_SIS1.gen2 = st_gen[2];
principal.Estados_SIS1.gen3 = st_gen[3];
principal.Estados_SIS2.gen4 = st_gen[4];
principal.Estados_SIS2.gen5 = st_gen[5];
principal.Estados_SIS2.gen6 = st_gen[6];
//ALARMAS
principal.Alarmas_SIS1.gen1 = e_stop_gen[1];    
principal.Alarmas_SIS1.gen2 = e_stop_gen[2];
principal.Alarmas_SIS1.gen3 = e_stop_gen[3];
principal.Alarmas_SIS2.gen4 = e_stop_gen[4];
principal.Alarmas_SIS2.gen5 = e_stop_gen[5];
principal.Alarmas_SIS2.gen6 = e_stop_gen[6];
//STATUS Y PARAMETROS DE SISTEMA DE GENERACIÓN SIS1&2
principal.Estados_Principales.gen_SIS1 = st_gen_carga[1] > 0 || st_gen_carga[2] > 0 || st_gen_carga[3] > 0? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.gen_SIS2 = st_gen_carga[4] > 0 || st_gen_carga[5] > 0 || st_gen_carga[6] > 0? estadosStyles.on : estadosStyles.sinconexion;
let voltageSIS1_gen = (vll_genSIS[1] +++ vll_genSIS[2] +++ vll_genSIS[3]) / 2;
    principal.ParametrosGEN_SIS1.V_out = voltageSIS1_gen;
let voltageSIS2_gen = (vll_genSIS[4] +++ vll_genSIS[5] +++ vll_genSIS[6]) / 2;
    principal.ParametrosGEN_SIS2.V_out = Number.parseFloat(voltageSIS2_gen?.toFixed(2));
let corrienteSIS1_gen = (st_gen_carga[1] +++ st_gen_carga[2] +++ st_gen_carga[3]);
    principal.ParametrosGEN_SIS1.I_out = corrienteSIS1_gen;
let corrienteSIS2_gen = (st_gen_carga[4] +++ st_gen_carga[5] +++ st_gen_carga[6]);
    principal.ParametrosGEN_SIS2.I_out = corrienteSIS2_gen;
let potenciaSIS1_gen = (pot_genSIS[1] +++ pot_genSIS[2] +++ pot_genSIS[3]);
    principal.ParametrosGEN_SIS1.P_out = potenciaSIS1_gen;
let potenciaSIS2_gen = (pot_genSIS[4] +++ pot_genSIS[5] +++ pot_genSIS[6]);
    principal.ParametrosGEN_SIS2.P_out = potenciaSIS2_gen;
let cargaSIS1_gen = potenciaSIS1_gen * 1000 / 2430; 
    principal.ParametrosGEN_SIS1.Load =  Number.parseFloat(cargaSIS1_gen?.toFixed(2));
let cargaSIS2_gen = potenciaSIS1_gen * 1000 / 2430; 
    principal.ParametrosGEN_SIS2.Load =  Number.parseFloat(cargaSIS2_gen?.toFixed(2));
//------------------------------------ESTADOS DE SISTEMA DE CLIMATIZACÓN-----------------------------------
//---------------------------------------------------------------------------------------------------------
/*principal.Estados_Principales.clima_SIS1 = SYS_1_EN === 1? estadosStyles.on : estadosStyles.sinconexion;*/
principal.Estados_Principales.clima_SIS2 = SYS_2_EN === 1? estadosStyles.on : estadosStyles.sinconexion;

//-----------------------------------------PARAMETROS TRANSFORMADOR (PQM)-----------------------------------
principal.ParametrosElec.Vab_Tr01 = Number.parseFloat(VAB_TR01?.toFixed(2));
principal.ParametrosElec.Vbc_Tr01 = Number.parseFloat(VBC_TR01?.toFixed(2));
principal.ParametrosElec.Vca_Tr01 = Number.parseFloat(VCA_TR01?.toFixed(2));
principal.ParametrosElec.Ia_Tr01 = Number.parseFloat(Ia_TR01?.toFixed(2));
principal.ParametrosElec.Ib_Tr01 = Number.parseFloat(Ib_TR01?.toFixed(2));
principal.ParametrosElec.Ic_Tr01 = Number.parseFloat(Ic_TR01?.toFixed(2));
let Pot3F = Pt_TR01 / 100;
    principal.ParametrosElec.Pt_Tr01 = Number.parseFloat(Pot3F?.toFixed(1));

//-----------------------------------------PARAMETROS Y ESTADOS CELDA MT (ECOLUZ)---------------------------
let Voltaje_CMTL1 = VAB_CMT/1000;
    principal.ParametrosElec.V_CMTL1 = Number.parseFloat(Voltaje_CMTL1?.toFixed(1));
let Voltaje_CMTL2 = VBC_CMT/1000;
    principal.ParametrosElec.V_CMTL2 = Number.parseFloat(Voltaje_CMTL2?.toFixed(1));
let Voltaje_CMTL3 = VCA_CMT/1000;
    principal.ParametrosElec.V_CMTL3 = Number.parseFloat(Voltaje_CMTL3?.toFixed(1));
let Vprom_CMTAVG = VAVG_CMT/1000;
    principal.ParametrosElec.V_CMTAVG = Number.parseFloat(Vprom_CMTAVG?.toFixed(1));
principal.Estados_Principales.VAB_CMT = Voltaje_CMTL1 > 0? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.VBC_CMT = Voltaje_CMTL2 > 0? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.VCA_CMT = Voltaje_CMTL3 > 0? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.ST_CMT =  Voltaje_CMTL1 > 0 &&  Voltaje_CMTL2 > 0 &&  Voltaje_CMTL3 > 0? estadosStyles.on : estadosStyles.alarma;
console.log(principal);

return principal;

};

export default dataPrincipal;