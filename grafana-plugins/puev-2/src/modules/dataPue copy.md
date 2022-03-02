import { SimpleOptions } from 'types';
import { PanelData } from '@grafana/data';
import { DataPue } from 'components/variables';
import estadoStyles from 'styles/estadosStyles';

const dataPue = (data: PanelData, options:SimpleOptions): DataPue => {  
    console.log('data: ', data);
    console.log('options: ', options);

    //ESTADO
    let VLL_AVG = 200;//data.series.find(({ name }) => name?.includes('DATA.VLL_AVG.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
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
   /* //CARGA PDU
    let TPDU_1A_POW_REAL = data.series.find(({ name }) => name?.includes('TPDU_1A_POW_REAL'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let TPDU_1A_POW_APPRT = data.series.find(({ name }) => name?.includes('TPDU_1A_POW_APPRT'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let TPDU_2A_POW_REAL = data.series.find(({ name }) => name?.includes('TPDU_2A_POW_REAL'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let TPDU_2A_POW_APPRT = data.series.find(({ name }) => name?.includes('TPDU_2A_POW_APPRT'))?.fields[1].state?.calcs
    ?.lastNotNull;*/
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
    
    
    //POTENCIAS KVA DE PDI´S SISTEMA 1&2
    let SIS1_POT_PDI_ = [];
    let SIS2_POT_PDI_ = [];
    for (let i = 1; i <= 10; i++) {
        SIS1_POT_PDI_[i] = data.series.find(({ name }) => name?.includes('SIS1_POT_PDI_' + i))?.fields[1].state?.calcs?.lastNotNull;
        SIS2_POT_PDI_[i] = data.series.find(({ name }) => name?.includes('SIS2_POT_PDI_' + i))?.fields[1].state?.calcs?.lastNotNull;
        if (SIS1_POT_PDI_[i] === null || SIS1_POT_PDI_[i] === 0) {
            SIS1_POT_PDI_[i] = 0;
        }
        else {
            SIS1_POT_PDI_[i] = SIS1_POT_PDI_[i];
        }
        if (SIS2_POT_PDI_[i] === null || SIS2_POT_PDI_[i] === 0) {
            SIS2_POT_PDI_[i] = 0;
        }
        else {
            SIS2_POT_PDI_[i] = SIS2_POT_PDI_[i];
        }
    }
    //POTENCIAS UPS SATELITAL
    let POT_UPS_SAT_1A = data.series.find(({ name }) => name?.includes('POT_UPS_SAT_1A'))?.fields[1].state?.calcs?.lastNotNull;
    let POT_UPS_SAT_2A = data.series.find(({ name }) => name?.includes('POT_UPS_SAT_2A'))?.fields[1].state?.calcs?.lastNotNull;

    //POTENCIAS DER RECTIFICADORES
    let V_RECT_1A = data.series.find(({ name }) => name?.includes('V_RECT_1A'))?.fields[1].state?.calcs?.lastNotNull;
    let I_RECT_1A = data.series.find(({ name }) => name?.includes('I_RECT_1A'))?.fields[1].state?.calcs?.lastNotNull;
    let V_RECT_2A = data.series.find(({ name }) => name?.includes('V_RECT_2A'))?.fields[1].state?.calcs?.lastNotNull;
    let I_RECT_2A = data.series.find(({ name }) => name?.includes('I_RECT_2A'))?.fields[1].state?.calcs?.lastNotNull;


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
//let carga_pdu_kw = (TPDU_1A_POW_REAL + TPDU_2A_POW_REAL) / 10
//let carga_pdu_kva = (TPDU_1A_POW_APPRT + TPDU_2A_POW_APPRT) / 10

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
//let uso_pdu = (carga_pdu_kva) * 100 / carga_total_kva
//let uso_rk = (carga_rk_kva) * 100 / carga_total_kva
let uso_uma = (carga_total_uma_kva) * 100 / carga_total_kva;
//let uso_chiller = (carga_chiller_kva) * 100 / carga_total_kva
let uso_sg = (carga_sg_kva) * 100 / carga_total_kva

//SUMATORIA DE POTENCIAS KVA PDI
let sum_pot_sis1_pdi = SIS1_POT_PDI_[1] +++ SIS1_POT_PDI_[2] +++ SIS1_POT_PDI_[3] +++ SIS1_POT_PDI_[4] +++ SIS1_POT_PDI_[5] +++ 
                       SIS1_POT_PDI_[6] +++ SIS1_POT_PDI_[7] +++ SIS1_POT_PDI_[8] +++ SIS1_POT_PDI_[9] +++ SIS1_POT_PDI_[10]; 
let sum_pot_sis2_pdi = SIS2_POT_PDI_[1] +++ SIS2_POT_PDI_[2] +++ SIS2_POT_PDI_[3] +++ SIS2_POT_PDI_[4] +++ SIS2_POT_PDI_[5] +++ 
                       SIS2_POT_PDI_[6] +++ SIS2_POT_PDI_[7] +++ SIS2_POT_PDI_[8] +++ SIS2_POT_PDI_[9] +++ SIS2_POT_PDI_[10]; 
let sum_pot_pdis = (sum_pot_sis1_pdi + sum_pot_sis2_pdi) / 10; 
let carga_pdu_kw = sum_pot_pdis;

//POTENCIA 3FASE PUE
let pot_pqm = APPPOW_3PHAS / 100;

//POTENCIA SATELITAL
let pot_total_ups_sat = (POT_UPS_SAT_1A + POT_UPS_SAT_2A) / 1000;

//POTENCIA DE ATS_REC
let pot_rect_1a =  (V_RECT_1A * I_RECT_1A) / 1000
let pot_rect_2a = (V_RECT_2A * I_RECT_2A) / 1000
let pot_total_rec = (pot_rect_1a + pot_rect_2a)

//CALCULO DE PUE
let calculo_pue =  pot_pqm / (sum_pot_pdis + pot_total_ups_sat + pot_total_rec); 

//CALCULO DE DICE
let calculo_dcie = 1 / calculo_pue * 100;

//DIRECCIONAMIENTO
pue.Cargas_kw.Carga_total_kw = Number.parseFloat(carga_total_kw?.toFixed(2));
pue.Cargas_kva.Carga_total_kva = Number.parseFloat(carga_total_kva?.toFixed(2));
pue.Principal.ENERGIA = Number.parseFloat(energia_total?.toFixed(2));
pue.Cargas_kw.ups_kw = Number.parseFloat(carga_ups_kw?.toFixed(2));
pue.Cargas_kva.ups_kva = Number.parseFloat(carga_ups_kva?.toFixed(2));
pue.Cargas_kw.pdu_kw = Number.parseFloat(carga_pdu_kw?.toFixed(2));
//pue.Cargas_kva.pdu_kva = Number.parseFloat(carga_pdu_kva?.toFixed(2));
pue.Cargas_kva.uma_kva = Number.parseFloat(carga_total_uma_kva?.toFixed(2));
pue.Cargas_kw.sg_kw = Number.parseFloat(carga_sg_kw?.toFixed(2));
pue.Cargas_kva.sg_kva = Number.parseFloat(carga_sg_kva?.toFixed(2));
pue.Cargas_uso.Carga_total_uso = Number.parseFloat(uso_total?.toFixed(2)); 
pue.Cargas_uso.ups_uso = Number.parseFloat(uso_ups?.toFixed(2));
//pue.Cargas_uso.pdu_uso = Number.parseFloat(uso_pdu?.toFixed(2));
//pue.Cargas_uso.rk_uso = Number.parseFloat(uso_rk?.toFixed(2));
pue.Cargas_uso.uma_uso = Number.parseFloat(uso_uma?.toFixed(2));
//pue.Cargas_uso.chiller_uso = Number.parseFloat(uso_chiller?.toFixed(2));
pue.Cargas_uso.sg_uso = Number.parseFloat(uso_sg?.toFixed(2));
pue.Principal.PUE = Number.parseFloat(calculo_pue?.toFixed(2));
pue.Principal.DCIE = Number.parseFloat(calculo_dcie?.toFixed(2));


//ESTADO
pue.Estado.Estado = VLL_AVG > 13.6? estadoStyles.eee : estadoStyles.gen;
    console.log(pue);

return pue;
};

export default dataPue;