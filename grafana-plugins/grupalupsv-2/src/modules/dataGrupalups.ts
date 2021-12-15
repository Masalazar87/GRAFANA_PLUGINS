import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataGrupalups } from 'components/variables';
import modoControlStyles from 'styles/modoControlStyles';
import alarmsStyles from 'styles/alarmsStyles';
import estadoStyles from 'styles/estadoStyles';
import conexionesStyles from 'styles/conexionesStyles';
import animacionStyles from 'styles/animacionStyles';
import bateriaStyles from 'styles/bateriaStyles';

const dataGrupalups = (data: PanelData, options: SimpleOptions): DataGrupalups => {  
    console.log('data: ', data);
    console.log('options: ', options);

    //VOLTAJES
    let INPUT_VOLTAGE_MAX = data.series .find(({ name }) => name?.includes('DATA.INPUT_VOLTAGE_MAX.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let INPUT_VOLTAGE = data.series.find(({ name }) => name?.includes('DATA.INPUT_VOLTAGE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let INPUT_VOLTAGE_2 = data.series.find(({ name }) => name?.includes('DATA.INPUT_VOLTAGE_2.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let INPUT_VOLTAGE_3 = data.series.find(({ name }) => name?.includes('DATA.INPUT_VOLTAGE_3.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_VOLTAGE = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_VOLTAGE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_VOLTAGE_2 = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_VOLTAGE_2.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_VOLTAGE_3 = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_VOLTAGE_3.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //BATERIA
    let BATTERY_VOLTAGE = data.series.find(({ name }) => name?.includes('DATA.BATTERY_VOLTAGE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ESTIMATED_MINUTES_REMAINING = data.series.find(({ name }) => name?.includes('DATA.ESTIMATED_MINUTES_REMAINING.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //let ESTIMATED_CHARGE_REMAINING = data.series.find(({ name }) => name?.includes('DATA.ESTIMATED_CHARGE_REMAINING.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let INPUT_VOLTAGE_MIN = data.series.find(({ name }) => name?.includes('DATA.INPUT_VOLTAGE_MIN.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //CORRIENTE
    let OUTPUT_CURRENT = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_CURRENT.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_CURRENT_2 = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_CURRENT_2.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_CURRENT_3 = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_CURRENT_3.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //POTENCIA
    let OUTPUT_POWER = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_POWER.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_POWER_2 = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_POWER_2.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_POWER_3 = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_POWER_3.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_PERCENT_LOAD = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_PERCENT_LOAD.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_PERCENT_LOAD_2 = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_PERCENT_LOAD_2.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_PERCENT_LOAD_3 = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_PERCENT_LOAD_3.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //ESTADOS
    let INVERTER_ON_OFF = data.series.find(({ name }) => name?.includes('DATA.INVERTER_ON_OFF.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let RECTIFIER_ON_OFF = data.series.find(({ name }) => name?.includes('DATA.RECTIFIER_ON_OFF.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let BATTERY_STATUS = data.series.find(({ name }) => name?.includes('DATA.BATTERY_STATUS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ALARMS_PRESENT = data.series.find(({ name }) => name?.includes('DATA.ALARMS_PRESENT.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let BYPASS_ON_OFF = data.series.find(({ name }) => name?.includes('DATA.BYPASS_ON_OFF.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let BYPASS_POWER = data.series.find(({ name }) => name?.includes('DATA.BYPASS_POWER.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    
    let grupalups: DataGrupalups ={
        DatosGenerales: {
            Nombre: options.nombre,
            Marca: options.marca,
        },
        Parametros: {
            Voltin: 0,
            Voltout: 0,
            Outcurr: 0,
            Outpow: 0,
            Load1: 0,
            Load2: 0,
            Load3: 0,
            Vbateria: 0,
            Tiempo: 0,
        },
        Estados: {
            Estado: modoControlStyles.SinConexion,
            Rectifier: modoControlStyles.SinConexion,
            Inverter: modoControlStyles.SinConexion,
            Bypass: modoControlStyles.SinConexion,
            Battery: modoControlStyles.SinConexion2,
        },
        Alarmas: {
            Rectifier: modoControlStyles.SinConexion,
            Rectifierbox: alarmsStyles.off2,
            Inverter: modoControlStyles.SinConexion,
            Battery: modoControlStyles.SinConexion2,
            Bypass: modoControlStyles.SinConexion,
            Alarma: modoControlStyles.SinConexion,
            Alerta: alarmsStyles.off1,
            Habilitado: modoControlStyles.SinConexion2,
        },
        Conexion: {
            Entrada: modoControlStyles.SinConexion,
            Rectificador: modoControlStyles.SinConexion,
            Inversor: modoControlStyles.SinConexion,
            Salida: modoControlStyles.SinConexion,
            Bypass: modoControlStyles.SinConexion,
            Bateria: modoControlStyles.SinConexion,
            Q4: modoControlStyles.SinConexion2,
            Q4on: modoControlStyles.SinConexion,
            Q4off: modoControlStyles.SinConexion,
        },
        Animacion: {
            Entrada: modoControlStyles.SinConexion2,
            Rectificador: modoControlStyles.SinConexion2,
            Inversor: modoControlStyles.SinConexion2,
            Bypass: modoControlStyles.SinConexion2,
            Salida: modoControlStyles.SinConexion2,
            Bateria25: modoControlStyles.SinConexion,      
            Bateria50: modoControlStyles.SinConexion,
            Bateria75: modoControlStyles.SinConexion,   
            Bateria100: modoControlStyles.SinConexion,     
            Carga25: modoControlStyles.SinConexion, 
            Carga25full: '',
            Carga50: modoControlStyles.SinConexion,
            Carga50full: '',
            Carga75: modoControlStyles.SinConexion,
            Carga75full: '',
            Carga100: modoControlStyles.SinConexion,
            Carga100full: '',
            CargadorOn: modoControlStyles.SinConexion,
            CargadorOff: modoControlStyles.SinConexion,
        },
    }

    //PARAMETROS
   //grupalups.Parametros.Voltin = Number.parseFloat(INPUT_VOLTAGE_MAX?.toFixed(2));
   //grupalups.Parametros.Voltout = Number.parseFloat(OUTPUT_VOLTAGE?.toFixed(2));
   //grupalups.Parametros.Outcurr = Number.parseFloat(OUTPUT_CURRENT?.toFixed(2));
    grupalups.Parametros.Vbateria = Number.parseFloat(BATTERY_VOLTAGE?.toFixed(2));
    grupalups.Parametros.Load1 = Number.parseFloat(OUTPUT_PERCENT_LOAD?.toFixed(2));
    grupalups.Parametros.Load2 = Number.parseFloat(OUTPUT_PERCENT_LOAD_2?.toFixed(2));
    grupalups.Parametros.Load3 = Number.parseFloat(OUTPUT_PERCENT_LOAD_3?.toFixed(2));
    grupalups.Parametros.Tiempo = Number.parseFloat(ESTIMATED_MINUTES_REMAINING?.toFixed(2));

    //ESTADOS
    grupalups.Estados.Estado = INPUT_VOLTAGE_MAX > 420? estadoStyles.ok : estadoStyles.sinConexion;
    grupalups.Estados.Rectifier = RECTIFIER_ON_OFF ===1? estadoStyles.ok : estadoStyles.off;
    grupalups.Estados.Inverter = INVERTER_ON_OFF ===1? estadoStyles.ok : estadoStyles.off;
    grupalups.Estados.Battery = BATTERY_STATUS ===1? estadoStyles.ok1 : estadoStyles.sinConexion2;
    grupalups.Estados.Bypass = (BYPASS_ON_OFF ===1 && BYPASS_POWER ===1)? estadoStyles.alarma : estadoStyles.off;
    
    //ALARMAS
    grupalups.Alarmas.Rectifier = (RECTIFIER_ON_OFF ===2 && INVERTER_ON_OFF ===1)? alarmsStyles.on1 : estadoStyles.sinConexion2;
    //grupalups.Alarmas.Rectifierbox = (RECTIFIER_ON_OFF ===2 && INVERTER_ON_OFF ===1)? alarmsStyles.on : alarmsStyles.off2;
    //grupalups.Alarmas.Battery = (BATTERY_STATUS ==1 && RECTIFIER_ON_OFF ==2 && INVERTER_ON_OFF ==1)? alarmsStyles.on3 : alarmsStyles.off1;
    //grupalups.Alarmas.Bypass = (BYPASS_POWER)
    grupalups.Alarmas.Alarma = ALARMS_PRESENT > 0? alarmsStyles.on : alarmsStyles.off;
    grupalups.Alarmas.Alerta = ALARMS_PRESENT > 0? alarmsStyles.on1 : alarmsStyles.off1;
    grupalups.Alarmas.Habilitado = INPUT_VOLTAGE_MAX > 0? alarmsStyles.on2 : estadoStyles.sinConexion2;
    
    
    //CALCULOS
    let Voltin = (INPUT_VOLTAGE + INPUT_VOLTAGE_2 + INPUT_VOLTAGE_3) / 3;
    if (INPUT_VOLTAGE !== undefined && INPUT_VOLTAGE_2 !== undefined && INPUT_VOLTAGE_3 !== undefined) {
        grupalups.Parametros.Voltin = Number.parseFloat(Voltin.toFixed(2));
    }
    let Voltout = (OUTPUT_VOLTAGE + OUTPUT_VOLTAGE_2 + OUTPUT_VOLTAGE_3) / 3;
    if (OUTPUT_VOLTAGE !== undefined && OUTPUT_VOLTAGE_2 !== undefined && OUTPUT_VOLTAGE_3 !== undefined) {
        grupalups.Parametros.Voltout = Number.parseFloat(Voltout.toFixed(2));
    }
    let Outcurr = (OUTPUT_CURRENT + OUTPUT_CURRENT_2 + OUTPUT_CURRENT_3) / 30;
    if (OUTPUT_CURRENT !== undefined && OUTPUT_CURRENT_2 !== undefined && OUTPUT_CURRENT_3 !== undefined) {
    grupalups.Parametros.Outcurr = Number.parseFloat(Outcurr?.toFixed(2)); 
    }
    let Outpow = (OUTPUT_POWER + OUTPUT_POWER_2 + OUTPUT_POWER_3)/1000;
    if (OUTPUT_POWER !== undefined && OUTPUT_POWER_2 !== undefined && OUTPUT_POWER_3 !== undefined) {
    grupalups.Parametros.Outpow = Number.parseFloat(Outpow?.toFixed(2)); 
    }
    let Vbateria = BATTERY_VOLTAGE / 10;
    if (BATTERY_VOLTAGE !== undefined) {
    grupalups.Parametros.Vbateria = Number.parseFloat(Vbateria?.toFixed(2));   


    //Q4
    grupalups.Conexion.Q4 = (Voltout >=1||RECTIFIER_ON_OFF===1)? conexionesStyles.on: conexionesStyles.off;
    //grupalups.Conexion.Q4on = (RECTIFIER_ON_OFF) ==1? conexionesStyles.open : conexionesStyles.off;
    grupalups.Conexion.Q4off= (Voltout >=1||RECTIFIER_ON_OFF===1)? conexionesStyles.open : conexionesStyles.off;
            
    grupalups.Animacion.Bateria25 = Vbateria <= 109?  bateriaStyles.sinconexion : bateriaStyles.full;
    grupalups.Animacion.Bateria50 = Vbateria <= 218? bateriaStyles.sinconexion : bateriaStyles.full;
    grupalups.Animacion.Bateria75 = Vbateria <= 327? bateriaStyles.sinconexion : bateriaStyles.full;
    grupalups.Animacion.Bateria100 = Vbateria <= 435? bateriaStyles.sinconexion : bateriaStyles.full;
    }

    grupalups.Animacion.Carga25 = (OUTPUT_PERCENT_LOAD >=1 && OUTPUT_PERCENT_LOAD <=20)? bateriaStyles.on : bateriaStyles.sinconexion;
    grupalups.Animacion.Carga25full = OUTPUT_PERCENT_LOAD >20? bateriaStyles.on1 : grupalups.Animacion.Carga25;
    grupalups.Animacion.Carga50 = (OUTPUT_PERCENT_LOAD >25 && OUTPUT_PERCENT_LOAD <=40)? bateriaStyles.on : bateriaStyles.sinconexion;
    grupalups.Animacion.Carga50full = OUTPUT_PERCENT_LOAD >40? bateriaStyles.on1 : grupalups.Animacion.Carga50;
    grupalups.Animacion.Carga75 = (OUTPUT_PERCENT_LOAD >50 && OUTPUT_PERCENT_LOAD <=70)? bateriaStyles.on : bateriaStyles.sinconexion;
    grupalups.Animacion.Carga75full = OUTPUT_PERCENT_LOAD >70? bateriaStyles.on1 : grupalups.Animacion.Carga75;
    grupalups.Animacion.Carga100 = (OUTPUT_PERCENT_LOAD >75 && OUTPUT_PERCENT_LOAD <=90)? bateriaStyles.on : bateriaStyles.sinconexion;
    grupalups.Animacion.Carga100full = OUTPUT_PERCENT_LOAD >90? bateriaStyles.on1 : grupalups.Animacion.Carga100;
    
    //CONEXIONES
    grupalups.Conexion.Entrada = Voltin >420? conexionesStyles.on : conexionesStyles.off;
    grupalups.Conexion.Rectificador = RECTIFIER_ON_OFF === 1? conexionesStyles.on : conexionesStyles.open;
    grupalups.Conexion.Inversor = INVERTER_ON_OFF === 1? conexionesStyles.on : conexionesStyles.off;
    grupalups.Conexion.Salida = OUTPUT_VOLTAGE > 0? conexionesStyles.on : conexionesStyles.off;
    grupalups.Conexion.Bypass = (BYPASS_ON_OFF) === 1? conexionesStyles.on : conexionesStyles.off;
    grupalups.Conexion.Bateria = BATTERY_STATUS === 1? conexionesStyles.onbattery : conexionesStyles.off;
       
    //ANIMACION FLECHAS
    grupalups.Animacion.Entrada = Voltin >420? animacionStyles.on : animacionStyles.off;
    grupalups.Animacion.Inversor = INVERTER_ON_OFF === 1? animacionStyles.on : animacionStyles.off;
    grupalups.Animacion.Bypass = BYPASS_ON_OFF === 1? animacionStyles.on : animacionStyles.off;
    grupalups.Animacion.Salida = OUTPUT_VOLTAGE > 0? animacionStyles.on : animacionStyles.off;
    grupalups.Animacion.CargadorOn = (RECTIFIER_ON_OFF ===1 && INVERTER_ON_OFF ===1)? animacionStyles.on : animacionStyles.off;
    grupalups.Animacion.CargadorOff = (BATTERY_STATUS ===1 && RECTIFIER_ON_OFF ===2 && INVERTER_ON_OFF ===1)? animacionStyles.on1 : animacionStyles.off;
       
    console.log(grupalups);

    return grupalups;

};

export default dataGrupalups;
