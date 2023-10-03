import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

//import { DataPrincipal } from 'components/variables';
import { DataPrincipal } from 'components/variables2';
import estadosStyles from 'styles/estadosStyles';
import alarmasStyles from 'styles/alarmasStyles';

import 'modules/stylesPop.css';

const swal = require('sweetalert');
const imgPopUp=require.context('../img/imgalarmas/',true);

var audioAlm = new Audio("data:audio/mpeg;base64,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");

let colorEstado = 'NA';
let msgEstado = 'NA';

//let audioAlm = 'http://172.30.128.202:1880/uimedia/audio/alarma.mp4';
let imgEquipo = '';
let nomEquipo = '';

/*function reproducir(sonido: any) {
    const audio = new Audio(sonido);
    audio.play();
  }*/
  
function PopUp(cookieVar: any, equipo: any, variable: any, nomCookie: any) {
    if (cookieVar === null) {
      localStorage.setItem('gyecookie_'+nomCookie, variable);
    } else {
        if (cookieVar !== ''+ variable) {
         audioAlm.play();
          swal({
            className: colorEstado,
            title: equipo,
            text: 'EQUIPO' + msgEstado,
            icon: imgEquipo,
          }).then((value: any) => {
            localStorage.setItem('gyecookie_'+nomCookie,variable);
          });
                //console.log("alarma")
          localStorage.setItem('gyecookie_'+nomCookie,variable);}}}


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
let warning_on = alarmasStyles.on1;
let warning_off = alarmasStyles.sinconexion;

