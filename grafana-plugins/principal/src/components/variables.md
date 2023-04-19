import React from 'react';

type ParametrosElec = {
    Vab_Tr01: number;
    Vbc_Tr01: number;
    Vca_Tr01: number;
    Ia_Tr01: number;
    Ib_Tr01: number;
    Ic_Tr01: number;
    Pt_Tr01: number;
    V_CMTAVG: number;
    V_CMTL1: number;
    V_CMTL2: number;
    V_CMTL3: number;
    P_SIS1: number;
    P_SIS2: number;
    PUE: number;
    DCIE: number
};
type ParametrosClima = {
    T_sumin: number;
    T_ret: number;
    uma1_TS: number; uma2_TS: number; uma3_TS: number; uma4_TS: number; uma5_TS: number; uma6_TS: number;
    uma7_TS: number; uma8_TS: number; uma9_TS: number; uma10_TS: number; uma11_TS: number; uma12_TS: number;
    uma1_TR: number; uma2_TR: number; uma3_TR: number; uma4_TR: number; uma5_TR: number; uma6_TR: number;
    uma7_TR: number; uma8_TR: number; uma9_TR: number; uma10_TR: number; uma11_TR: number; uma12_TR: number;
};
type ParametrosUPS_SIS1 = {
    V_in: number; V_out: number; I_out: number; P_out: number; Load: number;
    V_inCHI: number; V_outCHI: number; I_outCHI: number; P_outCHI: number; LoadCHI: number;
};
type ParametrosUPS_SIS2 = {
    V_in: number; V_out: number; I_out: number; P_out: number; Load: number;
    V_inCHI: number; V_outCHI: number; I_outCHI: number; P_outCHI: number; LoadCHI: number;
};
type ParametrosClima_SIS1 = {
    T_sumEA3: number; T_retEA3: number;
    T_sumEA4: number; T_retEA4: number;
    T_sum_prim: number; T_sum_sec: number; T_tanque: number; T_ret: number;
    LoadB3: number; LoadB4: number;
}; 
type ParametrosClima_SIS2 = {
    T_sumEA1: number; T_retEA1: number;
    T_sumEA2: number; T_retEA2: number;
    T_sum_prim: number; T_sum_sec: number; T_tanque: number; T_ret: number;
    LoadB1: number; LoadB2: number;
}; 
type ParametrosGEN_SIS1 = {
    V_out: number;
    I_out: number;
    P_out: number;
    Load: number;
}; 
type ParametrosGEN_SIS2 = {
    V_out: number;
    I_out: number;
    P_out: number;
    Load: number;
}; 
type Estados_Principales = {
    ups_SIS1: string; ups_SIS2: string;
    gen_SIS1: string; gen_SIS2: string;
    transf_in: string; transf_out: string;
    clima_SIS1: string; clima_SIS2: string;
    uma1: string; uma2: string; uma3: string; uma4:string; uma5: string; uma6: string;
    uma7: string; uma8: string; uma9: string; uma10:string; uma11: string; uma12: string;
    VAB_CMT: string; VBC_CMT: string; VCA_CMT: string; ST_CMT: string;
};
type Estados_SIS1 = {
    ups1: string; ups2: string; ups3: string; ups4: string; ups5: string; ups6: string; upschi1: string;
    gen1: string; gen2: string; gen3: string;
    Ea3: string; Ea4: string;
    b1_4: string; b1_5: string; b1_6: string;
    b2_3: string; b2_4: string;
    V1aux: string; V2aux: string;
    upsoffices_1a: string; upssat_1a: string; rec_1a: string;
};
type Estados_SIS2 = {
    ups1: string; ups2: string; ups3: string; ups4: string; ups5: string; ups6: string; upschi2: string;
    gen4: string; gen5: string; gen6: string;
    Ea1: string; Ea2: string;
    b1_1: string; b1_2: string; b1_3: string;
    b2_1: string; b2_2: string;
    V1aux: string; V2aux: string;
    upsnoc_2a: string; upssat_2a: string; rec_2a: string;
};
type Alarmas = {
    uma1: string; uma2: string; uma3: string; uma4:string; uma5: string; uma6: string;
    uma7: string; uma8: string; uma9: string; uma10:string; uma11: string; uma12: string;
    clima_SIS1: string; clima_SIS2: string;
};
type Alarmas_SIS1 = {
    ups1: string; ups2: string; ups3: string; ups4: string; ups5: string; ups6: string; upschi1: string;
    gen1: string; gen2: string; gen3: string;
    Ea3: string; Ea4: string; Ea3mant: string; Ea4mant: string;
    b1_4: string; b1_5: string; b1_6: string;
    b2_3: string; b2_4: string;
    upsoffices_1a: string; upssat_1a: string; //rec_1a: string;
};
type Alarmas_SIS2 = {
    ups1: string; ups2: string; ups3: string; ups4: string; ups5: string; ups6: string; upschi2: string;
    gen4: string; gen5: string; gen6: string;
    Ea1: string; Ea2: string; Ea1mant: string; Ea2mant: string;
    b1_1: string; b1_2: string; b1_3: string;
    b2_1: string; b2_2: string;
    V1aux: string; V2aux: string;
    upsnoc_2a: string; upssat_2a: string; //rec_2a: string;
};

