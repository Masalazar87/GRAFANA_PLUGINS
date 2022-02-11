import { SimpleOptions } from 'types';
import { PanelData } from '@grafana/data';
import { DataReporte } from 'components/variables';
//import estadoStyles from 'styles/estadosStyles';

const dataReporte = (data: PanelData, options:SimpleOptions): DataReporte => {  
    console.log('data: ', data);
    console.log('options: ', options);

//ENERGIA PQM    
let ENY_POS_REAL = data.series.find(({ name }) => name?.includes('DATA.ENY_POS_REAL.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
//ENERGIA SG
let ENERGY_TOTAL = data.series.find(({ name }) => name?.includes('DATA.ENERGY_TOTAL.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
//ENERGIA PDI´S
let SIS1_PDI = [];
let SIS2_PDI = [];
for (let i = 1; i <= 10; i++) {
    SIS1_PDI[i] = data.series.find(({ name }) => name?.includes('SIS1_PDI_' + i + '_KWH'))?.fields[1].state?.calcs?.lastNotNull;
    SIS2_PDI[i] = data.series.find(({ name }) => name?.includes('SIS2_PDI_' + i + '_KWH'))?.fields[1].state?.calcs?.lastNotNull;
    if (SIS1_PDI[i] === null || SIS1_PDI[i] === 0) {
        SIS1_PDI[i] = 0;
        }   else {
            SIS1_PDI[i] = SIS1_PDI[i]
        } 
    if (SIS2_PDI[i] === null || SIS1_PDI[i] === 0) {
        SIS2_PDI[i] = 0;
        }   else {
            SIS2_PDI[i] = SIS2_PDI[i]
        } 
    }
//ENERGIA UPS´S TUPS_IN
let TUPS_IN_1A_KWH = data.series.find(({ name }) => name?.includes('TUPS_IN_1A_KWH'))?.fields[1].state?.calcs?.lastNotNull;
let TUPS_IN_2A_KWH = data.series.find(({ name }) => name?.includes('TUPS_IN_2A_KWH'))?.fields[1].state?.calcs?.lastNotNull;
/*let SIS1_UPS = [];
let SIS2_UPS = [];
for (let i = 1; i <= 6; i++) {
    SIS1_UPS[i] = data.series.find(({ name }) => name?.includes('SIS1_UPS_' + i + '_KWH'))?.fields[1].state?.calcs?.lastNotNull;
    SIS2_UPS[i] = data.series.find(({ name }) => name?.includes('SIS2_UPS_' + i + '_KWH'))?.fields[1].state?.calcs?.lastNotNull;
    if (SIS1_UPS[i] === null || SIS1_PDI[i] === 0) {
        SIS1_UPS[i] = 0;
        }   else {
            SIS1_UPS[i] = SIS1_UPS[i]
        } 
    if (SIS2_UPS[i] === null || SIS1_UPS[i] === 0) {
        SIS2_UPS[i] = 0;
        }   else {
            SIS2_UPS[i] = SIS2_UPS[i]
        } 
    }*/

let reporte: DataReporte = {
    ParametrosPrincipales: {
        Energia_total: 0,
        Energia_sg: 0,
        Energia_ti: 0,
        Energia_ups: 0,
        Energia_aacc: 0,
        PUE: 0,
        DCIE: 0,
        costo_rack: 0,
        Energia_rack: 0,
},
}
let energia_total = (ENY_POS_REAL) / 10
let energia_sg = (ENERGY_TOTAL) / 10
let energia_pdisis1 = SIS1_PDI[1] +++ SIS1_PDI[2] +++ SIS1_PDI[3] +++ SIS1_PDI[4] +++ SIS1_PDI[5] +++ 
                      SIS1_PDI[6] +++ SIS1_PDI[7] +++ SIS1_PDI[8] +++ SIS1_PDI[9] +++ SIS1_PDI[10]
let energia_pdisis2 = SIS2_PDI[1] +++ SIS2_PDI[2] +++ SIS2_PDI[3] +++ SIS2_PDI[4] +++ SIS2_PDI[5] +++ 
                      SIS2_PDI[6] +++ SIS2_PDI[7] +++ SIS2_PDI[8] +++ SIS2_PDI[9] +++ SIS2_PDI[10]
let energia_ti = (energia_pdisis1 +++ energia_pdisis2) / 10
let energia_ups = (TUPS_IN_1A_KWH +++ TUPS_IN_2A_KWH) / 10

reporte.ParametrosPrincipales.Energia_total = Number.parseFloat(energia_total?.toFixed(2)); 
reporte.ParametrosPrincipales.Energia_sg = Number.parseFloat(energia_sg?.toFixed(2)); 
reporte.ParametrosPrincipales.Energia_ti = Number.parseFloat(energia_ti?.toFixed(2)); 
reporte.ParametrosPrincipales.Energia_ups = Number.parseFloat(energia_ups?.toFixed(2)); 

console.log(reporte);
return reporte;
};

export default dataReporte;