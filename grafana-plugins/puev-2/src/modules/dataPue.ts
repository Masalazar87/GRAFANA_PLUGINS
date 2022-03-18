import { SimpleOptions } from 'types';
import { PanelData } from '@grafana/data';
import { DataPue } from 'components/variables';
import estadoStyles from 'styles/estadosStyles';

const dataPue = (data: PanelData, options:SimpleOptions): DataPue => {  
    console.log('data: ', data);
    console.log('options: ', options);
    
    //ESTADO
    //let VLL_AVG = 200;//data.series.find(({ name }) => name?.includes('DATA.VLL_AVG.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
    
    //CARGA TOTAL PQM
    //let REALPOW_3PHAS = data.series.find(({ name }) => name?.includes('DATA.REALPOW_3PHAS.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
    let APPPOW_3PHAS = data.series.find(({ name }) => name?.includes('DATA.APPPOW_3PHAS.VALUE'))?.fields[1].state?.calcs?.lastNotNull;    
    let ENY_POS_REAL = data.series.find(({ name }) => name?.includes('DATA.ENY_POS_REAL.VALUE'))?.fields[1].state?.calcs?.lastNotNull; 
   
    //POTENCIA DE TDP´S
    let POT_TDP1A = data.series.find(({ name }) => name?.includes('POT_TDP1A'))?.fields[1].state?.calcs?.lastNotNull;
    let POT_TDP2A = data.series.find(({ name }) => name?.includes('POT_TDP2A'))?.fields[1].state?.calcs?.lastNotNull;

    //CARGA PERDIDAS UPS (BREAKERS PRINCIPALES IN - OUT)
    //let TUPSIN_1A_POW_REAL = data.series.find(({ name }) => name?.includes('TUPSIN_1A_POW_REAL'))?.fields[1].state?.calcs?.lastNotNull;
    let TUPSIN_1A_POW_APPRT = data.series.find(({ name }) => name?.includes('TUPSIN_1A_POW_APPRT'))?.fields[1].state?.calcs?.lastNotNull;
    let TUPSOUT_1A_POW_APPRT = data.series.find(({ name }) => name?.includes('TUPSOUT_1A_POW_APPRT'))?.fields[1].state?.calcs?.lastNotNull;
    //let TUPSIN_2A_POW_REAL = data.series.find(({ name }) => name?.includes('TUPSIN_2A_POW_REAL'))?.fields[1].state?.calcs?.lastNotNull;
    let TUPSIN_2A_POW_APPRT = data.series.find(({ name }) => name?.includes('TUPSIN_2A_POW_APPRT'))?.fields[1].state?.calcs?.lastNotNull;
    let TUPSOUT_2A_POW_APPRT = data.series.find(({ name }) => name?.includes('TUPSOUT_2A_POW_APPRT'))?.fields[1].state?.calcs?.lastNotNull;
    
    //CARGA PERDIDAS PDI (BREAKER PRINCIPAL)
    let TPDU_1A_0_KVA = data.series.find(({ name }) => name?.includes('TPDU_1A_0_KVA'))?.fields[1].state?.calcs?.lastNotNull;
    let TPDU_2A_0_KVA = data.series.find(({ name }) => name?.includes('TPDU_2A_0_KVA'))?.fields[1].state?.calcs?.lastNotNull;
    
    //CARGA SG (BREAKER)
    //let POW_REAL_TOTAL = data.series.find(({ name }) => name?.includes('DATA.POW_REAL_TOTAL.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
    let POW_APPRT_TOTAL = data.series.find(({ name }) => name?.includes('DATA.POW_APPRT_TOTAL.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
    
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
        var audio = new Audio('components/audio/alarma');
         //audio.play();
          if (APPPOW_3PHAS > 1){
            audio.play();
           
      }

  
    //POTENCIAS UPS SATELITAL KW
    let POT_UPS_SAT_1A = data.series.find(({ name }) => name?.includes('POT_UPS_SAT_1A'))?.fields[1].state?.calcs?.lastNotNull;
    let POT_UPS_SAT_2A = data.series.find(({ name }) => name?.includes('POT_UPS_SAT_2A'))?.fields[1].state?.calcs?.lastNotNull;

    //POTENCIAS DER RECTIFICADORES KW
    let V_RECT_1A = data.series.find(({ name }) => name?.includes('V_RECT_1A'))?.fields[1].state?.calcs?.lastNotNull;
    let I_RECT_1A = data.series.find(({ name }) => name?.includes('I_RECT_1A'))?.fields[1].state?.calcs?.lastNotNull;
    let V_RECT_2A = data.series.find(({ name }) => name?.includes('V_RECT_2A'))?.fields[1].state?.calcs?.lastNotNull;
    let I_RECT_2A = data.series.find(({ name }) => name?.includes('I_RECT_2A'))?.fields[1].state?.calcs?.lastNotNull;

let pue: DataPue = {
    Estado: {
        Move: '',
        Estado: '',
        Estadoclass: '',
        Reactor1: '',
        Reactor2: '',
        Reactor3: '',
        Reactor4: '',
        Reactor5: '',
        Reactor6: '',
        Reactor7: '',
        Reactor8: '',
        Reactorcentral: '',
    },
    Principal: {
        PUE: 0,
        DCIE: 0,
        ENERGIA: 0,
    },
    Cargas_kva: {
        Carga_total_kva: 0,
        pdi_kva: 0,
        rect_kva: 0,
        sat_kva: 0,  
        chiller_kva: 0,
        uma_kva: 0,
        bombas_kva: 0,
        sg_kva: 0,
        perd_pdi_kva: 0, 
        perd_ups_kva: 0,
    },
    Cargas_uso: {
        Carga_total_uso: 0,
        pdi_uso: 0,
        rect_uso: 0,
        sat_uso: 0,
        chiller_uso: 0,
        uma_uso: 0,
        bombas_uso: 0,
        sg_uso: 0,
        perd_pdi_uso: 0,
        perd_ups_uso: 0,
    },
}

////////////////////////////////////////////////// CALCULOS //////////////////////////////////////////
//CARGA TOTAL EEE
let carga_total_kva = (APPPOW_3PHAS) / 100
//CARGA TOTAL GENERACION
let carga_generación = (POT_TDP1A + POT_TDP2A) / 10


//SUMATORIA DE POTENCIAS KVA PDI
let sum_pot_sis1_pdi = SIS1_POT_PDI_[1] +++ SIS1_POT_PDI_[2] +++ SIS1_POT_PDI_[3] +++ SIS1_POT_PDI_[4] +++ SIS1_POT_PDI_[5] +++ 
                       SIS1_POT_PDI_[6] +++ SIS1_POT_PDI_[7] +++ SIS1_POT_PDI_[8] +++ SIS1_POT_PDI_[9] +++ SIS1_POT_PDI_[10]; 
let sum_pot_sis2_pdi = SIS2_POT_PDI_[1] +++ SIS2_POT_PDI_[2] +++ SIS2_POT_PDI_[3] +++ SIS2_POT_PDI_[4] +++ SIS2_POT_PDI_[5] +++ 
                       SIS2_POT_PDI_[6] +++ SIS2_POT_PDI_[7] +++ SIS2_POT_PDI_[8] +++ SIS2_POT_PDI_[9] +++ SIS2_POT_PDI_[10]; 
let carga_pdi_kva = (sum_pot_sis1_pdi + sum_pot_sis2_pdi) / 10; 

//POTENCIA DE RECTIFICADORES 1&2
let pot_rect_1a =  (V_RECT_1A * I_RECT_1A) / 1000
let pot_rect_2a = (V_RECT_2A * I_RECT_2A) / 1000
let pot_total_rec = (pot_rect_1a + pot_rect_2a)

//POTENCIA SATELITAL
let pot_total_ups_sat = (POT_UPS_SAT_1A + POT_UPS_SAT_2A) / 1000;

//POTENCIA DE CHILLERS

//POTENCIA DE UMAS
let carga_uma_kva_SIS1 = (SIS1_KVA_UMA[1] +++ SIS1_KVA_UMA[2] +++ SIS1_KVA_UMA[3] +++ SIS1_KVA_UMA[4] +++ SIS1_KVA_UMA[5] +++ SIS1_KVA_UMA[6] +++
                          SIS1_KVA_UMA[7] +++ SIS1_KVA_UMA[8] +++ SIS1_KVA_UMA[9] +++ SIS1_KVA_UMA[10] +++ SIS1_KVA_UMA[11] +++ SIS1_KVA_UMA[12])
let carga_uma_kva_SIS2 = (SIS2_KVA_UMA[1] +++ SIS2_KVA_UMA[2] +++ SIS2_KVA_UMA[3] +++ SIS2_KVA_UMA[4] +++ SIS2_KVA_UMA[5] +++ SIS2_KVA_UMA[6] +++
                          SIS2_KVA_UMA[7] +++ SIS2_KVA_UMA[8] +++ SIS2_KVA_UMA[9] +++ SIS2_KVA_UMA[10] +++ SIS2_KVA_UMA[11] +++ SIS2_KVA_UMA[12])
let carga_total_uma_kva = (carga_uma_kva_SIS1 + carga_uma_kva_SIS2)/10

let energia_total = (ENY_POS_REAL) / 10

//POTENCIA DE BOMBAS
//SERVICIOS GENERALES
let carga_sg_kva = (POW_APPRT_TOTAL) / 10

//PERDIDAS PDI
let perdida_pdi_sis1 = (sum_pot_sis1_pdi - TPDU_1A_0_KVA);
let perdida_pdi_sis2 = (sum_pot_sis2_pdi - TPDU_2A_0_KVA);
let perdida_pdi_kva = (perdida_pdi_sis1 + perdida_pdi_sis2) / 10;

//PERDIDAS UPS
let carga_ups_sis1_kva = (TUPSIN_1A_POW_APPRT - TUPSOUT_1A_POW_APPRT)
let carga_ups_sis2_kva = (TUPSIN_2A_POW_APPRT - TUPSOUT_2A_POW_APPRT)
let perdida_ups_kva = (carga_ups_sis1_kva + carga_ups_sis2_kva) / 10;

//CALCULO DE PUE
let calculo_pue1 =  carga_total_kva / (carga_pdi_kva + pot_total_ups_sat + pot_total_rec); 
//CALCULO DE PUE (GENERACION)
let calculo_pue2 =  ((POT_TDP1A + POT_TDP2A) / 10) / (carga_pdi_kva + pot_total_ups_sat + pot_total_rec);

//CALCULO DE DICE
let calculo_dcie1 = 1 / calculo_pue1 * 100;
//CALCULO DE DICE (GENERACION)
let calculo_dcie2 = 1 / calculo_pue2 * 100;


if (carga_total_kva === 0){
    pue.Cargas_kva.Carga_total_kva = Number.parseFloat(carga_generación?.toFixed(2));
    pue.Principal.PUE = Number.parseFloat(calculo_pue2?.toFixed(2));
    pue.Principal.DCIE = Number.parseFloat(calculo_dcie2?.toFixed(2));
}
else {
    pue.Cargas_kva.Carga_total_kva = Number.parseFloat(carga_total_kva?.toFixed(2));
    pue.Principal.PUE = Number.parseFloat(calculo_pue1?.toFixed(2));
    pue.Principal.DCIE = Number.parseFloat(calculo_dcie1?.toFixed(2)); 
}

//DIRECCIONAMIENTO DE VARIABLE DE POTENCIAS
//pue.Cargas_kva.Carga_total_kva = Number.parseFloat(carga_total_kva?.toFixed(2));
pue.Cargas_kva.pdi_kva = Number.parseFloat(carga_pdi_kva?.toFixed(2));
pue.Cargas_kva.rect_kva = Number.parseFloat(pot_total_rec?.toFixed(2));
pue.Cargas_kva.sat_kva = Number.parseFloat(pot_total_ups_sat?.toFixed(2));
//pue.Cargas_kva.chiller_kva = 
pue.Cargas_kva.uma_kva = Number.parseFloat(carga_total_uma_kva?.toFixed(2));
//pue.Cargas_kva.bombas_kva =
pue.Cargas_kva.sg_kva = Number.parseFloat(carga_sg_kva?.toFixed(2));
pue.Cargas_kva.perd_pdi_kva = Number.parseFloat(perdida_pdi_kva?.toFixed(2));
pue.Cargas_kva.perd_ups_kva = Number.parseFloat(perdida_ups_kva?.toFixed(2));
//pue.Principal.PUE = Number.parseFloat(calculo_pue?.toFixed(2));
//pue.Principal.DCIE = Number.parseFloat(calculo_dcie?.toFixed(2));
pue.Principal.ENERGIA = Number.parseFloat(energia_total?.toFixed(2));


//CALCULO DE PORCENTAJE DE USO EEE
let percent_total = carga_total_kva * 100 / carga_total_kva;
let percent_carga_AC = carga_pdi_kva * 100 / carga_total_kva;
let percent_carga_DC = pot_total_rec * 100 / carga_total_kva;
let percent_carga_SAT = pot_total_ups_sat * 100 / carga_total_kva;
let percent_sg = carga_sg_kva * 100 / carga_total_kva;
//let percent_chiller = * 100 / carga_total_kva;
let percent_uma = carga_total_uma_kva * 100 / carga_total_kva;
//let percent_bombas = * 100 / carga_total_kva;
let percent_perd_pdi = perdida_pdi_kva * 100 / carga_total_kva;
let percent_perd_ups = perdida_ups_kva * 100 / carga_total_kva;

//CALCULO DE PORCENTAJE DE USO GENERACION
let percent_total_gen = carga_generación * 100 / carga_generación;
let percent_carga_AC_gen = carga_pdi_kva * 100 / carga_generación;
let percent_carga_DC_gen = pot_total_rec * 100 / carga_generación;
let percent_carga_SAT_gen = pot_total_ups_sat * 100 / carga_generación;
let percent_sg_gen = carga_sg_kva * 100 / carga_generación;
//let percent_chiller = * 100 / carga_generación;
let percent_uma_gen = carga_total_uma_kva * 100 / carga_generación;
//let percent_bombas = * 100 / carga_generación;
let percent_perd_pdi_gen = perdida_pdi_kva * 100 / carga_generación;
let percent_perd_ups_gen = perdida_ups_kva * 100 / carga_generación;

//DIRECCIONAMIENO DE VARIABLE DE USO
if (carga_total_kva === 0){
    pue.Cargas_uso.Carga_total_uso = Number.parseFloat(percent_total_gen?.toFixed(2));
    pue.Cargas_uso.pdi_uso = Number.parseFloat(percent_carga_AC_gen?.toFixed(2));
    pue.Cargas_uso.rect_uso = Number.parseFloat(percent_carga_DC_gen?.toFixed(2));
    pue.Cargas_uso.sat_uso = Number.parseFloat(percent_carga_SAT_gen?.toFixed(2));
    //pue.Cargas_uso.chiller_uso = Number.parseFloat(percent_chiller?.toFixed(2));
    pue.Cargas_uso.uma_uso = Number.parseFloat(percent_uma_gen?.toFixed(2));
    //pue.Cargas_uso.bombas_uso = Number.parseFloat(percent_bombas?.toFixed(2));
    pue.Cargas_uso.sg_uso = Number.parseFloat(percent_sg_gen?.toFixed(2));
    pue.Cargas_uso.perd_pdi_uso = Number.parseFloat(percent_perd_pdi_gen?.toFixed(2));
    pue.Cargas_uso.perd_ups_uso = Number.parseFloat(percent_perd_ups_gen?.toFixed(2));
}
else {
    pue.Cargas_uso.Carga_total_uso = Number.parseFloat(percent_total?.toFixed(2));
    pue.Cargas_uso.pdi_uso = Number.parseFloat(percent_carga_AC?.toFixed(2));
    pue.Cargas_uso.rect_uso = Number.parseFloat(percent_carga_DC?.toFixed(2));
    pue.Cargas_uso.sat_uso = Number.parseFloat(percent_carga_SAT?.toFixed(2));
    //pue.Cargas_uso.chiller_uso = Number.parseFloat(percent_chiller?.toFixed(2));
    pue.Cargas_uso.uma_uso = Number.parseFloat(percent_uma?.toFixed(2));
    //pue.Cargas_uso.bombas_uso = Number.parseFloat(percent_bombas?.toFixed(2));
    pue.Cargas_uso.sg_uso = Number.parseFloat(percent_sg?.toFixed(2));
    pue.Cargas_uso.perd_pdi_uso = Number.parseFloat(percent_perd_pdi?.toFixed(2));
    pue.Cargas_uso.perd_ups_uso = Number.parseFloat(percent_perd_ups?.toFixed(2));   
}

/*pue.Cargas_uso.Carga_total_uso = Number.parseFloat(percent_total?.toFixed(2));
pue.Cargas_uso.pdi_uso = Number.parseFloat(percent_carga_AC?.toFixed(2));
pue.Cargas_uso.rect_uso = Number.parseFloat(percent_carga_DC?.toFixed(2));
pue.Cargas_uso.sat_uso = Number.parseFloat(percent_carga_SAT?.toFixed(2));
//pue.Cargas_uso.chiller_uso = Number.parseFloat(percent_chiller?.toFixed(2));
pue.Cargas_uso.uma_uso = Number.parseFloat(percent_uma?.toFixed(2));
//pue.Cargas_uso.bombas_uso = Number.parseFloat(percent_bombas?.toFixed(2));
pue.Cargas_uso.sg_uso = Number.parseFloat(percent_sg?.toFixed(2));
pue.Cargas_uso.perd_pdi_uso = Number.parseFloat(percent_perd_pdi?.toFixed(2));
pue.Cargas_uso.perd_ups_uso = Number.parseFloat(percent_perd_ups?.toFixed(2));
*/
//ESTADO
pue.Estado.Estado = carga_total_kva > 0? estadoStyles.eee : estadoStyles.gen;
//pue.Estado.Estadoclass = carga_total_kva > 0? estadoStyles.reactor : estadoStyles.sinConexion;

//REACTOR
pue.Estado.Reactor1 = carga_total_kva > 0? estadoStyles.reactor_on : estadoStyles.reactor_gen;

/*pue.Estado.Reactor2 = carga_total_kva > 0? estadoStyles.reactor : estadoStyles.sinConexion;
pue.Estado.Reactor3 = carga_total_kva > 0? estadoStyles.reactor : estadoStyles.sinConexion;
pue.Estado.Reactor4 = carga_total_kva > 0? estadoStyles.reactor : estadoStyles.sinConexion;
pue.Estado.Reactor5 = carga_total_kva > 0? estadoStyles.reactor : estadoStyles.sinConexion;
pue.Estado.Reactor6 = carga_total_kva > 0? estadoStyles.reactor : estadoStyles.sinConexion;
pue.Estado.Reactor7 = carga_total_kva > 0? estadoStyles.reactor : estadoStyles.sinConexion;
pue.Estado.Reactor8 = carga_total_kva > 0? estadoStyles.reactor : estadoStyles.sinConexion;
pue.Estado.Reactorcentral = carga_total_kva > 0? estadoStyles.reactor : estadoStyles.sinConexion;
*/
console.log(pue);
return pue;
};

export default dataPue;