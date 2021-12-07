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
        <path
          id="path1617-6-1-2-3-3"
          d="M120.09 52.668h4.71"
          fill="none"
          className = {Conexion.Q4}
          strokeWidth={0.90011}
          stroke="#0ceef8"
        />
        <path
          id="path1617-6-1-2-3"
          d="M111.94 52.668h4.506"
          fill="none"
          className = {Conexion.Q4}
          strokeWidth={0.90011}
          stroke="#0ceef8"
        />
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
          fontFamily="Franklin Gothic Medium"
          fontSize="5.2917px"
          letterSpacing={0}
          opacity={0.899}
          strokeWidth={0.32006}
          wordSpacing={0}
        >
          <tspan
            id="tspan17708-4-7-9"
            x={41.173149}
            y={4.3400885}
            dy="0 0 0 0 0 0 0 0"
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.2917px"
            strokeWidth={0.32006}
          >
            {DatosGenerales.Nombre}
          </tspan>
        </text>
        <path
          id="path1125"
          d="M16.703 56.68v-2.072"
          strokeWidth={0.29825}
          stroke="#ff7f21"
          className = {Alarmas.Alerta}
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
          className = {Alarmas.Alerta}
        />
        <path
          id="habilitado_1.1b"
          d="M15.318 78.43c.988-6.237 2.059-5.859 2.415-.79.373 6.509 1.626 6.767 2.2.818"
          fill="none"
          className = {Alarmas.Habilitado}
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
          fontFamily="Franklin Gothic Medium"
          fontSize="3.8806px"
          fontStretch="semi-expanded"
          letterSpacing={0}
          strokeWidth={0.24358}
          wordSpacing={0}
        >
          <tspan
            id="tspan15154"
            x={131.46773}
            y={40.103359}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="3.8806px"
            fontStretch="semi-expanded"
            strokeWidth={0.24358}
          >
            {Parametros.Voltin}V
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
          fontFamily="Franklin Gothic Medium"
          fontSize="3.8806px"
          fontStretch="semi-expanded"
          letterSpacing={0}
          strokeWidth={0.24358}
          wordSpacing={0}
        >
          <tspan
            id="tspan15158"
            x={131.46773}
            y={50.624111}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="3.8806px"
            fontStretch="semi-expanded"
            strokeWidth={0.24358}
          >
            {Parametros.Voltout}V
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
          fontFamily="Franklin Gothic Medium"
          fontSize="3.8806px"
          fontStretch="semi-expanded"
          letterSpacing={0}
          strokeWidth={0.24358}
          wordSpacing={0}
        >
          <tspan
            id="tspan15162"
            x={133.86368}
            y={68.764359}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="3.8806px"
            fontStretch="semi-expanded"
            strokeWidth={0.24358}
          >
            {Parametros.Outcurr}A
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
          fontFamily="Franklin Gothic Medium"
          fontSize="3.8806px"
          fontStretch="semi-expanded"
          letterSpacing={0}
          strokeWidth={0.24358}
          wordSpacing={0}
        >
          <tspan
            id="tspan15166"
            x={133.86368}
            y={79.746925}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="3.8806px"
            fontStretch="semi-expanded"
            strokeWidth={0.24358}
          >
            {Parametros.Outpow}KW
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
          className = {Alarmas.Alarma}
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
          fontFamily="Franklin Gothic Medium"
          fontSize="2.4694px"
          fontStretch="semi-expanded"
          letterSpacing={0}
          strokeWidth={0.05281}
          stroke="#f8f9f9"
          wordSpacing={0}
        >
          <tspan
            id="tspan5836-0"
            x={57.565269}
            y={66.720139}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#f9f9f9"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.4694px"
            fontStretch="semi-expanded"
            strokeWidth={0.05281}
            stroke="#f8f9f9"
          >
            {Parametros.Vbateria}V
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
          fontFamily="Franklin Gothic Medium"
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
            fontFamily="Franklin Gothic Medium"
            fontSize="3.5278px"
            fontStretch="semi-expanded"
            strokeWidth={0.068936}
            stroke="#f8f9f9"
          >
            {Parametros.Tiempo}MIN
          </tspan>
        </text>
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
            id="tspan5836-0-1-8"
            x={132.76939}
            y={66.456306}
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
          id="path11248-8-8"
          transform="matrix(.19483 0 0 .25728 15.016 34.362)"
          d="M8.706 1.679l7.253 12.56H1.454z"
          fill="none"
          className = {Alarmas.Rectifier}
          opacity={0.999}
          paintOrder="markers fill stroke"
        />
        <path
          id="path11248-8-8-5"
          transform="matrix(.38967 0 0 .51457 13.32 31.872)"
          d="M8.706 1.679l7.253 12.56H1.454z"
          fill="none"
          className = {Alarmas.Rectifier}
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
          className = {Alarmas.Alerta}
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
          className = {Estados.Estado}
          opacity={0.899}
          paintOrder="markers stroke fill"
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
          id="pass1"
          transform="matrix(.80344 .59539 -.57908 .81527 0 0)"
          fillRule="evenodd"
          fill="#999"
          className = {Conexion.Q4}
          paintOrder="markers stroke fill"
          strokeWidth={0.052922}
          stroke="#999"
          d="M108.38 -37.619H108.86524V-33.590199999999996H108.38z"
        />
        <path
          id="path12235"
          d="M110.53 37.189h-3.644"
          fill="none"
          strokeWidth={0.55}
          stroke="#0"
        />
        <path
          id="ups1_1b_batt_charge_4"
          transform="matrix(1.2538 0 0 1.862 16.375 -373.56)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Bateria100}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 233.79H29.8307V234.914H25.248z"
        />
        <path
          id="ups1_1b_batt_charge_3"
          transform="matrix(1.2538 0 0 1.862 16.375 -373.23)"
          fill="#168698"
          filter="url(#filter1671)"
          className = {Animacion.Bateria75}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 235.38H29.8307V236.504H25.248z"
        />
        <path
          id="ups1_1b_batt_charge_2"
          transform="matrix(1.2538 0 0 1.862 16.375 -372.9)"
          fill="#168698"
          filter="url(#filter1671)"
          className = {Animacion.Bateria50}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 236.97H29.8307V238.094H25.248z"
        />
        <path
          id="ups1_1b_batt_charge_1"
          transform="matrix(1.2538 0 0 1.862 16.375 -373.56)"
          fill="#168698"
          filter="url(#filter1671)"
          className = {Animacion.Bateria25}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 239.09H29.8307V240.214H25.248z"
        />
        <path
          id="ups1_1b_load1_4"
          transform="matrix(1.2538 0 0 1.862 62.816 -373.56)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga100}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 233.79H29.8307V234.914H25.248z"
        />
        <path
          id="ups1_1b_load1_4-1"
          transform="matrix(1.2538 0 0 1.862 62.816 -373.56)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga100full}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 233.79H29.8307V234.914H25.248z"
        />
        <path
          id="ups1_1b_load1_3"
          transform="matrix(1.2538 0 0 1.862 62.816 -373.23)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga75}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 235.38H29.8307V236.504H25.248z"
        />
        <path
          id="ups1_1b_load1_3"
          transform="matrix(1.2538 0 0 1.862 62.816 -373.23)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga75full}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 235.38H29.8307V236.504H25.248z"
        />
        <path
          id="ups1_1b_load1_2"
          transform="matrix(1.2538 0 0 1.862 62.816 -372.9)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga50}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 236.97H29.8307V238.094H25.248z"
        />
        <path
          id="ups1_1b_load1_2-1"
          transform="matrix(1.2538 0 0 1.862 62.816 -372.9)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga50full}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 236.97H29.8307V238.094H25.248z"
        />
        <path
          id="ups1_1b_load1_1"
          transform="matrix(1.2538 0 0 1.862 62.816 -373.56)"
          filter="url(#filter1671)"
          className = {Animacion.Carga25}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 239.09H29.8307V240.214H25.248z"
        />
        <path
          id="ups1_1b_load1_1-1"
          transform="matrix(1.2538 0 0 1.862 62.816 -373.56)"
          filter="url(#filter1671)"
          className = {Animacion.Carga25full}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 239.09H29.8307V240.214H25.248z"
        />
        <path
          id="ups1_1b_load2_4"
          transform="matrix(1.2538 0 0 1.862 77.412 -373.56)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga100}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 233.79H29.8307V234.914H25.248z"
        />
        <path
          id="ups1_1b_load2_4-1"
          transform="matrix(1.2538 0 0 1.862 77.412 -373.56)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga100full}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 233.79H29.8307V234.914H25.248z"
        />
        <path
          id="ups1_1b_load2_3"
          transform="matrix(1.2538 0 0 1.862 77.412 -373.23)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga75}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 235.38H29.8307V236.504H25.248z"
        />
        <path
          id="ups1_1b_load2_3-1"
          transform="matrix(1.2538 0 0 1.862 77.412 -373.23)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga75full}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 235.38H29.8307V236.504H25.248z"
        />
        <path
          id="ups1_1b_load2_2"
          transform="matrix(1.2538 0 0 1.862 77.412 -372.9)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga50}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 236.97H29.8307V238.094H25.248z"
        />
        <path
          id="ups1_1b_load2_2-1"
          transform="matrix(1.2538 0 0 1.862 77.412 -372.9)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga50full}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 236.97H29.8307V238.094H25.248z"
        />
        <path
          id="ups1_1b_load2_1"
          transform="matrix(1.2538 0 0 1.862 77.412 -373.56)"
          fill="#168498"
          filter="url(#filter1671)"
          className = {Animacion.Carga25}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 239.09H29.8307V240.214H25.248z"
        />
         <path
          id="ups1_1b_load2_1-1"
          transform="matrix(1.2538 0 0 1.862 77.412 -373.56)"
          fill="#168498"
          filter="url(#filter1671)"
          className = {Animacion.Carga25full}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 239.09H29.8307V240.214H25.248z"
        />
        <path
          id="ups1_1b_load3_4"
          transform="matrix(1.2538 0 0 1.862 91.345 -373.56)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga100}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 233.79H29.8307V234.914H25.248z"
        />
        <path
          id="ups1_1b_load3_4-1"
          transform="matrix(1.2538 0 0 1.862 91.345 -373.56)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga100full}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 233.79H29.8307V234.914H25.248z"
        />
        <path
          id="ups1_1b_load3_3"
          transform="matrix(1.2538 0 0 1.862 91.345 -373.23)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga75}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 235.38H29.8307V236.504H25.248z"
        />
        <path
          id="ups1_1b_load3_3-1"
          transform="matrix(1.2538 0 0 1.862 91.345 -373.23)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga75full}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 235.38H29.8307V236.504H25.248z"
        />
        <path
          id="ups1_1b_load3_2"
          transform="matrix(1.2538 0 0 1.862 91.345 -372.9)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga50}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 236.97H29.8307V238.094H25.248z"
        />
        <path
          id="ups1_1b_load3_2-1"
          transform="matrix(1.2538 0 0 1.862 91.345 -372.9)"
          fill="none"
          filter="url(#filter1671)"
          className = {Animacion.Carga50full}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 236.97H29.8307V238.094H25.248z"
        />
        <path
          id="ups1_1b_load3_1"
          transform="matrix(1.2538 0 0 1.862 91.345 -373.56)"
          fill="#168498"
          filter="url(#filter1671)"
          className = {Animacion.Carga25}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 239.09H29.8307V240.214H25.248z"
        />
        <path
          id="ups1_1b_load3_1-1"
          transform="matrix(1.2538 0 0 1.862 91.345 -373.56)"
          fill="#168498"
          filter="url(#filter1671)"
          className = {Animacion.Carga25full}
          strokeWidth={0.17184}
          stroke="#0ceef8"
          d="M25.248 239.09H29.8307V240.214H25.248z"
        />
        <text
          id="text16384-0-3-4-8"
          transform="scale(.94035 1.0634)"
          x={73.342178}
          y={18.909191}
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
          strokeOpacity={0.53395}
          strokeWidth={0.776}
          wordSpacing={0}
        >
          <tspan
            id="tspan16382-0-9-0-0"
            x={73.342178}
            y={18.909191}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeOpacity={0.53395}
            strokeWidth={0.776}
          >
            {"GENERAL ELECTRIC"}
          </tspan>
        </text>
        <path
          id="path1617"
          d="M43.368 52.601h21.164"
          fill="none"
          className = {Conexion.Entrada}
          strokeWidth={0.9}
          stroke="#0ceef8"
        />
        <path
          id="path11248-7"
          d="M53.952 52.599l-3.324 1.919V50.68z"
          fillOpacity={0.99667}
          fill="#009898"
          className = {Animacion.Entrada}
          opacity={0.999}
          paintOrder="markers fill stroke"
          strokeLinecap="square"
          strokeWidth={0.44417668000000005}
          stroke="#0becf7"
        />
        <path
          id="path1617-6-1"
          d="M95.805 52.668h16.114"
          fill="none"
          className = {Conexion.Inversor}
          strokeWidth={0.9}
          stroke="#0ceef8"
        />
        <path
          id="path11248-7-6"
          d="M106.096 52.599l-3.324 1.919V50.68z"
          fillOpacity={0.99667}
          fill="#009898"
          className = {Animacion.Inversor }
          opacity={0.999}
          paintOrder="markers fill stroke"
          strokeLinecap="square"
          strokeWidth={0.44417668000000005}
          stroke="#0bf0f7"
        />
        <path
          id="path12231"
          d="M106.89 37.189H88.297v6.348H43.711"
          fill="none"
          className = {Conexion.Bypass}
          strokeWidth={0.55}
          stroke="#0bedf9"
        />
        <path
          id="path12233"
          d="M110.53 37.189h14.299v14.9"
          fill="none"
          //className = {Conexion.Bypass}
          strokeWidth={0.55}
          stroke="#999"
        />
        <path
          id="path11248-7-6-4-7"
          d="M124.85 46.939l-1.919-3.324h3.838z"
          fillOpacity={0.99667}
          className = {Animacion.Bypass}
          opacity={0.999}
          paintOrder="markers fill stroke"
          strokeLinecap="square"
          strokeWidth={0.4442}
          stroke="#0bf0f7"
        />
        //<path
          //id="path11248-7-6-8-8"
          //d="M120.196 37.259l-3.324 1.919V35.34z"
          //fillOpacity={0.99667}
          //className = {Animacion.Bypass}
          //opacity={0.999}
          //paintOrder="markers fill stroke"
          //strokeLinecap="square"
          //strokeWidth={0.44417668000000005}
          //stroke="#0bf0f7"
        />
        <path
          id="path3200"
          d="M43.712 43.585h55.757"
          fill="none"
          className = {Conexion.Entrada}
          strokeWidth={0.591}
          stroke="#0ceef8"
        />
        <path
          id="path11248"
          d="M53.95 43.449l-3.323 1.919V41.53z"
          fillOpacity={0.99667}
          fill="#009898"
          className = {Animacion.Entrada}
          opacity={0.999}
          paintOrder="markers fill stroke"
          strokeLinecap="square"
          strokeWidth={0.44417668000000005}
          stroke="#0bf0f7"
        />
        <path
          id="stat_inv"
          fill="#168498"
          className = {Estados.Inverter}
          strokeWidth={0.31562}
          stroke="#0ceef8"
          d="M89.178 51.337H93.3974V53.6152H89.178z"
        />
        <path
          id="stat_rec"
          fill="#168498"
          className = {Estados.Rectifier}
          strokeWidth={0.31562}
          stroke="#0ceef8"
          d="M66.616 51.268H70.83539999999999V53.5462H66.616z"
        />    
        <path
          id="stat_rec-1"
          fill="#168498"
          className = {Alarmas.Rectifierbox}
          strokeWidth={0.31562}
          stroke="#0ceef8"
          d="M66.616 51.268H70.83539999999999V53.5462H66.616z"
        />   
        <path
          id="path1607"
          d="M101.27 41.915h5.204v3.22h-4.77l-.432-.172z"
          fill="#099"
          className = {Estados.Bypass}
          strokeWidth=".32924px"
          stroke="#0ceef8"
        />
        <path
          id="path1649"
          d="M75.131 68.218h9.757"
          fill="none"
          className = {Estados.Battery}
          strokeWidth={0.82751}
          stroke="#0ceef8"
        />
        <path
          id="path1651"
          d="M77.083 69.828h5.962"
          fill="none"
          className = {Estados.Battery}
          strokeWidth={0.82751}
          stroke="#0ceef8"
        />
        <path
          id="path1653"
          d="M75.24 71.438h9.431"
          fill="none"
          className = {Estados.Battery}
          strokeWidth={0.82751}
          stroke="#0ceef8"
        />
        <path
          id="path1655"
          d="M76.866 73.048h6.18"
          fill="none"
          className = {Estados.Battery}
          strokeWidth={0.82751}
          stroke="#0ceef8"
        />
        <path
          id="path1649-1"
          d="M75.131 68.218h9.757"
          fill="none"
          className = {Conexion.Rectificador}
          strokeWidth={0.82751}
          stroke="#0ceef8"
        />
        <path
          id="path1651-1"
          d="M77.083 69.828h5.962"
          fill="none"
          className = {Conexion.Rectificador}
          strokeWidth={0.82751}
          stroke="#0ceef8"
        />
        <path
          id="path1653-1"
          d="M75.24 71.438h9.431"
          fill="none"
          className = {Conexion.Rectificador}
          strokeWidth={0.82751}
          stroke="#0ceef8"
        />
        <path
          id="path1655-1"
          d="M76.866 73.048h6.18"
          fill="none"
          className = {Conexion.Rectificador}
          strokeWidth={0.82751}
          stroke="#0ceef8"
        />
        <path
          id="path1643"
          d="M79.816 52.279v15.939"
          fill="none"
          className = {Conexion.Bateria}
          strokeWidth=".32924px"
          stroke="#0ceef8"
        />
        <path
          id="path1643-1"
          d="M79.816 52.279v15.939"
          fill="none"
          className = {Conexion.Rectificador}
          strokeWidth=".32924px"
          stroke="#0ceef8"
        />
         
        <path
          id="path11248-7-6-4-7-1"
          d="M79.803 60.6l-1.919-3.324h3.838z"
          fillOpacity={0.99667}
          className = {Animacion.CargadorOn}
          opacity={0.9}
          paintOrder="markers fill stroke"
          strokeLinecap="square"
          strokeWidth={0.4442}
          stroke="#0bf0f7"
        />
        <path
          id="path11248-8"
          d="M79.803 60.541l1.919 3.324h-3.838z"
          fillOpacity={0.99667}
          fill="#009898"
          className = {Animacion.CargadorOff}
          opacity={0.999}
          paintOrder="markers fill stroke"
          strokeLinecap="square"
          strokeWidth={0.4442}
          stroke=""//#0bf0f7"
        />
        <path
          id="path1617-6-1"
          d="M73.261 52.515h13.835"
          fill="none"
          className = {Conexion.Bateria}
          strokeWidth={0.9}
          stroke="#0ceef8"
          //opacity={0}
        />
        <path
          id="path1617-6"
          d="M73.261 52.515h13.835"
          fill="none"
          className = {Conexion.Rectificador}
          strokeWidth={0.9}
          stroke="#0ceef8"
          //opacity={0}
        />
        <path
          id="path3202"
          d="M108.01 43.51h3.828v8.765"
          fill="none"
          className = {Conexion.Bypass}
          strokeWidth={0.591}
          stroke="#0ceef8"
        />
        <path
          id="path1617-6-1-2"
          d="M124.8 52.668h8.695"
          fill="none"
          className = {Conexion.Salida}
          strokeWidth={0.9}
          stroke="#0ceef8"
        />
        <path
          id="pass1-0"
          transform="matrix(.80344 .59539 -.57908 .81527 0 0)"
          fillRule="evenodd"
          fill="#999"
          className = {Conexion.Q4off}
          paintOrder="markers stroke fill"
          strokeWidth={0.29107}
          stroke="#999"
          d="M125.16 -30.849H125.64513V-26.846600000000002H125.16z"
        />
        <path
          id="path12235-8"
          d="M120.09 52.668h-3.644"
          fill="none"
          className = {Conexion.Q4on}
          strokeWidth={0.9}
          stroke="#999"
          opacity={0}
        />
        <path
          id="path11248-7-6-4"
          d="M133.906 52.599l-3.324 1.919V50.68z"
          fillOpacity={0.99667}
          fill="#009898"
          className = {Animacion.Salida}
          opacity={0.999}
          paintOrder="markers fill stroke"
          strokeLinecap="square"
          strokeWidth={0.44417668000000005}
          stroke="#0bf0f7"
        />
        <path
          id="path11248-7-6-2"
          d="M120.78 52.599l-3.324 1.919V50.68z"
          fillOpacity={0.99667}
          fill="#009898"
          className = {Animacion.Salida}
          opacity={0.999}
          paintOrder="markers fill stroke"
          strokeLinecap="square"
          strokeWidth={0.44418}
          stroke="#0bf0f7"
        />
      </g>
    )
}


