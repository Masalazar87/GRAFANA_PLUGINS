import { SimpleOptions } from 'types';
import { PanelData } from '@grafana/data';
import { DataPue } from 'components/variables';
import estadoStyles from 'styles/estadosStyles';

const dataPue = (data: PanelData, options:SimpleOptions): DataPue => {  
    console.log('data: ', data);
    console.log('options: ', options);

    //ESTADO
    let VLL_AVG = data.series.find(({ name }) => name?.includes('DATA.VLL_AVG.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //CARGA TOTAL PQM
    let REALPOW_3PHAS = data.series.find(({ name }) => name?.includes('DATA.REALPOW_3PHAS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let APPPOW_3PHAS = data.series.find(({ name }) => name?.includes('DATA.APPPOW_3PHAS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;    
    let ENY_POS_REAL = data.series.find(({ name }) => name?.includes('DATA.ENY_POS_REAL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull; 
    //CARGA UPS
    let TUPSIN_1A_POW_REAL = data.series.find(({ name }) => name?.includes('TUPSIN_1A_POW_REAL'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let TUPSIN_1A_POW_APPRT = data.series.find(({ name }) => name?.includes('TUPSIN_1A_POW_APPRT'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let TUPSIN_2A_POW_REAL = data.series.find(({ name }) => name?.includes('TUPSIN_2A_POW_REAL'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let TUPSIN_2A_POW_APPRT = data.series.find(({ name }) => name?.includes('TUPSIN_2A_POW_APPRT'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //CARGA PDU
    let TPDU_1A_POW_REAL = data.series.find(({ name }) => name?.includes('TPDU_1A_POW_REAL'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let TPDU_1A_POW_APPRT = data.series.find(({ name }) => name?.includes('TPDU_1A_POW_APPRT'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let TPDU_2A_POW_REAL = data.series.find(({ name }) => name?.includes('TPDU_2A_POW_REAL'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let TPDU_2A_POW_APPRT = data.series.find(({ name }) => name?.includes('TPDU_2A_POW_APPRT'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //CARGA SG
    let POW_REAL_TOTAL = data.series.find(({ name }) => name?.includes('DATA.POW_REAL_TOTAL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let POW_APPRT_TOTAL = data.series.find(({ name }) => name?.includes('DATA.POW_APPRT_TOTAL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //CARGA UMAS
    let SIS1_KVA_UMA = [];
    let SIS2_KVA_UMA = [];
    for (let i = 1; i <= 12; i++) {
    SIS1_KVA_UMA[i] = data.series.find(({ name }) => name?.includes('SIS1_KVA_UMA' + i))?.fields[1].state?.calcs?.lastNotNull;
    SIS2_KVA_UMA[i] = data.series.find(({ name }) => name?.includes('SIS2_KVA_UMA' + i))?.fields[1].state?.calcs?.lastNotNull;
    if (SIS1_KVA_UMA[i] === null || SIS1_KVA_UMA[i] === 0) {
        SIS1_KVA_UMA[i] = 0;
        }   else {
            SIS1_KVA_UMA[i] = SIS1_KVA_UMA[i];
        } 
    if (SIS2_KVA_UMA[i] === null || SIS2_KVA_UMA[i] === 0) {
        SIS2_KVA_UMA[i] = 0;
        }   else {
            SIS2_KVA_UMA[i] = SIS2_KVA_UMA[i];
        }
    }
    
    //PUE
   

let pue: DataPue = {
    Estado: {
        Estado: '',
    },
    Principal: {
        PUE: 0,
        DCIE: 0,
        ENERGIA: 0,
    },
    Cargas_kw: {
        Carga_total_kw: 0,
        ups_kw: 0,
        pdu_kw: 0,
        rk_kw: 0,
        uma_kw: 0,
        chiller_kw: 0,
        sg_kw: 0,
    },
    Cargas_kva: {
        Carga_total_kva: 0,
        ups_kva: 0,
        pdu_kva: 0,
        rk_kva: 0,
        uma_kva: 0,
        chiller_kva: 0,
        sg_kva: 0,
    },
    Cargas_uso: {
        Carga_total_uso: 0,
        ups_uso: 0,
        pdu_uso: 0,
        rk_uso: 0,
        uma_uso: 0,
        chiller_uso: 0,
        sg_uso: 0,
    }
}

//CALCULOS
let carga_total_kw = (REALPOW_3PHAS) / 100
let carga_total_kva = (APPPOW_3PHAS) / 100
let energia_total = (ENY_POS_REAL) / 10
let carga_ups_kw = (TUPSIN_1A_POW_REAL + TUPSIN_2A_POW_REAL) / 10
let carga_ups_kva = (TUPSIN_1A_POW_APPRT + TUPSIN_2A_POW_APPRT) /10
let carga_pdu_kw = (TPDU_1A_POW_REAL + TPDU_2A_POW_REAL) / 10
let carga_pdu_kva = (TPDU_1A_POW_APPRT + TPDU_2A_POW_APPRT) / 10
//let carga_rk_kw =
//let carga_rk_kva =
let carga_uma_kva_SIS1 = (SIS1_KVA_UMA[1] + SIS1_KVA_UMA[2] + SIS1_KVA_UMA[3] + SIS1_KVA_UMA[4] + SIS1_KVA_UMA[5] + SIS1_KVA_UMA[6] +
                          SIS1_KVA_UMA[7] + SIS1_KVA_UMA[8] + SIS1_KVA_UMA[9] + SIS1_KVA_UMA[10] + SIS1_KVA_UMA[11] + SIS1_KVA_UMA[12])
let carga_uma_kva_SIS2 = (SIS2_KVA_UMA[1] + SIS2_KVA_UMA[2] + SIS2_KVA_UMA[3] + SIS2_KVA_UMA[4] + SIS2_KVA_UMA[5] + SIS2_KVA_UMA[6] +
                          SIS2_KVA_UMA[7] + SIS2_KVA_UMA[8] + SIS2_KVA_UMA[9] + SIS2_KVA_UMA[10] + SIS2_KVA_UMA[11] + SIS2_KVA_UMA[12])
let carga_total_uma_kva = (carga_uma_kva_SIS1 + carga_uma_kva_SIS2)
//let carga_chiller_kw =
//let carga_chiller_kva =
let carga_sg_kw = (POW_REAL_TOTAL) / 10
let carga_sg_kva = (POW_APPRT_TOTAL) / 10

//CALCULOS DE PORCENTAJE DE USO DE CARGA
let uso_total = (carga_total_kva) * 100 / carga_total_kva
//let uso_total = (carga_total_kva) * 100 / 1500
let uso_ups = (carga_ups_kva) * 100 / carga_total_kva
//let uso_ups = (carga_ups_kva) * 100 / 2400
let uso_pdu = (carga_pdu_kva) * 100 / carga_total_kva
//let uso_rk = (carga_rk_kva) * 100 / carga_total_kva
let uso_uma = (carga_total_uma_kva) * 100 / carga_total_kva;
//let uso_chiller = (carga_chiller_kva) * 100 / carga_total_kva
let uso_sg = (carga_sg_kva) * 100 / carga_total_kva

//CALCULO DE PUE
//let calculo_pue = ()

//DIRECCIONAMIENTO
pue.Cargas_kw.Carga_total_kw = Number.parseFloat(carga_total_kw?.toFixed(2));
pue.Cargas_kva.Carga_total_kva = Number.parseFloat(carga_total_kva?.toFixed(2));
pue.Principal.ENERGIA = Number.parseFloat(energia_total?.toFixed(2));
pue.Cargas_kw.ups_kw = Number.parseFloat(carga_ups_kw?.toFixed(2));
pue.Cargas_kva.ups_kva = Number.parseFloat(carga_ups_kva?.toFixed(2));
pue.Cargas_kw.pdu_kw = Number.parseFloat(carga_pdu_kw?.toFixed(2));
pue.Cargas_kva.pdu_kva = Number.parseFloat(carga_pdu_kva?.toFixed(2));
pue.Cargas_kva.uma_kva = Number.parseFloat(carga_total_uma_kva?.toFixed(2));
pue.Cargas_kw.sg_kw = Number.parseFloat(carga_sg_kw?.toFixed(2));
pue.Cargas_kva.sg_kva = Number.parseFloat(carga_sg_kva?.toFixed(2));
pue.Cargas_uso.Carga_total_uso = Number.parseFloat(uso_total?.toFixed(2)); 
pue.Cargas_uso.ups_uso = Number.parseFloat(uso_ups?.toFixed(2));
pue.Cargas_uso.pdu_uso = Number.parseFloat(uso_pdu?.toFixed(2));
//pue.Cargas_uso.rk_uso = Number.parseFloat(uso_rk?.toFixed(2));
pue.Cargas_uso.uma_uso = Number.parseFloat(uso_uma?.toFixed(2));
//pue.Cargas_uso.chiller_uso = Number.parseFloat(uso_chiller?.toFixed(2));
pue.Cargas_uso.sg_uso = Number.parseFloat(uso_sg?.toFixed(2));

//ESTADO
pue.Estado.Estado = VLL_AVG > 13.6? estadoStyles.eee : estadoStyles.gen;
    console.log(pue);

return pue;
};

export default dataPue;