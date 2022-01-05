import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataClima } from 'components/variables';
import estadosStyles from 'styles/estadosStyles';

const dataClima = (data: PanelData, options: SimpleOptions): DataClima => {  
    console.log('data: ', data);
    console.log('options: ', options);

//ESTADOS
let st_on = estadosStyles.ok;
let st_off = estadosStyles.sinConexion; 

//ESTADO DEL SISTEMA
let SYS_EN_SIS1 = data.series.find(({ name }) => name?.includes('DATA.SYS_EN_SIS1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let SYS_EN_SIS2 = data.series.find(({ name }) => name?.includes('DATA.SYS_EN_SIS2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let SYS_ALARM_SIS1 = data.series.find(({ name }) => name?.includes('DATA.SYS_ALARM_SIS1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let SYS_ALARM_SIS2 = data.series.find(({ name }) => name?.includes('DATA.SYS_ALARM_SIS2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
//SENSORES DE TEMPERATURA SIS 1&2
let TEMP_S_PRI_SIS1 = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_PRI_SIS1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_S_SEC_SIS1 = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_SEC_SIS1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_S_TAN_SIS1 = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_TAN_SIS1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_R_SIS1 = data.series.find(({ name }) => name?.includes('DATA.TEMP_R_SIS1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_S_PRI_SIS2 = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_PRI_SIS2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_S_SEC_SIS2 = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_SEC_SIS2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_S_TAN_SIS2 = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_TAN_SIS2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull; 
let TEMP_R_SIS2 = data.series.find(({ name }) => name?.includes('DATA.TEMP_R_SIS2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;


//ESTADOS BOMBAS SISTEMA 1&2
let F1_B1_1_S = data.series.find(({ name }) => name?.includes('DATA.F1_B1_1_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_2_S = data.series.find(({ name }) => name?.includes('DATA.F1_B1_2_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_3_S = data.series.find(({ name }) => name?.includes('DATA.F1_B1_3_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_4_S = data.series.find(({ name }) => name?.includes('DATA.F1_B1_4_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_5_S = data.series.find(({ name }) => name?.includes('DATA.F1_B1_5_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_6_S = data.series.find(({ name }) => name?.includes('DATA.F1_B1_6_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_1_S = data.series.find(({ name }) => name?.includes('DATA.F1_B2_1_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_2_S = data.series.find(({ name }) => name?.includes('DATA.F1_B2_2_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_3_S = data.series.find(({ name }) => name?.includes('DATA.F1_B2_3_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_4_S = data.series.find(({ name }) => name?.includes('DATA.F1_B2_4_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
//PORCENTAJE DE CARGA B. SECUNDARIAS
let F1_B2_1_L = data.series.find(({ name }) => name?.includes('DATA.F1_B2_1_L.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_2_L = data.series.find(({ name }) => name?.includes('DATA.F1_B2_2_L.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_3_L = data.series.find(({ name }) => name?.includes('DATA.F1_B2_3_L.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_4_L = data.series.find(({ name }) => name?.includes('DATA.F1_B2_4_L.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
//ALARMAS DE BOMBAS SISTEMA 1&2
let F1_B1_1_A = data.series.find(({ name }) => name?.includes('DATA.F1_B1_1_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_2_A = data.series.find(({ name }) => name?.includes('DATA.F1_B1_2_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_3_A = data.series.find(({ name }) => name?.includes('DATA.F1_B1_3_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_4_A = data.series.find(({ name }) => name?.includes('DATA.F1_B1_4_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_5_A = data.series.find(({ name }) => name?.includes('DATA.F1_B1_5_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_6_A = data.series.find(({ name }) => name?.includes('DATA.F1_B1_6_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_1_A = data.series.find(({ name }) => name?.includes('DATA.F1_B2_1_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_2_A = data.series.find(({ name }) => name?.includes('DATA.F1_B2_2_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_3_A = data.series.find(({ name }) => name?.includes('DATA.F1_B2_3_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_4_A = data.series.find(({ name }) => name?.includes('DATA.F1_B2_4_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;

//ESTADOS DE VALVULAS AUXILIARES
let ISOV1_S_SIS1 = data.series.find(({ name }) => name?.includes('DATA.ISOV1_S_SIS1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV1_C_SIS1 = data.series.find(({ name }) => name?.includes('DATA.ISOV1_C_SIS1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV2_S_SIS1 = data.series.find(({ name }) => name?.includes('DATA.ISOV2_S_SIS1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV2_C_SIS1 = data.series.find(({ name }) => name?.includes('DATA.ISOV2_C_SIS1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;

let ISOV1_S_SIS2 = data.series.find(({ name }) => name?.includes('DATA.ISOV1_S_SIS2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV1_C_SIS2 = data.series.find(({ name }) => name?.includes('DATA.ISOV1_C_SIS2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV2_S_SIS2 = data.series.find(({ name }) => name?.includes('DATA.ISOV2_S_SIS2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV2_C_SIS2 = data.series.find(({ name }) => name?.includes('DATA.ISOV2_C_SIS2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;


//ESTADOS, ALARMAS Y MANT, PARAMETROS CHILLERS
let ST_EA1 = data.series.find(({ name }) => name?.includes('ST_EA1'))?.fields[1].state?.calcs?.lastNotNull;
let ST_EA2 = data.series.find(({ name }) => name?.includes('ST_EA2'))?.fields[1].state?.calcs?.lastNotNull;
let ST_EA3 = data.series.find(({ name }) => name?.includes('ST_EA3'))?.fields[1].state?.calcs?.lastNotNull;
let ST_EA4 = data.series.find(({ name }) => name?.includes('ST_EA4'))?.fields[1].state?.calcs?.lastNotNull;

let F1_EA_1_MS = data.series.find(({ name }) => name?.includes('F1_EA_1_MS'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_EA_2_MS = data.series.find(({ name }) => name?.includes('F1_EA_2_MS'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_EA_3_MS = data.series.find(({ name }) => name?.includes('F1_EA_3_MS'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_EA_4_MS = data.series.find(({ name }) => name?.includes('F1_EA_4_MS'))?.fields[1].state?.calcs
?.lastNotNull;

let EA_1_AL = data.series.find(({ name }) => name?.includes('EA_1_AL'))?.fields[1].state?.calcs
?.lastNotNull;
let EA_2_AL = data.series.find(({ name }) => name?.includes('EA_2_AL'))?.fields[1].state?.calcs
?.lastNotNull;
let EA_3_AL = data.series.find(({ name }) => name?.includes('EA_3_AL'))?.fields[1].state?.calcs
?.lastNotNull;
let EA_4_AL = data.series.find(({ name }) => name?.includes('EA_4_AL'))?.fields[1].state?.calcs
?.lastNotNull;


let TEMPSUM_CHILL1 = data.series.find(({ name }) => name?.includes('TEMPSUM_CHILL1'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMPRET_CHILL1 = data.series.find(({ name }) => name?.includes('TEMPRET_CHILL1'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMPSUM_CHILL2 = data.series.find(({ name }) => name?.includes('TEMPSUM_CHILL2'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMPRET_CHILL2 = data.series.find(({ name }) => name?.includes('TEMPRET_CHILL2'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMPSUM_CHILL3 = data.series.find(({ name }) => name?.includes('TEMPSUM_CHILL3'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMPRET_CHILL3 = data.series.find(({ name }) => name?.includes('TEMPRET_CHILL3'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMPSUM_CHILL4 = data.series.find(({ name }) => name?.includes('TEMPSUM_CHILL4'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMPRET_CHILL4 = data.series.find(({ name }) => name?.includes('TEMPRET_CHILL4'))?.fields[1].state?.calcs
?.lastNotNull;

//ESTADOS DE VALVULAS
let sum1_uma = [];
let sum2_uma = [];
let ret1_uma = [];
let ret2_uma = [];
for (let i = 1; i <= 12; i++) {
sum1_uma[i] = data.series.find(({ name }) => name?.includes('DATA.S1UM' + i + '_S.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
sum2_uma[i] = data.series.find(({ name }) => name?.includes('DATA.S2UM' + i + '_S.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
ret1_uma[i] = data.series.find(({ name }) => name?.includes('DATA.R1UM' + i + '_S.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
ret2_uma[i] = data.series.find(({ name }) => name?.includes('DATA.R2UM' + i + '_S.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
if (sum1_uma[i] === 1) {
    sum1_uma[i] = st_on;
    }   else {
    sum1_uma[i] = st_off;
    }
    if (sum2_uma[i] === 1) {
        sum2_uma[i] = st_on;
        }   else {
            sum2_uma[i] = st_off;
        }
        if (ret1_uma[i] === 1) {
            ret1_uma[i] = st_on;
            }   else {
                ret1_uma[i] = st_off;
            }
            if (ret2_uma[i] === 1) {
                ret2_uma[i] = st_on;
                }   else {
                    ret2_uma[i] = st_off;
                }
}

//PARAMETROS ELECTRICOS
let VIN_UPS_CHI1A = data.series.find(({ name }) => name?.includes('VIN_UPS_CHI1A'))?.fields[1].state?.calcs
?.lastNotNull;
let VOUT_UPS_CHI1A = data.series.find(({ name }) => name?.includes('VOUT_UPS_CHI1A'))?.fields[1].state?.calcs
?.lastNotNull;
let L1_KW_UPS_CHI1A = data.series.find(({ name }) => name?.includes('L1_KW_UPS_CHI1A'))?.fields[1].state?.calcs
?.lastNotNull;
let L2_KW_UPS_CHI1A = data.series.find(({ name }) => name?.includes('L2_KW_UPS_CHI1A'))?.fields[1].state?.calcs
?.lastNotNull;
let L3_KW_UPS_CHI1A = data.series.find(({ name }) => name?.includes('L3_KW_UPS_CHI1A'))?.fields[1].state?.calcs
?.lastNotNull;
let VIN_UPS_CHI2A = data.series.find(({ name }) => name?.includes('VIN_UPS_CHI2A'))?.fields[1].state?.calcs
?.lastNotNull;
let VOUT_UPS_CHI2A = data.series.find(({ name }) => name?.includes('VOUT_UPS_CHI2A'))?.fields[1].state?.calcs
?.lastNotNull;
let L1_KW_UPS_CHI2A = data.series.find(({ name }) => name?.includes('L1_KW_UPS_CHI2A'))?.fields[1].state?.calcs
?.lastNotNull;
let L2_KW_UPS_CHI2A = data.series.find(({ name }) => name?.includes('L2_KW_UPS_CHI2A'))?.fields[1].state?.calcs
?.lastNotNull;
let L3_KW_UPS_CHI2A = data.series.find(({ name }) => name?.includes('L3_KW_UPS_CHI2A'))?.fields[1].state?.calcs
?.lastNotNull;

let clima: DataClima ={
    ParametrosSIS1:{
        TsuminEa3: 0, TretEa3: 0,
        TsuminEa4: 0, TretEa4: 0,
        TsuminS1: 0, TretS1: 0, 
        LoadB2_3: 0, LoadB2_4: 0,
        TempSumPrimS1: 0, TempSumSecS1: 0, TempTanqueS1: 0, TempRetS1: 0,
        VinUPSCHI_01A: 0, VoutUPSCHI_01A: 0, PotUPSCHI_01A: 0,
    },
    ParametrosSIS2:{
        TsuminEa1: 0, TretEa1: 0,
        TsuminEa2: 0, TretEa2: 0,
        TsuminS2: 0, TretS2: 0, 
        LoadB2_1: 0, LoadB2_2: 0,
        TempSumPrimS2: 0, TempSumSecS2: 0, TempTanqueS2: 0, TempRetS2: 0,
        VinUPSCHI_02A: 0, VoutUPSCHI_02A: 0, PotUPSCHI_02A: 0,
    },
    EstadosSIS1:{
        SIS1habilitado: '',
        Chiller_1_ea_3: '',
        Chiller_1_ea_4: '',
        Bomba_1_b1_4: '',
        Bomba_1_b1_5: estadosStyles.on,
        Bomba_1_b1_6: '',
        Bomba_1_b2_3: '',
        Bomba_1_b2_4: '',
        S1UMA1: '', S1UMA2: '', S1UMA3: '', S1UMA4: '', S1UMA5: '', S1UMA6: '',
        S1UMA7: '', S1UMA8: '', S1UMA9: '', S1UMA10: '', S1UMA11: '', S1UMA12: '',
        R1UMA1: '', R1UMA2: '', R1UMA3: '', R1UMA4: '', R1UMA5: '', R1UMA6: '',
        R1UMA7: '', R1UMA8: '', R1UMA9: '', R1UMA10: '', R1UMA11: '', R1UMA12: '',
        VAux1S1: '',
        VAux2S1: '',
    },
    EstadosSIS2:{
        SIS2habilitado: '',
        Chiller_1_ea_1: '',
        Chiller_1_ea_2: '',
        Bomba_1_b1_1: '',
        Bomba_1_b1_2: '',
        Bomba_1_b1_3: '',
        Bomba_1_b2_1: '',
        Bomba_1_b2_2: '',
        S2UMA1: '', S2UMA2: '', S2UMA3: '', S2UMA4: '', S2UMA5: '', S2UMA6: '',
        S2UMA7: '', S2UMA8: '', S2UMA9: '', S2UMA10: '', S2UMA11: '', S2UMA12: '',
        R2UMA1: '', R2UMA2: '', R2UMA3: '', R2UMA4: '', R2UMA5: '', R2UMA6: '',
        R2UMA7: '', R2UMA8: '', R2UMA9: '', R2UMA10: '', R2UMA11: '', R2UMA12: '',
        VAux1S2: '',
        VAux2S2: '',
    },
    AlarmasSIS1:{
        B1_4: '', B1_5: '', B1_6: '', B2_3: '', B2_4: '',
        alEA3: '', alEA4: '', mantEA3: '', mantEA4: '',
        SIS1alarma: '',
    },
    AlarmasSIS2:{
        B1_1: '', B1_2: '', B1_3: '', B2_1: '', B2_2: '',
        alEA1: '', alEA2: '', mantEA1: '', mantEA2: '',
        SIS2alarma: '',
    },
    Tuberias:{
        B1_1: '', B1_2: '', B1_3: '', B2_1: '', B2_2: '',
        VAux1S2: '', VAux2S2: '',
        B1_4: '', B1_5: '', B1_6: '', B2_3: '', B2_4: '',
        VAux1S1: '', VAux2S1: '',
    },
}

//Estado del sistema
clima.EstadosSIS1.SIS1habilitado = SYS_EN_SIS1 === 1? estadosStyles.enable : estadosStyles.sinConexion;
clima.EstadosSIS2.SIS2habilitado = SYS_EN_SIS2 === 1? estadosStyles.enable : estadosStyles.sinConexion;
clima.AlarmasSIS1.SIS1alarma = SYS_ALARM_SIS1 === 1? estadosStyles.alarma : estadosStyles.sinConexion;
clima.AlarmasSIS2.SIS2alarma = SYS_ALARM_SIS2 === 1? estadosStyles.alarma : estadosStyles.sinConexion;


//Parámetros Chillers Sistema 1&2
clima.ParametrosSIS2.TsuminEa1 = Number.parseFloat(TEMPSUM_CHILL1?.toFixed(2));
clima.ParametrosSIS2.TretEa1 = Number.parseFloat(TEMPRET_CHILL1?.toFixed(2));
clima.ParametrosSIS2.TsuminEa2 = Number.parseFloat(TEMPSUM_CHILL2?.toFixed(2));
clima.ParametrosSIS2.TretEa2 = Number.parseFloat(TEMPRET_CHILL2?.toFixed(2));
clima.ParametrosSIS1.TsuminEa3 = Number.parseFloat(TEMPSUM_CHILL3?.toFixed(2));
clima.ParametrosSIS1.TretEa3 = Number.parseFloat(TEMPRET_CHILL3?.toFixed(2));
clima.ParametrosSIS1.TsuminEa4 = Number.parseFloat(TEMPSUM_CHILL4?.toFixed(2));
clima.ParametrosSIS1.TretEa4 = Number.parseFloat(TEMPRET_CHILL4?.toFixed(2));


//Parámetros Principales y Sensores Sistema 1&2
clima.ParametrosSIS1.TsuminS1 = Number.parseFloat(TEMP_S_PRI_SIS1?.toFixed(2));
clima.ParametrosSIS1.TretS1 = Number.parseFloat(TEMP_R_SIS2?.toFixed(2));
clima.ParametrosSIS1.TempSumPrimS1 = Number.parseFloat(TEMP_S_PRI_SIS1?.toFixed(2));
clima.ParametrosSIS1.TempSumSecS1 = Number.parseFloat(TEMP_S_SEC_SIS1?.toFixed(2));
clima.ParametrosSIS1.TempTanqueS1 = Number.parseFloat(TEMP_S_TAN_SIS1?.toFixed(2));
clima.ParametrosSIS1.TempRetS1 = Number.parseFloat(TEMP_R_SIS1?.toFixed(2));
clima.ParametrosSIS2.TsuminS2 = Number.parseFloat(TEMP_S_PRI_SIS2?.toFixed(2));
clima.ParametrosSIS2.TretS2 = Number.parseFloat(TEMP_R_SIS2?.toFixed(2));
clima.ParametrosSIS2.TempSumPrimS2 = Number.parseFloat(TEMP_S_PRI_SIS2?.toFixed(2));
clima.ParametrosSIS2.TempSumSecS2 = Number.parseFloat(TEMP_S_SEC_SIS2?.toFixed(2));
clima.ParametrosSIS2.TempTanqueS2 = Number.parseFloat(TEMP_S_TAN_SIS2?.toFixed(2));
clima.ParametrosSIS2.TempRetS2 = Number.parseFloat(TEMP_R_SIS2?.toFixed(2));

//Parámetros de UPSCHI
clima.ParametrosSIS1.VinUPSCHI_01A = Number.parseFloat(VIN_UPS_CHI1A?.toFixed(2));
clima.ParametrosSIS1.VoutUPSCHI_01A = Number.parseFloat(VOUT_UPS_CHI1A?.toFixed(2));
//clima.ParametrosSIS1.PotUPSCHI_01A = Number.parseFloat(L1KW_UPS_CHI1A?.toFixed(2));
let PotUPSCHI_01A = (L1_KW_UPS_CHI1A + L2_KW_UPS_CHI1A + L3_KW_UPS_CHI1A)/1000
if (L1_KW_UPS_CHI1A !== undefined && L2_KW_UPS_CHI1A !== undefined && L3_KW_UPS_CHI1A !== undefined) 
    clima.ParametrosSIS1.PotUPSCHI_01A = Number.parseFloat(PotUPSCHI_01A?.toFixed(2));
clima.ParametrosSIS2.VinUPSCHI_02A = Number.parseFloat(VIN_UPS_CHI2A?.toFixed(2));
clima.ParametrosSIS2.VoutUPSCHI_02A = Number.parseFloat(VOUT_UPS_CHI2A?.toFixed(2));
//clima.ParametrosSIS2.PotUPSCHI_02A = Number.parseFloat(KW_UPS_CHI2A?.toFixed(2));
let PotUPSCHI_02A = (L1_KW_UPS_CHI2A + L2_KW_UPS_CHI2A + L3_KW_UPS_CHI2A)/1000
if (L1_KW_UPS_CHI2A !== undefined && L2_KW_UPS_CHI2A !== undefined && L3_KW_UPS_CHI2A !== undefined)
    clima.ParametrosSIS2.PotUPSCHI_02A = Number.parseFloat(PotUPSCHI_02A?.toFixed(2));

//Estados y alarmas de chillers Sistema 1&2
clima.EstadosSIS2.Chiller_1_ea_1 = ST_EA1 === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.Chiller_1_ea_2 = ST_EA2 === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.Chiller_1_ea_3 = ST_EA3 === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.Chiller_1_ea_4 = ST_EA4 === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.AlarmasSIS2.mantEA1 = F1_EA_1_MS === 2? estadosStyles.mant : estadosStyles.sinConexion;
clima.AlarmasSIS2.mantEA2 = F1_EA_2_MS === 2? estadosStyles.mant : estadosStyles.sinConexion;
clima.AlarmasSIS1.mantEA3 = F1_EA_3_MS === 2? estadosStyles.mant : estadosStyles.sinConexion;
clima.AlarmasSIS1.mantEA4 = F1_EA_4_MS === 2? estadosStyles.mant : estadosStyles.sinConexion;
clima.AlarmasSIS2.alEA1 = EA_1_AL === 2? estadosStyles.mant : estadosStyles.sinConexion;
clima.AlarmasSIS2.alEA2 = EA_2_AL === 2? estadosStyles.mant : estadosStyles.sinConexion;
clima.AlarmasSIS1.alEA3 = EA_3_AL === 2? estadosStyles.mant : estadosStyles.sinConexion;
clima.AlarmasSIS1.alEA4 = EA_4_AL === 2? estadosStyles.mant : estadosStyles.sinConexion;

//Estados de bombas Sistema 1&2
clima.EstadosSIS2.Bomba_1_b1_1 = F1_B1_1_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.Bomba_1_b1_2 = F1_B1_2_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.Bomba_1_b1_3 = F1_B1_3_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.Bomba_1_b1_4 = F1_B1_4_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.Bomba_1_b1_5 = F1_B1_5_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.Bomba_1_b1_6 = F1_B1_6_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.Bomba_1_b2_1 = F1_B2_1_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.Bomba_1_b2_2 = F1_B2_2_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.Bomba_1_b2_3 = F1_B2_3_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.Bomba_1_b2_4 = F1_B2_4_S === 1? estadosStyles.ok : estadosStyles.sinConexion;

//Alarmas de bombas Sistema 1&2
clima.AlarmasSIS1.B1_4 = F1_B1_4_A === 2? estadosStyles.alarma : estadosStyles.sinConexion;
clima.AlarmasSIS1.B1_5 = F1_B1_5_A === 2? estadosStyles.alarma : estadosStyles.sinConexion;
clima.AlarmasSIS1.B1_6 = F1_B1_6_A === 2? estadosStyles.alarma : estadosStyles.sinConexion;
clima.AlarmasSIS1.B2_3 = F1_B2_3_A === 2? estadosStyles.alarma : estadosStyles.sinConexion;
clima.AlarmasSIS1.B2_4 = F1_B2_4_A === 2? estadosStyles.alarma : estadosStyles.sinConexion;
clima.AlarmasSIS2.B1_1 = F1_B1_1_A === 2? estadosStyles.alarma : estadosStyles.sinConexion;
clima.AlarmasSIS2.B1_2 = F1_B1_2_A === 2? estadosStyles.alarma : estadosStyles.sinConexion;
clima.AlarmasSIS2.B1_3 = F1_B1_3_A === 2? estadosStyles.alarma : estadosStyles.sinConexion;
clima.AlarmasSIS2.B2_1 = F1_B2_1_A === 2? estadosStyles.alarma : estadosStyles.sinConexion;
clima.AlarmasSIS2.B2_2 = F1_B2_2_A === 2? estadosStyles.alarma : estadosStyles.sinConexion;

//% de carga de bombas secundarias Sistema 1&2
clima.ParametrosSIS2.LoadB2_1 = Number.parseFloat(F1_B2_1_L?.toFixed(2));
clima.ParametrosSIS2.LoadB2_2 = Number.parseFloat(F1_B2_2_L?.toFixed(2));
clima.ParametrosSIS1.LoadB2_3 = Number.parseFloat(F1_B2_3_L?.toFixed(2));
clima.ParametrosSIS1.LoadB2_4 = Number.parseFloat(F1_B2_4_L?.toFixed(2));

//Estados de Valvulas auxiliares
clima.EstadosSIS1.VAux1S1 = ISOV1_S_SIS1 === 1 && ISOV1_C_SIS1 === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.VAux2S1 = ISOV2_S_SIS1 === 1 && ISOV2_C_SIS1 === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.VAux1S2 = ISOV1_S_SIS2 === 1 && ISOV1_C_SIS2 === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.VAux2S2 = ISOV2_S_SIS2 === 1 && ISOV2_C_SIS2 === 1? estadosStyles.ok : estadosStyles.sinConexion;

//Estados de válvulas corregidos
clima.EstadosSIS1.S1UMA1 = sum1_uma[1];
clima.EstadosSIS1.S1UMA2 = sum1_uma[2];
clima.EstadosSIS1.S1UMA3 = sum1_uma[3];
clima.EstadosSIS1.S1UMA4 = sum1_uma[4];
clima.EstadosSIS1.S1UMA5 = sum1_uma[5];
clima.EstadosSIS1.S1UMA6 = sum1_uma[6];
clima.EstadosSIS1.S1UMA7 = sum1_uma[7];
clima.EstadosSIS1.S1UMA8 = sum1_uma[8];
clima.EstadosSIS1.S1UMA9 = sum1_uma[9];
clima.EstadosSIS1.S1UMA10 = sum1_uma[10];
clima.EstadosSIS1.S1UMA11 = sum1_uma[11];
clima.EstadosSIS1.S1UMA12 = sum1_uma[12];

clima.EstadosSIS2.S2UMA1 = sum2_uma[1];
clima.EstadosSIS2.S2UMA2 = sum2_uma[2];
clima.EstadosSIS2.S2UMA3 = sum2_uma[3];
clima.EstadosSIS2.S2UMA4 = sum2_uma[4];
clima.EstadosSIS2.S2UMA5 = sum2_uma[5];
clima.EstadosSIS2.S2UMA6 = sum2_uma[6];
clima.EstadosSIS2.S2UMA7 = sum2_uma[7];
clima.EstadosSIS2.S2UMA8 = sum2_uma[8];
clima.EstadosSIS2.S2UMA9 = sum2_uma[9];
clima.EstadosSIS2.S2UMA10 = sum2_uma[10];
clima.EstadosSIS2.S2UMA11 = sum2_uma[11];
clima.EstadosSIS2.S2UMA12 = sum2_uma[12];

clima.EstadosSIS1.R1UMA1 = ret1_uma[1];
clima.EstadosSIS1.R1UMA2 = ret1_uma[2];
clima.EstadosSIS1.R1UMA3 = ret1_uma[3];
clima.EstadosSIS1.R1UMA4 = ret1_uma[4];
clima.EstadosSIS1.R1UMA5 = ret1_uma[5];
clima.EstadosSIS1.R1UMA6 = ret1_uma[6];
clima.EstadosSIS1.R1UMA7 = ret1_uma[7];
clima.EstadosSIS1.R1UMA8 = ret1_uma[8];
clima.EstadosSIS1.R1UMA9 = ret1_uma[9];
clima.EstadosSIS1.R1UMA10 = ret1_uma[10];
clima.EstadosSIS1.R1UMA11 = ret1_uma[11];
clima.EstadosSIS1.R1UMA12 = ret1_uma[12]; 

clima.EstadosSIS2.R2UMA1 = ret2_uma[1];
clima.EstadosSIS2.R2UMA2 = ret2_uma[2];
clima.EstadosSIS2.R2UMA3 = ret2_uma[3];
clima.EstadosSIS2.R2UMA4 = ret2_uma[4];
clima.EstadosSIS2.R2UMA5 = ret2_uma[5];
clima.EstadosSIS2.R2UMA6 = ret2_uma[6];
clima.EstadosSIS2.R2UMA7 = ret2_uma[7];
clima.EstadosSIS2.R2UMA8 = ret2_uma[8];
clima.EstadosSIS2.R2UMA9 = ret2_uma[9];
clima.EstadosSIS2.R2UMA10 = ret2_uma[10];
clima.EstadosSIS2.R2UMA11 = ret2_uma[11];
clima.EstadosSIS2.R2UMA12 = ret2_uma[12];

//Estados tuberias Sist 1&2
clima.Tuberias.B1_1 = F1_B1_1_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.B1_2 = F1_B1_2_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.B1_3 = F1_B1_3_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.B1_4 = F1_B1_4_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.B1_5 = F1_B1_5_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.B1_6 = F1_B1_6_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.B2_1 = F1_B2_1_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.B2_2 = F1_B2_2_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.B2_3 = F1_B2_3_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.B2_4 = F1_B2_4_S === 1? estadosStyles.on : estadosStyles.sinConexion;

clima.Tuberias.VAux1S1 = ISOV1_S_SIS1 === 1 && ISOV1_C_SIS1 === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.VAux2S1 = ISOV2_S_SIS1 === 1 && ISOV2_C_SIS1 === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.VAux1S2 = ISOV1_S_SIS2 === 1 && ISOV1_C_SIS2 === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.VAux2S2 = ISOV2_S_SIS2 === 1 && ISOV2_C_SIS2 === 1? estadosStyles.on : estadosStyles.sinConexion;

//Calculos de voltaje
/*let VinUPSCHI_01A = (INPUT_VOLTAGE + INPUT_VOLTAGE_2 + INPUT_VOLTAGE_3) / 3;
if (INPUT_VOLTAGE !== undefined && INPUT_VOLTAGE_2 !== undefined && INPUT_VOLTAGE_3 !== undefined) {
   ups.Parametros.CorrienteOut = Number.parseFloat(CorrienteOut?.toFixed(2));
let VoutUPSCHI_01A = (OUTPUT_VOLTAGE + OUTPUT_VOLTAGE_2 + OUTPUT_VOLTAGE_3) / 3;
if (OUTPUT_VOLTAGE !== undefined && OUTPUT_VOLTAGE_2 !== undefined && OUTPUT_VOLTAGE_3 !== undefined) {
   ups.Parametros.CorrienteOut = Number.parseFloat(CorrienteOut?.toFixed(2));*/

console.log(clima);

return clima;

};

export default dataClima;
