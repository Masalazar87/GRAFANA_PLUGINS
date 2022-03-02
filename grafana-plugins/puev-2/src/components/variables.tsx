import React from 'react';

type Estado = {
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
    <g id="g2713" transform="translate(22.11 106.87)"
     //className = {Estado.Estadoclass}
    >
            <path
            id="path2609"
            d="M17.45 41.592l1.956-4.353-2.303-.41 7.13-6.909-1.988 4.606 3.344-.22z"
            fill="#fff"
          />
          <circle
            id="path2613-2-8"
            cx={21.431}
            cy={35.851}
            r={7.783}
            fill="none"
            paintOrder="markers stroke fill"
            strokeLinecap="square"
            strokeWidth={0.265}
            stroke="#3edce5"
          />
        </g>
        <path
          id="path3393"
          d="M52.887 71.494l4.627-3.103 4.17-2.02 4.62-1.422 4.421-1.024-.096 9.546-1.335.16-1.192.287-3 1.088-2.28 1.138-3.258 1.93z"
          fillOpacity={0.98039}
          //fill="#87CDDE"
          opacity={100}
          strokeOpacity={0.98039}
          strokeWidth={0.265}
          stroke="#1a5d81"
          className={Estado.Reactor1}
        />
        <path
          id="path3393-7"
          d="M102.06 78.514l2.674 4.278 1.683 3.818 1.104 4.193.74 3.996-8.918-.533-.084-1.2-.21-1.077-.87-2.73-.953-2.09-1.645-3z"
          fillOpacity={0.98039}
          //fill="#145e82"
          opacity={100}
          strokeOpacity={0.98039}
          strokeWidth={0.265}
          stroke="#1a5d81"
          className={Estado.Reactor3}
        />
        <path
          id="path3393-3-4"
          d="M94.055 124.75l-4.017 2.9-3.596 1.851-3.957 1.252-3.776.866.39-9.368 1.135-.114 1.018-.246 2.574-.973 1.968-1.045 2.82-1.793z"
          fillOpacity={0.98039}
          //fill="#145e82"
          opacity={100}
          strokeOpacity={0.98039}
          strokeWidth={0.265}
          stroke="#1a5d81"
          className={Estado.Reactor5}
        />
        <path
          id="path3393-3-4-7"
          d="M40.343 95.219l1.078-5.466 1.52-4.376 2.261-4.274 2.402-3.85 6.682 6.819-.831 1.057-.64 1.046-1.35 2.89-.81 2.417-.937 3.669z"
          fillOpacity={0.98039}
          //fill="#145e82"
          opacity={100}
          strokeOpacity={0.98039}
          strokeWidth={0.265}
          stroke="#1a5d81"
          className={Estado.Reactor8}
        />
        <path
          id="path3393-3-4-7-0"
          d="M49.146 118.55l-2.984-3.859-1.98-3.5-1.448-3.904-1.077-3.744 8.73-.202.188 1.135.301 1.01 1.091 2.528 1.113 1.914 1.869 2.724z"
          fillOpacity={0.98039}
          //fill="#145e82"
          opacity={100}
          strokeOpacity={0.98039}
          strokeWidth={0.265}
          stroke="#1a5d81"
          className={Estado.Reactor7}
        />
        <path
          id="path3393-3-4-7-0-7"
          d="M100.46 118.91l3.015-3.963 2-3.594 1.463-4.008 1.088-3.846-8.82-.207-.19 1.165-.304 1.037-1.102 2.596-1.124 1.966-1.889 2.797z"
          fillOpacity={0.98039}
          //fill="#145e82"
          opacity={100}
          strokeOpacity={0.98039}
          strokeWidth={0.265}
          stroke="#1a5d81"
          className={Estado.Reactor4}
        />
        <path
          id="path3393-3-0"
          d="M96.699 71.325l-4.627-3.103-4.17-2.02-4.62-1.422-4.421-1.024.096 9.546 1.335.16 1.192.287 3 1.088 2.28 1.138 3.258 1.93z"
          fillOpacity={0.98039}
          //fill="#145e82"
          opacity={100}
          strokeOpacity={0.98039}
          strokeWidth={0.265}
          stroke="#1a5d81"
          className={Estado.Reactor2}
        />
        <path
          id="path3393-3-4-7-0-4"
          d="M70.996 130.75l-4.756-.64-3.808-1.114-3.72-1.796-3.35-1.952 5.926-6.538.92.693.91.518 2.516 1.052 2.104.587 3.192.625z"
          fillOpacity={0.98039}
          //fill="#145e82"
          opacity={100}
          strokeOpacity={0.98039}
          strokeWidth={0.265}
          stroke="#1a5d81"
          className={Estado.Reactor6}
        />
  </g>
 )
}