import React from 'react';

type DatosGenerales = {
    Nombre: string;
    Marca: string;
};

type Motor = {
    Temp: number;
    PresOil: number;
    Vbatt: number;
    ChargeVolt: number;
    OperHours: number;
    LvFuel: number;
};

type Alternador = {
    VLLprom: number;
    Illprom: number;
    kwprom: number;
    kvaprom: number;
    Energy: number;
    FP: number;
};

type Indicadores ={
    Estado: string;
    Encendido: string;
    Alarma: string;
    Mant: string;
    Stop: string;
    Manual: string;
    Auto: string;
    Vout: string;
    Iout: string;
};

export interface DataGrupalgen {
    DatosGenerales : DatosGenerales;
    Motor: Motor;
    Alternador: Alternador;
    Indicadores: Indicadores;
};

export const Variables = ({ DatosGenerales, Motor, Alternador, Indicadores}: DataGrupalgen) =>{
return (
  <g id="layer5">
    <path
            id="path1781-2-3-3"
            d="M15.869 8.275h45.497l5.755-5.753-46.865.182z"
            fill="#357a8f"
            opacity={0.40215}
            className={Indicadores.Encendido}
          />
  <text
    id="gen4_poil"
    transform="scale(1.0817 .92445)"
    x={49.539448}
    y={47.115974}
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
    fontSize="3.175px"
    letterSpacing={0}
    strokeWidth={0.17543}
    wordSpacing={0}
  >
    <tspan
      id="tspan5498"
      x={49.539448}
      y={47.115974}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.17543}
    >
      {Motor.PresOil} PSI
    </tspan>
  </text>
  <text
    id="gen4_temp"
    transform="scale(1.0817 .92445)"
    x={49.539448}
    y={42.892147}
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
    fontSize="3.175px"
    letterSpacing={0}
    strokeWidth={0.17543}
    wordSpacing={0}
  >
    <tspan
      id="tspan5496"
      x={49.539448}
      y={42.892147}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.17543}
    >
      {Motor.Temp} °C
    </tspan>
  </text>
  <text
    id="gen4_vbat"
    transform="scale(1.0817 .92445)"
    x={49.539448}
    y={51.339809}
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
    fontSize="3.175px"
    letterSpacing={0}
    strokeWidth={0.17543}
    wordSpacing={0}
  >
    <tspan
      id="tspan356"
      x={49.539448}
      y={51.339809}
      strokeWidth={0.17543}
    >
      {Motor.ChargeVolt} VDC
    </tspan>
  </text>
  <text
    id="gen4_loil"
    transform="scale(1.0817 .92445)"
    x={49.539448}
    y={55.563637}
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
    fontSize="3.175px"
    letterSpacing={0}
    strokeWidth={0.17543}
    wordSpacing={0}
  >
    <tspan
      id="tspan5502"
      x={49.539448}
      y={55.563637}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.17543}
    >
      {Motor.Vbatt} VDC
    </tspan>
  </text>
  <text
    id="gen4_vol"
    transform="scale(1.0817 .92445)"
    x={92.832611}
    y={42.892147}
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
    fontSize="3.175px"
    letterSpacing={0}
    strokeWidth={0.17543}
    wordSpacing={0}
  >
    <tspan
      id="tspan2356-4"
      x={92.832611}
      y={42.892147}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.17543}
    >
      {Alternador.VLLprom} VAC
    </tspan>
  </text>
  <text
    id="gen4_curr"
    transform="scale(1.0817 .92445)"
    x={92.832611}
    y={47.115971}
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
    fontSize="3.175px"
    letterSpacing={0}
    strokeWidth={0.17543}
    wordSpacing={0}
  >
    <tspan
      id="tspan2364-7"
      x={92.832611}
      y={47.115971}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.17543}
    >
      {Alternador.Illprom} A
    </tspan>
  </text>
  <text
    id="gen4_pot"
    transform="scale(1.0817 .92445)"
    x={92.832611}
    y={51.339806}
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
    fontSize="3.175px"
    letterSpacing={0}
    strokeWidth={0.17543}
    wordSpacing={0}
  >
    <tspan
      id="tspan2368-3"
      x={92.832611}
      y={51.339806}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.17543}
    >
      {Alternador.kwprom} KW
    </tspan>
  </text>
  <text
    id="gen4_kvah"
    transform="scale(1.0817 .92445)"
    x={92.832611}
    y={55.563633}
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
    fontSize="3.175px"
    letterSpacing={0}
    strokeWidth={0.17543}
    wordSpacing={0}
  >
    <tspan
      id="tspan2372-8"
      x={92.832611}
      y={55.563633}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="3.175px"
      strokeWidth={0.17543}
    >
      {Alternador.kvaprom} KVA
    </tspan>
  </text>
  <ellipse
    id="gen4_st"
    cx={17.82}
    cy={15.384}
    rx={3.4024}
    ry={3.3838}
    fillRule="evenodd"
    fill="#1ad372"
    opacity={0.899}
    paintOrder="markers stroke fill"
    className={Indicadores.Estado}
  />
  <ellipse
    id="path2610-3-6-99"
    transform="matrix(1.1062 0 0 .93571 -68.852 -14.797)"
    cx={78.266}
    cy={31.379}
    rx={2.3671}
    ry={1.9181}
    fillRule="evenodd"
    fill="#fff"
    filter="url(#filter3102-29)"
    opacity={0.389}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="gen4_alar"
    cx={33.575}
    cy={15.487}
    rx={3.4024}
    ry={3.4869}
    fillRule="evenodd"
    fill="#e10416"
    opacity={0.899}
    paintOrder="markers stroke fill"
    className={Indicadores.Alarma}
  />
  <ellipse
    id="path2610-3-6-9-2"
    transform="matrix(1.1062 0 0 .93571 -52.929 -14.797)"
    cx={78.266}
    cy={31.379}
    rx={2.3671}
    ry={1.9181}
    fillRule="evenodd"
    fill="#fff"
    filter="url(#filter3102-5-0)"
    opacity={0.35}
    paintOrder="markers stroke fill"
  />
  <text
    id="text16384-0-3-4-8"
    transform="scale(.97107 1.0298)"
    x={69.526688}
    y={18.904478}
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
    fontSize="6.3574px"
    letterSpacing={0}
    opacity={0.899}
    strokeOpacity={0.53395}
    strokeWidth={0.72064}
    wordSpacing={0}
  >
    <tspan
      id="tspan16382-0-9-0-0"
      x={69.526688}
      y={18.904478}
      dy="0 0 0 0 0 0"
      style={{
        fontFeatureSettings: "normal",
        fontVariantCaps: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.3574px"
      strokeOpacity={0.53395}
      strokeWidth={0.72064}
    >
      {"HIMOINSA"}
    </tspan>
  </text>
  <g
    id="led3"
    transform="matrix(.39267 0 0 .36499 -141.2 9.385)"
    strokeWidth={0.9277}
  >
    <ellipse
      id="ellipse2272-2"
      cx={513.11}
      cy={171.6}
      rx={4.185}
      ry={3.8495}
      fill="#1aea77"
      className={Indicadores.Iout}
    />
    <path
      id="path2274-7"
      transform="translate(306.94 -230.46) scale(.26458)"
      d="M779.21 1505.7c-2.74 0-5.475.7-7.818 1.994-2.115 1.168-3.833 2.861-5.102 4.793 3.437 1.628 8.034 2.616 12.707 2.62 4.817 0 9.55-1.056 13.018-2.774-1.278-1.89-2.987-3.544-5.08-4.684-2.321-1.264-5.02-1.945-7.725-1.949z"
      fill="url(#linearGradient4152)"
    />
  </g>
  <ellipse
    id="led4"
    cx={92.743}
    cy={76.697}
    rx={1.6433}
    ry={1.4051}
    fill="#1aea77"
    className={Indicadores.Auto}
  />
  <ellipse
    id="led2"
    cx={51.898}
    cy={76.697}
    rx={1.6433}
    ry={1.4051}
    fill="#ff2a2a"
    className={Indicadores.Manual}
  />
  <ellipse
    id="led1"
    cx={31.327}
    cy={76.697}
    rx={1.6433}
    ry={1.4051}
    fill="#ff2a2a"
    className={Indicadores.Stop}
  />
  <ellipse
    id="gen4_stop"
    transform="matrix(.49883 0 0 .35398 -7.835 65.154)"
    cx={78.266}
    cy={31.379}
    rx={2.3671}
    ry={1.9181}
    fillRule="evenodd"
    fill="#fff"
    filter="url(#filter3102-29-7)"
    opacity={0.389}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="gen4_man"
    transform="matrix(.49883 0 0 .35398 12.852 65.154)"
    cx={78.266}
    cy={31.379}
    rx={2.3671}
    ry={1.9181}
    fillRule="evenodd"
    fill="#fff"
    filter="url(#filter3102-29-7-0)"
    opacity={0.389}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="path2610-3-6-99-5-2"
    transform="matrix(.49883 0 0 .35398 21.29 60.221)"
    cx={78.266}
    cy={31.379}
    rx={2.3671}
    ry={1.9181}
    fillRule="evenodd"
    fill="#fff"
    filter="url(#filter3102-29-7-3)"
    opacity={0.389}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="gen4_auto"
    transform="matrix(.49883 0 0 .35398 53.608 65.154)"
    cx={78.266}
    cy={31.379}
    rx={2.3671}
    ry={1.9181}
    fillRule="evenodd"
    fill="#fff"
    filter="url(#filter3102-29-7-2)"
    opacity={0.389}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="gen4_alar-1"
    cx={103.12}
    cy={16.215}
    rx={2.6648}
    ry={2.7309}
    fillRule="evenodd"
    fill="#e10416"
    opacity={0.899}
    paintOrder="markers stroke fill"
    className={Indicadores.Mant}
  />
  <ellipse
    id="path2610-3-6-9-2-6"
    transform="matrix(.86634 0 0 .73285 35.373 -7.503)"
    cx={78.266}
    cy={31.379}
    rx={2.3671}
    ry={1.9181}
    fillRule="evenodd"
    fill="#fff"
    filter="url(#filter3102-5-0-0)"
    opacity={0.35}
    paintOrder="markers stroke fill"
  />
  <text
    id="nom"
    transform="scale(1.0527 .9499)"
    x={29.516417}
    y={7.6043324}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25,
      mixBlendMode: "normal"
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="5.6444px"
    letterSpacing={0}
    strokeWidth={0.19067}
    wordSpacing={0}
  >
    <tspan id="tspan5269" x={25.516417} y={7.6043324}>
      {DatosGenerales.Nombre}
    </tspan>
  </text>
  <g
    id="led3-4"
    transform="matrix(.39267 0 0 .36499 -67.196 5.888)"
    strokeWidth={0.9277}
  >
    <ellipse
      id="ellipse2272-2-6"
      cx={513.11}
      cy={171.6}
      rx={4.185}
      ry={3.8495}
      fill="#1aea77"
      className={Indicadores.Vout}
    />
    <path
      id="path2274-7-8"
      transform="translate(306.94 -230.46) scale(.26458)"
      d="M779.21 1505.7c-2.74 0-5.475.7-7.818 1.994-2.115 1.168-3.833 2.861-5.102 4.793 3.437 1.628 8.034 2.616 12.707 2.62 4.817 0 9.55-1.056 13.018-2.774-1.278-1.89-2.987-3.544-5.08-4.684-2.321-1.264-5.02-1.945-7.725-1.949z"
      fill="url(#linearGradient314)"
    />
  </g>
  <ellipse
    id="path2610-3-6-99-5-2-8"
    transform="matrix(.49883 0 0 .35398 95.294 56.725)"
    cx={78.266}
    cy={31.379}
    rx={2.3671}
    ry={1.9181}
    fillRule="evenodd"
    fill="#fff"
    filter="url(#filter3102-29-7-3-5)"
    opacity={0.389}
    paintOrder="markers stroke fill"
  />
  <text
    id="gen4_loil-7"
    transform="matrix(.85105 0 0 .72731 .386 .517)"
    x={62.51355}
    y={75.282158}
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
    fontSize="4.0356px"
    letterSpacing={0}
    strokeWidth={0.22298}
    wordSpacing={0}
  >
    <tspan
      id="tspan5502-8"
      x={62.51355}
      y={75.282158}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.0356px"
      strokeWidth={0.22298}
    >
      {Motor.OperHours} H
    </tspan>
  </text>
  <text
    id="gen4_loil-7-9"
    transform="matrix(.85105 0 0 .72731 .386 .517)"
    x={62.51355}
    y={80.650856}
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
    fontSize="4.0356px"
    letterSpacing={0}
    strokeWidth={0.22298}
    wordSpacing={0}
  >
    <tspan
      id="tspan5502-8-4"
      x={62.51355}
      y={80.650856}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.0356px"
      strokeWidth={0.22298}
    >
      {Motor.LvFuel} %
    </tspan>
  </text>
  <text
    id="gen4_kvah-3"
    transform="matrix(.85105 0 0 .72731 .386 .517)"
    x={117.54137}
    y={75.28215}
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
    fontSize="4.0356px"
    letterSpacing={0}
    strokeWidth={0.22298}
    wordSpacing={0}
  >
    <tspan
      id="tspan2372-8-5"
      x={117.54137}
      y={75.28215}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.0356px"
      strokeWidth={0.22298}
    >
      {Alternador.Energy} KW/H
    </tspan>
    <tspan
      id="tspan2372-8-5-1"
      x={117.54137}
      y={80.650856}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.0356px"
      strokeWidth={0.22298}
    >
      {Alternador.FP}
    </tspan>
  </text>
</g>
)
}
