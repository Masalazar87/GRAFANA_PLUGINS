import React from 'react';

type DatosGenerales = {
    Nombre: string;
    Marca: string;
};

type Parametros = {
    Fuente1: string;
    Fuente2: string;
    TotalTransfF1: number;
    TotalTransfF2: number;
    TotalFallas: number;
};

type Indicacdores = {
    PresenciaF1: string;
    PresenciaF2: string;
    ActivaF1: string;
    ActivaF2: string;
    ModbusST: string;
    Estado: string;
};

export interface DataGrupalats {
    DatosGenerales: DatosGenerales;
    Parametros: Parametros;
    Indicadores: Indicacdores;
};

export const Variables = ({DatosGenerales, Parametros, Indicadores}: DataGrupalats) =>{
return (
<g id="layer4">
<text
  id="nom"
  transform="scale(.93898 1.065)"
  x={26.905087}
  y={6.0873375}
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
  fontSize="6.0685px"
  letterSpacing={0}
  opacity={0.899}
  strokeWidth={0.21867}
  wordSpacing={0}
>
  <tspan
    id="tspan17708-4-7-9"
    x={26.905087}
    y={6.0873375}
    dy="0 0 0 0 0 0"
    style={{
      fontFeatureSettings: "normal",
      fontVariantCaps: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal"
    }}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="6.0685px"
    strokeWidth={0.21867}
  >
    {DatosGenerales.Nombre}
  </tspan>
</text>
<ellipse
  id="ats3b_f1_avail"
  cx={31.698}
  cy={34.431}
  rx={2.5395}
  ry={2.3402}
  fill="#17be66"
  className = {Indicadores.PresenciaF1}
/>
<ellipse
  id="ats3b_f1_pos"
  cx={51.934}
  cy={34.425}
  rx={2.5395}
  ry={2.3402}
  fill="#17be66"
  className = {Indicadores.ActivaF1}
/>
<ellipse
  id="ats3b_f2_pos"
  cx={90.715}
  cy={34.655}
  rx={2.5395}
  ry={2.3402}
  fill="#d40000"
  className = {Indicadores.ActivaF2}
/>
<ellipse
  id="ats3b_f2_avail"
  cx={111.9}
  cy={34.655}
  rx={2.5395}
  ry={2.3402}
  fill="#d40000"
  className = {Indicadores.PresenciaF2}
/>
<ellipse
  id="led_sistema1-2-24-56-5"
  transform="matrix(.50468 0 0 .26418 -16.14 18.517)"
  cx={94.747}
  cy={55.23}
  rx={3.6533}
  ry={3.7912}
  fillOpacity={0.99608}
  fill="#fff"
  filter="url(#filter1181-9-6-9)"
  opacity={0.65}
/>
<ellipse
  id="led_sistema1-2-9-1-5-5"
  transform="matrix(.50468 0 0 .26418 4.204 18.548)"
  cx={94.747}
  cy={55.23}
  rx={3.6533}
  ry={3.7912}
  fillOpacity={0.99608}
  fill="#fff"
  filter="url(#filter1181-8-5-1-95)"
  opacity={0.65}
  strokeWidth={0.78524}
  stroke="#3fe4e4"
/>
<ellipse
  id="led_sistema1-2-9-5-5-7-3"
  transform="matrix(.50468 0 0 .26418 64.027 18.754)"
  cx={94.747}
  cy={55.23}
  rx={3.6533}
  ry={3.7912}
  fillOpacity={0.99608}
  fill="#fff"
  filter="url(#filter1181-8-2-4-1-24)"
  opacity={0.65}
/>
<ellipse
  id="led_sistema1-2-9-5-5-7-4-9"
  transform="matrix(.50468 0 0 .26418 42.862 18.832)"
  cx={94.747}
  cy={55.23}
  rx={3.6533}
  ry={3.7912}
  fillOpacity={0.99608}
  fill="#fff"
  filter="url(#filter1181-8-2-4-1-2-6)"
  opacity={0.65}
/>
<ellipse
  id="ats3b_modbus_st"
  cx={19.96}
  cy={18.746}
  rx={3.902}
  ry={3.5366}
  fillRule="evenodd"
  fill="#1ad371"
  className = {Indicadores.ModbusST}
  opacity={0.899}
  paintOrder="markers stroke fill"
/>
<ellipse
  id="path2610-3-6-9-2"
  transform="matrix(1.2686 0 0 1.0731 -79.247 -15.753)"
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
  x={59.635674}
  y={21.012634}
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
  fontSize="5.8311px"
  letterSpacing={0}
  opacity={0.899}
  strokeOpacity={0.53395}
  strokeWidth={0.82647}
  wordSpacing={0}
>
  <tspan
    id="tspan16382-0-9-0-0"
    x={59.635674}
    y={21.012634}
    style={{
      fontFeatureSettings: "normal",
      fontVariantCaps: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal"
    }}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="5.8311px"
    strokeOpacity={0.53395}
    strokeWidth={0.82647}
  >
    {DatosGenerales.Marca}
  </tspan>
</text>
<text
  id="ats3b_pres_f1"
  transform="scale(1.1453 .87316)"
  x={87.154892}
  y={69.898155}
  style={{
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
  strokeWidth={0.21867}
  wordSpacing={0}
>
  <tspan
    id="tspan5495-3-4-2-8"
    x={87.154892}
    y={69.898155}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal"
    }}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="4.5861px"
    strokeWidth={0.21867}
  >
    {Parametros.Fuente1}
  </tspan>
</text>
<text
  id="ats3b_pres_f2"
  transform="scale(1.1453 .87316)"
  x={87.154892}
  y={75.624367}
  style={{
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
  strokeWidth={0.21867}
  wordSpacing={0}
>
  <tspan
    id="tspan5495-3-4-2-8-8"
    x={87.154892}
    y={75.624367}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal"
    }}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="4.5861px"
    strokeWidth={0.21867}
  >
    {Parametros.Fuente2}
  </tspan>
</text>
<text
  id="ats3b_tot_trans_f1"
  transform="scale(1.1453 .87316)"
  x={87.150757}
  y={81.350578}
  style={{
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
  strokeWidth={0.21867}
  wordSpacing={0}
>
  <tspan
    id="tspan3742-9-9-87-6-7-4-6"
    x={87.150757}
    y={81.350578}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal"
    }}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="4.5861px"
    strokeWidth={0.21867}
  >
    {Parametros.TotalTransfF1}
  </tspan>
</text>
<text
  id="ats3b_tot_trans_f2"
  transform="scale(1.1453 .87316)"
  x={87.150757}
  y={87.076782}
  style={{
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
  strokeWidth={0.21867}
  wordSpacing={0}
>
  <tspan
    id="tspan5495-3-4-2-8-8-1-7"
    x={87.150757}
    y={87.076782}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal"
    }}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="4.5861px"
    strokeWidth={0.21867}
  >
    {Parametros.TotalTransfF2}
  </tspan>
</text>
<text
  id="ats3b_tot_fall"
  transform="scale(1.1453 .87316)"
  x={87.026733}
  y={92.817467}
  style={{
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
  strokeWidth={0.21867}
  wordSpacing={0}
>
  <tspan
    id="tspan5495-3-4-2-8-8-1-7-8"
    x={87.026733}
    y={92.817467}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal"
    }}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="4.5861px"
    strokeWidth={0.21867}
  >
    {Parametros.TotalFallas}
  </tspan>
</text>
<ellipse
    id="ats3b_modbus_st-1"
    cx={34.58}
    cy={18.746}
    rx={3.902}
    ry={3.5366}
    fillRule="evenodd"
    fill="#1ad371"
    className = {Indicadores.Estado}
    opacity={0.899}
    paintOrder="markers stroke fill"
    />
    <ellipse
    id="path2610-3-6-9-2-1"
    transform="matrix(1.2686 0 0 1.0731 -64.627 -15.753)"
    cx={78.266}
    cy={31.379}
    rx={2.3671}
    ry={1.9181}
    fillRule="evenodd"
    fill="#fff"
    filter="url(#filter3102-5-0-6)"
    opacity={0.35}
    paintOrder="markers stroke fill"
    />
</g>
)
}
