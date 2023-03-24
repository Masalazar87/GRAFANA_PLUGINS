import { SimpleOptions } from 'types';
import { PanelData, InterpolateFunction } from '@grafana/data';
import { DataTchi } from 'components/variables';
import alarmsStyles from 'styles/alarmsStyles';


const DataTchi = (data: PanelData, options:SimpleOptions, replaceVariables:InterpolateFunction): DataTchi => {  
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

    let tchi: DataTchi ={
        DatosGenerales: {
            Nombre: '',
            Fase: 'A',
            Sistema: '1&2',
            Marca: 'GENERAL ELECTRIC',
            Modelo: 'SPECTRA',
            Ubicacion: 'CUARTOS ELECTRICOS',
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
tchi.DatosGenerales.Nombre = variableNombre !==''? variableNombre: options.nombre

if (variableNombre = 'TCHI_'+ 1 +'A_'+''){
    tchi.DatosGenerales.Sistema = "1";}
else{
    if (variableNombre = 'TCHI_'+ 2 +'A_'+''){
    tchi.DatosGenerales.Sistema = "2";}}

//PRINCIPAL
tchi.Principal.Voltage_prom = Number.parseFloat(V_FASE_A?.toFixed(2));

let Curr_prom = (CUR_FASE_A + CUR_FASE_B + CUR_FASE_C) / 3;
tchi.Principal.Corriente_prom = Number.parseFloat(Curr_prom?.toFixed(2));

tchi.Principal.fp = Number.parseFloat(POW_FACT_TOTAL?.toFixed(2));

//PARAMETROS
tchi.Parametros.Vol_AB = Number.parseFloat(V_FASE_A?.toFixed(2));
tchi.Parametros.Vol_BC = Number.parseFloat(V_FASE_B?.toFixed(2));
tchi.Parametros.Vol_CA = Number.parseFloat(V_FASE_C?.toFixed(2));
tchi.Parametros.CorrienteA = Number.parseFloat(CUR_FASE_A?.toFixed(2));
tchi.Parametros.CorrienteB = Number.parseFloat(CUR_FASE_B?.toFixed(2));
tchi.Parametros.CorrienteC = Number.parseFloat(CUR_FASE_C?.toFixed(2));
tchi.Parametros.Pot_appt = Number.parseFloat(POW_APPRT_TOTAL?.toFixed(2));
tchi.Parametros.Pot_real = Number.parseFloat(POW_REAL_TOTAL?.toFixed(2));


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


tchi.Parametros.Ltime_pickup = (Longt_pickup?.toFixed(1));
tchi.Parametros.Ltime_banda = Number.parseFloat(LT_TRIP_DELAY?.toFixed(1));
tchi.Parametros.Stime_pickup = (ST_TRIP_PICKUP?.toFixed(1));
tchi.Parametros.Stime_banda = Number.parseFloat(ST_TRIP_DELAY?.toFixed(1));
tchi.Parametros.inst_pickup =  (INST_TRIP_PICKUP?.toFixed(1));
tchi.Parametros.Relinst_pickup = Number.parseFloat(RED_INST_TRIP_PICKUP?.toFixed(1));

//ESTADOS Y ALARMAS
tchi.Estados.Estado_box = POS === 1? alarmsStyles.on1 : alarmsStyles.off,
tchi.Estados.warning_box = WARNING_ST === 1? alarmsStyles.on2 : '',
tchi.Estados.Botón = POS === 1? alarmsStyles.on1 : alarmsStyles.off,
tchi.Estados.warning_boton = WARNING_ST === 1? alarmsStyles.on2 : '',

tchi.Estados.EstadoON = POS === 1? 'CERRADO' : 'ABIERTO',
//tchi.Estados.EstadoOFF = POS === 0? 'ABIERTO' : '',
tchi.Estados.st_Modbus = MODBUS_ST === 1? alarmsStyles.on1 : alarmsStyles.off,
//tchi.Estados.warning_txt = WARNING_ST === 1? 'ALARMADO': '',
tchi.Estados.warning_led = WARNING_ST >=1? alarmsStyles.on2 : alarmsStyles.off,


console.log(tchi);
return tchi;
};

export default DataTchi;