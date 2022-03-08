import React from 'react';

type Estado = {
  Move: string;
    Estado: string;
    Estadoclass: string;
    Reactor1: string;
    Reactor2: string;
    Reactor3: string;
    Reactor4: string;
    Reactor5: string;
    Reactor6: string;
    Reactor7: string;
    Reactor8: string;
    Reactorcentral: string;
};
type Principal = {
    PUE: number;
    DCIE: number;
    ENERGIA: number;
};
type Cargas_kva = {
    Carga_total_kva: number;
    pdi_kva: number;
    rect_kva: number;
    sat_kva: number;  
    chiller_kva: number;
    uma_kva: number;
    bombas_kva: number;
    sg_kva: number;
    perd_pdi_kva: number; 
    perd_ups_kva: number;
};
type Cargas_uso = {
    Carga_total_uso: number;
    pdi_uso: number;
    rect_uso: number;
    sat_uso: number;
    chiller_uso: number;
    uma_uso: number;
    bombas_uso: number;
    sg_uso: number;
    perd_pdi_uso: number;
    perd_ups_uso: number;
};

export interface DataPue {
    Estado: Estado;
    Principal: Principal;
    Cargas_kva: Cargas_kva;
    Cargas_uso: Cargas_uso;
}

export const Variables = ({Estado, Principal, Cargas_kva, Cargas_uso }: DataPue) => {
 return (    
    <g id="layer3">
    <text
      id="carga_total_kva"
      transform="scale(.98531 1.0149)"
      x={271.44473}
      y={49.381535}
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
      fontSize="7.0557px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-15"
        x={271.44473}
        y={49.381535}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="7.0557px"
        strokeWidth={0.47056}
      >
        {Cargas_kva.Carga_total_kva}
      </tspan>
    </text>
    <text
      id="pdi_kva"
      transform="scale(.98531 1.0149)"
      x={271.46942}
      y={58.619873}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-3-3"
        x={271.46942}
        y={58.619873}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_kva.pdi_kva}
      </tspan>
    </text>
    <text
      id="sat_kva"
      transform="scale(.98531 1.0149)"
      x={271.46942}
      y={76.221008}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-4-7"
        x={271.46942}
        y={76.221008}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_kva.sat_kva}
      </tspan>
    </text>
    <text
      id="chill_kva"
      transform="scale(.98531 1.0149)"
      x={271.46942}
      y={85.021576}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-1-6"
        x={271.46942}
        y={85.021576}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_kva.chiller_kva}
      </tspan>
    </text>
    <text
      id="uma_kva"
      transform="scale(.98531 1.0149)"
      x={271.46942}
      y={93.822144}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-5-9"
        x={271.46942}
        y={93.822144}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_kva.uma_kva}
      </tspan>
    </text>
    <text
      id="bombas_kva"
      transform="scale(.98531 1.0149)"
      x={271.46942}
      y={102.62271}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-30-7"
        x={271.46942}
        y={102.62271}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_kva.bombas_kva}
      </tspan>
    </text>
    <text
      id="rect_kva"
      transform="scale(.98531 1.0149)"
      x={271.46942}
      y={67.420441}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-10-7"
        x={271.46942}
        y={67.420441}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_kva.rect_kva}
      </tspan>
    </text>
    <text
      id="carga_total_uso"
      transform="scale(.98531 1.0149)"
      x={303.13068}
      y={49.381535}
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
      fontSize="7.0557px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-15-6"
        x={303.13068}
        y={49.381535}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="7.0557px"
        strokeWidth={0.47056}
      >
        {Cargas_uso.Carga_total_uso}
      </tspan>
    </text>
    <text
      id="pdi_uso"
      transform="scale(.98531 1.0149)"
      x={303.15582}
      y={58.619873}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-3-3-6"
        x={303.15582}
        y={58.619873}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_uso.pdi_uso}
      </tspan>
    </text>
    <text
      id="sat_uso"
      transform="scale(.98531 1.0149)"
      x={303.15582}
      y={76.221008}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-4-7-6"
        x={303.15582}
        y={76.221008}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_uso.sat_uso}
      </tspan>
    </text>
    <text
      id="chill_uso"
      transform="scale(.98531 1.0149)"
      x={303.15582}
      y={85.021568}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-1-6-9"
        x={303.15582}
        y={85.021568}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_uso.chiller_uso}
      </tspan>
    </text>
    <text
      id="uma_uso"
      transform="scale(.98531 1.0149)"
      x={303.15582}
      y={93.822136}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-5-9-4"
        x={303.15582}
        y={93.822136}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_uso.uma_uso}
      </tspan>
    </text>
    <text
      id="bombas_uso"
      transform="scale(.98531 1.0149)"
      x={303.15582}
      y={102.6227}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-30-7-6"
        x={303.15582}
        y={102.6227}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_uso.bombas_uso}
      </tspan>
    </text>
    <text
      id="rect_uso"
      transform="scale(.98531 1.0149)"
      x={303.15582}
      y={67.420433}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-10-7-0"
        x={303.15582}
        y={67.420433}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_uso.rect_uso}
      </tspan>
    </text>
    <text
      id="pue"
      transform="scale(.9853 1.0149)"
      x={133.91106}
      y={82.44767}
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
      fontSize="8.4667px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362"
        x={133.91106}
        y={82.44767}
        strokeWidth={0.47056}
      >
        {Principal.PUE}
      </tspan>
    </text>
    <text
      id="dcie"
      transform="scale(.9853 1.0149)"
      x={133.91106}
      y={114.48903}
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
      fontSize="8.4667px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-9"
        x={133.91106}
        y={114.48903}
        strokeWidth={0.47056}
      >
        {Principal.DCIE} %
      </tspan>
    </text>
    <text
      id="energia_kwh"
      transform="scale(.9853 1.0149)"
      x={108.05232}
      y={143.93329}
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
      fontSize="7.4667px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-9-4"
        x={108.05232}
        y={143.93329}
        strokeWidth={0.47056}
      >
        {Principal.ENERGIA}
      </tspan>
    </text>
    <path
      id="estado_eq"
      fillRule="evenodd"
      fill="url(#linearGradient4474)"
      strokeWidth={0.26219}
      className = {Estado.Estado}
      d="M44.289 18.436H102.32300000000001V36.486999999999995H44.289z"
    />
    <text
      id="equipo"
      x={54.517338}
      y={31.282393}
      style={{
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="sans-serif"
      fontSize="9.7099px"
      letterSpacing={0}
      strokeWidth={0.36411}
      wordSpacing={0}
    >
      <tspan
        id="tspan6769"
        x={54.517338}
        y={31.282393}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="9.8777px"
        strokeWidth={0.36411}
      >
        {"DC - GYE"}
      </tspan>
    </text>
    <text
      id="sg_kva"
      transform="scale(.98531 1.0149)"
      x={271.46985}
      y={111.42328}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-30-7-4"
        x={271.46985}
        y={111.42328}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_kva.sg_kva}
      </tspan>
    </text>
    <text
      id="sg_uso"
      transform="scale(.98531 1.0149)"
      x={303.15622}
      y={111.42326}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-30-7-6-1"
        x={303.15622}
        y={111.42326}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_uso.sg_uso}
      </tspan>
    </text>
    <text
      id="perd_pdi_kva"
      transform="scale(.98531 1.0149)"
      x={271.46988}
      y={120.22384}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-30-7-63"
        x={271.46988}
        y={120.22384}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_kva.perd_pdi_kva}
      </tspan>
    </text>
    <text
      id="perd_ups_kva"
      transform="scale(.98531 1.0149)"
      x={271.69562}
      y={129.02441}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-30-7-2"
        x={271.69562}
        y={129.02441}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_kva.perd_ups_kva}
      </tspan>
    </text>
    <text
      id="perd_pdi_uso"
      transform="scale(.98531 1.0149)"
      x={303.15582}
      y={120.22382}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-30-7-63-8"
        x={303.15582}
        y={120.22382}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_uso.perd_pdi_uso}
      </tspan>
    </text>
    <text
      id="perd_ups_uso"
      transform="scale(.98531 1.0149)"
      x={303.15582}
      y={129.0244}
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
      fontSize="5.6445px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-30-7-2-8"
        x={303.15582}
        y={129.0244}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6445px"
        strokeWidth={0.47056}
      >
        {Cargas_uso.perd_ups_uso}
      </tspan>
    </text>
    <g
          id="reactor_puntas"
          fill="#95d4f5"
          strokeWidth=".26459px"
          stroke="#95d4f5"
          className={Estado.Reactor1}
          opacity={0}
        >
          <path
            id="path1254"
            d="M57.269 78.008l5.487-3.828-1.914-8.55c-3.926 1.914-7.613 4.199-10.463 7.784z"
          />
          <path
            id="path1254-5"
            d="M85.826 73.957l5.474 3.847 7.379-4.723c-3.14-3.034-6.549-5.718-10.893-7.17z"
          />
          <path
            id="path1254-1"
            d="M70.837 71.4l6.69.011 3.336-8.1c-4.313-.685-8.644-.928-13.036.374z"
          />
          <path
            id="path1254-0"
            d="M49.747 91.254l2.299-6.283-6.472-5.905c-2.118 3.819-3.827 7.805-4.106 12.378z"
          />
          <path
            id="path1254-0-3"
            d="M98.773 91.196l-2.299-6.283 6.472-5.905c2.118 3.819 3.828 7.805 4.106 12.378z"
          />
          <path
            id="path1254-2"
            d="M57.3 113.66l5.487 3.828-1.914 8.55c-3.926-1.914-7.613-4.199-10.463-7.784z"
          />
          <path
            id="path1254-5-1"
            d="M85.857 117.71l5.474-3.847 7.379 4.723c-3.14 3.034-6.549 5.717-10.893 7.17z"
          />
          <path
            id="path1254-1-3"
            d="M70.868 120.27l6.69-.011 3.336 8.1c-4.313.685-8.644.928-13.036-.374z"
          />
          <path
            id="path1254-0-8"
            d="M49.778 100.42l2.299 6.283-6.472 5.905c-2.118-3.819-3.827-7.805-4.106-12.378z"
          />
          <path
            id="path1254-0-3-2"
            d="M98.804 100.48l-2.299 6.283 6.472 5.905c2.118-3.819 3.828-7.805 4.106-12.378z"
          />
        </g>
        <circle
          id="path1116-1"
          cx={74.381}
          cy={95.805}
          r={13.282}
          fillOpacity={0.98039}
          fill="#87cdde"
          paintOrder="markers fill stroke"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={0.265}
          stroke="#89cedf"
          className={Estado.Reactor1}
          opacity={0}
        />
        <circle
          /*id="aura"
          cx={74.164}
          cy={95.78}
          r={18.253}
          fill="none"
          paintOrder="markers fill stroke"
          strokeDasharray="1.59002,.530008"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={0.865}
          stroke="#89cedf"
          className={Estado.Reactor2}
          opacity={0}*/
        />
    
  </g>
 )
}