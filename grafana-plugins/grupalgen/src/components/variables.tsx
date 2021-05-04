import React from 'react';

type DatosGenerales = {
    Nombre: string;
    Marca: string;
};

type Motor = {
    Temp: number;
    PresOil: number;
    Vbatt: number;
    LvOil: number;
};

type Alternador = {
    VLL: number;
    Iprom: number;
    Pot: number;
    Energy: number;
};

type Indicadores ={
    Estado: string;
    Alarma: string;
    Mant:   string;
    Stop: string;
    Manual: string;
    Auto: string;
    Generacion: string;
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
<text
  id="gen4_poil"
  transform="scale(1.0817 .92443)"
  x={47.91304}
  y={48.307976}
  style={{
    fontVariantCaps: "normal",
    fontVariantEastAsian: "normal",
    fontVariantLigatures: "normal",
    fontVariantNumeric: "normal",
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="Franklin Gothic Medium"
  fontSize="4.4108px"
  letterSpacing={0}
  strokeWidth={0.17543}
  wordSpacing={0}
>
  <tspan id="tspan5498" x={47.91304} y={48.307976}>
    {Motor.PresOil}
  </tspan>
</text>
<text
  id="gen4_temp"
  transform="scale(1.0817 .92443)"
  x={47.91304}
  y={42.606998}
  style={{
    fontVariantCaps: "normal",
    fontVariantEastAsian: "normal",
    fontVariantLigatures: "normal",
    fontVariantNumeric: "normal",
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="Franklin Gothic Medium"
  fontSize="4.4108px"
  letterSpacing={0}
  strokeWidth={0.17543}
  wordSpacing={0}
>
  <tspan id="tspan5496" x={47.91304} y={42.606998}>
    {Motor.Temp}
  </tspan>
</text>
<text
  id="gen4_vbat"
  transform="scale(1.0817 .92443)"
  x={47.91304}
  y={54.008957}
  style={{
    fontVariantCaps: "normal",
    fontVariantEastAsian: "normal",
    fontVariantLigatures: "normal",
    fontVariantNumeric: "normal",
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="Franklin Gothic Medium"
  fontSize="4.4108px"
  letterSpacing={0}
  strokeWidth={0.17543}
  wordSpacing={0}
>
  <tspan id="tspan5500" x={47.91304} y={54.008957}>
    {Motor.Vbatt}
  </tspan>
</text>
<text
  id="gen4_loil"
  transform="scale(1.0817 .92443)"
  x={47.91304}
  y={59.709934}
  style={{
    fontVariantCaps: "normal",
    fontVariantEastAsian: "normal",
    fontVariantLigatures: "normal",
    fontVariantNumeric: "normal",
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="Franklin Gothic Medium"
  fontSize="4.4108px"
  letterSpacing={0}
  strokeWidth={0.17543}
  wordSpacing={0}
>
  <tspan id="tspan5502" x={47.91304} y={59.709934}>
    {Motor.LvOil}
  </tspan>
</text>
<text
  id="gen4_vol"
  transform="scale(1.0817 .92443)"
  x={93.529434}
  y={42.759216}
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
  fontSize="4.6352px"
  letterSpacing={0}
  strokeWidth={0.17543}
  wordSpacing={0}
>
  <tspan
    id="tspan2356-4"
    x={93.529434}
    y={42.759216}
    style={{
      fontFeatureSettings: "normal",
      fontVariantCaps: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal"
    }}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="4.6352px"
    strokeWidth={0.17543}
  >
    {Alternador.VLL}
  </tspan>
</text>
<text
  id="gen4_curr"
  transform="scale(1.0817 .92443)"
  x={93.529434}
  y={48.460037}
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
  fontSize="4.6352px"
  letterSpacing={0}
  strokeWidth={0.17543}
  wordSpacing={0}
>
  <tspan
    id="tspan2364-7"
    x={93.529434}
    y={48.460037}
    style={{
      fontFeatureSettings: "normal",
      fontVariantCaps: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal"
    }}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="4.6352px"
    strokeWidth={0.17543}
  >
    {Alternador.Iprom}
  </tspan>
</text>
<text
  id="gen4_pot"
  transform="scale(1.0817 .92443)"
  x={93.529434}
  y={54.160862}
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
  fontSize="4.6352px"
  letterSpacing={0}
  strokeWidth={0.17543}
  wordSpacing={0}
>
  <tspan
    id="tspan2368-3"
    x={93.529434}
    y={54.160862}
    style={{
      fontFeatureSettings: "normal",
      fontVariantCaps: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal"
    }}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="4.6352px"
    strokeWidth={0.17543}
  >
    {Alternador.Pot}
  </tspan>
</text>
<text
  id="gen4_kvah"
  transform="scale(1.0817 .92443)"
  x={93.529434}
  y={59.861683}
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
  fontSize="4.6352px"
  letterSpacing={0}
  strokeWidth={0.17543}
  wordSpacing={0}
>
  <tspan
    id="tspan2372-8"
    x={93.529434}
    y={59.861683}
    style={{
      fontFeatureSettings: "normal",
      fontVariantCaps: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal"
    }}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="4.6352px"
    strokeWidth={0.17543}
  >
    {Alternador.Energy}
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
  className = {Indicadores.Estado}
  opacity={0.899}
  paintOrder="markers stroke fill"
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
  className = {Indicadores.Alarma}
  opacity={0.899}
  paintOrder="markers stroke fill"
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
    {DatosGenerales.Marca}
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
    className = {Indicadores.Generacion}
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
  className = {Indicadores.Auto}
/>
<ellipse
  id="led2"
  cx={51.898}
  cy={76.697}
  rx={1.6433}
  ry={1.4051}
  fill="#ff2a2a"
  className = {Indicadores.Manual}
/>
<ellipse
  id="led1"
  cx={31.327}
  cy={76.697}
  rx={1.6433}
  ry={1.4051}
  fill="#ff2a2a"
  className = {Indicadores.Stop}
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
  className = {Indicadores.Mant}
  opacity={0.899}
  paintOrder="markers stroke fill"
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
  <tspan id="tspan5269" x={29.516417} y={7.6043324}>
    {DatosGenerales.Nombre}
  </tspan>
</text>
</g>
)
}
