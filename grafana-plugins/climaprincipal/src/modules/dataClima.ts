import { PanelData, InterpolateFunction} from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataClima } from 'components/variables';
import estadosStyles from 'styles/estadosStyles';

const dataClima = (data: PanelData, options: SimpleOptions, replaceVariables: InterpolateFunction): DataClima => {  
    console.log('data: ', data);
    console.log('options: ', options);
    console.log(replaceVariables);


//let CHILL_RUN = data.series.find(({ name }) => name?.includes('DATA.CHILL_RUN.VALUE'))?.fields[1].state?.calcs
//?.lastNotNull;
let LEAVE_CHILL_TEMP = data.series.find(({ name }) => name?.includes('DATA.LEAVE_CHILL_TEMP.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let RET_CHILL_TEMP = data.series.find(({ name }) => name?.includes('DATA.RET_CHILL_TEMP.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;

let TEMP_S_PRI = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_PRI.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_S_SEC = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_SEC.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_S_TAN = data.series.find(({ name }) => name?.includes('DATA.TEMP_S_TAN.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let TEMP_R = data.series.find(({ name }) => name?.includes('DATA.TEMP_R.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;

//ESTADOS BOMBAS
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

//ESTADOS DE VALVULAS AUXILIARES
let ISOV1_S = data.series.find(({ name }) => name?.includes('DATA.ISOV1_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV2_S = data.series.find(({ name }) => name?.includes('DATA.ISOV2_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;

//ESTADOS CHILLERS
let F1_EA_1_S = data.series.find(({ name }) => name?.includes('DATA.F1_EA_1_S.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let F1_EA_2_S = data.series.find(({ name }) => name?.includes('DATA.F1_EA_2_S.VALUE'))?.fields[1].state?.calcs
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

//ALARMAS DE BOMBAS SISTEMA 2
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

let clima: DataClima ={
    Principales:{
        TsuminEa1: 0, TretEa1: 0,
        TsuminEa2: 0, TretEa2: 0,
        TsuminEa3: 0, TretEa3: 0,
        TsuminEa4: 0, TretEa4: 0,
        TsuminS2: 0, TretS2: 0,
        LoadB2_1: 0, LoadB2_2: 0,
        LoadB2_3: 0, LoadB2_4: 0,
        TempSumPrim: 0, TempSumSec: 0, TempTanque: 0, TempRet: 0,
    },
    Estados:{
        Bomba_1_b1_1: '',
        Bomba_1_b1_2: '',
        Bomba_1_b1_3: '',
        Bomba_1_b2_1: '',
        Bomba_1_b2_2: '',
        Chiller_1_ea_1: '',
        Chiller_1_ea_2: '',
        Chiller_1_ea_3: '',
        Chiller_1_ea_4: '',
        S2UMA1: '', S2UMA2: '', S2UMA3: '', S2UMA4: '', S2UMA5: '', S2UMA6: '', 
        S2UMA7: '', S2UMA8: '', S2UMA9: '', S2UMA10: '', S2UMA11: '', S2UMA12: '',
        R2UMA1: '', R2UMA2: '', R2UMA3: '', R2UMA4: '', R2UMA5: '', R2UMA6: '', 
        R2UMA7: '', R2UMA8: '', R2UMA9: '', R2UMA10: '', R2UMA11: '', R2UMA12: '',
        VAux1S2: '', VAux2S2: '',
    },
    Alarmas:{
        B1_1: '',
        B1_2: '',
        B1_3: '',
        B2_1: '',
        B2_2: '',
    },
    Tuberias:{
        B1_1: '', B1_2: '', B1_3: '', B2_1: '', B2_2: '',
        EA1: '', EA2: '', EA3: '', EA4: '',
    },
}

//Principales
//clima.Estados.Chiller_1_ea_2 = CHILL_RUN === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Principales.TsuminEa2 = Number.parseFloat(LEAVE_CHILL_TEMP?.toFixed(2));
clima.Principales.TretEa2 = Number.parseFloat(RET_CHILL_TEMP?.toFixed(2));

//clima.Estados.Chiller_1_ea_1 = CHILL_RUN === 1? estadosStyles.ok : estadosStyles.sinConexion;
//clima.Principales.TsuminEa1 = Number.parseFloat(LEAVE_CHILL_TEMP?.toFixed(2));
//clima.Principales.TretEa1 = Number.parseFloat(RET_CHILL_TEMP?.toFixed(2));

clima.Principales.TsuminS2 = Number.parseFloat(TEMP_S_PRI?.toFixed(2));
clima.Principales.TretS2 = Number.parseFloat(TEMP_R?.toFixed(2));
clima.Principales.TempSumPrim = Number.parseFloat(TEMP_S_PRI?.toFixed(2));
clima.Principales.TempSumSec = Number.parseFloat(TEMP_S_SEC?.toFixed(2));
clima.Principales.TempTanque = Number.parseFloat(TEMP_S_TAN?.toFixed(2));
clima.Principales.TempRet = Number.parseFloat(TEMP_R?.toFixed(2));

//Estados de bombas
clima.Estados.Bomba_1_b1_1 = F1_B1_1_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.Bomba_1_b1_2 = F1_B1_2_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.Bomba_1_b1_3 = F1_B1_3_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.Bomba_1_b2_1 = F1_B2_1_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.Bomba_1_b2_2 = F1_B2_2_S === 1? estadosStyles.ok : estadosStyles.sinConexion;

clima.Alarmas.B1_1 = F1_B1_1_A === 2? estadosStyles.alarma : estadosStyles.sinConexion;
clima.Alarmas.B1_2 = F1_B1_2_A === 2? estadosStyles.alarma : estadosStyles.sinConexion;
clima.Alarmas.B1_3 = F1_B1_3_A === 2? estadosStyles.alarma : estadosStyles.sinConexion;
clima.Alarmas.B2_1 = F1_B2_1_A === 2? estadosStyles.alarma : estadosStyles.sinConexion;
clima.Alarmas.B2_2 = F1_B2_2_A === 2? estadosStyles.alarma : estadosStyles.sinConexion;

clima.Principales.LoadB2_1 = Number.parseFloat(F1_B2_1_L?.toFixed(2));
clima.Principales.LoadB2_2 = Number.parseFloat(F1_B2_2_L?.toFixed(2));

//Estados de Valvulas auxiliares
clima.Estados.VAux1S2 = ISOV1_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.VAux2S2 = ISOV2_S === 1? estadosStyles.ok : estadosStyles.sinConexion;

//Estados de chillers
clima.Estados.Chiller_1_ea_1 = F1_EA_1_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.Chiller_1_ea_2 = F1_EA_2_S === 1? estadosStyles.ok : estadosStyles.sinConexion;

//Estados de valvulas Sistema 2
clima.Estados.S2UMA1 = SUM1_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.S2UMA2 = SUM2_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.S2UMA3 = SUM3_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.S2UMA4 = SUM4_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.S2UMA5 = SUM5_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.S2UMA6 = SUM6_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.S2UMA7 = SUM7_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.S2UMA8 = SUM8_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.S2UMA9 = SUM9_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.S2UMA10 = SUM10_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.S2UMA11 = SUM11_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.S2UMA12 = SUM12_S === 1? estadosStyles.ok : estadosStyles.sinConexion;

clima.Estados.R2UMA1 = RET1_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.R2UMA2 = RET2_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.R2UMA3 = RET3_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.R2UMA4 = RET4_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.R2UMA5 = RET5_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.R2UMA6 = RET6_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.R2UMA7 = RET7_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.R2UMA8 = RET8_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.R2UMA9 = RET9_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.R2UMA10 = RET10_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.R2UMA11 = RET11_S === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Estados.R2UMA12 = RET12_S === 1? estadosStyles.ok : estadosStyles.sinConexion;

//Estados tuberias Sist.2
clima.Tuberias.B1_1 = F1_B1_1_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.B1_2 = F1_B1_2_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.B1_3 = F1_B1_3_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.B2_1 = F1_B2_1_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.B2_2 = F1_B2_2_S === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.EA1 = (F1_B1_1_S || F1_B1_2_S ||F1_EA_1_S ) === 1? estadosStyles.on : estadosStyles.sinConexion;
clima.Tuberias.EA2 = (F1_B1_3_S || F1_B1_2_S ||F1_EA_2_S ) === 1? estadosStyles.on : estadosStyles.sinConexion;

console.log(clima);
return clima;
};
export default dataClima;