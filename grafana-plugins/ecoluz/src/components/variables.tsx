import React from 'react';

type Parametros ={
    Vprom: number;
    Iprom: number;
    Frec: number;
    Vab: number;
    Vbc: number;
    Vca: number;
    Ia: number;
    Ib: number;
    Ic: number;
    Unb_Vol: number;
    Unb_Curr: number;
    Pot_active: number;
    Pot_apparent: number;
    Energy: number;
};
type DatosGenerales = {
    Fase: string;
    Sistema: string;
    Marca: string;
    Modelo: string;
    Ubicacion: string;
};
type Estados = {
    Estado_equipo: string;
    Estado_box: string;
    Estado_boton: string;
};
type Alarmas = {
    Falla_A: string;
    Falla_B: string;
    Falla_C: string;
};
export interface DataEcoluz {
    Parametros: Parametros;
    DatosGenerales: DatosGenerales;
    Estados: Estados;
    Alarmas: Alarmas;
}

export const Variables = ({ Parametros, DatosGenerales, Estados, Alarmas}: DataEcoluz) => {
return (

<g id="layer2">
<path
  id="estado_eq"
  fillRule="evenodd"
  fill="url(#linearGradient4474)"
  strokeWidth={0.26219}
  d="M99.569 15.178H157.60399999999998V33.229H99.569z"
  className={Estados.Estado_box}
/>
<text
  id="volt_prom"
  transform="scale(1.0508 .95161)"
  x={22.302074}
  y={53.538074}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="sans-serif"
  fontSize="8.4667px"
  letterSpacing={0}
  strokeWidth={0.28918}
  wordSpacing={0}
>
  <tspan
    id="tspan5844"
    x={22.302074}
    y={53.538074}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="9.8778px"
    fontWeight={700}
    strokeWidth={0.28918}
  >
    {Parametros.Vprom}
  </tspan>
</text>
<text
  id="equipo"
  x={111.91434}
  y={27.49506}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="sans-serif"
  fontSize="9.71px"
  letterSpacing={0}
  strokeWidth={0.36412}
  wordSpacing={0}
>
  <tspan
    id="tspan6769"
    x={111.91434}
    y={27.49506}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="9.8778px"
    strokeWidth={0.36412}
  >
    {"ECOLUZ"}
  </tspan>
</text>
<text
  id="frec"
  transform="scale(1.0508 .95161)"
  x={204.22884}
  y={137.22377}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="sans-serif"
  fontSize="12.491px"
  letterSpacing={0}
  strokeWidth={0.28918}
  wordSpacing={0}
>
  <tspan
    id="tspan5927"
    x={204.22884}
    y={137.22377}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="12.491px"
    fontWeight={700}
    strokeWidth={0.28918}
  >
    {Parametros.Frec}
  </tspan>
</text>
<text
  id="curr_prom"
  transform="scale(1.0508 .95161)"
  x={202.40147}
  y={53.571712}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="sans-serif"
  fontSize="5.8954px"
  letterSpacing={0}
  strokeWidth={0.28918}
  wordSpacing={0}
>
  <tspan
    id="tspan1960-4"
    x={202.40147}
    y={53.571712}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="9.8778px"
    fontWeight={700}
    strokeWidth={0.28918}
  >
    {Parametros.Iprom}
  </tspan>
</text>
<g id="st2" transform="translate(-1.433 3.249)" fill="#0f0">
  <path
    id="path15781"
    d="M213.68 169.15a5.861 5.861 0 00-4.066 1.662 5.7 5.7 0 00-1.684 4.01c0 1.484.62 2.96 1.684 4.01a5.86 5.86 0 004.066 1.662 5.861 5.861 0 004.066-1.662 5.7 5.7 0 001.684-4.01 5.7 5.7 0 00-1.684-4.01 5.86 5.86 0 00-4.066-1.662zm0 .835a5.03 5.03 0 013.475 1.42c.904.891 1.435 2.158 1.435 3.417s-.531 2.525-1.435 3.417a5.03 5.03 0 01-3.475 1.42 5.03 5.03 0 01-3.475-1.42c-.904-.892-1.435-2.159-1.435-3.417s.531-2.526 1.435-3.418a5.03 5.03 0 013.475-1.42z"
    className={Estados.Estado_boton}
  />
  <path
    id="path2489"
    transform="translate(123.93 125.48) scale(.14885)"
    d="M601.87 320.96c.063-1.312 2.784-1.358 2.69.07-.033.121 0 9.401 0 9.401-.347 1.078-2.153 1.292-2.713 0z"
    filter="url(#filter2703)"
    className={Estados.Estado_boton}
  />
  <path
    id="path2649"
    transform="translate(123.93 125.48) scale(.14885)"
    d="M597.57 325.63c1.697.335 1.59 1.335 1.404 2.364-1.343 1.49-2.998 2.762-2.868 5.287.434 2.218.972 4.389 3.417 5.673 2.376 1.244 4.814 1.155 6.562.177 1.888-1.079 3.769-3.085 3.728-5.85-.088-2.4-1.275-4.226-3.313-5.607.084-.983-.099-2.122 2.022-1.917 2.273 1.96 4.04 4.21 3.95 7.536 0 3.557-1.8 6.427-5.653 8.51-2.77 1.344-5.445.865-8.09-.167-2.57-1.48-5.569-3.356-5.217-9.529.748-3.306 2.154-5.363 4.058-6.477z"
    filter="url(#filter2663)"
    className={Estados.Estado_boton}
  />
  
</g>
<text
  id="st"
  x={234.48621}
  y={178.8298}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#000"
  fontFamily="sans-serif"
  fontSize="3.5278px"
  letterSpacing={0}
  strokeWidth={0.26458}
  wordSpacing={0}
>
  <tspan
    id="tspan5848"
    x={220.58621}
    y={179.5298}
    dy={0}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="7.0556px"
    strokeWidth={0.26458}
  >
    {Estados.Estado_equipo}
  </tspan>
</text>
<text
  id="fase"
  transform="scale(.9853 1.0149)"
  x={329.26157}
  y={44.247406}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#000"
  fontFamily="Franklin Gothic Medium"
  fontSize="6.2741px"
  letterSpacing={0}
  strokeWidth={0.47056}
  wordSpacing={0}
>
  <tspan
    id="tspan3614"
    x={329.26157}
    y={44.247406}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="5.6443px"
    strokeWidth={0.47056}
  >
    {"A"}
  </tspan>
</text>
<text
  id="sistema"
  transform="scale(.9853 1.0149)"
  x={329.26157}
  y={52.248127}
  style={{
    fontVariantCaps: "normal",
    fontVariantEastAsian: "normal",
    fontVariantLigatures: "normal",
    fontVariantNumeric: "normal",
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="Franklin Gothic Medium"
  fontSize="6.2741px"
  letterSpacing={0}
  strokeWidth={0.47056}
  wordSpacing={0}
>
  <tspan id="tspan1343" x={329.26157} y={52.248127}>
    {"1&2"}
  </tspan>
</text>
<text
  id="marca"
  transform="scale(.9853 1.0149)"
  x={329.26157}
  y={60.381561}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#000"
  fontFamily="Franklin Gothic Medium"
  fontSize="6.2741px"
  letterSpacing={0}
  strokeWidth={0.47056}
  wordSpacing={0}
>
  <tspan
    id="tspan3618-1"
    x={329.26157}
    y={60.381561}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    strokeWidth={0.47056}
  >
    {"SCHNEIDER ELECTRIC"}
  </tspan>
</text>
<text
  id="modelo"
  transform="scale(.9853 1.0149)"
  x={329.26157}
  y={68.354424}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#000"
  fontFamily="Franklin Gothic Medium"
  fontSize="6.2741px"
  letterSpacing={0}
  strokeWidth={0.47056}
  wordSpacing={0}
>
  <tspan
    id="tspan3618-6"
    x={329.26157}
    y={68.354424}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    strokeWidth={0.47056}
  >
    {"ION8650"}
  </tspan>
</text>
<text
  id="ubicacion"
  transform="scale(.9853 1.0149)"
  x={329.26157}
  y={76.095963}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#000"
  fontFamily="Franklin Gothic Medium"
  fontSize="6.2741px"
  letterSpacing={0}
  strokeWidth={0.47056}
  wordSpacing={0}
>
  <tspan
    id="tspan3614-8"
    x={329.26157}
    y={76.095963}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="5.6443px"
    strokeWidth={0.47056}
  >
    {"EXTERIORES C.M.T."}
  </tspan>
</text>
<ellipse
  id="alm_FALLA_A"
  //id="alam_pres"
  cx={360.29}
  cy={121.54}
  rx={2.5726}
  ry={2.4137}
  fillRule="evenodd"
  fill="#1bea77"
  opacity={0.88}
  className={Alarmas.Falla_A}
  paintOrder="markers stroke fill"
/>
<ellipse
  id="alm_FALLA_C"
  //id="alm_bypass"
  cx={360.29}
  cy={137.89}
  rx={2.5726}
  ry={2.4137}
  fillRule="evenodd"
  fill="#1bea77"
  opacity={0.88}
  className={Alarmas.Falla_C}
  paintOrder="markers stroke fill"
/>
<ellipse
  id="alm_FALLA_B"
  //id="alm_inv"
  cx={360.29}
  cy={129.72}
  rx={2.5726}
  ry={2.4137}
  fillRule="evenodd"
  fill="#1bea77"
  opacity={0.88}
  className={Alarmas.Falla_B}
  paintOrder="markers stroke fill"
/>
<ellipse
  /*id="alm_rect"
  cx={360.29}
  cy={146.07}
  rx={2.5726}
  ry={2.4137}
  fillRule="evenodd"
  fill="#1bea77"
  opacity={0.88}
  paintOrder="markers stroke fill"*/
/>
<text
  id="CURR_B"
  transform="scale(.8721 1.1467)"
  x={542.88867}
  y={91.483681}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="Franklin Gothic Medium"
  fontSize="5.3098px"
  letterSpacing={0}
  strokeWidth={0.26458}
  wordSpacing={0}
>
  <tspan
    id="tspan15409"
    x={542.88867}
    y={91.483681}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="5.3098px"
    strokeWidth={0.26458}
  >
    {Parametros.Ic} A
  </tspan>
</text>
<text
  id="DESB._CURR"
  transform="scale(.8721 1.1467)"
  x={542.87311}
  y={105.812}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="Franklin Gothic Medium"
  fontSize="5.3098px"
  letterSpacing={0}
  strokeWidth={0.26458}
  wordSpacing={0}
>
  <tspan
    id="tspan6736"
    x={542.87311}
    y={105.812}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="5.3098px"
    strokeWidth={0.26458}
  >
    {Parametros.Unb_Curr} A
  </tspan>
</text>
<text
  id="CURR_C"
  transform="scale(.8721 1.1467)"
  x={542.9353}
  y={98.652382}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="Franklin Gothic Medium"
  fontSize="5.3098px"
  letterSpacing={0}
  strokeWidth={0.26458}
  wordSpacing={0}
>
  <tspan
    id="tspan6736-3"
    x={542.9353}
    y={98.652382}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="5.3098px"
    strokeWidth={0.26458}
  >
    {Parametros.Ic} A
  </tspan>
</text>
<text
  id="CURR_A"
  transform="scale(.8721 1.1467)"
  x={542.88867}
  y={84.314995}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="Franklin Gothic Medium"
  fontSize="5.3098px"
  letterSpacing={0}
  strokeWidth={0.26458}
  wordSpacing={0}
>
  <tspan
    id="tspan15409-5"
    x={542.88867}
    y={84.314995}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="5.3098px"
    strokeWidth={0.26458}
  >
    {Parametros.Ia} A
  </tspan>
</text>
<text
  id="DESB._VOLT"
  transform="scale(.8721 1.1467)"
  x={542.88867}
  y={77.173523}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="Franklin Gothic Medium"
  fontSize="5.3098px"
  letterSpacing={0}
  strokeWidth={0.26458}
  wordSpacing={0}
>
  <tspan
    id="tspan15409-5-4"
    x={542.88867}
    y={77.173523}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="5.3098px"
    strokeWidth={0.26458}
  >
    {Parametros.Unb_Vol} V
  </tspan>
</text>
<text
  id="VAB"
  transform="scale(.8721 1.1467)"
  x={542.88867}
  y={55.667446}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="Franklin Gothic Medium"
  fontSize="5.3098px"
  letterSpacing={0}
  strokeWidth={0.26458}
  wordSpacing={0}
>
  <tspan
    id="tspan15409-5-4-2"
    x={542.88867}
    y={55.667446}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="5.3098px"
    strokeWidth={0.26458}
  >
    {Parametros.Vab} KV
  </tspan>
</text>
<text
  id="VBC"
  transform="scale(.8721 1.1467)"
  x={542.87311}
  y={62.799839}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="Franklin Gothic Medium"
  fontSize="5.3098px"
  letterSpacing={0}
  strokeWidth={0.26458}
  wordSpacing={0}
>
  <tspan
    id="tspan1765"
    x={542.87311}
    y={62.799839}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="5.3098px"
    strokeWidth={0.26458}
  >
    {Parametros.Vbc} KV
  </tspan>
</text>
<text
  id="VCA"
  transform="scale(.8721 1.1467)"
  x={542.87311}
  y={69.968536}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="Franklin Gothic Medium"
  fontSize="5.3098px"
  letterSpacing={0}
  strokeWidth={0.26458}
  wordSpacing={0}
>
  <tspan
    id="tspan1765-8"
    x={542.87311}
    y={69.968536}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="5.3098px"
    strokeWidth={0.26458}
  >
    {Parametros.Vca} KV
  </tspan>
</text>
<ellipse
  id="st_trans-12-5-4-9-3-3"
  transform="matrix(.39912 0 0 .27837 344.52 79.738)"
  cx={39.31}
  cy={175.59}
  rx={4.2297}
  ry={4.0337}
  fill="#fff"
  filter="url(#filter2091-9-8-9)"
  opacity={0.29}
  paintOrder="markers stroke fill"
/>
<ellipse
  id="st_trans-12-5-4-9-3-9"
  transform="matrix(.39912 0 0 .27837 344.52 87.918)"
  cx={39.31}
  cy={175.59}
  rx={4.2297}
  ry={4.0337}
  fill="#fff"
  filter="url(#filter2091-9-8-2)"
  opacity={0.29}
  paintOrder="markers stroke fill"
/>

<ellipse
  /*id="st_trans-12-5-4-9-3-2"
  transform="matrix(.39912 0 0 .27837 344.52 96.097)"
  cx={39.31}
  cy={175.59}
  rx={4.2297}
  ry={4.0337}
  fill="#fff"
  filter="url(#filter2091-9-8-7)"
  opacity={0.29}
  paintOrder="markers stroke fill"*/
/>

<ellipse
  id="st_trans-12-5-4-9-3"
  transform="matrix(.39912 0 0 .27837 344.52 71.559)"
  cx={39.31}
  cy={175.59}
  rx={4.2297}
  ry={4.0337}
  fill="#fff"
  filter="url(#filter2091-9-8)"
  opacity={0.29}
  paintOrder="markers stroke fill"
/>
<ellipse
  /*id="alm_rect-4"
  cx={360.29}
  cy={154.25}
  rx={2.5726}
  ry={2.4137}
  fillRule="evenodd"
  fill="#1bea77"
  opacity={0.88}
  paintOrder="markers stroke fill"*/
/>
<ellipse
  /*id="st_trans-12-5-4-9-3-2-5"
  transform="matrix(.39912 0 0 .27837 344.52 104.28)"
  cx={39.31}
  cy={175.59}
  rx={4.2297}
  ry={4.0337}
  fill="#fff"
  filter="url(#filter2091-9-8-7-0)"
  opacity={0.29}
  paintOrder="markers stroke fill"*/
/>
<text
  id="POTKVA"
  transform="matrix(.83135 0 0 1.0931 -9.43 4.252)"
  x={580.82043}
  y={122.14787}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="Franklin Gothic Medium"
  fontSize="5.57px"
  letterSpacing={0}
  strokeWidth={0.27754}
  wordSpacing={0}
>
  <tspan
    id="tspan6736-4"
    x={580.82043}
    y={122.14787}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="5.57px"
    strokeWidth={0.27754}
  >
    {Parametros.Pot_apparent} KVA
  </tspan>
</text>
<text
  id="ENERGIAKWH"
  transform="matrix(.83135 0 0 1.0931 -9.43 4.252)"
  x={580.82043}
  y={129.66786}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="Franklin Gothic Medium"
  fontSize="5.57px"
  letterSpacing={0}
  strokeWidth={0.27754}
  wordSpacing={0}
>
  <tspan
    id="tspan6736-9"
    x={580.82043}
    y={129.66786}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="5.57px"
    strokeWidth={0.27754}
  >
    {Parametros.Energy}
  </tspan>
</text>
<text
  id="POTKW"
  transform="matrix(.83135 0 0 1.0931 -9.43 4.252)"
  x={580.82043}
  y={114.62785}
  style={{
    lineHeight: 1.25
  }}
  xmlSpace="preserve"
  fill="#fff"
  fontFamily="Franklin Gothic Medium"
  fontSize="5.57px"
  letterSpacing={0}
  strokeWidth={0.27754}
  wordSpacing={0}
>
  <tspan
    id="tspan6736-7"
    x={580.82043}
    y={114.62785}
    fill="#fff"
    fontFamily="Franklin Gothic Medium"
    fontSize="5.57px"
    strokeWidth={0.27754}
  >
    {Parametros.Pot_active} KW
  </tspan>
</text>
</g>
)
}