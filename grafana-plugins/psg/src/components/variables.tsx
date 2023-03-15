import React from 'react';

type DatosGenerales = {
  Nombre: string;
  Fase: string;
  Sistema: number;
  Marca: string;
  Modelo: string;
  Ubicacion: string;
};
type Principal ={
    Voltage_prom: number;
    fp: number;
    Corriente_prom: number;
};
type Parametros ={
  CorrienteA: number;
  CorrienteB: number;
  CorrienteC: number;
  Vol_AB: number;
  Vol_BC: number;
  Vol_CA: number;
  Pot_real: number;
  Pot_appt: number;
  Ltime_curve: number;
  Ltime_banda: number;
  Ltime_pickup: number;
  Stime_curve: number;
  Stime_banda: number;
  Stime_pickup: number;
  inst_pickup: number;
  Relinst_pickup: number;
};
type Estados ={
  EstadoON: string;
  EstadoOFF: string;
  Estado_box: string;
  Botón: string;
  st_Modbus: string;
  warning_led: string;
  warning_boton: string;
  warning_txt: string;
  warning_box: string;
};

export interface DataPsg {
DatosGenerales: DatosGenerales;
Principal: Principal;
Parametros: Parametros; 
Estados: Estados;
}

export const Variables = ({DatosGenerales, Parametros, Estados, Principal }: DataPsg) => {
  return (   
    <g 
    id="layer2">
    <path
      id="estado_eq"
      fillRule="evenodd"
      fill="#1aea78"
      strokeWidth={0.26219}
      d="M100.25 13.061H158.285V31.112H100.25z"
      className={Estados.Estado_box}
    />
   
    <path
    id="color_st"
    fillRule="evenodd"
    fill="url(#linearGradient1239)"
    strokeWidth={0.26247}
    d="M100.12 13.061H158.28V31.112H100.12z"
  />
    
    <text
      id="nom_off"
      x={129.6488}
      y={24.790323}
      style={{ lineHeight: 1.25, textAlign: "center" }}
      xmlSpace="preserve"
      fill="#000"
      fontFamily="sans-serif"
      fontSize="9.71px"
      letterSpacing={0}
      strokeWidth={0.36412}
      textAnchor="middle"
      wordSpacing={0}
    >
      <tspan
        id="tspan1938-4"
        x={129.6488}
        y={24.790323}
        style={{ textAlign: "center" }}
        fill="#000"
        fontFamily="Franklin Gothic Medium"
        fontSize="9.8778px"
        strokeWidth={0.36412}
        textAnchor="middle"
      >
        {DatosGenerales.Nombre}
      </tspan>
    </text>
    <text
      id="nom_on"
      x={129.77013}
      y={25.539362}
      style={{ lineHeight: 1.25, textAlign: "center" }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="sans-serif"
      fontSize="9.71px"
      letterSpacing={0}
      strokeWidth={0.36412}
      textAnchor="middle"
      wordSpacing={0}
    >
      <tspan
        id="tspan6769"
        x={129.77013}
        y={25.539362}
        style={{ textAlign: "center" }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="9.8778px"
        strokeWidth={0.36412}
        textAnchor="middle"
      >
        {DatosGenerales.Nombre}
        </tspan>
    </text>
    <text
      id="longt_curve"
      transform="scale(.82041 1.2189)"
      x={425.28107}
      y={101.88778}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.6444px"
      letterSpacing={0}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan1765-6"
        x={425.28107}
        y={101.88778}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.Ltime_curve}
      </tspan>
    </text>
    <text
      id="longt_pickup"
      transform="scale(.82041 1.2189)"
      x={425.28107}
      y={108.23968}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.6444px"
      letterSpacing={0}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan1765-8-3"
        x={425.28107}
        y={108.23968}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.Ltime_pickup}
      </tspan>
    </text>
    <text
      id="longt_banda"
      transform="scale(.82041 1.2189)"
      x={425.28107}
      y={114.59157}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.6444px"
      letterSpacing={0}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan1765-8-3-2"
        x={425.28107}
        y={114.59157}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        C {Parametros.Ltime_banda}
      </tspan>
    </text>
    <text
      id="shortt_curve"
      transform="scale(.82041 1.2189)"
      x={425.28107}
      y={120.94347}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.6444px"
      letterSpacing={0}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan1765-6-2"
        x={425.28107}
        y={120.94347}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.Stime_curve}
      </tspan>
    </text>
    <text
      id="shortt_pickup"
      transform="scale(.82041 1.2189)"
      x={425.28107}
      y={127.29536}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.6444px"
      letterSpacing={0}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan1765-8-3-9"
        x={425.28107}
        y={127.29536}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.Stime_pickup}
      </tspan>
    </text>
    <text
      id="shortt_banda"
      transform="scale(.82041 1.2189)"
      x={425.28107}
      y={133.64725}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.6444px"
      letterSpacing={0}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan1765-8-3-2-0"
        x={425.28107}
        y={133.64725}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.Stime_banda}
      </tspan>
    </text>
    <text
      id="inst_pickup"
      transform="scale(.82041 1.2189)"
      x={425.28107}
      y={139.99915}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.6444px"
      letterSpacing={0}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan1765-8-3-9-7"
        x={425.28107}
        y={139.99915}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.inst_pickup}
      </tspan>
    </text>
    <text
      id="relinst_pickup"
      transform="scale(.82041 1.2189)"
      x={425.28107}
      y={146.35104}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.6444px"
      letterSpacing={0}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan1765-8-3-2-0-8"
        x={425.28107}
        y={146.35104}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.Relinst_pickup}
      </tspan>
    </text>
    <text
      id="text23943"
      transform="scale(1.0508 .95161)"
      x={220.84845}
      y={134.72516}
      style={{ lineHeight: 1.25, textAlign: "center" }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="sans-serif"
      fontSize="9.8778px"
      letterSpacing={0}
      strokeWidth={0.28918}
      textAnchor="middle"
      wordSpacing={0}
    >
      <tspan
        id="corriente"
        x={220.84845}
        y={134.72516}
        style={{ textAlign: "center" }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="9.8778px"
        fontWeight={700}
        strokeWidth={0.28918}
        textAnchor="middle"
      >
        {Principal.Corriente_prom} A
      </tspan>
    </text>
    <text
      id="fp"
      transform="scale(1.0508 .95161)"
      x={218.33069}
      y={54.094147}
      style={{ lineHeight: 1.25, textAlign: "center" }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="sans-serif"
      fontSize="8.4667px"
      letterSpacing={0}
      strokeWidth={0.28918}
      textAnchor="middle"
      wordSpacing={0}
    >
      <tspan
        id="tspan11988"
        x={218.33069}
        y={54.094147}
        style={{ textAlign: "center" }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="9.8778px"
        fontWeight={700}
        strokeWidth={0.28918}
        textAnchor="middle"
      >
        {Principal.fp}
      </tspan>
    </text>
    <text
      id="volt"
      transform="scale(1.0508 .95161)"
      x={32.013641}
      y={51.313782}
      style={{ lineHeight: 1.25, textAlign: "center" }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="sans-serif"
      fontSize="8.4667px"
      letterSpacing={0}
      strokeWidth={0.28918}
      textAnchor="middle"
      wordSpacing={0}
    >
      <tspan
        id="tspan5844"
        x={32.013641}
        y={51.313782}
        style={{ textAlign: "center" }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="9.8778px"
        fontWeight={700}
        strokeWidth={0.28918}
        textAnchor="middle"
      >
        {Principal.Voltage_prom} V
      </tspan>
    </text>
    <text
      id="st"
      x={239.33685}
      y={177.24228}
      style={{ lineHeight: 1.25, textAlign: "center" }}
      xmlSpace="preserve"
      fill="#000"
      fontFamily="sans-serif"
      fontSize="3.5278px"
      letterSpacing={0}
      strokeWidth={0.26458}
      textAnchor="middle"
      wordSpacing={0}
    >
      <tspan
        id="tspan5848"
        x={239.33685}
        y={177.24228}
        dy={0}
        style={{ textAlign: "center" }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="7.0556px"
        strokeWidth={0.26458}
        textAnchor="middle"
        >
        {Estados.EstadoON}
      </tspan>
    </text>
    <text
      id="st_off"
      x={239.33685}
      y={177.24228}
      style={{ lineHeight: 1.25, textAlign: "center" }}
      xmlSpace="preserve"
      fill="#000"
      fontFamily="sans-serif"
      fontSize="3.5278px"
      letterSpacing={0}
      strokeWidth={0.26458}
      textAnchor="middle"
      wordSpacing={0}
      opacity={0}
    >
      <tspan
        id="tspan5848"
        x={239.33685}
        y={177.24228}
        dy={0}
        style={{ textAlign: "center" }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="7.0556px"
        strokeWidth={0.26458}
        textAnchor="middle"
      >
        {Estados.EstadoOFF}
      </tspan>
    </text>
    <text
      id="st_alarmado"
      x={239.33685}
      y={177.24228}
      style={{ lineHeight: 1.25, textAlign: "center" }}
      xmlSpace="preserve"
      fill="#000"
      fontFamily="sans-serif"
      fontSize="3.5278px"
      letterSpacing={0}
      strokeWidth={0.26458}
      textAnchor="middle"
      wordSpacing={0}
  
    >
      <tspan
        id="tspan5848"
        x={239.33685}
        y={177.24228}
        dy={0}
        style={{ textAlign: "center" }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="7.0556px"
        strokeWidth={0.26458}
        textAnchor="middle"
        >
        {Estados.warning_txt}
      </tspan>
    </text>
    <text
      id="cur_c"
      transform="scale(.82041 1.2189)"
      x={566.60565}
      y={80.06012}
      style={{ lineHeight: 1.25 }}
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
        x={566.60565}
        y={80.06012}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.CorrienteC} A
      </tspan>
    </text>
    <text
      id="pow_appt"
      transform="scale(.82041 1.2189)"
      x={566.65527}
      y={86.913345}
      style={{ lineHeight: 1.25 }}
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
        x={566.65527}
        y={86.913345}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.Pot_appt} KVA
      </tspan>
    </text>
    <text
      id="pow_real"
      transform="scale(.82041 1.2189)"
      x={566.65527}
      y={93.766563}
      style={{ lineHeight: 1.25 }}
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
        x={566.65527}
        y={93.766563}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.Pot_real} KW
      </tspan>
    </text>
    <text
      id="cur_b"
      transform="scale(.82041 1.2189)"
      x={566.60565}
      y={73.206894}
      style={{ lineHeight: 1.25 }}
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
        x={566.60565}
        y={73.206894}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.CorrienteB} A
      </tspan>
    </text>
    <text
      id="cur_a"
      transform="scale(.82041 1.2189)"
      x={566.60565}
      y={66.382607}
      style={{ lineHeight: 1.25 }}
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
        x={566.60565}
        y={66.382607}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.CorrienteA} A
      </tspan>
    </text>
    <text
      id="vol_vab"
      transform="scale(.82041 1.2189)"
      x={566.60565}
      y={45.822933}
      style={{ lineHeight: 1.25 }}
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
        x={566.60565}
        y={45.822933}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.Vol_AB} V
      </tspan>
    </text>
    <text
      id="vol_vbc"
      transform="scale(.82041 1.2189)"
      x={566.60565}
      y={52.647221}
      style={{ lineHeight: 1.25 }}
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
        x={566.60565}
        y={52.647221}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.Vol_BC} V
      </tspan>
    </text>
    <text
      id="vol_vca"
      transform="scale(.82041 1.2189)"
      x={566.60565}
      y={59.500446}
      style={{ lineHeight: 1.25 }}
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
        x={566.60565}
        y={59.500446}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.6444px"
        strokeWidth={0.26458}
      >
        {Parametros.Vol_CA} V
      </tspan>
    </text>
    <ellipse
      id="alam_gen"
      cx={484.78}
      cy={137.9}
      rx={2.5726}
      ry={2.4137}
      fillRule="evenodd"
      fill="#1bea77"
      opacity={0.88}
      paintOrder="markers stroke fill"
      className={Estados.warning_led}
    />
    <ellipse
      id="path2448-1"
      transform="matrix(.74208 0 0 .6085 155.19 115.43)"
      cx={444.15}
      cy={34.583}
      rx={1.8876}
      ry={1.5368}
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2963)"
      opacity={0.592}
      paintOrder="markers stroke fill"
    />
    <ellipse
      id="alm_modbus"
      cx={484.78}
      cy={151.67}
      rx={2.5726}
      ry={2.4137}
      fillRule="evenodd"
      fill="#1bea77"
      opacity={0.88}
      paintOrder="markers stroke fill"
      className={Estados.st_Modbus}
    />
    <ellipse
      id="ellipse2986"
      transform="matrix(.74208 0 0 .6085 155.19 129.2)"
      cx={444.15}
      cy={34.583}
      rx={1.8876}
      ry={1.5368}
      fillRule="evenodd"
      fill="#fff"
      filter="url(#filter2963)"
      opacity={0.592}
      paintOrder="markers stroke fill"
    />
    <text
      id="fase"
      transform="scale(.9853 1.0149)"
      x={329.85855}
      y={42.6833}
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
      fontSize="5.9973px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan3614"
        x={329.85855}
        y={42.6833}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.9973px"
        strokeWidth={0.47056}
      >
        {DatosGenerales.Fase}
      </tspan>
    </text>
    <text
      id="sistema"
      transform="scale(.9853 1.0149)"
      x={329.88785}
      y={50.556084}
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
      fontSize="5.9973px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan3614-0"
        x={329.88785}
        y={50.556084}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.9973px"
        strokeWidth={0.47056}
      >
        {DatosGenerales.Sistema}
      </tspan>
    </text>
    <text
      id="marca"
      transform="scale(.9853 1.0149)"
      x={329.85855}
      y={58.346878}
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
      fontSize="5.9973px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan3618-1"
        x={329.85855}
        y={58.346878}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.9973px"
        strokeWidth={0.47056}
      >
        {DatosGenerales.Marca}
      </tspan>
    </text>
    <text
      id="modelo"
      transform="scale(.9853 1.0149)"
      x={329.85855}
      y={66.178673}
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
      fontSize="5.9973px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan3614-5"
        x={329.85855}
        y={66.178673}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.9973px"
        strokeWidth={0.47056}
      >
        {DatosGenerales.Modelo}
      </tspan>
    </text>
    <text
      id="ubicacion"
      transform="scale(.9853 1.0149)"
      x={329.85855}
      y={74.01046}
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
      fontSize="5.9973px"
      letterSpacing={0}
      strokeWidth={0.47056}
      wordSpacing={0}
    >
      <tspan
        id="tspan3614-8"
        x={329.85855}
        y={74.01046}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal"
        }}
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="5.9973px"
        strokeWidth={0.47056}
      >
        {DatosGenerales.Ubicacion}
      </tspan>
    </text>
    <path
      id="path15781"
      d="M212.93 170.28a5.861 5.861 0 00-4.066 1.662 5.7 5.7 0 00-1.684 4.01c0 1.484.62 2.96 1.684 4.01a5.86 5.86 0 004.066 1.662 5.861 5.861 0 004.066-1.662 5.7 5.7 0 001.684-4.01 5.7 5.7 0 00-1.684-4.01 5.86 5.86 0 00-4.066-1.662zm0 .835a5.03 5.03 0 013.475 1.42c.904.891 1.435 2.158 1.435 3.417s-.531 2.525-1.435 3.417a5.03 5.03 0 01-3.475 1.42 5.03 5.03 0 01-3.475-1.42c-.904-.892-1.435-2.159-1.435-3.417s.531-2.526 1.435-3.418a5.03 5.03 0 013.475-1.42z"
      fill="#00990c"
      className={Estados.Botón}
    />
    <path
      id="path2489"
      transform="translate(123.18 126.62) scale(.14885)"
      d="M601.87 320.96c.063-1.312 2.784-1.358 2.69.07-.033.121 0 9.401 0 9.401-.347 1.078-2.153 1.292-2.713 0z"
      fill="#00990c"
      filter="url(#filter2703)"
      className={Estados.Botón}
    />
    <path
      id="path2649"
      transform="translate(123.18 126.62) scale(.14885)"
      d="M597.57 325.63c1.697.335 1.59 1.335 1.404 2.364-1.343 1.49-2.998 2.762-2.868 5.287.434 2.218.972 4.389 3.417 5.673 2.376 1.244 4.814 1.155 6.562.177 1.888-1.079 3.769-3.085 3.728-5.85-.088-2.4-1.275-4.226-3.313-5.607.084-.983-.099-2.122 2.022-1.917 2.273 1.96 4.04 4.21 3.95 7.536 0 3.557-1.8 6.427-5.653 8.51-2.77 1.344-5.445.865-8.09-.167-2.57-1.48-5.569-3.356-5.217-9.529.748-3.306 2.154-5.363 4.058-6.477z"
      fill="#00990c"
      filter="url(#filter2663)"
      className={Estados.Botón}
    />
    //BOTON WARNING
    <path
      id="path15781"
      d="M212.93 170.28a5.861 5.861 0 00-4.066 1.662 5.7 5.7 0 00-1.684 4.01c0 1.484.62 2.96 1.684 4.01a5.86 5.86 0 004.066 1.662 5.861 5.861 0 004.066-1.662 5.7 5.7 0 001.684-4.01 5.7 5.7 0 00-1.684-4.01 5.86 5.86 0 00-4.066-1.662zm0 .835a5.03 5.03 0 013.475 1.42c.904.891 1.435 2.158 1.435 3.417s-.531 2.525-1.435 3.417a5.03 5.03 0 01-3.475 1.42 5.03 5.03 0 01-3.475-1.42c-.904-.892-1.435-2.159-1.435-3.417s.531-2.526 1.435-3.418a5.03 5.03 0 013.475-1.42z"
      fill="#00990c"
      className={Estados.warning_boton}
    />
    <path
      id="path2489"
      transform="translate(123.18 126.62) scale(.14885)"
      d="M601.87 320.96c.063-1.312 2.784-1.358 2.69.07-.033.121 0 9.401 0 9.401-.347 1.078-2.153 1.292-2.713 0z"
      fill="#00990c"
      filter="url(#filter2703)"
      className={Estados.warning_boton}
    />
    <path
      id="path2649"
      transform="translate(123.18 126.62) scale(.14885)"
      d="M597.57 325.63c1.697.335 1.59 1.335 1.404 2.364-1.343 1.49-2.998 2.762-2.868 5.287.434 2.218.972 4.389 3.417 5.673 2.376 1.244 4.814 1.155 6.562.177 1.888-1.079 3.769-3.085 3.728-5.85-.088-2.4-1.275-4.226-3.313-5.607.084-.983-.099-2.122 2.022-1.917 2.273 1.96 4.04 4.21 3.95 7.536 0 3.557-1.8 6.427-5.653 8.51-2.77 1.344-5.445.865-8.09-.167-2.57-1.48-5.569-3.356-5.217-9.529.748-3.306 2.154-5.363 4.058-6.477z"
      fill="#00990c"
      filter="url(#filter2663)"
      className={Estados.warning_boton}
    />
  </g>
            )
        }