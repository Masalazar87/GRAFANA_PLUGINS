import React from 'react';

type DatosGenerales = {
    Nombre: string;
    Marca: string;
};

type Parametros = {
    Voltin: number;
    Voltout: number;
    Outcurr: number;
    Outpow: number;
    Load1: number;
    Load2: number;
    Load3: number;
    Vbateria: number;
    Tiempo: number;
};

type Estados = {
    Estado: string;
    Rectifier: string;
    Inverter: string;
    Bypass: string;
    Battery: string;
    };

type Alarmas = {
    Rectifier: string;
    Rectifierbox: string;
    Inverter: string;
    Battery: string;
    Bypass: string;
    Alarma: string;
    Alerta: string;
    Habilitado: string;
};

type Conexion = {
    Entrada: string;
    Rectificador: string;
    Inversor: string;
    Salida: string;
    Bypass: string;
    Bateria: string;
    Q4: string;
    Q4on: string;
    Q4off: string;
};

type Animacion = {
  Entrada: string;
  Rectificador: string;
  Inversor: string;
  Bypass: string;
  Salida: string;
  Bateria25: string;
  Bateria50: string;
  Bateria75: string;
  Bateria100: string;
  Carga25: string;
  Carga25full: string;
  Carga50: string;
  Carga50full: string;
  Carga75: string;
  Carga75full: string;
  Carga100: string;
  Carga100full: string;
  CargadorOn: string;
  CargadorOff: string;
};

export interface DataGrupalups {
    DatosGenerales: DatosGenerales;
    Parametros: Parametros;
    Estados: Estados;
    Alarmas: Alarmas;
    Conexion: Conexion;
    Animacion: Animacion;
}

