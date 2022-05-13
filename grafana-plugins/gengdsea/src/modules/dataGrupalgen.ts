import { PanelData, InterpolateFunction } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataGrupalgen } from 'components/variables';
import modoControlStyles from 'styles/modoControlStyles';

const dataGrupalgen = (data: PanelData, options: SimpleOptions, replaceVariables: InterpolateFunction): DataGrupalgen => {  
    console.log('data: ', data);
    console.log('options: ', options);
    console.log(replaceVariables);

    //Estados
    let CONTROL_MODE = data.series.find(({ name }) => name?.includes('DATA.CONTROL_MODE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    
    //Alarmas
    let E_STOP = data.series.find(({ name }) => name?.includes('DATA.E_STOP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let L_OIL_P = data.series.find(({ name }) => name?.includes('DATA.L_OIL_P.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let H_COOL_T = data.series.find(({ name }) => name?.includes('DATA.H_COOL_T.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let U_SPEED = data.series.find(({ name }) => name?.includes('DATA.U_SPEED.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let O_SPEED = data.series.find(({ name }) => name?.includes('DATA.O_SPEED.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let F_START = data.series.find(({ name }) => name?.includes('DATA.F_START.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let F_REST = data.series.find(({ name }) => name?.includes('DATA.CONTROL_MODE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let LOSS_SPEED = data.series.find(({ name }) => name?.includes('DATA.LOSS_SPEED.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let LV_GEN = data.series.find(({ name }) => name?.includes('DATA.HV_GEN.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let HV_GEN = data.series.find(({ name }) => name?.includes('DATA.HV_GEN.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let LF_GEN = data.series.find(({ name }) => name?.includes('DATA.LF_GEN.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let HF_GEN = data.series.find(({ name }) => name?.includes('DATA.HF_GEN.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let HCUR_GEN = data.series.find(({ name }) => name?.includes('DATA.HCUR_GEN.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
        
    //Voltajes
    let LL_VOL_AVG = data.series.find(({ name }) => name?.includes('DATA.LL_VOL_AVG.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;  

    //Corrientes
    let CUR_AVG = data.series.find(({ name }) => name?.includes('DATA.CUR_AVG.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;

    //Potencia y Energía
    let TOT_WATTS = data.series.find(({ name }) => name?.includes('DATA.TOT_WATTS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let TOT_VA = data.series.find(({ name }) => name?.includes('DATA.TOT_VA.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let KW_HOURS = data.series.find(({ name }) => name?.includes('DATA.KW_HOURS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let PF_AVG = data.series.find(({ name }) => name?.includes('DATA.PF_AVG.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //let AVG_PF = data.series.find(({ name }) => name?.includes('DATA.AVG_PF.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;

    //Parámetros
    let COOL_TEMP = data.series.find(({ name }) => name?.includes('DATA.COOL_TEMP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OIL_PRESS = data.series.find(({ name }) => name?.includes('DATA.OIL_PRESS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let CHARGE_ALT_VOL = data.series.find(({ name }) => name?.includes('DATA.CHARGE_ALT_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ENG_BATT_VOL = data.series.find(({ name }) => name?.includes('DATA.ENG_BATT_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ENG_RUN_TIME = data.series.find(({ name }) => name?.includes('DATA.ENG_RUN_TIME.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull; 
    let FUEL_LEV = data.series.find(({ name }) => name?.includes('DATA.FUEL_LEV.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
       
let grupalgen: DataGrupalgen ={
    DatosGenerales:{
        Nombre: options.nombre,
        Marca: "HIMOINSA", 
    },
    Motor: {
        Temp: 0,
        PresOil: 0,
        Vbatt: 0,
        ChargeVolt: 0,
        OperHours: 0,
        LvFuel: 0,
    },
    Alternador: {
        VLLprom: 0,
        Illprom: 0,
        kwprom: 0,
        kvaprom: 0,
        Energy: 0,
        FP: 0,
    },   
    Indicadores: {
        Estado: '',
        Encendido: '',
        Alarma: modoControlStyles.SinConexion,
        Mant: modoControlStyles.SinConexion,
        Stop: modoControlStyles.SinConexion,
        Manual: modoControlStyles.SinConexion,
        Auto: modoControlStyles.SinConexion,
        Vout: modoControlStyles.SinConexion,
        Iout: modoControlStyles.SinConexion,
    },
  }

//INTERPOLACION DE VARIABLES
let variableNombre = replaceVariables('$EQUIPO')
grupalgen.DatosGenerales.Nombre = variableNombre ! == '$NOMBRE' ?  variableNombre: options.nombre

//CALCULOS
let PotenciaKW = TOT_WATTS * 10
let PotenciaKVA = TOT_VA * 10

  if  (PF_AVG === null || PF_AVG > 2 ) {
    PF_AVG = 0;
  }

// DATOS DE VARIABLES
  grupalgen.Motor.Temp = Number.parseFloat(COOL_TEMP?.toFixed(2));
  grupalgen.Motor.PresOil = Number.parseFloat(OIL_PRESS?.toFixed(2));
  grupalgen.Motor.ChargeVolt = Number.parseFloat(CHARGE_ALT_VOL?.toFixed(2));
  grupalgen.Motor.Vbatt = Number.parseFloat(ENG_BATT_VOL?.toFixed(2));
  grupalgen.Motor.LvFuel = Number.parseFloat(FUEL_LEV?.toFixed(2));
  grupalgen.Motor.OperHours = Number.parseFloat(ENG_RUN_TIME?.toFixed(2));
  grupalgen.Alternador.Energy = Number.parseFloat(KW_HOURS?.toFixed(2));
  grupalgen.Alternador.VLLprom = Number.parseFloat(LL_VOL_AVG?.toFixed(2));
  grupalgen.Alternador.Illprom = Number.parseFloat(CUR_AVG?.toFixed(2));
  grupalgen.Alternador.kvaprom = Number.parseFloat(PotenciaKVA?.toFixed(2));
  grupalgen.Alternador.kwprom = Number.parseFloat(PotenciaKW?.toFixed(2));
  grupalgen.Alternador.FP = Number.parseFloat(PF_AVG?.toFixed(2))
  //grupalgen.Alternador.FP = Number.parseFloat(AVG_PF?.toFixed(2))

//INDICADORES
  grupalgen.Indicadores.Stop = CONTROL_MODE === 0? modoControlStyles.On2 : modoControlStyles.SinConexion;
  grupalgen.Indicadores.Auto = CONTROL_MODE === 1? modoControlStyles.On2 : modoControlStyles.SinConexion;
  grupalgen.Indicadores.Manual = CONTROL_MODE === 2? modoControlStyles.On2 : modoControlStyles.SinConexion;
  grupalgen.Indicadores.Vout = LL_VOL_AVG >= 420? modoControlStyles.On : modoControlStyles.SinConexion;
  grupalgen.Indicadores.Iout = CUR_AVG >= 10? modoControlStyles.On : modoControlStyles.SinConexion;
  grupalgen.Indicadores.Encendido = LL_VOL_AVG >= 420? modoControlStyles.On3 : modoControlStyles.SinConexion;
  grupalgen.Indicadores.Estado = CONTROL_MODE >=1? modoControlStyles.On : modoControlStyles.SinConexion;

//ALARMAS
if (E_STOP ===2 || L_OIL_P ===2 || H_COOL_T ===2 || U_SPEED ===2 || O_SPEED ===2 || F_START ===2 || F_REST ===2|| LOSS_SPEED ===2|| LV_GEN ===2 || HV_GEN ===2|| LF_GEN ===2|| HF_GEN ===2|| HCUR_GEN ===2){
    grupalgen.Indicadores.Alarma = modoControlStyles.alarma1}
else {
  if (E_STOP ===3 || L_OIL_P ===3 || H_COOL_T ===3 || U_SPEED ===3 || O_SPEED ===3 || F_START ===3 ||
    F_REST ===3|| LOSS_SPEED ===3|| LV_GEN ===3 || HV_GEN ===3|| LF_GEN ===3|| HF_GEN ===3|| HCUR_GEN ===3){
     grupalgen.Indicadores.Alarma = modoControlStyles.alarma2}
     else {  
      if (E_STOP ===4 || L_OIL_P ===4 || H_COOL_T ===4 || U_SPEED ===4 || O_SPEED ===4 || F_START ===4 ||
         F_REST ===4|| LOSS_SPEED ===4|| LV_GEN ===4 || HV_GEN ===4|| LF_GEN ===4|| HF_GEN ===4|| HCUR_GEN ===4){
         grupalgen.Indicadores.Alarma = modoControlStyles.alarma3}
         else {  
        grupalgen.Indicadores.Alarma = modoControlStyles.SinConexion}
     }
    }


  //grupalgen.Indicadores.Alarma = (E_STOP || L_OIL_P || H_COOL_T || U_SPEED || O_SPEED || F_START || F_REST || LOSS_SPEED || LV_GEN || HV_GEN || LF_GEN || HF_GEN || HCUR_GEN) == 2? modoControlStyles.alarma1 : modoControlStyles.SinConexion;
  //grupalgen.Indicadores.Alarma = (E_STOP || L_OIL_P || H_COOL_T || U_SPEED || O_SPEED || F_START || F_REST || LOSS_SPEED || LV_GEN || HV_GEN || LF_GEN || HF_GEN || HCUR_GEN) === 3? modoControlStyles.alarma2 : modoControlStyles.SinConexion;
  //grupalgen.Indicadores.Alarma = (E_STOP || L_OIL_P || H_COOL_T || U_SPEED || O_SPEED || F_START || F_REST || LOSS_SPEED || LV_GEN || HV_GEN || LF_GEN || HF_GEN || HCUR_GEN) === 4? modoControlStyles.alarma3 : modoControlStyles.SinConexion;
  //grupalgen.Indicadores.Mant = (E_STOP === 3 && CONTROL_MODE === 7)? modoControlStyles.alarma1 : modoControlStyles.SinConexion;

console.log(grupalgen);

    return grupalgen;

};

export default dataGrupalgen;