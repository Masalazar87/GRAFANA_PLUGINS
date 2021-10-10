import { PanelData,InterpolateFunction } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataChiller } from 'components/variables';
import modoControlStyles from 'styles/modoControlStyles';
import alarmsStyles from 'styles/alarmsStyles';
import estadoStyles from 'styles/estadoStyles';


const dataChiller = (data: PanelData, options: SimpleOptions, replaceVariables:InterpolateFunction): DataChiller => {  
    console.log('data: ', data);
    console.log('options: ', options);
    console.log(replaceVariables);

    let LEAVE_CHILL_TEMP = data.series.find(({ name }) => name?.includes('DATA.LEAVE_CHILL_TEMP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let RET_CHILL_TEMP = data.series.find(({ name }) => name?.includes('DATA.RET_CHILL_TEMP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let CHI_AMPS = data.series.find(({ name }) => name?.includes('DATA.CHI_AMPS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let CHILL_RUN = data.series.find(({ name }) => name?.includes('DATA.CHILL_RUN.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let CHILL_ALARM = data.series.find(({ name }) => name?.includes('DATA.CHILL_ALARM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS1_COMP_RUN_ST = data.series.find(({ name }) => name?.includes('DATA.SYS1_COMP_RUN_ST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS2_COMP_RUN_ST = data.series.find(({ name }) => name?.includes('DATA.SYS2_COMP_RUN_ST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS1_OIL_TEMP = data.series.find(({ name }) => name?.includes('DATA.SYS1_OIL_TEMP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS2_OIL_TEMP = data.series.find(({ name }) => name?.includes('DATA.SYS2_OIL_TEMP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS1_SUC_PRESS = data.series.find(({ name }) => name?.includes('DATA.SYS1_SUC_PRESS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS2_SUC_PRESS = data.series.find(({ name }) => name?.includes('DATA.SYS2_SUC_PRESS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS1_DESC_PRESS = data.series.find(({ name }) => name?.includes('DATA.SYS1_DESC_PRESS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS1_OPER_COD = data.series.find(({ name }) => name?.includes('DATA.SYS1_OPER_COD.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS2_OPER_COD = data.series.find(({ name }) => name?.includes('DATA.SYS1_OPER_COD.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS2_DESC_PRESS = data.series.find(({ name }) => name?.includes('DATA.SYS2_DESC_PRESS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS1_TOTAL_RUN_HOURS = data.series.find(({ name }) => name?.includes('DATA.SYS1_TOTAL_RUN_HOURS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let SYS2_TOTAL_RUN_HOURS = data.series.find(({ name }) => name?.includes('DATA.SYS2_TOTAL_RUN_HOURS.VALUE'))?.fields[1].state?.calcs   
    ?.lastNotNull;
    
    let chiller: DataChiller ={
        DatosGenerales: {
            Nombre: '',
            Fase: 'A',
            Sistema: '1&2',
            Marca: 'YORK',
            Modelo: 'YVAA0263',
            Ubicacion: 'EXTERIORES', 
        },
        Principal: {
            Estado: '',
            Estado_class: estadoStyles.sinConexion,
            Botón: modoControlStyles.SinConexion,
            TemperaturaSuministro: 0,
            TemperaturaRetorno: 0,
            Corriente: 0,
        },
        Compresor1: {
            EstadoComp: modoControlStyles.SinConexion,
            TemperaturaAceite: 0,
            PresionSuccion: 0,
            PresionDescarga: 0,
            HorasFunc: 0,
        },
        Compresor2: {
            EstadoComp: modoControlStyles.SinConexion,
            TemperaturaAceite: 0,
            PresionSuccion: 0,
            PresionDescarga: 0,
            HorasFunc: 0,
        },
        Alarmas: {
            AlarmaGeneral: '',
            CodAlarmaS1: '',
            CodAlarmaS2: '',
        },
    }

    //INTERPOLACION DE VARIABLES

    let variableNombre = replaceVariables('$EQUIPO')
    chiller.DatosGenerales.Nombre = variableNombre !==''? variableNombre: options.nombre

    chiller.Principal.TemperaturaSuministro = Number.parseFloat(LEAVE_CHILL_TEMP?.toFixed(2));
    chiller.Principal.TemperaturaRetorno = Number.parseFloat(RET_CHILL_TEMP?.toFixed(2));
    chiller.Principal.Corriente = Number.parseFloat(CHI_AMPS?.toFixed(2));
    chiller.Compresor1.TemperaturaAceite = Number.parseFloat(SYS1_OIL_TEMP?.toFixed(2));
    chiller.Compresor2.TemperaturaAceite = Number.parseFloat(SYS2_OIL_TEMP?.toFixed(2));
    chiller.Compresor1.PresionSuccion = Number.parseFloat(SYS1_SUC_PRESS?.toFixed(2));
    chiller.Compresor2.PresionSuccion = Number.parseFloat(SYS2_SUC_PRESS?.toFixed(2));
    chiller.Compresor1.PresionDescarga = Number.parseFloat(SYS1_DESC_PRESS?.toFixed(2));
    chiller.Compresor2.PresionDescarga = Number.parseFloat(SYS2_DESC_PRESS?.toFixed(2));
    chiller.Compresor1.HorasFunc = Number.parseFloat(SYS1_TOTAL_RUN_HOURS?.toFixed(2));
    chiller.Compresor2.HorasFunc = Number.parseFloat(SYS2_TOTAL_RUN_HOURS?.toFixed(2));
    
    //Alarmas
    chiller.Alarmas.AlarmaGeneral = CHILL_ALARM === 1? alarmsStyles.on : alarmsStyles.off;
    chiller.Principal.Estado = CHILL_RUN === 1? 'ENCENDIDO' : 'APAGADO';
    chiller.Principal.Estado_class = CHILL_RUN === 1? estadoStyles.ok: estadoStyles.sinConexion;
    chiller.Principal.Botón = CHILL_RUN === 1? modoControlStyles.On: modoControlStyles.SinConexion;
    chiller.Compresor1.EstadoComp = SYS1_COMP_RUN_ST === 1? modoControlStyles.On : modoControlStyles.SinConexion;
    chiller.Compresor2.EstadoComp = SYS2_COMP_RUN_ST === 1? modoControlStyles.On: modoControlStyles.SinConexion;
    chiller.Alarmas.CodAlarmaS1 = SYS1_OPER_COD === 1? alarmsStyles.on : alarmsStyles.off;
    chiller.Alarmas.CodAlarmaS2 = SYS2_OPER_COD === 1? alarmsStyles.on : alarmsStyles.off;

    console.log(chiller);

    return chiller;

};

export default dataChiller;