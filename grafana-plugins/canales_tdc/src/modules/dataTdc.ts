import { PanelData,InterpolateFunction} from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataTdc } from 'components/variables';
import estadosStyles from 'styles/estadosStyles';
//import alarmasStyles from 'styles/alarmasStyles';
import 'modules/stylesPop.css';

const swal = require('sweetalert');
const imgPopUp = require.context('../img/imgalarmas/',true);

var audioAlm = new Audio("data:audio/mpeg;base64,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");

let colorEstado = 'NA';
let msgEstado = 'NA';

let imgEquipo = '';
let nomEquipo = '';
  
function PopUp(cookieVar: any, equipo: any, variable: any, nomCookie: any) {
    if (cookieVar === null) {
      localStorage.setItem('gyecookie_'+nomCookie, variable);
    } else {
        if (cookieVar !== ''+ variable) {
         audioAlm.play();
          swal({
            className: colorEstado,
            title: equipo,
            text: '' + msgEstado + '\n\ SISTEMA 1',
            icon: imgEquipo,
          }).then((value: any) => {
            localStorage.setItem('gyecookie_'+nomCookie,variable);
          });
                //console.log("alarma")
          localStorage.setItem('gyecookie_'+nomCookie,variable);}}}

const dataTdc = (data: PanelData, options: SimpleOptions, replaceVariables: InterpolateFunction, ): DataTdc => {  
    console.log('data: ', data);
    console.log('options: ', options);
    console.log(replaceVariables);
        
    
//-------------------------------------------VARIABLES DE ESTADOS--------------------------------------------    
//ESTADOS
/*let st_on = estadosStyles.on;
let st_off = estadosStyles.sinconexion;*/
//ALARMS
//let alarm_on = alarmasStyles.on1;
//let alarm_off = alarmasStyles.sinconexion;
//WARNINGS
/*let warning_on = alarmasStyles.on1;
let warning_off = alarmasStyles.sinconexion;*/

// ESTADOS
//let GEN_ALM = data.series.find(({ name }) => name?.includes('DATA.GEN_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
//let ST_VOLTAGE = data.series.find(({ name }) => name?.includes('DATA.DC_VOLTAGE.VALUE'))?.fields[1].state?.calcs?.lastNotNull;

let CURR_Q = [];
for (let i = 1; i <= 152; i++) {
    CURR_Q[i] = data.series.find(({ name }) => name?.includes('DATA.I_DC_Q' + i + '.VALUE'))?.fields[1].state?.calcs?.lastNotNull;   
    if (CURR_Q[i] === null || CURR_Q[i] === 0) {
        CURR_Q[i] = 0;
        }   else {
            CURR_Q[i] = parseFloat(CURR_Q[i]).toFixed(0);
        } 
}

//BREAKERS 10 Amperios
//TDC-1: Q21, Q22, Q23, Q24, Q25, Q26, Q27, Q31, Q32, Q140, Q141, Q142, Q143
//TDC-2: Q47, Q49, Q50, Q52, Q53, Q54, Q55, Q56, Q57, Q58, Q59, Q60, Q61, Q62, Q63
//TDC-3: Q64, Q65, Q67, Q68, Q69, Q73

//BREAKERS 16 Amperios
//TDC-1: Q144, Q145, Q146, Q147, Q148, Q149, Q150

//BREAKERS 20 Amperios
//TDC-1: Q16, Q17, Q18, Q125, Q134, Q135, Q136, Q137, Q138
//TDC-2: Q44, Q45, Q46, Q51
//TDC-3: Q79, Q80, Q81, Q82, Q83, Q94, Q96

//BREAKER 32 Amperios
//TDC-2: Q48
//TDC-3: Q84, Q85, Q86, Q87, Q88

//BREAKERS 40 Amperios
//TDC-1: Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q11, Q12, Q13, Q14, Q15, Q19, Q139
//TDC-3: Q66, Q70, Q71, Q72, Q74, Q75, Q76, Q77, Q91, Q92, Q95

//BREAKERS 63 Amperios
//TDC-1: Q10, Q20, Q28, Q29, Q30, Q33, Q104, Q105, Q106, Q107, Q108, Q109 ,Q110 ,Q111 ,Q112 ,Q113 ,Q114 ,Q115,
//       Q116, Q117, Q118, Q119, Q120, Q121, Q122, Q123, Q124, Q126, Q127, Q128, Q129, Q130, Q131, Q132, Q133
//TDC-2: Q36, Q37, Q38, Q39, Q40, Q41, Q42, Q43
//TDC-3: Q78, Q89, Q90, Q93, Q97, Q98, Q99, Q100, Q101, Q102, Q103

//BREAKERS 100 Amperios
//TDC-2: Q34, Q151, Q152

//CREO CODIGO POP UP PARA BREAKERS 10 AMPERIOS
let breaker10A = [21, 22, 23, 24, 25, 26, 27, 31, 32, 140, 141, 142, 143,
                  47, 49, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
                  64, 65, 67, 68, 69, 73];
let cur_10A = 0
/*let umbral_alto_10A;
let umbral_alto_16A;
let umbral_alto_20A;
let umbral_alto_32A;
let umbral_alto_40A;
let umbral_alto_63A;
let umbral_alto_100A;*/

for (let i = 0; i < breaker10A.length; i++) {
cur_10A = CURR_Q[breaker10A[i]];
nomEquipo = 'BREAKER Q' + (breaker10A[i]) + '\n- 10A';
    let imgBreakerAlm= imgPopUp('./breaker_alm.png')
    let imgBreakerAdv= imgPopUp('./breaker_adv.png')
    let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
    let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');
    if ((cur_10A > 400) && (cur_10A < 450)) {
        //umbral_alto_10A = alarm_on;
            msgEstado = "\nVERIFICAR CAPACIDAD DE\n CORRIENTE > 40%"
            imgEquipo = imgBreakerAdv;
            colorEstado = 'advertencia'
            PopUp(cookieAdv,nomEquipo,1,nomEquipo+'adv');
            
        }
        else{
            localStorage.setItem('gyecookie_'+nomEquipo+'adv','0')}
        if (cur_10A >= 450) {
            msgEstado = "\nVERIFICAR CAPACIDAD DE\n CORRIENTE > 45%"
            imgEquipo = imgBreakerAlm;
            colorEstado = 'alarma'
            PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
        }
        else{
            localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')}
}

//CREO CODIGO POP UP PARA BREAKERS 16 AMPERIOS
let breaker16A = [144, 145, 146, 147, 148, 149, 150];
let cur_16A = 0
for (let i = 0; i < breaker16A.length; i++) {
cur_10A = CURR_Q[breaker16A[i]];
nomEquipo = 'BREAKER Q' + (breaker16A[i]) + '\n- 16A';
    let imgBreakerAlm= imgPopUp('./breaker_alm.png')
    let imgBreakerAdv= imgPopUp('./breaker_adv.png')
    let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
    let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');
    if ((cur_16A > 640) && (cur_16A < 720)) {
            //umbral_alto_16A = alarm_on;
            msgEstado = "\nVERIFICAR CAPACIDAD DE\n CORRIENTE > 40%"
            imgEquipo = imgBreakerAdv;
            colorEstado = 'advertencia'
            PopUp(cookieAdv,nomEquipo,1,nomEquipo+'adv');
        }
        else{
            localStorage.setItem('gyecookie_'+nomEquipo+'adv','0')}
        if (cur_16A >= 720) {
            msgEstado = "\nVERIFICAR CAPACIDAD DE\n CORRIENTE > 45%"
            imgEquipo = imgBreakerAlm;
            colorEstado = 'alarma'
            PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
        }
        else{
            localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')}
}

//CREO CODIGO POP UP PARA BREAKERS 20 AMPERIOS
let breaker20A = [16, 17, 18, 125, 134, 135, 136, 137, 138,
                  44, 45, 46, 51,
                  79, 80, 81, 82, 83, 94, 96];
let cur_20A = 0
for (let i = 0; i < breaker20A.length; i++) {
cur_20A = CURR_Q[breaker20A[i]];
nomEquipo = 'BREAKER Q' + (breaker20A[i]) + '\n- 20A';
    let imgBreakerAlm= imgPopUp('./breaker_alm.png')
    let imgBreakerAdv= imgPopUp('./breaker_adv.png')
    let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
    let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');
    if ((cur_20A > 800) && (cur_20A < 900)) {
            //umbral_alto_20A = alarm_on;
            msgEstado = "\nVERIFICAR CAPACIDAD DE\n CORRIENTE > 40%"
            imgEquipo = imgBreakerAdv;
            colorEstado = 'advertencia'
            PopUp(cookieAdv,nomEquipo,1,nomEquipo+'adv');
        }
        else{
            localStorage.setItem('gyecookie_'+nomEquipo+'adv','0')}
        if (cur_20A >= 900) {
            msgEstado = "\nVERIFICAR CAPACIDAD DE\n CORRIENTE > 45%"
            imgEquipo = imgBreakerAlm;
            colorEstado = 'alarma'
            PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
        }
        else{
            localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')}
}

//CREO CODIGO POP UP PARA BREAKERS 32 AMPERIOS
let breaker32A = [48,
                  84, 85, 86, 87, 88];
let cur_32A = 0
for (let i = 0; i < breaker32A.length; i++) {
    cur_32A = CURR_Q[breaker32A[i]];
nomEquipo = 'BREAKER Q' + (breaker32A[i]) + '\n- 32A';
    let imgBreakerAlm= imgPopUp('./breaker_alm.png')
    let imgBreakerAdv= imgPopUp('./breaker_adv.png')
    let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
    let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');
    if ((cur_32A > 1280) && (cur_32A < 1440)) {
            //umbral_alto_32A = alarm_on;
            msgEstado = "\nVERIFICAR CAPACIDAD DE\n CORRIENTE > 40%"
            imgEquipo = imgBreakerAdv;
            colorEstado = 'advertencia'
            PopUp(cookieAdv,nomEquipo,1,nomEquipo+'adv');
        }
        else{
            localStorage.setItem('gyecookie_'+nomEquipo+'adv','0')}
        if (cur_32A >= 1440) {
            msgEstado = "\nVERIFICAR CAPACIDAD DE\n CORRIENTE > 45%"
            imgEquipo = imgBreakerAlm;
            colorEstado = 'alarma'
            PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
        }
        else{
            localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')}
}

//CREO CODIGO POP UP PARA BREAKERS 40 AMPERIOS
let breaker40A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 19, 139,
                  66, 70, 71, 72, 74, 75, 76, 77, 91, 92, 95];
let cur_40A = 0
for (let i = 0; i < breaker40A.length; i++) {
cur_40A = CURR_Q[breaker40A[i]];
nomEquipo = 'BREAKER Q' + (breaker40A[i]) + '\n- 40A';
    let imgBreakerAlm= imgPopUp('./breaker_alm.png')
    let imgBreakerAdv= imgPopUp('./breaker_adv.png')
    let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
    let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');
    if ((cur_40A > 1600) && (cur_40A < 1800)) {
            //umbral_alto_40A = alarm_on;
            msgEstado = "\nVERIFICAR CAPACIDAD DE\n CORRIENTE > 40%"
            imgEquipo = imgBreakerAdv;
            colorEstado = 'advertencia'
            PopUp(cookieAdv,nomEquipo,1,nomEquipo+'adv');
            }
    else{
        localStorage.setItem('gyecookie_'+nomEquipo+'adv','0')}
        if (cur_40A >= 1800) {
            msgEstado = "\nVERIFICAR CAPACIDAD DE\n CORRIENTE > 45%"
            imgEquipo = imgBreakerAlm;
            colorEstado = 'alarma'
            PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
            }
        else{
            localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')}
}

//CREO CODIGO POP UP PARA BREAKERS 63 AMPERIOS
let breaker63A = [10, 20, 28, 29, 30, 33, 104, 105, 106, 107, 108, 109 , 110 , 111 , 112 , 113 , 114 , 115,
                  116, 117, 118, 119, 120, 121, 122, 123, 124, 126, 127, 128, 129, 130, 131, 132, 133,
                  36, 37, 38, 39, 40, 41, 42, 43,
                  78, 89, 90, 93, 97, 98, 99, 100, 101, 102, 103];
let cur_63A = 0
for (let i = 0; i < breaker63A.length; i++) {
cur_63A = CURR_Q[breaker63A[i]];
nomEquipo = 'BREAKER Q' + (breaker63A[i]) + '\n- 63A';
let imgBreakerAlm= imgPopUp('./breaker_alm.png')
let imgBreakerAdv= imgPopUp('./breaker_adv.png')
let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');
    if ((cur_63A > 25200) && (cur_63A < 28350)) {
            //umbral_alto_63A = alarm_on;
            msgEstado = "\nVERIFICAR CAPACIDAD DE\n CORRIENTE > 40%"
            imgEquipo = imgBreakerAdv;
            colorEstado = 'advertencia'
            PopUp(cookieAdv,nomEquipo,1,nomEquipo+'adv');
            }
    else{
        localStorage.setItem('gyecookie_'+nomEquipo+'adv','0')}
        if (cur_63A >= 28350) {
            msgEstado = "\nVERIFICAR CAPACIDAD DE\n CORRIENTE > 45%"
            imgEquipo = imgBreakerAlm;
            colorEstado = 'alarma'
            PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
            }
        else{
            localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')}
}


//CREO CODIGO POP UP PARA BREAKERS 125 AMPERIOS
let breaker125A = [34];
let cur_125A = 0
for (let i = 0; i < breaker125A.length; i++) {
    cur_125A = CURR_Q[breaker125A[i]];
nomEquipo = 'BREAKER Q' + (breaker125A[i]) + '\n- 125A';
    let imgBreakerAlm= imgPopUp('./breaker_alm.png')
    let imgBreakerAdv= imgPopUp('./breaker_adv.png')
    let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
    let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');
    if ((cur_125A > 31250) && (cur_125A < 56250)) {
            //umbral_alto_100A = alarm_on;
            msgEstado = "\nVERIFICAR CAPACIDAD DE\n CORRIENTE > 40%"
            imgEquipo = imgBreakerAdv;
            colorEstado = 'advertencia'
            PopUp(cookieAdv,nomEquipo,1,nomEquipo+'adv');
    }
    else{
        localStorage.setItem('gyecookie_'+nomEquipo+'adv','0')}
        if (cur_125A >= 56250) {
            msgEstado = "\nVERIFICAR CAPACIDAD DE\n CORRIENTE > 45%"
            imgEquipo = imgBreakerAlm;
            colorEstado = 'alarma'
            PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
            }
        else{
             localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')}
}

let tdc: DataTdc = {
    DatosGenerales: {
        Nombre: '',
    },

    Estado:{
        Status: estadosStyles.sinconexion,
        Status_ON: estadosStyles.sinconexion,
        Alarma: estadosStyles.sinconexion,
        Tablero1: '',
        Tablero2: '',
        Tablero3: '',
        /*Umbral_10A: '',
        Umbral_16A: '',
        Umbral_20A: '',
        Umbral_32A: '',
        Umbral_40A: '',
        Umbral_63A: '',
        Umbral_100A: '',*/

    },
    Breakers:{
        Q1: 0, Q2: 0, Q3: 0, Q4: 0, Q5: 0, Q6: 0, Q7: 0, Q8: 0, Q9: 0, Q10: 0,
        Q11: 0, Q12: 0, Q13: 0, Q14: 0, Q15: 0, Q16: 0, Q17: 0, Q18: 0, Q19: 0, Q20: 0,
        Q21: 0, Q22: 0, Q23: 0, Q24: 0, Q25: 0, Q26: 0, Q27: 0, Q28: 0, Q29: 0, Q30: 0,
        Q31: 0, Q32: 0, Q33: 0, Q34: 0, Q35: 0, Q36: 0, Q37: 0, Q38: 0, Q39: 0, Q40: 0,
        Q41: 0, Q42: 0, Q43: 0, Q44: 0, Q45: 0, Q46: 0, Q47: 0, Q48: 0, Q49: 0, Q50: 0,
        Q51: 0, Q52: 0, Q53: 0, Q54: 0, Q55: 0, Q56: 0, Q57: 0, Q58: 0, Q59: 0, Q60: 0,
        Q61: 0, Q62: 0, Q63: 0, Q64: 0, Q65: 0, Q66: 0, Q67: 0, Q68: 0, Q69: 0, Q70: 0,
        Q71: 0, Q72: 0, Q73: 0, Q74: 0, Q75: 0, Q76: 0, Q77: 0, Q78: 0, Q79: 0, Q80: 0,
        Q81: 0, Q82: 0, Q83: 0, Q84: 0, Q85: 0, Q86: 0, Q87: 0, Q88: 0, Q89: 0, Q90: 0,
        Q91: 0, Q92: 0, Q93: 0, Q94: 0, Q95: 0, Q96: 0, Q97: 0, Q98: 0, Q99: 0, Q100: 0,
        Q101: 0, Q102: 0, Q103: 0, Q104: 0, Q105: 0, Q106: 0, Q107: 0, Q108: 0, Q109: 0, Q110: 0,
        Q111: 0, Q112: 0, Q113: 0, Q114: 0, Q115: 0, Q116: 0, Q117: 0, Q118: 0, Q119: 0, Q120: 0,
        Q121: 0, Q122: 0, Q123: 0, Q124: 0, Q125: 0, Q126: 0, Q127: 0, Q128: 0, Q129: 0, Q130: 0,
        Q131: 0, Q132: 0, Q133: 0, Q134: 0, Q135: 0, Q136: 0, Q137: 0, Q138: 0, Q139: 0, Q140: 0,
        Q141: 0, Q142: 0, Q143: 0, Q144: 0, Q145: 0, Q146: 0, Q147: 0, Q148: 0, Q149: 0, Q150: 0,
        Q151: 0, Q152: 0,
        },
}

//DATOS DE CORRIENTE----------------------------------
tdc.Breakers.Q1 = CURR_Q[1]/100;
tdc.Breakers.Q2 = CURR_Q[2]/100;
tdc.Breakers.Q3 = CURR_Q[3]/100;
tdc.Breakers.Q4 = CURR_Q[4]/100;
tdc.Breakers.Q5 = CURR_Q[5]/100;
tdc.Breakers.Q6 = CURR_Q[6]/100;
tdc.Breakers.Q7 = CURR_Q[7]/100;
tdc.Breakers.Q8 = CURR_Q[8]/100;
tdc.Breakers.Q9 = CURR_Q[9]/100;
tdc.Breakers.Q10 = CURR_Q[10]/100;
tdc.Breakers.Q11 = CURR_Q[11]/100;
tdc.Breakers.Q12 = CURR_Q[12]/100;
tdc.Breakers.Q13 = CURR_Q[13]/100;
tdc.Breakers.Q14 = CURR_Q[14]/100;
tdc.Breakers.Q15 = CURR_Q[15]/100;
tdc.Breakers.Q16 = CURR_Q[16]/100;
tdc.Breakers.Q17 = CURR_Q[17]/100;
tdc.Breakers.Q18 = CURR_Q[18]/100;
tdc.Breakers.Q19 = CURR_Q[19]/100;
tdc.Breakers.Q20 = CURR_Q[20]/100;
tdc.Breakers.Q21 = CURR_Q[21]/100;
tdc.Breakers.Q22 = CURR_Q[22]/100;
tdc.Breakers.Q23 = CURR_Q[23]/100;
tdc.Breakers.Q24 = CURR_Q[24]/100;
tdc.Breakers.Q25 = CURR_Q[25]/100;
tdc.Breakers.Q26 = CURR_Q[26]/100;
tdc.Breakers.Q27 = CURR_Q[27]/100;
tdc.Breakers.Q28 = CURR_Q[28]/100;
tdc.Breakers.Q29 = CURR_Q[29]/100;
tdc.Breakers.Q30 = CURR_Q[30]/100;
tdc.Breakers.Q31 = CURR_Q[31]/100;
tdc.Breakers.Q32 = CURR_Q[32]/100;
tdc.Breakers.Q33 = CURR_Q[33]/100;
tdc.Breakers.Q34 = CURR_Q[34]/100;
tdc.Breakers.Q35 = CURR_Q[35]/100;
tdc.Breakers.Q36 = CURR_Q[36]/100;
tdc.Breakers.Q37 = CURR_Q[37]/100;
tdc.Breakers.Q38 = CURR_Q[38]/100;
tdc.Breakers.Q39 = CURR_Q[39]/100;
tdc.Breakers.Q40 = CURR_Q[40]/100;
tdc.Breakers.Q41 = CURR_Q[41]/100;
tdc.Breakers.Q42 = CURR_Q[42]/100;
tdc.Breakers.Q43 = CURR_Q[43]/100;
tdc.Breakers.Q44 = CURR_Q[44]/100;
tdc.Breakers.Q45 = CURR_Q[45]/100;
tdc.Breakers.Q46 = CURR_Q[46]/100;
tdc.Breakers.Q47 = CURR_Q[47]/100;
tdc.Breakers.Q48 = CURR_Q[48]/100;
tdc.Breakers.Q49 = CURR_Q[49]/100;
tdc.Breakers.Q50 = CURR_Q[50]/100;
tdc.Breakers.Q51 = CURR_Q[51]/100;
tdc.Breakers.Q52 = CURR_Q[52]/100;
tdc.Breakers.Q53 = CURR_Q[53]/100;
tdc.Breakers.Q54 = CURR_Q[54]/100;
tdc.Breakers.Q55 = CURR_Q[55]/100;
tdc.Breakers.Q56 = CURR_Q[56]/100;
tdc.Breakers.Q57 = CURR_Q[57]/100;
tdc.Breakers.Q58 = CURR_Q[58]/100;
tdc.Breakers.Q59 = CURR_Q[59]/100;
tdc.Breakers.Q60 = CURR_Q[60]/100;
tdc.Breakers.Q61 = CURR_Q[61]/100;
tdc.Breakers.Q62 = CURR_Q[62]/100;
tdc.Breakers.Q63 = CURR_Q[63]/100;
tdc.Breakers.Q64 = CURR_Q[64]/100;
tdc.Breakers.Q65 = CURR_Q[65]/100;
tdc.Breakers.Q66 = CURR_Q[66]/100;
tdc.Breakers.Q67 = CURR_Q[67]/100;
tdc.Breakers.Q68 = CURR_Q[68]/100;
tdc.Breakers.Q69 = CURR_Q[69]/100;
tdc.Breakers.Q70 = CURR_Q[70]/100;
tdc.Breakers.Q71 = CURR_Q[71]/100;
tdc.Breakers.Q72 = CURR_Q[72]/100;
tdc.Breakers.Q73 = CURR_Q[73]/100;
tdc.Breakers.Q74 = CURR_Q[74]/100;
tdc.Breakers.Q75 = CURR_Q[75]/100;
tdc.Breakers.Q76 = CURR_Q[76]/100;
tdc.Breakers.Q77 = CURR_Q[77]/100;
tdc.Breakers.Q78 = CURR_Q[78]/100;
tdc.Breakers.Q79 = CURR_Q[79]/100;
tdc.Breakers.Q80 = CURR_Q[80]/100;
tdc.Breakers.Q81 = CURR_Q[81]/100;
tdc.Breakers.Q82 = CURR_Q[82]/100;
tdc.Breakers.Q83 = CURR_Q[83]/100;
tdc.Breakers.Q84 = CURR_Q[84]/100;
tdc.Breakers.Q85 = CURR_Q[85]/100;
tdc.Breakers.Q86 = CURR_Q[86]/100;
tdc.Breakers.Q87 = CURR_Q[87]/100;
tdc.Breakers.Q88 = CURR_Q[88]/100;
tdc.Breakers.Q89 = CURR_Q[89]/100;
tdc.Breakers.Q90 = CURR_Q[90]/100;
tdc.Breakers.Q91 = CURR_Q[91]/100;
tdc.Breakers.Q92 = CURR_Q[92]/100;
tdc.Breakers.Q93 = CURR_Q[93]/100;
tdc.Breakers.Q94 = CURR_Q[94]/100;
tdc.Breakers.Q95 = CURR_Q[95]/100;
tdc.Breakers.Q96 = CURR_Q[96]/100;
tdc.Breakers.Q97 = CURR_Q[97]/100;
tdc.Breakers.Q98 = CURR_Q[98]/100;
tdc.Breakers.Q99 = CURR_Q[99]/100;
tdc.Breakers.Q100 = CURR_Q[100]/100;
tdc.Breakers.Q101 = CURR_Q[101]/100;
tdc.Breakers.Q102 = CURR_Q[102]/100;
tdc.Breakers.Q103 = CURR_Q[103]/100;
tdc.Breakers.Q104 = CURR_Q[104]/100;
tdc.Breakers.Q105 = CURR_Q[105]/100;
tdc.Breakers.Q106 = CURR_Q[106]/100;
tdc.Breakers.Q107 = CURR_Q[107]/100;
tdc.Breakers.Q108 = CURR_Q[108]/100;
tdc.Breakers.Q109 = CURR_Q[109]/100;
tdc.Breakers.Q110 = CURR_Q[110]/100;
tdc.Breakers.Q111 = CURR_Q[111]/100;
tdc.Breakers.Q112 = CURR_Q[112]/100;
tdc.Breakers.Q113 = CURR_Q[113]/100;
tdc.Breakers.Q114 = CURR_Q[114]/100;
tdc.Breakers.Q115 = CURR_Q[115]/100;
tdc.Breakers.Q116 = CURR_Q[116]/100;
tdc.Breakers.Q117 = CURR_Q[117]/100;
tdc.Breakers.Q118 = CURR_Q[118]/100;
tdc.Breakers.Q119 = CURR_Q[119]/100;
tdc.Breakers.Q120 = CURR_Q[120]/100;
tdc.Breakers.Q121 = CURR_Q[121]/100;
tdc.Breakers.Q122 = CURR_Q[122]/100;
tdc.Breakers.Q123 = CURR_Q[123]/100;
tdc.Breakers.Q124 = CURR_Q[124]/100;
tdc.Breakers.Q125 = CURR_Q[125]/100;
tdc.Breakers.Q126 = CURR_Q[126]/100;
tdc.Breakers.Q127 = CURR_Q[127]/100;
tdc.Breakers.Q128 = CURR_Q[128]/100;
tdc.Breakers.Q129 = CURR_Q[129]/100;
tdc.Breakers.Q130 = CURR_Q[130]/100;
tdc.Breakers.Q131 = CURR_Q[131]/100;
tdc.Breakers.Q132 = CURR_Q[132]/100;
tdc.Breakers.Q133 = CURR_Q[133]/100;
tdc.Breakers.Q134 = CURR_Q[134]/100;
tdc.Breakers.Q135 = CURR_Q[135]/100;
tdc.Breakers.Q136 = CURR_Q[136]/100;
tdc.Breakers.Q137 = CURR_Q[137]/100;
tdc.Breakers.Q138 = CURR_Q[138]/100;
tdc.Breakers.Q139 = CURR_Q[139]/100;
tdc.Breakers.Q140 = CURR_Q[140]/100;
tdc.Breakers.Q141 = CURR_Q[141]/100;
tdc.Breakers.Q142 = CURR_Q[142]/100;
tdc.Breakers.Q143 = CURR_Q[143]/100;
tdc.Breakers.Q144 = CURR_Q[144]/100;
tdc.Breakers.Q145 = CURR_Q[145]/100;
tdc.Breakers.Q146 = CURR_Q[146]/100;
tdc.Breakers.Q147 = CURR_Q[147]/100;
tdc.Breakers.Q148 = CURR_Q[148]/100;
tdc.Breakers.Q149 = CURR_Q[149]/100;
tdc.Breakers.Q150 = CURR_Q[150]/100;
tdc.Breakers.Q151 = CURR_Q[151]/100;
tdc.Breakers.Q152 = CURR_Q[152]/100;

//INTERPOLACION DE VARIABLE
let variableNombre1 = replaceVariables('$EQUIPO1');
tdc.DatosGenerales.Nombre = variableNombre1 !==''? variableNombre1: options.nombre;

if (variableNombre1 === 'PDU_DC_1A_1') {
    tdc.DatosGenerales.Nombre = "TDC-01A-1";
    tdc.Estado.Tablero2 = estadosStyles.deshabilitado;
    tdc.Estado.Tablero3 = estadosStyles.deshabilitado;
   }
if (variableNombre1 === 'PDU_DC_1A_2') {
    tdc.DatosGenerales.Nombre = "TDC-01A-2";
    tdc.Estado.Tablero1 = estadosStyles.deshabilitado;
    tdc.Estado.Tablero3 = estadosStyles.deshabilitado;
   }
if (variableNombre1 === 'PDU_DC_1A_3') {
    tdc.DatosGenerales.Nombre = "TDC-01A-3";
    tdc.Estado.Tablero1 = estadosStyles.deshabilitado;
    tdc.Estado.Tablero2 = estadosStyles.deshabilitado;
}

/*if (ST_VOLTAGE > 1 ){
    tdc.Estado.Status_ON = estadosStyles.on2;
}*/

//UMBRAL
//tdc.Estado.Umbral_10A = umbral_alto_10A;
/*tdc.Estado.Umbral_16A = umbral_alto_16A;
tdc.Estado.Umbral_20A = umbral_alto_20A;
tdc.Estado.Umbral_32A = umbral_alto_32A;
tdc.Estado.Umbral_40A = umbral_alto_40A;
tdc.Estado.Umbral_63A = umbral_alto_63A;
tdc.Estado.Umbral_100A = umbral_alto_100A;*/

return tdc;

};

export default dataTdc;