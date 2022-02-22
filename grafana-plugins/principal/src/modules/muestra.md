//POTENCIA PQM    
let APPPOW_3PHAS = data.series.find(({ name }) => name?.includes('DATA.APPPOW_3PHAS.VALUE'))?.fields[1].state?.calcs?.lastNotNull;

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

////////

//SUMATORIA DE POTENCIAS KVA PDI
let sum_pot_sis1_pdi = SIS1_POT_PDI_[1] +++ SIS1_POT_PDI_[2] +++ SIS1_POT_PDI_[3] +++ SIS1_POT_PDI_[4] +++ SIS1_POT_PDI_[5] +++ 
                       SIS1_POT_PDI_[6] +++ SIS1_POT_PDI_[7] +++ SIS1_POT_PDI_[8] +++ SIS1_POT_PDI_[9] +++ SIS1_POT_PDI_[10]; 
let sum_pot_sis2_pdi = SIS2_POT_PDI_[1] +++ SIS2_POT_PDI_[2] +++ SIS2_POT_PDI_[3] +++ SIS2_POT_PDI_[4] +++ SIS2_POT_PDI_[5] +++ 
                       SIS2_POT_PDI_[6] +++ SIS2_POT_PDI_[7] +++ SIS2_POT_PDI_[8] +++ SIS2_POT_PDI_[9] +++ SIS2_POT_PDI_[10]; 
let sum_pot_pdis = (sum_pot_sis1_pdi + sum_pot_sis2_pdi) / 10; 

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
