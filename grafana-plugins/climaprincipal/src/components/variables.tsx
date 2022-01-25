

import React from 'react';

type ParametrosSIS1 = {
    TsuminEa3: number; TretEa3: number;
    TsuminEa4: number; TretEa4: number;
    TsuminS1: number; TretS1: number; 
    LoadB2_3: number; LoadB2_4: number;
    TempSumPrimS1: number; TempSumSecS1: number; TempTanqueS1: number; TempRetS1: number;
    VinUPSCHI_01A: number; VoutUPSCHI_01A: number; PotUPSCHI_01A: number;
};
type ParametrosSIS2 = {
    TsuminEa1: number; TretEa1: number;
    TsuminEa2: number; TretEa2: number;
    TsuminS2: number; TretS2: number; 
    LoadB2_1: number; LoadB2_2: number;
    TempSumPrimS2: number; TempSumSecS2: number; TempTanqueS2: number; TempRetS2: number;
    VinUPSCHI_02A: number; VoutUPSCHI_02A: number; PotUPSCHI_02A: number;
};
type EstadosSIS1 = {
    SIS1habilitado: string;
    Chiller_1_ea_3: string;
    Chiller_1_ea_4: string;
    Bomba_1_b1_4: string;
    Bomba_1_b1_5: string;
    Bomba_1_b1_6: string;
    Bomba_1_b2_3: string;
    Bomba_1_b2_4: string;
    S1UMA1: string; S1UMA2: string; S1UMA3: string; S1UMA4: string; S1UMA5: string; S1UMA6: string;
    S1UMA7: string; S1UMA8: string; S1UMA9: string; S1UMA10: string; S1UMA11: string; S1UMA12: string;
    R1UMA1: string; R1UMA2: string; R1UMA3: string; R1UMA4: string; R1UMA5: string; R1UMA6: string;
    R1UMA7: string; R1UMA8: string; R1UMA9: string; R1UMA10: string; R1UMA11: string; R1UMA12: string;
    VAux1S1: string;
    VAux2S1: string;
};
type EstadosSIS2 = {
    SIS2habilitado: string;
    Chiller_1_ea_1: string;
    Chiller_1_ea_2: string;
    Bomba_1_b1_1: string;
    Bomba_1_b1_2: string;
    Bomba_1_b1_3: string;
    Bomba_1_b2_1: string;
    Bomba_1_b2_2: string;
    S2UMA1: string; S2UMA2: string; S2UMA3: string; S2UMA4: string; S2UMA5: string; S2UMA6: string;
    S2UMA7: string; S2UMA8: string; S2UMA9: string; S2UMA10: string; S2UMA11: string; S2UMA12: string;
    R2UMA1: string; R2UMA2: string; R2UMA3: string; R2UMA4: string; R2UMA5: string; R2UMA6: string;
    R2UMA7: string; R2UMA8: string; R2UMA9: string; R2UMA10: string; R2UMA11: string; R2UMA12: string;
    VAux1S2: string;
    VAux2S2: string;
};
type AlarmasSIS1 = {
  B1_4: string;  B1_5: string;  B1_6: string;  B2_3: string;  B2_4: string;
  alEA3: string; alEA4: string; mantEA3: string; mantEA4: string;
  SIS1alarma: string;
};
type AlarmasSIS2 = {
  B1_1: string;  B1_2: string;  B1_3: string;  B2_1: string;  B2_2: string;
  alEA1: string; alEA2: string; mantEA1: string; mantEA2: string;
  SIS2alarma: string;
};
type Tuberias = {
  B1_1: string;  B1_2: string;  B1_3: string;  B2_1: string;  B2_2: string;
  VAux1S2: string; VAux2S2: string;
  B1_4: string;  B1_5: string;  B1_6: string;  B2_3: string;  B2_4: string;
  VAux1S1: string; VAux2S1: string;

};
export interface DataClima {
    ParametrosSIS1: ParametrosSIS1;
    ParametrosSIS2: ParametrosSIS2;
    EstadosSIS1: EstadosSIS1;
    EstadosSIS2: EstadosSIS2;
    AlarmasSIS1: AlarmasSIS1;
    AlarmasSIS2: AlarmasSIS2;
    Tuberias: Tuberias;
};

