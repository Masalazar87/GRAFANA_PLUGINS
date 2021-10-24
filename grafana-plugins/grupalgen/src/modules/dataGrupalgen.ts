import { PanelData, InterpolateFunction } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataGrupalgen } from 'components/variables';
import modoControlStyles from 'styles/modoControlStyles';
//import Grupalgen from 'components/grupalgen';

const dataGrupalgen = (data: PanelData, options: SimpleOptions, replaceVariables: InterpolateFunction): DataGrupalgen => {  
    console.log('data: ', data);
    console.log('options: ', options);
    console.log(replaceVariables);

    //estados
    //let OFF_MODE = data.series.find(({ name }) => name?.includes('DATA.OFF_MODE.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    let STOP_MODE = data.series.find(({ name }) => name?.includes('DATA.STOP_MODE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let MANUAL_MODE = data.series.find(({ name }) => name?.includes('DATA.MANUAL_MODE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let AUTO_MODE = data.series.find(({ name }) => name?.includes('DATA.AUTO_MODE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let WARNING_ST = data.series.find(({ name }) => name?.includes('DATA.WARNING_ST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //let FS_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.FS_ELTRIP_ALM.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    let MODBUS_ST = data.series.find(({ name }) => name?.includes('DATA.MODBUS_ST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ES_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.ES_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    
    //voltajes
    let L1L2_VOL = data.series.find(({ name }) => name?.includes('DATA.L1L2_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let L2L3_VOL = data.series.find(({ name }) => name?.includes('DATA.L2L3_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let L3L1_VOL = data.series.find(({ name }) => name?.includes('DATA.L3L1_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;

    //corrientes
    let L1_CUR = data.series.find(({ name }) => name?.includes('DATA.L1_CUR.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let L2_CUR = data.series.find(({ name }) => name?.includes('DATA.L2_CUR.VALUE'))?.fields[1].state?.calcs
     ?.lastNotNull;
    let L3_CUR = data.series.find(({ name }) => name?.includes('DATA.L3_CUR.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;

    //potencia y energía
    let TOT_VA = data.series.find(({ name }) => name?.includes('DATA.TOT_VA.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let KW_HOURS = data.series.find(({ name }) => name?.includes('DATA.KW_HOURS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //let TOT_WATTS = data.series.find(({ name }) => name?.includes('DATA.TOT_WATTS.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;

    //parámetros
    let OIL_PRESS = data.series.find(({ name }) => name?.includes('DATA.OIL_PRESS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let COOL_TEMP = data.series.find(({ name }) => name?.includes('DATA.COOL_TEMP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ENG_BATT_VOL = data.series.find(({ name }) => name?.includes('DATA.ENG_BATT_VOL.VALUE'))?.fields[1].state?.calcs
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
        //LvOil: 0,
        LvFuel: 0,
    },
        
    Alternador: {
        VLL: 0,
        Iprom: 0,
        Pot: 0,
        Energy: 0,
    },
        
    Indicadores: {
        Estado: modoControlStyles.SinConexion,
        Encendido: '',
        Alarma: modoControlStyles.SinConexion,
        Mant: modoControlStyles.SinConexion,
        Stop: modoControlStyles.SinConexion,
        Manual: modoControlStyles.SinConexion,
        Auto: modoControlStyles.SinConexion,
        Generacion: modoControlStyles.SinConexion,
        Generacion2: modoControlStyles.SinConexion,
    },
  }

//INTERPOLACION DE VARIABLES
let variableNombre = replaceVariables('$EQUIPO')
grupalgen.DatosGenerales.Nombre = variableNombre ! == '$NOMBRE' ?  variableNombre: options.nombre


//CALCULOS

let VLL = (L1L2_VOL + L2L3_VOL + L3L1_VOL) / 3;
  if (L1L2_VOL !== undefined && L2L3_VOL !== undefined && L3L1_VOL !== undefined) {
    grupalgen.Alternador.VLL = Number.parseFloat(VLL.toFixed(2));
  }

let Iprom = (L1_CUR + L2_CUR + L3_CUR) / 3;
  if (L1_CUR !== undefined && L2_CUR !== undefined && L3_CUR !== undefined) {
    grupalgen.Alternador.Iprom = Number.parseFloat(Iprom.toFixed(2));
  }

let Pot = TOT_VA / 1000;
  if (TOT_VA !== undefined) {
    grupalgen.Alternador.Pot = Number.parseFloat(Pot.toFixed(2));
  }

  grupalgen.Motor.PresOil = Number.parseFloat(OIL_PRESS?.toFixed(2));
  grupalgen.Motor.Temp = Number.parseFloat(COOL_TEMP?.toFixed(2));
  grupalgen.Motor.Vbatt = Number.parseFloat(ENG_BATT_VOL?.toFixed(2));
  grupalgen.Motor.LvFuel = Number.parseFloat(FUEL_LEV?.toFixed(2));
  grupalgen.Alternador.Energy = Number.parseFloat(KW_HOURS?.toFixed(2));
  
  

//INDICADORES
  grupalgen.Indicadores.Estado = MODBUS_ST === 1? modoControlStyles.SinConexion : modoControlStyles.On;
  grupalgen.Indicadores.Alarma = WARNING_ST === 1? modoControlStyles.On3 : modoControlStyles.SinConexion;
  grupalgen.Indicadores.Mant = ES_SHUTD_ALM === 1? modoControlStyles.On3 : modoControlStyles.SinConexion;
  grupalgen.Indicadores.Stop = STOP_MODE === 1? modoControlStyles.On2 : modoControlStyles.SinConexion;
  grupalgen.Indicadores.Manual = MANUAL_MODE === 1? modoControlStyles.On2 : modoControlStyles.SinConexion;
  grupalgen.Indicadores.Auto = AUTO_MODE === 1? modoControlStyles.On2 : modoControlStyles.SinConexion;
  grupalgen.Indicadores.Generacion2 = VLL >= 420? modoControlStyles.On : modoControlStyles.SinConexion;
  grupalgen.Indicadores.Generacion = Iprom >= 10? modoControlStyles.On : modoControlStyles.SinConexion;
  grupalgen.Indicadores.Encendido = VLL >= 420? modoControlStyles.On5 : modoControlStyles.SinConexion;

console.log(grupalgen);

    return grupalgen;

};

export default dataGrupalgen;