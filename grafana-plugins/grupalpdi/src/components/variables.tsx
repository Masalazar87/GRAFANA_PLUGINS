import React from 'react';

type DatosGenerales = {
    Nombre: string;
};

type ParametrosIn = {
    VinRS : number;
    VinST : number;
    VinTR : number;
    VinRn : number;
    VinSn : number;
    VinTn : number;
};

type ParametrosOut = {
    VoutRS : number;
    VoutST : number;
    VoutTR : number;
    VoutRn : number;
    VoutSn : number;
    VoutTn : number;
    IoutR : number;
    IoutS : number;
    IoutT : number;
    IoutProm: number;
    PotR: number;
    PotS: number;
    PotT: number;
    PotTotal: number;
    KvaR: number;
    KvaS: number;
    KvaT: number;
    KVAprom: number;
    FPR : number;
    FPS : number;
    FPT : number;
    FPprom: number;
    KWH: number;
    KWHR: number;
    KWHS: number;
    KWHT: number;
    INEUTRO: number;
};

type Indicadores = {
    ModbusST : string;
    Alarma : string;
}

export interface DataGrupalpdi {
    DatosGenerales: DatosGenerales;
    ParametrosIn: ParametrosIn;
    ParametrosOut: ParametrosOut;
    Indicadores: Indicadores;

}