export const Variables = ({ ParametrosSIS1, ParametrosSIS2, EstadosSIS1, EstadosSIS2, AlarmasSIS1, AlarmasSIS2, Tuberias}: DataClima) =>{
  return (
    <g id="layer5">
    <path
      id="t9-2"
      fill="#0066FF"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M28.805 118.72H42.044V121.7493H28.805z"
    />
    <path
      id="rect2643-8-6-9"
      transform="matrix(.41727 0 0 .28646 10.699 107.07)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-3)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={2.0562}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9"
      fill="#0066FF"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M27.536 52.918H41.969V55.9473H27.536z"
    />
    <path
      id="rect2643-8-6"
      transform="matrix(.43195 0 0 .28646 8.858 41.262)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={2.0456}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-2-9"
      transform="scale(-1 1)"
      fill="#0066FF"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-480.88 118.72H-467.544V121.7493H-480.88z"
    />
    <path
      id="rect2643-8-6-9-07"
      transform="matrix(-.4203 0 0 .28646 499.12 107.06)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-3-6)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={2.0487}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-63"
      transform="scale(-1 1)"
      fill="#0066FF"
      opacity={0.768} 
      paintOrder="markers fill stroke"
      d="M-482.06 52.917H-467.492V55.9463H-482.06z"
    />
    <path
      id="rect2643-8-6-7"
      transform="matrix(-.436 0 0 .28646 500.91 41.261)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-32)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={2.0361}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <text
      id="tret_chill1"
      transform="scale(.98412 1.0161)"
      x={49.904591}
      y={43.160446}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5px"
      letterSpacing={0}
      strokeWidth={0.69426}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-1"
        x={49.904591}
        y={43.160446}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5px"
        strokeWidth={0.69426}
      >
        <tspan
          id="tspan1097"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5px"
          strokeWidth={0.69426}
        >
          {ParametrosSIS1.TretEa3} °C
        </tspan>
      </tspan>
    </text>
    <text
      id="tsum_chill1"
      transform="scale(.98412 1.0161)"
      x={49.904591}
      y={38.107994}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5px"
      letterSpacing={0}
      strokeWidth={0.64276}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-8"
        x={49.904591}
        y={38.107994}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5px"
        strokeWidth={0.64276}
      >
        <tspan
          id="tspan1020-3"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5px"
          strokeWidth={0.64276}
        >
          {ParametrosSIS1.TsuminEa3} °C
        </tspan>
      </tspan>
    </text>
    <text
      id="vin_ups"
      transform="scale(1.0508 .95163)"
      x={71.923195}
      y={259.19669}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#00aad4"
      fontFamily="Franklin Gothic Medium"
      fontSize="7.5px"
      letterSpacing={0}
      strokeWidth={0.24491}
      wordSpacing={0}
    >
      <tspan
        id="tspan5101-4"
        x={71.923195}
        y={259.19669}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal",
          textAlign: "center"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="7.5px"
        strokeWidth={0.24491}
        textAnchor="middle"
      >
        {ParametrosSIS1.VinUPSCHI_01A}
      </tspan>
    </text>
    <text
      id="vout_ups"
      transform="scale(.95879 1.043)"
      x={127.29226}
      y={236.87529}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#00aad4"
      fontFamily="Franklin Gothic Medium"
      fontSize="7.5px"
      letterSpacing={0}
      strokeWidth={0.24492}
      wordSpacing={0}
    >
      <tspan
        id="tspan5117-5"
        x={127.29226}
        y={236.87529}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal",
          textAlign: "center"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="7.5px"
        strokeWidth={0.24492}
        textAnchor="middle"
      >
        {ParametrosSIS1.VoutUPSCHI_01A}
      </tspan>
    </text>
    <text
      id="v_cmt"
      transform="scale(1.0508 .95163)"
      x={26.996704}
      y={259.19669}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#00aad4"
      fontFamily="Franklin Gothic Medium"
      fontSize="7.5px"
      letterSpacing={0}
      strokeWidth={0.24491}
      wordSpacing={0}
    >
      <tspan
        id="tspan5101-4-9"
        x={26.996704}
        y={259.19669}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal",
          textAlign: "center"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="7.5px"
        strokeWidth={0.24491}
        textAnchor="middle"
      >
        {ParametrosSIS1.PotUPSCHI_01A}
      </tspan>
    </text>
    <text
      id="tsum_avg"
      transform="scale(1.021 .97943)"
      x={165.87607}
      y={246.45929}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.6794px"
      letterSpacing={0}
      strokeWidth={0.24818}
      wordSpacing={0}
    >
      <tspan
        id="tspan5844"
        x={165.87607}
        y={246.45929}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="6.6794px"
        strokeWidth={0.24818}
      >
        {ParametrosSIS1.TsuminS1}
      </tspan>
    </text>
    <text
      id="tret_avg"
      transform="scale(.98677 1.0134)"
      x={216.07695}
      y={238.38545}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.6794px"
      letterSpacing={0}
      strokeWidth={0.18559}
      wordSpacing={0}
    >
      <tspan
        id="tspan9221-2"
        x={216.07695}
        y={238.38545}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="6.6794px"
        strokeWidth={0.18559}
      >
        {ParametrosSIS1.TempRetS1}
      </tspan>
    </text>
    <text
      id="v_cmt-1"
      transform="scale(1.0508 .95163)"
      x={361.97455}
      y={259.19446}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#00aad4"
      fontFamily="Franklin Gothic Medium"
      fontSize="7.5px"
      letterSpacing={0}
      strokeWidth={0.24491}
      wordSpacing={0}
    >
      <tspan
        id="tspan5101-4-9-8"
        x={361.97455}
        y={259.19446}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal",
          textAlign: "center"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="7.5px"
        strokeWidth={0.24491}
        textAnchor="middle"
      >
        {ParametrosSIS2.PotUPSCHI_02A}
      </tspan>
    </text>
    <text
      id="vout_ups-0"
      transform="scale(.95879 1.043)"
      x={494.44055}
      y={236.8737}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#00aad4"
      fontFamily="Franklin Gothic Medium"
      fontSize="7.5px"
      letterSpacing={0}
      strokeWidth={0.24492}
      wordSpacing={0}
    >
      <tspan
        id="tspan5117-5-4"
        x={494.44055}
        y={236.8737}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal",
          textAlign: "center"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="7.5px"
        strokeWidth={0.24492}
        textAnchor="middle"
      >
        {ParametrosSIS2.VoutUPSCHI_02A}
      </tspan>
    </text>
    <text
      id="vin_ups-4"
      transform="scale(1.0508 .95163)"
      x={406.901}
      y={259.19446}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#00aad4"
      fontFamily="Franklin Gothic Medium"
      fontSize="7.5px"
      letterSpacing={0}
      strokeWidth={0.24491}
      wordSpacing={0}
    >
      <tspan
        id="tspan5101-4-0"
        x={406.901}
        y={259.19446}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal",
          textAlign: "center"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="7.5px"
        strokeWidth={0.24491}
        textAnchor="middle"
      >
        {ParametrosSIS2.VinUPSCHI_02A}
      </tspan>
    </text>
    <text
      id="tsum_avg-0"
      transform="scale(1.021 .97943)"
      x={269.49036}
      y={246.45889}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.6794px"
      letterSpacing={0}
      strokeWidth={0.24818}
      wordSpacing={0}
    >
      <tspan
        id="tspan5844-8"
        x={269.49036}
        y={246.45889}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="6.6794px"
        strokeWidth={0.24818}
      >
        {ParametrosSIS2.TsuminS2}
      </tspan>
    </text>
    <text
      id="tret_avg-3"
      transform="scale(.98677 1.0134)"
      x={323.28583}
      y={238.3849}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.6794px"
      letterSpacing={0}
      strokeWidth={0.18559}
      wordSpacing={0}
    >
      <tspan
        id="tspan9221-2-4"
        x={323.28583}
        y={238.3849}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="6.6794px"
        strokeWidth={0.18559}
      >
        {ParametrosSIS2.TretS2}
      </tspan>
    </text>
    <text
      id="tret_chill4"
      transform="scale(.98412 1.0161)"
      x={473.51965}
      y={108.00931}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5px"
      letterSpacing={0}
      strokeWidth={0.64276}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-1-7-1"
        x={473.51965}
        y={108.00931}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5px"
        strokeWidth={0.69426}
      >
        <tspan
          id="tspan1097-8-7"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5px"
          strokeWidth={0.69426}
        >
          {ParametrosSIS2.TretEa1} °C
        </tspan>
      </tspan>
    </text>
    <text
      id="tsum_chill4"
      transform="scale(.98412 1.0161)"
      x={473.51965}
      y={103.48772}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5px"
      letterSpacing={0}
      strokeWidth={0.64276}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-8-0-4"
        x={473.51965}
        y={103.48772}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5px"
        strokeWidth={0.64276}
      >
        <tspan
          id="tspan1020-3-7-3"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5px"
          strokeWidth={0.64276}
        >
          {ParametrosSIS2.TsuminEa1} °C
        </tspan>
      </tspan>
    </text>
    <text
      id="tret_chill3"
      transform="scale(.98412 1.0161)"
      x={473.51965}
      y={43.160446}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5px"
      letterSpacing={0}
      strokeWidth={0.64276}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-1-1"
        x={473.51965}
        y={43.160446}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5px"
        strokeWidth={0.69426}
      >
        <tspan
          id="tspan1097-7"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5px"
          strokeWidth={0.69426}
        >
          {ParametrosSIS2.TretEa2} °C
        </tspan>
      </tspan>
    </text>
    <text
      id="tsum_chill3"
      transform="scale(.98412 1.0161)"
      x={473.51965}
      y={38.107994}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5px"
      letterSpacing={0}
      strokeWidth={0.64276}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-8-5"
        x={473.51965}
        y={38.107994}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5px"
        strokeWidth={0.64276}
      >
        <tspan
          id="tspan1020-3-1"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5px"
          strokeWidth={0.64276}
        >
          {ParametrosSIS2.TsuminEa2} °C
        </tspan>
      </tspan>
    </text>
    <text
      id="tret_chill2"
      transform="scale(.98412 1.0161)"
      x={49.904591}
      y={108.00931}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5px"
      letterSpacing={0}
      strokeWidth={0.69426}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-1-7"
        x={49.904591}
        y={108.00931}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5px"
        strokeWidth={0.69426}
      >
        <tspan
          id="tspan1097-8"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5px"
          strokeWidth={0.69426}
        >
          {ParametrosSIS1.TretEa4} °C
        </tspan>
      </tspan>
    </text>
    <text
      id="tsum_chill2"
      transform="scale(.98412 1.0161)"
      x={49.904591}
      y={103.48772}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5px"
      letterSpacing={0}
      strokeWidth={0.64276}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-8-0"
        x={49.904591}
        y={103.48772}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5px"
        strokeWidth={0.64276}
      >
        <tspan
          id="tspan1020-3-7"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5px"
          strokeWidth={0.64276}
        >
          {ParametrosSIS1.TsuminEa4} °C
        </tspan> 
      </tspan>
    </text>
    <text
      id="tret_chill4-4-5-8"
      transform="scale(1.0629 .94079)"
      x={324.06168}
      y={161.50954}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      letterSpacing={0}
      strokeWidth={0.69426}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-1-7-1-1-0-7"
        x={324.06168}
        y={161.50954}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.175px"
        strokeWidth={0.69426}
      >
        <tspan
          id="tspan1097-8-7-5-0-3"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.175px"
          strokeWidth={0.69426}
        >
          {ParametrosSIS2.TempRetS2} °C
        </tspan>
      </tspan>
    </text>
    <text
      id="tret_chill4-4-5-4"
      transform="scale(1.0629 .94079)"
      x={443.6116}
      y={157.80144}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      letterSpacing={0}
      strokeWidth={0.69426}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-1-7-1-1-0-5"
        x={443.6116}
        y={157.80144}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.175px"
        strokeWidth={0.69426}
      >
        <tspan
          id="tspan1097-8-7-5-0-2"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.175px"
          strokeWidth={0.69426}
        >
          {ParametrosSIS2.TempTanqueS2} °C
        </tspan>
      </tspan>
    </text>
    <text
      id="tret_chill4-4-5"
      transform="scale(1.0629 .94079)"
      x={334.28842}
      y={198.34489}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      letterSpacing={0}
      strokeWidth={0.69426}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-1-7-1-1-0"
        x={334.28842}
        y={198.34489}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.175px"
        strokeWidth={0.69426}
      >
        <tspan
          id="tspan1097-8-7-5-0"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.175px"
          strokeWidth={0.69426}
        >
          {ParametrosSIS2.TempSumSecS2} °C
        </tspan>
      </tspan>
    </text>
    <text
      id="tret_chill4-4-5-8-6"
      transform="scale(1.0629 .94079)"
      x={146.02623}
      y={161.50972}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      letterSpacing={0}
      strokeWidth={0.69426}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-1-7-1-1-0-7-5"
        x={146.02623}
        y={161.50972}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.175px"
        strokeWidth={0.69426}
      >
        <tspan
          id="tspan1097-8-7-5-0-3-4"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.175px"
          strokeWidth={0.69426}
        >
          {ParametrosSIS1.TempRetS1}
        </tspan>
      </tspan>
    </text>
    <text
      id="tret_chill4-4-5-4-3"
      transform="scale(1.0629 .94079)"
      x={26.47616}
      y={157.80156}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      letterSpacing={0}
      strokeWidth={0.69426}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-1-7-1-1-0-5-9"
        x={26.47616}
        y={157.80156}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.175px"
        strokeWidth={0.69426}
      >
        <tspan
          id="tspan1097-8-7-5-0-2-9"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.175px"
          strokeWidth={0.69426}
        >
          {ParametrosSIS1.TempTanqueS1} °C
        </tspan>
      </tspan>
    </text>
    <text
      id="tret_chill4-4-5-45"
      transform="scale(1.0629 .94079)"
      x={135.79939}
      y={198.34505}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      letterSpacing={0}
      strokeWidth={0.69426}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-1-7-1-1-0-9"
        x={135.79939}
        y={198.34505}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.175px"
        strokeWidth={0.69426}
      >
        <tspan
          id="tspan1097-8-7-5-0-4"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.175px"
          strokeWidth={0.69426}
        >
          {ParametrosSIS1.TempSumSecS1} °C
        </tspan>
      </tspan>
    </text>
    <text
      id="tret_chill4-4-5-4-9"
      transform="scale(1.0629 .94079)"
      x={461.76041}
      y={137.28348}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      letterSpacing={0}
      strokeWidth={0.69426}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-1-7-1-1-0-5-0"
        x={461.76041}
        y={137.28348}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.175px"
        strokeWidth={0.69426}
      >
        <tspan
          id="tspan1097-8-7-5-0-2-5"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.175px"
          strokeWidth={0.69426}
        >
          {ParametrosSIS2.TempSumPrimS2} °C
        </tspan>
      </tspan>
    </text>
    <text
      id="tret_chill4-4-5-4-9-9"
      transform="scale(1.0629 .94079)"
      x={6.0650535}
      y={137.28354}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      letterSpacing={0}
      strokeWidth={0.69426}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-1-7-1-1-0-5-0-0"
        x={6.0650535}
        y={137.28354}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.175px"
        strokeWidth={0.69426}
      >
        <tspan
          id="tspan1097-8-7-5-0-2-5-1"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.175px"
          strokeWidth={0.69426}
        >
          {ParametrosSIS1.TempSumPrimS1} °C
        </tspan>
      </tspan>
    </text>
    <path
      id="t9-2-8-2"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M67.668 157.31H140.986V160.5207H67.668z"
    />
    <path
      id="rect2643-8-6-9-0-4"
      transform="matrix(2.1636 0 0 .30361 -25.846 145.89)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-3-2-68)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-6-5"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M113.52 69.353H142.298V72.3823H113.52z"
    />
    <path
      id="rect2643-8-6-8-0"
      transform="matrix(.90243 0 0 .28646 74.519 57.697)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-4)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-6-5-7"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M113.52 103.11H141.026V106.1393H113.52z"
    />
    <path
      id="rect2643-8-6-8-0-2"
      transform="matrix(.86258 0 0 .28646 76.25 91.449)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-4-3)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-6-5-7-3"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M113.52 136.94H141.026V139.9693H113.52z"
    />
    <path
      id="rect2643-8-6-8-0-2-3"
      transform="matrix(.86259 0 0 .28646 76.25 125.28)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-4-3-9)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-3-5-0-0"
      transform="rotate(-90)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-155.47 144.88H-141.847V147.8443H-155.47z"
    />
    <path
      id="rect2643-8-6-2-6-1-9-7"
      transform="matrix(0 -.41 .28032 0 134.32 173.15)"
      fillRule="evenodd"
      fill="url(#linearGradient6621)"
      filter="url(#filter2697-2-794-6-7-5-7-2)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t10-8-9-0-8-7"
      d="M136.84 175.67v3.263h-2.749c-.376-.01-.533.21-.587.536l.013.65h-3.136v-5.766h3.136l-.007.567c0 .199.208.628.615.743z"
      fill="#0066FF"
      opacity={0.768}
    />
    <path
      id="path8045-0-4-2-9-6-6"
      transform="matrix(0 .88221 1.0016 0 79.237 68.62)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2-1-6-9-9-8)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t9-6-5-7-3-5"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M137.23 175.91H170.993V178.9393H137.23z"
    />
    <path
      id="rect2643-8-6-8-0-2-3-8"
      transform="matrix(1.0588 0 0 .28646 91.476 164.25)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-4-3-9-5)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t12"
      d="M142.86 72.671c1.402.312 1.949.955 1.908 1.965l3.37-.007-.013-1.965c-.213-1.818-2.176-3.656-5.263-3.18z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="t10"
      d="M85.349 64.237h3.193l.003-2.809c-.01-.385.206-.544.525-.6l.636.013v-3.205h-5.643v3.205l.555-.007c.195 0 .615.213.728.629z"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
    />
    <path
      id="t9-9"
      transform="rotate(-90)"
      fill="#0066FF"
      opacity={0.768}
      className={Tuberias.VAux1S1}
      paintOrder="markers fill stroke"
      d="M-89.505 85.464H-64.655V88.4283H-89.505z"
    />
    <path
      id="rect2643-8-6-2"
      transform="matrix(0 -.74793 .28032 0 74.906 121.77)"
      fillRule="evenodd"
      fill="url(#linearGradient6621)"
      filter="url(#filter2697-2-794-6)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t10-1"
      d="M85.349 121.53h3.193l.003 2.809c-.01.385.206.544.525.6l.636-.013v3.205h-5.643v-3.205l.555.007c.195 0 .615-.213.727-.629z"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
    />
    <path
      id="path8045-0-9"
      transform="matrix(.86328 0 0 -1.0236 -19.41 180.32)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2-4)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t9-6"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
      className={Tuberias.B1_6}
      paintOrder="markers fill stroke"
      d="M90.241 57.679H110.712V60.7083H90.241z"
    />
    <path
      id="rect2643-8-6-8"
      transform="matrix(.64195 0 0 .28646 62.5 46.023)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={0.9953}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-6"
      transform="rotate(-90)"
      fill="#0066FF"
      opacity={0.768}
      className={Tuberias.VAux2S1}
      paintOrder="markers fill stroke"
      d="M-120.99 85.464H-96.13999999999999V88.4283H-120.99z"
    />
    <path
      id="rect2643-8-6-2-7"
      transform="matrix(0 -.74751 .28032 0 74.906 153.24)"
      fillRule="evenodd"
      fill="url(#linearGradient6621)"
      filter="url(#filter2697-2-794-6-2)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-3"
      transform="rotate(-90)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-101.51 144.88H-74.962V147.8443H-101.51z"
    />
    <path
      id="rect2643-8-6-2-6"
      transform="matrix(0 -.79905 .28032 0 134.32 135.97)"
      fillRule="evenodd"
      fill="url(#linearGradient6621)"
      filter="url(#filter2697-2-794-6-7)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-3-5"
      transform="rotate(-90)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-135.3 144.88H-107.76100000000001V147.8443H-135.3z"
    />
    <path
      id="rect2643-8-6-2-6-1"
      transform="matrix(0 -.82886 .28032 0 134.32 171.05)"
      fillRule="evenodd"
      fill="url(#linearGradient6621)"
      filter="url(#filter2697-2-794-6-7-5)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-7"
      transform="rotate(-90)"
      fill="#0066FF"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-117.11 22.087H-58.382V25.0513H-117.11z"
    />
    <path
      id="rect2643-8-6-2-4"
      transform="matrix(0 -1.7676 .28032 0 11.529 193.35)"
      fillRule="evenodd"
      fill="url(#linearGradient6621)"
      filter="url(#filter2697-2-794-6-73)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1406}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-2-8"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M27.637 197.31H71.738V200.5207H27.637z"
    />
    <path
      id="rect2643-8-6-9-0"
      transform="matrix(1.3014 0 0 .30361 -28.611 185.89)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-3-2)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={0.98257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-2-8-3"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M79.04 176.1H87.27440000000001V179.1293H79.04z"
    />
    <path
      id="rect2643-8-6-9-0-2"
      transform="matrix(.2144 0 0 .28646 70.749 165.32)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-3-2-6)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-3-5-0"
      transform="rotate(-90)"
      fill="#0066FF"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-174.13 130.49H-170.4146V133.45430000000002H-174.13z"
    />
    <path
      id="rect2643-8-6-2-6-1-9"
      transform="matrix(0 -.11183 .28032 0 119.93 178.96)"
      fillRule="evenodd"
      fill="url(#linearGradient6621)"
      filter="url(#filter2697-2-794-6-7-5-7)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-3-5-0-3"
      transform="rotate(-90)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-193.62 73.594H-181.482V76.55829999999999H-193.62z"
    />
    <path
      id="rect2643-8-6-2-6-1-9-8"
      transform="matrix(0 -.36533 .28032 0 63.036 209.38)"
      fillRule="evenodd"
      fill="url(#linearGradient6621)"
      filter="url(#filter2697-2-794-6-7-5-7-9)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t10-1-2-4"
      d="M73.471 193.95h3.193l.003 2.809c-.01.385.206.544.525.6l.636-.013v3.205h-5.643v-3.205l.555.007c.195 0 .615-.213.728-.629z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="path8045-0-9-9-5"
      transform="matrix(.86328 0 0 -1.0236 -31.288 252.74)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2-4-9-7)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t9-9-7-5"
      transform="rotate(-90)"
      fill="#0066FF"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-159.4 22.088H-123.49100000000001V25.052300000000002H-159.4z"
    />
    <path
      id="rect2643-8-6-2-4-8"
      transform="matrix(0 -1.0808 .28032 0 11.529 206.01)"
      fillRule="evenodd"
      fill="url(#linearGradient6621)"
      filter="url(#filter2697-2-794-6-73-5)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.0168}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-7-5-2"
      transform="rotate(-90)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-194.86 22.088H-165.75900000000001V25.052300000000002H-194.86z"
    />
    <path
      id="rect2643-8-6-2-4-8-8"
      transform="matrix(0 -.87587 .28032 0 11.529 232.63)"
      fillRule="evenodd"
      fill="url(#linearGradient6621)"
      filter="url(#filter2697-2-794-6-73-5-1)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-2-8-9"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M28.666 160.99H42.994V164.2007H28.666z"
    />
    <path
      id="rect2643-8-6-9-0-6"
      transform="matrix(.4228 0 0 .30361 10.391 149.56)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-3-2-5)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={0.57483}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t12-5"
      d="M111.11 60.837c1.402.312 1.949.955 1.908 1.965l3.37-.006-.013-1.965c-.213-1.818-2.176-3.656-5.263-3.18z"
      fillOpacity={0.99608}
      fill="#0066FF"
      className={Tuberias.B1_6}
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-55"
      transform="matrix(0 .97322 -1.0748 0 360.09 -131.17)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-8)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t9-6-1"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
      className={Tuberias.B1_5}
      paintOrder="markers fill stroke"
      d="M92.207 91.186H110.749V94.21530000000001H92.207z"
    />
    <path
      id="rect2643-8-6-8-8"
      transform="matrix(.58146 0 0 .28646 67.081 79.53)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-5)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={0.98052}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t12-5-7"
      d="M111.11 94.307c1.402.312 1.949.955 1.908 1.965l3.37-.006-.013-1.965c-.213-1.818-2.176-3.656-5.263-3.18z"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
      className={Tuberias.B1_5}
    />
    <path
      id="path7547-40-0-35-2-55-5"
      transform="matrix(0 .97322 -1.0748 0 360.09 -97.7)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-8-7)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t9-6-1-3"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
      className={Tuberias.B1_4}
      paintOrder="markers fill stroke"
      d="M90.24 125.14H110.711V128.1693H90.24z"
    />
    <path
      id="rect2643-8-6-8-8-6"
      transform="matrix(.64195 0 0 .28646 62.5 113.48)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-5-6)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={0.9953}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t12-5-7-5"
      d="M111.11 128.25c1.402.312 1.949.955 1.908 1.965l3.37-.006-.013-1.965c-.213-1.818-2.176-3.656-5.263-3.18z"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
      className={Tuberias.B1_4}
    />
    <path
      id="path7547-40-0-35-2-55-5-6"
      transform="matrix(0 .97322 -1.0748 0 360.09 -63.751)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-8-7-9)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t9-6-1-3-3"
      transform="scale(-1 1)"
      fillOpacity={0.99608}
      fill="#999"
      opacity={0.768}
      className={Tuberias.B2_3}
      paintOrder="markers fill stroke"
      d="M-127.75 165.12H-94.09V168.1493H-127.75z"
    />
    <path
      id="rect2643-8-6-8-8-6-1"
      transform="matrix(-1.0096 0 0 .28646 171.34 153.46)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-5-6-9)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t12-5-7-5-2"
      d="M93.714 168.24c-1.402.312-1.949.955-1.908 1.965l-3.37-.006.013-1.965c.213-1.818 2.176-3.656 5.263-3.18z"
      fillOpacity={0.99608}
      fill="#999"
      className={Tuberias.B2_3}
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-55-5-6-5"
      transform="matrix(0 .97322 1.0748 0 -155.26 -23.765)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-8-7-9-4)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t9-2-8-3-9"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M78.192 197.5H87.2752V200.5293H78.192z"
    />
    <path
      id="rect2643-8-6-9-0-2-9"
      transform="matrix(.23649 0 0 .28646 69.046 186.72)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-3-2-6-1)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t12-5-7-5-2-4"
      d="M93.714 189.44c-1.402.312-1.949.955-1.908 1.965l-3.37-.006.013-1.965c.213-1.818 2.176-3.656 5.263-3.18z"
      fillOpacity={0.99608}
      fill="#999"
      className={Tuberias.B2_4}
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-55-5-6-5-5"
      transform="matrix(0 .97322 1.0748 0 -155.26 -2.571)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-8-7-9-4-4)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t9-6-1-3-3-8"
      transform="scale(-1 1)"
      fillOpacity={0.99608}
      fill="#999"
      opacity={0.768}
      className={Tuberias.B2_4}
      paintOrder="markers fill stroke"
      d="M-127.75 186.29H-94.09V189.3193H-127.75z"
    />
    <path
      id="rect2643-8-6-8-8-6-1-1"
      transform="matrix(-1.0096 0 0 .28646 171.34 174.64)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-5-6-9-9)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-3-5-0-6"
      transform="rotate(-90)"
      fill="#0066FF"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-184.01 130.49H-180.2946V133.45430000000002H-184.01z"
    />
    <path
      id="rect2643-8-6-2-6-1-9-0"
      transform="matrix(0 -.11183 .28032 0 119.93 188.84)"
      fillRule="evenodd"
      fill="url(#linearGradient6621)"
      filter="url(#filter2697-2-794-6-7-5-7-7)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="path7547-40-0-35-2"
      transform="matrix(0 .97322 -1.0748 0 391.83 -119.33)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="path8045-0"
      transform="matrix(.86328 0 0 1.0236 -19.41 5.454)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t10-8"
      d="M91.85 94.374v-3.263l-2.749-.004c-.376.01-.532-.21-.587-.536l.013-.65h-3.136v5.766h3.136l-.007-.567c0-.199.208-.628.615-.743z"
      fill="#999"
      className={Tuberias.B1_5}
      opacity={0.768}
    />
    <path
      id="path8045-0-4"
      transform="matrix(0 -.88221 1.0016 0 34.311 201.51)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2-1)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t10-8-9"
      d="M141.48 106.21v-3.263l2.749-.004c.376.01.533-.21.587-.536l-.013-.65h3.136v5.766h-3.136l.007-.567c0-.199-.208-.628-.615-.743z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="path8045-0-4-2"
      transform="matrix(0 -.88221 -1.0016 0 199.02 213.34)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2-1-6)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t10-8-9-0"
      d="M141.48 140.04v-3.263h2.749c.376.01.533-.21.587-.536l-.013-.65h3.136v5.766h-3.136l.007-.567c0-.199-.208-.628-.615-.743z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="path8045-0-4-2-9"
      transform="matrix(0 -.88221 -1.0016 0 199.02 247.17)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2-1-6-9)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t10-8-5"
      d="M28.487 121.87v-3.263l-2.749-.004c-.376.01-.532-.21-.587-.536l.013-.65h-3.136v5.766h3.136l-.007-.567c0-.199.208-.628.615-.743z"
      fill="#0066FF"
      opacity={0.768}
    />
    <path
      id="path8045-0-4-1"
      transform="matrix(0 -.88221 1.0016 0 -29.05 228.99)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2-1-4)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t12-0"
      d="M27.203 56.074c-1.402.312-1.949.955-1.908 1.965l-3.37-.006.013-1.965c.213-1.818 2.176-3.656 5.263-3.18z"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-9"
      transform="matrix(0 .97322 1.0748 0 -221.77 -135.93)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-3)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t12-8"
      d="M128.3 168.24c1.402.312 1.949.955 1.908 1.965l3.37-.006-.013-1.965c-.213-1.818-2.176-3.656-5.263-3.18z"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-5"
      transform="matrix(0 .97322 -1.0748 0 377.27 -23.765)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-9)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t12-0-2"
      d="M78.72 179.21c-1.402.312-1.949.955-1.908 1.965l-3.37-.006.013-1.965c.213-1.818 2.176-3.656 5.263-3.18z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-9-2"
      transform="matrix(0 .97322 1.0748 0 -170.25 -12.801)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-3-7)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t12-0-7"
      d="M27.203 197.09c-1.402-.312-1.949-.955-1.908-1.965l-3.37.006.013 1.965c.213 1.818 2.176 3.656 5.263 3.18z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-9-26"
      transform="matrix(0 -.97322 1.0748 0 -221.77 389.09)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-3-4)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t10-8-5-0"
      d="M28.488 164.16v-3.263l-2.749-.004c-.376.01-.532-.21-.587-.536l.013-.65H22.03v5.766h3.136l-.007-.567c0-.199.208-.628.615-.743z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="path8045-0-4-1-16"
      transform="matrix(0 -.88221 1.0016 0 -29.05 271.28)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="#0066FF"
      filter="url(#filter8115-2-1-4-1)"
      opacity={0.3}
    />
    <path
      id="t10-8-9-0-8"
      d="M141.48 160.45v-3.263h2.749c.376.01.533-.21.587-.536l-.013-.65h3.136v5.766h-3.136l.007-.567c0-.199-.208-.628-.615-.743z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="path8045-0-4-2-9-6"
      transform="matrix(0 -.88221 -1.0016 0 199.02 267.58)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2-1-6-9-9)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t12-8-1"
      d="M128.3 186.18c1.402-.312 1.949-.955 1.908-1.965l3.37.006-.013 1.965c-.213 1.818-2.176 3.656-5.263 3.18z"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-5-2"
      transform="matrix(0 -.97322 -1.0748 0 377.27 378.19)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-9-3)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t12-8-28"
      d="M150.03 164.2c-1.402-.312-1.949-.955-1.908-1.965l-3.37.006.013 1.965c.213 1.818 2.176 3.656 5.263 3.18z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-5-7"
      transform="matrix(0 -.97322 1.0748 0 -98.944 356.2)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-9-5)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t9-6-5-7-3-5-4"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M150.33 164.38H171.084V167.4093H150.33z"
    />
    <path
      id="rect2643-8-6-8-0-2-3-8-7"
      transform="matrix(.65081 0 0 .28646 122.21 152.72)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-4-3-9-5-0)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-2-8-2-2"
      transform="scale(-1 1)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-441.93 157.31H-368.612V160.5207H-441.93z"
    />
    <path
      id="rect2643-8-6-9-0-4-2"
      transform="matrix(-2.1636 0 0 .30361 535.44 145.89)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-3-2-68-8)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-6-5-1"
      transform="scale(-1 1)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-396.07 69.353H-367.292V72.3823H-396.07z"
    />
    <path
      id="rect2643-8-6-8-0-7"
      transform="matrix(-.90243 0 0 .28646 435.08 57.697)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-4-1)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-6-5-7-2"
      transform="scale(-1 1)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-396.07 103.11H-368.56399999999996V106.1393H-396.07z"
    />
    <path
      id="rect2643-8-6-8-0-2-0"
      transform="matrix(-.86258 0 0 .28646 433.34 91.448)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-4-3-4)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-6-5-7-3-2"
      transform="scale(-1 1)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-396.07 136.94H-368.56399999999996V139.9693H-396.07z"
    />
    <path
      id="rect2643-8-6-8-0-2-3-2"
      transform="matrix(-.86259 0 0 .28646 433.34 125.28)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-4-3-9-6)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-3-5-0-0-4"
      transform="matrix(0 -1 -1 0 0 0)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-155.47 -364.72H-141.847V-361.75570000000005H-155.47z"
    />
    <path
      id="rect2643-8-6-2-6-1-9-7-5"
      transform="matrix(0 -.41 -.28032 0 375.27 173.15)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-6-7-5-7-2-8)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t10-8-9-0-8-7-6"
      d="M372.76 175.67v3.263h2.749c.376-.01.533.21.587.536l-.013.65h3.136v-5.766h-3.136l.007.567c0 .199-.208.628-.615.743z"
      fill="#0066FF"
      opacity={0.768}
    />
    <path
      id="path8045-0-4-2-9-6-6-9"
      transform="matrix(0 .88221 -1.0016 0 430.36 68.62)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2-1-6-9-9-8-7)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t9-6-5-7-3-5-42"
      transform="scale(-1 1)"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-372.36 175.91H-338.59700000000004V178.9393H-372.36z"
    />
    <path
      id="rect2643-8-6-8-0-2-3-8-8"
      transform="matrix(-1.0588 0 0 .28646 418.12 164.25)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-4-3-9-5-4)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t12-06"
      d="M366.74 72.671c-1.402.312-1.949.955-1.908 1.965l-3.37-.006.013-1.965c.213-1.818 2.176-3.656 5.263-3.18z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="t10-3"
      d="M424.25 64.236h-3.193l-.003-2.809c.01-.384-.206-.544-.525-.6l-.636.013v-3.204h5.643v3.204l-.555-.007c-.195 0-.615.213-.728.629z"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
    />
    <path
      id="t9-9-1"
      transform="matrix(0 -1 -1 0 0 0)"
      fill="#0066FF"
      opacity={0.768}
      className={Tuberias.VAux1S2}
      paintOrder="markers fill stroke"
      d="M-89.504 -424.13H-64.654V-421.1657H-89.504z"
    />
    <path
      id="rect2643-8-6-2-3"
      transform="matrix(0 -.74793 -.28032 0 434.69 121.77)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-6-5)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t10-1-0"
      d="M424.25 121.53h-3.193l-.003 2.809c.01.385-.206.544-.525.6l-.636-.013v3.205h5.643v-3.205l-.555.007c-.195 0-.615-.213-.728-.629z"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
    />
    <path
      id="path8045-0-9-2"
      transform="matrix(-.86328 0 0 -1.0236 529 180.32)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2-4-8)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t9-6-59"
      transform="scale(-1 1)"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
      className={Tuberias.B1_3}
      paintOrder="markers fill stroke"
      d="M-419.35 57.679H-398.879V60.7083H-419.35z"
    />
    <path
      id="rect2643-8-6-8-6"
      transform="matrix(-.64195 0 0 .28646 447.09 46.023)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-6)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={0.9953}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-6-3"
      transform="matrix(0 -1 -1 0 0 0)"
      fill="#0066FF"
      opacity={0.768}
      className={Tuberias.VAux2S2}
      paintOrder="markers fill stroke"
      d="M-120.99 -424.13H-96.13999999999999V-421.1657H-120.99z"
    />
    <path
      id="rect2643-8-6-2-7-8"
      transform="matrix(0 -.74751 -.28032 0 434.69 153.23)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-6-2-2)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-3-2"
      transform="matrix(0 -1 -1 0 0 0)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-101.51 -364.72H-74.962V-361.75570000000005H-101.51z"
    />
    <path
      id="rect2643-8-6-2-6-2"
      transform="matrix(0 -.79905 -.28032 0 375.27 135.97)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-6-7-3)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-3-5-3"
      transform="matrix(0 -1 -1 0 0 0)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-135.3 -364.72H-107.76100000000001V-361.75570000000005H-135.3z"
    />
    <path
      id="rect2643-8-6-2-6-1-95"
      transform="matrix(0 -.82886 -.28032 0 375.27 171.05)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-6-7-5-4)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-7-2"
      transform="matrix(0 -1 -1 0 0 0)"
      fill="#0066FF"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-117.2 -487.51H-58.329V-484.5457H-117.2z"
    />
    <path
      id="rect2643-8-6-2-4-4"
      transform="matrix(0 -1.7719 -.28032 0 498.07 193.63)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-6-73-4)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1392}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-2-8-24"
      transform="scale(-1 1)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-481.96 197.31H-437.859V200.5207H-481.96z"
    />
    <path
      id="rect2643-8-6-9-0-9"
      transform="matrix(-1.3014 0 0 .30361 538.21 185.89)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-3-2-0)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={0.98257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-2-8-3-97"
      transform="scale(-1 1)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-430.55 176.1H-422.3156V179.1293H-430.55z"
    />
    <path
      id="rect2643-8-6-9-0-2-6"
      transform="matrix(-.2144 0 0 .28646 438.85 165.32)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-3-2-6-7)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-3-5-0-9"
      transform="matrix(0 -1 -1 0 0 0)"
      fill="#0066FF"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-174.13 -379.1H-170.4146V-376.13570000000004H-174.13z"
    />
    <path
      id="rect2643-8-6-2-6-1-9-5"
      transform="matrix(0 -.11183 -.28032 0 389.67 178.96)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-6-7-5-7-1)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-3-5-0-3-8"
      transform="matrix(0 -1 -1 0 0 0)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-193.62 -436H-181.482V-433.0357H-193.62z"
    />
    <path
      id="rect2643-8-6-2-6-1-9-8-2"
      transform="matrix(0 -.36533 -.28032 0 446.56 209.38)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-6-7-5-7-9-8)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t10-1-2-4-3"
      d="M436.12 193.95h-3.193l-.003 2.809c.01.385-.206.544-.525.6l-.636-.013v3.205h5.643v-3.205l-.555.007c-.195 0-.615-.213-.727-.629z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="path8045-0-9-9-5-9"
      transform="matrix(-.86328 0 0 -1.0236 540.88 252.74)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2-4-9-7-0)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t9-9-7-5-0"
      transform="matrix(0 -1 -1 0 0 0)"
      fill="#0066FF"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-159.4 -487.51H-123.391V-484.5457H-159.4z"
    />
    <path
      id="rect2643-8-6-2-4-8-2"
      transform="matrix(0 -1.0838 -.28032 0 498.06 206.14)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-6-73-5-6)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.0154}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-7-5-2-0"
      transform="matrix(0 -1 -1 0 0 0)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-194.86 -487.51H-165.75900000000001V-484.5457H-194.86z"
    />
    <path
      id="rect2643-8-6-2-4-8-8-4"
      transform="matrix(0 -.87587 -.28032 0 498.06 232.63)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-6-73-5-1-4)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-2-8-9-8"
      transform="scale(-1 1)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-480.93 160.98H-466.60200000000003V164.1907H-480.93z"
    />
    <path
      id="rect2643-8-6-9-0-6-2"
      transform="matrix(-.4228 0 0 .30361 499.2 149.56)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-3-2-5-3)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={0.57483}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t12-5-3"
      d="M398.48 60.836c-1.402.312-1.949.955-1.908 1.965l-3.37-.006.013-1.965c.213-1.818 2.176-3.656 5.263-3.18z"
      fillOpacity={0.99608}
      fill="#0066FF"
      className={Tuberias.B1_3}
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-55-0"
      transform="matrix(0 .97322 1.0748 0 149.51 -131.17)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-8-1)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t9-6-1-7"
      transform="scale(-1 1)"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
      className={Tuberias.B1_2}
      paintOrder="markers fill stroke"
      d="M-417.39 91.185H-398.84799999999996V94.21430000000001H-417.39z"
    />
    <path
      id="rect2643-8-6-8-8-2"
      transform="matrix(-.58146 0 0 .28646 442.51 79.529)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-5-2)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={0.98052}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t12-5-7-4"
      d="M398.48 94.306c-1.402.312-1.949.955-1.908 1.965l-3.37-.006.013-1.965c.213-1.818 2.176-3.656 5.263-3.18z"
      fillOpacity={0.99608}
      fill="#0066FF"
      className={Tuberias.B1_2}
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-55-5-0"
      transform="matrix(0 .97322 1.0748 0 149.51 -97.7)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-8-7-99)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t9-6-1-3-4"
      transform="scale(-1 1)"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
      className={Tuberias.B1_1}
      paintOrder="markers fill stroke"
      d="M-419.35 125.13H-398.879V128.1593H-419.35z"
    />
    <path
      id="rect2643-8-6-8-8-6-5"
      transform="matrix(-.64195 0 0 .28646 447.09 113.48)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-5-6-3)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={0.9953}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t12-5-7-5-3"
      d="M398.48 128.25c-1.402.312-1.949.955-1.908 1.965l-3.37-.006.013-1.965c.213-1.818 2.176-3.656 5.263-3.18z"
      fillOpacity={0.99608}
      fill="#0066FF"
      className={Tuberias.B1_1}
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-55-5-6-7"
      transform="matrix(0 .97322 1.0748 0 149.51 -63.752)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-8-7-9-3)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t9-6-1-3-3-4"
      fillOpacity={0.99608}
      fill="#999"
      opacity={0.768}
      className={Tuberias.B2_1}
      paintOrder="markers fill stroke"
      d="M381.84 165.12H415.5V168.1493H381.84z"
    />
    <path
      id="rect2643-8-6-8-8-6-1-3"
      transform="matrix(1.0096 0 0 .28646 338.26 153.46)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-5-6-9-5)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t12-5-7-5-2-2"
      d="M415.88 168.24c1.402.312 1.949.955 1.908 1.965l3.37-.006-.013-1.965c-.213-1.818-2.176-3.656-5.263-3.18z"
      fillOpacity={0.99608}
      fill="#0999"
      className={Tuberias.B2_1}
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-55-5-6-5-9"
      transform="matrix(0 .97322 -1.0748 0 664.85 -23.765)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-8-7-9-4-3)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t9-2-8-3-9-2"
      transform="scale(-1 1)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-431.4 197.5H-422.3168V200.5293H-431.4z"
    />
    <path
      id="rect2643-8-6-9-0-2-9-0"
      transform="matrix(-.23649 0 0 .28646 440.55 186.72)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-3-2-6-1-6)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t12-5-7-5-2-4-2"
      d="M415.88 189.44c1.402.312 1.949.955 1.908 1.965l3.37-.006-.013-1.965c-.213-1.818-2.176-3.656-5.263-3.18z"
      fillOpacity={0.99608}
      fill="#999"
      className={Tuberias.B2_2}
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-55-5-6-5-5-2"
      transform="matrix(0 .97322 -1.0748 0 664.85 -2.572)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-8-7-9-4-4-1)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t9-6-1-3-3-8-8"
      fillOpacity={0.99608}
      fill="#999"
      opacity={0.768}
      className={Tuberias.B2_2}
      paintOrder="markers fill stroke"
      d="M381.84 186.29H415.5V189.3193H381.84z"
    />
    <path
      id="rect2643-8-6-8-8-6-1-1-2"
      transform="matrix(1.0096 0 0 .28646 338.26 174.64)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-5-6-9-9-2)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-9-3-5-0-6-2"
      transform="matrix(0 -1 -1 0 0 0)"
      fill="#0066FF"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-184.01 -379.1H-180.2946V-376.13570000000004H-184.01z"
    />
    <path
      id="rect2643-8-6-2-6-1-9-0-2"
      transform="matrix(0 -.11183 -.28032 0 389.67 188.84)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-6-7-5-7-7-8)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="path7547-40-0-35-2-3"
      transform="matrix(0 .97322 1.0748 0 117.77 -119.33)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-4)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="path8045-0-0"
      transform="matrix(-.86328 0 0 1.0236 529 5.453)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2-42)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t10-8-2"
      d="M417.74 94.373V91.11l2.749-.004c.376.01.532-.21.587-.536l-.013-.65h3.136v5.766h-3.136l.007-.567c0-.199-.208-.628-.615-.743z"
      fill="#0066FF"
      className={Tuberias.B1_2}
      opacity={0.768}
    />
    <path
      id="path8045-0-4-7"
      transform="matrix(0 -.88221 -1.0016 0 475.28 201.51)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2-1-8)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t10-8-9-8"
      d="M368.12 106.21v-3.263l-2.749-.004c-.376.01-.533-.21-.587-.536l.013-.65h-3.136v5.766h3.136l-.007-.567c0-.199.208-.628.615-.743z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="path8045-0-4-2-2"
      transform="matrix(0 -.88221 1.0016 0 310.58 213.34)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2-1-6-3)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t10-8-9-0-6"
      d="M368.12 140.04v-3.263h-2.749c-.376.01-.533-.21-.587-.536l.013-.65h-3.136v5.766h3.136l-.007-.567c0-.199.208-.628.615-.743z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="path8045-0-4-2-9-4"
      transform="matrix(0 -.88221 1.0016 0 310.58 247.17)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2-1-6-9-4)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t10-8-5-5"
      d="M481.11 121.87v-3.263l2.749-.004c.376.01.532-.21.587-.536l-.013-.65h3.136v5.766h-3.136l.007-.567c0-.199-.208-.628-.615-.743z"
      fill="#0066FF"
      opacity={0.768}
    />
    <path
      id="path8045-0-4-1-0"
      transform="matrix(0 -.88221 -1.0016 0 538.64 228.99)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2-1-4-5)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t12-0-72"
      d="M482.39 56.074c1.402.312 1.949.955 1.908 1.965l3.37-.006-.013-1.965c-.213-1.818-2.176-3.656-5.263-3.18z"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-9-4"
      transform="matrix(0 .97322 -1.0748 0 731.36 -135.93)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-3-8)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t12-8-0"
      d="M381.29 168.24c-1.402.312-1.949.955-1.908 1.965l-3.37-.006.013-1.965c.213-1.818 2.176-3.656 5.263-3.18z"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-5-1"
      transform="matrix(0 .97322 1.0748 0 132.32 -23.765)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-9-55)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t12-0-2-5"
      d="M430.87 179.21c1.402.312 1.949.955 1.908 1.965l3.37-.006-.013-1.965c-.213-1.818-2.176-3.656-5.263-3.18z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-9-2-0"
      transform="matrix(0 .97322 -1.0748 0 679.84 -12.802)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-3-7-5)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t12-0-7-0"
      d="M482.39 197.09c1.402-.312 1.949-.955 1.908-1.965l3.37.006-.013 1.965c-.213 1.818-2.176 3.656-5.263 3.18z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-9-26-6"
      transform="matrix(0 -.97322 -1.0748 0 731.36 389.09)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-3-4-4)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t10-8-5-0-5"
      d="M481.11 164.16v-3.263l2.749-.004c.376.01.532-.21.587-.536l-.013-.65h3.136v5.766h-3.136l.007-.567c0-.199-.208-.628-.615-.743z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="path8045-0-4-1-16-1"
      transform="matrix(0 -.88221 -1.0016 0 538.64 271.28)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="#0066FF"
      filter="url(#filter8115-2-1-4-1-2)"
      opacity={0.3}
    />
    <path
      id="t10-8-9-0-8-9"
      d="M368.12 160.45v-3.263h-2.749c-.376.01-.533-.21-.587-.536l.013-.65h-3.136v5.766h3.136l-.007-.567c0-.199.208-.628.615-.743z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="path8045-0-4-2-9-6-7"
      transform="matrix(0 -.88221 1.0016 0 310.58 267.58)"
      d="M120.63 51.343h5.06v1.125c-1.94.545-2.017 3.1-2.015 4.69h-1.038c-.151-1.568-.298-4.266-2.007-4.515z"
      fill="url(#linearGradient6567)"
      filter="url(#filter8115-2-1-6-9-9-4)"
      opacity={0.3}
      strokeWidth={1.1257}
    />
    <path
      id="t12-8-1-0"
      d="M381.29 186.18c-1.402-.312-1.949-.955-1.908-1.965l-3.37.006.013 1.965c.213 1.818 2.176 3.656 5.263 3.18z"
      fillOpacity={0.99608}
      fill="#0066FF"
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-5-2-1"
      transform="matrix(0 -.97322 1.0748 0 132.32 378.19)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-9-3-7)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t12-8-28-5"
      d="M359.57 164.2c1.402-.312 1.949-.955 1.908-1.965l3.37.006-.013 1.965c-.213 1.818-2.176 3.656-5.263 3.18z"
      fill="#06f"
      opacity={0.768}
    />
    <path
      id="path7547-40-0-35-2-5-7-0"
      transform="matrix(0 -.97322 -1.0748 0 608.54 356.2)"
      d="M195.48 231.45h-1.403c-.162-1.892.59-3.397 2.856-4.293l2.04-.119c-2.942.457-4.073 2.803-3.493 4.412z"
      fill="url(#linearGradient1263)"
      filter="url(#filter7621-7-1-69-7-9-5-2)"
      opacity={0.35}
      strokeWidth={1.1257}
    />
    <path
      id="t9-6-5-7-3-5-4-3"
      transform="scale(-1 1)"
      fill="#06f"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-359.26 164.38H-338.506V167.4093H-359.26z"
    />
    <path
      id="rect2643-8-6-8-0-2-3-8-7-9"
      transform="matrix(-.65081 0 0 .28646 387.38 152.72)"
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2697-2-794-4-4-3-9-5-0-2)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <ellipse
      id="st_2_b1_3_-2"
      transform="scale(-1 1)"
      cx={-398.18}
      cy={180.54}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      className={EstadosSIS2.Bomba_1_b2_1}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_b1_3_brillo-6"
      transform="matrix(-.29479 0 0 .15924 409.78 151.41)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-5-0-2-3)"
      opacity={0.29}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
    />
    <ellipse
      id="st_2_b1_3_-2-1" //alarma1-b2-1
      transform="scale(-1 1)"
      cx={-398.18}
      cy={180.54}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      opacity={0}
      className={AlarmasSIS2.B2_1}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_b1_4_-9"
      transform="scale(-1 1)"
      cx={-398.18}
      cy={201.71}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      className={EstadosSIS2.Bomba_1_b2_2}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_b1_4_brillo-9"
      transform="matrix(-.29479 0 0 .15924 409.78 172.58)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-5-0-5-1)"
      opacity={0.29}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
    />
    <ellipse
      id="st_2_b1_4_-9-1" //alarma 1-b2-2
      transform="scale(-1 1)"
      cx={-398.18}
      cy={201.71}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      opacity={0}
      className={AlarmasSIS2.B2_2}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_b1_6_-3"
      transform="scale(-1 1)"
      cx={-408.29}
      cy={78.292}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      className={EstadosSIS2.Bomba_1_b1_3}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_b1_6__brillo-3"
      transform="matrix(-.29479 0 0 .15924 419.89 49.157)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-2)"
      opacity={0.29}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
    />
    <ellipse
      id="st_1_b1_6_-3-1"//alarmab1-3
      transform="scale(-1 1)"
      cx={-408.29}
      cy={78.292}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      opacity={0}
      className={AlarmasSIS2.B1_3}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_b1_5_-7"
      transform="scale(-1 1)"
      cx={-408.29}
      cy={111.45}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      className={EstadosSIS2.Bomba_1_b1_2}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_b1_5__brillo-7"
      transform="matrix(-.29479 0 0 .15924 419.89 82.316)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-5-5)"
      opacity={0.29}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
    />
    <ellipse
      id="st_1_b1_5_-7-1" //alarmab1-2
      transform="scale(-1 1)"
      cx={-408.29}
      cy={111.45}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      opacity={0}
      className={AlarmasSIS2.B1_2}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_b1_4_-8"
      transform="scale(-1 1)"
      cx={-408.29}
      cy={145.41}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      className={EstadosSIS2.Bomba_1_b1_1}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_b1_4__brillo-1"
      transform="matrix(-.29479 0 0 .15924 419.89 116.27)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-5-0-8)"
      opacity={0.29}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
    />
    <ellipse
      id="st_1_b1_4_-8-1" //alarmab1-1
      transform="scale(-1 1)"
      cx={-408.29}
      cy={145.41}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      opacity={0}
      className={AlarmasSIS2.B1_1}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_chill2-1"
      transform="scale(-1 1)"
      cx={-433.14}
      cy={134.02}
      rx={3.23}
      ry={3.3008}
      fill="#999"
      className={EstadosSIS2.Chiller_1_ea_1}
      paintOrder="markers stroke fill"
    />
     <ellipse
      id="al_chill2-1"//alarma
      transform="scale(-1 1)"
      cx={-433.14}
      cy={134.02}
      rx={3.23}
      ry={3.3008}
      fill="#999"
      opacity={0}
      className={AlarmasSIS2.alEA1}
      paintOrder="markers stroke fill"
    />
      <ellipse
      id="mant_chill2-1"//mantenimiento
      transform="scale(-1 1)"
      cx={-433.14}
      cy={134.02}
      rx={3.23}
      ry={3.3008}
      fill="#999"
      opacity={0}
      className={AlarmasSIS2.mantEA1}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_chill1-9"
      transform="scale(-1 1)"
      cx={-433.14}
      cy={52.702}
      rx={3.23}
      ry={3.3008}
      fill="#999"
      className={EstadosSIS2.Chiller_1_ea_2}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="al_chill1-9"//alarma
      transform="scale(-1 1)"
      cx={-433.14}
      cy={52.702}
      rx={3.23}
      ry={3.3008}
      fill="#999"
      opacity={0}
      className={AlarmasSIS2.alEA2}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="mant_chill1-9"//mantenimiento
      transform="scale(-1 1)"
      cx={-433.14}
      cy={52.702}
      rx={3.23}
      ry={3.3008}
      fill="#999"
      opacity={0}
      className={AlarmasSIS2.mantEA2}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_chill1brillo-8"
      transform="matrix(-.45802 0 0 .24742 451.08 7.435)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-61)"
      opacity={0.29}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
    />
    <ellipse
      id="st_chill2brillo-5"
      transform="matrix(-.45155 0 0 .24742 450.86 88.658)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-6-6)"
      opacity={0.29}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
    />
    <circle
      id="st_1_UMA_11_ret"
      cx={180.86}
      cy={89.998}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.R1UMA11}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_11_retbrillo"
      transform="matrix(.33545 0 0 .17732 167.66 57.557)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-0-6)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_11_sum"
      cx={180.86}
      cy={81.37}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.S1UMA11}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_11_sumbrillo"
      transform="matrix(.33545 0 0 .17732 167.66 48.927)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-9)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_10_ret"
      cx={180.86}
      cy={114.65}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.R1UMA10}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_10_retbrillo"
      transform="matrix(.33545 0 0 .17732 167.66 82.204)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-0-6-7)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_10_sum"
      cx={180.86}
      cy={106.02}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.S1UMA10}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_12_sumbrillo-6-8"
      transform="matrix(.33545 0 0 .17732 167.66 73.575)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-9-6)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_9_ret"
      cx={180.86}
      cy={139.29}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.R1UMA9}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_9_retbrillo"
      transform="matrix(.33545 0 0 .17732 167.66 106.85)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-0-6-7-9)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_9_sum"
      cx={180.86}
      cy={130.67}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.S1UMA9}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_9_sumbrillo"
      transform="matrix(.33545 0 0 .17732 167.66 98.222)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-9-6-1)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_8_ret"
      cx={180.86}
      cy={163.94}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.R1UMA8}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_7_retbrillo"
      transform="matrix(.33545 0 0 .17732 167.66 131.5)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-0-6-7-9-7)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_8_sum"
      cx={180.86}
      cy={155.31}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.S1UMA8}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_8_sumbrillo"
      transform="matrix(.33545 0 0 .17732 167.66 122.87)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-9-6-1-9)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_7_ret"
      cx={180.86}
      cy={188.59}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.R1UMA7}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_12_retbrillo-7-9-9-2-9"
      transform="matrix(.33545 0 0 .17732 167.66 156.15)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-0-6-7-9-7-5)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_12_sum-8-0-0-1-8"
      cx={180.86}
      cy={179.96}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.S1UMA7}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_7_sumbrillo"
      transform="matrix(.33545 0 0 .17732 167.66 147.52)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-9-6-1-9-1)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_12_ret"
      cx={180.86}
      cy={65.351}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.R1UMA12}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_12_retbrillo"
      transform="matrix(.33545 0 0 .17732 167.66 32.909)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-0)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_12_sum"
      cx={180.86}
      cy={56.722}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.S1UMA12}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_2_ret"
      cx={321.99}
      cy={89.998}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.R1UMA2}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_2_retbrillo"
      transform="matrix(.33545 0 0 .17732 308.79 57.557)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-0-6-5)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_2_sum"
      cx={321.99}
      cy={81.37}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.S1UMA2}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_2_sumbrillo"
      transform="matrix(.33545 0 0 .17732 308.79 48.927)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-9-2)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_3_ret"
      cx={321.99}
      cy={114.65}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.R1UMA3}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_3_retbrillo"
      transform="matrix(.33545 0 0 .17732 308.79 82.204)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-0-6-7-3)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_3_sum"
      cx={321.99}
      cy={106.02}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.S1UMA3}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_3_sumbrillo"
      transform="matrix(.33545 0 0 .17732 308.79 73.575)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-9-6-9)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_4_ret"
      cx={321.99}
      cy={139.29}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.R1UMA4}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_4_retbrillo"
      transform="matrix(.33545 0 0 .17732 308.79 106.85)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-0-6-7-9-5)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_4_sum"
      cx={321.99}
      cy={130.67}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.S1UMA4}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_4_sumbrillo"
      transform="matrix(.33545 0 0 .17732 308.79 98.222)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-9-6-1-5)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_5_ret"
      cx={321.99}
      cy={163.94}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.R1UMA5}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_5_retbrillo"
      transform="matrix(.33545 0 0 .17732 308.79 131.5)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-0-6-7-9-7-9)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_5_sum"
      cx={321.99}
      cy={155.31}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.S1UMA5}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_5_sumbrillo"
      transform="matrix(.33545 0 0 .17732 308.79 122.87)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-9-6-1-9-2)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_6_ret"
      cx={321.99}
      cy={188.59}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.R1UMA6}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_6_retbrillo"
      transform="matrix(.33545 0 0 .17732 308.79 156.15)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-0-6-7-9-7-5-3)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_6_sum"
      cx={321.99}
      cy={179.96}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.S1UMA6}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_6_sumbrillo"
      transform="matrix(.33545 0 0 .17732 308.79 147.52)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-9-6-1-9-1-9)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_1_ret"
      cx={321.99}
      cy={65.351}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.R1UMA1}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_1_retbrillo"
      transform="matrix(.33545 0 0 .17732 308.79 32.909)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-0-9)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_1_UMA_1_sum"
      cx={321.99}
      cy={56.722}
      r={2.3656}
      fill="#999"
      className={EstadosSIS1.S1UMA1}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_UMA_12_sumbrillo-8"
      transform="matrix(.33545 0 0 .17732 308.79 24.28)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-01)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_11_sum"
      cx={187.81}
      cy={81.369}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.S2UMA11}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_11_sumbrillo"
      transform="matrix(.33545 0 0 .17732 174.61 48.927)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-82)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_11_ret"
      cx={187.81}
      cy={89.998}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.R2UMA11}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_12_retbrillo-8"
      transform="matrix(.33545 0 0 .17732 174.61 57.556)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-8-4)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_10_sum"
      cx={187.81}
      cy={106.02}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.S2UMA10}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_10_retbrillo"
      transform="matrix(.33545 0 0 .17732 174.61 73.575)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-82-3)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_10_ret"
      cx={187.81}
      cy={114.65}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.R2UMA10}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_12_retbrillo-8-3"
      transform="matrix(.33545 0 0 .17732 174.61 82.203)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-8-4-8)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_9_sum"
      cx={187.81}
      cy={130.67}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.S2UMA9}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_9_sumbrillo"
      transform="matrix(.33545 0 0 .17732 174.61 98.221)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-82-3-5)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_9_ret"
      cx={187.81}
      cy={139.29}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.R2UMA9}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_9_retbrillo"
      transform="matrix(.33545 0 0 .17732 174.61 106.85)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-8-4-8-4)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_8_sum"
      cx={187.81}
      cy={155.31}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.S2UMA8}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_8_sumbrillo"
      transform="matrix(.33545 0 0 .17732 174.61 122.87)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-82-3-5-9)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_8_ret"
      cx={187.81}
      cy={163.94}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.R2UMA8}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_8_retbrillo"
      transform="matrix(.33545 0 0 .17732 174.61 131.5)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-8-4-8-4-2)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_7_sum"
      cx={187.81}
      cy={179.96}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.S2UMA7}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_7_sumbrillo"
      transform="matrix(.33545 0 0 .17732 174.61 147.52)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-82-3-5-9-6)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_7_ret"
      cx={187.81}
      cy={188.59}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.R2UMA7}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_7_retbrillo"
      transform="matrix(.33545 0 0 .17732 174.61 156.15)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-8-4-8-4-2-6)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_12_sum"
      cx={187.81}
      cy={56.722}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.S2UMA12}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_12_sumbrillo"
      transform="matrix(.33545 0 0 .17732 174.61 24.28)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_12_ret"
      cx={187.81}
      cy={65.351}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.R2UMA12}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_12_retbrillo"
      transform="matrix(.33545 0 0 .17732 174.61 32.908)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-8)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_2_sum"
      cx={328.94}
      cy={81.369}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.S2UMA2}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_2_sumbrillo"
      transform="matrix(.33545 0 0 .17732 315.74 48.926)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-82-6)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_2_ret"
      cx={328.94}
      cy={89.998}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.R2UMA2}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_2_retbrillo"
      transform="matrix(.33545 0 0 .17732 315.74 57.556)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-8-4-88)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_3_sum"
      cx={328.94}
      cy={106.02}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.S2UMA3}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_3_retbrillo"
      transform="matrix(.33545 0 0 .17732 315.74 73.574)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-82-3-4)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_3_ret"
      cx={328.94}
      cy={114.65}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.R2UMA3}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_12_retbrillo-8-3-7"
      transform="matrix(.33545 0 0 .17732 315.74 82.203)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-8-4-8-5)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_4_sum"
      cx={328.94}
      cy={130.67}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.S2UMA4}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_4_sumbrillo"
      transform="matrix(.33545 0 0 .17732 315.74 98.221)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-82-3-5-94)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_4_ret"
      cx={328.94}
      cy={139.29}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.R2UMA4}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_4_retbrillo"
      transform="matrix(.33545 0 0 .17732 315.74 106.85)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-8-4-8-4-9)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_5_sum"
      cx={328.94}
      cy={155.31}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.S2UMA5}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_5_sumbrillo"
      transform="matrix(.33545 0 0 .17732 315.74 122.87)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-82-3-5-9-3)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_5_ret"
      cx={328.94}
      cy={163.94}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.R2UMA5}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_5_retbrillo"
      transform="matrix(.33545 0 0 .17732 315.74 131.5)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-8-4-8-4-2-61)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_6_sum"
      cx={328.94}
      cy={179.96}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.S2UMA6}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_6_sumbrillo"
      transform="matrix(.33545 0 0 .17732 315.74 147.52)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-82-3-5-9-6-3)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_6_ret"
      cx={328.94}
      cy={188.59}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.R2UMA6}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_6_retbrillo"
      transform="matrix(.33545 0 0 .17732 315.74 156.15)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-8-4-8-4-2-6-4)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_1_sum"
      cx={328.94}
      cy={56.722}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.S2UMA1}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_1_sumbrillo"
      transform="matrix(.33545 0 0 .17732 315.74 24.28)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-1)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <circle
      id="st_2_UMA_1_ret"
      cx={328.94}
      cy={65.351}
      r={2.3656}
      fill="#999"
      className={EstadosSIS2.R2UMA1}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_UMA_1_retbrillo"
      transform="matrix(.33545 0 0 .17732 315.74 32.908)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-4-8-8-5)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_b1_3_"
      cx={111.41}
      cy={180.55}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      className={EstadosSIS1.Bomba_1_b2_3}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_b1_3_brillo"
      transform="matrix(.29479 0 0 .15924 99.813 151.41)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-5-0-2)"
      opacity={0.29}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
    />
    <ellipse
      id="st_2_b1_3_1"//alarma 1-b2-3
      cx={111.41}
      cy={180.55}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      className={AlarmasSIS1.B2_3}
      opacity={0}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_b1_4_"
      cx={111.41}
      cy={201.71}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      className={EstadosSIS1.Bomba_1_b2_4}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_2_b1_4_brillo"
      transform="matrix(.29479 0 0 .15924 99.813 172.58)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-5-0-5)"
      opacity={0.29}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
    />
    <ellipse
      id="st_2_b1_4_1"//alarma 1-b2-4
      cx={111.41}
      cy={201.71}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      className={AlarmasSIS1.B2_4}
      opacity={0}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_b1_6_"
      cx={101.3}
      cy={78.292}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      className={EstadosSIS1.Bomba_1_b1_6}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_b1_6__brillo"
      transform="matrix(.29479 0 0 .15924 89.703 49.158)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5)"
      opacity={0.29}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
    />
    <ellipse
      id="st_1_b1_6_1"//alarma1-b1-6
      cx={101.3}
      cy={78.292}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      opacity={0}
      className={AlarmasSIS1.B1_6}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_b1_5_"
      cx={101.3}
      cy={111.45}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      className={EstadosSIS1.Bomba_1_b1_5}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_b1_5__brillo"
      transform="matrix(.29479 0 0 .15924 89.703 82.317)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-5)"
      opacity={0.29}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
    />
    <ellipse
      id="st_1_b1_5_1" //alarma 1-b1-5
      cx={101.3}
      cy={111.45}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      opacity={0}
      className={AlarmasSIS1.B1_5}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_b1_4_"
      cx={101.3}
      cy={145.41}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      className={EstadosSIS1.Bomba_1_b1_4}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_1_b1_4__brillo"
      transform="matrix(.29479 0 0 .15924 89.703 116.27)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-5-5-0)"
      opacity={0.29}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
    />
    <ellipse
      id="st_1_b1_4_1" //alarma 1-b1-4
      cx={101.3}
      cy={145.41}
      rx={2.0789}
      ry={2.1244}
      fill="#999"
      opacity={0}
      className={AlarmasSIS1.B1_4}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_chill2"
      cx={76.45}
      cy={134.02}
      rx={3.23}
      ry={3.3008}
      fill="#999"
      className={EstadosSIS1.Chiller_1_ea_4}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="al_chill2"//alarma
      cx={76.45}
      cy={134.02}
      rx={3.23}
      ry={3.3008}
      fill="#999"
      opacity={0}
      className={AlarmasSIS1.alEA4}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="mant_chill2"//mantenimiento
      cx={76.45}
      cy={134.02}
      rx={3.23}
      ry={3.3008}
      fill="#999"
      opacity={0}
      className={AlarmasSIS1.mantEA4}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_chill1"
      cx={76.45}
      cy={52.702}
      rx={3.23}
      ry={3.3008}
      fill="#999"
      className={EstadosSIS1.Chiller_1_ea_3}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="al_chill1"//alarma
      cx={76.45}
      cy={52.702}
      rx={3.23}
      ry={3.3008}
      fill="#999"
      opacity={0}
      className={AlarmasSIS1.alEA3}
      paintOrder="markers stroke fill"
    />
     <ellipse
      id="mant_chill1"//mantenimiento
      cx={76.45}
      cy={52.702}
      rx={3.23}
      ry={3.3008}
      fill="#999"
      opacity={0}
      className={AlarmasSIS1.mantEA3}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_chill1brillo"
      transform="matrix(.45802 0 0 .24742 58.511 7.435)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9)"
      opacity={0.29}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
    />
    <ellipse
      id="st_chill2brillo"
      transform="matrix(.45155 0 0 .24742 58.734 88.659)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-6)"
      opacity={0.29}
      paintOrder="markers stroke fill"
      strokeWidth={1.1257}
    />
    <g
      id="g1355-0"
      transform="matrix(0 -.14359 .173 0 73.166 83.422)"
      strokeWidth={1.6787}
    >
      <g id="frame-4" strokeWidth={1.6787}>
        <path
          id="rect1271-0"
          fill="none"
          strokeWidth={2.6792}
          d="M0 0H100V100H0z"
        />
      </g>
      <g id="shape-81" fill="#77a3bf" strokeWidth={1.6787}>
        <path
          id="path1274-2"
          d="M99.359 68.574H87.087a.83.83 0 00-.831.831v1.755h-7.878a.83.83 0 00-.831.831v.946h-4.331v-.947a.83.83 0 00-.831-.831h-.974v-5.858c0-.082-.018-.159-.024-.239h2.517v-2.077h.415a3.323 3.323 0 003.323-3.323v-4.251a3.323 3.323 0 00-3.323-3.323h-.176l-.24-.431-.5-1.62h-.901l-.012-.027h-1.501v-1.532h-2.378v1.532h-8.985v-5.338H72.08c.918 0 1.662-.744 1.662-1.662v-6.019h16.674a4.153 4.153 0 004.153-4.153V21.435a4.154 4.154 0 00-4.154-4.154H73.741v-6.654a.837.837 0 00-.088-.371l-1.231-1.459a1 1 0 00-.764-.355h-44.11a1 1 0 00-.764.355l-1.231 1.459a.827.827 0 00-.088.371V43.01c0 .918.744 1.662 1.662 1.662h13.408v5.338h-8.074v-1.532h-2.378v1.532h-3.08l-.664 2.143-1.14.2a3.324 3.324 0 00-2.02 3.057v4.251a3.323 3.323 0 003.323 3.323h.995v2.077h1.938c-.006.08-.024.157-.024.239v5.858H28.5a.83.83 0 00-.831.831v.946h-4.086v-.946a.83.83 0 00-.831-.831h-8.376v-1.755a.83.83 0 00-.831-.831H1.273a.83.83 0 00-.831.831V89.64a.83.83 0 00.831.831h12.273a.83.83 0 00.83-.83v-1.756h8.376a.83.83 0 00.83-.83v-1.656h4.086v1.655a.83.83 0 00.831.831h.911v.361a3.323 3.323 0 003.323 3.323h35.355a3.322 3.322 0 003.322-3.322v-.362h.973a.832.832 0 00.832-.832v-1.654h4.331v1.655a.83.83 0 00.831.831h7.878v1.755a.83.83 0 00.831.831h12.272a.83.83 0 00.831-.831V69.405a.83.83 0 00-.83-.831z"
          strokeWidth={2.6792}
        />
      </g>
      <g id="light-7" strokeWidth={1.6787}>
        <path
          id="path1279-7"
          d="M73.741 36.991h16.674a4.153 4.153 0 004.153-4.153V21.435a4.154 4.154 0 00-4.154-4.154H73.741z"
          fill="#96c9eb"
          strokeWidth={2.6792}
        />
      </g>
      <g id="dark-0" fill="#61859c" strokeWidth={2.6792}>
        <path
          id="path1282-7"
          d="M71.658 8.442a1 1 0 01.764.355l1.231 1.459a.84.84 0 01.088.371V43.01c0 .918-.744 1.662-1.662 1.662H27.127a1.662 1.662 0 01-1.662-1.662V10.627c0-.129.03-.256.088-.371l1.231-1.459a1 1 0 01.764-.355z"
          className={EstadosSIS1.VAux1S1}
        />
        <path
          id="path1284-23"
          d="M25.553 10.256l1.231-1.459a1 1 0 01.764-.355h44.11a1 1 0 01.764.355l1.231 1.459z"
        />
      </g>
      <g id="shadow-3" fill="#547387" strokeWidth={2.6792}>
        <path
          id="path1287-9"
          d="M13.376 90.471H1.443a1 1 0 01-1-1v-3.03h13.934v3.03c-.001.552-.448 1-1.001 1z"
        />
        <path
          id="path1289-3"
          d="M99.19 90.471H87.256a1 1 0 01-1-1v-3.03h13.934v3.03a1 1 0 01-1 1z"
        />
        <path
          id="polygon1291-2"
          d="M71.497 66.697L71.497 65.062 69.092 65.062 69.092 62.985 32.311 62.985 32.311 65.062 29.435 65.062 29.435 66.697z"
        />
        <path
          id="rect1293-6"
          d="M40.535 44.672H59.626999999999995V47.51H40.535z"
        />
        <path id="rect1295-3" d="M23.18 56.78H77.644V57.78H23.18z" />
        <path
          id="path1297-0"
          d="M73.741 34.707v2.284h16.673c1.617 0 3.004-.934 3.69-2.284z"
        />
        <path
          id="path1299-9"
          d="M77.547 85.399v1.655a.83.83 0 00.831.831h7.878v-2.486z"
        />
        <path
          id="path1301-3"
          d="M14.376 85.399v2.486h8.376a.83.83 0 00.83-.83v-1.656z"
        />
        <path
          id="polyline1303-4"
          d="M73.216 83.649L77.547 83.649 77.547 85.399 73.216 85.399"
        />
        <path
          id="rect1305-4"
          d="M23.583 83.649H27.668999999999997V85.399H23.583z"
        />
        <path
          id="rect1307-7"
          d="M23.583 73.187H24.083V85.39999999999999H23.583z"
        />
        <path id="rect1309-9" d="M14.376 72.479H14.876V86.442H14.376z" />
        <path id="rect1311-8" d="M86.256 70.687H86.756V87.15H86.256z" />
        <path id="rect1313-1" d="M77.548 72.479H78.048V86.442H77.548z" />
        <path
          id="rect1315-5"
          d="M27.169 72.937H27.669V85.39999999999999H27.169z"
        />
        <path
          id="rect1317-1"
          d="M73.217 72.937H73.717V85.39999999999999H73.217z"
        />
        <path
          id="path1319-2"
          d="M32.823 88.246h-3.412a3.323 3.323 0 003.323 3.323h35.355a3.322 3.322 0 003.322-3.323h-3.338c-10.67 1.231-24.579 1.231-35.25 0z"
        />
        <circle id="circle1321-4" cx={29.112} cy={14.532} r={2.17} />
        <circle id="circle1323-0" cx={70.303} cy={14.532} r={2.17} />
        <circle id="circle1325-6" cx={29.112} cy={40.957} r={2.17} />
        <circle id="circle1327-7" cx={70.303} cy={40.957} r={2.17} />
      </g>
      <g id="hlight-3" fill="#b0dfff" strokeWidth={2.6792}>
        <path
          id="path1330-5"
          d="M14.377 72.604H.443v-3.199a.83.83 0 01.831-.831h12.272a.83.83 0 01.831.831z"
        />
        <path
          id="path1332-2"
          d="M100.19 72.604H86.256v-3.199a.83.83 0 01.831-.831h12.272a.83.83 0 01.831.831z"
        />
        <path
          id="path1334-2"
          d="M23.583 71.991a.83.83 0 00-.831-.831h-8.376v3.027h9.206v-2.196z"
        />
        <path
          id="path1336-8"
          d="M78.378 71.16a.83.83 0 00-.831.831v2.196h8.709V71.16z"
        />
        <path
          id="path1338-9"
          d="M90.415 17.281H73.741v2.729h20.56a4.142 4.142 0 00-3.886-2.729z"
        />
        <path
          id="rect1340-7"
          d="M23.583 72.937H27.668999999999997V73.937H23.583z"
        />
        <path id="rect1342-18" d="M73.216 72.937H77.547V73.937H73.216z" />
        <path
          id="rect1344-2"
          d="M32.461 50.01H68.61099999999999V51.01H32.461z"
        />
        <path
          id="polygon1346-2"
          d="M70.982 50.01L73.383 50.01 73.883 51.01 70.982 51.01z"
        />
        <path
          id="polygon1348-3"
          d="M27.062 50.01L29.963 50.01 29.963 51.01 26.562 51.01z"
        />
        <path
          id="path1350-1"
          d="M73.216 71.426c-12.574 2.213-32.961 2.213-45.536 0"
        />
        <path
          id="path1352-0"
          d="M75.809 52.532c-14.006.722-36.714.722-50.72 0"
        />
      </g>
    </g>
    <g
      id="g1355-8-6"
      transform="matrix(0 -.14359 .173 0 73.166 115.76)"
      strokeWidth={1.6787}
    >
      <g id="frame-5-8" strokeWidth={1.6787}>
        <path
          id="rect1271-7-7"
          fill="none"
          strokeWidth={2.6792}
          d="M0 0H100V100H0z"
        />
      </g>
      <g id="shape-8-6" fill="#77a3bf" strokeWidth={1.6787}>
        <path
          id="path1274-0-9"
          d="M99.359 68.574H87.087a.83.83 0 00-.831.831v1.755h-7.878a.83.83 0 00-.831.831v.946h-4.331v-.947a.83.83 0 00-.831-.831h-.974v-5.858c0-.082-.018-.159-.024-.239h2.517v-2.077h.415a3.323 3.323 0 003.323-3.323v-4.251a3.323 3.323 0 00-3.323-3.323h-.176l-.24-.431-.5-1.62h-.901l-.012-.027h-1.501v-1.532h-2.378v1.532h-8.985v-5.338H72.08c.918 0 1.662-.744 1.662-1.662v-6.019h16.674a4.153 4.153 0 004.153-4.153V21.435a4.154 4.154 0 00-4.154-4.154H73.741v-6.654a.837.837 0 00-.088-.371l-1.231-1.459a1 1 0 00-.764-.355h-44.11a1 1 0 00-.764.355l-1.231 1.459a.827.827 0 00-.088.371V43.01c0 .918.744 1.662 1.662 1.662h13.408v5.338h-8.074v-1.532h-2.378v1.532h-3.08l-.664 2.143-1.14.2a3.324 3.324 0 00-2.02 3.057v4.251a3.323 3.323 0 003.323 3.323h.995v2.077h1.938c-.006.08-.024.157-.024.239v5.858H28.5a.83.83 0 00-.831.831v.946h-4.086v-.946a.83.83 0 00-.831-.831h-8.376v-1.755a.83.83 0 00-.831-.831H1.273a.83.83 0 00-.831.831V89.64a.83.83 0 00.831.831h12.273a.83.83 0 00.83-.83v-1.756h8.376a.83.83 0 00.83-.83v-1.656h4.086v1.655a.83.83 0 00.831.831h.911v.361a3.323 3.323 0 003.323 3.323h35.355a3.322 3.322 0 003.322-3.322v-.362h.973a.832.832 0 00.832-.832v-1.654h4.331v1.655a.83.83 0 00.831.831h7.878v1.755a.83.83 0 00.831.831h12.272a.83.83 0 00.831-.831V69.405a.83.83 0 00-.83-.831z"
          strokeWidth={2.6792}
        />
      </g>
      <g id="light-8-0" strokeWidth={1.6787}>
        <path
          id="path1279-5-6"
          d="M73.741 36.991h16.674a4.153 4.153 0 004.153-4.153V21.435a4.154 4.154 0 00-4.154-4.154H73.741z"
          fill="#96c9eb"
          strokeWidth={2.6792}
        />
      </g>
      <g id="dark-1-5" fill="#61859c" strokeWidth={2.6792}>
        <path
          id="path1282-5-0"
          d="M71.658 8.442a1 1 0 01.764.355l1.231 1.459a.84.84 0 01.088.371V43.01c0 .918-.744 1.662-1.662 1.662H27.127a1.662 1.662 0 01-1.662-1.662V10.627c0-.129.03-.256.088-.371l1.231-1.459a1 1 0 01.764-.355z"
          className={EstadosSIS1.VAux2S1}
        />
        <path
          id="path1284-2-9"
          d="M25.553 10.256l1.231-1.459a1 1 0 01.764-.355h44.11a1 1 0 01.764.355l1.231 1.459z"
        />
      </g>
      <g id="shadow-9-4" fill="#547387" strokeWidth={2.6792}>
        <path
          id="path1287-5-9"
          d="M13.376 90.471H1.443a1 1 0 01-1-1v-3.03h13.934v3.03c-.001.552-.448 1-1.001 1z"
        />
        <path
          id="path1289-5-6"
          d="M99.19 90.471H87.256a1 1 0 01-1-1v-3.03h13.934v3.03a1 1 0 01-1 1z"
        />
        <path
          id="polygon1291-6-6"
          d="M29.435 66.697L71.497 66.697 71.497 65.062 69.092 65.062 69.092 62.985 32.311 62.985 32.311 65.062 29.435 65.062z"
        />
        <path
          id="rect1293-9-9"
          d="M40.535 44.672H59.626999999999995V47.51H40.535z"
        />
        <path id="rect1295-7-0" d="M23.18 56.78H77.644V57.78H23.18z" />
        <path
          id="path1297-7-6"
          d="M73.741 34.707v2.284h16.673c1.617 0 3.004-.934 3.69-2.284z"
        />
        <path
          id="path1299-2-5"
          d="M77.547 85.399v1.655a.83.83 0 00.831.831h7.878v-2.486z"
        />
        <path
          id="path1301-8-8"
          d="M14.376 85.399v2.486h8.376a.83.83 0 00.83-.83v-1.656z"
        />
        <path
          id="polyline1303-0-5"
          d="M73.216 83.649L77.547 83.649 77.547 85.399 73.216 85.399"
        />
        <path
          id="rect1305-6-9"
          d="M23.583 83.649H27.668999999999997V85.399H23.583z"
        />
        <path
          id="rect1307-5-1"
          d="M23.583 73.187H24.083V85.39999999999999H23.583z"
        />
        <path id="rect1309-2-5" d="M14.376 72.479H14.876V86.442H14.376z" />
        <path id="rect1311-3-4" d="M86.256 70.687H86.756V87.15H86.256z" />
        <path id="rect1313-2-4" d="M77.548 72.479H78.048V86.442H77.548z" />
        <path
          id="rect1315-1-6"
          d="M27.169 72.937H27.669V85.39999999999999H27.169z"
        />
        <path
          id="rect1317-5-0"
          d="M73.217 72.937H73.717V85.39999999999999H73.217z"
        />
        <path
          id="path1319-5-3"
          d="M32.823 88.246h-3.412a3.323 3.323 0 003.323 3.323h35.355a3.322 3.322 0 003.322-3.323h-3.338c-10.67 1.231-24.579 1.231-35.25 0z"
        />
        <circle id="circle1321-1-9" cx={29.112} cy={14.532} r={2.17} />
        <circle id="circle1323-5-6" cx={70.303} cy={14.532} r={2.17} />
        <circle id="circle1325-2-3" cx={29.112} cy={40.957} r={2.17} />
        <circle id="circle1327-3-2" cx={70.303} cy={40.957} r={2.17} />
      </g>
      <g id="hlight-2-7" fill="#b0dfff" strokeWidth={2.6792}>
        <path
          id="path1330-6-2"
          d="M14.377 72.604H.443v-3.199a.83.83 0 01.831-.831h12.272a.83.83 0 01.831.831z"
        />
        <path
          id="path1332-4-5"
          d="M100.19 72.604H86.256v-3.199a.83.83 0 01.831-.831h12.272a.83.83 0 01.831.831z"
        />
        <path
          id="path1334-6-6"
          d="M23.583 71.991a.83.83 0 00-.831-.831h-8.376v3.027h9.206v-2.196z"
        />
        <path
          id="path1336-5-5"
          d="M78.378 71.16a.83.83 0 00-.831.831v2.196h8.709V71.16z"
        />
        <path
          id="path1338-4-8"
          d="M90.415 17.281H73.741v2.729h20.56a4.142 4.142 0 00-3.886-2.729z"
        />
        <path
          id="rect1340-5-1"
          d="M23.583 72.937H27.668999999999997V73.937H23.583z"
        />
        <path id="rect1342-1-0" d="M73.216 72.937H77.547V73.937H73.216z" />
        <path
          id="rect1344-1-2"
          d="M32.461 50.01H68.61099999999999V51.01H32.461z"
        />
        <path
          id="polygon1346-3-7"
          d="M70.982 51.01L70.982 50.01 73.383 50.01 73.883 51.01z"
        />
        <path
          id="polygon1348-6-0"
          d="M26.562 51.01L27.062 50.01 29.963 50.01 29.963 51.01z"
        />
        <path
          id="path1350-9-8"
          d="M73.216 71.426c-12.574 2.213-32.961 2.213-45.536 0"
        />
        <path
          id="path1352-1-5"
          d="M75.809 52.532c-14.006.722-36.714.722-50.72 0"
        />
      </g>
    </g>
    <g
      id="g1355-0-1"
      transform="matrix(0 -.14359 -.173 0 436.43 83.422)"
      strokeWidth={1.6787}
    >
      <g id="frame-4-3" strokeWidth={1.6787}>
        <path
          id="rect1271-0-6"
          fill="none"
          strokeWidth={2.6792}
          d="M0 0H100V100H0z"
        />
      </g>
      <g id="shape-81-7" fill="#77a3bf" strokeWidth={1.6787}>
        <path
          id="path1274-2-0"
          d="M99.359 68.574H87.087a.83.83 0 00-.831.831v1.755h-7.878a.83.83 0 00-.831.831v.946h-4.331v-.947a.83.83 0 00-.831-.831h-.974v-5.858c0-.082-.018-.159-.024-.239h2.517v-2.077h.415a3.323 3.323 0 003.323-3.323v-4.251a3.323 3.323 0 00-3.323-3.323h-.176l-.24-.431-.5-1.62h-.901l-.012-.027h-1.501v-1.532h-2.378v1.532h-8.985v-5.338H72.08c.918 0 1.662-.744 1.662-1.662v-6.019h16.674a4.153 4.153 0 004.153-4.153V21.435a4.154 4.154 0 00-4.154-4.154H73.741v-6.654a.837.837 0 00-.088-.371l-1.231-1.459a1 1 0 00-.764-.355h-44.11a1 1 0 00-.764.355l-1.231 1.459a.827.827 0 00-.088.371V43.01c0 .918.744 1.662 1.662 1.662h13.408v5.338h-8.074v-1.532h-2.378v1.532h-3.08l-.664 2.143-1.14.2a3.324 3.324 0 00-2.02 3.057v4.251a3.323 3.323 0 003.323 3.323h.995v2.077h1.938c-.006.08-.024.157-.024.239v5.858H28.5a.83.83 0 00-.831.831v.946h-4.086v-.946a.83.83 0 00-.831-.831h-8.376v-1.755a.83.83 0 00-.831-.831H1.273a.83.83 0 00-.831.831V89.64a.83.83 0 00.831.831h12.273a.83.83 0 00.83-.83v-1.756h8.376a.83.83 0 00.83-.83v-1.656h4.086v1.655a.83.83 0 00.831.831h.911v.361a3.323 3.323 0 003.323 3.323h35.355a3.322 3.322 0 003.322-3.322v-.362h.973a.832.832 0 00.832-.832v-1.654h4.331v1.655a.83.83 0 00.831.831h7.878v1.755a.83.83 0 00.831.831h12.272a.83.83 0 00.831-.831V69.405a.83.83 0 00-.83-.831z"
          strokeWidth={2.6792}
        />
      </g>
      <g id="light-7-9" strokeWidth={1.6787}>
        <path
          id="path1279-7-1"
          d="M73.741 36.991h16.674a4.153 4.153 0 004.153-4.153V21.435a4.154 4.154 0 00-4.154-4.154H73.741z"
          fill="#96c9eb"
          strokeWidth={2.6792}
        />
      </g>
      <g id="dark-0-9" fill="#61859c" strokeWidth={2.6792}>
        <path
          id="path1282-7-7"
          d="M71.658 8.442a1 1 0 01.764.355l1.231 1.459a.84.84 0 01.088.371V43.01c0 .918-.744 1.662-1.662 1.662H27.127a1.662 1.662 0 01-1.662-1.662V10.627c0-.129.03-.256.088-.371l1.231-1.459a1 1 0 01.764-.355z"
          className={EstadosSIS2.VAux1S2}
        />
        <path
          id="path1284-23-6"
          d="M25.553 10.256l1.231-1.459a1 1 0 01.764-.355h44.11a1 1 0 01.764.355l1.231 1.459z"
        />
      </g>
      <g id="shadow-3-5" fill="#547387" strokeWidth={2.6792}>
        <path
          id="path1287-9-3"
          d="M13.376 90.471H1.443a1 1 0 01-1-1v-3.03h13.934v3.03c-.001.552-.448 1-1.001 1z"
        />
        <path
          id="path1289-3-9"
          d="M99.19 90.471H87.256a1 1 0 01-1-1v-3.03h13.934v3.03a1 1 0 01-1 1z"
        />
        <path
          id="polygon1291-2-3"
          d="M69.092 62.985L32.311 62.985 32.311 65.062 29.435 65.062 29.435 66.697 71.497 66.697 71.497 65.062 69.092 65.062z"
        />
        <path
          id="rect1293-6-4"
          d="M40.535 44.672H59.626999999999995V47.51H40.535z"
        />
        <path id="rect1295-3-5" d="M23.18 56.78H77.644V57.78H23.18z" />
        <path
          id="path1297-0-2"
          d="M73.741 34.707v2.284h16.673c1.617 0 3.004-.934 3.69-2.284z"
        />
        <path
          id="path1299-9-1"
          d="M77.547 85.399v1.655a.83.83 0 00.831.831h7.878v-2.486z"
        />
        <path
          id="path1301-3-5"
          d="M14.376 85.399v2.486h8.376a.83.83 0 00.83-.83v-1.656z"
        />
        <path
          id="polyline1303-4-7"
          d="M73.216 83.649L77.547 83.649 77.547 85.399 73.216 85.399"
        />
        <path
          id="rect1305-4-9"
          d="M23.583 83.649H27.668999999999997V85.399H23.583z"
        />
        <path
          id="rect1307-7-0"
          d="M23.583 73.187H24.083V85.39999999999999H23.583z"
        />
        <path id="rect1309-9-5" d="M14.376 72.479H14.876V86.442H14.376z" />
        <path id="rect1311-8-5" d="M86.256 70.687H86.756V87.15H86.256z" />
        <path id="rect1313-1-6" d="M77.548 72.479H78.048V86.442H77.548z" />
        <path
          id="rect1315-5-1"
          d="M27.169 72.937H27.669V85.39999999999999H27.169z"
        />
        <path
          id="rect1317-1-7"
          d="M73.217 72.937H73.717V85.39999999999999H73.217z"
        />
        <path
          id="path1319-2-1"
          d="M32.823 88.246h-3.412a3.323 3.323 0 003.323 3.323h35.355a3.322 3.322 0 003.322-3.323h-3.338c-10.67 1.231-24.579 1.231-35.25 0z"
        />
        <circle id="circle1321-4-1" cx={29.112} cy={14.532} r={2.17} />
        <circle id="circle1323-0-7" cx={70.303} cy={14.532} r={2.17} />
        <circle id="circle1325-6-3" cx={29.112} cy={40.957} r={2.17} />
        <circle id="circle1327-7-2" cx={70.303} cy={40.957} r={2.17} />
      </g>
      <g id="hlight-3-1" fill="#b0dfff" strokeWidth={2.6792}>
        <path
          id="path1330-5-0"
          d="M14.377 72.604H.443v-3.199a.83.83 0 01.831-.831h12.272a.83.83 0 01.831.831z"
        />
        <path
          id="path1332-2-7"
          d="M100.19 72.604H86.256v-3.199a.83.83 0 01.831-.831h12.272a.83.83 0 01.831.831z"
        />
        <path
          id="path1334-2-1"
          d="M23.583 71.991a.83.83 0 00-.831-.831h-8.376v3.027h9.206v-2.196z"
        />
        <path
          id="path1336-8-8"
          d="M78.378 71.16a.83.83 0 00-.831.831v2.196h8.709V71.16z"
        />
        <path
          id="path1338-9-8"
          d="M90.415 17.281H73.741v2.729h20.56a4.142 4.142 0 00-3.886-2.729z"
        />
        <path
          id="rect1340-7-1"
          d="M23.583 72.937H27.668999999999997V73.937H23.583z"
        />
        <path id="rect1342-18-4" d="M73.216 72.937H77.547V73.937H73.216z" />
        <path
          id="rect1344-2-4"
          d="M32.461 50.01H68.61099999999999V51.01H32.461z"
        />
        <path
          id="polygon1346-2-6"
          d="M70.982 51.01L70.982 50.01 73.383 50.01 73.883 51.01z"
        />
        <path
          id="polygon1348-3-8"
          d="M26.562 51.01L27.062 50.01 29.963 50.01 29.963 51.01z"
        />
        <path
          id="path1350-1-9"
          d="M73.216 71.426c-12.574 2.213-32.961 2.213-45.536 0"
        />
        <path
          id="path1352-0-8"
          d="M75.809 52.532c-14.006.722-36.714.722-50.72 0"
        />
      </g>
    </g>
    <g
      id="g1355-8-6-0"
      transform="matrix(0 -.14359 -.173 0 436.43 115.76)"
      strokeWidth={1.6787}
    >
      <g id="frame-5-8-0" strokeWidth={1.6787}>
        <path
          id="rect1271-7-7-7"
          fill="none"
          strokeWidth={2.6792}
          d="M0 0H100V100H0z"
        />
      </g>
      <g id="shape-8-6-5" fill="#77a3bf" strokeWidth={1.6787}>
        <path
          id="path1274-0-9-2"
          d="M99.359 68.574H87.087a.83.83 0 00-.831.831v1.755h-7.878a.83.83 0 00-.831.831v.946h-4.331v-.947a.83.83 0 00-.831-.831h-.974v-5.858c0-.082-.018-.159-.024-.239h2.517v-2.077h.415a3.323 3.323 0 003.323-3.323v-4.251a3.323 3.323 0 00-3.323-3.323h-.176l-.24-.431-.5-1.62h-.901l-.012-.027h-1.501v-1.532h-2.378v1.532h-8.985v-5.338H72.08c.918 0 1.662-.744 1.662-1.662v-6.019h16.674a4.153 4.153 0 004.153-4.153V21.435a4.154 4.154 0 00-4.154-4.154H73.741v-6.654a.837.837 0 00-.088-.371l-1.231-1.459a1 1 0 00-.764-.355h-44.11a1 1 0 00-.764.355l-1.231 1.459a.827.827 0 00-.088.371V43.01c0 .918.744 1.662 1.662 1.662h13.408v5.338h-8.074v-1.532h-2.378v1.532h-3.08l-.664 2.143-1.14.2a3.324 3.324 0 00-2.02 3.057v4.251a3.323 3.323 0 003.323 3.323h.995v2.077h1.938c-.006.08-.024.157-.024.239v5.858H28.5a.83.83 0 00-.831.831v.946h-4.086v-.946a.83.83 0 00-.831-.831h-8.376v-1.755a.83.83 0 00-.831-.831H1.273a.83.83 0 00-.831.831V89.64a.83.83 0 00.831.831h12.273a.83.83 0 00.83-.83v-1.756h8.376a.83.83 0 00.83-.83v-1.656h4.086v1.655a.83.83 0 00.831.831h.911v.361a3.323 3.323 0 003.323 3.323h35.355a3.322 3.322 0 003.322-3.322v-.362h.973a.832.832 0 00.832-.832v-1.654h4.331v1.655a.83.83 0 00.831.831h7.878v1.755a.83.83 0 00.831.831h12.272a.83.83 0 00.831-.831V69.405a.83.83 0 00-.83-.831z"
          strokeWidth={2.6792}
        />
      </g>
      <g id="light-8-0-6" strokeWidth={1.6787}>
        <path
          id="path1279-5-6-3"
          d="M73.741 36.991h16.674a4.153 4.153 0 004.153-4.153V21.435a4.154 4.154 0 00-4.154-4.154H73.741z"
          fill="#96c9eb"
          strokeWidth={2.6792}
        />
      </g>
      <g id="dark-1-5-8" fill="#61859c" strokeWidth={2.6792}>
        <path
          id="path1282-5-0-2"
          d="M71.658 8.442a1 1 0 01.764.355l1.231 1.459a.84.84 0 01.088.371V43.01c0 .918-.744 1.662-1.662 1.662H27.127a1.662 1.662 0 01-1.662-1.662V10.627c0-.129.03-.256.088-.371l1.231-1.459a1 1 0 01.764-.355z"
          className={EstadosSIS2.VAux2S2}
        />
        <path
          id="path1284-2-9-3"
          d="M25.553 10.256l1.231-1.459a1 1 0 01.764-.355h44.11a1 1 0 01.764.355l1.231 1.459z"
        />
      </g>
      <g id="shadow-9-4-5" fill="#547387" strokeWidth={2.6792}>
        <path
          id="path1287-5-9-0"
          d="M13.376 90.471H1.443a1 1 0 01-1-1v-3.03h13.934v3.03c-.001.552-.448 1-1.001 1z"
        />
        <path
          id="path1289-5-6-4"
          d="M99.19 90.471H87.256a1 1 0 01-1-1v-3.03h13.934v3.03a1 1 0 01-1 1z"
        />
        <path
          id="polygon1291-6-6-3"
          d="M29.435 66.697L71.497 66.697 71.497 65.062 69.092 65.062 69.092 62.985 32.311 62.985 32.311 65.062 29.435 65.062z"
        />
        <path
          id="rect1293-9-9-0"
          d="M40.535 44.672H59.626999999999995V47.51H40.535z"
        />
        <path id="rect1295-7-0-4" d="M23.18 56.78H77.644V57.78H23.18z" />
        <path
          id="path1297-7-6-9"
          d="M73.741 34.707v2.284h16.673c1.617 0 3.004-.934 3.69-2.284z"
        />
        <path
          id="path1299-2-5-3"
          d="M77.547 85.399v1.655a.83.83 0 00.831.831h7.878v-2.486z"
        />
        <path
          id="path1301-8-8-4"
          d="M14.376 85.399v2.486h8.376a.83.83 0 00.83-.83v-1.656z"
        />
        <path
          id="polyline1303-0-5-8"
          d="M73.216 83.649L77.547 83.649 77.547 85.399 73.216 85.399"
        />
        <path
          id="rect1305-6-9-6"
          d="M23.583 83.649H27.668999999999997V85.399H23.583z"
        />
        <path
          id="rect1307-5-1-1"
          d="M23.583 73.187H24.083V85.39999999999999H23.583z"
        />
        <path
          id="rect1309-2-5-2"
          d="M14.376 72.479H14.876V86.442H14.376z"
        />
        <path id="rect1311-3-4-6" d="M86.256 70.687H86.756V87.15H86.256z" />
        <path
          id="rect1313-2-4-2"
          d="M77.548 72.479H78.048V86.442H77.548z"
        />
        <path
          id="rect1315-1-6-3"
          d="M27.169 72.937H27.669V85.39999999999999H27.169z"
        />
        <path
          id="rect1317-5-0-0"
          d="M73.217 72.937H73.717V85.39999999999999H73.217z"
        />
        <path
          id="path1319-5-3-7"
          d="M32.823 88.246h-3.412a3.323 3.323 0 003.323 3.323h35.355a3.322 3.322 0 003.322-3.323h-3.338c-10.67 1.231-24.579 1.231-35.25 0z"
        />
        <circle id="circle1321-1-9-5" cx={29.112} cy={14.532} r={2.17} />
        <circle id="circle1323-5-6-0" cx={70.303} cy={14.532} r={2.17} />
        <circle id="circle1325-2-3-0" cx={29.112} cy={40.957} r={2.17} />
        <circle id="circle1327-3-2-0" cx={70.303} cy={40.957} r={2.17} />
      </g>
      <g id="hlight-2-7-6" fill="#b0dfff" strokeWidth={2.6792}>
        <path
          id="path1330-6-2-6"
          d="M14.377 72.604H.443v-3.199a.83.83 0 01.831-.831h12.272a.83.83 0 01.831.831z"
        />
        <path
          id="path1332-4-5-3"
          d="M100.19 72.604H86.256v-3.199a.83.83 0 01.831-.831h12.272a.83.83 0 01.831.831z"
        />
        <path
          id="path1334-6-6-8"
          d="M23.583 71.991a.83.83 0 00-.831-.831h-8.376v3.027h9.206v-2.196z"
        />
        <path
          id="path1336-5-5-9"
          d="M78.378 71.16a.83.83 0 00-.831.831v2.196h8.709V71.16z"
        />
        <path
          id="path1338-4-8-2"
          d="M90.415 17.281H73.741v2.729h20.56a4.142 4.142 0 00-3.886-2.729z"
        />
        <path
          id="rect1340-5-1-4"
          d="M23.583 72.937H27.668999999999997V73.937H23.583z"
        />
        <path
          id="rect1342-1-0-8"
          d="M73.216 72.937H77.547V73.937H73.216z"
        />
        <path
          id="rect1344-1-2-1"
          d="M32.461 50.01H68.61099999999999V51.01H32.461z"
        />
        <path
          id="polygon1346-3-7-6"
          d="M70.982 51.01L70.982 50.01 73.383 50.01 73.883 51.01z"
        />
        <path
          id="polygon1348-6-0-5"
          d="M26.562 51.01L27.062 50.01 29.963 50.01 29.963 51.01z"
        />
        <path
          id="path1350-9-8-6"
          d="M73.216 71.426c-12.574 2.213-32.961 2.213-45.536 0"
        />
        <path
          id="path1352-1-5-3"
          d="M75.809 52.532c-14.006.722-36.714.722-50.72 0"
        /> 
      </g>
    </g> 
    <text
      id="tret_chill4-4-5-89"
      transform="scale(1.0629 .94079)"
      x={400.90454}
      y={183.53922}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      letterSpacing={0}
      strokeWidth={0.69426}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-1-7-1-1-0-6"
        x={400.90454}
        y={183.53922}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.175px"
        strokeWidth={0.69426}
      >
        <tspan
          id="tspan1097-8-7-5-0-1"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.175px"
          strokeWidth={0.69426}
        >
          {ParametrosSIS2.LoadB2_1} %
        </tspan>
      </tspan>
    </text>
    <text
      id="tret_chill4-4-5-89-9"
      transform="scale(1.0629 .94079)"
      x={400.90482}
      y={220.50932}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      letterSpacing={0}
      strokeWidth={0.69426}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-1-7-1-1-0-6-8"
        x={400.90482}
        y={220.50932}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.175px"
        strokeWidth={0.69426}
      >
        <tspan
          id="tspan1097-8-7-5-0-1-8"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.175px"
          strokeWidth={0.69426}
        >
          {ParametrosSIS2.LoadB2_2} %
        </tspan>
      </tspan>
    </text>
    <text
      id="tret_chill4-4-5-89-1"
      transform="scale(1.0629 .94079)"
      x={71.920265}
      y={183.53899}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      letterSpacing={0}
      strokeWidth={0.69426}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-1-7-1-1-0-6-5"
        x={71.920265}
        y={183.53899}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.175px"
        strokeWidth={0.69426}
      >
        <tspan
          id="tspan1097-8-7-5-0-1-2"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.175px"
          strokeWidth={0.69426}
        >
          {ParametrosSIS1.LoadB2_3} %
        </tspan>
      </tspan>
    </text>
    <text
      id="tret_chill4-4-5-89-9-5"
      transform="scale(1.0629 .94079)"
      x={71.92054}
      y={220.50909}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      letterSpacing={0}
      strokeWidth={0.69426}
      wordSpacing={0}
    >
      <tspan
        id="tspan884-5-9-8-1-7-1-1-0-6-8-9"
        x={71.92054}
        y={220.50909}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.175px"
        strokeWidth={0.69426}
      >
        <tspan
          id="tspan1097-8-7-5-0-1-8-4"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.175px"
          strokeWidth={0.69426}
        >
          {ParametrosSIS1.LoadB2_4} %
        </tspan>
      </tspan>
    </text>
    <path
      id="t9-63-8"
      transform="scale(-1 1)"
      fill="#0066FF"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-438.45 57.636H-425.86699999999996V60.6653H-438.45z"
    />
    <path
      id="rect2643-8-6-7-8"
      transform="matrix(-.38058 0 0 .28646 454.9 45.98)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-32-9)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={2.1793}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-2-9-0"
      transform="scale(-1 1)"
      fill="#0066FF"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M-438.87 125.06H-425.83V128.0893H-438.87z"
    />
    <path
      id="rect2643-8-6-9-07-0"
      transform="matrix(-.41396 0 0 .28646 456.83 113.4)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-3-6-8)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={2.0644}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-0"
      fill="#0066FF"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M70.933 57.812H83.763V60.8413H70.933z"
    />
    <path
      id="rect2643-8-6-5"
      transform="matrix(.3766 0 0 .28646 54.894 46.156)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-5)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={2.1908}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="t9-2-6"
      fill="#0066FF"
      opacity={0.768}
      paintOrder="markers fill stroke"
      d="M70.915 125.11H83.763V128.1393H70.915z"
    />
    <path
      id="rect2643-8-6-9-2"
      transform="matrix(.40494 0 0 .28646 53.344 113.45)"
      fillRule="evenodd"
      fill="url(#linearGradient6565)"
      filter="url(#filter2697-2-794-3-9)"
      opacity={0.35}
      paintOrder="markers stroke fill"
      strokeWidth={2.0872}
      d="M44.979 41.691H74.461V44.336800000000004H44.979z"
    />
    <path
      id="estado_eq"
      fillRule="evenodd"
      fill="#999"
      //fill="url(#linearGradient4474)"
      strokeWidth={0.26218}
      className={EstadosSIS2.SIS2habilitado}
      d="M383.45 3.5781H431.06399999999996V18.3581H383.45z"
    />
    <path
      id="estado_eq-7"
      fillRule="evenodd"
      fill="#999"
      //fill="url(#linearGradient4474-6)"
      strokeWidth={0.26218}
      className={EstadosSIS1.SIS1habilitado}
      d="M75.079 3.578H122.69299999999998V18.358H75.079z"
    />
     <path
      id="alarmaSIS2"
      fillRule="evenodd"
      fill="#999"
      //fill="url(#linearGradient4474)"
      opacity={0}
      strokeWidth={0.26218}
      className={AlarmasSIS2.SIS2alarma}
      d="M383.45 3.5781H431.06399999999996V18.3581H383.45z"
    />
    <path
      id="larmaSIS1"
      fillRule="evenodd"
      fill="#999"
      //fill="url(#linearGradient4474-6)"
      opacity={0}
      strokeWidth={0.26218}
      className={AlarmasSIS1.SIS1alarma}
      d="M75.079 3.578H122.69299999999998V18.358H75.079z"
    />
    <text
      id="text886-0-85-6-1-08-7-6"
      transform="scale(1.1427 .87513)"
      x={341.96982}
      y={14.176965}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.8965px"
      letterSpacing={0}
      strokeWidth={0.43534}
      wordSpacing={0}
    >
      <tspan
        id="tspan7940-2-8"
        x={341.96982}
        y={14.176965}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.8965px"
        strokeWidth={0.43534}
      >
        <tspan
          id="tspan5255-7"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.8965px"
          strokeWidth={0.43534}
        >
          {"SISTEMA 2 "}
        </tspan>
      </tspan>
    </text>
    <text
      id="text886-0-85-6-1-08-7"
      transform="scale(1.1427 .87513)"
      x={73.449417}
      y={14.177041}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.8965px"
      letterSpacing={0}
      strokeWidth={0.43534}
      wordSpacing={0}
    >
      <tspan
        id="tspan7940-2"
        x={73.449417}
        y={14.177041}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.8965px"
        strokeWidth={0.43534}
      >
        <tspan
          id="tspan5255"
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal"
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.8965px"
          strokeWidth={0.43534}
        >
          <tspan
            id="tspan11428"
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fontFamily="Franklin Gothic Medium"
            fontSize="5.8965px"
            strokeWidth={0.43534}
          >
            {"SISTEMA 1"}
          </tspan>
        </tspan>
      </tspan>
    </text>
  </g>
  )
}