export const Variables = ({ DatosGenerales, Parametros, Estados, Alarmas, Conexion, Animacion }: DataGrupalups) => {
return (
  <g id="layer4">
  <text
    id="nom"
    transform="scale(.72268 1.3837)"
    x={41.173149}
    y={4.2400885}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="BankGothic Lt BT"
    fontSize="5.2917px"
    letterSpacing={0}
    opacity={0.899}
    strokeWidth={0.32006}
    wordSpacing={0}
  >
    <tspan
      id="tspan17708-4-7-9"
      x={41.173149}
      y={4.2400885}
      dy="0 0 0 0 0 0 0 0"
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="BankGothic Lt BT"
      fontSize="5.2917px"
      strokeWidth={0.32006}
    >
      {"UPS-X-XX"}
    </tspan>
  </text>
  <path
    id="path1125"
    d="M16.703 56.68v-2.072"
    strokeWidth={0.29825}
    stroke="#ff7f21"
  />
  <ellipse
    id="path1129"
    cx={16.703}
    cy={57.471}
    rx={0.20708}
    ry={0.32849}
    fill="none"
    opacity={0.979}
    strokeWidth={0.15302}
    stroke="#ff7f21"
  />
  <path
    id="habilitado_1.1b"
    d="M15.318 78.43c.988-6.237 2.059-5.859 2.415-.79.373 6.509 1.626 6.767 2.2.818"
    fill="none"
    strokeWidth={0.58427}
    stroke="#ff7f21"
  />
  <text
    id="ups1_1b_volt_in"
    transform="scale(1.0535 .94926)"
    x={133.46773}
    y={40.103359}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="BankGothic Lt BT"
    fontSize="3.8806px"
    fontStretch="semi-expanded"
    letterSpacing={0}
    strokeWidth={0.24358}
    wordSpacing={0}
  >
    <tspan
      id="tspan15154"
      x={133.46773}
      y={40.103359}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="BankGothic Lt BT"
      fontSize="3.8806px"
      fontStretch="semi-expanded"
      strokeWidth={0.24358}
    >
      {Parametros.Voltin} V
    </tspan>
  </text>
  <text
    id="ups1_1b_volt_out"
    transform="scale(1.0535 .94926)"
    x={133.46773}
    y={50.624111}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="BankGothic Lt BT"
    fontSize="3.8806px"
    fontStretch="semi-expanded"
    letterSpacing={0}
    strokeWidth={0.24358}
    wordSpacing={0}
  >
    <tspan
      id="tspan15158"
      x={133.46773}
      y={50.624111}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="BankGothic Lt BT"
      fontSize="3.8806px"
      fontStretch="semi-expanded"
      strokeWidth={0.24358}
    >
      {Parametros.Voltout} V
    </tspan>
  </text>
  <text
    id="ups1_1b_curr_out"
    transform="scale(1.0349 .96624)"
    x={135.86368}
    y={68.764359}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="BankGothic Lt BT"
    fontSize="3.8806px"
    fontStretch="semi-expanded"
    letterSpacing={0}
    strokeWidth={0.24358}
    wordSpacing={0}
  >
    <tspan
      id="tspan15162"
      x={135.86368}
      y={68.764359}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="BankGothic Lt BT"
      fontSize="3.8806px"
      fontStretch="semi-expanded"
      strokeWidth={0.24358}
    >
      {Parametros.Outcurr} A
    </tspan>
  </text>
  <text
    id="ups1_1b_pow_out"
    transform="scale(1.0349 .96624)"
    x={135.86368}
    y={79.746925}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="BankGothic Lt BT"
    fontSize="3.8806px"
    fontStretch="semi-expanded"
    letterSpacing={0}
    strokeWidth={0.24358}
    wordSpacing={0}
  >
    <tspan
      id="tspan15166"
      x={135.86368}
      y={79.746925}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#fff"
      fontFamily="BankGothic Lt BT"
      fontSize="3.8806px"
      fontStretch="semi-expanded"
      strokeWidth={0.24358}
    >
      {Parametros.Outpow} Kw
    </tspan>
  </text>
  <ellipse
    id="ups1_1b_alarms"
    cx={39.476}
    cy={17.948}
    rx={3.5488}
    ry={3.4025}
    fillRule="evenodd"
    fill="#4d4d4d"
    opacity={0.899}
    paintOrder="markers stroke fill"
  />
  <ellipse
    id="path2610-3-6-9-2"
    transform="matrix(1.1537 0 0 1.0408 -50.748 -15.261)"
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
    id="ups1_1b_batt_vol"
    transform="scale(.82663 1.2097)"
    x={56.065269}
    y={66.720139}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#f9f9f9"
    fontFamily="BankGothic Lt BT"
    fontSize="2.4694px"
    fontStretch="semi-expanded"
    letterSpacing={0}
    strokeWidth={0.05281}
    stroke="#f8f9f9"
    wordSpacing={0}
  >
    <tspan
      id="tspan5836-0"
      x={56.065269}
      y={66.720139}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#f9f9f9"
      fontFamily="BankGothic Lt BT"
      fontSize="2.4694px"
      fontStretch="semi-expanded"
      strokeWidth={0.05281}
      stroke="#f8f9f9"
    >
      {Parametros.Vbateria} V
    </tspan>
  </text>
  <text
    id="ups1_1b_min_remaining"
    transform="scale(.82663 1.2097)"
    x={73.885124}
    y={66.612732}
    style={{
      fontVariantCaps: "normal",
      fontVariantEastAsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#f9f9f9"
    fontFamily="BankGothic Lt BT"
    fontSize="3.5278px"
    fontStretch="semi-expanded"
    letterSpacing={0}
    strokeWidth={0.068936}
    stroke="#f8f9f9"
    wordSpacing={0}
  >
    <tspan
      id="tspan5836-0-7"
      x={73.885124}
      y={66.612732}
      style={{
        fontVariantCaps: "normal",
        fontVariantEastAsian: "normal",
        fontVariantLigatures: "normal",
        fontVariantNumeric: "normal"
      }}
      fill="#f9f9f9"
      fontFamily="BankGothic Lt BT"
      fontSize="3.5278px"
      fontStretch="semi-expanded"
      strokeWidth={0.068936}
      stroke="#f8f9f9"
    >
      {Parametros.Tiempo} min
    </tspan>
  </text>
  <path
    id="path11248-8-8"
    transform="matrix(.19483 0 0 .25728 15.016 34.362)"
    d="M8.706 1.679l7.253 12.56H1.454z"
    fill="#ff801f"
    opacity={0.999}
    paintOrder="markers fill stroke"
  />
  <path
    id="path11248-8-8-5"
    transform="matrix(.38967 0 0 .51457 13.32 31.872)"
    d="M8.706 1.679l7.253 12.56H1.454z"
    fill="none"
    opacity={0.999}
    paintOrder="markers fill stroke"
    strokeLinecap="square"
    strokeWidth={1.6789}
    stroke="#ff801f"
  />
  <path
    id="path11248-8-8-5-1"
    transform="matrix(.38967 0 0 .51457 13.32 51.72)"
    d="M8.706 1.679l7.253 12.56H1.454z"
    fill="none"
    opacity={0.999}
    paintOrder="markers fill stroke"
    strokeLinecap="square"
    strokeWidth={1.6789}
    stroke="#ff801f"
  />
  <ellipse
    id="ups1_1b_alarms-3"
    cx={23.404}
    cy={17.948}
    rx={3.5488}
    ry={3.4025}
    fillRule="evenodd"
    fill="#4d4d4d"
    opacity={0.899}
    paintOrder="markers stroke fill"
    className={Estados.Estado}
  />
  <ellipse
    id="path2610-3-6-9-2-8"
    transform="matrix(1.1537 0 0 1.0408 -66.821 -15.261)"
    cx={78.266}
    cy={31.379}
    rx={2.3671}
    ry={1.9181}
    fillRule="evenodd"
    fill="#fff"
    filter="url(#filter3102-5-0-7)"
    opacity={0.35}
    paintOrder="markers stroke fill"
  />
  <path
    id="ups1_1b_batt_charge_4"
    transform="matrix(1.2538 0 0 1.862 16.375 -373.56)"
    fill="none"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 233.79H29.8307V234.914H25.248z"
    className={Animacion.Bateria100}
  />
  <path
    id="ups1_1b_batt_charge_3"
    transform="matrix(1.2538 0 0 1.862 16.375 -373.23)"
    fill="#168698"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 235.38H29.8307V236.504H25.248z"
    className={Animacion.Bateria50}
  />
  <path
    id="ups1_1b_batt_charge_2"
    transform="matrix(1.2538 0 0 1.862 16.375 -372.9)"
    fill="#168698"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 236.97H29.8307V238.094H25.248z"
    className={Animacion.Bateria50}
  />
  <path
    id="ups1_1b_batt_charge_1"
    transform="matrix(1.2538 0 0 1.862 16.375 -373.56)"
    fill="#168698"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 239.09H29.8307V240.214H25.248z"
    className={Animacion.Bateria25}
  />
  <path
    id="path1617"
    d="M53.273 52.601h79.205"
    fill="none"
    strokeWidth={0.952}
    stroke="#0ceef8"
  />
  <path
    id="path11248-7-6"
    d="M106.096 52.599l-3.324 1.919V50.68z"
    fillOpacity={0.99667}
    fill="#009898"
    opacity={0.999}
    paintOrder="markers fill stroke"
    strokeLinecap="square"
    strokeWidth={0.44417668000000005}
    stroke="#0bf0f7"
  />
  <path
    id="path11248-7-6-8"
    d="M119.136 52.599l-3.324 1.919V50.68z"
    fillOpacity={0.99667}
    fill="#009898"
    opacity={0.999}
    paintOrder="markers fill stroke"
    strokeLinecap="square"
    strokeWidth={0.44417668000000005}
    stroke="#0bf0f7"
  />
  <path
    id="path11248-7-6-4"
    d="M133.376 52.599l-3.324 1.919V50.68z"
    fillOpacity={0.99667}
    fill="#009898"
    opacity={0.999}
    paintOrder="markers fill stroke"
    strokeLinecap="square"
    strokeWidth={0.44417668000000005}
    stroke="#0bf0f7"
  />
  <path
    id="path11248-7-6-4-7-1"
    d="M79.803 60.6l-1.919-3.324h3.838z"
    fillOpacity={0.99667}
    opacity={0.999}
    paintOrder="markers fill stroke"
    strokeLinecap="square"
    strokeWidth={0.4442}
    stroke="#0bf0f7"
  />
  <path
    id="path11248-8"
    d="M79.803 62.541l1.919 3.324h-3.838z"
    fillOpacity={0.99667}
    fill="#009898"
    opacity={0.999}
    paintOrder="markers fill stroke"
    strokeLinecap="square"
    strokeWidth={0.4442}
    stroke="#0bf0f7"
  />
  <path
    id="path12233"
    d="M110.29 37.189h14.535v14.9"
    fill="none"
    strokeWidth={0.55}
    stroke="#0decf8"
  />
  <path
    id="path11248-7-6-4-7"
    d="M124.85 46.939l-1.919-3.324h3.838z"
    fillOpacity={0.99667}
    opacity={0.999}
    paintOrder="markers fill stroke"
    strokeLinecap="square"
    strokeWidth={0.4442}
    stroke="#0bf0f7"
  />
  <path
    id="path11248-7-6-8-8"
    d="M120.196 37.259l-3.324 1.919V35.34z"
    fillOpacity={0.99667}
    opacity={0.999}
    paintOrder="markers fill stroke"
    strokeLinecap="square"
    strokeWidth={0.44417668000000005}
    stroke="#0bf0f7"
  />
  <path
    id="stat_inv"
    fill="#168498"
    strokeWidth={0.31562}
    stroke="#0ceef8"
    d="M89.178 51.337H93.3974V53.6152H89.178z"
  />
  <path
    id="stat_rec"
    fill="#168498"
    strokeWidth={0.31562}
    stroke="#0ceef8"
    d="M66.616 51.268H70.83539999999999V53.5462H66.616z"
  />
  <path
    id="path1643"
    d="M79.816 52.279v15.939"
    fill="none"
    strokeWidth=".32924px"
    stroke="#0ceef8"
  />
  <text
    id="ups1_1b_out_percent_load1"
    transform="scale(.82663 1.2097)"
    x={114.96709}
    y={66.456306}
    style={{
      fontFeatureSettings: "normal",
      fontVariantCaps: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#f9f9f9"
    fontFamily="sans-serif"
    fontSize="2.5937px"
    letterSpacing={0}
    strokeWidth={0.05281}
    stroke="#f8f9f9"
    wordSpacing={0}
  >
    <tspan
      id="tspan5836-0-1"
      x={114.96709}
      y={66.456306}
      fill="#f9f9f9"
      strokeWidth={0.05281}
      stroke="#f8f9f9"
    >
      {Parametros.Load1}%
    </tspan>
  </text>
  <text
    id="ups1_1b_out_percent_load2"
    transform="scale(.82663 1.2097)"
    x={132.76939}
    y={66.422234}
    style={{
      fontFeatureSettings: "normal",
      fontVariantCaps: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#f9f9f9"
    fontFamily="sans-serif"
    fontSize="2.5937px"
    letterSpacing={0}
    strokeWidth={0.05281}
    stroke="#f8f9f9"
    wordSpacing={0}
  >
    <tspan
      id="tspan5836-0-1-8"
      x={132.76939}
      y={66.422234}
      fill="#f9f9f9"
      strokeWidth={0.05281}
      stroke="#f8f9f9"
    >
       {Parametros.Load2}%
    </tspan>
  </text>
  <text
    id="ups1_1b_out_percent_load3"
    transform="scale(.82663 1.2097)"
    x={149.59042}
    y={66.422234}
    style={{
      fontFeatureSettings: "normal",
      fontVariantCaps: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#f9f9f9"
    fontFamily="sans-serif"
    fontSize="2.5937px"
    letterSpacing={0}
    strokeWidth={0.05281}
    stroke="#f8f9f9"
    wordSpacing={0}
  >
    <tspan
      id="tspan5836-0-1-8-3"
      x={149.59042}
      y={66.422234}
      fill="#f9f9f9"
      strokeWidth={0.05281}
      stroke="#f8f9f9"
    >
      {Parametros.Load3}%
    </tspan>
  </text>
  <path
    id="ups1_1b_load1_4-1"
    transform="matrix(1.2538 0 0 1.862 62.816 -373.56)"
    fill="none"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 233.79H29.8307V234.914H25.248z"
    className={Animacion.Carga100full}
  />
  <path
    id="ups1_1b_load1_4"
    transform="matrix(1.2538 0 0 1.862 62.816 -373.56)"
    fill="none"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 233.79H29.8307V234.914H25.248z"
    className={Animacion.Carga100}
  />
  <path
    id="ups1_1b_load1_3-1"
    transform="matrix(1.2538 0 0 1.862 62.816 -373.23)"
    fill="none"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 235.38H29.8307V236.504H25.248z"
    className={Animacion.Carga75full}
  />
  <path
    id="ups1_1b_load1_3"
    transform="matrix(1.2538 0 0 1.862 62.816 -373.23)"
    fill="none"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 235.38H29.8307V236.504H25.248z"
    className={Animacion.Carga75}
  />
  <path
    id="ups1_1b_load1_2-1"
    transform="matrix(1.2538 0 0 1.862 62.816 -372.9)"
    fill="none"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 236.97H29.8307V238.094H25.248z"
    className={Animacion.Carga50full}
  />
  <path
    id="ups1_1b_load1_2"
    transform="matrix(1.2538 0 0 1.862 62.816 -372.9)"
    fill="none"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 236.97H29.8307V238.094H25.248z"
    className={Animacion.Carga50}
  />
   <path
    id="ups1_1b_load1_1-1"
    transform="matrix(1.2538 0 0 1.862 62.816 -373.56)"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 239.09H29.8307V240.214H25.248z"
    className={Animacion.Carga25full}
  />
  <path
    id="ups1_1b_load1_1"
    transform="matrix(1.2538 0 0 1.862 62.816 -373.56)"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 239.09H29.8307V240.214H25.248z"
    className={Animacion.Carga25}
  />
  <path
    id="ups1_1b_load2_4"
    transform="matrix(1.2538 0 0 1.862 77.412 -373.56)"
    fill="none"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 233.79H29.8307V234.914H25.248z"
  />
  <path
    id="ups1_1b_load2_3"
    transform="matrix(1.2538 0 0 1.862 77.412 -373.23)"
    fill="none"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 235.38H29.8307V236.504H25.248z"
  />
  <path
    id="ups1_1b_load2_2"
    transform="matrix(1.2538 0 0 1.862 77.412 -372.9)"
    fill="none"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 236.97H29.8307V238.094H25.248z"
  />
  <path
    id="ups1_1b_load2_1"
    transform="matrix(1.2538 0 0 1.862 77.412 -373.56)"
    fill="#168498"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 239.09H29.8307V240.214H25.248z"
  />
  <path
    id="ups1_1b_load3_4"
    transform="matrix(1.2538 0 0 1.862 91.345 -373.56)"
    fill="none"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 233.79H29.8307V234.914H25.248z"
  />
  <path
    id="ups1_1b_load3_3"
    transform="matrix(1.2538 0 0 1.862 91.345 -373.23)"
    fill="none"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 235.38H29.8307V236.504H25.248z"
  />
  <path
    id="ups1_1b_load3_2"
    transform="matrix(1.2538 0 0 1.862 91.345 -372.9)"
    fill="none"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 236.97H29.8307V238.094H25.248z"
  />
  <path
    id="ups1_1b_load3_1"
    transform="matrix(1.2538 0 0 1.862 91.345 -373.56)"
    fill="#168498"
    filter="url(#filter1671)"
    strokeWidth={0.17184}
    stroke="#0ceef8"
    d="M25.248 239.09H29.8307V240.214H25.248z"
  />
  <path
    id="stat_inv-1"
    fill="#168498"
    strokeWidth={0.31562}
    stroke="#0ceef8"
    d="M103.84 36.151H108.05940000000001V38.4292H103.84z"
  />
  <path
    id="path3087"
    d="M101.72 37.204H52.983"
    fill="#0decf8"
    strokeWidth={0.565}
    stroke="#0decf8"
  />
  <path
    id="path1972-9"
    d="M46.503 52.341c1.116-2.236 1.127-1.684 2.105.412 1.265 1.914 1.264 2.334 2.44-.102"
    fill="none"
    strokeWidth={0.35838}
    stroke="#0ceef8"
  />
  <path
    id="path1972-9-1"
    d="M46.503 37.717c1.116-2.236 1.127-1.684 2.105.412 1.265 1.914 1.264 2.334 2.44-.102"
    fill="none"
    strokeWidth={0.35838}
    stroke="#0ceef8"
  />

      </g>
    )
}


