import React from 'react'

type DatosGenerales = {
  Nombre: string;
  Fase: string;
  Sistema: string;
  Marca: string;
  Modelo: string;
  Ubicacion: string;
};

type Compresor= {
  EstadoComp: string;
  TemperaturaAceite: number;
  PresionSuccion: number;
  PresionDescarga: number;
  HorasFunc: number;
};

type Alarmas = {
  AlarmaGeneral: string;
  CodAlarmaS1: string;
  CodAlarmaS2: string;
};

type Principal = {
  Estado: string;
  Estado_class: string;
  Botón: string;
  TemperaturaSuministro: number;
  TemperaturaRetorno: number;
  Corriente: number;
};

export interface DataChiller  {
  DatosGenerales: DatosGenerales;
  Compresor1: Compresor;
  Compresor2: Compresor;
  Alarmas: Alarmas;
  Principal: Principal;
}

//export interface DataChiller {
//  Data: Chiller
//}

export const Variables = ({ DatosGenerales,Compresor1, Compresor2, Alarmas, Principal }: DataChiller) => {
  return (
    <g id="layer4">
      <g id="g2057">
        <text
          id="fase"
          transform="scale(.98529 1.0149)"
          x={339.27884}
          y={33.011951}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          letterSpacing={0}
          strokeWidth={0.47057}
          wordSpacing={0}
        >
          <tspan
            id="tspan3618"
            x={339.27884}
            y={33.011951}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            strokeWidth={0.47057}
          >
            { DatosGenerales.Fase }
          </tspan>
        </text>
        <text
          id="sistema"
          transform="scale(.98529 1.0149)"
          x={339.35254}
          y={41.20084}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          letterSpacing={0}
          strokeWidth={0.47057}
          wordSpacing={0}
        >
          <tspan
            id="tspan3618-0"
            x={339.35254}
            y={41.20084}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            { DatosGenerales.Sistema }
          </tspan>
        </text>
        <text
          id="marca"
          transform="scale(.98529 1.0149)"
          x={339.82111}
          y={49.664249}
          style={{ lineHeight: 1.25 }}
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
            x={339.82111}
            y={49.664249}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            strokeWidth={0.47057}
          >
            { DatosGenerales.Marca }
          </tspan>
        </text>
        <text
          id="modelo"
          transform="scale(.98529 1.0149)"
          x={339.82111}
          y={57.795811}
          style={{ lineHeight: 1.25 }}
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
            x={339.82111}
            y={57.795811}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            strokeWidth={0.47057}
          >
            { DatosGenerales.Modelo }
          </tspan>
        </text>
        <text
          id="ubicacion"
          transform="scale(.98529 1.0149)"
          x={339.7384}
          y={66.425209}
          style={{ lineHeight: 1.25 }}
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
            x={339.7384}
            y={66.425209}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            { DatosGenerales.Ubicacion }
          </tspan>
        </text>
        <text
          id="temp_aceite1"
          transform="scale(.98529 1.0149)"
          x={475.83405}
          y={65.879517}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          letterSpacing={0}
          strokeWidth={0.47057}
          wordSpacing={0}
        >
          <tspan
            id="tspan11013"
            x={475.83405}
            y={65.879517}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            { Compresor1.TemperaturaAceite} °C
          </tspan>
        </text>
        <text
          id="pres_succ1"
          transform="scale(.98529 1.0149)"
          x={475.88367}
          y={74.743065}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          letterSpacing={0}
          strokeWidth={0.47057}
          wordSpacing={0}
        >
          <tspan
            id="tspan11021"
            x={475.88367}
            y={74.743065}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            { Compresor1.PresionSuccion } BAR
          </tspan>
        </text>
        <text
          id="pres_des1"
          transform="scale(.98529 1.0149)"
          x={475.90021}
          y={83.606613}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          letterSpacing={0}
          strokeWidth={0.47057}
          wordSpacing={0}
        >
          <tspan
            id="tspan11025"
            x={475.90021}
            y={83.606613}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            { Compresor1.PresionDescarga } BAR
          </tspan>
        </text>
        <text
          id="horas_c1"
          transform="scale(.98529 1.0149)"
          x={475.83405}
          y={92.991547}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          letterSpacing={0}
          strokeWidth={0.47057}
          wordSpacing={0}
        >
          <tspan
            id="tspan11029"
            x={475.83405}
            y={92.991547}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            { Compresor1.HorasFunc } H
          </tspan>
        </text>
        <text
          id="temp_aceite2"
          transform="scale(.98529 1.0149)"
          x={475.83405}
          y={129.18845}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          letterSpacing={0}
          strokeWidth={0.47057}
          wordSpacing={0}
        >
          <tspan
            id="tspan11033"
            x={475.83405}
            y={129.18845}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            { Compresor2.TemperaturaAceite } °C
          </tspan>
        </text>
        <text
          id="pres_succ2"
          transform="scale(.98529 1.0149)"
          x={475.88367}
          y={138.35187}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          letterSpacing={0}
          strokeWidth={0.47057}
          wordSpacing={0}
        >
          <tspan
            id="tspan11037"
            x={475.88367}
            y={138.35187}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            { Compresor2.PresionSuccion } BAR
          </tspan>
        </text>
        <text
          id="pres_des2"
          transform="scale(.98529 1.0149)"
          x={475.90021}
          y={147.21529}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          letterSpacing={0}
          strokeWidth={0.47057}
          wordSpacing={0}
        >
          <tspan
            id="tspan11041"
            x={475.90021}
            y={147.21529}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            { Compresor2.PresionDescarga } BAR
          </tspan>
        </text>
        <text
          id="horas_c2"
          transform="scale(.98529 1.0149)"
          x={475.83405}
          y={156.60008}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          letterSpacing={0}
          strokeWidth={0.47057}
          wordSpacing={0}
        >
          <tspan
            id="tspan11045"
            x={475.83405}
            y={156.60008}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            { Compresor2.HorasFunc } H
          </tspan>
        </text>
        <ellipse
          id="sys_on_c1"
          cx={472.79}
          cy={55.365}
          rx={2.5726}
          ry={2.4137}
          className={ Compresor1.EstadoComp }
          fillRule="evenodd"
          fill="#1bea77"
          opacity={0.88}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="ellipse10739"
          transform="matrix(.74208 0 0 .6085 143.54 32.893)"
          cx={444.15}
          cy={34.583}
          rx={1.8876}
          ry={1.5368}
          fillRule="evenodd"
          fill="#fff"
          filter="url(#filter2963-5)"
          opacity={0.592}
          paintOrder="markers stroke fill"
        />
        <text
          id="temp_sum"
          transform="scale(1.0508 .95161)"
          x={22.56381}
          y={50.691143}
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
          fontSize="9.8778px"
          fontWeight={700}
          letterSpacing={0}
          strokeWidth={0.28918}
          wordSpacing={0}
        >
          <tspan id="tspan1328" x={22.56381} y={50.691143}>
            { Principal.TemperaturaSuministro } °C
          </tspan>
        </text>
        <text
          id="temp_ret"
          transform="scale(1.0508 .95161)"
          x={211.39882}
          y={50.691143}
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
          fontSize="9.8778px"
          fontWeight={700}
          letterSpacing={0}
          strokeWidth={0.28918}
          wordSpacing={0}
        >
          <tspan id="tspan1352" x={211.39882} y={50.691143}>
            { Principal.TemperaturaRetorno } °C
          </tspan>
        </text>
        <text
          id="curr"
          transform="scale(1.0508 .95161)"
          x={209.29778}
          y={132.56357}
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
          fontSize="9.8778px"
          fontWeight={700}
          letterSpacing={0}
          strokeWidth={0.28918}
          wordSpacing={0}
        >
          <tspan id="tspan1384" x={209.29778} y={132.56357}>
            { Principal.Corriente } A
          </tspan>
        </text>
        <text
          id="st"
          x={225.34978}
          y={175.06361}
          style={{ lineHeight: 1.25 }}
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
            x={225.34978}
            y={175.06361}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.0556px"
            strokeWidth={0.26458}
          >
            { Principal.Estado }
          </tspan>
        </text>
        <g id="st2" transform="translate(.173 -1.422)" fill="#00990c">
          <path
            id="path15781"
            d="M213.68 169.15a5.861 5.861 0 00-4.066 1.662 5.7 5.7 0 00-1.684 4.01c0 1.484.62 2.96 1.684 4.01a5.86 5.86 0 004.066 1.662 5.861 5.861 0 004.066-1.662 5.7 5.7 0 001.684-4.01 5.7 5.7 0 00-1.684-4.01 5.86 5.86 0 00-4.066-1.662zm0 .835a5.03 5.03 0 013.475 1.42c.904.891 1.435 2.158 1.435 3.417s-.531 2.525-1.435 3.417a5.03 5.03 0 01-3.475 1.42 5.03 5.03 0 01-3.475-1.42c-.904-.892-1.435-2.159-1.435-3.417s.531-2.526 1.435-3.418a5.03 5.03 0 013.475-1.42z"
            className = {Principal.Botón}
          />
          <path
            id="path2489"
            transform="translate(123.93 125.48) scale(.14885)"
            d="M601.87 320.96c.063-1.312 2.784-1.358 2.69.07-.033.121 0 9.401 0 9.401-.347 1.078-2.153 1.292-2.713 0z"
            filter= "url(#filter2703)"
            className = {Principal.Botón}
          />
          <path
            id="path2649"
            transform="translate(123.93 125.48) scale(.14885)"
            d="M597.57 325.63c1.697.335 1.59 1.335 1.404 2.364-1.343 1.49-2.998 2.762-2.868 5.287.434 2.218.972 4.389 3.417 5.673 2.376 1.244 4.814 1.155 6.562.177 1.888-1.079 3.769-3.085 3.728-5.85-.088-2.4-1.275-4.226-3.313-5.607.084-.983-.099-2.122 2.022-1.917 2.273 1.96 4.04 4.21 3.95 7.536 0 3.557-1.8 6.427-5.653 8.51-2.77 1.344-5.445.865-8.09-.167-2.57-1.48-5.569-3.356-5.217-9.529.748-3.306 2.154-5.363 4.058-6.477z"
            filter= "url(#filter2663)"
            className = {Principal.Botón}
          />
        </g>
        <path
          id="estado_eq"
          fillRule="evenodd"
          fill="url(#linearGradient4474)"
          className = {Principal.Estado_class}
          strokeWidth={0.26219}
          d="M101.52 11.121H159.555V29.171999999999997H101.52z"
        />
        <text
          id="nom_off"
          x={109.98389}
          y={23.120382}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="sans-serif"
          fontSize="9.71px"
          letterSpacing={0}
          strokeWidth={0.36412}
          wordSpacing={0}
        >
          <tspan
            id="tspan1938-4"
            x={109.98389}
            y={23.120382}
            fill="#000"
            fontFamily="Franklin Gothic Medium"
            fontSize="11.289px"
            strokeWidth={0.36412}
          >
            { DatosGenerales.Nombre }
          </tspan>
        </text>
        <text
          id="nom_on"
          x={109.98389}
          y={23.649549}
          style={{ lineHeight: 1.25 }}
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
            x={109.98389}
            y={23.649549}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="11.289px"
            strokeWidth={0.36412}
          >
            { DatosGenerales.Nombre }
          </tspan>
        </text>
        <g id="g1414" fillRule="evenodd" paintOrder="markers stroke fill">
          <ellipse
            id="alm_gen"
            cx={366.69}
            cy={111.49}
            rx={2.5726}
            ry={2.4137}
            className={ Alarmas.AlarmaGeneral }
            fill="#1bea77"
            opacity={0.88}
          />
          <ellipse
            id="path2448-1"
            transform="matrix(.74208 0 0 .6085 37.099 89.015)"
            cx={444.15}
            cy={34.583}
            rx={1.8876}
            ry={1.5368}
            fill="#fff"
            filter="url(#filter2963)"
            opacity={0.592}
          />
        </g>
        <g
          id="g1418"
          transform="translate(1.105)"
          fillRule="evenodd"
          paintOrder="markers stroke fill"
        >
          <ellipse
            id="cod_alarm_c1"
            cx={365.58}
            cy={136.82}
            rx={2.5726}
            ry={2.4137}
            className={ Alarmas.CodAlarmaS1 }
            fill="#1bea77"
            opacity={0.88}
          />
          <ellipse
            id="ellipse10707"
            transform="matrix(.74208 0 0 .6085 35.994 114.34)"
            cx={444.15}
            cy={34.583}
            rx={1.8876}
            ry={1.5368}
            fill="#fff"
            filter="url(#filter2963)"
            opacity={0.592}
          />
        </g>
        <ellipse
          id="cod_alarm_c2"
          cx={366.69}
          cy={164.53}
          rx={2.5726}
          ry={2.4137}
          className={ Alarmas.CodAlarmaS2 }
          fillRule="evenodd"
          fill="#999"
          opacity={0.88}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="ellipse10711"
          transform="matrix(.74208 0 0 .6085 37.091 142.05)"
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
          id="sys_on_c1-9"
          cx={472.79}
          cy={119.42}
          rx={2.5726}
          ry={2.4137}
          className={ Compresor2.EstadoComp }
          fillRule="evenodd"
          fill="#1bea77"
          opacity={0.88}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="ellipse10739-4"
          transform="matrix(.74208 0 0 .6085 143.54 96.952)"
          cx={444.15}
          cy={34.583}
          rx={1.8876}
          ry={1.5368}
          fillRule="evenodd"
          fill="#fff"
          filter="url(#filter2963-5-3)"
          opacity={0.592}
          paintOrder="markers stroke fill"
        />
      </g>
    </g>
  )
}