import React from 'react';

type Estado = {
    Estado: string;
};
type Principal = {
    PUE: number;
    DCIE: number;
    ENERGIA: number;
};
type Cargas_kw = {
    Carga_total_kw: number;
    ups_kw: number;
    pdu_kw: number;
    rk_kw: number;
    uma_kw: number;
    chiller_kw: number;
    sg_kw: number;
};
type Cargas_kva = {
    Carga_total_kva: number;
    ups_kva: number;
    pdu_kva: number;
    rk_kva: number;
    uma_kva: number;
    chiller_kva: number;
    sg_kva: number;
};
type Cargas_uso = {
    Carga_total_uso: number;
    ups_uso: number;
    pdu_uso: number;
    rk_uso: number;
    uma_uso: number;
    chiller_uso: number;
    sg_uso: number;
};

export interface DataPue {
    Estado: Estado;
    Principal: Principal;
    Cargas_kw: Cargas_kw;
    Cargas_kva: Cargas_kva;
    Cargas_uso: Cargas_uso;
}

export const Variables = ({Estado, Principal, Cargas_kw, Cargas_kva, Cargas_uso }: DataPue) => {
 return (    
    <g id="layer3">
    <text
      id="carga_total_kw"
      transform="scale(.9853 1.0149)"
      x={245.15602}
      y={61.895672}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1"
        x={245.15602}
        y={61.895672}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_kw.Carga_total_kw}
      </tspan>
    </text>
    <text
      id="ups_kw"
      transform="scale(.9853 1.0149)"
      x={245.15602}
      y={70.612686}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-3"
        x={245.15602}
        y={70.612686}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_kw.ups_kw}
      </tspan>
    </text>
    <text
      id="rack_kw"
      transform="scale(.9853 1.0149)"
      x={245.15602}
      y={88.046738}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-4"
        x={245.15602}
        y={88.046738}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_kw.rk_kw}
      </tspan>
    </text>
    <text
      id="uma_kw"
      transform="scale(.9853 1.0149)"
      x={245.15602}
      y={96.763756}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-1"
        x={245.15602}
        y={96.763756}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_kw.uma_kw}
      </tspan>
    </text>
    <text
      id="chiller_kw"
      transform="scale(.9853 1.0149)"
      x={245.15602}
      y={105.48079}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-5"
        x={245.15602}
        y={105.48079}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_kw.chiller_kw}
      </tspan>
    </text>
    <text
      id="sg_kw"
      transform="scale(.9853 1.0149)"
      x={245.15602}
      y={114.19778}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-30"
        x={245.15602}
        y={114.19778}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_kw.sg_kw}
      </tspan>
    </text>
    <text
      id="pdu_kw"
      transform="scale(.9853 1.0149)"
      x={245.15602}
      y={79.329712}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-10"
        x={245.15602}
        y={79.329712}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_kw.pdu_kw}
      </tspan>
    </text>
    <text
      id="carga_total_kva"
      transform="scale(.9853 1.0149)"
      x={271.47202}
      y={61.895733}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-15"
        x={271.47202}
        y={61.895733}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_kva.Carga_total_kva}
      </tspan>
    </text>
    <text
      id="ups_kva"
      transform="scale(.9853 1.0149)"
      x={271.47202}
      y={70.612755}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-3-3"
        x={271.47202}
        y={70.612755}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_kva.ups_kva}
      </tspan>
    </text>
    <text
      id="rack_kva"
      transform="scale(.9853 1.0149)"
      x={271.47202}
      y={88.046799}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-4-7"
        x={271.47202}
        y={88.046799}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_kva.rk_kva}
      </tspan>
    </text>
    <text
      id="uma_kva"
      transform="scale(.9853 1.0149)"
      x={271.47202}
      y={96.763824}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-1-6"
        x={271.47202}
        y={96.763824}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_kva.uma_kva}
      </tspan>
    </text>
    <text
      id="chiller_kva"
      transform="scale(.9853 1.0149)"
      x={271.47202}
      y={105.48084}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-5-9"
        x={271.47202}
        y={105.48084}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_kva.chiller_kva}
      </tspan>
    </text>
    <text
      id="sg_kva"
      transform="scale(.9853 1.0149)"
      x={271.47202}
      y={114.19788}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-30-7"
        x={271.47202}
        y={114.19788}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_kva.sg_kva}
      </tspan>
    </text>
    <text
      id="pdu_kva"
      transform="scale(.9853 1.0149)"
      x={271.47202}
      y={79.329773}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-10-7"
        x={271.47202}
        y={79.329773}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_kva.pdu_kva}
      </tspan>
    </text>
    <text
      id="carga_total__uso"
      transform="scale(.9853 1.0149)"
      x={297.78787}
      y={61.895733}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-15-6"
        x={297.78787}
        y={61.895733}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_uso.Carga_total_uso}
      </tspan>
    </text>
    <text
      id="ups__uso"
      transform="scale(.9853 1.0149)"
      x={297.78787}
      y={70.612755}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-3-3-6"
        x={297.78787}
        y={70.612755}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_uso.ups_uso}
      </tspan>
    </text>
    <text
      id="rack__uso"
      transform="scale(.9853 1.0149)"
      x={297.78787}
      y={88.046799}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-4-7-6"
        x={297.78787}
        y={88.046799}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_uso.rk_uso}
      </tspan>
    </text>
    <text
      id="uma__uso"
      transform="scale(.9853 1.0149)"
      x={297.78787}
      y={96.763824}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-1-6-9"
        x={297.78787}
        y={96.763824}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_uso.uma_uso}
      </tspan>
    </text>
    <text
      id="chiller__uso"
      transform="scale(.9853 1.0149)"
      x={297.78787}
      y={105.48084}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-5-9-4"
        x={297.78787}
        y={105.48084}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_uso.chiller_uso}
      </tspan>
    </text>
    <text
      id="sg__uso"
      transform="scale(.9853 1.0149)"
      x={297.78787}
      y={114.19788}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-30-7-6"
        x={297.78787}
        y={114.19788}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_uso.sg_uso}
      </tspan>
    </text>
    <text
      id="pdu__uso"
      transform="scale(.9853 1.0149)"
      x={297.78787}
      y={79.329773}
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
      fontSize="6.35px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan7362-1-10-7-0"
        x={297.78787}
        y={79.329773}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fontFamily="Franklin Gothic Medium"
        fontSize="6.35px"
        strokeWidth={0.47056}
      >
        {Cargas_uso.pdu_uso}
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
        {Principal.DCIE}
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
      d="M44.289 18.436H102.32300000000001V36.486999999999995H44.289z"
      className={Estado.Estado}
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
    </g>   
  )
}