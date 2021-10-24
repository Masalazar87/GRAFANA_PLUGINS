import React from 'react';

type DatosGenerales = {
    IdEquipo: string;   
    TempSuministro: number;
    TempRetorno: number;
    Corriente: number;
};

type Compresor1 = {
    Estado: string;
    TempAceite: number;
    PSuccion: number;
    PDescarga: number;
    HFunc: number;
};
type Compresor2 = {
    Estado: string;
    TempAceite: number;
    PSuccion: number;
    PDescarga: number;
    HFunc: number;
};
type Indicadores = {
    Señal: string;
    Switch: string;
    Orden: string;
    Alarma: string; 
};

export interface DataGrupalchiller {
    DatosGenerales: DatosGenerales;
    Compresor1: Compresor1;
    Compresor2: Compresor2;
    Indicadores: Indicadores;
}

export const Variables = ({ DatosGenerales, Compresor1, Compresor2, Indicadores}: DataGrupalchiller) => {

return (
    <g id="layer2">
    <text
      id="chill1_flw_sw"
      transform="scale(1.149 .87035)"
      x={95.817177}
      y={54.823845}
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
      fontSize="4.5861px"
      letterSpacing={0}
      opacity={0.899}
      strokeWidth={0.22758}
      wordSpacing={0}
    >
      <tspan
        id="tspan4006-9"
        x={95.817177}
        y={54.823845}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="4.5861px"
        strokeWidth={0.22758}
      >
        {DatosGenerales.TempSuministro} °C
      </tspan>
    </text>
    <text
      id="chill1_t_reci"
      transform="scale(1.149 .87035)"
      x={95.783096}
      y={61.49596}
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
      fontSize="4.5861px"
      letterSpacing={0}
      opacity={0.899}
      strokeWidth={0.22758}
      wordSpacing={0}
    >
      <tspan
        id="tspan4006-3-05"
        x={95.783096}
        y={61.49596}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="4.5861px"
        strokeWidth={0.22758}
      >
        {DatosGenerales.TempRetorno} °C
      </tspan>
    </text>
    <text
      id="chill1_tem_ref_sum"
      transform="scale(1.149 .87035)"
      x={95.723656}
      y={68.200211}
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
      fontSize="4.5861px"
      letterSpacing={0}
      opacity={0.896}
      strokeWidth={0.22758}
      wordSpacing={0}
    >
      <tspan
        id="tspan4006-3-0-9"
        x={95.723656}
        y={68.200211}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="4.5861px"
        strokeWidth={0.22758}
      >
        {DatosGenerales.Corriente} A
      </tspan>
    </text>
    <text
      id="chill1_cmp1_curr"
      transform="scale(1.2306 .8126)"
      x={66.117966}
      y={98.667351}
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
      fontSize="3.8806px"
      letterSpacing={0}
      opacity={0.899}
      strokeWidth={0.22758}
      wordSpacing={0}
    >
      <tspan
        id="tspan4006-3-7-1-0"
        x={66.117966}
        y={98.667351}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.8806px"
        strokeWidth={0.22758}
      >
        {Compresor1.Estado}
      </tspan>
    </text>
    <text
      id="chill1_cmp1_curr-4"
      transform="scale(1.2306 .8126)"
      x={67.932755}
      y={105.5258}
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
      fontSize="3.8806px"
      letterSpacing={0}
      opacity={0.899}
      strokeWidth={0.22758}
      wordSpacing={0}
    >
      <tspan
        id="tspan4006-3-7-1-0-1"
        x={64.932755}
        y={105.5258}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.8806px"
        strokeWidth={0.22758}
      >
        {Compresor1.TempAceite} °C
      </tspan>
    </text>
    <text
      id="chill1_cmp1_curr-4-1"
      transform="scale(1.2306 .8126)"
      x={67.932755}
      y={112.38426}
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
      fontSize="3.8806px"
      letterSpacing={0}
      opacity={0.899}
      strokeWidth={0.22758}
      wordSpacing={0}
    >
      <tspan
        id="tspan4006-3-7-1-0-1-3"
        x={64.932755}
        y={112.38426}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.8806px"
        strokeWidth={0.22758}
      >
        {Compresor1.PSuccion} BAR
      </tspan>
    </text>
    <text
      id="chill1_cmp1_curr-4-0"
      transform="scale(1.2306 .8126)"
      x={67.932755}
      y={119.24271}
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
      fontSize="3.8806px"
      letterSpacing={0}
      opacity={0.899}
      strokeWidth={0.22758}
      wordSpacing={0}
    >
      <tspan
        id="tspan4006-3-7-1-0-1-9"
        x={64.932755}
        y={119.24271}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.8806px"
        strokeWidth={0.22758}
      >
        {Compresor1.PDescarga} BAR
      </tspan>
    </text>
    <text
      id="chill1_cmp1_curr-4-5"
      transform="scale(1.2306 .8126)"
      x={67.932755}
      y={126.10117}
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
      fontSize="3.8806px"
      letterSpacing={0}
      opacity={0.899}
      strokeWidth={0.22758}
      wordSpacing={0}
    >
      <tspan
        id="tspan4006-3-7-1-0-1-32"
        x={62.932755}
        y={126.10117}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.8806px"
        strokeWidth={0.22758}
      >
        {Compresor1.HFunc} H
      </tspan>
    </text>
    <text
      id="chill1_cmp1_curr-9"
      transform="scale(1.2306 .8126)"
      x={107.63018}
      y={98.667381}
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
      fontSize="3.8806px"
      letterSpacing={0}
      opacity={0.899}
      strokeWidth={0.22758}
      wordSpacing={0}
    >
      <tspan
        id="tspan4006-3-7-1-0-4"
        x={107.63018}
        y={98.667381}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.8806px"
        strokeWidth={0.22758}
      >
        {Compresor2.Estado}
      </tspan>
    </text>
    <text
      id="chill1_cmp1_curr-4-9"
      transform="scale(1.2306 .8126)"
      x={109.46382}
      y={105.5258}
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
      fontSize="3.8806px"
      letterSpacing={0}
      opacity={0.899}
      strokeWidth={0.22758}
      wordSpacing={0}
    >
      <tspan
        id="tspan4006-3-7-1-0-1-7"
        x={106.46382}
        y={105.5258}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.8806px"
        strokeWidth={0.22758}
      >
        {Compresor2.TempAceite} °C
      </tspan>
    </text>
    <text
      id="chill1_cmp1_curr-4-1-1"
      transform="scale(1.2306 .8126)"
      x={109.46382}
      y={112.38422}
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
      fontSize="3.8806px"
      letterSpacing={0}
      opacity={0.899}
      strokeWidth={0.22758}
      wordSpacing={0}
    >
      <tspan
        id="tspan4006-3-7-1-0-1-3-3"
        x={106.46382}
        y={112.38422}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.8806px"
        strokeWidth={0.22758}
      >
        {Compresor2.PSuccion} BAR
      </tspan>
    </text>
    <text
      id="chill1_cmp1_curr-4-0-2"
      transform="scale(1.2306 .8126)"
      x={109.46382}
      y={119.24265}
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
      fontSize="3.8806px"
      letterSpacing={0}
      opacity={0.899}
      strokeWidth={0.22758}
      wordSpacing={0}
    >
      <tspan
        id="tspan4006-3-7-1-0-1-9-7"
        x={106.46382}
        y={119.24265}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.8806px"
        strokeWidth={0.22758}
      >
        {Compresor2.PDescarga} BAR
      </tspan>
    </text>
    <text
      id="chill1_cmp1_curr-4-5-1"
      transform="scale(1.2306 .8126)"
      x={109.46382}
      y={126.10107}
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
      fontSize="3.8806px"
      letterSpacing={0}
      opacity={0.899}
      strokeWidth={0.22758}
      wordSpacing={0}
    >
      <tspan
        id="tspan4006-3-7-1-0-1-32-6"
        x={104.46382}
        y={126.10107}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="3.8806px"
        strokeWidth={0.22758}
      >
        {Compresor2.HFunc} H
      </tspan>
    </text>
    <ellipse
      id="chill1_st_sgnal-8-9"
      cx={19.972}
      cy={17.321}
      rx={3.7027}
      ry={3.8269}
      fillRule="evenodd"
      fill="#4d4d4d"
      className = {Indicadores.Señal}
      opacity={0.899}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="path2610-3-6-6-5-8-83"
      transform="matrix(1.2038 0 0 1.0627 -74.352 -16.94)"
      cx={78.266}
      cy={31.379}
      rx={2.3671}
      ry={1.9181}
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter3102-1-6-58-56)"
      opacity={0.35}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="chill1_st_sgnal-8-9-9"
      cx={33.12}
      cy={17.321}
      rx={3.7027}
      ry={3.8269}
      fillRule="evenodd"
      fill="#4d4d4d"
      opacity={0.899}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="path2610-3-6-6-5-8-83-0"
      transform="matrix(1.2038 0 0 1.0627 -61.204 -16.94)"
      cx={78.266}
      cy={31.379}
      rx={2.3671}
      ry={1.9181}
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter3102-1-6-58-56-4)"
      opacity={0.35}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="chill1_st_sgnal-8-9-4"
      cx={47.776}
      cy={17.321}
      rx={3.7027}
      ry={3.8269}
      fillRule="evenodd"
      fill="#4d4d4d"
      opacity={0.899}
      paintOrder="markers stroke fill"
      className = {Indicadores.Orden}
    />
    <ellipse
      id="path2610-3-6-6-5-8-83-1"
      transform="matrix(1.2038 0 0 1.0627 -46.548 -16.94)"
      cx={78.266}
      cy={31.379}
      rx={2.3671}
      ry={1.9181}
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter3102-1-6-58-56-2)"
      opacity={0.35}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="chill1_st_sgnal-8-9-7"
      cx={138.12}
      cy={17.321}
      rx={3.7027}
      ry={3.8269}
      fillRule="evenodd"
      fill="#4d4d4d"
      className = {Indicadores.Alarma}
      opacity={0.899}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="path2610-3-6-6-5-8-83-3"
      transform="matrix(1.2038 0 0 1.0627 43.793 -16.94)"
      cx={78.266}
      cy={31.379}
      rx={2.3671}
      ry={1.9181}
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter3102-1-6-58-56-41)"
      opacity={0.35}
      paintOrder="markers stroke fill"
    />
    <text
      id="nom-62"
      transform="scale(1.062 .94161)"
      x={32.335461}
      y={8.3279123}
      style={{
        fontFeatureSettings: "normal",
        fontVariantCaps: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="7.188px"
      letterSpacing={0}
      opacity={0.899}
      strokeWidth={0.22758}
      wordSpacing={0}
    >
      <tspan
        id="tspan17708-4-7-9-4"
        x={32.335461}
        y={8.3279123}
        style={{
          fontFeatureSettings: "normal",
          fontVariantCaps: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="7.188px"
        strokeWidth={0.22758}
      >
        {DatosGenerales.IdEquipo}
      </tspan>
    </text>
  </g>
 
)   
}