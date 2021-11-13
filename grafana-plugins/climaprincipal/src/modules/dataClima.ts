import { PanelData, InterpolateFunction} from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataClima } from 'components/variables';
import estadosStyles from 'styles/estadosStyles';

const dataClima = (data: PanelData, options: SimpleOptions, replaceVariables: InterpolateFunction): DataClima => {  
    console.log('data: ', data);
    console.log('options: ', options);
    console.log(replaceVariables);

//ESTADO DEL SISTEMA
let SYS_EN = data.series.find(({ name }) => name?.includes('DATA.SYS_EN.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;

//SENSORES DE TEMPERATURA SIST.2
let TEMP_S_PRI = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_PRI.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_S_SEC = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_SEC.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_S_TAN = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_TAN.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_R = data.series.find(({ name }) => name?.includes('DATA.TEMP_R.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
//SENSORES DE TEMPERATURA SIST.1
/*let TEMP_S_PRI = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_PRI.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_S_SEC = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_SEC.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_S_TAN = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_TAN.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_R = data.series.find(({ name }) => name?.includes('DATA.TEMP_R.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;*/

//ESTADOS BOMBAS SISTEMA 1&2
let F1_B1_4_S = data.series.find(({ name }) => name?.includes('DATA.F1_B1_4_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_5_S = data.series.find(({ name }) => name?.includes('DATA.F1_B1_5_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_6_S = data.series.find(({ name }) => name?.includes('DATA.F1_B1_6_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_3_S = data.series.find(({ name }) => name?.includes('DATA.F1_B2_3_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_4_S = data.series.find(({ name }) => name?.includes('DATA.F1_B2_4_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
/*let F1_B2_3_L = data.series.find(({ name }) => name?.includes('DATA.F1_B2_3_L.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_4_L = data.series.find(({ name }) => name?.includes('DATA.F1_B2_4_L.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;*/

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

//ALARMAS DE BOMBAS SISTEMA 1&2
let F1_B1_4_A = data.series.find(({ name }) => name?.includes('DATA.F1_B1_4_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_5_A = data.series.find(({ name }) => name?.includes('DATA.F1_B1_5_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_6_A = data.series.find(({ name }) => name?.includes('DATA.F1_B1_6_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_3_A = data.series.find(({ name }) => name?.includes('DATA.F1_B2_3_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_4_A = data.series.find(({ name }) => name?.includes('DATA.F1_B2_4_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;

let F1_B1_1_A = data.series.find(({ name }) => name?.includes('DATA.F1_B1_1_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_2_A = data.series.find(({ name }) => name?.includes('DATA.F1_B1_2_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B1_3_A = data.series.find(({ name }) => name?.includes('DATA.F1_B1_3_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_1_A = data.series.find(({ name }) => name?.includes('DATA.F1_B2_1_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_B2_2_A = data.series.find(({ name }) => name?.includes('DATA.F1_B2_2_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;

//ESTADOS DE VALVULAS AUXILIARES
let ISOV1_S = data.series.find(({ name }) => name?.includes('DATA.ISOV1_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV1_C = data.series.find(({ name }) => name?.includes('DATA.ISOV1_C.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV2_S = data.series.find(({ name }) => name?.includes('DATA.ISOV2_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV2_C = data.series.find(({ name }) => name?.includes('DATA.ISOV2_C.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;

//ESTADOS CHILLERS Y PARAMETROS
let F1_EA_3_S = data.series.find(({ name }) => name?.includes('DATA.F1_EA_3_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_EA_4_S = data.series.find(({ name }) => name?.includes('DATA.F1_EA_4_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_EA_1_S = data.series.find(({ name }) => name?.includes('DATA.F1_EA_1_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_EA_2_S = data.series.find(({ name }) => name?.includes('DATA.F1_EA_2_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMPSUM_CHILL2 = data.series.find(({ name }) => name?.includes('TEMPSUM_CHILL2'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMPRET_CHILL2 = data.series.find(({ name }) => name?.includes('TEMPRET_CHILL2'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMPSUM_CHILL1 = data.series.find(({ name }) => name?.includes('TEMPSUM_CHILL1'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMPRET_CHILL1 = data.series.find(({ name }) => name?.includes('TEMPRET_CHILL1'))?.fields[1].state?.calcs
?.lastNotNull;

//ESTADOS DE VALVULAS SISTEMA 2
let SUM1_S = data.series.find(({ name }) => name?.includes('DATA.SUM1_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let SUM2_S = data.series.find(({ name }) => name?.includes('DATA.SUM2_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let SUM3_S = data.series.find(({ name }) => name?.includes('DATA.SUM3_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let SUM4_S = data.series.find(({ name }) => name?.includes('DATA.SUM4_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let SUM5_S = data.series.find(({ name }) => name?.includes('DATA.SUM5_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let SUM6_S = data.series.find(({ name }) => name?.includes('DATA.SUM6_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let SUM7_S = data.series.find(({ name }) => name?.includes('DATA.SUM7_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let SUM8_S = data.series.find(({ name }) => name?.includes('DATA.SUM8_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let SUM9_S = data.series.find(({ name }) => name?.includes('DATA.SUM9_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let SUM10_S = data.series.find(({ name }) => name?.includes('DATA.SUM10_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let SUM11_S = data.series.find(({ name }) => name?.includes('DATA.SUM11_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let SUM12_S = data.series.find(({ name }) => name?.includes('DATA.SUM12_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;

let RET1_S = data.series.find(({ name }) => name?.includes('DATA.RET1_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let RET2_S = data.series.find(({ name }) => name?.includes('DATA.RET2_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let RET3_S = data.series.find(({ name }) => name?.includes('DATA.RET3_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let RET4_S = data.series.find(({ name }) => name?.includes('DATA.RET4_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let RET5_S = data.series.find(({ name }) => name?.includes('DATA.RET5_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let RET6_S = data.series.find(({ name }) => name?.includes('DATA.RET6_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let RET7_S = data.series.find(({ name }) => name?.includes('DATA.RET7_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let RET8_S = data.series.find(({ name }) => name?.includes('DATA.RET8_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let RET9_S = data.series.find(({ name }) => name?.includes('DATA.RET9_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let RET10_S = data.series.find(({ name }) => name?.includes('DATA.RET10_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let RET11_S = data.series.find(({ name }) => name?.includes('DATA.RET11_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let RET12_S = data.series.find(({ name }) => name?.includes('DATA.RET12_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;

//PARAMETROS ELECTRICOS
let VIN_UPS_CHI1A = data.series.find(({ name }) => name?.includes('VIN_UPS_CHI1A'))?.fields[1].state?.calcs
?.lastNotNull;
let VOUT_UPS_CHI1A = data.series.find(({ name }) => name?.includes('VOUT_UPS_CHI1A'))?.fields[1].state?.calcs
?.lastNotNull;
let KW_UPS_CHI1A = data.series.find(({ name }) => name?.includes('KW_UPS_CHI1A'))?.fields[1].state?.calcs
?.lastNotNull/1000;
let VIN_UPS_CHI2A = data.series.find(({ name }) => name?.includes('VIN_UPS_CHI2A'))?.fields[1].state?.calcs
?.lastNotNull;
let VOUT_UPS_CHI2A = data.series.find(({ name }) => name?.includes('VOUT_UPS_CHI2A'))?.fields[1].state?.calcs
?.lastNotNull;
let KW_UPS_CHI2A = data.series.find(({ name }) => name?.includes('KW_UPS_CHI2A'))?.fields[1].state?.calcs
?.lastNotNull/1000;

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
        Bomba_1_b1_5: '',
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
        B1_4: '',
        B1_5: '',
        B1_6: '',
        B2_3: '',
        B2_4: '',
    },
    AlarmasSIS2:{
        B1_1: '',
        B1_2: '',
        B1_3: '',
        B2_1: '',
        B2_2: '',
    },
    Tuberias:{
        B1_1: '', B1_2: '', B1_3: '', B2_1: '', B2_2: '',
        VAux1S2: '', VAux2S2: '',
        B1_4: '', B1_5: '', B1_6: '', B2_3: '', B2_4: '',
        VAux1S1: '', VAux2S1: '',
    },
}

//Estado del sistema
//clima.EstadosSIS1.SIS1habilitado = SYS_EN === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.SIS2habilitado = SYS_EN === 1? estadosStyles.enable : estadosStyles.sinConexion;

//Parámetros Chillers Sistema 2
clima.ParametrosSIS2.TsuminEa2 = Number.parseFloat(TEMPSUM_CHILL2?.toFixed(2));
clima.ParametrosSIS2.TretEa2 = Number.parseFloat(TEMPRET_CHILL2?.toFixed(2));
clima.ParametrosSIS2.TsuminEa1 = Number.parseFloat(TEMPSUM_CHILL1?.toFixed(2));
clima.ParametrosSIS2.TretEa1 = Number.parseFloat(TEMPRET_CHILL1?.toFixed(2));

//Parámetros Principales y Sensores Sistema 2
clima.ParametrosSIS2.TsuminS2 = Number.parseFloat(TEMP_S_PRI?.toFixed(2));
clima.ParametrosSIS2.TretS2 = Number.parseFloat(TEMP_R?.toFixed(2));
clima.ParametrosSIS2.TempSumPrimS2 = Number.parseFloat(TEMP_S_PRI?.toFixed(2));
clima.ParametrosSIS2.TempSumSecS2 = Number.parseFloat(TEMP_S_SEC?.toFixed(2));
clima.ParametrosSIS2.TempTanqueS2 = Number.parseFloat(TEMP_S_TAN?.toFixed(2));
clima.ParametrosSIS2.TempRetS2 = Number.parseFloat(TEMP_R?.toFixed(2));

//Parámetros de UPSCHI
clima.ParametrosSIS1.VinUPSCHI_01A = Number.parseFloat(VIN_UPS_CHI1A?.toFixed(2));
clima.ParametrosSIS1.VoutUPSCHI_01A = Number.parseFloat(VOUT_UPS_CHI1A?.toFixed(2));
clima.ParametrosSIS1.PotUPSCHI_01A = Number.parseFloat(KW_UPS_CHI1A?.toFixed(2));
clima.ParametrosSIS2.VinUPSCHI_02A = Number.parseFloat(VIN_UPS_CHI2A?.toFixed(2));
clima.ParametrosSIS2.VoutUPSCHI_02A = Number.parseFloat(VOUT_UPS_CHI2A?.toFixed(2));
clima.ParametrosSIS2.PotUPSCHI_02A = Number.parseFloat(KW_UPS_CHI2A?.toFixed(2));

//Estados de chillers Sistema 1&2
clima.EstadosSIS1.Chiller_1_ea_3 = F1_EA_3_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.Chiller_1_ea_4 = F1_EA_4_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.Chiller_1_ea_1 = F1_EA_1_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.Chiller_1_ea_2 = F1_EA_2_S === 1? estadosStyles.ok : estadosStyles.sinConexion;

//Estados de bombas Sistema 1&2
clima.EstadosSIS1.Bomba_1_b1_4 = F1_B1_4_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.Bomba_1_b1_5 = F1_B1_5_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.Bomba_1_b1_6 = F1_B1_6_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.Bomba_1_b2_3 = F1_B2_3_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.Bomba_1_b2_4 = F1_B2_4_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.Bomba_1_b1_1 = F1_B1_1_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.Bomba_1_b1_2 = F1_B1_2_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.Bomba_1_b1_3 = F1_B1_3_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.Bomba_1_b2_1 = F1_B2_1_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.Bomba_1_b2_2 = F1_B2_2_S === 1? estadosStyles.ok : estadosStyles.sinConexion;

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
/*clima.ParametrosSIS1.LoadB2_3 = Number.parseFloat(F1_B2_3_L?.toFixed(2));
clima.ParametrosSIS1.LoadB2_4 = Number.parseFloat(F1_B2_4_L?.toFixed(2));*/
clima.ParametrosSIS2.LoadB2_1 = Number.parseFloat(F1_B2_1_L?.toFixed(2));
clima.ParametrosSIS2.LoadB2_2 = Number.parseFloat(F1_B2_2_L?.toFixed(2));

//Estados de Valvulas auxiliares
/*clima.EstadosSIS1.VAux1S1 = ISOV3_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.VAux2S1 = ISOV4_S === 1? estadosStyles.ok : estadosStyles.sinConexion;*/
clima.EstadosSIS2.VAux1S2 = (ISOV1_S && ISOV1_S) === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.VAux2S2 = (ISOV2_S && ISOV2_C) === 1? estadosStyles.ok : estadosStyles.sinConexion;

//Estados de valvulas suministro Sistema 2
clima.EstadosSIS2.S2UMA1 = SUM1_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.S2UMA2 = SUM2_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.S2UMA3 = SUM3_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.S2UMA4 = SUM4_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.S2UMA5 = SUM5_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.S2UMA6 = SUM6_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.S2UMA7 = SUM7_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.S2UMA8 = SUM8_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.S2UMA9 = SUM9_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.S2UMA10 = SUM10_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.S2UMA11 = SUM11_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.S2UMA12 = SUM12_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
//Estados de valvulas retorno Sistema 2
clima.EstadosSIS2.R2UMA1 = RET1_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.R2UMA2 = RET2_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.R2UMA3 = RET3_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.R2UMA4 = RET4_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.R2UMA5 = RET5_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.R2UMA6 = RET6_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.R2UMA7 = RET7_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.R2UMA8 = RET8_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.R2UMA9 = RET9_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.R2UMA10 = RET10_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.R2UMA11 = RET11_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS2.R2UMA12 = RET12_S === 1? estadosStyles.ok : estadosStyles.sinConexion;

//Estados de valvulas suministro Sistema 2
/*clima.EstadosSIS1.S1UMA1 = SUM1_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.S1UMA2 = SUM2_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.S1UMA3 = SUM3_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.S1UMA4 = SUM4_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.S1UMA5 = SUM5_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.S1UMA6 = SUM6_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.S1UMA7 = SUM7_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.S1UMA8 = SUM8_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.S1UMA9 = SUM9_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.S1UMA10 = SUM10_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.S1UMA11 = SUM11_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.S1UMA12 = SUM12_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
//Estados de valvulas retorno Sistema 2
clima.EstadosSIS1.R1UMA1 = RET1_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.R1UMA2 = RET2_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.R1UMA3 = RET3_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.R1UMA4 = RET4_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.R1UMA5 = RET5_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.R1UMA6 = RET6_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.R1UMA7 = RET7_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.R1UMA8 = RET8_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.R1UMA9 = RET9_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.R1UMA10 = RET10_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.R1UMA11 = RET11_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.EstadosSIS1.R1UMA12 = RET12_S === 1? estadosStyles.ok : estadosStyles.sinConexion;*/

//Estados tuberias Sist.2
clima.Tuberias.B1_1 = F1_B1_1_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.B1_2 = F1_B1_2_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.B1_3 = F1_B1_3_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.B2_1 = F1_B2_1_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.B2_2 = F1_B2_2_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.VAux1S2 = (ISOV1_S && ISOV1_C && F1_B1_2_S) === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.VAux2S2 = (ISOV2_S && ISOV2_C && F1_B1_2_S) === 1? estadosStyles.on : estadosStyles.sinConexion;

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