//----------------------------------------ESTADOS Y ALARMAS DE UMAS------------------------------------------
let st_uma = [];
let al_uma = [];
for (let i = 1; i <= 12; i++) {
    nomEquipo = '1/UMA-' + (i);
    let imgUmaAlm= imgPopUp('./uma_alm.png')
    let imgUmaAdv= imgPopUp('./uma_adv.png')
    let cookieEstado = localStorage.getItem('gyecookie_'+nomEquipo);
    //let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
    let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');
st_uma[i] = data.series.find(({ name }) => name?.includes('ST_UMA' + i))?.fields[1].state?.calcs?.lastNotNull;
al_uma[i] = data.series.find(({ name }) => name?.includes('AL_UMA' + i))?.fields[1].state?.calcs?.lastNotNull;
if (st_uma[i] === 1) {
    st_uma[i] = st_on;
    msgEstado=" ENCENDIDO"
    imgEquipo=imgUmaAdv;
    colorEstado='advertencia'
        PopUp(cookieEstado,nomEquipo,1,nomEquipo)
    }   else {
        msgEstado=" APAGADO"
        imgEquipo=imgUmaAlm;
        colorEstado='alarma'
        st_uma[i] = st_off;
            PopUp(cookieEstado,nomEquipo,0,nomEquipo)
    }
    if (al_uma[i] === 1) {
        al_uma[i] = alarm_on;
        msgEstado=" ALARMA"
        imgEquipo=imgUmaAlm;
        colorEstado='advertencia'
            PopUp(cookieAdv,nomEquipo,1,nomEquipo+'adv');
        }   else {
            al_uma[i] = alarm_off;
                localStorage.setItem('gyecookie_'+nomEquipo+'adv','0')
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
let st_ups_1a = [];
let al_ups_1a = [];
let st_ups_2a = [];
let al_ups_2a = [];
    
    for (let i = 1; i <= 6; i++) {
    let nomEquipo = 'UPS 1-' + (i) + 'A';
    let imgUpsAlm= imgPopUp('./ups_alm.png')
    let imgUpsAdv= imgPopUp('./ups_adv.png')
    let cookieEstado = localStorage.getItem('gyecookie_'+nomEquipo);
    let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
    //let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');
    st_ups_1a[i] = data.series.find(({ name }) => name?.includes('ST_UPS_1A_' + i))?.fields[1].state?.calcs?.lastNotNull;
    al_ups_1a[i] = data.series.find(({ name }) => name?.includes('AL_UPS_1A_' + i))?.fields[1].state?.calcs?.lastNotNull;
//UPS SISTEMA 1
    if (st_ups_1a[i] === 1) {
        st_ups_1a[i] = st_on;
        msgEstado=" ENCENDIDO"
        imgEquipo=imgUpsAdv;
        colorEstado='advertencia'
            PopUp(cookieEstado,nomEquipo,1,nomEquipo)
        }   else {
        msgEstado=" APAGADO"
            imgEquipo=imgUpsAlm;
                    colorEstado='alarma'
                    st_ups_1a[i] = st_off;
                        PopUp(cookieEstado,nomEquipo,0,nomEquipo)
                }
    if (al_ups_1a[i] >=1) {
        al_ups_1a[i] = alarm_on;
        msgEstado=" ALARMA"
        imgEquipo=imgUpsAlm;
        colorEstado='alarma'
            PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
        }   else {
        al_ups_1a[i] = alarm_off;
            localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')
            }                     
}
for (let i = 1; i <= 6; i++) {
    let nomEquipo = 'UPS 2-' + (i) + 'A';
    let imgUpsAlm= imgPopUp('./ups_alm.png')
    let imgUpsAdv= imgPopUp('./ups_adv.png')
    let cookieEstado = localStorage.getItem('gyecookie_'+nomEquipo);
    let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
    //let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');
    st_ups_2a[i] = data.series.find(({ name }) => name?.includes('ST_UPS_2A_' + i))?.fields[1].state?.calcs?.lastNotNull;
    al_ups_2a[i] = data.series.find(({ name }) => name?.includes('AL_UPS_2A_' + i))?.fields[1].state?.calcs?.lastNotNull;
    //UPS SISTEMA 2
    if (st_ups_2a[i] === 1) {
        st_ups_2a[i] = st_on;
        msgEstado=" ENCENDIDO"
        imgEquipo=imgUpsAdv;
        colorEstado='advertencia'
            PopUp(cookieEstado,nomEquipo,1,nomEquipo)
        }   else {
        msgEstado=" APAGADO"
            imgEquipo=imgUpsAlm;
                    colorEstado='alarma'
                    st_ups_2a[i] = st_off;
                        PopUp(cookieEstado,nomEquipo,0,nomEquipo)
                }
    if (al_ups_2a[i] >= 1) {
        al_ups_2a[i] = alarm_on;
        msgEstado=" ALARMA"
        imgEquipo=imgUpsAlm;
        colorEstado='alarma'
            PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
        }   else {
        al_ups_2a[i] = alarm_off;
            localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')
            }                  
    }

//---------------------------------------ESTADOS Y ALARMAS DE UPS CHI 200KVA---------------------------------
let st_upschi = [];
let al_upschi = [];
for (let i = 1; i <= 2; i++) {
    nomEquipo = 'UPS-CHI-0' + (i) + 'A';
    let imgUpsAlm= imgPopUp('./ups_alm.png')
    let imgUpsAdv= imgPopUp('./ups_adv.png')
    let cookieEstado = localStorage.getItem('gyecookie_'+nomEquipo);
    let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
    //let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');
    st_upschi[i] = data.series.find(({ name }) => name?.includes('ST_UPS_CHI_' + i + 'A'))?.fields[1].state?.calcs?.lastNotNull;
    al_upschi[i] = data.series.find(({ name }) => name?.includes('AL_UPS_CHI_' + i + 'A'))?.fields[1].state?.calcs?.lastNotNull;
    
    if (st_upschi[i] === 1) { //ESTADO
        msgEstado=" ENCENDIDO"
        imgEquipo=imgUpsAdv;
        colorEstado='advertencia'
        st_upschi[i] = st_on;
            PopUp(cookieEstado,nomEquipo,1,nomEquipo)
         }   else {
            msgEstado=" APAGADO"
            imgEquipo=imgUpsAlm;
            colorEstado='alarma'
            st_upschi[i] = st_off;
                PopUp(cookieEstado,nomEquipo,0,nomEquipo)
        }
    if (al_upschi[i] >= 1) { //ALARMA
        al_upschi[i]=alarm_on;
        msgEstado=" ALARMA"
        
        imgEquipo=imgUpsAlm;
        colorEstado='alarma'
            PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
        }   else {
            al_upschi[i] = alarm_off;
                localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')
        }        
}
//--------------------------------------------PARAMETROS UPS CHI 200KVA--------------------------------------
let VIN_UPS_CHI_1A = data.series.find(({ name }) => name?.includes('VIN_UPS_CHI_1A'))?.fields[1].state?.calcs
?.lastNotNull;
let VOUT_UPS_CHI_1A = data.series.find(({ name }) => name?.includes('VOUT_UPS_CHI_1A'))?.fields[1].state?.calcs
?.lastNotNull;
let IOUT_UPS_CHI_1A = data.series.find(({ name }) => name?.includes('IOUT_UPS_CHI_1A'))?.fields[1].state?.calcs
?.lastNotNull;
let LOAD_UPS_CHI_1A = data.series.find(({ name }) => name?.includes('LOAD_UPS_CHI_1A'))?.fields[1].state?.calcs
?.lastNotNull;
let VIN_UPS_CHI_2A = data.series.find(({ name }) => name?.includes('VIN_UPS_CHI_2A'))?.fields[1].state?.calcs
?.lastNotNull;
let VOUT_UPS_CHI_2A = data.series.find(({ name }) => name?.includes('VOUT_UPS_CHI_2A'))?.fields[1].state?.calcs
?.lastNotNull;
let IOUT_UPS_CHI_2A = data.series.find(({ name }) => name?.includes('IOUT_UPS_CHI_2A'))?.fields[1].state?.calcs
?.lastNotNull;
let LOAD_UPS_CHI_2A = data.series.find(({ name }) => name?.includes('LOAD_UPS_CHI_2A'))?.fields[1].state?.calcs
?.lastNotNull;
//--------------------------------------ESTADOS DE UPS 10KVA Y RECTIFICADORES -------------------------------

let alups10kva = [];
let stups10kva = [];
for (let i = 1; i <= 4; i++) {   
    nomEquipo = 'UPS-' + (i) + 'A';
    if (i===1){nomEquipo = 'UPS-OFFICES-1'; }
    if (i===2){nomEquipo = 'UPS-SAT-1'; }
    if (i===3){nomEquipo = 'UPS-NOC-2'; }
    if (i===4){nomEquipo = 'UPS-SAT-2A'; }
    let imgUpsAlm= imgPopUp('./ups10_alm.png')
    let imgUpsAdv= imgPopUp('./ups10_adv.png')
    let cookieEstado = localStorage.getItem('gyecookie_'+nomEquipo);
    let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
    //let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');
    alups10kva[i] = data.series.find(({ name }) => name?.includes('AL_UPS10KVA_' + i))?.fields[1].state?.calcs?.lastNotNull;
    stups10kva[i] = data.series.find(({ name }) => name?.includes('ST_UPS10KVA_' + i))?.fields[1].state?.calcs?.lastNotNull;    
    if (stups10kva[i] > 190){
        msgEstado=" ENCENDIDO"
        imgEquipo=imgUpsAdv;
        colorEstado='advertencia'
        stups10kva[i] = st_on;
        PopUp(cookieEstado,nomEquipo,1,nomEquipo)
    } else {
            msgEstado=" APAGADO"
            imgEquipo=imgUpsAlm;
            colorEstado='alarma'
            stups10kva[i] = st_off;
            PopUp(cookieEstado,nomEquipo,0,nomEquipo)
    }
    if (alups10kva[i] >= 1 ){
        alups10kva[i] = alarm_on;
        msgEstado=" ALARMA"
        imgEquipo=imgUpsAlm;
        colorEstado='alarma'
            PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
    } else {
        alups10kva[i] = alarm_off;
            localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')
    }    
}
/////////RECTIFICADORES
let strec = [];
for (let i = 1; i <= 2; i++) {
    nomEquipo = 'RECTIFIER BANK-0' + (i) + 'A';
    let imgRecAlm= imgPopUp('./rec_alm.png')
    let imgRecAdv= imgPopUp('./rec_adv.png')
    let cookieEstado = localStorage.getItem('gyecookie_'+nomEquipo);
    let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
    //let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');
    strec[i] = data.series.find(({ name }) => name?.includes('ST_REC_' + i + 'A'))?.fields[1].state?.calcs?.lastNotNull;
    if (strec[i] === 1){
        strec[i] = st_on;
        msgEstado=" ENCENDIDO"
        imgEquipo=imgRecAdv;
        colorEstado='advertencia'
            PopUp(cookieEstado,nomEquipo,1,nomEquipo)
    }
    else{
        if (strec[i] === 0){
        strec[i] = st_off;
        msgEstado=" APAGADO"
        imgEquipo=imgRecAlm;
        colorEstado='alarma'
        PopUp(cookieEstado,nomEquipo,0,nomEquipo)
        localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')
        }
    }
    if (strec[i] >= 2 ){
        strec[i] = alarm_on;
        msgEstado=" ALARMA"
        imgEquipo=imgRecAlm;
        colorEstado='alarma'
        PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
        } 
        }      

    
//-------------------------------------------------------------------------------------------------------------
//---------------------------------------ESTADOS Y ALARMAS CHILLERS SISTEMA 1&2----------------------------------
let st_chiller = [];
let al_chiller = [];
let ms_chiller = [];
let st_comp1_chiller =[];
let st_comp2_chiller =[];
for (let i = 1; i <= 4; i++) {
    nomEquipo = '1/EA(' + (i) + ')';
    let imgChiAlm= imgPopUp('./chi_alm.png')
    let imgChiAdv= imgPopUp('./chi_adv.png')
    let cookieEstado = localStorage.getItem('gyecookie_'+nomEquipo);
    let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
    let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');

st_chiller[i] = data.series.find(({ name }) => name?.includes('ST_EA' + i))?.fields[1].state?.calcs?.lastNotNull; 
al_chiller[i] = data.series.find(({ name }) => name?.includes('AL_EA' + i))?.fields[1].state?.calcs?.lastNotNull;  
ms_chiller[i] = data.series.find(({ name }) => name?.includes('MS_EA' + i))?.fields[1].state?.calcs?.lastNotNull;    
st_comp1_chiller[i] = data.series.find(({ name }) => name?.includes('ST_COMP1_EA' + i))?.fields[1].state?.calcs?.lastNotNull;
st_comp2_chiller[i] = data.series.find(({ name }) => name?.includes('ST_COMP2_EA' + i))?.fields[1].state?.calcs?.lastNotNull;
if (st_chiller[i] === 1) { //ESTADO
    msgEstado=" ENCENDIDO"
    imgEquipo=imgChiAdv;
    colorEstado='advertencia'
    st_chiller[i] = st_on;
        PopUp(cookieEstado,nomEquipo,1,nomEquipo)
     }   else {
        msgEstado=" APAGADO"
        imgEquipo=imgChiAlm;
        colorEstado='alarma'
        st_chiller[i] = st_off;
            PopUp(cookieEstado,nomEquipo,0,nomEquipo)
    }
if (al_chiller[i] === 1) { //ALARMA
    al_chiller[i]=alarm_on;
    msgEstado=" ALARMA"
    imgEquipo=imgChiAlm;
    colorEstado='alarma'
        PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
    }   else {
        al_chiller[i] = alarm_off;
            localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')
    }
if (ms_chiller[i] === 2) { //WARNING
    ms_chiller[i] = warning_on;
    //ms_chiller[i]= alarmasStyles.mant;
    msgEstado=" ALARMA"
    imgEquipo=imgChiAdv;
    colorEstado='advertencia'
        PopUp(cookieAdv,nomEquipo,1,nomEquipo+'adv');
    }   else {
        ms_chiller[i] = warning_off;
        ms_chiller[i] = alarmasStyles.sinconexion;
            localStorage.setItem('gyecookie_'+nomEquipo+'adv','0')
    }            
if (st_comp1_chiller[i] >= 1) { //ESTADO
    //msgEstado=" COMP SIS1 ENCENDIDO"
    //imgEquipo=imgChiAdv;
    //colorEstado='advertencia'
    st_comp1_chiller[i] = st_on;
         //PopUp(cookieEstado,nomEquipo,1,nomEquipo)
        }   else {
        //msgEstado=" COMP SIS1 APAGADO"
        //imgEquipo=imgChiAlm;
        //colorEstado='alarma'
        st_comp1_chiller[i] = st_off;
            //PopUp(cookieEstado,nomEquipo,0,nomEquipo)
    }
if (st_comp2_chiller[i] >= 1) { //ESTADO
    //msgEstado=" COMP SIS2 ENCENDIDO"
    //imgEquipo=imgChiAdv;
    //colorEstado='advertencia'   
    st_comp2_chiller[i] = st_on;
        //PopUp(cookieEstado,nomEquipo,1,nomEquipo)
        }   else {
        //msgEstado=" COMP SIS2 APAGADO"
        //imgEquipo=imgChiAlm;
        //colorEstado='alarma'
        st_comp2_chiller[i] = st_off;
            //PopUp(cookieEstado,nomEquipo,0,nomEquipo)
    }
}

//-----------------------------------------PARAMETROS CHILLERS SISTEMA 1&2---------------------------------------
let TSUM_EA_1 = data.series.find(({ name }) => name?.includes('TSUM_EA_1'))?.fields[1].state?.calcs
?.lastNotNull;
let TRET_EA_1 = data.series.find(({ name }) => name?.includes('TRET_EA_1'))?.fields[1].state?.calcs
?.lastNotNull;
let TSUM_EA_2 = data.series.find(({ name }) => name?.includes('TSUM_EA_2'))?.fields[1].state?.calcs
?.lastNotNull;
let TRET_EA_2 = data.series.find(({ name }) => name?.includes('TRET_EA_2'))?.fields[1].state?.calcs
?.lastNotNull;
let TSUM_EA_3 = data.series.find(({ name }) => name?.includes('TSUM_EA_3'))?.fields[1].state?.calcs
?.lastNotNull;
let TRET_EA_3 = data.series.find(({ name }) => name?.includes('TRET_EA_3'))?.fields[1].state?.calcs
?.lastNotNull;
let TSUM_EA_4 = data.series.find(({ name }) => name?.includes('TSUM_EA_4'))?.fields[1].state?.calcs
?.lastNotNull;
let TRET_EA_4 = data.series.find(({ name }) => name?.includes('TRET_EA_4'))?.fields[1].state?.calcs
?.lastNotNull;
//------------------------------------------------------------------------------------------------------------
//-----------------------------------ESTADOS, ALARMAS DE BOMBAS y VALVULAS------------------------------------
//BOMBAS PRIMARIAS
let st_1b1 = [];
let al_1b1 = [];
for (let i = 1; i <= 6; i++) {
    nomEquipo = 'Bomba Primaria 1/B1('+(i)+')';
    let imgVarAlm= imgPopUp('./bomba_alm.png')
    let imgVarAdv= imgPopUp('./bomba_adv.png')
    let cookieEstado = localStorage.getItem('gyecookie_'+nomEquipo);
    let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
    //let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');
    st_1b1[i] = data.series.find(({ name }) => name?.includes('DATA.F1_B1_' + i + '_S.VALUE'))?.fields[1].state?.calcs?.lastNotNull;   
    al_1b1[i] = data.series.find(({ name }) => name?.includes('DATA.F1_B1_' + i + '_A.VALUE'))?.fields[1].state?.calcs?.lastNotNull;   
    if (st_1b1[i] === 1) {
        msgEstado=" ENCENDIDO"
        imgEquipo=imgVarAdv;
        colorEstado='advertencia'
        st_1b1[i] = st_on;
            PopUp(cookieEstado,nomEquipo,1,nomEquipo)
        }   else {
            msgEstado=" APAGADO"
            imgEquipo=imgVarAlm;
            colorEstado='alarma'
            st_1b1[i] = st_off;
                PopUp(cookieEstado,nomEquipo,0,nomEquipo)
        }
    if (al_1b1[i] === 2) {
        al_1b1[i] = alarm_on;
        msgEstado=" ALARMA"
        imgEquipo=imgVarAlm;
        colorEstado='alarma'
            PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
        }   else {
            al_1b1[i] = alarm_off;
            localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')
        }
}
//BOMBAS SECUNDARIAS
let st_1b2 = [];
let load_1b2 = [];
let al_1b2 = [];
for (let i = 1; i <= 4; i++) {
    nomEquipo = 'Bomba Secundaria 1/B2('+(i)+')';
    let imgVarAlm= imgPopUp('./var_alm.png')
    let imgVarAdv= imgPopUp('./var_adv.png')
    let cookieEstado = localStorage.getItem('gyecookie_'+nomEquipo);
    let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
    st_1b2[i] = data.series.find(({ name }) => name?.includes('DATA.F1_B2_' + i + '_S.VALUE'))?.fields[1].state?.calcs?.lastNotNull;   
    load_1b2[i] = data.series.find(({ name }) => name?.includes('DATA.F1_B2_' + i + '_L.VALUE'))?.fields[1].state?.calcs?.lastNotNull;   
    al_1b2[i] = data.series.find(({ name }) => name?.includes('DATA.F1_B2_' + i + '_A.VALUE'))?.fields[1].state?.calcs?.lastNotNull;   
    if (st_1b2[i] === 1) {
        msgEstado=" ENCENDIDO"
        imgEquipo=imgVarAdv;
        colorEstado='advertencia'
        st_1b2[i] = st_on;
        PopUp(cookieEstado,nomEquipo,1,nomEquipo)
        }   else {
            msgEstado=" APAGADO"
            imgEquipo=imgVarAlm;
            colorEstado='alarma'
            st_1b2[i] = st_off;
            PopUp(cookieEstado,nomEquipo,0,nomEquipo)
        }
    if (load_1b2[i] === 0) {
        load_1b2[i] = 0;
        }   else {
            load_1b2[i] = parseFloat(load_1b2[i]).toFixed(0);
        } 
    if (al_1b2[i] === 2) {
        al_1b2[i]=alarm_on;
        msgEstado=" ALARMA"
        imgEquipo=imgVarAlm;
        colorEstado='alarma'
            PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
        }   else {
            al_1b2[i] = alarm_off;
            localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')
        }
    }
//VALVULAS SIST 1&2
let ISOV1_S_SIS2 = data.series.find(({ name }) => name?.includes('DATA.ISOV1_S_SIS2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV1_C_SIS2 = data.series.find(({ name }) => name?.includes('DATA.ISOV1_C_SIS2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV2_S_SIS2 = data.series.find(({ name }) => name?.includes('DATA.ISOV2_S_SIS2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV2_C_SIS2 = data.series.find(({ name }) => name?.includes('DATA.ISOV2_C_SIS2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV1_S_SIS1 = data.series.find(({ name }) => name?.includes('DATA.ISOV1_S_SIS1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV1_C_SIS1 = data.series.find(({ name }) => name?.includes('DATA.ISOV1_C_SIS1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV2_S_SIS1 = data.series.find(({ name }) => name?.includes('DATA.ISOV2_S_SIS1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let ISOV2_C_SIS1 = data.series.find(({ name }) => name?.includes('DATA.ISOV2_C_SIS1.VALUE'))?.fields[1].state?.calcs
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
//----------------------------------- ESTADO Y ALARMAS DE GENERADORES -----------------------------------------
let st_gen = [];
let e_stop_gen = [];
let st_level = [];

for (let i = 1; i <= 6; i++) {
nomEquipo = 'GEN-'+ (i);
let imgGenAlm= imgPopUp('./gen_alm.png');
let imgGenAdv= imgPopUp('./gen_adv.png');
let cookieEstado = localStorage.getItem('gyecookie_'+nomEquipo);
let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');
e_stop_gen[i] = data.series.find(({ name }) => name?.includes('E_STOP_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
st_gen[i] = data.series.find(({ name }) => name?.includes('VOL_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
st_level[i] = data.series.find(({ name }) => name?.includes('LEVEL_GEN_' + i))?.fields[1].state?.calcs?.lastNotNull;
if  (st_gen[i] >= 420) {
    msgEstado = " ENCENDIDO"
    imgEquipo = imgGenAdv;
    colorEstado = 'advertencia'
    st_gen[i] = st_on;
        PopUp(cookieEstado,nomEquipo,1,nomEquipo)
    }    else {
        msgEstado=" APAGADO"
        imgEquipo = imgGenAdv;
        colorEstado = 'alarma'
        st_gen[i] = st_off;
            PopUp(cookieEstado,nomEquipo,0,nomEquipo)
    }
if (e_stop_gen[i] === 2 || e_stop_gen[i] === 3 || e_stop_gen[i] === 4) {
    e_stop_gen[i] = alarm_on;
        msgEstado=" ALARMA"
        imgEquipo=imgGenAlm;
        colorEstado='alarma'
            PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
    }    else {
        e_stop_gen[i] = alarm_off;}
        localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')
    
if  (st_level[i] <= 35 || st_level[i] >= 97 ) {
    st_level[i] = warning_on;
        msgEstado = " ALARMA"
        imgEquipo = imgGenAlm;
        colorEstado='advertencia'
            PopUp(cookieAdv,nomEquipo,1,nomEquipo+'adv');
    }    else {
        st_level[i] = warning_off;
        localStorage.setItem('gyecookie_'+nomEquipo+'adv','0')
    }
}
//------------------------------PARAMETROS PRINCIPALES DE SISTEMA DE GENERADORES ------------------------------
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
            vll_genSIS[i] =  vll_genSIS[i];
            //st_gen[i] === 1;
    }}
    if (st_gen_carga[i] === null || st_gen_carga[i] === 0 ){
        st_gen_carga[i] = 0;
    } else {
        st_gen_carga[i] = st_gen_carga[i];
    }
    if (pot_genSIS[i] === null || pot_genSIS[i] === 0 ){
        pot_genSIS[i] = 0;
    } else { 
        if (pot_genSIS[i] > 0){
            pot_genSIS[i] =  pot_genSIS[i]
    }
    }
}
//-------------------------------------ESTADOS DE SISTEMA DE CLIMATIZACÓN--------------------------------------
//-------------------------------------------------------------------------------------------------------------
let SYS_1_EN = data.series.find(({ name }) => name?.includes('DATA.SYS_EN_SIS1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let SYS_2_EN = data.series.find(({ name }) => name?.includes('DATA.SYS_EN_SIS2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let SYS_ALARM_SIS1 = data.series.find(({ name }) => name?.includes('DATA.SYS_ALARM_SIS1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let SYS_ALARM_SIS2 = data.series.find(({ name }) => name?.includes('DATA.SYS_ALARM_SIS2.VALUE'))?.fields[1].state?.calcs
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
let VLN_A = data.series.find(({ name }) => name?.includes('DATA.VLN_A.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let VLN_B = data.series.find(({ name }) => name?.includes('DATA.VLN_B.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let VLN_C = data.series.find(({ name }) => name?.includes('DATA.VLN_C.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;

//-------------------------------------------------------------------------------------------------------------
//-------------------------------------PARAMETROS DE POTENCIA POR SISTEMA--------------------------------------
let POT_SIS1 = data.series.find(({ name }) => name?.includes('POT_SIS1'))?.fields[1].state?.calcs
?.lastNotNull;
let POT_SIS2 = data.series.find(({ name }) => name?.includes('POT_SIS2'))?.fields[1].state?.calcs
?.lastNotNull;
let POT_TDP1A = data.series.find(({ name }) => name?.includes('POT_TDP1A'))?.fields[1].state?.calcs
?.lastNotNull;
let POT_TDP2A = data.series.find(({ name }) => name?.includes('POT_TDP2A'))?.fields[1].state?.calcs
?.lastNotNull;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------------------------------------------------------------------------------------------------
//----------------------------------PARAMETROS DE POTENCIA PARA CALCULO DEL PUE--------------------------------
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


//-------------------------------------------------------------------------------------------------------------
//----------------------------------PARAMETROS Y ESTADOS DE CORRIENTE DE SATELITAL--------------------------------
//CORRIENTE SISTEMA 1
let I_L1_ACC_SAT_SIS1 = data.series.find(({ name }) => name?.includes('DATA.AA_SAT_1A_L1.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let I_L2_ACC_SAT_SIS1 = data.series.find(({ name }) => name?.includes('DATA.AA_SAT_1A_L2.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let I_L1_ACC_SAT_SIS2 = data.series.find(({ name }) => name?.includes('DATA.AA_SAT_2A_L1.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
let I_L2_ACC_SAT_SIS2 = data.series.find(({ name }) => name?.includes('DATA.AA_SAT_2A_L2.VALUE'))?.fields[1].state?.calcs?.lastNotNull;

let st_Led_SIS1_L = [];
        for (let i = 1; i <= 2; i++) {
        /*nomEquipo = 'SAT_1A_L'+(i);
        let imgGenAlm= imgPopUp('./gen_alm.png');
        let imgGenAdv= imgPopUp('./gen_adv.png');
        let cookieEstado = localStorage.getItem('gyecookie_'+nomEquipo);
        let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
        let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');*/
        st_Led_SIS1_L[i] = data.series.find(({ name }) => name?.includes('ST_SIS1_LED_L' + i))?.fields[1].state?.calcs?.lastNotNull;
        if (st_Led_SIS1_L[i] > 200) {
            //msgEstado = " BREAKER CERRADO"
            //imgEquipo = imgGenAdv;
            //colorEstado = 'advertencia'
            st_Led_SIS1_L[i] = st_on;
                //PopUp(cookieEstado,nomEquipo,1,nomEquipo)
            }    else {
                if (st_Led_SIS1_L[i] < 12) {
                //msgEstado=" BREAKER ABIERTO"
                //imgEquipo = imgGenAlm;
                //colorEstado = 'alarma'
                st_Led_SIS1_L[i] = alarm_on;
                    //PopUp(cookieAlm,nomEquipo,1,nomEquipo)
            }
        }
    }
    let st_Led_SIS2_L = [];
        for (let i = 1; i <= 2; i++) {
       /* nomEquipo = 'SAT_2A_L'+(i);
        let imgGenAlm= imgPopUp('./gen_alm.png');
        let imgGenAdv= imgPopUp('./gen_adv.png');
        let cookieEstado = localStorage.getItem('gyecookie_'+nomEquipo);
        let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
        let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');*/
        st_Led_SIS2_L[i] = data.series.find(({ name }) => name?.includes('ST_SIS2_LED_L' + i))?.fields[1].state?.calcs?.lastNotNull;
        if (st_Led_SIS2_L[i] > 200) {
            msgEstado = " BREAKER CERRADO"
            //imgEquipo = imgGenAdv;
            //colorEstado = 'advertencia'
            st_Led_SIS2_L[i] = st_on;
                //PopUp(cookieEstado,nomEquipo,1,nomEquipo)
            }    else {
                if (st_Led_SIS2_L[i] < 12) {
                //msgEstado=" BREAKER ABIERTO"
                //imgEquipo = imgGenAlm;
                //colorEstado = 'alarma'
                st_Led_SIS2_L[i] = alarm_on;
                    //PopUp(cookieAlm,nomEquipo,1,nomEquipo)
            }
        }
    }

//-------------------------------------------------------------------------------------------------------------
//---------------------------------- PARAMETROS ESTADOS Y ALARMZAS DE PDIS --------------------------------
//
let st_pdi_1A_F = [];
let al_pdi_1A_F = [];
let pot_pdi_1A_F = [];
let vol_pdi_1A_F = [];
let st_pdi_2A_F = [];
let al_pdi_2A_F = [];
let pot_pdi_2A_F = [];
let vol_pdi_2A_F = [];

for (let i = 1; i <= 10; i++) {
    nomEquipo = 'PDU-01A-F'+(i);
    let imgVarAlm= imgPopUp('./pdu_alm.png')
    let imgVarAdv= imgPopUp('./pdu_adv.png')
    let cookieEstado = localStorage.getItem('gyecookie_'+nomEquipo);
    let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
    //let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');
    st_pdi_1A_F[i] = data.series.find(({ name }) => name?.includes('PDU1A_F' + i + '_ST'))?.fields[1].state?.calcs?.lastNotNull;   
    al_pdi_1A_F[i] = data.series.find(({ name }) => name?.includes('PDU1A_F' + i + '_AL'))?.fields[1].state?.calcs?.lastNotNull;   
    
    pot_pdi_1A_F[i] = (SIS1_POT_PDI_[i])/10;
    vol_pdi_1A_F[i] = (st_pdi_1A_F[i])/10;   
   
    if (st_pdi_1A_F[i] > 210) {
        msgEstado=" ENCENDIDO"
        imgEquipo=imgVarAdv;
        colorEstado='advertencia'
        st_pdi_1A_F[i] = st_on;
            PopUp(cookieEstado,nomEquipo,1,nomEquipo)
        }   else {
            msgEstado=" APAGADO"
            imgEquipo=imgVarAlm;
            colorEstado='alarma'
            st_pdi_1A_F[i] = st_off;
                PopUp(cookieEstado,nomEquipo,0,nomEquipo)
        }
    if (al_pdi_1A_F[i] === 1) {
        al_pdi_1A_F[i] = alarm_on;
        msgEstado=" ALARMA"
        imgEquipo=imgVarAlm;
        colorEstado='alarma'
            PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
        }   else {
            al_pdi_1A_F[i] = alarm_off;
            localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')
        }
}

for (let i = 1; i <= 10; i++) {
    nomEquipo = 'PDU-02A-F'+(i);
    let imgVarAlm= imgPopUp('./pdu_alm.png')
    let imgVarAdv= imgPopUp('./pdu_adv.png')
    let cookieEstado = localStorage.getItem('gyecookie_'+nomEquipo);
    let cookieAlm = localStorage.getItem('gyecookie_'+nomEquipo+'alm');
    //let cookieAdv = localStorage.getItem('gyecookie_'+nomEquipo+'adv');
    st_pdi_2A_F[i] = data.series.find(({ name }) => name?.includes('PDU2A_F' + i + '_ST'))?.fields[1].state?.calcs?.lastNotNull;   
    al_pdi_2A_F[i] = data.series.find(({ name }) => name?.includes('PDU2A_F' + i + '_AL'))?.fields[1].state?.calcs?.lastNotNull;   
    
    pot_pdi_2A_F[i] = (SIS2_POT_PDI_[i])/10;
    vol_pdi_2A_F[i] = (st_pdi_2A_F[i])/10;   
   
    if (st_pdi_2A_F[i] > 210) {
        msgEstado=" ENCENDIDO"
        imgEquipo=imgVarAdv;
        colorEstado='advertencia'
        st_pdi_2A_F[i] = st_on;
            PopUp(cookieEstado,nomEquipo,1,nomEquipo)
        }   else {
            msgEstado=" APAGADO"
            imgEquipo=imgVarAlm;
            colorEstado='alarma'
            st_pdi_2A_F[i] = st_off;
                PopUp(cookieEstado,nomEquipo,0,nomEquipo)
        }
    if (al_pdi_2A_F[i] === 1) {
        al_pdi_2A_F[i] = alarm_on;
        msgEstado=" ALARMA"
        imgEquipo=imgVarAlm;
        colorEstado='alarma'
            PopUp(cookieAlm,nomEquipo,1,nomEquipo+'alm');
        }   else {
            al_pdi_2A_F[i] = alarm_off;
            localStorage.setItem('gyecookie_'+nomEquipo+'alm','0')
        }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
let principal: DataPrincipal = {
    ParametrosElec: {
        Vab_Tr01: 0, Vbc_Tr01: 0, Vca_Tr01: 0,
        Ia_Tr01: 0, Ib_Tr01: 0, Ic_Tr01: 0,
        Pt_Tr01: 0,
        V_CMTAVG: 0, V_CMTL1: 0, V_CMTL2: 0, V_CMTL3: 0,
        P_SIS1: 0, P_SIS2: 0,
        PUE: 0,
        DCIE: 0,
    },
    ParametrosClima: {
        T_sumin: 0, T_ret: 0,
        uma1_TS: 0, uma2_TS: 0, uma3_TS: 0, uma4_TS: 0, uma5_TS: 0, uma6_TS: 0,
        uma7_TS: 0, uma8_TS: 0, uma9_TS: 0, uma10_TS: 0, uma11_TS: 0, uma12_TS: 0,
        uma1_TR: 0, uma2_TR: 0, uma3_TR: 0, uma4_TR: 0, uma5_TR: 0, uma6_TR: 0,
        uma7_TR: 0, uma8_TR: 0, uma9_TR: 0, uma10_TR: 0, uma11_TR: 0, uma12_TR: 0,
    },
    ParametrosUPS_SIS1: {
        V_in: 0, V_out: 0, I_out: 0, P_out: 0, Load: 0,
        V_inCHI: 0, V_outCHI: 0, I_outCHI: 0, P_outCHI: 0, LoadCHI: 0,
        V_PDI1A_F1: 0, V_PDI1A_F2: 0, V_PDI1A_F3: 0, V_PDI1A_F4: 0, V_PDI1A_F5: 0, 
        V_PDI1A_F6: 0, V_PDI1A_F7: 0, V_PDI1A_F8: 0, V_PDI1A_F9: 0, V_PDI1A_F10: 0, 
        P_PDI1A_F1: 0, P_PDI1A_F2: 0, P_PDI1A_F3: 0, P_PDI1A_F4: 0, P_PDI1A_F5: 0, 
        P_PDI1A_F6: 0, P_PDI1A_F7: 0, P_PDI1A_F8: 0, P_PDI1A_F9: 0, P_PDI1A_F10: 0, 

    }, 
        ParametrosUPS_SIS2: {
            V_in: 0, V_out: 0, I_out: 0, P_out: 0, Load: 0,
            V_inCHI: 0, V_outCHI: 0, I_outCHI: 0, P_outCHI: 0, LoadCHI: 0,
            V_PDI2A_F1: 0, V_PDI2A_F2: 0, V_PDI2A_F3: 0, V_PDI2A_F4: 0, V_PDI2A_F5: 0, 
            V_PDI2A_F6: 0, V_PDI2A_F7: 0, V_PDI2A_F8: 0, V_PDI2A_F9: 0, V_PDI2A_F10: 0, 
            P_PDI2A_F1: 0, P_PDI2A_F2: 0, P_PDI2A_F3: 0, P_PDI2A_F4: 0, P_PDI2A_F5: 0, 
            P_PDI2A_F6: 0, P_PDI2A_F7: 0, P_PDI2A_F8: 0, P_PDI2A_F9: 0, P_PDI2A_F10: 0, 
    }, 
    ParametrosClima_SIS1: {
        T_sumEA3: 0, T_retEA3: 0,
        T_sumEA4: 0, T_retEA4: 0,
        T_sum_prim: 0, T_sum_sec: 0, T_tanque: 0, T_ret: 0,
        LoadB3: 0, LoadB4: 0,
        acc_sat_L1: 0, acc_sat_L2: 0,
    },
    ParametrosClima_SIS2: {
        T_sumEA1: 0, T_retEA1: 0,
        T_sumEA2: 0, T_retEA2: 0,
        T_sum_prim: 0, T_sum_sec: 0, T_tanque: 0, T_ret: 0,
        LoadB1: 0, LoadB2: 0,
        acc_sat_L1: 0, acc_sat_L2: 0,
    },
    ParametrosGEN_SIS1: {
        V_out: 0, I_out: 0, P_out: 0, Load: 0,
        LoadG1: 0, LoadG2: 0, LoadG3: 0, 
    },
    ParametrosGEN_SIS2: {
        V_out: 0, I_out: 0, P_out: 0, Load: 0,
        LoadG4: 0, LoadG5: 0, LoadG6: 0, 
    },
    Estados_Principales: {
        ups_SIS1: '', ups_SIS2: '',
        gen_SIS1: '', gen_SIS2: '',
        transf_in: '', transf_out: '',
        clima_SIS1: '', clima_SIS2: '',
        uma1: '', uma2: '', uma3: '',
        uma4: '', uma5: '', uma6: '',
        uma7: '', uma8: '', uma9: '',
        uma10: '', uma11: '', uma12: '',
        VAB_CMT: '', VBC_CMT: '',  VCA_CMT: '',
        ST_CMT: '',
    },
    Estados_SIS1: {
        ups1: '', ups2: '', ups3: '', ups4: '', ups5: '', ups6: '', upschi1: '',
        gen1: '', gen2: '', gen3: '',
        Ea3: '', Ea4: '',
        b1_4: '', b1_5: '', b1_6: '',
        b2_3: '', b2_4: '',
        V1aux: '', V2aux: '',
        upsoffices_1a: '', upssat_1a: '', rec_1a: '',
        st_acc_sat_L1: '', st_acc_sat_L2: '',
        comp1_ea3: '', comp2_ea3: '',
        comp1_ea4: '', comp2_ea4: '',
        pdu_F1:'', pdu_F2:'', pdu_F3:'', pdu_F4:'', pdu_F5:'',
        pdu_F6:'', pdu_F7:'', pdu_F8:'', pdu_F9:'', pdu_F10:'',
    },
    Estados_SIS2: {
        ups1: '', ups2: '', ups3: '', ups4: '', ups5: '', ups6: '', upschi2: '',
        gen4: '', gen5: '', gen6: '',
        Ea1: '', Ea2: '',
        b1_1: '', b1_2: '', b1_3: '',
        b2_1: '', b2_2: '',
        V1aux: '', V2aux: '',
        upsnoc_2a: '', upssat_2a: '', rec_2a: '',
        st_acc_sat_L1: '', st_acc_sat_L2: '',
        comp1_ea1: '', comp2_ea1: '',
        comp1_ea2: '', comp2_ea2: '',
        pdu_F1:'', pdu_F2:'', pdu_F3:'', pdu_F4:'', pdu_F5:'',
        pdu_F6:'', pdu_F7:'', pdu_F8:'', pdu_F9:'', pdu_F10:'',
    },
    Alarmas: {
        uma1: '', uma2: '', uma3: '', uma4: '', uma5: '', uma6: '',
        uma7: '', uma8: '', uma9: '', uma10: '', uma11: '', uma12: '',
        clima_SIS1: '', clima_SIS2: '',
    },
    Alarmas_SIS1: {
        ups1: '', ups2: '', ups3: '', ups4: '', ups5: '', ups6: '', upschi1: '',
        gen1: '', gen2: '', gen3: '',
        Ea3: '', Ea4: '', Ea3mant: '', Ea4mant: '',
        b1_4: '', b1_5: '', b1_6: '',
        b2_3: '', b2_4: '',
        upsoffices_1a: '', upssat_1a: '', //rec_1a: '',
        text_mant_Ea4:'', text_mant_Ea3:'',
        pdu_F1:'', pdu_F2:'', pdu_F3:'', pdu_F4:'', pdu_F5:'',
        pdu_F6:'', pdu_F7:'', pdu_F8:'', pdu_F9:'', pdu_F10:'',
    },
    Alarmas_SIS2: {
        ups1: '', ups2: '', ups3: '', ups4: '', ups5: '', ups6: '', upschi2: '',
        gen4: '', gen5: '', gen6: '',
        Ea1: '', Ea2: '', Ea1mant: '', Ea2mant: '',
        b1_1: '', b1_2: '', b1_3: '',
        b2_1: '', b2_2: '',
        V1aux: '', V2aux: '',
        upsnoc_2a: '', upssat_2a: '', //rec_2a: '',
        text_mant_Ea1:'', text_mant_Ea2:'',
        pdu_F1:'', pdu_F2:'', pdu_F3:'', pdu_F4:'', pdu_F5:'',
        pdu_F6:'', pdu_F7:'', pdu_F8:'', pdu_F9:'', pdu_F10:'',
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
principal.Estados_SIS1.ups1 = st_ups_1a[1];
principal.Estados_SIS1.ups2 = st_ups_1a[2];
principal.Estados_SIS1.ups3 = st_ups_1a[3];  
principal.Estados_SIS1.ups4 = st_ups_1a[4];
principal.Estados_SIS1.ups5 = st_ups_1a[5];  
principal.Estados_SIS1.ups6 = st_ups_1a[6];
principal.Estados_SIS1.upschi1 = st_upschi[1];
//ESTADOS UPS 200 KVA SIS2
principal.Estados_SIS2.ups1 = st_ups_2a[1];  
principal.Estados_SIS2.ups2 = st_ups_2a[2];
principal.Estados_SIS2.ups3 = st_ups_2a[3];  
principal.Estados_SIS2.ups4 = st_ups_2a[4];
principal.Estados_SIS2.ups5 = st_ups_2a[5];  
principal.Estados_SIS2.ups6 = st_ups_2a[6];
principal.Estados_SIS2.upschi2 = st_upschi[2];
//ALARMAS UPS 200 KVA SIS1
principal.Alarmas_SIS1.ups1 = al_ups_1a[1];
principal.Alarmas_SIS1.ups2 = al_ups_1a[2]; 
principal.Alarmas_SIS1.ups3 = al_ups_1a[3];
principal.Alarmas_SIS1.ups4 = al_ups_1a[4]; 
principal.Alarmas_SIS1.ups5 = al_ups_1a[5]; 
principal.Alarmas_SIS1.ups6 = al_ups_1a[6]; 
//ALARMAS UPS 200 KVA SIS2
principal.Alarmas_SIS2.ups1 = al_ups_2a[1];
principal.Alarmas_SIS2.ups2 = al_ups_2a[2]; 
principal.Alarmas_SIS2.ups3 = al_ups_2a[3]; 
principal.Alarmas_SIS2.ups4 = al_ups_2a[4]; 
principal.Alarmas_SIS2.ups5 = al_ups_2a[5]; 
principal.Alarmas_SIS2.ups6 = al_ups_2a[6]; 
// ALARMAS UPS SIS1&2
principal.Alarmas_SIS1.upschi1 = al_upschi[1];
principal.Alarmas_SIS2.upschi2 = al_upschi[2];
//-----------------------------------------ESTADOS DE SISTEMA DE UPS´S-----------------------------------------
principal.Estados_Principales.ups_SIS1 = st_ups_1a[1] === st_on || st_ups_1a[2] === st_on || st_ups_1a[3] === st_on || st_ups_1a[4] === st_on || st_ups_1a[5] === st_on || st_ups_1a[6] === st_on? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.ups_SIS2 = st_ups_1a[1] === st_on || st_ups_1a[2] === st_on || st_ups_1a[3] === st_on || st_ups_1a[4] === st_on || st_ups_1a[5] === st_on || st_ups_1a[6] === st_on? estadosStyles.on : estadosStyles.sinconexion;
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
//ESTADOS y ALARMAS CHILLERS SIS 1&2
principal.Alarmas_SIS2.text_mant_Ea1 = ms_chiller[1]; 
principal.Alarmas_SIS2.text_mant_Ea2 = ms_chiller[2];
principal.Alarmas_SIS1.text_mant_Ea3 = ms_chiller[3];
principal.Alarmas_SIS1.text_mant_Ea4 = ms_chiller[4];

principal.Estados_SIS2.Ea1 = st_chiller[1];
principal.Estados_SIS2.Ea2 = st_chiller[2];
principal.Estados_SIS1.Ea3 = st_chiller[3];
principal.Estados_SIS1.Ea4 = st_chiller[4];
principal.Alarmas_SIS2.Ea1 = al_chiller[1];
principal.Alarmas_SIS2.Ea2 = al_chiller[2];
principal.Alarmas_SIS1.Ea3 = al_chiller[3];
principal.Alarmas_SIS1.Ea4 = al_chiller[4];
principal.Alarmas_SIS2.Ea1mant = ms_chiller[1];
principal.Alarmas_SIS2.Ea2mant = ms_chiller[2];
principal.Alarmas_SIS1.Ea3mant = ms_chiller[3];
principal.Alarmas_SIS1.Ea4mant = ms_chiller[4];

principal.Estados_SIS1.comp1_ea3 = st_comp1_chiller[3];
principal.Estados_SIS1.comp2_ea3 = st_comp2_chiller[3];
principal.Estados_SIS1.comp1_ea4 = st_comp1_chiller[4];
principal.Estados_SIS1.comp2_ea4 = st_comp2_chiller[4];
principal.Estados_SIS2.comp1_ea1 = st_comp1_chiller[1];
principal.Estados_SIS2.comp2_ea1 = st_comp2_chiller[1];
principal.Estados_SIS2.comp1_ea2 = st_comp1_chiller[2];
principal.Estados_SIS2.comp2_ea2 = st_comp2_chiller[2];

//PARAMETROS CHILLERS SIS
/*principal.ParametrosClima_SIS2.T_sumEA1 = Number.parseFloat(TSUM_EA_1?.toFixed(2));
principal.ParametrosClima_SIS2.T_retEA1 = Number.parseFloat(TRET_EA_1?.toFixed(2));
principal.ParametrosClima_SIS2.T_sumEA2 = Number.parseFloat(TSUM_EA_2?.toFixed(2));
principal.ParametrosClima_SIS2.T_retEA2 = Number.parseFloat(TRET_EA_2?.toFixed(2));
principal.ParametrosClima_SIS1.T_sumEA3 = Number.parseFloat(TSUM_EA_3?.toFixed(2));
principal.ParametrosClima_SIS1.T_retEA3 = Number.parseFloat(TRET_EA_3?.toFixed(2));
principal.ParametrosClima_SIS1.T_sumEA4 = Number.parseFloat(TSUM_EA_4?.toFixed(2));
principal.ParametrosClima_SIS1.T_retEA4 = Number.parseFloat(TRET_EA_4?.toFixed(2));*/
principal.ParametrosClima_SIS2.T_retEA1 = Number.parseFloat(TSUM_EA_1?.toFixed(2));
principal.ParametrosClima_SIS2.T_sumEA1 = Number.parseFloat(TRET_EA_1?.toFixed(2));
principal.ParametrosClima_SIS2.T_retEA2 = Number.parseFloat(TSUM_EA_2?.toFixed(2));
principal.ParametrosClima_SIS2.T_sumEA2 = Number.parseFloat(TRET_EA_2?.toFixed(2));
principal.ParametrosClima_SIS1.T_retEA3 = Number.parseFloat(TSUM_EA_3?.toFixed(2));
principal.ParametrosClima_SIS1.T_sumEA3 = Number.parseFloat(TRET_EA_3?.toFixed(2));
principal.ParametrosClima_SIS1.T_retEA4 = Number.parseFloat(TSUM_EA_4?.toFixed(2));
principal.ParametrosClima_SIS1.T_sumEA4 = Number.parseFloat(TRET_EA_4?.toFixed(2));
//-----------------------------------------BOMBAS Y VALVULAS----------------------------------------------
//--------------------------------------------------------------------------------------------------------
//ESTADOS Y ALARMAS B. PRIMARIAS
principal.Estados_SIS2.b1_1 = st_1b1[1];    
principal.Estados_SIS2.b1_2 = st_1b1[2];
principal.Estados_SIS2.b1_3 = st_1b1[3];   
principal.Estados_SIS1.b1_4 = st_1b1[4];   
principal.Estados_SIS1.b1_5 = st_1b1[5];
principal.Estados_SIS1.b1_6 = st_1b1[6];
principal.Alarmas_SIS2.b1_1 = al_1b1[1];
principal.Alarmas_SIS2.b1_2 = al_1b1[2];
principal.Alarmas_SIS2.b1_3 = al_1b1[3];
principal.Alarmas_SIS1.b1_4 = al_1b1[4];
principal.Alarmas_SIS1.b1_5 = al_1b1[5];
principal.Alarmas_SIS1.b1_6 = al_1b1[6];
//ESTADOS Y ALARMAS B. SECUNDARIAS 
principal.Estados_SIS2.b2_1 = st_1b2[1];
principal.Estados_SIS2.b2_2 = st_1b2[2]; 
principal.Estados_SIS1.b2_3 = st_1b2[3];
principal.Estados_SIS1.b2_4 = st_1b2[4];
principal.Alarmas_SIS2.b2_1 = al_1b2[1];
principal.Alarmas_SIS2.b2_2 = al_1b2[2]; 
principal.Alarmas_SIS1.b2_3 = al_1b2[3];
principal.Alarmas_SIS1.b2_4 = al_1b2[4];

principal.ParametrosClima_SIS2.LoadB1 = load_1b2[1];
principal.ParametrosClima_SIS2.LoadB2 = load_1b2[2];
principal.ParametrosClima_SIS1.LoadB3 = load_1b2[3];
principal.ParametrosClima_SIS1.LoadB4 = load_1b2[4];

//ESTADOS DE VALVULAS SISTEMA 1&2
principal.Estados_SIS2.V1aux = ISOV1_S_SIS2 === 1 && ISOV1_C_SIS2 === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS2.V2aux = ISOV2_S_SIS2 === 1 && ISOV2_C_SIS2 === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS1.V1aux = ISOV1_S_SIS1 === 1 && ISOV1_C_SIS1 === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_SIS1.V2aux = ISOV2_S_SIS1 === 1 && ISOV2_C_SIS1 === 1? estadosStyles.on : estadosStyles.sinconexion;


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
//SENSORES DE TUBERIAS SIS1&2
principal.ParametrosClima_SIS1.T_sum_prim = Number.parseFloat(TEMP_S_PRI_SIS1 ?.toFixed(2));
principal.ParametrosClima_SIS1.T_sum_sec = Number.parseFloat(TEMP_S_SEC_SIS1 ?.toFixed(2));
principal.ParametrosClima_SIS1.T_tanque = Number.parseFloat(TEMP_S_TAN_SIS1 ?.toFixed(2));
principal.ParametrosClima_SIS1.T_ret = Number.parseFloat(TEMP_R_SIS1 ?.toFixed(2));
principal.ParametrosClima_SIS2.T_sum_prim = Number.parseFloat(TEMP_S_PRI_SIS2 ?.toFixed(2));
principal.ParametrosClima_SIS2.T_sum_sec = Number.parseFloat(TEMP_S_SEC_SIS2 ?.toFixed(2));
principal.ParametrosClima_SIS2.T_tanque = Number.parseFloat(TEMP_S_TAN_SIS2 ?.toFixed(2));
principal.ParametrosClima_SIS2.T_ret = Number.parseFloat(TEMP_R_SIS2 ?.toFixed(2));
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
principal.Alarmas_SIS1.gen1 = (e_stop_gen[1] && st_level[1]);    
principal.Alarmas_SIS1.gen2 = (e_stop_gen[2] && st_level[2]);
principal.Alarmas_SIS1.gen3 = (e_stop_gen[3] && st_level[3]);
principal.Alarmas_SIS2.gen4 = (e_stop_gen[4] && st_level[4]);
principal.Alarmas_SIS2.gen5 = (e_stop_gen[5] && st_level[5]);
principal.Alarmas_SIS2.gen6 = (e_stop_gen[6] && st_level[6]);
//STATUS Y PARAMETROS DE SISTEMA DE GENERACIÓN SIS1&2
principal.Estados_Principales.gen_SIS1 = st_gen_carga[1] > 0 || st_gen_carga[2] > 0 || st_gen_carga[3] > 0? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.gen_SIS2 = st_gen_carga[4] > 0 || st_gen_carga[5] > 0 || st_gen_carga[6] > 0? estadosStyles.on : estadosStyles.sinconexion;
//CALCULOS VOLTAJE GENERADORES
let voltageSIS1_gen;
if ((vll_genSIS[1] > 0) && (vll_genSIS[2] > 0) && (vll_genSIS[3] > 0)){
    voltageSIS1_gen = (vll_genSIS[1] +++ vll_genSIS[2] +++ vll_genSIS[3]) /3;
    principal.ParametrosGEN_SIS1.V_out = Number.parseFloat(voltageSIS1_gen?.toFixed(2));
    }
    else {
        if ((vll_genSIS[1] === 0) && (vll_genSIS[2] > 0) && (vll_genSIS[3] > 0)){
            voltageSIS1_gen = (vll_genSIS[2] +++ vll_genSIS[3]) / 2;
            principal.ParametrosGEN_SIS1.V_out = Number.parseFloat(voltageSIS1_gen?.toFixed(2));
        }
        else {
            if ((vll_genSIS[1] > 0) && (vll_genSIS[2] > 0) && (vll_genSIS[3] === 0)){
                voltageSIS1_gen = (vll_genSIS[1] +++ vll_genSIS[2]) / 2;
                principal.ParametrosGEN_SIS1.V_out = Number.parseFloat(voltageSIS1_gen?.toFixed(2));
            }
            else {
                if ((vll_genSIS[1] > 0) && (vll_genSIS[2] === 0) && (vll_genSIS[3] > 0)){
                    voltageSIS1_gen = (vll_genSIS[1] +++ vll_genSIS[3]) / 2;
                    principal.ParametrosGEN_SIS1.V_out = Number.parseFloat(voltageSIS1_gen?.toFixed(2));
                }
                else {
                if ((vll_genSIS[1] === 0) && (vll_genSIS[2] === 0) && (vll_genSIS[3] > 0)){
                    voltageSIS1_gen = (vll_genSIS[3]) / 1;
                    principal.ParametrosGEN_SIS1.V_out = Number.parseFloat(voltageSIS1_gen?.toFixed(2));
                    }
                    else {
                        if ((vll_genSIS[1] === 0) && (vll_genSIS[2] > 0) && (vll_genSIS[3] === 0)){
                            voltageSIS1_gen = (vll_genSIS[2])/ 1;
                            principal.ParametrosGEN_SIS1.V_out = Number.parseFloat(voltageSIS1_gen?.toFixed(2));
                        }
                        else {
                            if ((vll_genSIS[1] > 0) && (vll_genSIS[2] === 0) && (vll_genSIS[3] === 0)){
                                voltageSIS1_gen = (vll_genSIS[1])/ 1;
                                principal.ParametrosGEN_SIS1.V_out = Number.parseFloat(voltageSIS1_gen?.toFixed(2));
                            }
                        }
                    }
                }
            }
        }
    }
    let voltageSIS2_gen;
    if ((vll_genSIS[4] > 0) && (vll_genSIS[5] > 0) && (vll_genSIS[6] > 0)){
        voltageSIS2_gen = (vll_genSIS[4] +++ vll_genSIS[5] +++ vll_genSIS[6]) /3;
        principal.ParametrosGEN_SIS2.V_out = Number.parseFloat(voltageSIS2_gen?.toFixed(2));
        }
        else {
            if ((vll_genSIS[4] === 0) && (vll_genSIS[5] > 0) && (vll_genSIS[6] > 0)){
                voltageSIS2_gen = (vll_genSIS[5] +++ vll_genSIS[6]) / 2;
                principal.ParametrosGEN_SIS2.V_out = Number.parseFloat(voltageSIS2_gen?.toFixed(2));
            }
            else {
                if ((vll_genSIS[4] > 0) && (vll_genSIS[5] > 0) && (vll_genSIS[6] === 0)){
                    voltageSIS2_gen = (vll_genSIS[4] +++ vll_genSIS[5]) / 2;
                    principal.ParametrosGEN_SIS2.V_out = Number.parseFloat(voltageSIS2_gen?.toFixed(2));
                }
                else {
                    if ((vll_genSIS[4] > 0) && (vll_genSIS[5] === 0) && (vll_genSIS[6] > 0)){
                        voltageSIS2_gen = (vll_genSIS[4] +++ vll_genSIS[6]) / 2;
                        principal.ParametrosGEN_SIS2.V_out = Number.parseFloat(voltageSIS2_gen?.toFixed(2));
                    }
                    else {
                    if ((vll_genSIS[4] === 0) && (vll_genSIS[5] === 0) && (vll_genSIS[6] > 0)){
                        voltageSIS2_gen = (vll_genSIS[6]) / 1;
                        principal.ParametrosGEN_SIS2.V_out = Number.parseFloat(voltageSIS2_gen?.toFixed(2));
                        }
                        else {
                            if ((vll_genSIS[4] === 0) && (vll_genSIS[5] > 0) && (vll_genSIS[6] === 0)){
                                voltageSIS2_gen = (vll_genSIS[5])/ 1;
                                principal.ParametrosGEN_SIS2.V_out = Number.parseFloat(voltageSIS2_gen?.toFixed(2));
                            }
                            else {
                                if ((vll_genSIS[4] > 0) && (vll_genSIS[5] === 0) && (vll_genSIS[6] === 0)){
                                    voltageSIS2_gen = (vll_genSIS[4])/ 1;
                                    principal.ParametrosGEN_SIS2.V_out = Number.parseFloat(voltageSIS2_gen?.toFixed(2));
                                }
                            }
                        }
                    }
                }
            }
        }
    
let corrienteSIS1_gen = (st_gen_carga[1] +++ st_gen_carga[2] +++ st_gen_carga[3]);
    principal.ParametrosGEN_SIS1.I_out = Number.parseFloat(corrienteSIS1_gen?.toFixed(2));
let corrienteSIS2_gen = (st_gen_carga[4] +++ st_gen_carga[5] +++ st_gen_carga[6]);
    principal.ParametrosGEN_SIS2.I_out = Number.parseFloat(corrienteSIS2_gen?.toFixed(2));

let potenciaSIS1_gen = (pot_genSIS[1] +++ pot_genSIS[2] +++ pot_genSIS[3]);
    principal.ParametrosGEN_SIS1.P_out = Number.parseFloat(potenciaSIS1_gen?.toFixed(2));
let potenciaSIS2_gen = (pot_genSIS[4] +++ pot_genSIS[5] +++ pot_genSIS[6]);
    principal.ParametrosGEN_SIS2.P_out = Number.parseFloat(potenciaSIS2_gen?.toFixed(2));

let cargaSIS1_gen = potenciaSIS1_gen * 100 / 2430; 
    principal.ParametrosGEN_SIS1.Load =  Number.parseFloat(cargaSIS1_gen?.toFixed(2));
let cargaSIS2_gen = potenciaSIS2_gen * 100 / 2430; 
    principal.ParametrosGEN_SIS2.Load =  Number.parseFloat(cargaSIS2_gen?.toFixed(2));

let Carga_G1;
if (pot_genSIS[1] < 10){
    Carga_G1 = 0 }
    else{
    Carga_G1 = pot_genSIS[1] * 100 / 810;
    principal.ParametrosGEN_SIS1.LoadG1 = Number.parseFloat(Carga_G1?.toFixed(0));
    }
let Carga_G2;
if (pot_genSIS[2] < 10){
    Carga_G2 = 0 }
    else{
    Carga_G2 = pot_genSIS[2] * 100 / 810;
    principal.ParametrosGEN_SIS1.LoadG2 = Number.parseFloat(Carga_G2?.toFixed(0));
    }
let Carga_G3;
if (pot_genSIS[3] < 10){
    Carga_G3 = 0 }
    else{
    Carga_G3 = pot_genSIS[3] * 100 / 810;
    principal.ParametrosGEN_SIS1.LoadG3 = Number.parseFloat(Carga_G3?.toFixed(0));
    }
let Carga_G4;
if (pot_genSIS[4] < 10){
    Carga_G4 = 0 }
    else{
    Carga_G4 = pot_genSIS[4] * 100 / 810;
    principal.ParametrosGEN_SIS2.LoadG4 = Number.parseFloat(Carga_G4?.toFixed(0));
    }
let Carga_G5;
if (pot_genSIS[5] < 10){
    Carga_G5 = 0 }
    else{
    Carga_G5 = pot_genSIS[5] * 100 / 810;
    principal.ParametrosGEN_SIS2.LoadG5 = Number.parseFloat(Carga_G5?.toFixed(0));
    }
let Carga_G6;
if (pot_genSIS[6] < 10){
    Carga_G6 = 0 }
    else{
    Carga_G6 = pot_genSIS[6] * 100 / 810;
    principal.ParametrosGEN_SIS2.LoadG6 = Number.parseFloat(Carga_G6?.toFixed(0));
    }


//------------------------------------ESTADOS DE SISTEMA DE CLIMATIZACÓN-----------------------------------
//---------------------------------------------------------------------------------------------------------
principal.Estados_Principales.clima_SIS1 = SYS_1_EN === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Estados_Principales.clima_SIS2 = SYS_2_EN === 1? estadosStyles.on : estadosStyles.sinconexion;
principal.Alarmas.clima_SIS1 = SYS_ALARM_SIS1 === 1? alarmasStyles.on : alarmasStyles.sinconexion;
principal.Alarmas.clima_SIS2 = SYS_ALARM_SIS2 === 1? alarmasStyles.on : alarmasStyles.sinconexion;

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
let Voltaje_CMTVL_AN = VLN_A/1000;
let Voltaje_CMTVL_BN = VLN_B/1000;
let Voltaje_CMTVL_CN = VLN_C/1000;

principal.Estados_Principales.VAB_CMT = Voltaje_CMTVL_AN > 7.5? estadosStyles.on : estadosStyles.alarma;
principal.Estados_Principales.VBC_CMT = Voltaje_CMTVL_BN > 7.5? estadosStyles.on : estadosStyles.alarma;
principal.Estados_Principales.VCA_CMT = Voltaje_CMTVL_CN > 7.5? estadosStyles.on : estadosStyles.alarma;
principal.Estados_Principales.ST_CMT =  Vprom_CMTAVG > 13.1? estadosStyles.on : estadosStyles.alarma;

//-----------------------------------------PARAMETROS POTENCIA POR SISTEMA TDLOWA&2---------------------------
let pot_tdlow1 = POT_SIS1/10;
    principal.ParametrosElec.P_SIS1 = Number.parseFloat(pot_tdlow1?.toFixed(2));
let pot_tdlow2 = POT_SIS2/10;  
principal.ParametrosElec.P_SIS2 = Number.parseFloat(pot_tdlow2?.toFixed(2));

//-----------------------------------------PARAMETROS TEMPERATURA PRINCIPALES---------------------------
if (st_1b2[1] === st_on || st_1b2[2] === st_on){
    principal.ParametrosClima.T_sumin = Number.parseFloat(TEMP_S_PRI_SIS2?.toFixed(1));
    principal.ParametrosClima.T_ret = Number.parseFloat(TEMP_R_SIS2?.toFixed(1));
    }
    else {
if (st_1b2[3] === st_on || st_1b2[4] === st_on){
    principal.ParametrosClima.T_sumin = Number.parseFloat(TEMP_S_PRI_SIS1?.toFixed(1));
    principal.ParametrosClima.T_ret = Number.parseFloat(TEMP_R_SIS1?.toFixed(1));
    }
}
    
//////////////////////////////////DIRECCIONAMIENTO DE VARIABLES Y CALCULOS PARA PUE////////////////////////////////////////////
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

//CALCULO DE PUE CON PQM (EEE)
let calculo_pue1 =  pot_pqm / (sum_pot_pdis + pot_total_ups_sat + pot_total_rec); 
//CALCULO DE PUE CON TDPS EN GENERACIÓN
let calculo_pue2 =  ((POT_TDP1A + POT_TDP2A) / 10) / (sum_pot_pdis + pot_total_ups_sat + pot_total_rec); 

//CALCULO DE DICE (EEE)
let calculo_dcie1 = 1 / calculo_pue1 * 100;
//CALCULO DE DICE (GENERACION)
let calculo_dcie2 = 1 / calculo_pue2 * 100;

if (pot_pqm === 0){
    principal.ParametrosElec.PUE= Number.parseFloat(calculo_pue2?.toFixed(2)); 
    principal.ParametrosElec.DCIE= Number.parseFloat(calculo_dcie2?.toFixed(2)); 
}
else {
    principal.ParametrosElec.PUE= Number.parseFloat(calculo_pue1?.toFixed(2)); 
    principal.ParametrosElec.DCIE= Number.parseFloat(calculo_dcie1?.toFixed(2)); 
}


/*principal.ParametrosElec.PUE= Number.parseFloat(calculo_pue2?.toFixed(2)); 
principal.ParametrosElec.DCIE= Number.parseFloat(calculo_dcie?.toFixed(2)); 
*/

//////////////////////////////////DIRECCIONAMIENTO DE VARIABLES PARA CORRIENTES ACC SATELITAL////////////////////////////////////////////
principal.ParametrosClima_SIS1.acc_sat_L1 = Number.parseFloat(I_L1_ACC_SAT_SIS1?.toFixed(2));
principal.ParametrosClima_SIS1.acc_sat_L2 = Number.parseFloat(I_L2_ACC_SAT_SIS1?.toFixed(2));
principal.ParametrosClima_SIS2.acc_sat_L1 = Number.parseFloat(I_L1_ACC_SAT_SIS2?.toFixed(2));
principal.ParametrosClima_SIS2.acc_sat_L2 = Number.parseFloat(I_L2_ACC_SAT_SIS2?.toFixed(2));
principal.Estados_SIS1.st_acc_sat_L1 = st_Led_SIS1_L[1];
principal.Estados_SIS1.st_acc_sat_L2 = st_Led_SIS1_L[2];
principal.Estados_SIS2.st_acc_sat_L1 = st_Led_SIS2_L[1];
principal.Estados_SIS2.st_acc_sat_L2 = st_Led_SIS2_L[2];

// PDI SISTEMA 1
principal.Estados_SIS1.pdu_F1 = st_pdi_1A_F[1];
principal.Estados_SIS1.pdu_F2 = st_pdi_1A_F[2];
principal.Estados_SIS1.pdu_F3 = st_pdi_1A_F[3];
principal.Estados_SIS1.pdu_F4 = st_pdi_1A_F[4];
principal.Estados_SIS1.pdu_F5 = st_pdi_1A_F[5];
principal.Estados_SIS1.pdu_F6 = st_pdi_1A_F[6];
principal.Estados_SIS1.pdu_F7 = st_pdi_1A_F[7];
principal.Estados_SIS1.pdu_F8 = st_pdi_1A_F[8];
principal.Estados_SIS1.pdu_F9 = st_pdi_1A_F[9];
principal.Estados_SIS1.pdu_F10 = st_pdi_1A_F[10];

principal.ParametrosUPS_SIS1.P_PDI1A_F1 = pot_pdi_1A_F[1];
principal.ParametrosUPS_SIS1.P_PDI1A_F2 = pot_pdi_1A_F[2];
principal.ParametrosUPS_SIS1.P_PDI1A_F3 = pot_pdi_1A_F[3];
principal.ParametrosUPS_SIS1.P_PDI1A_F4 = pot_pdi_1A_F[4];
principal.ParametrosUPS_SIS1.P_PDI1A_F5 = pot_pdi_1A_F[5];
principal.ParametrosUPS_SIS1.P_PDI1A_F6 = pot_pdi_1A_F[6];
principal.ParametrosUPS_SIS1.P_PDI1A_F7 = pot_pdi_1A_F[7];
principal.ParametrosUPS_SIS1.P_PDI1A_F8 = pot_pdi_1A_F[8];
principal.ParametrosUPS_SIS1.P_PDI1A_F9 = pot_pdi_1A_F[9];
principal.ParametrosUPS_SIS1.P_PDI1A_F10 = pot_pdi_1A_F[10];

principal.ParametrosUPS_SIS1.V_PDI1A_F1 = vol_pdi_1A_F[1];
principal.ParametrosUPS_SIS1.V_PDI1A_F2 = vol_pdi_1A_F[2];
principal.ParametrosUPS_SIS1.V_PDI1A_F3 = vol_pdi_1A_F[3];
principal.ParametrosUPS_SIS1.V_PDI1A_F4 = vol_pdi_1A_F[4];
principal.ParametrosUPS_SIS1.V_PDI1A_F5 = vol_pdi_1A_F[5];
principal.ParametrosUPS_SIS1.V_PDI1A_F6 = vol_pdi_1A_F[6];
principal.ParametrosUPS_SIS1.V_PDI1A_F7 = vol_pdi_1A_F[7];
principal.ParametrosUPS_SIS1.V_PDI1A_F8 = vol_pdi_1A_F[8];
principal.ParametrosUPS_SIS1.V_PDI1A_F9 = vol_pdi_1A_F[9];
principal.ParametrosUPS_SIS1.V_PDI1A_F10 = vol_pdi_1A_F[10];

principal.Alarmas_SIS1.pdu_F1 = al_pdi_1A_F[1];
principal.Alarmas_SIS1.pdu_F2 = al_pdi_1A_F[2];
principal.Alarmas_SIS1.pdu_F3 = al_pdi_1A_F[3];
principal.Alarmas_SIS1.pdu_F4 = al_pdi_1A_F[4];
principal.Alarmas_SIS1.pdu_F5 = al_pdi_1A_F[5];
principal.Alarmas_SIS1.pdu_F6 = al_pdi_1A_F[6];
principal.Alarmas_SIS1.pdu_F7 = al_pdi_1A_F[7];
principal.Alarmas_SIS1.pdu_F8 = al_pdi_1A_F[8];
principal.Alarmas_SIS1.pdu_F9 = al_pdi_1A_F[9];
principal.Alarmas_SIS1.pdu_F10 = al_pdi_1A_F[10];

//PDI SISTEMA 2
principal.Estados_SIS2.pdu_F1 = st_pdi_2A_F[1];
principal.Estados_SIS2.pdu_F2 = st_pdi_2A_F[2];
principal.Estados_SIS2.pdu_F3 = st_pdi_2A_F[3];
principal.Estados_SIS2.pdu_F4 = st_pdi_2A_F[4];
principal.Estados_SIS2.pdu_F5 = st_pdi_2A_F[5];
principal.Estados_SIS2.pdu_F6 = st_pdi_2A_F[6];
principal.Estados_SIS2.pdu_F7 = st_pdi_2A_F[7];
principal.Estados_SIS2.pdu_F8 = st_pdi_2A_F[8];
principal.Estados_SIS2.pdu_F9 = st_pdi_2A_F[9];
principal.Estados_SIS2.pdu_F10 = st_pdi_2A_F[10];

principal.ParametrosUPS_SIS2.P_PDI2A_F1 = pot_pdi_2A_F[1];
principal.ParametrosUPS_SIS2.P_PDI2A_F2 = pot_pdi_2A_F[2];
principal.ParametrosUPS_SIS2.P_PDI2A_F3 = pot_pdi_2A_F[3];
principal.ParametrosUPS_SIS2.P_PDI2A_F4 = pot_pdi_2A_F[4];
principal.ParametrosUPS_SIS2.P_PDI2A_F5 = pot_pdi_2A_F[5];
principal.ParametrosUPS_SIS2.P_PDI2A_F6 = pot_pdi_2A_F[6];
principal.ParametrosUPS_SIS2.P_PDI2A_F7 = pot_pdi_2A_F[7];
principal.ParametrosUPS_SIS2.P_PDI2A_F8 = pot_pdi_2A_F[8];
principal.ParametrosUPS_SIS2.P_PDI2A_F9 = pot_pdi_2A_F[9];
principal.ParametrosUPS_SIS2.P_PDI2A_F10 = pot_pdi_2A_F[10];

principal.ParametrosUPS_SIS2.V_PDI2A_F1 = vol_pdi_2A_F[1];
principal.ParametrosUPS_SIS2.V_PDI2A_F2 = vol_pdi_2A_F[2];
principal.ParametrosUPS_SIS2.V_PDI2A_F3 = vol_pdi_2A_F[3];
principal.ParametrosUPS_SIS2.V_PDI2A_F4 = vol_pdi_2A_F[4];
principal.ParametrosUPS_SIS2.V_PDI2A_F5 = vol_pdi_2A_F[5];
principal.ParametrosUPS_SIS2.V_PDI2A_F6 = vol_pdi_2A_F[6];
principal.ParametrosUPS_SIS2.V_PDI2A_F7 = vol_pdi_2A_F[7];
principal.ParametrosUPS_SIS2.V_PDI2A_F8 = vol_pdi_2A_F[8];
principal.ParametrosUPS_SIS2.V_PDI2A_F9 = vol_pdi_2A_F[9];
principal.ParametrosUPS_SIS2.V_PDI2A_F10 = vol_pdi_2A_F[10];

principal.Alarmas_SIS2.pdu_F1 = al_pdi_2A_F[1];
principal.Alarmas_SIS2.pdu_F2 = al_pdi_2A_F[2];
principal.Alarmas_SIS2.pdu_F3 = al_pdi_2A_F[3];
principal.Alarmas_SIS2.pdu_F4 = al_pdi_2A_F[4];
principal.Alarmas_SIS2.pdu_F5 = al_pdi_2A_F[5];
principal.Alarmas_SIS2.pdu_F6 = al_pdi_2A_F[6];
principal.Alarmas_SIS2.pdu_F7 = al_pdi_2A_F[7];
principal.Alarmas_SIS2.pdu_F8 = al_pdi_2A_F[8];
principal.Alarmas_SIS2.pdu_F9 = al_pdi_2A_F[9];
principal.Alarmas_SIS2.pdu_F10 = al_pdi_2A_F[10];

console.log(principal);

return principal;

};
    
export default dataPrincipal;