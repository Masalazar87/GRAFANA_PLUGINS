import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataGrupalups } from 'components/variables';
import modoControlStyles from 'styles/modoControlStyles';
import alarmsStyles from 'styles/alarmsStyles';
import estadoStyles from 'styles/estadoStyles';
import alimentacionStyles from 'styles/alimentacionStyles';
import animacionStyles from 'styles/animacionStyles';
import bateriaStyles from 'styles/bateriaStyles'

const dataGrupalups = (data: PanelData, options: SimpleOptions): DataGrupalups => {  
    console.log('data: ', data);
    console.log('options: ', options);

    //VOLTAJES
    let INPUT_VOLTAGE_MAX = data.series.find(({ name }) => name?.includes('DATA.INPUT_VOLTAGE_MAX.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //let INPUT_VOLTAGE = data.series.find(({ name }) => name?.includes('DATA.INPUT_VOLTAGE.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let INPUT_VOLTAGE_2 = data.series.find(({ name }) => name?.includes('DATA.INPUT_VOLTAGE_2.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let INPUT_VOLTAGE_3 = data.series.find(({ name }) => name?.includes('DATA.INPUT_VOLTAGE_3.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    
    let OUTPUT_VOLTAGE = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_VOLTAGE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //let OUTPUT_VOLTAGE_2 = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_VOLTAGE_2.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let OUTPUT_VOLTAGE_3 = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_VOLTAGE_3.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;

    let BATTERY_VOLTAGE = data.series.find(({ name }) => name?.includes('DATA.BATTERY_VOLTAGE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let INVERTER_ON_OFF = data.series.find(({ name }) => name?.includes('DATA.INVERTER_ON_OFF.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ESTIMATED_MINUTES_REMAINING = data.series.find(({ name }) => name?.includes('DATA.ESTIMATED_MINUTES_REMAINING.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //let ESTIMATED_CHARGE_REMAINING = data.series.find(({ name }) => name?.includes('DATA.ESTIMATED_CHARGE_REMAINING.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let INPUT_VOLTAGE_MIN = data.series.find(({ name }) => name?.includes('DATA.INPUT_VOLTAGE_MIN.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    let OUTPUT_CURRENT = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_CURRENT.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_POWER = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_POWER.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_PERCENT_LOAD = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_PERCENT_LOAD.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_PERCENT_LOAD_2 = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_PERCENT_LOAD_2.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OUTPUT_PERCENT_LOAD_3 = data.series.find(({ name }) => name?.includes('DATA.OUTPUT_PERCENT_LOAD_3.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ALARMS_PRESENT = data.series.find(({ name }) => name?.includes('DATA.ALARMS_PRESENT.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let BYPASS_ON_OFF = data.series.find(({ name }) => name?.includes('DATA.BYPASS_ON_OFF.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let RECTIFIER_ON_OFF = data.series.find(({ name }) => name?.includes('DATA.RECTIFIER_ON_OFF.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let BATTERY_STATUS =  data.series.find(({ name }) => name?.includes('DATA.BATTERY_STATUS.VALUE'))?.fields[1].state?.calcs
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
        Alarmas: {
            Estado: modoControlStyles.SinConexion,
            Alarma: modoControlStyles.SinConexion,
            Inverter: modoControlStyles.SinConexion,
            Rectifier: modoControlStyles.SinConexion,
            Bypass: modoControlStyles.SinConexion,
            Alerta: modoControlStyles.SinConexion,
            Habilitado: modoControlStyles.SinConexion,
            PanelRectifier: modoControlStyles.SinConexion,
        },
        Conexion: {
            Entrada: modoControlStyles.SinConexion,
            Rectificador: modoControlStyles.SinConexion,
            Inversor: modoControlStyles.SinConexion,
            Salida: modoControlStyles.SinConexion,
            Bypass: modoControlStyles.SinConexion,
            Bateria: modoControlStyles.SinConexion,
            Q4: modoControlStyles.SinConexion,
            Q4on: modoControlStyles.SinConexion,
            Q4off: modoControlStyles.SinConexion,
        },
        Animacion: {
            Entrada: modoControlStyles.SinConexion,
            Rectificador: modoControlStyles.SinConexion,
            Inversor: modoControlStyles.SinConexion,
            Bypass: modoControlStyles.SinConexion,
            Salida: modoControlStyles.SinConexion,
            Bateria25: modoControlStyles.SinConexion,      
            Bateria50: modoControlStyles.SinConexion,
            Bateria75: modoControlStyles.SinConexion,   
            Bateria100: modoControlStyles.SinConexion,     
            Carga25: modoControlStyles.SinConexion,
            Carga50: modoControlStyles.SinConexion,
            Carga75: modoControlStyles.SinConexion,
            Carga100: modoControlStyles.SinConexion,
            CargadorOn: modoControlStyles.SinConexion,
            CargadorOff: modoControlStyles.SinConexion,
        },
    }

    //PARAMETROS
    grupalups.Parametros.Voltin = Number.parseFloat(INPUT_VOLTAGE_MAX?.toFixed(2));
    grupalups.Parametros.Voltout = Number.parseFloat(OUTPUT_VOLTAGE?.toFixed(2));
    grupalups.Parametros.Vbateria = Number.parseFloat(BATTERY_VOLTAGE?.toFixed(2));
    grupalups.Parametros.Outcurr = Number.parseFloat(OUTPUT_CURRENT?.toFixed(2));
    grupalups.Parametros.Outpow = Number.parseFloat(OUTPUT_POWER?.toFixed(2));
    grupalups.Parametros.Load1 = Number.parseFloat(OUTPUT_PERCENT_LOAD?.toFixed(2));
    grupalups.Parametros.Load2 = Number.parseFloat(OUTPUT_PERCENT_LOAD_2?.toFixed(2));
    grupalups.Parametros.Load3 = Number.parseFloat(OUTPUT_PERCENT_LOAD_3?.toFixed(2));
    grupalups.Parametros.Tiempo = Number.parseFloat(ESTIMATED_MINUTES_REMAINING?.toFixed(2));

    //ALARMAS
    grupalups.Alarmas.Alarma = ALARMS_PRESENT === 1? alarmsStyles.on : alarmsStyles.off;
    grupalups.Alarmas.Bypass = BYPASS_ON_OFF === 1? alarmsStyles.on : alarmsStyles.off;
    grupalups.Alarmas.Inverter = INVERTER_ON_OFF === 1? estadoStyles.ok : estadoStyles.off;
    grupalups.Alarmas.Rectifier = RECTIFIER_ON_OFF === 1? estadoStyles.ok : estadoStyles.off;
    grupalups.Alarmas.Alerta = ALARMS_PRESENT === 1? alarmsStyles.on1 : alarmsStyles.off1;
    grupalups.Alarmas.Habilitado = (INPUT_VOLTAGE_MAX && RECTIFIER_ON_OFF && INVERTER_ON_OFF) === 1? estadoStyles.ok1 : estadoStyles.sinConexion2;
    grupalups.Alarmas.Estado = (RECTIFIER_ON_OFF && INVERTER_ON_OFF) === 1? modoControlStyles.On : estadoStyles.alarma;
    grupalups.Alarmas.PanelRectifier = RECTIFIER_ON_OFF === 1? estadoStyles.ok1 : estadoStyles.alarma1;

    //CONEXIONES
    grupalups.Conexion.Entrada = INPUT_VOLTAGE_MAX > 0? alimentacionStyles.on : alimentacionStyles.off;
    grupalups.Conexion.Rectificador = RECTIFIER_ON_OFF === 1? alimentacionStyles.on : alimentacionStyles.off;
    grupalups.Conexion.Inversor = INVERTER_ON_OFF === 1? alimentacionStyles.on : alimentacionStyles.off;
    grupalups.Conexion.Salida = OUTPUT_VOLTAGE > 0? alimentacionStyles.on : alimentacionStyles.off;
    grupalups.Conexion.Bypass = BYPASS_ON_OFF === 1? alimentacionStyles.on : alimentacionStyles.off;
    grupalups.Conexion.Bateria = (RECTIFIER_ON_OFF && INVERTER_ON_OFF) === 1? alimentacionStyles.on : alimentacionStyles.onbattery;
    grupalups.Conexion.Q4 = (RECTIFIER_ON_OFF) === 1? alimentacionStyles.close : alimentacionStyles.off;
    grupalups.Conexion.Q4on = (RECTIFIER_ON_OFF) === 1? alimentacionStyles.on : alimentacionStyles.open;
    grupalups.Conexion.Q4off= (RECTIFIER_ON_OFF) === 1? alimentacionStyles.open : alimentacionStyles.off;
    
    //ANIMACION FLECHAS
    grupalups.Animacion.Entrada = INPUT_VOLTAGE_MAX > 0? animacionStyles.on : animacionStyles.off;
    grupalups.Animacion.Inversor = INVERTER_ON_OFF === 1? animacionStyles.on : animacionStyles.off;
    grupalups.Animacion.Bypass = BYPASS_ON_OFF === 1? animacionStyles.on : animacionStyles.off;
    grupalups.Animacion.Salida = OUTPUT_VOLTAGE > 0? animacionStyles.on : animacionStyles.off;
    grupalups.Animacion.CargadorOn = (RECTIFIER_ON_OFF && INVERTER_ON_OFF) ===1? animacionStyles.on : animacionStyles.off;
    grupalups.Animacion.CargadorOff = (BATTERY_STATUS) ===1? animacionStyles.on : animacionStyles.off;
   
    
    //CALCULOS
    //let Voltin = INPUT_VOLTAGE + INPUT_VOLTAGE_2 + INPUT_VOLTAGE_3) / 30;
    //if (INPUT_VOLTAGE !== undefined && INPUT_VOLTAGE_2 !== undefined && INPUT_VOLTAGE_3 !== undefined) {
        //grupalups.Parametros.Voltin = Number.parseFloat(Voltin.toFixed(2));
    //}
    //let Voltout = (OUTPUT_VOLTAGE + OUTPUT_VOLTAGE_2 + OUTPUT_VOLTAGE_3) / 3;
    //if (OUTPUT_VOLTAGE !== undefined && OUTPUT_VOLTAGE_2 !== undefined && OUTPUT_VOLTAGE_3 !== undefined) {
      //  grupalups.Parametros.Voltout = Number.parseFloat(Voltout.toFixed(2));
    //}
    
    let Outcurr = OUTPUT_CURRENT / 10;
    if (OUTPUT_CURRENT !== undefined) {
    grupalups.Parametros.Outcurr = Number.parseFloat(Outcurr?.toFixed(2)); 
    }

    let Vbateria = BATTERY_VOLTAGE / 10;
    if (BATTERY_VOLTAGE !== undefined) {
    grupalups.Parametros.Vbateria = Number.parseFloat(Vbateria?.toFixed(2));   
       
    grupalups.Animacion.Bateria25 = Vbateria <= 109?  bateriaStyles.sinconexion : bateriaStyles.full;
    grupalups.Animacion.Bateria50 = Vbateria <= 218? bateriaStyles.sinconexion : bateriaStyles.full;
    grupalups.Animacion.Bateria75 = Vbateria <= 327? bateriaStyles.sinconexion : bateriaStyles.full;
    grupalups.Animacion.Bateria100 = Vbateria <= 435 ? bateriaStyles.sinconexion : bateriaStyles.full;

    
    //grupalups.Conexion.Bateria = RECTIFIER_ON_OFF ===1? animacionStyles.on : animacionStyles.off;
    }

    grupalups.Animacion.Carga25 = OUTPUT_PERCENT_LOAD >= 1? bateriaStyles.on : bateriaStyles.sinconexion;
    grupalups.Animacion.Carga50 = OUTPUT_PERCENT_LOAD >= 26? bateriaStyles.on : bateriaStyles.sinconexion;
    grupalups.Animacion.Carga75 = OUTPUT_PERCENT_LOAD >= 51? bateriaStyles.on : bateriaStyles.sinconexion;
    grupalups.Animacion.Carga100 = OUTPUT_PERCENT_LOAD >= 76? bateriaStyles.on : bateriaStyles.sinconexion;
    
    console.log(grupalups);

    return grupalups;

};

export default dataGrupalups;