export interface DataPrincipal {
    ParametrosElec: ParametrosElec;
    ParametrosClima: ParametrosClima;
    ParametrosUPS_SIS1: ParametrosUPS_SIS1;
    ParametrosUPS_SIS2: ParametrosUPS_SIS2;
    ParametrosClima_SIS1: ParametrosClima_SIS1;
    ParametrosClima_SIS2: ParametrosClima_SIS2;
    ParametrosGEN_SIS1: ParametrosGEN_SIS1;
    ParametrosGEN_SIS2: ParametrosGEN_SIS2;
    Estados_Principales: Estados_Principales;
    Estados_SIS1: Estados_SIS1;
    Estados_SIS2: Estados_SIS2;
    Alarmas: Alarmas;
    Alarmas_SIS1: Alarmas_SIS1;
    Alarmas_SIS2: Alarmas_SIS2;
}
export const Variables = ({ParametrosElec, ParametrosClima, ParametrosUPS_SIS1, ParametrosUPS_SIS2, ParametrosClima_SIS1, ParametrosClima_SIS2,
ParametrosGEN_SIS1, ParametrosGEN_SIS2, Estados_Principales, Estados_SIS1, Estados_SIS2, Alarmas, Alarmas_SIS1, Alarmas_SIS2 }: DataPrincipal) => {
return (
  <g id="layer5" transform="translate(-14.288)">
  <text
    id="tsum_uma10-2-1"
    transform="scale(1.0459 .95608)"
    x={146.26207}
    y={185.82642}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-9-6-2"
      x={146.26207}
      y={185.82642}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
      {ParametrosClima.uma12_TS}°
    </tspan>
  </text>
  <text
    id="tret_uma10-8-8"
    transform="scale(1.0459 .95608)"
    x={159.03003}
    y={185.84813}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-3-5-8"
      x={159.03003}
      y={185.84813}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
     {ParametrosClima.uma12_TR}°
    </tspan>
  </text>
  <text
    id="tsum_uma10-2"
    transform="scale(1.0459 .95608)"
    x={146.26207}
    y={175.30945}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-9-6"
      x={146.26207}
      y={175.30945}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
      {ParametrosClima.uma11_TS}°
    </tspan>
  </text>
  <text
    id="tret_uma10-8"
    transform="scale(1.0459 .95608)"
    x={159.03003}
    y={175.33116}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-3-5"
      x={159.03003}
      y={175.33116}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
       {ParametrosClima.uma11_TR}°
    </tspan>
  </text>
  <text
    id="tsum_uma1"
    transform="scale(1.0459 .95608)"
    x={146.26195}
    y={70.646545}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6"
      x={146.26195}
      y={70.646545}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
        {ParametrosClima.uma1_TS}°
    </tspan>
  </text>
  <text
    id="tret_uma1"
    transform="scale(1.0459 .95608)"
    x={159.02991}
    y={70.668243}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9"
      x={159.02991}
      y={70.668243}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
        {ParametrosClima.uma1_TR}°
    </tspan>
  </text>
  <text
    id="tsum_uma2"
    transform="scale(1.0459 .95608)"
    x={146.26195}
    y={81.107216}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-1"
      x={146.26195}
      y={81.107216}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
      {ParametrosClima.uma2_TS}°
    </tspan>
  </text>
  <text
    id="tret_uma2"
    transform="scale(1.0459 .95608)"
    x={159.02991}
    y={81.128922}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-9"
      x={159.02991}
      y={81.128922}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
       {ParametrosClima.uma2_TR}°
    </tspan>
  </text>
  <text
    id="tsum_uma3"
    transform="scale(1.0459 .95608)"
    x={146.26195}
    y={91.567871}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-2"
      x={146.26195}
      y={91.567871}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
       {ParametrosClima.uma3_TS}°
    </tspan>
  </text>
  <text
    id="tret_uma3"
    transform="scale(1.0459 .95608)"
    x={159.02991}
    y={91.589569}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-5"
      x={159.02991}
      y={91.589569}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
     {ParametrosClima.uma3_TR}°
    </tspan>
  </text>
  <text
    id="tsum_uma4"
    transform="scale(1.0459 .95608)"
    x={146.26195}
    y={102.0285}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-10"
      x={146.26195}
      y={102.0285}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
       {ParametrosClima.uma4_TS}°
    </tspan>
  </text>
  <text
    id="tret_uma4"
    transform="scale(1.0459 .95608)"
    x={159.02991}
    y={102.05026}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-6"
      x={159.02991}
      y={102.05026}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
       {ParametrosClima.uma4_TR}°
    </tspan>
  </text>
  <text
    id="tsum_uma5"
    transform="scale(1.0459 .95608)"
    x={146.26195}
    y={112.48917}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-6"
      x={146.26195}
      y={112.48917}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
      {ParametrosClima.uma5_TS}°
    </tspan>
  </text>
  <text
    id="tret_uma5"
    transform="scale(1.0459 .95608)"
    x={159.02991}
    y={112.5109}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-4"
      x={159.02991}
      y={112.5109}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
      {ParametrosClima.uma5_TR}°
    </tspan>
  </text>
  <text
    id="tsum_uma6"
    transform="scale(1.0459 .95608)"
    x={146.26195}
    y={122.94986}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-8"
      x={146.26195}
      y={122.94986}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
      {ParametrosClima.uma6_TS}°
    </tspan>
  </text>
  <text
    id="tret_uma6"
    transform="scale(1.0459 .95608)"
    x={159.02991}
    y={122.97157}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-63"
      x={159.02991}
      y={122.97157}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
      {ParametrosClima.uma6_TR}°
    </tspan>
  </text>
  <text
    id="tsum_uma7"
    transform="scale(1.0459 .95608)"
    x={146.26195}
    y={133.41049}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-5"
      x={146.26195}
      y={133.41049}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
      {ParametrosClima.uma7_TS}°
    </tspan>
  </text>
  <text
    id="tret_uma7"
    transform="scale(1.0459 .95608)"
    x={159.02991}
    y={133.43219}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-46"
      x={159.02991}
      y={133.43219}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
       {ParametrosClima.uma7_TR}°
    </tspan>
  </text>
  <text
    id="tsum_uma8"
    transform="scale(1.0459 .95608)"
    x={146.26195}
    y={143.87115}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-87"
      x={146.26195}
      y={143.87115}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
      {ParametrosClima.uma8_TS}°
    </tspan>
  </text>
  <text
    id="tret_uma8"
    transform="scale(1.0459 .95608)"
    x={159.02991}
    y={143.89287}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-8"
      x={159.02991}
      y={143.89287}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
       {ParametrosClima.uma8_TR}°
    </tspan>
  </text>
  <text
    id="tsum_uma9"
    transform="scale(1.0459 .95608)"
    x={146.26195}
    y={154.33183}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-0"
      x={146.26195}
      y={154.33183}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
       {ParametrosClima.uma9_TS}°
    </tspan>
  </text>
  <text
    id="tret_uma9"
    transform="scale(1.0459 .95608)"
    x={159.02991}
    y={154.35353}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-91"
      x={159.02991}
      y={154.35353}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
      {ParametrosClima.uma9_TR}°
    </tspan>
  </text>
  <text
    id="tsum_uma10"
    transform="scale(1.0459 .95608)"
    x={146.26195}
    y={164.79248}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-9"
      x={146.26195}
      y={164.79248}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
      {ParametrosClima.uma10_TS}°
    </tspan>
  </text>
  <text
    id="tret_uma10"
    transform="scale(1.0459 .95608)"
    x={159.02991}
    y={164.81419}
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
    fontSize="4.2318px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-3"
      x={159.02991}
      y={164.81419}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2318px"
      strokeWidth={0.43331}
    >
     {ParametrosClima.uma10_TR}°
    </tspan>
  </text>
  <ellipse
    id="st_uma10-7-9"
    cx={164.17}
    cy={171.77}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma12}
  />
  <ellipse
    id="st_trans-12-5-4-76-54-2-1"
    transform="matrix(.30428 0 0 .24778 152.2 127.51)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-10-9-2)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="st_uma10-7"
    cx={164.17}
    cy={161.71}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma11}
  />
  <ellipse
    id="st_trans-12-5-4-76-54-2"
    transform="matrix(.30428 0 0 .24778 152.2 117.46)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-10-9)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="st_uma1"
    cx={164.17}
    cy={60.678}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma1}
  />
  <ellipse
    id="st_trans-12-5-4-76"
    transform="matrix(.30428 0 0 .24778 152.2 16.42)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="st_uma2"
    cx={164.17}
    cy={70.787}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma2}
  />
  <ellipse
    id="st_trans-12-5-4-76-3"
    transform="matrix(.30428 0 0 .24778 152.2 26.529)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-5)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="st_uma3"
    cx={164.17}
    cy={80.896}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma3}
  />
  <ellipse
    id="st_trans-12-5-4-76-68"
    transform="matrix(.30428 0 0 .24778 152.2 36.638)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-7)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="st_uma4"
    cx={164.17}
    cy={91.005}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma4}
  />
  <ellipse
    id="st_trans-12-5-4-76-4"
    transform="matrix(.30428 0 0 .24778 152.2 46.747)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-71)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="st_uma5"
    cx={164.17}
    cy={101.11}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma5}
  />
  <ellipse
    id="st_trans-12-5-4-76-8"
    transform="matrix(.30428 0 0 .24778 152.2 56.856)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-0)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="st_uma6"
    cx={164.17}
    cy={111.22}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma6}
  />
  <ellipse
    id="st_trans-12-5-4-76-9"
    transform="matrix(.30428 0 0 .24778 152.2 66.965)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-9)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="st_uma7"
    cx={164.17}
    cy={121.33}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma7}
  />
  <ellipse
    id="st_trans-12-5-4-76-7"
    transform="matrix(.30428 0 0 .24778 152.2 77.074)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-675)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="st_uma8"
    cx={164.17}
    cy={131.44}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma8}
  />
  <ellipse
    id="st_trans-12-5-4-76-04"
    transform="matrix(.30428 0 0 .24778 152.2 87.183)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-4)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="st_uma9"
    cx={164.17}
    cy={141.55}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma9}
  />
  <ellipse
    id="st_trans-12-5-4-76-05"
    transform="matrix(.30428 0 0 .24778 152.2 97.292)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-8)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="st_uma10"
    cx={164.17}
    cy={151.66}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma10}
  />
  <ellipse
    id="st_trans-12-5-4-76-54"
    transform="matrix(.30428 0 0 .24778 152.2 107.4)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-10)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="alm_uma10-7-1"
    cx={172.82}
    cy={171.77}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Alarmas.uma12}
  />
  <ellipse
    id="st_trans-12-5-4-76-06-1-6-6"
    transform="matrix(.30428 0 0 .24778 160.86 127.51)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-67-2-1-0)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="alm_uma10-7"
    cx={172.82}
    cy={161.71}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Alarmas.uma11}
  />
  <ellipse
    id="st_trans-12-5-4-76-06-1-6"
    transform="matrix(.30428 0 0 .24778 160.86 117.46)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-67-2-1)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="alm_uma1"
    cx={172.82}
    cy={60.678}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Alarmas.uma1}
  />
  <ellipse
    id="alm_uma2"
    cx={172.82}
    cy={70.787}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Alarmas.uma2}
  />
  <ellipse
    id="st_trans-12-5-4-76-06-5"
    transform="matrix(.30428 0 0 .24778 160.86 26.529)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-67-6)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="alm_uma3"
    cx={172.82}
    cy={80.896}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Alarmas.uma3}
  />
  <ellipse
    id="st_trans-12-5-4-76-06-8"
    transform="matrix(.30428 0 0 .24778 160.86 36.638)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-67-1)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="alm_uma4"
    cx={172.82}
    cy={91.005}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Alarmas.uma4}
  />
  <ellipse
    id="st_trans-12-5-4-76-06-2"
    transform="matrix(.30428 0 0 .24778 160.86 46.747)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-67-27)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="alm_uma5"
    cx={172.82}
    cy={101.11}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Alarmas.uma5}
  />
  <ellipse
    id="st_trans-12-5-4-76-06-54"
    transform="matrix(.30428 0 0 .24778 160.86 56.856)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-67-22)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="alm_uma6"
    cx={172.82}
    cy={111.22}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Alarmas.uma6}
  />
  <ellipse
    id="st_trans-12-5-4-76-06-53"
    transform="matrix(.30428 0 0 .24778 160.86 66.965)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-67-13)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="alm_uma7"
    cx={172.82}
    cy={121.33}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Alarmas.uma7}
  />
  <ellipse
    id="st_trans-12-5-4-76-06-4"
    transform="matrix(.30428 0 0 .24778 160.86 77.074)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-67-0)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="alm_uma8"
    cx={172.82}
    cy={131.44}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Alarmas.uma8}
  />
  <ellipse
    id="st_trans-12-5-4-76-06-10"
    transform="matrix(.30428 0 0 .24778 160.86 87.183)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-67-19)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="alm_uma9"
    cx={172.82}
    cy={141.55}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Alarmas.uma9}
  />
  <ellipse
    id="st_trans-12-5-4-76-06-6"
    transform="matrix(.30428 0 0 .24778 160.86 97.292)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-67-4)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="alm_uma10"
    cx={172.82}
    cy={151.66}
    rx={1.7563}
    ry={1.8557}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Alarmas.uma10}
  />
  <ellipse
    id="st_trans-12-5-4-76-06-1"
    transform="matrix(.30428 0 0 .24778 160.86 107.4)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-67-2)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="st_trans-12-5-4-76-06"
    transform="matrix(.30428 0 0 .24778 160.86 16.42)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-67)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <text
    id="tret"
    transform="scale(1.0508 .95166)"
    x={319.4895}
    y={29.009403}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fillOpacity={0.73387}
    fill="#00aad4"
    fontFamily="Franklin Gothic Medium"
    fontSize="7.0556px"
    letterSpacing={0}
    strokeWidth={0.28918}
    wordSpacing={0}
  >
    <tspan
      id="tspan1960-4"
      x={319.4895}
      y={29.009403}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fillOpacity={0.73387}
      fill="#00aad4"
      fontFamily="Franklin Gothic Medium"
      fontSize="7.0556px"
      strokeWidth={0.28918}
    >
      {ParametrosClima.T_ret}
    </tspan>
  </text>
  <text
    id="tsum"
    transform="scale(1.0508 .95167)"
    x={154.19633}
    y={29.00918}
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
    fontSize="7.0556px"
    letterSpacing={0}
    strokeWidth={0.28918}
    wordSpacing={0}
  >
    <tspan
      id="tspan5844"
      x={154.19633}
      y={29.00918}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#00aad4"
      fontFamily="Franklin Gothic Medium"
      fontSize="7.0556px"
      strokeWidth={0.28918}
    >
      {ParametrosClima.T_sumin}
    </tspan>
  </text>
  <text
    id="vol_upsin"
    transform="scale(1.0508 .95161)"
    x={236.21196}
    y={23.23435}
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
    fontSize="6.35px"
    letterSpacing={0}
    strokeWidth={0.24491}
    wordSpacing={0}
  >
    <tspan
      id="tspan5101-4"
      x={236.21196}
      y={23.23435}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.35px"
      strokeWidth={0.24491}
    >
      {ParametrosElec.P_SIS1}
    </tspan>
  </text>
  <text
    id="vol_cmt"
    transform="scale(1.0508 .95161)"
    x={198.50215}
    y={23.212645}
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
    fontSize="6.35px"
    letterSpacing={0}
    strokeWidth={0.24491}
    wordSpacing={0}
  >
    <tspan
      id="tspan5101-4-9"
      x={198.50215}
      y={23.212645}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.35px"
      strokeWidth={0.24491}
    >
      {ParametrosElec.V_CMTAVG}
    </tspan>
  </text>
  <circle
    id="st_upss1"
    cx={403.8}
    cy={107.18}
    r={3.2985}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.ups_SIS1}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6"
    transform="matrix(.4776 0 0 .31621 385.06 49.912)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="st_upss2"
    cx={473.94}
    cy={107.18}
    rx={3.2985}
    ry={3.2987}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.ups_SIS2}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-5"
    transform="matrix(.47761 0 0 .31619 455.17 49.916)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-6)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
    id="st_gens1"
    cx={403.8}
    cy={53.535}
    r={3.2985}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_Principales.gen_SIS1}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-5"
    transform="matrix(.46943 0 0 .30963 385.42 -2.668)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-7)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="st_gens2"
    cx={473.94}
    cy={53.536}
    rx={3.2985}
    ry={3.2987}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_Principales.gen_SIS2}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-8"
    transform="matrix(.46945 0 0 .30962 455.57 -2.666)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-54)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <text
    id="pue"
    transform="scale(.89754 1.1142)"
    x={227.54941}
    y={164.20184}
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
    fontSize="7.0556px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-68-8-8"
      x={227.54941}
      y={164.20184}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="7.0556px"
      strokeWidth={0.43331}
    >
      {ParametrosElec.PUE}
    </tspan>
  </text>
  <text
    id="dcie"
    transform="scale(.84137 1.1885)"
    x={404.82684}
    y={154.20262}
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
    fontSize="7.0556px"
    letterSpacing={0}
    strokeWidth={0.43331}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-68-8-2"
      x={404.82684}
      y={154.20262}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="7.0556px"
      strokeWidth={0.43331}
    >
      {ParametrosElec.DCIE}%
    </tspan>
  </text>
  <text
    id="tsumchill1"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={48.255146}
    y={64.568314}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-9"
      x={48.255146}
      y={64.568314}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.T_sumEA3}°C
    </tspan>
  </text>
  <text
    id="tretchill1"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={48.255146}
    y={69.886375}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1"
      x={48.255146}
      y={69.886375}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.T_retEA3}°C
    </tspan>
  </text>
  <circle
    id="st_chill1-1"
    transform="translate(14.288)"
    cx={31.976}
    cy={59.505}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.Ea3}
  />
  <ellipse
    id="st_chill1brillo-3"
    transform="matrix(.2836 0 0 .14992 35.156 32.077)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
  <circle
    id="st_chill1-1-mant"//mantenimiento
    transform="translate(14.288)"
    cx={31.976}
    cy={59.505}
    r={2}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.Ea3mant}
  />
  <circle
    id="st_chill1-1-alarma"//alarma
    transform="translate(14.288)"
    cx={31.976}
    cy={59.505}
    r={2}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.Ea3}
  />
  <text
    id="tsumchill1-3"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={48.254757}
    y={88.951546}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-9-6"
      x={48.254757}
      y={88.951546}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.T_sumEA4}°C
    </tspan>
  </text>
  <text
    id="tretchill1-6"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={48.254757}
    y={94.269608}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-4"
      x={48.254757}
      y={94.269608}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
     {ParametrosClima_SIS1.T_retEA4}°C
    </tspan>
  </text>
  <circle
    id="st_chill1-1-4"
    transform="translate(14.288)"
    cx={31.976}
    cy={82.43}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.Ea4}
  />
  <ellipse
    id="st_chill1brillo-3-8"
    transform="matrix(.2836 0 0 .14992 35.155 55.002)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-2)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
   <circle
    id="st_chill1-1-4-mant"//mantenimiento
    transform="translate(14.288)"
    cx={31.976}
    cy={82.43}
    r={2}
    fill="#999"
    //opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.Ea4mant}
  />
    <circle
    id="st_chill1-1-4-alarma"//alarma
    transform="translate(14.288)"
    cx={31.976}
    cy={82.43}
    r={2}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.Ea4}
  />
  <circle
    id="st_bomba1"
    transform="translate(14.288)"
    cx={37.856}
    cy={110.23}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.b1_6}
  />
  <ellipse
    id="st_bomba1brillo"
    transform="matrix(.2836 0 0 .14992 41.036 82.615)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-2-4)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
  <circle
    id="st_bomba1-7"
    transform="translate(14.288)"
    cx={48.183}
    cy={110.23}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.b1_5}
  />
  <ellipse
    id="st_bomba1brillo-4"
    transform="matrix(.2836 0 0 .14992 51.363 82.615)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-2-4-6)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
  <circle
    id="st_bomba1-75"
    transform="translate(14.288)"
    cx={57.972}
    cy={110.23}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.b1_4}
  />
  <ellipse
    id="st_bomba1brillo-5"
    transform="matrix(.2836 0 0 .14992 61.152 82.615)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-2-4-0)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
  <circle
    id="st_bombasec1"
    transform="translate(14.288)"
    cx={48.183}
    cy={137.35}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.b2_4}
  />
  <ellipse
    id="st_bombasec1brillo"
    transform="matrix(.2836 0 0 .14992 51.363 109.73)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-2-4-6-4)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
  <circle
    id="st_bombasec2"
    transform="translate(14.288)"
    cx={57.972}
    cy={137.35}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.b2_3}
  />
  <ellipse
    id="st_bomba1brillo-5-6"
    transform="matrix(.2836 0 0 .14992 61.152 109.73)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-2-4-0-0)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
  <text
    id="tsumchill1-3-2"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={42.132683}
    y={141.47885}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-9-6-3"
      x={42.132683}
      y={141.47885}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.LoadB4}%
    </tspan>
  </text>
  <text
    id="tretchill1-6-7"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={52.083023}
    y={141.47885}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-4-1"
      x={52.083023}
      y={141.47885}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.LoadB3}%
    </tspan>
  </text>
  <circle
    id="st_bomba1-7-4-7"
    transform="translate(14.288)"
    cx={48.183}
    cy={156.12}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.V1aux}
  />
  <ellipse
    id="st_bomba1brillo-4-7-4"
    transform="matrix(.2836 0 0 .14992 51.363 128.51)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-2-4-6-4-2)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
  <circle
    id="st_bomba1-75-5-8"
    transform="translate(14.288)"
    cx={57.972}
    cy={156.12}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.V2aux}
  />
  <ellipse
    id="st_bomba1brillo-5-6-8"
    transform="matrix(.2836 0 0 .14992 61.152 128.51)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-2-4-0-0-5)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
  <text
    id="tempsumprim"
    transform="matrix(.96219 0 0 1.0393 14.288 0)"
    x={52.777378}
    y={167.66022}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan11149-1-7-6"
      x={52.777378}
      y={167.66022}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.T_sum_prim}°C
    </tspan>
  </text>
  <text
    id="tempsumsec"
    transform="matrix(.96219 0 0 1.0393 14.288 0)"
    x={52.777378}
    y={171.45076}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan11149-1-7-6-9"
      x={52.777378}
      y={171.45076}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.T_sum_sec}°C
    </tspan>
  </text>
  <text
    id="temptanq"
    transform="matrix(.96219 0 0 1.0393 14.288 0)"
    x={52.777378}
    y={175.24135}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan11149-1-7-6-9-3"
      x={52.777378}
      y={175.24135}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.T_tanque}°C
    </tspan>
  </text>
  <text
    id="tempret"
    transform="matrix(.96219 0 0 1.0393 14.288 0)"
    x={52.777378}
    y={179.03189}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan11149-1-7-6-9-3-6"
      x={52.777378}
      y={179.03189}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.T_ret}°C
    </tspan>
  </text>
  <circle
    id="st_chill1-1-1"
    transform="translate(14.288)"
    cx={93.875}
    cy={59.505}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.Ea1}
  />
  <ellipse
    id="st_chill1brillo-3-80"
    transform="matrix(.2836 0 0 .14992 97.055 32.078)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-29)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
  <circle
      id="st_chill1-1-1-mant"//mantenimiento
      transform="translate(14.288)"
      cx={93.875}
      cy={59.505}
      r={2}
      fill="#999"
      //opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.Ea1mant}
    />
    <circle
      id="st_chill1-1-1-alarma"//alarma
      transform="translate(14.288)"
      cx={93.875}
      cy={59.505}
      r={2}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.Ea1}
    />
  <circle
    id="st_chill1-1-4-8"
    transform="translate(14.288)"
    cx={93.875}
    cy={82.43}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.Ea2}
  />
  <ellipse
    id="st_chill1brillo-3-8-9"
    transform="matrix(.2836 0 0 .14992 97.055 55.002)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-2-45)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
   <circle
      id="st_chill1-1-4-8-mant"//mantenimiento
      transform="translate(14.288)"
      cx={93.875}
      cy={82.43}
      r={2}
      fill="#999"
      //opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.Ea2mant}
    />
    <circle
      id="st_chill1-1-4-8-alarma"//alarma
      transform="translate(14.288)"
      cx={93.875}
      cy={82.43}
      r={2}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.Ea2}
    />
  <circle
    id="st_bomba1-8"
    transform="translate(14.288)"
    cx={99.756}
    cy={110.23}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.b1_3}
  />
  <ellipse
    id="st_bomba1brillo-47"
    transform="matrix(.2836 0 0 .14992 102.94 82.615)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-2-4-2)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
  <circle
      id="st_bomba1-8-al" //alarma1b1-3
      transform="translate(14.288)"
      cx={99.756}
      cy={110.23}
      r={2}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.b1_3}
    />
  <circle
    id="st_bomba1-7-8"
    transform="translate(14.288)"
    cx={110.08}
    cy={110.23}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.b1_2}
  />
  <ellipse
    id="st_bomba1brillo-4-6"
    transform="matrix(.2836 0 0 .14992 113.26 82.615)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-2-4-6-7)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
  <circle
      id="st_bomba1-7-8-al"//alarma1b1-2
      transform="translate(14.288)"
      cx={110.08}
      cy={110.23}
      r={2}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.b1_2}
    />
  <circle
    id="st_bomba1-75-4"
    transform="translate(14.288)"
    cx={119.87}
    cy={110.23}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.b1_1}
  />
  <ellipse
    id="st_bomba1brillo-5-9"
    transform="matrix(.2836 0 0 .14992 123.05 82.615)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-2-4-0-6)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
  <circle
      id="st_bomba1-75-4-al"//alarma1b1-1
      transform="translate(14.288)"
      cx={119.87}
      cy={110.23}
      r={2}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.b1_1}
    />
  <circle
    id="st_bombasec1-0"
    transform="translate(14.288)"
    cx={110.08}
    cy={137.35}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.b2_2}
  />
  <ellipse
    id="st_bombasec1brillo-8"
    transform="matrix(.2836 0 0 .14992 113.26 109.73)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-2-4-6-4-0)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
  <circle
      id="st_bombasec1-0-al"//alarma1b2-2
      transform="translate(14.288)"
      cx={110.08}
      cy={137.35}
      r={2}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.b2_2}
    />
  <circle
    id="st_bombasec2-7"
    transform="translate(14.288)"
    cx={119.87}
    cy={137.35}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.b2_1}
  />
  <ellipse
    id="st_bomba1brillo-5-6-3"
    transform="matrix(.2836 0 0 .14992 123.05 109.73)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-2-4-0-0-6)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
  <circle
      id="st_bombasec2-7-al"//alarma1b2-2
      transform="translate(14.288)"
      cx={119.87}
      cy={137.35}
      r={2}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.b2_1}
    />
  <text
    id="tsumchill1-3-2-5"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={100.3299}
    y={141.4792}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-9-6-3-1"
      x={100.3299}
      y={141.4792}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS2.LoadB2}%
    </tspan>
  </text>
  <text
    id="tretchill1-6-7-1"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={110.28021}
    y={141.4792}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-4-1-5"
      x={110.28021}
      y={141.4792}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS2.LoadB1}%
    </tspan>
  </text>
  <circle
    id="st_bomba1-7-4-7-5"
    transform="translate(14.288)"
    cx={110.08}
    cy={156.12}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.V1aux} 
  />
  <ellipse
    id="st_bomba1brillo-4-7-4-9"
    transform="matrix(.2836 0 0 .14992 113.26 128.51)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-2-4-6-4-2-3)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
  <circle
    id="st_bomba1-75-5-8-0"
    transform="translate(14.288)"
    cx={119.87}
    cy={156.12}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.V2aux}
  />
  <ellipse
    id="st_bomba1brillo-5-6-8-7"
    transform="matrix(.2836 0 0 .14992 123.05 128.51)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-2-4-0-0-5-4)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
  <text
    id="tempsumprim-1"
    transform="matrix(.96219 0 0 1.0393 14.288 0)"
    x={117.10876}
    y={167.66054}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan11149-1-7-6-98"
      x={117.10876}
      y={167.66054}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
       {ParametrosClima_SIS2.T_sum_prim}°C
    </tspan>
  </text>
  <text
    id="tempsumsec-0"
    transform="matrix(.96219 0 0 1.0393 14.288 0)"
    x={117.10876}
    y={171.4511}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan11149-1-7-6-9-1"
      x={117.10876}
      y={171.4511}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
       {ParametrosClima_SIS2.T_sum_sec}°C
    </tspan>
  </text>
  <text
    id="temptanq-4"
    transform="matrix(.96219 0 0 1.0393 14.288 0)"
    x={117.10876}
    y={175.24164}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan11149-1-7-6-9-3-3"
      x={117.10876}
      y={175.24164}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
    {ParametrosClima_SIS2.T_tanque}°C
    </tspan>
  </text>
  <text
    id="tempret-9"
    transform="matrix(.96219 0 0 1.0393 14.288 0)"
    x={117.10876}
    y={179.0322}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan11149-1-7-6-9-3-6-3"
      x={117.10876}
      y={179.0322}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
       {ParametrosClima_SIS2.T_ret}°C
    </tspan>
  </text>
  <text
    id="vinupschi"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={48.255501}
    y={39.068939}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-9-8"
      x={48.255501}
      y={39.068939}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
       {ParametrosUPS_SIS1.V_inCHI} V
    </tspan>
  </text>
  <text
    id="voutupschi"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={48.255501}
    y={42.930489}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-9"
      x={48.255501}
      y={42.930489}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosUPS_SIS1.V_outCHI} V
    </tspan>
  </text>
  <circle
    id="st_upschi"
    transform="translate(14.288)"
    cx={31.976}
    cy={35.994}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.upschi1}
  />
  <ellipse
    id="st_st_upschibrillo"
    transform="matrix(.2836 0 0 .14992 35.156 8.567)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-0)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
   <circle
      id="st_upschi-al" //alarma
      transform="translate(14.288)"
      cx={31.976}
      cy={35.994}
      r={2}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS1.upschi1}
    />
  <text
    id="ioutupschi"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={48.255878}
    y={46.792042}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-9-9"
      x={48.255878}
      y={46.792042}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosUPS_SIS1.I_outCHI} A
    </tspan>
  </text>
  <text
    id="loadupschi"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={48.256123}
    y={50.648167}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-9-9-4"
      x={48.256123}
      y={50.648167}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosUPS_SIS1.LoadCHI} %
    </tspan>
  </text>
  <text
    id="vinupschi-2"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={106.4567}
    y={39.069305}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-9-8-3"
      x={106.4567}
      y={39.069305}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosUPS_SIS2.V_inCHI} V
    </tspan>
  </text>
  <text
    id="voutupschi-5"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={106.4567}
    y={42.930855}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-9-95"
      x={106.4567}
      y={42.930855}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
     {ParametrosUPS_SIS2.V_outCHI} V
    </tspan>
  </text>
  <circle
    id="st_upschi-4"
    transform="translate(14.288)"
    cx={93.88}
    cy={35.995}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.upschi2}
  />
  <ellipse
    id="st_st_upschibrillo-1"
    transform="matrix(.2836 0 0 .14992 97.059 8.567)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-0-0-2)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
   <circle
      id="st_upschi-4-al" //alarma
      transform="translate(14.288)"
      cx={93.88}
      cy={35.995}
      r={2}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.upschi2}
    />
  <text
    id="ioutupschi-8"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={106.45707}
    y={46.792408}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-9-9-3"
      x={106.45707}
      y={46.792408}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosUPS_SIS2.I_outCHI} A
    </tspan>
  </text>
  <text
    id="loadupschi-6"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={106.45733}
    y={50.648533}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-9-9-4-4"
      x={106.45733}
      y={50.648533}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
     {ParametrosUPS_SIS2.LoadCHI} %
    </tspan>
  </text>
  <text
    id="text8442-68"
    transform="matrix(.96672 0 0 1.0344 14.288 0)"
    x={128.3195}
    y={72.905388}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#000"
    fontFamily="Franklin Gothic Medium"
    fontSize="4.0913px"
    letterSpacing={0}
    strokeWidth={0.2558}
    wordSpacing={0}
  >
    <tspan
      id="tspan8440-9"
      x={128.3195}
      y={72.905388}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fontFamily="Franklin Gothic Medium"
      fontSize="4.0913px"
      strokeWidth={0.2558}
    >
      {"`"}
    </tspan>
  </text>
  <text
    id="tsumchill1-2"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={106.45234}
    y={64.568665}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-9-5"
      x={106.45234}
      y={64.568665}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS2.T_sumEA1}°C
    </tspan>
  </text>
  <text
    id="tretchill1-64"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={106.45234}
    y={69.886726}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-6"
      x={106.45234}
      y={69.886726}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
       {ParametrosClima_SIS2.T_retEA1}°C
    </tspan>
  </text>
  <text
    id="tsumchill1-3-26"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={106.45197}
    y={88.951897}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-9-6-7"
      x={106.45197}
      y={88.951897}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS2.T_sumEA2}°C
    </tspan>
  </text>
  <text
    id="tretchill1-6-70"
    transform="matrix(1.0636 0 0 .94019 14.288 0)"
    x={106.45197}
    y={94.269958}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-4-2"
      x={106.45197}
      y={94.269958}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS2.T_retEA2}°C
    </tspan>
  </text>
  <circle
    id="st_s1aacc"
    transform="translate(14.288)"
    cx={53.548}
    cy={11.229}
    r={4.671}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.clima_SIS1}
  />
  <circle
    id="al_s1aacc"//alarma
    transform="translate(14.288)"
    cx={53.548}
    cy={11.229}
    r={4.671}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas.clima_SIS1}
  />
  <ellipse
    id="st_trans-12-5-4-9-7"
    transform="matrix(.65326 0 0 .57833 41.958 -92.257)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
    id="st_s2aacc"
    transform="translate(14.288)"
    cx={115.4}
    cy={11.229}
    r={4.671}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_Principales.clima_SIS2}
  />
   <circle
    id="al_s2aacc"//alarma
    transform="translate(14.288)"
    cx={115.4}
    cy={11.229}
    r={4.671}
    fill="#4d4d4d"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas.clima_SIS2}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-2"
    transform="matrix(.65326 0 0 .57833 103.81 -92.257)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-2)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <text
    id="vol_upsout"
    transform="scale(1.0508 .95161)"
    x={276.2937}
    y={23.23435}
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
    fontSize="6.35px"
    letterSpacing={0}
    strokeWidth={0.24491}
    wordSpacing={0}
  >
    <tspan
      id="tspan5101-4-99"
      x={276.2937}
      y={23.23435}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.35px"
      strokeWidth={0.24491}
    >
      {ParametrosElec.P_SIS2}
    </tspan>
  </text>
  <circle
    id="st_ups1a-2"
    cx={433.22}
    cy={113.5}
    r={2.3466}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.ups2}
  />
  <ellipse
    id="st_brilloups1a-2"
    transform="matrix(.34361 0 0 .17992 419.67 80.477)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-5-2)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
      id="st_ups1a-2-al"//alarma
      transform="translate(14.288)"
      cx={418.93}
      cy={113.5}
      r={2.3466}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS1.ups2}
    />
  <circle
    id="st_ups1a-3"
    cx={433.22}
    cy={119.47}
    r={2.3466}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.ups3}
  />
  <ellipse
    id="st_brilloups1a-3"
    transform="matrix(.34361 0 0 .17992 419.67 86.447)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-5-5)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
      id="st_ups1a-3-al"//alarma
      transform="translate(14.288)"
      cx={418.93}
      cy={119.47}
      r={2.3466}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS1.ups3}
    />
  <circle
    id="st_ups1a-4"
    cx={433.22}
    cy={125.44}
    r={2.3466}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.ups4}
  />
  <ellipse
    id="st_brilloups1a-4"
    transform="matrix(.34361 0 0 .17992 419.67 92.417)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-5-52)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
      id="st_ups1a-4-al"//alarma
      transform="translate(14.288)"
      cx={418.93}
      cy={125.44}
      r={2.3466}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS1.ups4}
    />
  <circle
    id="st_ups1a-5"
    cx={433.22}
    cy={131.41}
    r={2.3466}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.ups5}
  />
  <ellipse
    id="st_brilloups1a-5"
    transform="matrix(.34361 0 0 .17992 419.67 98.387)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-5-8)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
      id="st_ups1a-5-al"//alarma
      transform="translate(14.288)"
      cx={418.93}
      cy={131.41}
      r={2.3466}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS1.ups5}
    />
  <circle
    id="st_ups1a-6"
    cx={433.22}
    cy={137.38}
    r={2.3466}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.ups6}
  />
  <ellipse
    id="st_brilloups1a-6"
    transform="matrix(.34361 0 0 .17992 419.67 104.36)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-5-8-0)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
      id="st_ups1a-6-al"//alarma
      transform="translate(14.288)"
      cx={418.93}
      cy={137.38}
      r={2.3466}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS1.ups6}
    />
  <circle
    id="st_ups1a-2-1"
    cx={504.02}
    cy={113.5}
    r={2.3466}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.ups2}
  />
  <ellipse
    id="st_brilloups1a-2-4"
    transform="matrix(.34361 0 0 .17992 490.47 80.478)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-5-2-8)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
      id="st_ups1a-2-1"//alarma
      cx={504.02}
      cy={113.5}
      r={2.3466}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.ups2}
    />
  <circle
    id="st_ups1a-3-5"
    cx={504.02}
    cy={119.47}
    r={2.3466}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.ups3}
  />
  <ellipse
    id="st_brilloups1a-3-4"
    transform="matrix(.34361 0 0 .17992 490.47 86.447)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-5-5-7)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
   <circle
      id="st_ups1a-3-5-al"//alarma
      cx={504.02}
      cy={119.47}
      r={2.3466}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.ups3}
    />
  <circle
    id="st_ups1a-4-4"
    cx={504.02}
    cy={125.44}
    r={2.3466}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.ups4}
  />
  <ellipse
    id="st_brilloups1a-4-6"
    transform="matrix(.34361 0 0 .17992 490.47 92.417)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-5-52-1)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
      id="st_ups1a-4-4-al"//alarma
      cx={504.02}
      cy={125.44}
      r={2.3466}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.ups4}
    />
  <circle
    id="st_ups1a-5-8"
    cx={504.02}
    cy={131.41}
    r={2.3466}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.ups5}
  />
  <ellipse
    id="st_brilloups1a-5-3"
    transform="matrix(.34361 0 0 .17992 490.47 98.387)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-5-8-3)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
      id="st_ups1a-5-8-al"//alarma
      cx={504.02}
      cy={131.41}
      r={2.3466}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.ups5}
    />
  <circle
    id="st_ups1a-6-9"
    cx={504.02}
    cy={137.38}
    r={2.3466}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.ups6}
  />
  <ellipse
    id="st_brilloups1a-6-7"
    transform="matrix(.34361 0 0 .17992 490.47 104.36)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-5-8-0-0)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
   <circle
      id="st_ups1a-6-9-al"//alarmas
      cx={504.02}
      cy={137.38}
      r={2.3466}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.ups6}
    />
  <circle
    id="st_ups1a-1-8"
    cx={504.02}
    cy={107.53}
    r={2.3466}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.ups1}
  />
  <ellipse
    id="st_brilloups1a-1-4"
    transform="matrix(.34361 0 0 .17992 490.47 74.508)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-5-25)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
      id="st_ups1a-1-8-al"//alarma
      cx={504.02}
      cy={107.53}
      r={2.3466}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.ups1}
    />
  <circle
    id="st_ups1a-1"
    cx={433.22}
    cy={107.53}
    r={2.3466}
    fill="red"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.ups1}
  />
  <ellipse
    id="st_brilloups1a-1"
    transform="matrix(.34361 0 0 .17992 419.67 74.507)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-5)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
      id="st_ups1a-1-al"//alarma
      cx={433.22}
      cy={107.53}
      r={2.3466}
      fill="#999"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS1.ups1}
    />
  <text
    id="i_outupsS1"
    transform="scale(1.046 .95601)"
    x={374.27219}
    y={167.5144}
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
    fontSize="4.2334px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-3-2-3-6-9"
      x={374.27219}
      y={167.5144}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.4333}
    >
       {ParametrosUPS_SIS1.I_out} A
    </tspan>
  </text>
  <text
    id="pot_upsS1"
    transform="scale(1.046 .95601)"
    x={374.27219}
    y={173.39632}
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
    fontSize="4.2334px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-3-2-3-6-4"
      x={374.27219}
      y={173.39632}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.4333}
    >
       {ParametrosUPS_SIS1.P_out} KW
    </tspan>
  </text>
  <text
    id="i_outupsS1-3"
    transform="scale(1.046 .95601)"
    x={441.95047}
    y={167.51479}
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
    fontSize="4.2334px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-3-2-3-6-9-3"
      x={441.95047}
      y={167.51479}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.4333}
    >
      {ParametrosUPS_SIS2.I_out} A
    </tspan>
  </text>
  <text
    id="pot_upsS1-1"
    transform="scale(1.046 .95601)"
    x={441.95047}
    y={173.3967}
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
    fontSize="4.2334px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-3-2-3-6-4-9"
      x={441.95047}
      y={173.3967}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.4333}
    >
       {ParametrosUPS_SIS2.P_out} KW
    </tspan>
  </text>
  <text
    id="vin_upsS1-1"
    transform="scale(1.046 .95601)"
    x={442.13058}
    y={155.75101}
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
    fontSize="4.2334px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-4-2-4"
      x={442.13058}
      y={155.75101}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.4333}
    >
      {ParametrosUPS_SIS2.V_in} V
    </tspan>
  </text>
  <text
    id="vout_upsS1-9"
    transform="scale(1.046 .95601)"
    x={442.13058}
    y={161.63289}
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
    fontSize="4.2334px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-3-2-3-6-49"
      x={442.13058}
      y={161.63289}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.4333}
    >
      {ParametrosUPS_SIS2.V_out} V
    </tspan>
  </text>
  <text
    id="vin_upsS1"
    transform="scale(1.046 .95601)"
    x={374.45139}
    y={155.75063}
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
    fontSize="4.2334px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-4-2"
      x={374.45139}
      y={155.75063}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.4333}
    >
     {ParametrosUPS_SIS1.V_in} V
    </tspan>
  </text>
  <text
    id="vout_upsS1"
    transform="scale(1.046 .95601)"
    x={374.45139}
    y={161.63251}
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
    fontSize="4.2334px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-3-2-3-6"
      x={374.45139}
      y={161.63251}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.4333}
    >
      {ParametrosUPS_SIS1.V_out} V
    </tspan>
  </text>
  <circle
    id="st_gen4"
    cx={433.22}
    cy={58.482}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.gen1}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-8-5-0"
    transform="matrix(.34362 0 0 .17988 419.74 25.554)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-54-9-81)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
      id="st_gen4-al"//alarma
      cx={433.22}
      cy={58.482}
      r={2.3465}
      fill="#4d4d4d"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS1.gen1}
    />
  <circle
    id="st_gen5"
    cx={433.22}
    cy={65.774}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.gen2}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-8-5-9-0"
    transform="matrix(.34362 0 0 .17988 419.74 32.847)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-54-9-8-4)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
      id="st_gen5-al"//alarma
      cx={433.22}
      cy={65.774}
      r={2.3465}
      fill="#4d4d4d"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS1.gen2}
    />
  <circle
    id="st_gen6"
    cx={433.22}
    cy={73.067}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.gen3}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-8-5-2-8"
    transform="matrix(.34362 0 0 .17988 419.74 40.139)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-54-9-85-9)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
      id="st_gen6"
      cx={433.22}
      cy={73.067}
      r={2.3465}
      fill="#4d4d4d"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS1.gen3}
    />
  <circle
    id="st_gen4-5"
    cx={504.03}
    cy={58.482}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.gen4}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-8-5-0-2"
    transform="matrix(.34362 0 0 .17988 490.54 25.554)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-54-9-81-7)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
      id="st_gen4-5-al"//alarma
      transform="translate(14.288)"
      cx={489.74}
      cy={58.482}
      r={2.3465}
      fill="#4d4d4d"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.gen4}
    />
  <circle
    id="st_gen5-5"
    cx={504.03}
    cy={65.774}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.gen5}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-8-5-9-0-3"
    transform="matrix(.34362 0 0 .17988 490.54 32.847)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-54-9-8-4-6)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
   <circle
      id="st_gen5-5-al"//alarma
      transform="translate(14.288)"
      cx={489.74}
      cy={65.774}
      r={2.3465}
      fill="#4d4d4d"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.gen5}
    />
  <circle
    id="st_gen6-9"
    cx={504.03}
    cy={73.067}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.gen6}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-8-5-2-8-4"
    transform="matrix(.34362 0 0 .17988 490.54 40.139)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-54-9-85-9-5)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
      id="st_gen6-9-al"//alarma
      transform="translate(14.288)"
      cx={489.74}
      cy={73.067}
      r={2.3465}
      fill="#4d4d4d"
      opacity={0}
      paintOrder="markers stroke fill"
      className={Alarmas_SIS2.gen6}
    />
  <text
    id="v_gens2"
    x={450.47086}
    y={85.155472}
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
    fontSize="4.2334px"
    letterSpacing={0}
    strokeWidth={0.26458}
    wordSpacing={0}
  >
    <tspan
      id="tspan5110-1-9"
      x={450.47086}
      y={85.155472}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.26458}
    >
      {ParametrosGEN_SIS2.V_out} V
    </tspan>
  </text>
  <text
    id="i_gens2"
    x={450.47086}
    y={90.85955}
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
    fontSize="4.2334px"
    letterSpacing={0}
    strokeWidth={0.26458}
    wordSpacing={0}
  >
    <tspan
      id="tspan5114-0-5"
      x={450.47086}
      y={90.85955}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.26458}
    >
     {ParametrosGEN_SIS2.I_out} A
    </tspan>
  </text>
  <text
    id="p_gens2"
    x={476.74948}
    y={85.15596}
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
    fontSize="4.2334px"
    letterSpacing={0}
    strokeWidth={0.26458}
    wordSpacing={0}
  >
    <tspan
      id="tspan5118-90-5"
      x={476.74948}
      y={85.15596}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.26458}
    >
      {ParametrosGEN_SIS2.P_out} KW
    </tspan>
  </text>
  <text
    id="p_gens2-2"
    x={476.74951}
    y={90.859978}
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
    fontSize="4.2334px"
    letterSpacing={0}
    strokeWidth={0.26458}
    wordSpacing={0}
  >
    <tspan
      id="tspan5118-90-5-8"
      x={476.74951}
      y={90.859978}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.26458}
    >
      {ParametrosGEN_SIS2.Load}
    </tspan>
  </text>
  <text
    id="v_gens1"
    x={380.67618}
    y={85.155472}
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
    fontSize="4.2334px"
    letterSpacing={0}
    strokeWidth={0.26458}
    wordSpacing={0}
  >
    <tspan
      id="tspan5110-1"
      x={380.67618}
      y={85.155472}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.26458}
    >
      {ParametrosGEN_SIS1.V_out} V
    </tspan>
  </text>
  <text
    id="i_gens1"
    x={380.59375}
    y={90.85955}
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
    fontSize="4.2334px"
    letterSpacing={0}
    strokeWidth={0.26458}
    wordSpacing={0}
  >
    <tspan
      id="tspan5114-0"
      x={380.59375}
      y={90.85955}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.26458}
    >
      {ParametrosGEN_SIS1.I_out} A
    </tspan>
  </text>
  <text
    id="p_gens1"
    x={406.41467}
    y={85.15596}
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
    fontSize="4.2334px"
    letterSpacing={0}
    strokeWidth={0.26458}
    wordSpacing={0}
  >
    <tspan
      id="tspan5118-90"
      x={406.41467}
      y={85.15596}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.26458}
    >
     {ParametrosGEN_SIS1.P_out} KW
    </tspan>
  </text>
  <text
    id="p_gens1-8"
    x={406.4147}
    y={90.859978}
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
    fontSize="4.2334px"
    letterSpacing={0}
    strokeWidth={0.26458}
    wordSpacing={0}
  >
    <tspan
      id="tspan5118-90-9"
      x={406.4147}
      y={90.859978}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.26458}
    >
      {ParametrosGEN_SIS1.Load}
    </tspan>
  </text>
  <circle
    id="st_upsofi_1a"
    transform="translate(14.288)"
    cx={393.13}
    cy={178.9}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.upsoffices_1a}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-8-5-0-1"
    transform="matrix(.34362 0 0 .17988 393.94 145.97)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-54-9-81-6)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
   <circle
    id="al_upsofi_1a"//alarma
    transform="translate(14.288)"
    cx={393.13}
    cy={178.9}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    opacity={0}
    className={Alarmas_SIS1.upsoffices_1a}
  />
  <circle
    id="st_upssat_1a"
    transform="translate(14.288)"
    cx={393.13}
    cy={185.14}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.upssat_1a}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-8-5-9-0-34"
    transform="matrix(.34362 0 0 .17988 393.94 152.21)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-54-9-8-4-9)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
    <circle
    id="al_upssat_1a"//alarma
    transform="translate(14.288)"
    cx={393.13}
    cy={185.14}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    opacity={0}
    className={Alarmas_SIS1.upssat_1a}
  />
  <circle
    id="st_rec_1a"
    transform="translate(14.288)"
    cx={408.3}
    cy={185.14}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.rec_1a}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-8-5-0-1-2"
    transform="matrix(.34362 0 0 .17988 409.11 152.21)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-54-9-81-6-2)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
    <circle
    id="al_rec_1a"//alarma
    transform="translate(14.288)"
    cx={408.3}
    cy={185.14}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    opacity={0}
    //className={Alarmas_SIS1.rec_1a}
  />
  <circle
    id="st_upsnoc_2a"
    transform="translate(14.288)"
    cx={463.75}
    cy={178.9}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.upsnoc_2a}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-8-5-0-1-1"
    transform="matrix(.34362 0 0 .17988 464.56 145.97)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-54-9-81-6-0)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
    id="al_upsnoc_2a"//alarma
    transform="translate(14.288)"
    cx={463.75}
    cy={178.9}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    opacity={0}
    className={Alarmas_SIS2.upsnoc_2a}
  />
  <circle
    id="st_ups_sat_2a"
    transform="translate(14.288)"
    cx={463.75}
    cy={185.14}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.upssat_2a}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-8-5-9-0-34-6"
    transform="matrix(.34362 0 0 .17988 464.56 152.21)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-54-9-8-4-9-9)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
   <circle
    id="al_ups_sat_2a"//alarma
    transform="translate(14.288)"
    cx={463.75}
    cy={185.14}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    opacity={0}
    className={Alarmas_SIS2.upssat_2a}
  />
  <circle
    id="st_rec_2a"
    transform="translate(14.288)"
    cx={478.92}
    cy={185.14}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.rec_2a}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-8-5-0-1-2-6"
    transform="matrix(.34362 0 0 .17988 479.72 152.21)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-54-9-81-6-2-2)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
   <circle
    id="al_rec_2a"//alarma
    transform="translate(14.288)"
    cx={478.92}
    cy={185.14}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    opacity={0}
    //className={Alarmas_SIS2.rec_2a}
  />
  <text
    id="CMTL1"
    transform="matrix(1.046 0 0 .95601 14.288 0)"
    x={386.51477}
    y={21.428762}
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
    fontSize="3.5277px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-4-2-0-1-7-2-2"
      x={386.51477}
      y={21.428762}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.5277px"
      strokeWidth={0.4333}
    >
      {ParametrosElec.V_CMTL1}KV
    </tspan>
  </text>
  <text
    id="CMTL2"
    transform="matrix(1.046 0 0 .95601 14.288 0)"
    x={386.50821}
    y={29.245955}
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
    fontSize="3.5277px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-4-2-0-1-7-3-0-7"
      x={386.50821}
      y={29.245955}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.5277px"
      strokeWidth={0.4333}
    >
      {ParametrosElec.V_CMTL2}KV
    </tspan>
  </text>
  <text
    id="CMTL3"
    transform="matrix(1.046 0 0 .95601 14.288 0)"
    x={386.50821}
    y={37.063141}
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
    fontSize="3.5277px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-4-2-0-1-7-3-2-1-4"
      x={386.50821}
      y={37.063141}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.5277px"
      strokeWidth={0.4333}
    >
      {ParametrosElec.V_CMTL3}KV
    </tspan>
  </text>
  <circle
    id="st_CMTL1"
    transform="translate(14.288)"
    cx={418.93}
    cy={19.216}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_Principales.VAB_CMT}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-8-5-0-9"
    transform="matrix(.34362 0 0 .17988 419.74 -13.712)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-54-9-81-9)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
    id="st_CMTL2"
    transform="translate(14.288)"
    cx={418.93}
    cy={26.508}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_Principales.VBC_CMT}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-8-5-9-0-5"
    transform="matrix(.34362 0 0 .17988 419.74 -6.42)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-54-9-8-4-3)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <circle
    id="st_CMTL3"
    transform="translate(14.288)"
    cx={418.93}
    cy={33.801}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_Principales.VCA_CMT}
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-8-5-2-8-6"
    transform="matrix(.34362 0 0 .17988 419.74 .873)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-54-9-85-9-3)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <text
    id="vab_tr01a"
    transform="matrix(1.046 0 0 .95601 14.288 0)"
    x={442.06537}
    y={21.427717}
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
    fontSize="3.5277px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-4-2-0-1-7-7-4-2"
      x={442.06537}
      y={21.427717}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.5277px"
      strokeWidth={0.4333}
    >
      {ParametrosElec.Vab_Tr01}
    </tspan>
  </text>
  <text
    id="vbc_tr01a"
    transform="matrix(1.046 0 0 .95601 14.288 0)"
    x={442.05881}
    y={27.027796}
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
    fontSize="3.5277px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-4-2-0-1-7-3-7-2-1"
      x={442.05881}
      y={27.027796}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.5277px"
      strokeWidth={0.4333}
    >
      {ParametrosElec.Vbc_Tr01}
    </tspan>
  </text>
  <text
    id="vca_tr01a"
    transform="matrix(1.046 0 0 .95601 14.288 0)"
    x={442.05881}
    y={32.633904}
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
    fontSize="3.5277px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-4-2-0-1-7-3-2-5-9-2"
      x={442.05881}
      y={32.633904}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.5277px"
      strokeWidth={0.4333}
    >
      {ParametrosElec.Vca_Tr01}
    </tspan>
  </text>
  <text
    id="ia_tr01a"
    transform="matrix(1.046 0 0 .95601 14.288 0)"
    x={459.08292}
    y={21.42783}
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
    fontSize="3.5277px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-4-2-0-1-7-7-4-2-2"
      x={459.08292}
      y={21.42783}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.5277px"
      strokeWidth={0.4333}
    >
      {ParametrosElec.Ia_Tr01}A
    </tspan>
  </text>
  <text
    id="ib_tr01a"
    transform="matrix(1.046 0 0 .95601 14.288 0)"
    x={459.07635}
    y={27.027908}
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
    fontSize="3.5277px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-4-2-0-1-7-3-7-2-1-6"
      x={459.07635}
      y={27.027908}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.5277px"
      strokeWidth={0.4333}
    >
      {ParametrosElec.Ib_Tr01}A
    </tspan>
  </text>
  <text
    id="ic_tr01a"
    transform="matrix(1.046 0 0 .95601 14.288 0)"
    x={459.07635}
    y={32.634018}
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
    fontSize="3.5277px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-4-2-0-1-7-3-2-5-9-2-7"
      x={459.07635}
      y={32.634018}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.5277px"
      strokeWidth={0.4333}
    >
      {ParametrosElec.Ic_Tr01}A
    </tspan>
  </text>
  <text
    id="pot_tr01a"
    transform="matrix(1.046 0 0 .95601 14.288 0)"
    x={455.67969}
    y={39.329655}
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
    fontSize="3.5277px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-4-2-0-1-7-3-2-5-9-2-7-7"
      x={455.67969}
      y={39.329655}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.5277px"
      strokeWidth={0.4333}
    >
      {ParametrosElec.Pt_Tr01}KW
    </tspan>
  </text>
  <circle
    id="st_cmt"
    cx={391.1}
    cy={8.5264}
    r={3.2985}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_Principales.ST_CMT}    
  />
  <ellipse
    id="st_trans-12-5-4-9-7-5-6-5-7"
    transform="matrix(.46943 0 0 .30963 372.72 -47.677)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-9-7-7-5-7-8)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
</g>
      )
}