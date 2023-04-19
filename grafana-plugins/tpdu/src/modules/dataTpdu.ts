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
            Sistema: '1&2',
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
tpdu.DatosGenerales.Nombre = variableNombre !==''? variableNombre: options.nombre

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
    {varlong:1, valor:"C 1"},
    {varlong:2, valor:"C 2"},
    {varlong:3, valor:"C 3"},
    {varlong:4, valor:"C 4"},
    {varlong:5, valor:"C 5"},
    {varlong:6, valor:"C 6"},
    {varlong:7, valor:"C 7"},
    {varlong:8, valor:"C 8"},
    {varlong:9, valor:"C 9"},
    {varlong:10, valor:"C 10"},
    {varlong:11, valor:"C 11"},
    {varlong:12, valor:"C 12"},
    {varlong:13, valor:"C 13"},
    {varlong:14, valor:"C 14"},
    {varlong:15, valor:"C 15"},
    {varlong:16, valor:"C 16"},
    {varlong:17, valor:"C 17"},
    {varlong:18, valor:"C 18"},
    {varlong:19, valor:"C 19"},
    {varlong:20, valor:"C 20"},
    {varlong:21, valor:"C 21"},
    {varlong:22, valor:"C 22"},
    {varlong:23, valor:"C 23"},
    {varlong:24, valor:"F 2"},
    {varlong:25, valor:"F 3"},
    {varlong:26, valor:"F 4"},
    {varlong:27, valor:"F 5"},
    {varlong:28, valor:"F 6"},
    {varlong:29, valor:"F 7"},
    {varlong:30, valor:"F 8"},
    {varlong:31, valor:"F 9"},
    {varlong:32, valor:"F 10"},
    {varlong:33, valor:"F 11"},
    {varlong:34, valor:"F 12"},
    {varlong:35, valor:"F 13"},
    {varlong:36, valor:"F 14"},
    {varlong:37, valor:"F 15"},
    {varlong:38, valor:"F 16"},
    {varlong:39, valor:"F 17"},
    {varlong:40, valor:"F 18"},
    {varlong:41, valor:"F 19"},
    {varlong:42, valor:"F 20"},
    {varlong:43, valor:"F 21"},
    {varlong:44, valor:"F 22"}
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
    {varlong:16, valor:9.0},
    {varlong:17, valor:9.5},
    {varlong:18, valor:10},
    {varlong:19, valor:10.5},
    {varlong:20, valor:11},
    {varlong:21, valor:11.5},
    {varlong:22, valor:12},
    {varlong:23, valor:12.5},
    {varlong:24, valor:13},
    {varlong:25, valor:13.5},
    {varlong:26, valor:14},
    {varlong:27, valor:14.5},
    {varlong:28, valor:15}
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
    {varlong:12, valor:12},
    {varlong:13, valor:13},
    {varlong:14, valor:14},
    {varlong:15, valor:15},
    {varlong:16, valor:16},
    {varlong:17, valor:17}
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
    {varlong:18, valor:10},
    {varlong:19, valor:10.5},
    {varlong:20, valor:11},
    {varlong:21, valor:11.5},
    {varlong:22, valor:12},
    {varlong:23, valor:12.5},
    {varlong:24, valor:13},
    {varlong:25, valor:13.5},
    {varlong:26, valor:14},
    {varlong:27, valor:14.5},
    {varlong:28, valor:15},
    {varlong:29, valor:15.5},
    {varlong:30, valor:16},
    {varlong:31, valor:16.5},
    {varlong:32, valor:17},
    {varlong:33, valor:17.5},
    {varlong:34, valor:18},
    {varlong:35, valor:18.5},
    {varlong:36, valor:19},
    {varlong:37, valor:19.5},
    {varlong:38, valor:20},
    {varlong:39, valor:20.5},
    {varlong:40, valor:21},
    {varlong:41, valor:21.5},
    {varlong:42, valor:22},
    {varlong:43, valor:29},
    {varlong:44, valor:30},
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
    {varlong:18, valor:10},
    {varlong:19, valor:10.5},
    {varlong:20, valor:11},
    {varlong:21, valor:11.5},
    {varlong:22, valor:12},
    {varlong:23, valor:12.5},
    {varlong:24, valor:13},
    {varlong:25, valor:13.5},
    {varlong:26, valor:14},
    {varlong:27, valor:14.5},
    {varlong:28, valor:15}
  ]
let obj_variable_reduce_inst = varRedInst.find(o => o.varlong === RED_INST_TRIP_PICKUP)!;

tpdu.Parametros.Ltime_pickup = obj_variable_long_pickup?.valor;
tpdu.Parametros.Ltime_banda = obj_variable_long_delay?.valor;
tpdu.Parametros.Stime_pickup = obj_variable_short_pickup?.valor;
tpdu.Parametros.Stime_banda = obj_variable_short_delay?.valor.toString();
tpdu.Parametros.inst_pickup = obj_variable_inst_pickup?.valor.toString();
tpdu.Parametros.Relinst_pickup = obj_variable_reduce_inst?.valor;

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