export const Variables = ({DatosGenerales, ParametrosIn, ParametrosOut, Indicadores}: DataGrupalpdi)=> {

return (
  <g id="layer4">
  <text
    id="pdu5_vin_ab"
    transform="scale(.84482 1.1837)"
    x={38.390591}
    y={37.793015}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2520-8-5-02"
      x={36.390591}
      y={37.793015}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosIn.VinRS} V
    </tspan>
  </text>
  <text
    id="pdu5_vin_bc"
    transform="scale(.84482 1.1837)"
    x={38.390591}
    y={41.822411}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2528-3-4-41"
      x={36.390591}
      y={41.822411}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosIn.VinST} V
    </tspan>
  </text>
  <text
    id="pdu5_vin_ac"
    transform="scale(.84482 1.1837)"
    x={38.390591}
    y={45.871704}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2534-6-0-7"
      x={36.390591}
      y={45.871704}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosIn.VinTR} V
    </tspan>
  </text>
  <text
    id="pdu5_p1_vbc"
    transform="scale(.84482 1.1837)"
    x={50.572445}
    y={60.977245}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2548-7-5-5"
      x={50.572445}
      y={60.977245}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.PotR} KW
    </tspan>
  </text>
  <text
    id="pdu5_p1_vab"
    transform="scale(.84482 1.1837)"
    x={50.572445}
    y={56.937511}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2554-3-8-2"
      x={50.572445}
      y={56.937511}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.IoutR} A
    </tspan>
  </text>
  <text
    id="pdu5_p2_vab"
    transform="scale(.84482 1.1837)"
    x={50.572445}
    y={69.027771}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2560-4-77-6"
      x={50.572445}
      y={69.027771}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.FPR}
    </tspan>
  </text>
  <text
    id="pdu5_p1_vac"
    transform="scale(.84482 1.1837)"
    x={50.572445}
    y={64.988037}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2566-2-9-8"
      x={50.572445}
      y={64.988037}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.KvaR} KVA
    </tspan>
  </text>
  <text
    id="pdu5_p2_vbc"
    transform="scale(.84482 1.1837)"
    x={50.572445}
    y={73.038567}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2572-8-5-3"
      x={50.572445}
      y={73.038567}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.KWH} KW/H
    </tspan>
  </text>
  <text
    id="pdu5_p1_curra"
    transform="scale(.84482 1.1837)"
    x={72.39283}
    y={56.937511}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2598-9-9-1"
      x={72.39283}
      y={56.937511}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.IoutS} A
    </tspan>
  </text>
  <text
    id="pdu5_p1_currb"
    transform="scale(.84482 1.1837)"
    x={72.39283}
    y={60.948307}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2606-0-76-9"
      x={72.39283}
      y={60.948307}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.PotS} KW
    </tspan>
  </text>
  <text
    id="pdu5_p1_currc"
    transform="scale(.84482 1.1837)"
    x={72.531731}
    y={64.96875}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2612-3-3-6"
      x={72.531731}
      y={64.96875}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.KvaS} KVA
    </tspan>
  </text>
  <text
    id="pdu5_p2_curra"
    transform="scale(.84482 1.1837)"
    x={72.39283}
    y={68.99884}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2618-0-3-4"
      x={72.39283}
      y={68.99884}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.FPS}
    </tspan>
  </text>
  <text
    id="pdu5_p2_currb"
    transform="scale(.84482 1.1837)"
    x={72.39283}
    y={73.038567}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2624-6-5-7"//ENERGY
      x={72.39283}
      y={73.038567}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {}
    </tspan>
  </text>
  <text
    id="pdu5_p1_kwa"
    transform="scale(.84482 1.1837)"
    x={95.255081}
    y={56.937511}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2660-2-6-3"
      x={95.255081}
      y={56.937511}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.IoutT} A
    </tspan>
  </text>
  <text
    id="pdu5_p2_kwa"
    transform="scale(.84482 1.1837)"
    x={95.255081}
    y={68.99884}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2666-1-9-9"
      x={95.255081}
      y={68.99884}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.FPT}
    </tspan>
  </text>
  <text
    id="pdu5_p2_kwb"
    transform="scale(.84482 1.1837)"
    x={95.255081}
    y={73.038567}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2678-1-9-78"//ENERGY2
      x={95.255081}
      y={73.038567}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {}
    </tspan>
  </text>
  <text
    id="pdu5_p1_kwc"
    transform="scale(.84482 1.1837)"
    x={95.255081}
    y={64.988037}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2684-2-6-0"
      x={95.255081}
      y={64.988037}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.KvaT} KVA
    </tspan>
  </text>
  <text
    id="pdu5_p1_kwb"
    transform="scale(.84482 1.1837)"
    x={95.255081}
    y={60.948307}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2690-5-3-6"
      x={95.255081}
      y={60.948307}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.PotT} KW
    </tspan>
  </text>
  <text
    id="pdu5_p1_fpb"
    transform="scale(.84482 1.1837)"
    x={116.67458}
    y={60.953133}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2702-5-9-01"
      x={116.67458}
      y={60.953133}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.PotTotal} KW
    </tspan>
  </text>
  <text
    id="pdu5_p1_fpc"
    transform="scale(.84482 1.1837)"
    x={116.67458}
    y={64.978394}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2708-6-5-1"
      x={116.67458}
      y={64.978394}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.KVAprom} KVA
    </tspan>
  </text>
  <text
    id="pdu5_p2_fpb"
    transform="scale(.84482 1.1837)"
    x={116.67458}
    y={73.028923}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2726-2-47-1"//ENERGY3
      x={116.67458}
      y={73.028923}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {}
    </tspan>
  </text>
  <text
    id="pdu5_p2_fpa"
    transform="scale(.84482 1.1837)"
    x={116.67458}
    y={69.003662}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2732-4-09-3"
      x={116.67458}
      y={69.003662}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.FPprom}
    </tspan>
  </text>
  <text
    id="pdu5_p1_fpa"
    transform="scale(.84482 1.1837)"
    x={116.67458}
    y={56.927864}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2738-5-3-76" //{ParametrosOut.IoutProm} A
      x={116.67458}
      y={56.927864}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {""}
    </tspan>
  </text>
  <ellipse
    id="pdu5_out_vol"
    cx={22.495}
    cy={15.84}
    rx={3.8884}
    ry={3.7825}
    fillRule="evenodd"
    fill="#1ad372"
    className={Indicadores.ModbusST}
    opacity={0.899}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="path2610-3-6-99"
    transform="matrix(.99057 0 0 .57524 -55.091 -4.367)"
    cx={78.266}
    cy={31.379}
    rx={2.3671}
    ry={1.9181}
    fillRule="evenodd"
    fill="#fff"
    filter="url(#filter3102-29)"
    opacity={0.36022}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="pdu_1b_f3_alarm"
    cx={35.811}
    cy={17.189}
    rx={2.6248}
    ry={2.6585}
    fillRule="evenodd"
    fill="#343434"
    className={Indicadores.Alarma}
    opacity={0.899}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="path2610-3-6-9-2"
    transform="matrix(.58569 0 0 .34746 -9.974 4.74)"
    cx={78.266}
    cy={31.379}
    rx={2.3671}
    ry={1.9181}
    fillRule="evenodd"
    fill="#fff"
    filter="url(#filter3102-5-0)"
    opacity={0.16667}
    paintOrder="markers stroke fill"
  />
  <text
    id="pdu_1b_f3_out_ab_vol"
    transform="scale(.92766 1.078)"
    x={19.762699}
    y={5.176455}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="5.4299px"
    letterSpacing={0}
    opacity={0.899}
    strokeWidth={0.17191}
    wordSpacing={0}
  >
    <tspan
      id="tspan4467"
      x={19.762699}
      y={5.176455}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fontFamily="Franklin Gothic Medium"
      fontSize="5.4299px"
      strokeWidth={0.17191}
    >
      {DatosGenerales.Nombre}
    </tspan>  
  </text>
  <text
    id="pdu5_p1_kwa-4"
    transform="scale(.84482 1.1837)"
    x={97.447342}
    y={37.793015}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2660-2-6-3-9"
      x={95.447342}
      y={37.793015}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.VoutRS} V
    </tspan>
  </text>
  <text
    id="pdu5_p1_kwc-7"
    transform="scale(.84482 1.1837)"
    x={97.447342}
    y={45.871704}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2684-2-6-0-6"
      x={95.447342}
      y={45.871704}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.VoutTR} V
    </tspan>
  </text>
  <text
    id="pdu5_p1_kwb-8"
    transform="scale(.84482 1.1837)"
    x={97.447342}
    y={41.812466}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2690-5-3-6-5"
      x={95.447342}
      y={41.812466}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.VoutST} V
    </tspan>
  </text>
  <text
    id="pdu5_p1_fpb-1"
    transform="scale(.84482 1.1837)"
    x={119.67994}
    y={41.819096}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2702-5-9-01-8"
      x={117.67994}
      y={41.819096}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.VoutSn} V
    </tspan>
  </text>
  <text
    id="pdu5_p1_fpc-1"
    transform="scale(.84482 1.1837)"
    x={119.67994}
    y={45.85844}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2708-6-5-1-5"
      x={117.67994}
      y={45.85844}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.VoutTn} V
    </tspan>
  </text>
  <text
    id="pdu5_p1_fpa-1"
    transform="scale(.84482 1.1837)"
    x={119.67994}
    y={37.779751}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2738-5-3-76-0"
      x={117.67994}
      y={37.779751}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.VoutRn} V
    </tspan>
  </text>
  <text
    id="pdu5_vin_ab-4"
    transform="scale(.84482 1.1837)"
    x={60.375526}
    y={37.686764}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2520-8-5-02-4"
      x={58.375526}
      y={37.686764}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosIn.VinRn} V
    </tspan>
  </text>
  <text
    id="pdu5_vin_bc-7"
    transform="scale(.84482 1.1837)"
    x={60.375526}
    y={41.71616}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2528-3-4-41-8"
      x={58.375526}
      y={41.71616}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosIn.VinSn} V
    </tspan>
  </text>
  <text
    id="pdu5_vin_ac-0"
    transform="scale(.84482 1.1837)"
    x={60.375526}
    y={45.765453}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2534-6-0-7-9"
      x={58.375526}
      y={45.765453}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosIn.VinTn} V
    </tspan>
  </text>
  <text
    id="pdu5_p2_vbc-4"
    transform="scale(.84482 1.1837)"
    x={50.572414}
    y={77.061829}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="2.5222px"
    letterSpacing={0}
    strokeWidth={0.68746}
    wordSpacing={0}
  >
    <tspan
      id="tspan2572-8-5-3-4"
      x={50.572414}
      y={77.061829}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="2.5222px"
      strokeWidth={0.68746}
    >
      {ParametrosOut.INEUTRO} A
    </tspan>
  </text>
</g> 
)
} 

