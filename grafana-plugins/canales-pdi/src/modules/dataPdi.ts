import { PanelData,InterpolateFunction} from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataPdi } from 'components/variables';
import estadosStyles from 'styles/estadosStyles';

const dataPdi = (data: PanelData, options: SimpleOptions, replaceVariables: InterpolateFunction, ): DataPdi => {  
    console.log('data: ', data);
    console.log('options: ', options);
    console.log(replaceVariables);
         
// ESTADOS
let GEN_ALM = data.series.find(({ name }) => name?.includes('DATA.GEN_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
let MODBUS_ST = data.series.find(({ name }) => name?.includes('DATA.MODBUS_ST.VALUE'))?.fields[1].state?.calcs?.lastNotNull

//------------------------------------POTENCIA KVA P1------------------------------//
let KVA_1_CH1 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH2 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH3 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH3.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH4 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH4.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH5 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH5.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH6 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH6.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH7 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH7.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH8 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH8.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH9 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH9.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH10 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH10.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH11 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH11.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH12 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH12.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH13 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH13.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH14 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH14.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH15 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH15.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH16 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH16.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH17 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH17.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH18 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH18.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH19 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH19.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH20 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH20.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH21 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH21.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH22 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH22.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH23 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH23.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH24 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH24.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH25 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH25.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH26 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH26.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH27 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH27.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH28 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH28.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH29 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH29.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH30 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH30.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH31 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH31.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH32 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH32.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH33 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH33.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH34 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH34.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH35 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH35.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH36 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH36.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH37 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH37.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH38 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH38.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH39 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH39.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH40 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH40.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH41 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH41.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_1_CH42 = data.series.find(({ name }) => name?.includes('DATA.KVA_1.CH42.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;

 //------------------------------------ENERGIA KW/H P1 ------------------------------//
let KWH_1_CH1 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH2 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH3 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH3.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH4 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH4.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH5 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH5.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH6 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH6.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH7 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH7.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH8 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH8.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH9 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH9.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH10 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH10.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH11 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH11.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH12 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH12.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH13 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH13.VALUE'))?.fields[1].state?.calcs
?.lastNotNull
let KWH_1_CH14 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH14.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH15 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH15.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH16 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH16.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH17 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH17.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH18 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH18.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH19 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH19.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH20 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH20.VALUE'))?.fields[1].state?.calcs
?.lastNotNull
let KWH_1_CH21 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH21.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH22 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH22.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH23 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH23.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH24 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH24.VALUE'))?.fields[1].state?.calcs
?.lastNotNull
let KWH_1_CH25 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH25.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH26 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH26.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH27 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH27.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH28 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH28.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH29 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH29.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH30 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH30.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH31 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH31.VALUE'))?.fields[1].state?.calcs
?.lastNotNull
let KWH_1_CH32 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH32.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH33 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH33.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH34 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH34.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH35 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH35.VALUE'))?.fields[1].state?.calcs
?.lastNotNull
let KWH_1_CH36 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH36.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH37 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH37.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH38 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH38.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH39 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH39.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH40 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH40.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH41 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH41.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;
let KWH_1_CH42 = data.series.find(({ name }) => name?.includes('DATA.KWH_1.CH42.VALUE'))?.fields[1].state?.calcs
?.lastNotNull;

//------------------------------------POTENCIA KVA P2------------------------------//
let KVA_2_CH1 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH1.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH2 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH2.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH3 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH3.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH4 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH4.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH5 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH5.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH6 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH6.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH7 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH7.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH8 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH8.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH9 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH9.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH10 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH10.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH11 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH11.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH12 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH12.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH13 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH13.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH14 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH14.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH15 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH15.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH16 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH16.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH17 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH17.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH18 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH18.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH19 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH19.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH20 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH20.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH21 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH21.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH22 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH22.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH23 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH23.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH24 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH24.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH25 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH25.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH26 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH26.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH27 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH27.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH28 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH28.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH29 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH29.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH30 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH30.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH31 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH31.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH32 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH32.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH33 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH33.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH34 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH34.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH35 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH35.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH36 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH36.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH37 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH37.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH38 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH38.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/100;
let KVA_2_CH39 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH39.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH40 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH40.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH41 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH41.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;
let KVA_2_CH42 = data.series.find(({ name }) => name?.includes('DATA.KVA_2.CH42.VALUE'))?.fields[1].state?.calcs
?.lastNotNull/10;


 //------------------------------------ENERGIA KW/H P2 ------------------------------//
 let KWH_2_CH1 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH1.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH2 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH2.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH3 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH3.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH4 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH4.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH5 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH5.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH6 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH6.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH7 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH7.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH8 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH8.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH9 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH9.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH10 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH10.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH11 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH11.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH12 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH12.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH13 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH13.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull
 let KWH_2_CH14 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH14.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH15 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH15.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH16 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH16.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH17 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH17.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH18 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH18.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH19 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH19.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH20 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH20.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull
 let KWH_2_CH21 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH21.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH22 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH22.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH23 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH23.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH24 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH24.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull
 let KWH_2_CH25 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH25.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH26 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH26.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH27 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH27.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH28 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH28.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH29 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH29.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH30 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH30.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH31 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH31.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull
 let KWH_2_CH32 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH32.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH33 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH33.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH34 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH34.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH35 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH35.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull
 let KWH_2_CH36 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH36.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH37 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH37.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH38 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH38.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH39 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH39.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH40 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH40.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH41 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH41.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;
 let KWH_2_CH42 = data.series.find(({ name }) => name?.includes('DATA.KWH_2.CH42.VALUE'))?.fields[1].state?.calcs
 ?.lastNotNull;

 //------------------------------------DATOS PRINCIPALES------------------------------//
 //let IN1_AB_VOL = data.series.find(({ name }) => name?.includes('DATA.IN1_AB_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //let IN1_BC_VOL = data.series.find(({ name }) => name?.includes('DATA.IN1_BC_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //let IN1_CA_VOL= data.series.find(({ name }) => name?.includes('DATA.IN1_CA_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 let OUT1_AB_VOL= data.series.find(({ name }) => name?.includes('DATA.OUT1_AB_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull/10;
 let OUT1_BC_VOL = data.series.find(({ name }) => name?.includes('DATA.OUT1_BC_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull/10;
 let OUT1_CA_VOL = data.series.find(({ name }) => name?.includes('DATA.OUT1_CA_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull/10;
 //let OUT1_A_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_A_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //let OUT1_B_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_B_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //let OUT1_C_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_C_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //let NEUT_CUR = data.series.find(({ name }) => name?.includes('DATA.NEUT_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //let OUT1_A_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_A_COS_FI.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //let OUT1_B_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_B_COS_FI.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 //let OUT1_C_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_C_COS_FI.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  

let pdi: DataPdi = {
    DatosGenerales: {
        Nombre: '',
    },

    Estado:{
        Status: estadosStyles.off,
        Status_ON: estadosStyles.off,
        Alarma: estadosStyles.off,
    },
    Panel1_kva:{
        CH1: 0, CH2: 0, CH3: 0, CH4: 0, CH5: 0, CH6: 0, CH7: 0, CH8: 0, CH9: 0, CH10: 0, CH11: 0,
        CH12: 0, CH13: 0, CH14: 0, CH15: 0, CH16: 0, CH17: 0, CH18: 0, CH19: 0, CH20: 0, CH21: 0, CH22: 0,
        CH23: 0, CH24: 0, CH25: 0, CH26: 0, CH27: 0, CH28: 0, CH29: 0, CH30: 0, CH31: 0, CH32: 0, CH33: 0,
        CH34: 0, CH35: 0, CH36: 0, CH37: 0, CH38: 0, CH39: 0, CH40: 0, CH41: 0, CH42: 0, 
    },
    Panel1_kwh: {
        CH1: 0, CH2: 0, CH3: 0, CH4: 0, CH5: 0, CH6: 0, CH7: 0, CH8: 0, CH9: 0, CH10: 0, CH11: 0,
        CH12: 0, CH13: 0, CH14: 0, CH15: 0, CH16: 0, CH17: 0, CH18: 0, CH19: 0, CH20: 0, CH21: 0, CH22: 0,
        CH23: 0, CH24: 0, CH25: 0, CH26: 0, CH27: 0, CH28: 0, CH29: 0, CH30: 0, CH31: 0, CH32: 0, CH33: 0,
        CH34: 0, CH35: 0, CH36: 0, CH37: 0, CH38: 0, CH39: 0, CH40: 0, CH41: 0, CH42: 0, 
    },
    Panel1_Amps: {
        CH1: 0, CH2: 0, CH3: 0, CH4: 0, CH5: 0, CH6: 0, CH7: 0, CH8: 0, CH9: 0, CH10: 0, CH11: 0,
        CH12: 0, CH13: 0, CH14: 0, CH15: 0, CH16: 0, CH17: 0, CH18: 0, CH19: 0, CH20: 0, CH21: 0, CH22: 0,
        CH23: 0, CH24: 0, CH25: 0, CH26: 0, CH27: 0, CH28: 0, CH29: 0, CH30: 0, CH31: 0, CH32: 0, CH33: 0,
        CH34: 0, CH35: 0, CH36: 0, CH37: 0, CH38: 0, CH39: 0, CH40: 0, CH41: 0, CH42: 0, 
    },
    Panel2_kva:{
        CH1: 0, CH2: 0, CH3: 0, CH4: 0, CH5: 0, CH6: 0, CH7: 0, CH8: 0, CH9: 0, CH10: 0, CH11: 0,
        CH12: 0, CH13: 0, CH14: 0, CH15: 0, CH16: 0, CH17: 0, CH18: 0, CH19: 0, CH20: 0, CH21: 0, CH22: 0,
        CH23: 0, CH24: 0, CH25: 0, CH26: 0, CH27: 0, CH28: 0, CH29: 0, CH30: 0, CH31: 0, CH32: 0, CH33: 0,
        CH34: 0, CH35: 0, CH36: 0, CH37: 0, CH38: 0, CH39: 0, CH40: 0, CH41: 0, CH42: 0, 
    },
    Panel2_kwh: {
        CH1: 0, CH2: 0, CH3: 0, CH4: 0, CH5: 0, CH6: 0, CH7: 0, CH8: 0, CH9: 0, CH10: 0, CH11: 0,
        CH12: 0, CH13: 0, CH14: 0, CH15: 0, CH16: 0, CH17: 0, CH18: 0, CH19: 0, CH20: 0, CH21: 0, CH22: 0,
        CH23: 0, CH24: 0, CH25: 0, CH26: 0, CH27: 0, CH28: 0, CH29: 0, CH30: 0, CH31: 0, CH32: 0, CH33: 0,
        CH34: 0, CH35: 0, CH36: 0, CH37: 0, CH38: 0, CH39: 0, CH40: 0, CH41: 0, CH42: 0, 
    },
    Panel2_Amps: {
        CH1: 0, CH2: 0, CH3: 0, CH4: 0, CH5: 0, CH6: 0, CH7: 0, CH8: 0, CH9: 0, CH10: 0, CH11: 0,
        CH12: 0, CH13: 0, CH14: 0, CH15: 0, CH16: 0, CH17: 0, CH18: 0, CH19: 0, CH20: 0, CH21: 0, CH22: 0,
        CH23: 0, CH24: 0, CH25: 0, CH26: 0, CH27: 0, CH28: 0, CH29: 0, CH30: 0, CH31: 0, CH32: 0, CH33: 0,
        CH34: 0, CH35: 0, CH36: 0, CH37: 0, CH38: 0, CH39: 0, CH40: 0, CH41: 0, CH42: 0, 
    },
}





//DATOS P1 POTENCIA KVA----------------------------------
pdi.Panel1_kva.CH1 = Number.parseFloat(KVA_1_CH1?.toFixed(2));
pdi.Panel1_kva.CH2 = Number.parseFloat(KVA_1_CH2?.toFixed(2));
pdi.Panel1_kva.CH3 = Number.parseFloat(KVA_1_CH3?.toFixed(2));
pdi.Panel1_kva.CH4 = Number.parseFloat(KVA_1_CH4?.toFixed(2));
pdi.Panel1_kva.CH5 = Number.parseFloat(KVA_1_CH5?.toFixed(2));
pdi.Panel1_kva.CH6 = Number.parseFloat(KVA_1_CH6?.toFixed(2));
pdi.Panel1_kva.CH7 = Number.parseFloat(KVA_1_CH7?.toFixed(2));
pdi.Panel1_kva.CH8 = Number.parseFloat(KVA_1_CH8?.toFixed(2));
pdi.Panel1_kva.CH9 = Number.parseFloat(KVA_1_CH9?.toFixed(2));
pdi.Panel1_kva.CH10 = Number.parseFloat(KVA_1_CH10?.toFixed(2));
pdi.Panel1_kva.CH11 = Number.parseFloat(KVA_1_CH11?.toFixed(2));
pdi.Panel1_kva.CH12 = Number.parseFloat(KVA_1_CH12?.toFixed(2));
pdi.Panel1_kva.CH13 = Number.parseFloat(KVA_1_CH13?.toFixed(2));
pdi.Panel1_kva.CH14 = Number.parseFloat(KVA_1_CH14?.toFixed(2));
pdi.Panel1_kva.CH15 = Number.parseFloat(KVA_1_CH15?.toFixed(2));
pdi.Panel1_kva.CH16 = Number.parseFloat(KVA_1_CH16?.toFixed(2));
pdi.Panel1_kva.CH17 = Number.parseFloat(KVA_1_CH17?.toFixed(2));
pdi.Panel1_kva.CH18 = Number.parseFloat(KVA_1_CH18?.toFixed(2));
pdi.Panel1_kva.CH19 = Number.parseFloat(KVA_1_CH19?.toFixed(2));
pdi.Panel1_kva.CH20 = Number.parseFloat(KVA_1_CH20?.toFixed(2));
pdi.Panel1_kva.CH21 = Number.parseFloat(KVA_1_CH21?.toFixed(2));
pdi.Panel1_kva.CH22 = Number.parseFloat(KVA_1_CH22?.toFixed(2));
pdi.Panel1_kva.CH23 = Number.parseFloat(KVA_1_CH23?.toFixed(2));
pdi.Panel1_kva.CH24 = Number.parseFloat(KVA_1_CH24?.toFixed(2));
pdi.Panel1_kva.CH25 = Number.parseFloat(KVA_1_CH25?.toFixed(2));
pdi.Panel1_kva.CH26 = Number.parseFloat(KVA_1_CH26?.toFixed(2));
pdi.Panel1_kva.CH27 = Number.parseFloat(KVA_1_CH27?.toFixed(2));
pdi.Panel1_kva.CH28 = Number.parseFloat(KVA_1_CH28?.toFixed(2));
pdi.Panel1_kva.CH29 = Number.parseFloat(KVA_1_CH29?.toFixed(2));
pdi.Panel1_kva.CH30 = Number.parseFloat(KVA_1_CH30?.toFixed(2));
pdi.Panel1_kva.CH31 = Number.parseFloat(KVA_1_CH31?.toFixed(2));
pdi.Panel1_kva.CH32 = Number.parseFloat(KVA_1_CH32?.toFixed(2));
pdi.Panel1_kva.CH33 = Number.parseFloat(KVA_1_CH33?.toFixed(2));
pdi.Panel1_kva.CH34 = Number.parseFloat(KVA_1_CH34?.toFixed(2));
pdi.Panel1_kva.CH35 = Number.parseFloat(KVA_1_CH35?.toFixed(2));
pdi.Panel1_kva.CH36 = Number.parseFloat(KVA_1_CH36?.toFixed(2));
pdi.Panel1_kva.CH37 = Number.parseFloat(KVA_1_CH37?.toFixed(2));
pdi.Panel1_kva.CH38 = Number.parseFloat(KVA_1_CH38?.toFixed(2));
pdi.Panel1_kva.CH39 = Number.parseFloat(KVA_1_CH39?.toFixed(2));
pdi.Panel1_kva.CH40 = Number.parseFloat(KVA_1_CH40?.toFixed(2));
pdi.Panel1_kva.CH41 = Number.parseFloat(KVA_1_CH41?.toFixed(2));
pdi.Panel1_kva.CH42 = Number.parseFloat(KVA_1_CH42?.toFixed(2));

//DATOS P1 ENERGIA KWH-----------------------------------
pdi.Panel1_kwh.CH1 = Number.parseFloat(KWH_1_CH1?.toFixed(2));
pdi.Panel1_kwh.CH2 = Number.parseFloat(KWH_1_CH2?.toFixed(2));
pdi.Panel1_kwh.CH3 = Number.parseFloat(KWH_1_CH3?.toFixed(2));
pdi.Panel1_kwh.CH4 = Number.parseFloat(KWH_1_CH4?.toFixed(2));
pdi.Panel1_kwh.CH5 = Number.parseFloat(KWH_1_CH5?.toFixed(2));
pdi.Panel1_kwh.CH6 = Number.parseFloat(KWH_1_CH6?.toFixed(2));
pdi.Panel1_kwh.CH7 = Number.parseFloat(KWH_1_CH7?.toFixed(2));
pdi.Panel1_kwh.CH8 = Number.parseFloat(KWH_1_CH8?.toFixed(2));
pdi.Panel1_kwh.CH9 = Number.parseFloat(KWH_1_CH9?.toFixed(2));
pdi.Panel1_kwh.CH10 = Number.parseFloat(KWH_1_CH10?.toFixed(2));
pdi.Panel1_kwh.CH11 = Number.parseFloat(KWH_1_CH11?.toFixed(2));
pdi.Panel1_kwh.CH12 = Number.parseFloat(KWH_1_CH12?.toFixed(2));
pdi.Panel1_kwh.CH13 = Number.parseFloat(KWH_1_CH13?.toFixed(2));
pdi.Panel1_kwh.CH14 = Number.parseFloat(KWH_1_CH14?.toFixed(2));
pdi.Panel1_kwh.CH15 = Number.parseFloat(KWH_1_CH15?.toFixed(2));
pdi.Panel1_kwh.CH16 = Number.parseFloat(KWH_1_CH16?.toFixed(2));
pdi.Panel1_kwh.CH17 = Number.parseFloat(KWH_1_CH17?.toFixed(2));
pdi.Panel1_kwh.CH18 = Number.parseFloat(KWH_1_CH18?.toFixed(2));
pdi.Panel1_kwh.CH19 = Number.parseFloat(KWH_1_CH19?.toFixed(2));
pdi.Panel1_kwh.CH20 = Number.parseFloat(KWH_1_CH20?.toFixed(2));
pdi.Panel1_kwh.CH21 = Number.parseFloat(KWH_1_CH21?.toFixed(2));
pdi.Panel1_kwh.CH22 = Number.parseFloat(KWH_1_CH22?.toFixed(2));
pdi.Panel1_kwh.CH23 = Number.parseFloat(KWH_1_CH23?.toFixed(2));
pdi.Panel1_kwh.CH24 = Number.parseFloat(KWH_1_CH24?.toFixed(2));
pdi.Panel1_kwh.CH25 = Number.parseFloat(KWH_1_CH25?.toFixed(2));
pdi.Panel1_kwh.CH26 = Number.parseFloat(KWH_1_CH26?.toFixed(2));
pdi.Panel1_kwh.CH27 = Number.parseFloat(KWH_1_CH27?.toFixed(2));
pdi.Panel1_kwh.CH28 = Number.parseFloat(KWH_1_CH28?.toFixed(2));
pdi.Panel1_kwh.CH29 = Number.parseFloat(KWH_1_CH29?.toFixed(2));
pdi.Panel1_kwh.CH30 = Number.parseFloat(KWH_1_CH30?.toFixed(2));
pdi.Panel1_kwh.CH31 = Number.parseFloat(KWH_1_CH31?.toFixed(2));
pdi.Panel1_kwh.CH32 = Number.parseFloat(KWH_1_CH32?.toFixed(2));
pdi.Panel1_kwh.CH33 = Number.parseFloat(KWH_1_CH33?.toFixed(2));
pdi.Panel1_kwh.CH34 = Number.parseFloat(KWH_1_CH34?.toFixed(2));
pdi.Panel1_kwh.CH35 = Number.parseFloat(KWH_1_CH35?.toFixed(2));
pdi.Panel1_kwh.CH36 = Number.parseFloat(KWH_1_CH36?.toFixed(2));
pdi.Panel1_kwh.CH37 = Number.parseFloat(KWH_1_CH37?.toFixed(2));
pdi.Panel1_kwh.CH38 = Number.parseFloat(KWH_1_CH38?.toFixed(2));
pdi.Panel1_kwh.CH39 = Number.parseFloat(KWH_1_CH39?.toFixed(2));
pdi.Panel1_kwh.CH40 = Number.parseFloat(KWH_1_CH40?.toFixed(2));
pdi.Panel1_kwh.CH41 = Number.parseFloat(KWH_1_CH41?.toFixed(2));
pdi.Panel1_kwh.CH42 = Number.parseFloat(KWH_1_CH42?.toFixed(2));

//CALCULOS CORRIENTE PANEL 1-------------------------------------
let Ap1CH1 = (KVA_1_CH1*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH1 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH1 = Number.parseFloat(Ap1CH1.toFixed(2));
    }
let Ap1CH2 = (KVA_1_CH2*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH2 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH2 = Number.parseFloat(Ap1CH2.toFixed(2));
    }
let Ap1CH3 = (KVA_1_CH3*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH3 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH3 = Number.parseFloat(Ap1CH3.toFixed(2));
    }
let Ap1CH4 = (KVA_1_CH4*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH1 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH4 = Number.parseFloat(Ap1CH4.toFixed(2));
    }
let Ap1CH5 = (KVA_1_CH5*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH2 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH5 = Number.parseFloat(Ap1CH5.toFixed(2));
    }
let Ap1CH6 = (KVA_1_CH6*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH3 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH6 = Number.parseFloat(Ap1CH6.toFixed(2));
    }
let Ap1CH7 = (KVA_1_CH7*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH1 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH7 = Number.parseFloat(Ap1CH7.toFixed(2));
    }
let Ap1CH8 = (KVA_1_CH8*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH2 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH8 = Number.parseFloat(Ap1CH8.toFixed(2));
    }
let Ap1CH9 = (KVA_1_CH9*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH9 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH9 = Number.parseFloat(Ap1CH9.toFixed(2));
    }
let Ap1CH10 = (KVA_1_CH10*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH10 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH10 = Number.parseFloat(Ap1CH10.toFixed(2));
    }
let Ap1CH11 = (KVA_1_CH11*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH11 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH11 = Number.parseFloat(Ap1CH11.toFixed(2));
    }
let Ap1CH12 = (KVA_1_CH12*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH12 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH12 = Number.parseFloat(Ap1CH12.toFixed(2));
    }
let Ap1CH13 = (KVA_1_CH13*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH13 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH13 = Number.parseFloat(Ap1CH13.toFixed(2));
    }
let Ap1CH14 = (KVA_1_CH14*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH14 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH14 = Number.parseFloat(Ap1CH14.toFixed(2));
    }
let Ap1CH15 = (KVA_1_CH15*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH15 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH15 = Number.parseFloat(Ap1CH15.toFixed(2));
    }
let Ap1CH16 = (KVA_1_CH16*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH16 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH16 = Number.parseFloat(Ap1CH16.toFixed(2));
    }
let Ap1CH17 = (KVA_1_CH17*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH17 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH17 = Number.parseFloat(Ap1CH17.toFixed(2));
    }
let Ap1CH18 = (KVA_1_CH18*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH18 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH18 = Number.parseFloat(Ap1CH18.toFixed(2));
    }
let Ap1CH19 = (KVA_1_CH19*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH19 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH19 = Number.parseFloat(Ap1CH19.toFixed(2));
    }
let Ap1CH20 = (KVA_1_CH5*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH20 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH20 = Number.parseFloat(Ap1CH20.toFixed(2));
    }
let Ap1CH21 = (KVA_1_CH21*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH21 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH21 = Number.parseFloat(Ap1CH21.toFixed(2));
    }
let Ap1CH22 = (KVA_1_CH22*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH22 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH22 = Number.parseFloat(Ap1CH22.toFixed(2));
    }
let Ap1CH23 = (KVA_1_CH23*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH23 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH23 = Number.parseFloat(Ap1CH23.toFixed(2));
    }
let Ap1CH24 = (KVA_1_CH24*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH24 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH24 = Number.parseFloat(Ap1CH24.toFixed(2));
    }
let Ap1CH25 = (KVA_1_CH25*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH25 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH25 = Number.parseFloat(Ap1CH25.toFixed(2));
    }
let Ap1CH26 = (KVA_1_CH26*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH26 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH26 = Number.parseFloat(Ap1CH26.toFixed(2));
    }
let Ap1CH27 = (KVA_1_CH27*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH27 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH27 = Number.parseFloat(Ap1CH27.toFixed(2));
    }
let Ap1CH28 = (KVA_1_CH28*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH28 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH28 = Number.parseFloat(Ap1CH28.toFixed(2));
    }
let Ap1CH29 = (KVA_1_CH29*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH29 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH29 = Number.parseFloat(Ap1CH29.toFixed(2));
    }
let Ap1CH30 = (KVA_1_CH30*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH30 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH30 = Number.parseFloat(Ap1CH30.toFixed(2));
    }
let Ap1CH31 = (KVA_1_CH31*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH31 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH31 = Number.parseFloat(Ap1CH31.toFixed(2));
    }
let Ap1CH32 = (KVA_1_CH32*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH32 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH32 = Number.parseFloat(Ap1CH32.toFixed(2));
    }
let Ap1CH33 = (KVA_1_CH33*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH3!== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH33 = Number.parseFloat(Ap1CH33.toFixed(2));
    }
let Ap1CH34 = (KVA_1_CH34*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH34 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH34 = Number.parseFloat(Ap1CH34.toFixed(2));
    }
let Ap1CH35 = (KVA_1_CH35*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH35 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH35 = Number.parseFloat(Ap1CH35.toFixed(2));
    }
let Ap1CH36 = (KVA_1_CH36*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH36 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH36 = Number.parseFloat(Ap1CH36.toFixed(2));
    }
let Ap1CH37 = (KVA_1_CH37*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH37 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH37 = Number.parseFloat(Ap1CH37.toFixed(2));
    }
let Ap1CH38 = (KVA_1_CH38*1000) / (OUT1_AB_VOL / 1.732)
    if (KVA_1_CH38 !== undefined && OUT1_AB_VOL !== undefined) {
        pdi.Panel1_Amps.CH38 = Number.parseFloat(Ap1CH38.toFixed(2));
    }
let Ap1CH39 = (KVA_1_CH39*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH39 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH39 = Number.parseFloat(Ap1CH39.toFixed(2));
    }
let Ap1CH40 = (KVA_1_CH40*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH40 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH40 = Number.parseFloat(Ap1CH40.toFixed(2));
    }
let Ap1CH41 = (KVA_1_CH41*1000) / (OUT1_BC_VOL / 1.732)
    if (KVA_1_CH41 !== undefined && OUT1_BC_VOL !== undefined) {
        pdi.Panel1_Amps.CH41 = Number.parseFloat(Ap1CH41.toFixed(2));
    }
let Ap1CH42 = (KVA_1_CH42*1000) / (OUT1_CA_VOL / 1.732)
    if (KVA_1_CH42 !== undefined && OUT1_CA_VOL !== undefined) {
        pdi.Panel1_Amps.CH42 = Number.parseFloat(Ap1CH42.toFixed(2));
    }

    //DATOS P2 ENERGIA KWH-----------------------------------
    pdi.Panel2_kva.CH1 = Number.parseFloat(KVA_2_CH1?.toFixed(2));
    pdi.Panel2_kva.CH2 = Number.parseFloat(KVA_2_CH2?.toFixed(2));
    pdi.Panel2_kva.CH3 = Number.parseFloat(KVA_2_CH3?.toFixed(2));
    pdi.Panel2_kva.CH4 = Number.parseFloat(KVA_2_CH4?.toFixed(2));
    pdi.Panel2_kva.CH5 = Number.parseFloat(KVA_2_CH5?.toFixed(2));
    pdi.Panel2_kva.CH6 = Number.parseFloat(KVA_2_CH6?.toFixed(2));
    pdi.Panel2_kva.CH7 = Number.parseFloat(KVA_2_CH7?.toFixed(2));
    pdi.Panel2_kva.CH8 = Number.parseFloat(KVA_2_CH8?.toFixed(2));
    pdi.Panel2_kva.CH9 = Number.parseFloat(KVA_2_CH9?.toFixed(2));
    pdi.Panel2_kva.CH10 = Number.parseFloat(KVA_2_CH10?.toFixed(2));
    pdi.Panel2_kva.CH11 = Number.parseFloat(KVA_2_CH11?.toFixed(2));
    pdi.Panel2_kva.CH12 = Number.parseFloat(KVA_2_CH12?.toFixed(2));
    pdi.Panel2_kva.CH13 = Number.parseFloat(KVA_2_CH13?.toFixed(2));
    pdi.Panel2_kva.CH14 = Number.parseFloat(KVA_2_CH14?.toFixed(2));
    pdi.Panel2_kva.CH15 = Number.parseFloat(KVA_2_CH15?.toFixed(2));
    pdi.Panel2_kva.CH16 = Number.parseFloat(KVA_2_CH16?.toFixed(2));
    pdi.Panel2_kva.CH17 = Number.parseFloat(KVA_2_CH17?.toFixed(2));
    pdi.Panel2_kva.CH18 = Number.parseFloat(KVA_2_CH18?.toFixed(2));
    pdi.Panel2_kva.CH19 = Number.parseFloat(KVA_2_CH19?.toFixed(2));
    pdi.Panel2_kva.CH20 = Number.parseFloat(KVA_2_CH20?.toFixed(2));
    pdi.Panel2_kva.CH21 = Number.parseFloat(KVA_2_CH21?.toFixed(2));
    pdi.Panel2_kva.CH22 = Number.parseFloat(KVA_2_CH22?.toFixed(2));
    pdi.Panel2_kva.CH23 = Number.parseFloat(KVA_2_CH23?.toFixed(2));
    pdi.Panel2_kva.CH24 = Number.parseFloat(KVA_2_CH24?.toFixed(2));
    pdi.Panel2_kva.CH25 = Number.parseFloat(KVA_2_CH25?.toFixed(2));
    pdi.Panel2_kva.CH26 = Number.parseFloat(KVA_2_CH26?.toFixed(2));
    pdi.Panel2_kva.CH27 = Number.parseFloat(KVA_2_CH27?.toFixed(2));
    pdi.Panel2_kva.CH28 = Number.parseFloat(KVA_2_CH28?.toFixed(2));
    pdi.Panel2_kva.CH29 = Number.parseFloat(KVA_2_CH29?.toFixed(2));
    pdi.Panel2_kva.CH30 = Number.parseFloat(KVA_2_CH30?.toFixed(2));
    pdi.Panel2_kva.CH31 = Number.parseFloat(KVA_2_CH31?.toFixed(2));
    pdi.Panel2_kva.CH32 = Number.parseFloat(KVA_2_CH32?.toFixed(2));
    pdi.Panel2_kva.CH33 = Number.parseFloat(KVA_2_CH33?.toFixed(2));
    pdi.Panel2_kva.CH34 = Number.parseFloat(KVA_2_CH34?.toFixed(2));
    pdi.Panel2_kva.CH35 = Number.parseFloat(KVA_2_CH35?.toFixed(2));
    pdi.Panel2_kva.CH36 = Number.parseFloat(KVA_2_CH36?.toFixed(2));
    pdi.Panel2_kva.CH37 = Number.parseFloat(KVA_2_CH37?.toFixed(2));
    pdi.Panel2_kva.CH38 = Number.parseFloat(KVA_2_CH38?.toFixed(2));
    pdi.Panel2_kva.CH39 = Number.parseFloat(KVA_2_CH39?.toFixed(2));
    pdi.Panel2_kva.CH40 = Number.parseFloat(KVA_2_CH40?.toFixed(2));
    pdi.Panel2_kva.CH41 = Number.parseFloat(KVA_2_CH41?.toFixed(2));
    pdi.Panel2_kva.CH42 = Number.parseFloat(KVA_2_CH42?.toFixed(2));
    
    //DATOS P2 ENERGIA KWH-----------------------------------
    pdi.Panel2_kwh.CH1 = Number.parseFloat(KWH_2_CH1?.toFixed(2));
    pdi.Panel2_kwh.CH2 = Number.parseFloat(KWH_2_CH2?.toFixed(2));
    pdi.Panel2_kwh.CH3 = Number.parseFloat(KWH_2_CH3?.toFixed(2));
    pdi.Panel2_kwh.CH4 = Number.parseFloat(KWH_2_CH4?.toFixed(2));
    pdi.Panel2_kwh.CH5 = Number.parseFloat(KWH_2_CH5?.toFixed(2));
    pdi.Panel2_kwh.CH6 = Number.parseFloat(KWH_2_CH6?.toFixed(2));
    pdi.Panel2_kwh.CH7 = Number.parseFloat(KWH_2_CH7?.toFixed(2));
    pdi.Panel2_kwh.CH8 = Number.parseFloat(KWH_2_CH8?.toFixed(2));
    pdi.Panel2_kwh.CH9 = Number.parseFloat(KWH_2_CH9?.toFixed(2));
    pdi.Panel2_kwh.CH10 = Number.parseFloat(KWH_2_CH10?.toFixed(2));
    pdi.Panel2_kwh.CH11 = Number.parseFloat(KWH_2_CH11?.toFixed(2));
    pdi.Panel2_kwh.CH12 = Number.parseFloat(KWH_2_CH12?.toFixed(2));
    pdi.Panel2_kwh.CH13 = Number.parseFloat(KWH_2_CH13?.toFixed(2));
    pdi.Panel2_kwh.CH14 = Number.parseFloat(KWH_2_CH14?.toFixed(2));
    pdi.Panel2_kwh.CH15 = Number.parseFloat(KWH_2_CH15?.toFixed(2));
    pdi.Panel2_kwh.CH16 = Number.parseFloat(KWH_2_CH16?.toFixed(2));
    pdi.Panel2_kwh.CH17 = Number.parseFloat(KWH_2_CH17?.toFixed(2));
    pdi.Panel2_kwh.CH18 = Number.parseFloat(KWH_2_CH18?.toFixed(2));
    pdi.Panel2_kwh.CH19 = Number.parseFloat(KWH_2_CH19?.toFixed(2));
    pdi.Panel2_kwh.CH20 = Number.parseFloat(KWH_2_CH20?.toFixed(2));
    pdi.Panel2_kwh.CH21 = Number.parseFloat(KWH_2_CH21?.toFixed(2));
    pdi.Panel2_kwh.CH22 = Number.parseFloat(KWH_2_CH22?.toFixed(2));
    pdi.Panel2_kwh.CH23 = Number.parseFloat(KWH_2_CH23?.toFixed(2));
    pdi.Panel2_kwh.CH24 = Number.parseFloat(KWH_2_CH24?.toFixed(2));
    pdi.Panel2_kwh.CH25 = Number.parseFloat(KWH_2_CH25?.toFixed(2));
    pdi.Panel2_kwh.CH26 = Number.parseFloat(KWH_2_CH26?.toFixed(2));
    pdi.Panel2_kwh.CH27 = Number.parseFloat(KWH_2_CH27?.toFixed(2));
    pdi.Panel2_kwh.CH28 = Number.parseFloat(KWH_2_CH28?.toFixed(2));
    pdi.Panel2_kwh.CH29 = Number.parseFloat(KWH_2_CH29?.toFixed(2));
    pdi.Panel2_kwh.CH30 = Number.parseFloat(KWH_2_CH30?.toFixed(2));
    pdi.Panel2_kwh.CH31 = Number.parseFloat(KWH_2_CH31?.toFixed(2));
    pdi.Panel2_kwh.CH32 = Number.parseFloat(KWH_2_CH32?.toFixed(2));
    pdi.Panel2_kwh.CH33 = Number.parseFloat(KWH_2_CH33?.toFixed(2));
    pdi.Panel2_kwh.CH34 = Number.parseFloat(KWH_2_CH34?.toFixed(2));
    pdi.Panel2_kwh.CH35 = Number.parseFloat(KWH_2_CH35?.toFixed(2));
    pdi.Panel2_kwh.CH36 = Number.parseFloat(KWH_2_CH36?.toFixed(2));
    pdi.Panel2_kwh.CH37 = Number.parseFloat(KWH_2_CH37?.toFixed(2));
    pdi.Panel2_kwh.CH38 = Number.parseFloat(KWH_2_CH38?.toFixed(2));
    pdi.Panel2_kwh.CH39 = Number.parseFloat(KWH_2_CH39?.toFixed(2));
    pdi.Panel2_kwh.CH40 = Number.parseFloat(KWH_2_CH40?.toFixed(2));
    pdi.Panel2_kwh.CH41 = Number.parseFloat(KWH_2_CH41?.toFixed(2));
    pdi.Panel2_kwh.CH42 = Number.parseFloat(KWH_2_CH42?.toFixed(2));
    
    //CALCULOS CORRIENTE PANEL 2-------------------------------------
    let Ap2CH1 = (KVA_2_CH1*1000) / (OUT1_AB_VOL / 1.732)
        if (KVA_2_CH1 !== undefined && OUT1_AB_VOL !== undefined) {
            pdi.Panel2_Amps.CH1 = Number.parseFloat(Ap2CH1.toFixed(2));
        }
    let Ap2CH2 = (KVA_2_CH2*1000) / (OUT1_BC_VOL / 1.732)
        if (KVA_2_CH2 !== undefined && OUT1_BC_VOL !== undefined) {
            pdi.Panel2_Amps.CH2 = Number.parseFloat(Ap2CH2.toFixed(2));
        }
    let Ap2CH3 = (KVA_2_CH3*1000) / (OUT1_CA_VOL / 1.732)
        if (KVA_2_CH3 !== undefined && OUT1_CA_VOL !== undefined) {
            pdi.Panel2_Amps.CH3 = Number.parseFloat(Ap2CH3.toFixed(2));
        }
    let Ap2CH4 = (KVA_2_CH4*1000) / (OUT1_AB_VOL / 1.732)
        if (KVA_2_CH1 !== undefined && OUT1_AB_VOL !== undefined) {
            pdi.Panel2_Amps.CH4 = Number.parseFloat(Ap2CH4.toFixed(2));
        }
    let Ap2CH5 = (KVA_2_CH5*1000) / (OUT1_BC_VOL / 1.732)
        if (KVA_2_CH2 !== undefined && OUT1_BC_VOL !== undefined) {
            pdi.Panel2_Amps.CH5 = Number.parseFloat(Ap2CH5.toFixed(2));
        }
    let Ap2CH6 = (KVA_2_CH6*1000) / (OUT1_CA_VOL / 1.732)
        if (KVA_2_CH3 !== undefined && OUT1_CA_VOL !== undefined) {
            pdi.Panel2_Amps.CH6 = Number.parseFloat(Ap2CH6.toFixed(2));
        }
    let Ap2CH7 = (KVA_2_CH7*1000) / (OUT1_AB_VOL / 1.732)
        if (KVA_2_CH1 !== undefined && OUT1_AB_VOL !== undefined) {
            pdi.Panel2_Amps.CH7 = Number.parseFloat(Ap2CH7.toFixed(2));
        }
    let Ap2CH8 = (KVA_2_CH8*1000) / (OUT1_BC_VOL / 1.732)
        if (KVA_2_CH2 !== undefined && OUT1_BC_VOL !== undefined) {
            pdi.Panel2_Amps.CH8 = Number.parseFloat(Ap2CH8.toFixed(2));
        }
    let Ap2CH9 = (KVA_2_CH9*1000) / (OUT1_CA_VOL / 1.732)
        if (KVA_2_CH9 !== undefined && OUT1_CA_VOL !== undefined) {
            pdi.Panel2_Amps.CH9 = Number.parseFloat(Ap2CH9.toFixed(2));
        }
    let Ap2CH10 = (KVA_2_CH10*1000) / (OUT1_AB_VOL / 1.732)
        if (KVA_2_CH10 !== undefined && OUT1_AB_VOL !== undefined) {
            pdi.Panel2_Amps.CH10 = Number.parseFloat(Ap2CH10.toFixed(2));
        }
    let Ap2CH11 = (KVA_2_CH11*1000) / (OUT1_BC_VOL / 1.732)
        if (KVA_2_CH11 !== undefined && OUT1_BC_VOL !== undefined) {
            pdi.Panel2_Amps.CH11 = Number.parseFloat(Ap2CH11.toFixed(2));
        }
    let Ap2CH12 = (KVA_2_CH12*1000) / (OUT1_CA_VOL / 1.732)
        if (KVA_2_CH12 !== undefined && OUT1_CA_VOL !== undefined) {
            pdi.Panel2_Amps.CH12 = Number.parseFloat(Ap2CH12.toFixed(2));
        }
    let Ap2CH13 = (KVA_2_CH13*1000) / (OUT1_AB_VOL / 1.732)
        if (KVA_2_CH13 !== undefined && OUT1_AB_VOL !== undefined) {
            pdi.Panel2_Amps.CH13 = Number.parseFloat(Ap2CH13.toFixed(2));
        }
    let Ap2CH14 = (KVA_2_CH14*1000) / (OUT1_BC_VOL / 1.732)
        if (KVA_2_CH14 !== undefined && OUT1_BC_VOL !== undefined) {
            pdi.Panel2_Amps.CH14 = Number.parseFloat(Ap2CH14.toFixed(2));
        }
    let Ap2CH15 = (KVA_2_CH15*1000) / (OUT1_CA_VOL / 1.732)
        if (KVA_2_CH15 !== undefined && OUT1_CA_VOL !== undefined) {
            pdi.Panel2_Amps.CH15 = Number.parseFloat(Ap2CH15.toFixed(2));
        }
    let Ap2CH16 = (KVA_2_CH16*1000) / (OUT1_AB_VOL / 1.732)
        if (KVA_2_CH16 !== undefined && OUT1_AB_VOL !== undefined) {
            pdi.Panel2_Amps.CH16 = Number.parseFloat(Ap2CH16.toFixed(2));
        }
    let Ap2CH17 = (KVA_2_CH17*1000) / (OUT1_BC_VOL / 1.732)
        if (KVA_2_CH17 !== undefined && OUT1_BC_VOL !== undefined) {
            pdi.Panel2_Amps.CH17 = Number.parseFloat(Ap2CH17.toFixed(2));
        }
    let Ap2CH18 = (KVA_2_CH18*1000) / (OUT1_CA_VOL / 1.732)
        if (KVA_2_CH18 !== undefined && OUT1_CA_VOL !== undefined) {
            pdi.Panel2_Amps.CH18 = Number.parseFloat(Ap2CH18.toFixed(2));
        }
    let Ap2CH19 = (KVA_2_CH19*1000) / (OUT1_AB_VOL / 1.732)
        if (KVA_2_CH19 !== undefined && OUT1_AB_VOL !== undefined) {
            pdi.Panel2_Amps.CH19 = Number.parseFloat(Ap2CH19.toFixed(2));
        }
    let Ap2CH20 = (KVA_2_CH5*1000) / (OUT1_BC_VOL / 1.732)
        if (KVA_2_CH20 !== undefined && OUT1_BC_VOL !== undefined) {
            pdi.Panel2_Amps.CH20 = Number.parseFloat(Ap2CH20.toFixed(2));
        }
    let Ap2CH21 = (KVA_2_CH21*1000) / (OUT1_CA_VOL / 1.732)
        if (KVA_2_CH21 !== undefined && OUT1_CA_VOL !== undefined) {
            pdi.Panel2_Amps.CH21 = Number.parseFloat(Ap2CH21.toFixed(2));
        }
    let Ap2CH22 = (KVA_2_CH22*1000) / (OUT1_AB_VOL / 1.732)
        if (KVA_2_CH22 !== undefined && OUT1_AB_VOL !== undefined) {
            pdi.Panel2_Amps.CH22 = Number.parseFloat(Ap2CH22.toFixed(2));
        }
    let Ap2CH23 = (KVA_2_CH23*1000) / (OUT1_BC_VOL / 1.732)
        if (KVA_2_CH23 !== undefined && OUT1_BC_VOL !== undefined) {
            pdi.Panel2_Amps.CH23 = Number.parseFloat(Ap2CH23.toFixed(2));
        }
    let Ap2CH24 = (KVA_2_CH24*1000) / (OUT1_CA_VOL / 1.732)
        if (KVA_2_CH24 !== undefined && OUT1_CA_VOL !== undefined) {
            pdi.Panel2_Amps.CH24 = Number.parseFloat(Ap2CH24.toFixed(2));
        }
    let Ap2CH25 = (KVA_2_CH25*1000) / (OUT1_AB_VOL / 1.732)
        if (KVA_2_CH25 !== undefined && OUT1_AB_VOL !== undefined) {
            pdi.Panel2_Amps.CH25 = Number.parseFloat(Ap2CH25.toFixed(2));
        }
    let Ap2CH26 = (KVA_2_CH26*1000) / (OUT1_BC_VOL / 1.732)
        if (KVA_2_CH26 !== undefined && OUT1_BC_VOL !== undefined) {
            pdi.Panel2_Amps.CH26 = Number.parseFloat(Ap2CH26.toFixed(2));
        }
    let Ap2CH27 = (KVA_2_CH27*1000) / (OUT1_CA_VOL / 1.732)
        if (KVA_2_CH27 !== undefined && OUT1_CA_VOL !== undefined) {
            pdi.Panel2_Amps.CH27 = Number.parseFloat(Ap2CH27.toFixed(2));
        }
    let Ap2CH28 = (KVA_2_CH28*1000) / (OUT1_AB_VOL / 1.732)
        if (KVA_2_CH28 !== undefined && OUT1_AB_VOL !== undefined) {
            pdi.Panel2_Amps.CH28 = Number.parseFloat(Ap2CH28.toFixed(2));
        }
    let Ap2CH29 = (KVA_2_CH29*1000) / (OUT1_BC_VOL / 1.732)
        if (KVA_2_CH29 !== undefined && OUT1_BC_VOL !== undefined) {
            pdi.Panel2_Amps.CH29 = Number.parseFloat(Ap2CH29.toFixed(2));
        }
    let Ap2CH30 = (KVA_2_CH30*1000) / (OUT1_CA_VOL / 1.732)
        if (KVA_2_CH30 !== undefined && OUT1_CA_VOL !== undefined) {
            pdi.Panel2_Amps.CH30 = Number.parseFloat(Ap2CH30.toFixed(2));
        }
    let Ap2CH31 = (KVA_2_CH31*1000) / (OUT1_CA_VOL / 1.732)
        if (KVA_2_CH31 !== undefined && OUT1_CA_VOL !== undefined) {
            pdi.Panel2_Amps.CH31 = Number.parseFloat(Ap2CH31.toFixed(2));
        }
    let Ap2CH32 = (KVA_2_CH32*1000) / (OUT1_AB_VOL / 1.732)
        if (KVA_2_CH32 !== undefined && OUT1_AB_VOL !== undefined) {
            pdi.Panel2_Amps.CH32 = Number.parseFloat(Ap2CH32.toFixed(2));
        }
    let Ap2CH33 = (KVA_2_CH33*1000) / (OUT1_BC_VOL / 1.732)
        if (KVA_2_CH3!== undefined && OUT1_BC_VOL !== undefined) {
            pdi.Panel2_Amps.CH33 = Number.parseFloat(Ap2CH33.toFixed(2));
        }
    let Ap2CH34 = (KVA_2_CH34*1000) / (OUT1_CA_VOL / 1.732)
        if (KVA_2_CH34 !== undefined && OUT1_CA_VOL !== undefined) {
            pdi.Panel2_Amps.CH34 = Number.parseFloat(Ap2CH34.toFixed(2));
        }
    let Ap2CH35 = (KVA_2_CH35*1000) / (OUT1_AB_VOL / 1.732)
        if (KVA_2_CH35 !== undefined && OUT1_AB_VOL !== undefined) {
            pdi.Panel2_Amps.CH35 = Number.parseFloat(Ap2CH35.toFixed(2));
        }
    let Ap2CH36 = (KVA_2_CH36*1000) / (OUT1_BC_VOL / 1.732)
        if (KVA_2_CH36 !== undefined && OUT1_BC_VOL !== undefined) {
            pdi.Panel2_Amps.CH36 = Number.parseFloat(Ap2CH36.toFixed(2));
        }
    let Ap2CH37 = (KVA_2_CH37*1000) / (OUT1_CA_VOL / 1.732)
        if (KVA_2_CH37 !== undefined && OUT1_CA_VOL !== undefined) {
            pdi.Panel2_Amps.CH37 = Number.parseFloat(Ap2CH37.toFixed(2));
        }
    let Ap2CH38 = (KVA_2_CH38*1000) / (OUT1_AB_VOL / 1.732)
        if (KVA_2_CH38 !== undefined && OUT1_AB_VOL !== undefined) {
            pdi.Panel2_Amps.CH38 = Number.parseFloat(Ap2CH38.toFixed(2));
        }
    let Ap2CH39 = (KVA_2_CH39*1000) / (OUT1_BC_VOL / 1.732)
        if (KVA_2_CH39 !== undefined && OUT1_BC_VOL !== undefined) {
            pdi.Panel2_Amps.CH39 = Number.parseFloat(Ap2CH39.toFixed(2));
        }
    let Ap2CH40 = (KVA_2_CH40*1000) / (OUT1_CA_VOL / 1.732)
        if (KVA_2_CH40 !== undefined && OUT1_CA_VOL !== undefined) {
            pdi.Panel2_Amps.CH40 = Number.parseFloat(Ap2CH40.toFixed(2));
        }
    let Ap2CH41 = (KVA_2_CH41*1000) / (OUT1_BC_VOL / 1.732)
        if (KVA_2_CH41 !== undefined && OUT1_BC_VOL !== undefined) {
            pdi.Panel2_Amps.CH41 = Number.parseFloat(Ap2CH41.toFixed(2));
        }
    let Ap2CH42 = (KVA_2_CH42*1000) / (OUT1_CA_VOL / 1.732)
        if (KVA_2_CH42 !== undefined && OUT1_CA_VOL !== undefined) {
            pdi.Panel2_Amps.CH42 = Number.parseFloat(Ap2CH42.toFixed(2));
        }

//ESTADOS
pdi.Estado.Alarma = GEN_ALM === 1? estadosStyles.on : estadosStyles.off;
pdi.Estado.Status = MODBUS_ST  === 1? estadosStyles.off : estadosStyles.on1;
pdi.Estado.Status_ON = MODBUS_ST  === 1? estadosStyles.off : estadosStyles.on2;


//INTERPOLACION DE VARIABLE
let variableNombre1 = replaceVariables('$EQUIPO1');
//let variableNombre2 = replaceVariables('$EQUIPO2');
pdi.DatosGenerales.Nombre = variableNombre1 !==''? variableNombre1: options.nombre;
//pdi.DatosGenerales.Nombre = variableNombre2 !==''? variableNombre2: options.nombre;
    //pdi.DatosGenerales.Nombre1 = variableNombre2 !==''? variableNombre2: options.nombre1;
    //pdi.DatosGenerales.Nombre1 = variableNombre2 !==''? variableNombre2: options.nombre1;


return pdi;

};

export default dataPdi;