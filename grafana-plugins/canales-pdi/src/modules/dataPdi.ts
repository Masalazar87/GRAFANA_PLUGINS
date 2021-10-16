import { PanelData,InterpolateFunction } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataPdi } from 'components/variables';
import estadosStyles from 'styles/estadosStyles';


const dataPdi = (data: PanelData, options: SimpleOptions,replaceVariables:InterpolateFunction): DataPdi => {  
    console.log('data: ', data);
    console.log('options: ', options);
    console.log(replaceVariables);

// ESTADOS
let GEN_ALM = data.series.find(({ name }) => name?.includes('DATA.GEN_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
let MODBUS_ST = data.series.find(({ name }) => name?.includes('DATA.MODBUS_ST.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //------------------------------------POTENCIA KVA------------------------------//

let KVA_1_CH1 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_1_CH2 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_1_CH3 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH3.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_2_CH1 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_2_CH2 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KVA_2_CH3 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH3.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;

 //------------------------------------ENERGIA KW/H------------------------------//

let KWH_1_CH1 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH2 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH3 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH3.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_2_CH1 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_2_CH2 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_2_CH3 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH3.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;




let pdi: DataPdi = {
    DatosGenerales: {
        Nombre:'',
    },
    Estado:{
        Status:'',
        Alarma:'',
    },
    Panel1: {
        P1kvach1: 0,
        P1khwch1: 0,
        P1kvach2: 0,
        P1khwch2: 0, 
        P1kvach3: 0,
        P1khwch3: 0,
    },
    Panel2: {
        P2kvach1: 0,
        P2khwch1: 0,
        P2kvach2: 0,
        P2khwch2: 0,
        P2kvach3: 0,
        P2khwch3: 0,
    },
}


//INTERPOLACION DE VARIABLES
let variableNombre = replaceVariables('$EQUIPO')
pdi.DatosGenerales.Nombre = variableNombre !==''? variableNombre: options.nombre

//DATOS P1
pdi.Panel1.P1kvach1 = Number.parseFloat(KVA_1_CH1?.toFixed(2));
pdi.Panel1.P1khwch1 = Number.parseFloat(KWH_1_CH1?.toFixed(2));
pdi.Panel1.P1kvach2 = Number.parseFloat(KVA_1_CH2?.toFixed(2));
pdi.Panel1.P1khwch2 = Number.parseFloat(KWH_1_CH2?.toFixed(2));
pdi.Panel1.P1kvach3 = Number.parseFloat(KVA_1_CH3?.toFixed(2));
pdi.Panel1.P1khwch3 = Number.parseFloat(KWH_1_CH3?.toFixed(2));

//DATOS P2
pdi.Panel2.P2kvach1 = Number.parseFloat(KVA_2_CH1?.toFixed(2));
pdi.Panel2.P2khwch1 = Number.parseFloat(KWH_2_CH1?.toFixed(2));
pdi.Panel2.P2kvach2 = Number.parseFloat(KVA_2_CH2?.toFixed(2));
pdi.Panel2.P2khwch2 = Number.parseFloat(KWH_2_CH2?.toFixed(2));
pdi.Panel2.P2kvach3 = Number.parseFloat(KVA_2_CH3?.toFixed(2));
pdi.Panel2.P2khwch3 = Number.parseFloat(KWH_2_CH3?.toFixed(2));

//ESTADOS
pdi.Estado.Alarma = GEN_ALM === 1? estadosStyles.on : estadosStyles.off;
pdi.Estado.Status = MODBUS_ST  === 1? estadosStyles.on1 : estadosStyles.off;
    

console.log(pdi);

return pdi;

};

export default dataPdi;