import { SimpleOptions } from 'types';
import { PanelData, InterpolateFunction } from '@grafana/data';
import { DataTchi } from 'components/variables';
import alarmsStyles from 'styles/alarmsStyles';

const DataTchi = (data: PanelData, options:SimpleOptions, replaceVariables:InterpolateFunction): DataTchi => {  
    console.log('data: ', data);
    console.log('options: ', options);
    console.log(replaceVariables);

    /*let CUR_FASE_A = data.series.find(({ name }) => name?.includes('DATA.CUR_FASE_A.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let CUR_FASE_B = data.series.find(({ name }) => name?.includes('DATA.CUR_FASE_B.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let CUR_FASE_C = data.series.find(({ name }) => name?.includes('DATA.CUR_FASE_C.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;*/
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
//VARIABLES CONTROLADOR ABB
    let CUR_FASE_A = data.series.find(({ name }) => name?.includes('DATA.DATA_CUR_FASE_A.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let CUR_FASE_B = data.series.find(({ name }) => name?.includes('DATA.DATA_CUR_FASE_B.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let CUR_FASE_C = data.series.find(({ name }) => name?.includes('DATA.DATA_CUR_FASE_C.VALUE'))?.fields[1].state?.calcs
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
            Ltime_curve: '- - -',
            Ltime_banda: '',
            Ltime_pickup: 0,
            Stime_curve: '- - -',
            Stime_banda: '',
            Stime_pickup: 0,
            inst_pickup: '',
            Relinst_pickup: 0,
        },
    }

    //INTERPOLACION DE VARIABLES
let variableNombre = replaceVariables('$EQUIPO')
tchi.DatosGenerales.Nombre = variableNombre !==''? variableNombre: options.nombre

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
const varLongPickup = [
    {varlong:1, valor:0.5},
    {varlong:2, valor:0.55},
    {varlong:3, valor:0.6},
    {varlong:4, valor:0.65},
    {varlong:5, valor:0.7},
    {varlong:6, valor:0.75},
    {varlong:7, valor:0.8},
    {varlong:8, valor:0.85},
    {varlong:9, valor:0.9},
    {varlong:10, valor:0.95},
    {varlong:11, valor:1.0}
  ]
let obj_variable_long_pickup = varLongPickup.find(o => o.varlong === LT_TRIP_PICKUP)!;

const varLongDelay = [
    {varlong:0, valor:"OFF"},
    {varlong:1, valor:"MVT 1"},
    {varlong:2, valor:"MVT 2"},
    {varlong:3, valor:"MVT 3"},
    {varlong:4, valor:"MVT 4"},
    {varlong:5, valor:"C 1"},
    {varlong:6, valor:"C 2"},
    {varlong:7, valor:"C 3"},
    {varlong:8, valor:"C 4"},
    {varlong:9, valor:"C 5"},
    {varlong:10, valor:"C 6"},
    {varlong:11, valor:"C 7"},
    {varlong:12, valor:"C 8"},
    {varlong:13, valor:"C 9"},
    {varlong:14, valor:"C 10"},
    {varlong:15, valor:"C 11"},
    {varlong:16, valor:"F 1"},
    {varlong:17, valor:"F 2"},
    {varlong:18, valor:"C 3"},
    {varlong:19, valor:"C 4"},
    {varlong:20, valor:"C 5"},
    {varlong:21, valor:"C 6"},
    {varlong:22, valor:"F 7"},
    {varlong:23, valor:"F 8"}
  ]
let obj_variable_long_delay = varLongDelay.find(o => o.varlong === LT_TRIP_DELAY)!;

const varShortPickup = [
    {varlong:1, valor:1.5},
    {varlong:2, valor:2.0},
    {varlong:3, valor:2.5},
    {varlong:4, valor:3.0},
    {varlong:5, valor:3.5},
    {varlong:6, valor:4.0},
    {varlong:7, valor:4.5},
    {varlong:8, valor:5.0},
    {varlong:9, valor:5.5},
    {varlong:10, valor:6.0},
    {varlong:11, valor:6.5},
    {varlong:12, valor:7.0},
    {varlong:13, valor:7.5},
    {varlong:14, valor:8.0},
    {varlong:15, valor:8.5},
    {varlong:16, valor:9.0}
  ]
let obj_variable_short_pickup = varShortPickup.find(o => o.varlong === ST_TRIP_PICKUP)!;

const varShortDelay = [
    {varlong:0, valor:"OFF"},
    {varlong:1, valor:1},
    {varlong:2, valor:2},
    {varlong:3, valor:3},
    {varlong:4, valor:4},
    {varlong:5, valor:5},
    {varlong:6, valor:6},
    {varlong:7, valor:7},
    {varlong:8, valor:8},
    {varlong:9, valor:9},
    {varlong:10, valor:10},
    {varlong:11, valor:11},
    {varlong:12, valor:12}
]

let obj_variable_short_delay = varShortDelay.find(o => o.varlong === ST_TRIP_DELAY)!;

const varInstPickup = [
    {varlong:0, valor:"OFF"},
    //{varlong:1, valor:1},
    {varlong:2, valor:2},
    {varlong:3, valor:2.5},
    {varlong:4, valor:3},
    {varlong:5, valor:3.5},
    {varlong:6, valor:4},
    {varlong:7, valor:4.5},
    {varlong:8, valor:5},
    {varlong:9, valor:5.5},
    {varlong:10, valor:6},
    {varlong:11, valor:6.5},
    {varlong:12, valor:7},
    {varlong:13, valor:7.5},
    {varlong:14, valor:8},
    {varlong:15, valor:8.5},
    {varlong:16, valor:9},
    {varlong:17, valor:9.5},
    {varlong:18, valor:10}
  ]
let obj_variable_inst_pickup = varInstPickup.find(o => o.varlong === INST_TRIP_PICKUP)!;

const varRedInst = [
    {varlong:1, valor:1.5},
    {varlong:2, valor:2},
    {varlong:3, valor:2.5},
    {varlong:4, valor:3},
    {varlong:5, valor:3.5},
    {varlong:6, valor:4},
    {varlong:7, valor:4.5},
    {varlong:8, valor:5},
    {varlong:9, valor:5.5},
    {varlong:10, valor:6},
    {varlong:11, valor:6.5},
    {varlong:12, valor:7},
    {varlong:13, valor:7.5},
    {varlong:14, valor:8},
    {varlong:15, valor:8.5},
    {varlong:16, valor:9},
    {varlong:17, valor:9.5},
    {varlong:18, valor:10}
  ]
let obj_variable_reduce_inst = varRedInst.find(o => o.varlong === RED_INST_TRIP_PICKUP)!;


tchi.Parametros.Ltime_pickup = obj_variable_long_pickup?.valor;
tchi.Parametros.Ltime_banda = obj_variable_long_delay?.valor;
tchi.Parametros.Stime_pickup = obj_variable_short_pickup?.valor;
tchi.Parametros.Stime_banda = obj_variable_short_delay?.valor.toString();
tchi.Parametros.inst_pickup = obj_variable_inst_pickup?.valor.toString();
tchi.Parametros.Relinst_pickup = obj_variable_reduce_inst?.valor;

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