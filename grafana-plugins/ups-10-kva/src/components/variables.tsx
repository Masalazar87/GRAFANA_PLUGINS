import React from 'react';

type DatosGenerales = {
  Nombre: string;
  Fase: string;
  Sistema: string;
  Marca: string;
  Modelo: string;
  Ubicacion: string;
};

type Parametros ={
  VBateria: number;
  MinEstimados: number;
  CargaEstimada: number;
  InVolt: number;
  OutVolt: number;
  CorrienteOut: number;
  PotenciaOut: number;
  PorcenCarga: number;
};

type Alarmas ={
  Presente: string;
  VEntrada: string;
  VSalida: string;
  Bypass: string;

};

type Principal ={
  Estado: string;
  Estado_class: string;
  Botón: string;
  InVolt: number;
  OutVolt: number;
  VBateria: number;
};

export interface DataUps {
DatosGenerales: DatosGenerales;
Parametros: Parametros; 
Alarmas: Alarmas;
Principal: Principal;
}

//export interface DataUps {
//  Data: Ups
//}
export const Variables = ({DatosGenerales, Parametros, Alarmas, Principal }: DataUps) => {
  return (
    <g id="layer2">
    <path
      id="estado_eq"
      fillRule="evenodd"
      fill="url(#linearGradient4474)"
      className = {Principal.Estado_class}
      strokeWidth={0.26219}
      d="M99.569 15.178H157.60399999999998V33.229H99.569z"
    />
    <text
      id="volt"
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
        {Principal.InVolt} V
      </tspan>
    </text>
    <text
      id="nom_on"
      x={108.73929}
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
        x={102.73929}
        y={27.49506}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="8.8778px"
        strokeWidth={0.36412}
      >
        {DatosGenerales.Nombre}
      </tspan>
    </text>
    <text
      id="vol_batt"
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
        x={207.22884}
        y={137.22377}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="9.491px"
        fontWeight={700}
        strokeWidth={0.28918}
      >
        {Principal.VBateria} V
      </tspan>
    </text>
    <text
      id="out_volt"
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
        {Principal.OutVolt} V
      </tspan>
    </text>
    <g id="st2" transform="translate(-1.433 3.249)" fill="#0f0">
    <path
          id="path15781"
          d="M213.68 169.15a5.861 5.861 0 00-4.066 1.662 5.7 5.7 0 00-1.684 4.01c0 1.484.62 2.96 1.684 4.01a5.86 5.86 0 004.066 1.662 5.861 5.861 0 004.066-1.662 5.7 5.7 0 001.684-4.01 5.7 5.7 0 00-1.684-4.01 5.86 5.86 0 00-4.066-1.662zm0 .835a5.03 5.03 0 013.475 1.42c.904.891 1.435 2.158 1.435 3.417s-.531 2.525-1.435 3.417a5.03 5.03 0 01-3.475 1.42 5.03 5.03 0 01-3.475-1.42c-.904-.892-1.435-2.159-1.435-3.417s.531-2.526 1.435-3.418a5.03 5.03 0 013.475-1.42z"
          className = {Principal.Estado_class}
        />
        <path
          id="path2489"
          transform="translate(123.93 125.48) scale(.14885)"
          d="M601.87 320.96c.063-1.312 2.784-1.358 2.69.07-.033.121 0 9.401 0 9.401-.347 1.078-2.153 1.292-2.713 0z"
          filter="url(#filter2703)"
          className = {Principal.Estado_class}
        />
        <path
          id="path2649"
          transform="translate(123.93 125.48) scale(.14885)"
          d="M597.57 325.63c1.697.335 1.59 1.335 1.404 2.364-1.343 1.49-2.998 2.762-2.868 5.287.434 2.218.972 4.389 3.417 5.673 2.376 1.244 4.814 1.155 6.562.177 1.888-1.079 3.769-3.085 3.728-5.85-.088-2.4-1.275-4.226-3.313-5.607.084-.983-.099-2.122 2.022-1.917 2.273 1.96 4.04 4.21 3.95 7.536 0 3.557-1.8 6.427-5.653 8.51-2.77 1.344-5.445.865-8.09-.167-2.57-1.48-5.569-3.356-5.217-9.529.748-3.306 2.154-5.363 4.058-6.477z"
          filter="url(#filter2663)"
          className = {Principal.Estado_class}
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
        x={222.72766}
        y={179.35898}
        dy={0}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="6.0556px"
        strokeWidth={0.26458}
      >
        {Principal.Estado}
      </tspan>
    </text>
    <text
      id="fase"
      transform="scale(.98529 1.0149)"
      x={329.26636}
      y={42.683838}
      style={{
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.2742px"
      letterSpacing={0}
      strokeWidth={0.47057}
      wordSpacing={0}
    >
      <tspan
        id="tspan3614"
        x={329.26636}
        y={42.683838}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.47057}
      >
        {"A"}
      </tspan>
    </text>
    <text
      id="sistema"
      transform="scale(.98529 1.0149)"
      x={329.26636}
      y={50.872742}
      style={{
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.2742px"
      letterSpacing={0}
      strokeWidth={0.47057}
      wordSpacing={0}
    >
      <tspan
        id="tspan3614-0"
        x={329.26636}
        y={50.872742}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.47057}
      >
        {"1&2"}
      </tspan>
    </text>
    <text
      id="marca"
      transform="scale(.98529 1.0149)"
      x={329.26636}
      y={59.336174}
      style={{
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.2742px"
      letterSpacing={0}
      strokeWidth={0.47057}
      wordSpacing={0}
    >
      <tspan
        id="tspan3618-1"
        x={329.26636}
        y={59.336174}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        strokeWidth={0.47057}
      >
        {"GENERAL ELECTRIC"}
      </tspan>
    </text>
    <text
      id="modelo"
      transform="scale(.98529 1.0149)"
      x={329.26636}
      y={67.46769}
      style={{
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.2742px"
      letterSpacing={0}
      strokeWidth={0.47057}
      wordSpacing={0}
    >
      <tspan
        id="tspan3618-6"
        x={329.26636}
        y={67.46769}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        strokeWidth={0.47057}
      >
        {"LP 10-11U"}
      </tspan>
    </text>
    <text
      id="ubicacion"
      transform="scale(.98529 1.0149)"
      x={329.26636}
      y={76.097076}
      style={{
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.2742px"
      letterSpacing={0}
      strokeWidth={0.47057}
      wordSpacing={0}
    >
      <tspan
        id="tspan3614-8"
        x={329.26636}
        y={76.097076}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.47057}
      >
        {"CUARTOS REC. SIST. 1&2"}
      </tspan>
    </text>
    <ellipse
      id="alam_pres"
      cx={365.06}
      cy={131.59}
      rx={2.5726}
      ry={2.4137}
      fillRule="evenodd"
      fill="#1bea77"
      className={Alarmas.Presente}
      opacity={0.88}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="alm_bypass"
      cx={365.06}
      cy={146.84}
      rx={2.5726}
      ry={2.4137}
      fillRule="evenodd"
      fill="#1bea77"
      className={Alarmas.Bypass}
      opacity={0.88}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="alm_inv"
      cx={365.06}
      cy={139.48}
      rx={2.5726}
      ry={2.4137}
      fillRule="evenodd"
      fill="#1bea77"
      className={Alarmas.VEntrada}
      opacity={0.88}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="alm_rect"
      cx={365.06}
      cy={154.73}
      rx={2.5726}
      ry={2.4137}
      fillRule="evenodd"
      fill="#1bea77"
      className={Alarmas.VSalida}
      opacity={0.88}
      paintOrder="markers stroke fill"
    />
    <text
      id="out_cur"
      transform="scale(.82041 1.2189)"
      x={570.64343}
      y={95.204918}
      style={{
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.6444px"
      letterSpacing={0}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan15409"
        x={570.64343}
        y={95.204918}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.CorrienteOut} A
      </tspan> 
    </text>
    <text
      id="load"
      transform="scale(.82041 1.2189)"
      x={570.62683}
      y={110.42844}
      style={{
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.6444px"
      letterSpacing={0}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan6736"
        x={570.62683}
        y={110.42844}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.PorcenCarga} %
      </tspan>
    </text>
    <text
      id="out_pow"
      transform="scale(.82041 1.2189)"
      x={570.69299}
      y={102.8215}
      style={{
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.6444px"
      letterSpacing={0}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan6736-3"
        x={570.69299}
        y={102.8215}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.PotenciaOut} KW
      </tspan>
    </text>
    <text
      id="volt_max"
      transform="scale(.82041 1.2189)"
      x={570.64343}
      y={87.588341}
      style={{
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.6444px"
      letterSpacing={0}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan15409-5"
        x={570.64343}
        y={87.588341}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.OutVolt} VAC
      </tspan>
    </text>
    <text
      id="volt_min"
      transform="scale(.82041 1.2189)"
      x={570.64343}
      y={80.000694}
      style={{
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.6444px"
      letterSpacing={0}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan15409-5-4"
        x={570.64343}
        y={80.000694}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.InVolt} VAC
      </tspan>
    </text>
    <text
      id="batt_volt"
      transform="scale(.82041 1.2189)"
      x={570.64343}
      y={57.150955}
      style={{
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.6444px"
      letterSpacing={0}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan15409-5-4-2"
        x={570.64343}
        y={57.150955}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.VBateria} VDC
      </tspan>
    </text>
    <text
      id="min"
      transform="scale(.82041 1.2189)"
      x={570.62683}
      y={64.728951}
      style={{
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.6444px"
      letterSpacing={0}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan1765"
        x={570.62683}
        y={64.728951}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.MinEstimados} min
      </tspan>
    </text>
    <text
      id="carga"
      transform="scale(.82041 1.2189)"
      x={570.62683}
      y={72.345535}
      style={{
        lineHeight: 1.25
      }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.6444px"
      letterSpacing={0}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan1765-8"
        x={570.62683}
        y={72.345535}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.CargaEstimada} %
      </tspan>
    </text>
    <ellipse
      id="st_trans-12-5-4-9-3-3"
      transform="matrix(.39912 0 0 .27837 349.28 89.503)"
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
      transform="matrix(.39912 0 0 .27837 349.28 96.863)"
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
      id="st_trans-12-5-4-9-3-2"
      transform="matrix(.39912 0 0 .27837 349.28 104.75)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-8-7)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="st_trans-12-5-4-9-3"
      transform="matrix(.39912 0 0 .27837 349.28 81.613)"
      cx={39.31}
      cy={175.59}
      rx={4.2297}
      ry={4.0337}
      fill="#fff"
      filter="url(#filter2091-9-8)"
      opacity={0.29}
      paintOrder="markers stroke fill"
    />
    </g>
  )
}