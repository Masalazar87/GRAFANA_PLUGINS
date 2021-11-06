import { PanelData, InterpolateFunction } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataClima } from 'components/variables';
import estadosStyles from 'styles/estadosStyles';

const dataClima = (data: PanelData, options: SimpleOptions, replaceVariables: InterpolateFunction): DataClima => {  
    console.log('data: ', data);
    console.log('options: ', options);
    console.log(replaceVariables);


let CHILL_RUN = data.series.find(({ name }) => name?.includes('DATA.CHILL_RUN.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let LEAVE_CHILL_TEMP = data.series.find(({ name }) => name?.includes('DATA.LEAVE_CHILL_TEMP.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let RET_CHILL_TEMP = data.series.find(({ name }) => name?.includes('DATA.RET_CHILL_TEMP.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;


let clima: DataClima ={
    Principales:{
        TsuminEa1: 0,
        TretEa1: 0,
        TsuminEa2: 0,
        TretEa2: 0,
        TsuminEa3: 0,
        TretEa3: 0,
        TsuminEa4: 0,
        TretEa4: 0,
    },
    Estados:{
        Bomba_1_b1_1: '',
        Chiller_1_ea_1: '',
        Chiller_1_ea_2: '',
        Chiller_1_ea_3: '',
        Chiller_1_ea_4: '',
    },
}

clima.Estados.Chiller_1_ea_2 = CHILL_RUN === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Principales.TsuminEa2 = Number.parseFloat(LEAVE_CHILL_TEMP?.toFixed(2));
clima.Principales.TretEa2 = Number.parseFloat(RET_CHILL_TEMP?.toFixed(2));
    
clima.Estados.Chiller_1_ea_1 = CHILL_RUN === 1? estadosStyles.ok : estadosStyles.sinConexion;
clima.Principales.TsuminEa1 = Number.parseFloat(LEAVE_CHILL_TEMP?.toFixed(2));
clima.Principales.TretEa1 = Number.parseFloat(RET_CHILL_TEMP?.toFixed(2));



console.log(clima);

    return clima;

};

export default dataClima;