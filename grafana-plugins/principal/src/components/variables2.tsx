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
    text_mant_Ea4: string; text_mant_Ea3: string;
};
type Alarmas_SIS2 = {
    ups1: string; ups2: string; ups3: string; ups4: string; ups5: string; ups6: string; upschi2: string;
    gen4: string; gen5: string; gen6: string;
    Ea1: string; Ea2: string; Ea1mant: string; Ea2mant: string;
    b1_1: string; b1_2: string; b1_3: string;
    b2_1: string; b2_2: string;
    V1aux: string; V2aux: string;
    upsnoc_2a: string; upssat_2a: string; //rec_2a: string;
    text_mant_Ea1: string; text_mant_Ea2: string;
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
export const Variables2 = ({ParametrosElec, ParametrosClima, ParametrosUPS_SIS1, ParametrosUPS_SIS2, ParametrosClima_SIS1, ParametrosClima_SIS2,
ParametrosGEN_SIS1, ParametrosGEN_SIS2, Estados_Principales, Estados_SIS1, Estados_SIS2, Alarmas, Alarmas_SIS1, Alarmas_SIS2 }: DataPrincipal) => {
return (
  <g id="layer5" transform="translate(-14.288)">
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
    id="st_cmtbrillo"
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
    id="st_CMTL1brillo"
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
    id="st_CMTL2brillo"
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
    id="st_CMTL3brillo"
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
    fontSize="3.5278px"
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
      fontSize="3.5278px"
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
    fontSize="3.5278px"
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
      fontSize="3.5278px"
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
    fontSize="3.5278px"
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
      fontSize="3.5278px"
      strokeWidth={0.4333}
    >
      {ParametrosElec.V_CMTL3}KV
    </tspan>
  </text>
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
    fontSize="3.5278px"
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
      fontSize="3.5278px"
      strokeWidth={0.4333}
    >
      {ParametrosElec.Vab_Tr01}V
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
    fontSize="3.5278px"
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
      fontSize="3.5278px"
      strokeWidth={0.4333}
    >
      {ParametrosElec.Vbc_Tr01}V
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
    fontSize="3.5278px"
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
      fontSize="3.5278px"
      strokeWidth={0.4333}
    >
      {ParametrosElec.Vca_Tr01}V
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
    fontSize="3.5278px"
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
      fontSize="3.5278px"
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
    fontSize="3.5278px"
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
      fontSize="3.5278px"
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
    fontSize="3.5278px"
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
      fontSize="3.5278px"
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
    fontSize="3.5278px"
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
      fontSize="3.5278px"
      strokeWidth={0.4333}
    >
      {ParametrosElec.Pt_Tr01}KW
    </tspan>
  </text>
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
    id="st_gens1abrillo"
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
    id="st_gens2a"
    cx={473.94}
    cy={53.536}
    rx={3.2985}
    ry={3.2987}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_Principales.gen_SIS2}
  />
  <ellipse
    id="st_gens2abrillo"
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
  <circle
    id="st_gen1"
    cx={433.22}
    cy={58.482}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.gen1}
  />
  <ellipse
    id="st_gen1brillo"
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
    id="alarma_gen1"
    cx={433.22}
    cy={58.482}
    r={2.3465}
    fill="#4d4d4d"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.gen1}
  />
  <circle
    id="st_gen2"
    cx={433.22}
    cy={65.774}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.gen2}
  />
  <ellipse
    id="st_gen2brillo"
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
    id="alarma_gen2"
    cx={433.22}
    cy={65.774}
    r={2.3465}
    fill="#4d4d4d"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.gen2}
  />
  <circle
    id="st_gen3"
    cx={433.22}
    cy={73.067}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.gen3}
  />
  <ellipse
    id="st_gen3brillo"
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
    id="alarma_gen3"
    cx={433.22}
    cy={73.067}
    r={2.3465}
    fill="#4d4d4d"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.gen3}
  />
  <circle
    id="st_gen4"
    cx={504.03}
    cy={58.482}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.gen4}
  />
  <ellipse
    id="st_gen4brillo"
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
    id="alarma_gen4"
    cx={504.03}
    cy={58.482}
    r={2.3465}
    fill="#4d4d4d"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS2.gen4}
  />
  <circle
    id="st_gen5"
    cx={504.03}
    cy={65.774}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.gen5}
  />
  <ellipse
    id="st_gen5brillo"
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
    id="alarma_gen5"
    cx={504.03}
    cy={65.774}
    r={2.3465}
    fill="#4d4d4d"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS2.gen5}
  />
  <circle
    id="st_gen6"
    cx={504.03}
    cy={73.067}
    r={2.3465}
    fill="#4d4d4d"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.gen6}
  />
  <ellipse
    id="st_gen6brillo"
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
    id="alarma_gen6"
    cx={504.03}
    cy={73.067}
    r={2.3465}
    fill="#4d4d4d"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS2.gen6}
  />
  <text
    id="v_gens1a"
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
    id="i_gens1a"
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
    id="p_gens1a"
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
    id="load_gens1a"
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
  <text
    id="v_gens2a"
    transform="translate(14.288)"
    x={437.31244}
    y={85.155685}
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
      id="tspan5110-1-8"
      x={437.31244}
      y={85.155685}
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
    id="i_gens2a"
    transform="translate(14.288)"
    x={437.23001}
    y={90.859764}
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
      id="tspan5114-0-4"
      x={437.23001}
      y={90.859764}
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
    id="p_gens2a"
    transform="translate(14.288)"
    x={463.05093}
    y={85.156174}
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
      id="tspan5118-90-8"
      x={463.05093}
      y={85.156174}
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
    id="load_gens2a"
    transform="translate(14.288)"
    x={463.05096}
    y={90.860191}
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
      id="tspan5118-90-9-4"
      x={463.05096}
      y={90.860191}
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
  <circle
    id="st_upss1a"
    cx={403.8}
    cy={107.18}
    r={3.2985}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.ups_SIS1}
  />
  <ellipse
    id="st_upss1abrillo"
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
    id="st_upss2a"
    cx={473.94}
    cy={107.18}
    rx={3.2985}
    ry={3.2987}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.ups_SIS2}
  />
  <ellipse
    id="st_upss2abrillo"
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
    id="alarma_ups1a-2"
    cx={433.22}
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
    id="alarma_ups1a-3"
    cx={433.22}
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
    id="alarma_ups1a-4"
    cx={433.22}
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
    id="alarma_ups1a-5"
    cx={433.22}
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
    id="alarma_ups1a-6"
    cx={433.22}
    cy={137.38}
    r={2.3466}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.ups6}
  />
  <circle
    id="st_ups2a-2"
    cx={504.02}
    cy={113.5}
    r={2.3466}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.ups2}
  />
  <ellipse
    id="st_brilloups2a-2"
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
    id="alarma_ups2a-2"
    cx={504.02}
    cy={113.5}
    r={2.3466}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS2.ups2}
  />
  <circle
    id="st_ups2a-3"
    cx={504.02}
    cy={119.47}
    r={2.3466}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.ups3}
  />
  <ellipse
    id="st_brilloups2a-3"
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
    id="alarma_ups2a-3"
    cx={504.02}
    cy={119.47}
    r={2.3466}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS2.ups3}
  />
  <circle
    id="st_ups2a-4"
    cx={504.02}
    cy={125.44}
    r={2.3466}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.ups4}
  />
  <ellipse
    id="st_brilloups2a-4"
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
    id="alarma_ups2a-4"
    cx={504.02}
    cy={125.44}
    r={2.3466}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS2.ups4}
  />
  <circle
    id="st_ups2a-5"
    cx={504.02}
    cy={131.41}
    r={2.3466}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.ups5}
  />
  <ellipse
    id="st_brilloups2a-5"
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
    id="alarma_ups2a-5"
    cx={504.02}
    cy={131.41}
    r={2.3466}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS2.ups5}
  />
  <circle
    id="st_ups2a-6"
    cx={504.02}
    cy={137.38}
    r={2.3466}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.ups6}
  />
  <ellipse
    id="st_brilloups2a-6"
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
    id="alarma_ups2a-6"
    cx={504.02}
    cy={137.38}
    r={2.3466}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS2.ups6}
  />
  <circle
    id="st_ups2a-1"
    cx={504.02}
    cy={107.53}
    r={2.3466}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.ups1}
  />
  <ellipse
    id="st_brilloups2a-1"
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
    id="alarma_ups2a-1"
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
    fill="#999"
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
    id="alarma_ups1a-1"
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
    id="i_outupsS2"
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
    id="pot_upsS2"
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
    id="vin_upsS2"
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
    id="vout_upsS2"
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
    id="st_upsofi_1a"
    transform="translate(14.288)"
    cx={393.13}
    cy={178.9}
    r={2.3465}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.upsoffices_1a}
  />
  <ellipse
    id="st_upsofi_1abrillo"
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
    id="alarma_upsofi_1a"
    transform="translate(14.288)"
    cx={393.13}
    cy={178.9}
    r={2.3465}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.upsoffices_1a}
  />
  <circle
    id="st_upssat_1a"
    transform="translate(14.288)"
    cx={393.13}
    cy={185.14}
    r={2.3465}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.upssat_1a}
  />
  <ellipse
    id="st_upssat_1abrillo"
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
    id="alarma_upssat_1a"
    transform="translate(14.288)"
    cx={393.13}
    cy={185.14}
    r={2.3465}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.upssat_1a}
  />
  <circle
    id="st_rec_1a"
    transform="translate(14.288)"
    cx={408.3}
    cy={185.14}
    r={2.3465}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.rec_1a}
  />
  <ellipse
    id="st_rec_1abrillo"
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
    id="alarma_rec_1a"
    transform="translate(14.288)"
    cx={408.3}
    cy={185.14}
    r={2.3465}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    //className={Alarmas_SIS1.rec_1a}
  />
  <circle
    id="st_upsnoc_2a"
    transform="translate(14.288)"
    cx={463.75}
    cy={178.9}
    r={2.3465}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.upsnoc_2a}
  />
  <ellipse
    id="st_upsnoc_2abrillo"
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
    id="alarma_upsnoc_2a"
    transform="translate(14.288)"
    cx={463.75}
    cy={178.9}
    r={2.3465}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS2.upsnoc_2a}
  />
  <circle
    id="st_ups_sat_2a"
    transform="translate(14.288)"
    cx={463.75}
    cy={185.14}
    r={2.3465}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.upssat_2a}
  />
  <ellipse
    id="st_ups_sat_2abrillo"
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
    id="alarma_ups_sat_2a"
    transform="translate(14.288)"
    cx={463.75}
    cy={185.14}
    r={2.3465}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS2.upssat_2a}
  />
  <circle
    id="st_rec_2a"
    transform="translate(14.288)"
    cx={478.92}
    cy={185.14}
    r={2.3465}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.rec_2a}
  />
  <ellipse
    id="st_rec_2abrillo"
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
    id="alarma_rec_2a"
    transform="translate(14.288)"
    cx={478.92}
    cy={185.14}
    r={2.3465}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    //className={Alarmas_SIS2.rec_2a}
  />
  <ellipse
    id="alm_uma12"
    cx={172.82}
    cy={175.24}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Alarmas.uma12}
  />
  <ellipse
    id="alm_brillouma12"
    transform="matrix(.30428 0 0 .24778 160.86 130.98)"
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
    id="alm_uma11"
    cx={172.82}
    cy={165.41}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Alarmas.uma11}
  />
  <ellipse
    id="alm_brillouma11"
    transform="matrix(.30428 0 0 .24778 160.86 121.16)"
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
    id="alm_uma10"
    cx={172.82}
    cy={155.36}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Alarmas.uma10}
  />
  <ellipse
    id="alm_brillouma10"
    transform="matrix(.30428 0 0 .24778 160.86 111.1)"
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
    id="alm_uma9"
    cx={172.82}
    cy={145.25}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Alarmas.uma9}
  />
  <ellipse
    id="alm_brillouma9"
    transform="matrix(.30428 0 0 .24778 160.86 101)"
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
    id="alm_uma8"
    cx={172.82}
    cy={135.14}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Alarmas.uma8}
  />
  <ellipse
    id="alm_brillouma8"
    transform="matrix(.30428 0 0 .24778 160.86 90.887)"
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
    id="alm_uma7"
    cx={172.82}
    cy={125.03}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Alarmas.uma7}
  />
  <ellipse
    id="alm_brillouma7"
    transform="matrix(.30428 0 0 .24778 160.86 80.778)"
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
    id="alm_uma6"
    cx={172.82}
    cy={114.92}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Alarmas.uma6}
  />
  <ellipse
    id="alm_brillouma6"
    transform="matrix(.30428 0 0 .24778 160.86 70.669)"
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
    id="alm_uma5"
    cx={172.82}
    cy={104.81}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Alarmas.uma5}
  />
  <ellipse
    id="alm_brillouma5"
    transform="matrix(.30428 0 0 .24778 160.86 60.56)"
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
    id="alm_uma4"
    cx={172.82}
    cy={94.709}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Alarmas.uma4}
  />
  <ellipse
    id="alm_brillouma4"
    transform="matrix(.30428 0 0 .24778 160.86 50.451)"
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
    id="alm_uma3"
    cx={172.82}
    cy={84.6}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Alarmas.uma3}
  />
  <ellipse
    id="alm_brillouma3"
    transform="matrix(.30428 0 0 .24778 160.86 40.342)"
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
    id="alm_uma2"
    cx={172.82}
    cy={74.491}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Alarmas.uma2}
  />
  <ellipse
    id="alm_brillouma2"
    transform="matrix(.30428 0 0 .24778 160.86 30.233)"
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
    id="alm_uma1"
    cx={172.82}
    cy={64.382}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Alarmas.uma1}
  />
  <ellipse
    id="alm_brillouma1"
    transform="matrix(.30428 0 0 .24778 160.86 20.124)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91-67)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="st_uma12"
    cx={164.17}
    cy={175.24}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma12}
  />
  <ellipse
    id="st_brillouma12"
    transform="matrix(.30428 0 0 .24778 152.2 130.98)"
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
    id="st_uma11"
    cx={164.17}
    cy={165.41}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma11}
  />
  <ellipse
    id="st_brillouma11"
    transform="matrix(.30428 0 0 .24778 152.2 121.16)"
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
    id="st_uma10"
    cx={164.17}
    cy={155.36}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma10}
  />
  <ellipse
    id="st_brillouma10"
    transform="matrix(.30428 0 0 .24778 152.2 111.1)"
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
    id="st_uma9"
    cx={164.17}
    cy={145.25}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma9}
  />
  <ellipse
    id="st_brillouma9"
    transform="matrix(.30428 0 0 .24778 152.2 101)"
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
    id="st_uma8"
    cx={164.17}
    cy={135.14}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma8}
  />
  <ellipse
    id="st_brillouma8"
    transform="matrix(.30428 0 0 .24778 152.2 90.887)"
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
    id="st_uma7"
    cx={164.17}
    cy={125.03}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma7}
  />
  <ellipse
    id="st_brillouma7"
    transform="matrix(.30428 0 0 .24778 152.2 80.778)"
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
    id="st_uma6"
    cx={164.17}
    cy={114.92}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma6}
  />
  <ellipse
    id="st_brillouma6"
    transform="matrix(.30428 0 0 .24778 152.2 70.669)"
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
    id="st_uma5"
    cx={164.17}
    cy={104.81}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma5}
  />
  <ellipse
    id="st_brillouma5"
    transform="matrix(.30428 0 0 .24778 152.2 60.56)"
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
    id="st_uma4"
    cx={164.17}
    cy={94.709}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma4}
  />
  <ellipse
    id="st_brillouma4"
    transform="matrix(.30428 0 0 .24778 152.2 50.451)"
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
    id="st_uma3"
    cx={164.17}
    cy={84.6}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma3}
  />
  <ellipse
    id="st_brillouma3"
    transform="matrix(.30428 0 0 .24778 152.2 40.342)"
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
    id="st_uma2"
    cx={164.17}
    cy={74.491}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma2}
  />
  <ellipse
    id="st_brillouma2"
    transform="matrix(.30428 0 0 .24778 152.2 30.233)"
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
    id="st_uma1"
    cx={164.17}
    cy={64.382}
    rx={1.7563}
    ry={1.8557}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.uma1}
  />
  <ellipse
    id="st_brillouma1"
    transform="matrix(.30428 0 0 .24778 152.2 20.124)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2091-91)"
    opacity={0.29}
    paintOrder="markers stroke fill"
  />
  <text
    id="tret_uma12"
    transform="scale(1.0459 .95611)"
    x={160.74709}
    y={190.01656}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-3-5-8"
      x={160.74709}
      y={190.01656}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
      {ParametrosClima.uma12_TR}°
    </tspan>
  </text>
  <text
    id="tret_uma11"
    transform="scale(1.0459 .95611)"
    x={160.74709}
    y={179.49896}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-3-5"
      x={160.74709}
      y={179.49896}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
      {ParametrosClima.uma11_TR}°
    </tspan>
  </text>
  <text
    id="tret_uma10"
    transform="scale(1.0459 .95611)"
    x={160.74696}
    y={168.98137}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-3"
      x={160.74696}
      y={168.98137}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
      {ParametrosClima.uma10_TR}°
    </tspan>
  </text>
  <text
    id="tret_uma9"
    transform="scale(1.0459 .95611)"
    x={160.74696}
    y={158.46378}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-91"
      x={160.74696}
      y={158.46378}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
      {ParametrosClima.uma9_TR}°
    </tspan>
  </text>
  <text
    id="tret_uma8"
    transform="scale(1.0459 .95611)"
    x={160.74696}
    y={147.9462}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-8"
      x={160.74696}
      y={147.9462}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
      {ParametrosClima.uma8_TR}°
    </tspan>
  </text>
  <text
    id="tret_uma7"
    transform="scale(1.0459 .95611)"
    x={160.74696}
    y={137.4286}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-46"
      x={160.74696}
      y={137.4286}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
      {ParametrosClima.uma7_TR}°
    </tspan>
  </text>
  <text
    id="tret_uma6"
    transform="scale(1.0459 .95611)"
    x={160.74696}
    y={126.91101}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-63"
      x={160.74696}
      y={126.91101}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
      {ParametrosClima.uma6_TR}°
    </tspan>
  </text>
  <text
    id="tret_uma5"
    transform="scale(1.0459 .95611)"
    x={160.74696}
    y={116.39342}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-4"
      x={160.74696}
      y={116.39342}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
      {ParametrosClima.uma5_TR}°
    </tspan>
  </text>
  <text
    id="tret_uma4"
    transform="scale(1.0459 .95611)"
    x={160.74696}
    y={105.87583}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-6"
      x={160.74696}
      y={105.87583}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
      {ParametrosClima.uma4_TR}°
    </tspan>
  </text>
  <text
    id="tret_uma3"
    transform="scale(1.0459 .95611)"
    x={160.74696}
    y={95.358238}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-5"
      x={160.74696}
      y={95.358238}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
      {ParametrosClima.uma3_TR}°
    </tspan>
  </text>
  <text
    id="tret_uma2"
    transform="scale(1.0459 .95611)"
    x={160.74696}
    y={84.840645}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9-9"
      x={160.74696}
      y={84.840645}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
      {ParametrosClima.uma2_TR}°
    </tspan>
  </text>
  <text
    id="tret_uma1"
    transform="scale(1.0459 .95611)"
    x={160.74696}
    y={74.323051}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-8-9"
      x={160.74696}
      y={74.323051}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
      {ParametrosClima.uma1_TR}°
    </tspan>
  </text>
  <text
    id="tsum_uma12"
    transform="scale(1.0459 .95611)"
    x={146.25835}
    y={190.01657}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-9-6-2"
      x={146.25835}
      y={190.01657}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
       {ParametrosClima.uma12_TS}°
    </tspan>
  </text>
  <text
    id="tsum_uma11"
    transform="scale(1.0459 .95611)"
    x={146.25835}
    y={179.49896}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-9-6"
      x={146.25835}
      y={179.49896}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
       {ParametrosClima.uma11_TS}°
    </tspan>
  </text>
  <text
    id="tsum_uma10"
    transform="scale(1.0459 .95611)"
    x={146.25822}
    y={168.98137}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-9"
      x={146.25822}
      y={168.98137}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
       {ParametrosClima.uma10_TS}°
    </tspan>
  </text>
  <text
    id="tsum_uma9"
    transform="scale(1.0459 .95611)"
    x={146.25822}
    y={158.46379}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-0"
      x={146.25822}
      y={158.46379}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
       {ParametrosClima.uma9_TS}°
    </tspan>
  </text>
  <text
    id="tsum_uma8"
    transform="scale(1.0459 .95611)"
    x={146.25822}
    y={147.9462}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-87"
      x={146.25822}
      y={147.9462}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
       {ParametrosClima.uma8_TS}°
    </tspan>
  </text>
  <text
    id="tsum_uma7"
    transform="scale(1.0459 .95611)"
    x={146.25822}
    y={137.4286}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-5"
      x={146.25822}
      y={137.4286}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
      {ParametrosClima.uma7_TS}°
    </tspan>
  </text>
  <text
    id="tsum_uma6"
    transform="scale(1.0459 .95611)"
    x={146.25822}
    y={126.91102}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-8"
      x={146.25822}
      y={126.91102}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
       {ParametrosClima.uma6_TS}°
    </tspan>
  </text>
  <text
    id="tsum_uma5"
    transform="scale(1.0459 .95611)"
    x={146.25822}
    y={116.39342}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-6"
      x={146.25822}
      y={116.39342}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
       {ParametrosClima.uma5_TS}°
    </tspan>
  </text>
  <text
    id="tsum_uma4"
    transform="scale(1.0459 .95611)"
    x={146.25822}
    y={105.87582}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-10"
      x={146.25822}
      y={105.87582}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
       {ParametrosClima.uma4_TS}°
    </tspan>
  </text>
  <text
    id="tsum_uma3"
    transform="scale(1.0459 .95611)"
    x={146.25822}
    y={95.358238}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-2"
      x={146.25822}
      y={95.358238}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
       {ParametrosClima.uma3_TS}°
    </tspan>
  </text>
  <text
    id="tsum_uma2"
    transform="scale(1.0459 .95611)"
    x={146.25822}
    y={84.840652}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6-1"
      x={146.25822}
      y={84.840652}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
       {ParametrosClima.uma2_TS}°
    </tspan>
  </text>
  <text
    id="tsum_uma1"
    transform="scale(1.0459 .95611)"
    x={146.25822}
    y={74.323051}
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
    fontSize="4.2317px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-6-1-3-73-5-6-1-6"
      x={146.25822}
      y={74.323051}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2317px"
      strokeWidth={0.4333}
    >
       {ParametrosClima.uma1_TS}°
    </tspan>
  </text>
  <circle
    id="st_chill1"
    transform="translate(14.288)"
    cx={93.875}
    cy={59.505}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.Ea1}
  />
  <ellipse
    id="st_chill1ea1brillo"
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
    id="alarma_chill1"
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
    id="mantenimiento_chill1"
    transform="translate(14.288)"
    cx={93.875}
    cy={59.505}
    r={2}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS2.Ea1mant}
  />
  <circle
    id="st_chill2"
    transform="translate(14.288)"
    cx={93.875}
    cy={82.43}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.Ea2}
  />
  <ellipse
    id="st_chill1ea2brillo"
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
    id="alarmas_chill2"
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
    id="mantenimiento_chill2"
    transform="translate(14.288)"
    cx={93.875}
    cy={82.43}
    r={2}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS2.Ea2mant}
  />
  <circle
    id="st_bomba3"
    cx={110.34}
    cy={113.93}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.b1_3}
  />
  <ellipse
    id="st_bomba3brillo"
    transform="matrix(.2836 0 0 .14992 99.236 86.319)"
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
    id="st_bomba2"
    cx={122.25}
    cy={113.93}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.b1_2}
  />
  <ellipse
    id="st_bomba2brillo"
    transform="matrix(.2836 0 0 .14992 111.14 86.319)"
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
    id="st_bomba1"
    cx={134.16}
    cy={113.93}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.b1_1}
  />
  <ellipse
    id="st_bomba1brillo"
    transform="matrix(.2836 0 0 .14992 123.05 86.319)"
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
    id="alarma_bomba1"
    cx={134.16}
    cy={113.93}
    r={2}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS2.b1_1}
  />
  <circle
    id="st_bombasec2"
    cx={122.78}
    cy={137.35}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.b2_2}
  />
  <ellipse
    id="st_bombasec2brillo"
    transform="matrix(.2836 0 0 .14992 111.67 109.73)"
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
    id="alarma_bombasec2"
    cx={122.78}
    cy={137.35}
    r={2}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS2.b2_2}
  />
  <circle
    id="st_bombasec1"
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
    id="alarma_bombasec1"
    transform="translate(14.288)"
    cx={119.87}
    cy={137.35}
    r={2}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS2.b2_1}
  />
  <circle
    id="st_valv2a1"
    cx={122.78}
    cy={156.12}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.V1aux}
  />
  <ellipse
    id="st_valv2a1brillo"
    transform="matrix(.2836 0 0 .14992 111.67 128.51)"
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
    id="st_valv2a2"
    transform="translate(14.288)"
    cx={119.87}
    cy={156.12}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.V2aux}
  />
  <ellipse
    id="st_valv2a2brillo"
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
  <circle
    id="st_upschi2"
    transform="translate(14.288)"
    cx={93.88}
    cy={35.995}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS2.upschi2}
  />
  <ellipse
    id="st_upschibrillo2"
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
    id="alarma_upschi2"
    transform="translate(14.288)"
    cx={93.88}
    cy={35.995}
    r={2}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS2.upschi2}
  />
  <circle
    id="st_chill3"
    transform="translate(14.288)"
    cx={31.976}
    cy={59.505}
    r={2}
    fill="#2fc43b"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.Ea3}
  />
  <ellipse
    id="st_chill1ea3brillo"
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
    id="alarma_chill3"
    transform="translate(14.288)"
    cx={31.976}
    cy={59.505}
    r={2}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.Ea3}
  />
  <circle
    id="mantenimiento_chill3"
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
    id="st_chill4"
    transform="translate(14.288)"
    cx={31.976}
    cy={82.43}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.Ea4}
  />
  <ellipse
    id="st_chill1ea4brillo"
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
    id="alarma_chill4"
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
    id="mantenimiento_chill4"
    transform="translate(14.288)"
    cx={31.976}
    cy={82.43}
    r={2}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.Ea4mant}
  />
  <circle
    id="st_bomba6"
    cx={47.381}
    cy={113.93}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.b1_6}
  />
  <ellipse
    id="st_bomba6brillo"
    transform="matrix(.2836 0 0 .14992 36.273 86.319)"
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
    id="alarma_bomba6"
    cx={47.381}
    cy={113.93}
    r={2}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.b1_6}
  />
  <circle
    id="st_bomba5"
    cx={59.556}
    cy={113.93}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.b1_5}
  />
  <ellipse
    id="st_bomba5brillo"
    transform="matrix(.2836 0 0 .14992 48.448 86.319)"
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
    id="alarma_bomba5"
    cx={59.556}
    cy={113.93}
    r={2}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.b1_5}
  />
  <circle
    id="st_bomba4"
    cx={71.731}
    cy={113.93}
    r={2}
    fill="#2fc43b"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.b1_4}
  />
  <ellipse
    id="st_bomba4brillo"
    transform="matrix(.2836 0 0 .14992 60.623 86.319)"
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
    id="alarma_bomba4"
    cx={71.731}
    cy={113.93}
    r={2}
    fill="#2fc43b"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.b1_4}
  />
  <circle
    id="st_bombasec4"
    cx={60.883}
    cy={137.35}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.b2_4}
  />
  <ellipse
    id="st_bombasec4brillo"
    transform="matrix(.2836 0 0 .14992 49.775 109.73)"
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
    id="alarma_bombasec4"
    cx={60.883}
    cy={137.35}
    r={2}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.b2_4}
  />
  <circle
    id="st_bombasec3"
    cx={71.731}
    cy={137.35}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.b2_3}
  />
  <ellipse
    id="st_bombasec3brillo"
    transform="matrix(.2836 0 0 .14992 60.623 109.73)"
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
  <circle
    id="alrma_bombasec3"
    cx={71.731}
    cy={137.35}
    r={2}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.b2_3}
  />
  <circle
    id="st_valv1a1"
    cx={60.884}
    cy={156.12}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.V1aux}
  />
  <ellipse
    id="st_valv1a1brillo"
    transform="matrix(.2836 0 0 .14992 49.776 128.51)"
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
    id="st_valv1a2"
    cx={71.731}
    cy={156.12}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.V2aux}
  />
  <ellipse
    id="st_valv1a2brillo"
    transform="matrix(.2836 0 0 .14992 60.623 128.51)"
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
  <circle
    id="st_upschi1"
    transform="translate(14.288)"
    cx={31.976}
    cy={35.994}
    r={2}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_SIS1.upschi1}
  />
  <ellipse
    id="st_upschibrillo"
    transform="matrix(.2836 0 0 .14992 35.156 8.567)"
    cx={39.31}
    cy={175.59}
    rx={4.2297}
    ry={4.0337}
    fill="#fff"
    filter="url(#filter2602)"
    opacity={0.29}
    paintOrder="markers stroke fill"
    strokeWidth={1.8378}
  />
  <circle
    id="alarma_upschi1"
    transform="translate(14.288)"
    cx={31.976}
    cy={35.994}
    r={2}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas_SIS1.upschi1}
  />
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
  <ellipse
    id="st_s1aaccbrillo"
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
    id="alarma_s1aacc"
    transform="translate(14.288)"
    cx={53.548}
    cy={11.229}
    r={4.671}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas.clima_SIS1}
  />
  <circle
    id="st_s2aacc"
    transform="translate(14.288)"
    cx={115.4}
    cy={11.229}
    r={4.671}
    fill="#999"
    paintOrder="markers stroke fill"
    className={Estados_Principales.clima_SIS2}
  />
  <ellipse
    id="st_s2aaccbrillo"
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
   <circle
    id="alarma_s2aacc"
    transform="translate(14.288)"
    cx={115.4}
    cy={11.229}
    r={4.671}
    fill="#999"
    opacity={0}
    paintOrder="markers stroke fill"
    className={Alarmas.clima_SIS2}
  />
  <text
    id="tsumchill1ea3"
    transform="scale(1.0636 .9402)"
    x={61.190811}
    y={64.567863}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-9"
      x={61.190811}
      y={64.567863}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.T_sumEA3}°C
    </tspan>
  </text>
  <text
    id="tretchill1ea3"
    transform="scale(1.0636 .9402)"
    x={61.190811}
    y={69.885887}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1"
      x={61.190811}
      y={69.885887}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.T_retEA3}°C
    </tspan>
  </text>
  <text
    id="tsumchill1ea4"
    transform="scale(1.0636 .9402)"
    x={61.190422}
    y={88.950928}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-9-6"
      x={61.190422}
      y={88.950928}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.T_sumEA4}°C
    </tspan>
  </text>
  <text
    id="tretchill1ea4"
    transform="scale(1.0636 .9402)"
    x={61.190422}
    y={94.268951}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-4"
      x={61.190422}
      y={94.268951}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.T_retEA4}°C
    </tspan>
  </text>
  <text
    id="load_b4"
    transform="scale(1.0636 .9402)"
    x={53.832466}
    y={141.47786}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-9-6-3"
      x={53.832466}
      y={141.47786}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.LoadB4} %
    </tspan>
  </text>
  <text
    id="load_b3"
    transform="scale(1.0636 .9402)"
    x={63.337975}
    y={141.47786}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-4-1"
      x={63.337975}
      y={141.47786}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.LoadB3} %
    </tspan>
  </text>
  <text
    id="tempsumprim1a"
    transform="scale(.96219 1.0393)"
    x={64.760048}
    y={167.66055}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan11149-1-7-6"
      x={64.760048}
      y={167.66055}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.T_sum_prim}°C
    </tspan>
  </text>
  <text
    id="tempsumsec1a"
    transform="scale(.96219 1.0393)"
    x={64.760048}
    y={172.13495}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan11149-1-7-6-9"
      x={64.760048}
      y={172.13495}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.T_sum_sec}°C
    </tspan>
  </text>
  <text
    id="temptanq1a"
    transform="scale(.96219 1.0393)"
    x={64.760048}
    y={176.60934}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan11149-1-7-6-9-3"
      x={64.760048}
      y={176.60934}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.T_tanque}°C
    </tspan>
  </text>
  <text
    id="tempret1a"
    transform="scale(.96219 1.0393)"
    x={64.760048}
    y={181.08372}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan11149-1-7-6-9-3-6"
      x={64.760048}
      y={181.08372}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS1.T_ret}°C
    </tspan>
  </text>
  <text
    id="vinupschi"
    transform="scale(1.0636 .9402)"
    x={61.191166}
    y={39.281872}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-9-8"
      x={61.191166}
      y={39.281872}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosUPS_SIS1.V_inCHI} V
    </tspan>
  </text>
  <text
    id="voutupschi"
    transform="scale(1.0636 .9402)"
    x={61.191166}
    y={43.529335}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-9"
      x={61.191166}
      y={43.529335}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosUPS_SIS1.V_outCHI} V
    </tspan>
  </text>
  <text
    id="ioutupschi"
    transform="scale(1.0636 .9402)"
    x={61.191544}
    y={47.776798}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-9-9"
      x={61.191544}
      y={47.776798}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
     {ParametrosUPS_SIS1.I_outCHI} A
    </tspan>
  </text>
  <text
    id="loadupschi"
    transform="scale(1.0636 .9402)"
    x={61.191788}
    y={52.017025}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-9-9-4"
      x={61.191788}
      y={52.017025}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosUPS_SIS1.LoadCHI} %
    </tspan>
  </text>
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
    id="vol_upsin"
    transform="scale(1.0508 .95161)"
    x={239.21196}
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
  <text
    id="pue"
    transform="scale(.89754 1.1142)"
    x={228.54941}
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
      x={228.54941}
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
    transform="scale(.84138 1.1885)"
    x={278.6413}
    y={154.20018}
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
    fontSize="7.0555px"
    letterSpacing={0}
    strokeWidth={0.4333}
    wordSpacing={0}
  >
    <tspan
      id="tspan998-68-8-2"
      x={278.6413}
      y={154.20018}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal",
        lineHeight: 3.25
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="7.0555px"
      strokeWidth={0.4333}
    >
      {ParametrosElec.DCIE} %
    </tspan>
  </text>
  <text
    id="vol_upsout"
    transform="scale(1.0508 .95161)"
    x={279.2937}
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
  <text
    id="tempsumprim2a"
    transform="matrix(.96219 0 0 1.0393 14.288 0)"
    x={113.92879}
    y={167.66025}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan11149-1-7-6-4"
      x={113.92879}
      y={167.66025}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS2.T_sum_prim}°C
    </tspan>
  </text>
  <text
    id="tempsumsec2a"
    transform="matrix(.96219 0 0 1.0393 14.288 0)"
    x={113.92879}
    y={172.13463}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan11149-1-7-6-9-6"
      x={113.92879}
      y={172.13463}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS2.T_sum_sec}°C
    </tspan>
  </text>
  <text
    id="temptanq2a"
    transform="scale(.96219 1.0393)"
    x={128.77827}
    y={176.60902}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan11149-1-7-6-9-3-3"
      x={128.77827}
      y={176.60902}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS2.T_tanque}°C
    </tspan>
  </text>
  <text
    id="tempret2a"
    transform="matrix(.96219 0 0 1.0393 14.288 0)"
    x={113.92879}
    y={181.08342}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan11149-1-7-6-9-3-6-3"
      x={113.92879}
      y={181.08342}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS2.T_ret}°C
    </tspan>
  </text>
  <text
    id="tsumchill1ea1"
    transform="matrix(1.0636 0 0 .9402 14.288 0)"
    x={105.67113}
    y={64.56752}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-9-0"
      x={105.67113}
      y={64.56752}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS2.T_sumEA1}°C
    </tspan>
  </text>
  <text
    id="tretchill1ea1"
    transform="matrix(1.0636 0 0 .9402 14.288 0)"
    x={105.67113}
    y={69.885551}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-3"
      x={105.67113}
      y={69.885551}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS2.T_retEA1}°C
    </tspan>
  </text>
  <text
    id="tsumchill1ea2"
    transform="matrix(1.0636 0 0 .9402 14.288 0)"
    x={105.67072}
    y={88.950584}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-9-6-5"
      x={105.67072}
      y={88.950584}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS2.T_sumEA2}°C
    </tspan>
  </text>
  <text
    id="tretchill1ea2"
    transform="matrix(1.0636 0 0 .9402 14.288 0)"
    x={105.67072}
    y={94.268616}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-4-4"
      x={105.67072}
      y={94.268616}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS2.T_retEA2}°C
    </tspan>
  </text>
  <text
    id="load_b2"
    transform="matrix(1.0636 0 0 .9402 14.288 0)"
    x={98.312775}
    y={141.47752}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-9-6-3-0"
      x={98.312775}
      y={141.47752}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS2.LoadB2}%
    </tspan>
  </text>
  <text
    id="load_b1"
    transform="matrix(1.0636 0 0 .9402 14.288 0)"
    x={107.81829}
    y={141.47752}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-4-1-1"
      x={107.81829}
      y={141.47752}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosClima_SIS2.LoadB1}%
    </tspan>
  </text>
  <text
    id="vinupschi-2"
    transform="matrix(1.0636 0 0 .9402 14.288 0)"
    x={105.67146}
    y={39.281872}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-9-8-4"
      x={105.67146}
      y={39.281872}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosUPS_SIS2.V_inCHI} V
    </tspan>
  </text>
  <text
    id="voutupschi-2"
    transform="matrix(1.0636 0 0 .9402 14.288 0)"
    x={105.67146}
    y={43.529335}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-9-0"
      x={105.67146}
      y={43.529335}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosUPS_SIS2.V_outCHI} V
    </tspan>
  </text>
  <text
    id="ioutupschi-2"
    transform="matrix(1.0636 0 0 .9402 14.288 0)"
    x={105.67186}
    y={47.776798}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-9-9-1"
      x={105.67186}
      y={47.776798}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosUPS_SIS2.I_outCHI} A
    </tspan>
  </text>
  <text
    id="loadupschi-2"
    transform="matrix(1.0636 0 0 .9402 14.288 0)"
    x={105.6721}
    y={52.017025}
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
    strokeWidth={0.48961}
    wordSpacing={0}
  >
    <tspan
      id="tspan4568-3-8-1-9-9-4-9"
      x={105.6721}
      y={52.017025}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2334px"
      strokeWidth={0.48961}
    >
      {ParametrosUPS_SIS2.LoadCHI} %
    </tspan>
  </text>
  <path
          id="rect1435"
          fillRule="evenodd"
          fill="gray"
          strokeWidth={0.26459}
          d="M47.318 89.866H76.116V95.4619H47.318z"
          opacity={0}
          className={Alarmas_SIS1.text_mant_Ea4}
        />
        <text
          id="text_mant.ea4"
          transform="matrix(.88999 0 0 1.1236 14.288 0)"
          x={37.663902}
          y={83.835106}
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
          fontSize="4.2334px"
          letterSpacing={0}
          strokeWidth={0.43331}
          wordSpacing={0}
        >
          <tspan
            id="tspan998-3-3-0-7-7-9-0-8-5-6-1"
            x={37.663902}
            y={83.835106}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              lineHeight: 3.25
            }}
            fill="#000"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.2334px"
            strokeWidth={0.43331}
          >
            {"MANTENIMIENTO"}
          </tspan>
        </text>
        <path
          id="rect1435-1"
          fillRule="evenodd"
          fill="gray"
          strokeWidth={0.26459}
          d="M47.318 67.221H76.116V72.8169H47.318z"
          opacity={0}
          className={Alarmas_SIS1.text_mant_Ea3}
        />
        <text
          id="text_mant.ea3"
          transform="scale(.88999 1.1236)"
          x={53.717651}
          y={63.68084}
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
          fontSize="4.2334px"
          letterSpacing={0}
          strokeWidth={0.43331}
          wordSpacing={0}
        >
          <tspan
            id="tspan998-3-3-0-7-7-9-0-8-5-6-1-8"
            x={53.717651}
            y={63.68084}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              lineHeight: 3.25
            }}
            fill="#000"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.2334px"
            strokeWidth={0.43331}
          >
            {"MANTENIMIENTO"}
          </tspan>
        </text>
        <path
          id="rect1435-7"
          fillRule="evenodd"
          fill="gray"
          strokeWidth={0.26459}
          d="M109.14 67.221H137.938V72.8169H109.14z"
          opacity={0}
          className={Alarmas_SIS2.text_mant_Ea1}
        />
        <text
          id="text_mant.ea1"
          transform="scale(.88999 1.1236)"
          x={123.18087}
          y={63.680801}
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
          fontSize="4.2334px"
          letterSpacing={0}
          strokeWidth={0.43331}
          wordSpacing={0}
        >
          <tspan
            id="tspan998-3-3-0-7-7-9-0-8-5-6-1-0"
            x={123.18087}
            y={63.680801}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              lineHeight: 3.25
            }}
            fill="#000"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.2334px"
            strokeWidth={0.43331}
          >
            {"MANTENIMIENTO"}
          </tspan>
        </text>
        <path
          id="rect1435-9"
          fillRule="evenodd"
          fill="gray"
          strokeWidth={0.26459}
          d="M109.14 89.866H137.938V95.4619H109.14z"
          opacity={0}
          className={Alarmas_SIS2.text_mant_Ea2}
        />
        <text
          id="text_mant.ea2"
          transform="scale(.88999 1.1236)"
          x={123.18067}
          y={83.834961}
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
          fontSize="4.2334px"
          letterSpacing={0}
          strokeWidth={0.43331}
          wordSpacing={0}
        >
          <tspan
            id="tspan998-3-3-0-7-7-9-0-8-5-6-1-4"
            x={123.18067}
            y={83.834961}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              lineHeight: 3.25
            }}
            fill="#000"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.2334px"
            strokeWidth={0.43331}
          >
            {"MANTENIMIENTO"}
          </tspan>
        </text>
      </g>
  )
}