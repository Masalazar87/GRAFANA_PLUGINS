import { SimpleOptions } from 'types';
import { PanelData, InterpolateFunction } from '@grafana/data';
import { DataTpdu } from 'components/variables';
import alarmsStyles from 'styles/alarmsStyles';


const DataTpdu = (data: PanelData, options:SimpleOptions, replaceVariables:InterpolateFunction): DataTpdu => {  
    console.log('data: ', data);
    console.log('options: ', options);
    console.log(replaceVariables);

    let CUR_FASE_A = data.series.find(({ name }) => name?.includes('DATA.CUR_FASE_A.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let CUR_FASE_B = data.series.find(({ name }) => name?.includes('DATA.CUR_FASE_B.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let CUR_FASE_C = data.series.find(({ name }) => name?.includes('DATA.CUR_FASE_C.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    //let ENERGY_TOTAL = data.series.find(({ name }) => name?.includes('DATA.ENERGY_TOTAL.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    //let FREC_MEDIDA  = data.series.find(({ name }) => name?.includes('DATA.FREC_MEDIDA.VALUE'))?.fields[1].state?.calcs
    //?.lastNotNull;
    let WARNING_ST = data.series.find(({ name }) => name?.includes('DATA.WARNING_ST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let MODBUS_ST = data.series.find(({ name }) => name?.includes('DATA.MODBUS_ST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let POS = data.series.find(({ name }) => name?.includes('DATA.POS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let POW_APPRT_TOTAL = data.series.find(({ name }) => name?.includes('DATA.POW_APPRT_TOTAL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let POW_FACT_TOTAL = data.series.find(({ name }) => name?.includes('DATA.POW_FACT_TOTAL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let POW_REAL_TOTAL = data.series.find(({ name }) => name?.includes('DATA.POW_REAL_TOTAL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let V_FASE_A  = data.series.find(({ name }) => name?.includes('DATA.V_FASE_A.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let V_FASE_B  = data.series.find(({ name }) => name?.includes('DATA.V_FASE_B.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let V_FASE_C  = data.series.find(({ name }) => name?.includes('DATA.V_FASE_C.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let LT_TRIP_PICKUP = data.series.find(({ name }) => name?.includes('DATA.LT_TRIP_PICKUP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let LT_TRIP_DELAY = data.series.find(({ name }) => name?.includes('DATA.LT_TRIP_DELAY.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ST_TRIP_PICKUP = data.series.find(({ name }) => name?.includes('DATA.ST_TRIP_PICKUP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let ST_TRIP_DELAY = data.series.find(({ name }) => name?.includes('DATA.ST_TRIP_DELAY.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let INST_TRIP_PICKUP = data.series.find(({ name }) => name?.includes('DATA.INST_TRIP_PICKUP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let RED_INST_TRIP_PICKUP = data.series.find(({ name }) => name?.includes('DATA.RED_INST_TRIP_PICKUP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;

    let tpdu: DataTpdu ={
        DatosGenerales: {
            Nombre: '',
            Fase: 'A',
            Sistema: 0,
            Marca: 'POWER BREAK II',
            Modelo: 'ENTELLIGUARD',
            Ubicacion: 'EXTERIORES FASE A',
        },
        Principal: {
            Voltage_prom: 0,
            Corriente_prom: 0,
            fp: 0,
            
        },
        Estados: {
            EstadoON: '',
            EstadoOFF: '',
            Estado_box: alarmsStyles.off,
            Botón: alarmsStyles.off,
            st_Modbus: alarmsStyles.off,
            warning_led: alarmsStyles.off,
            warning_txt: '',
            warning_box: alarmsStyles.off,
            warning_boton: alarmsStyles.off,
        },
        Parametros: {
            Vol_AB: 0,
            Vol_BC: 0,
            Vol_CA: 0,
            CorrienteA: 0,
            CorrienteB: 0,
            CorrienteC: 0,
            Pot_appt: 0,
            Pot_real: 0,
            Ltime_curve: 0,
            Ltime_banda: 0,
            Ltime_pickup: 0,
            Stime_curve: 0,
            Stime_banda: 0,
            Stime_pickup: 0,
            inst_pickup: 0,
            Relinst_pickup: 0,
        },
    }

    //INTERPOLACION DE VARIABLES
let variableNombre = replaceVariables('$EQUIPO')
tpdu.DatosGenerales.Nombre = variableNombre !==''? variableNombre: options.nombre

if (variableNombre = 'TPDU_'+ 1 +'A_'+''){
    tpdu.DatosGenerales.Sistema = 1;}
else{
    if (variableNombre = 'TPDU_'+ 2 +'A_'+''){
    tpdu.DatosGenerales.Sistema = 2;}}

//PRINCIPAL
tpdu.Principal.Voltage_prom = Number.parseFloat(V_FASE_A?.toFixed(2));

let Curr_prom = (CUR_FASE_A + CUR_FASE_B + CUR_FASE_C) / 3;
tpdu.Principal.Corriente_prom = Number.parseFloat(Curr_prom?.toFixed(2));

tpdu.Principal.fp = Number.parseFloat(POW_FACT_TOTAL?.toFixed(2))/100;

//PARAMETROS
tpdu.Parametros.Vol_AB = Number.parseFloat(V_FASE_A?.toFixed(2));
tpdu.Parametros.Vol_BC = Number.parseFloat(V_FASE_B?.toFixed(2));
tpdu.Parametros.Vol_CA = Number.parseFloat(V_FASE_C?.toFixed(2));
tpdu.Parametros.CorrienteA = Number.parseFloat(CUR_FASE_A?.toFixed(2));
tpdu.Parametros.CorrienteB = Number.parseFloat(CUR_FASE_B?.toFixed(2));
tpdu.Parametros.CorrienteC = Number.parseFloat(CUR_FASE_C?.toFixed(2));
tpdu.Parametros.Pot_appt = Number.parseFloat(POW_APPRT_TOTAL?.toFixed(2));
tpdu.Parametros.Pot_real = Number.parseFloat(POW_REAL_TOTAL?.toFixed(2));


//PARAMETROS CONFIGURACION
let Longt_pickup = LT_TRIP_PICKUP;
if (LT_TRIP_PICKUP = 1 ){
    Longt_pickup = 0.5
}
if (LT_TRIP_PICKUP = 2 ){
    Longt_pickup = 0.55
}
if (LT_TRIP_PICKUP = 3 ){
    Longt_pickup = 0.6
}
if (LT_TRIP_PICKUP = 4 ){
    Longt_pickup = 0.65
}
if (LT_TRIP_PICKUP = 5 ){
    Longt_pickup = 0.7
}
if (LT_TRIP_PICKUP = 6 ){
    Longt_pickup = 0.75
}
if (LT_TRIP_PICKUP = 7 ){
    Longt_pickup = 0.8
}
if (LT_TRIP_PICKUP = 8 ){
    Longt_pickup = 0.85
}
if (LT_TRIP_PICKUP = 9 ){
    Longt_pickup = 0.9
}
if (LT_TRIP_PICKUP = 10 ){
    Longt_pickup = 0.95
}
if (LT_TRIP_PICKUP = 11 ){
    Longt_pickup = 1.00
}

let Longt_delay = LT_TRIP_DELAY;
if (LT_TRIP_DELAY = 0 ){
    Longt_delay = 'OFF'
}

let shortt_pickup = ST_TRIP_PICKUP;
if (ST_TRIP_PICKUP = 0 ){
    shortt_pickup = 'OFF'
}

let shortt_delay = ST_TRIP_DELAY;
if (ST_TRIP_DELAY = 0 ){
    shortt_pickup = 'OFF'
}

let inst_pickup = INST_TRIP_PICKUP;
if (ST_TRIP_PICKUP = 0 ){
    inst_pickup = 'OFF';
}

let Redinst_pickup = RED_INST_TRIP_PICKUP;
if (RED_INST_TRIP_PICKUP = 0 ){
    Redinst_pickup = 'OFF';
}

tpdu.Parametros.Ltime_pickup = (Longt_pickup?.toFixed(1));
tpdu.Parametros.Ltime_banda = Number.parseFloat(Longt_delay?.toFixed(1));
tpdu.Parametros.Stime_pickup = (shortt_pickup?.toFixed(1));
tpdu.Parametros.Stime_banda = Number.parseFloat(shortt_delay?.toFixed(1));
tpdu.Parametros.inst_pickup = (inst_pickup?.toFixed(1));
tpdu.Parametros.Relinst_pickup = (Redinst_pickup?.toFixed(1));

//ESTADOS Y ALARMAS
tpdu.Estados.Estado_box = POS ===1? alarmsStyles.on1 : alarmsStyles.off,
tpdu.Estados.warning_box = WARNING_ST ===1? alarmsStyles.on2 : '',
tpdu.Estados.Botón = POS ===1? alarmsStyles.on1 : alarmsStyles.off,
tpdu.Estados.warning_boton = WARNING_ST ===1? alarmsStyles.on2 : '',

tpdu.Estados.EstadoON = POS ===1? 'CERRADO' : 'ABIERTO',
//tpdu.Estados.EstadoOFF = POS ===0? 'ABIERTO' : '',
tpdu.Estados.st_Modbus = MODBUS_ST ===1? alarmsStyles.on1 : alarmsStyles.off,
tpdu.Estados.warning_txt = WARNING_ST ===1? 'ALARMADO': '',
tpdu.Estados.warning_led = WARNING_ST >=1? alarmsStyles.on2 : alarmsStyles.off,




console.log(tpdu);
return tpdu;
};

export default DataTpdu;