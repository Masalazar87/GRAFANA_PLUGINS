import React from 'react';

type DatosGenerales = {
    Nombre: string;
};

type Parametros = {
    TempSum: number;
    TempRet: number;
    TempRoom: number;
    HumRel: number;
    EstadoValv: string;
    HorasFunc: number;
    EstadoFan: string;
    PorcFuncFan: number;
};

type Valvulas ={
    R1ValvRet: string;
    S1ValvSum: string;
    R2ValvRet: string;
    S2ValvSum: string;
};

type Indicadores = {
    Estado: string;
    Alarma: string;
    Mant: string;
};

export interface DataGrupaluma {
    DatosGenerales: DatosGenerales;
    Parametros: Parametros;
    Valvulas: Valvulas;
    Indicadores: Indicadores;
}

export const Variables = ({ DatosGenerales, Parametros, Valvulas, Indicadores }: DataGrupaluma) => {
return (
<g id="layer4">
        <ellipse
          id="uma5_st"
          cx={104.55}
          cy={20.055}
          rx={3.6661}
          ry={3.5553}
          fillRule="evenodd"
          fill="#17ce69"
          className = {Indicadores.Estado}
          paintOrder="markers stroke fill"
        />
        <circle
          id="path4259-6-0"
          transform="matrix(.19544 0 0 .1009 43.53 8.617)"
          cx={312.73999}
          cy={94.163002}
          r={11.974}
          fillOpacity={0.99608}
          fillRule="evenodd"
          fill="#fff"
          filter="url(#filter4280-3)"
          opacity={0.65}
          paintOrder="markers stroke fill"
        />
        <text
          id="lbl1-3-8"
          transform="scale(.74068 1.3501)"
          x={67.82943}
          y={18.975962}
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
          fontSize="6.8324px"
          letterSpacing={0}
          strokeWidth={0.46585}
          wordSpacing={0}
        >
          <tspan id="tspan6398" x={67.82943} y={18.975962}>
            {DatosGenerales.Nombre}
          </tspan>
        </text>
        <ellipse
          id="uma5_alm"
          cx={118.09}
          cy={20.055}
          rx={3.6661}
          ry={3.5553}
          fillRule="evenodd"
          fill="#4d4d4d"
          className = {Indicadores.Alarma}
          paintOrder="markers stroke fill"
        />
        <circle
          id="path4259-6-6-1"
          transform="matrix(.19544 0 0 .1009 57.07 8.617)"
          cx={312.73999}
          cy={94.163002}
          r={11.974}
          /*cx={312.74}
          cy={94.163}
          r={11.974}*/
          fillOpacity={0.99608}
          fillRule="evenodd"
          fill="#fff"
          filter="url(#filter4280-8-4)"
          opacity={0.65}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="uma5_mnt"
          cx={131.63}
          cy={20.055}
          rx={3.6661}
          ry={3.5553}
          fillRule="evenodd"
          fill="#4d4d4d"
          className = {Indicadores.Mant}
          paintOrder="markers stroke fill"
        />
        <circle
          id="path4259-6-2-2"
          transform="matrix(.19544 0 0 .1009 70.61 8.617)"
          cx={312.73999}
          cy={94.163002}
          r={11.974}
          fillOpacity={0.99608}
          fillRule="evenodd"
          fill="#fff"
          filter="url(#filter4280-5-8)"
          opacity={0.65}
          paintOrder="markers stroke fill"
        />
        <text
          id="uma5_tsum"
          transform="scale(.70565 1.4171)"
          x={106.13559}
          y={42.488434}
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
          strokeWidth={0.44381}
          wordSpacing={0}
        >
          <tspan
            id="tspan1256-80-45-7-5-8"
            x={106.13559}
            y={42.488434}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.2917px"
            strokeWidth={0.44381}
          >
            {Parametros.TempSum} °C
          </tspan>
        </text>
        <text
          id="uma5_tret"
          transform="scale(.70565 1.4171)"
          x={106.06324}
          y={53.335205}
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
          strokeWidth={0.44381}
          wordSpacing={0}
        >
          <tspan
            id="tspan1256-80-3-2-1-3-6"
            x={106.06324}
            y={53.335205}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.2917px"
            strokeWidth={0.44381}
          >
            {Parametros.TempRet} °C
          </tspan>
        </text>
        <text
          id="uma5_troom"
          transform="scale(.70565 1.4171)"
          x={106.06324}
          y={64.163879}
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
          strokeWidth={0.44381}
          wordSpacing={0}
        >
          <tspan
            id="tspan1256-80-3-8-47-8-2-7"
            x={106.06324}
            y={64.163879}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.2917px"
            strokeWidth={0.44381}
          >
            {Parametros.TempRoom} °C
          </tspan>
        </text>
        <text
          id="uma5_hum_rel"
          transform="scale(.70565 1.4171)"
          x={106.09684}
          y={74.97448}
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
          strokeWidth={0.44381}
          wordSpacing={0}
        >
          <tspan
            id="tspan1256-80-3-8-4-8-3-0-5"
            x={106.09684}
            y={74.97448}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.2917px"
            strokeWidth={0.44381}
          >
            {Parametros.HumRel} %
          </tspan>
        </text>
        <text
          id="uma5_st_valv"
          transform="scale(.70565 1.4171)"
          x={106.08392}
          y={85.803162}
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
          strokeWidth={0.44381}
          wordSpacing={0}
        >
          <tspan
            id="tspan1256-80-3-8-8-46-1-1-3"
            x={106.08392}
            y={85.803162}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.2917px"
            strokeWidth={0.44381}
          >
            {Parametros.EstadoValv}
          </tspan>
        </text>
        <text
          id="uma5_aper_valsum-SIS1"
          transform="scale(.70565 1.4171)"
          x={205.26299}
          y={42.488434}
          style={{
            lineHeight: 1.25,
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          xmlSpace="preserve"
          fontSize="5.2917px"
          fontFamily="Franklin Gothic Medium"
          letterSpacing={0}
          wordSpacing={0}
          fill="#fff"
          strokeWidth={0.44381}
        >
          <tspan
            id="tspan1256-80-8-2-5-2-2"
            x={205.26299}
            y={42.488434}
            style={{
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal"
            }}
            fontSize="5.2917px"
            fontFamily="Franklin Gothic Medium"
            fill="#fff"
            strokeWidth={0.44381}
          >
            {Valvulas.S1ValvSum}
          </tspan>
        </text>
        <text
          id="uma5_aper_valret-SIS1"
          transform="scale(.70565 1.4171)"
          x={205.26299}
          y={53.317116}
          style={{
            lineHeight: 1.25,
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          xmlSpace="preserve"
          fontSize="5.2917px"
          fontFamily="Franklin Gothic Medium"
          letterSpacing={0}
          wordSpacing={0}
          fill="#fff"
          strokeWidth={0.44381}
        >
          <tspan
            id="tspan1256-80-3-86-0-5-7-3"
            x={205.26299}
            y={53.317116}
            style={{
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal"
            }}
            fontSize="5.2917px"
            fontFamily="Franklin Gothic Medium"
            fill="#fff"
            strokeWidth={0.44381}
          >
            {Valvulas.R1ValvRet}
          </tspan>
        </text>
        <text
          id="uma5_aper_valsum-SIS2"
          transform="scale(.70565 1.4171)"
          x={220.26299}
          y={42.488434}
          style={{
            lineHeight: 1.25,
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          xmlSpace="preserve"
          fontSize="5.2917px"
          fontFamily="Franklin Gothic Medium"
          letterSpacing={0}
          wordSpacing={0}
          fill="#fff"
          strokeWidth={0.44381}
        >
          <tspan
            id="tspan1256-80-8-2-5-2-2"
            x={220.26299}
            y={42.488434}
            style={{
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal"
            }}
            fontSize="5.2917px"
            fontFamily="Franklin Gothic Medium"
            fill="#fff"
            strokeWidth={0.44381}
          >
            {Valvulas.S2ValvSum}
          </tspan>
        </text>
        <text
          id="uma5_aper_valret-SIS2"
          transform="scale(.70565 1.4171)"
          x={220.26299}
          y={53.317116}
          style={{
            lineHeight: 1.25,
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          xmlSpace="preserve"
          fontSize="5.2917px"
          fontFamily="Franklin Gothic Medium"
          letterSpacing={0}
          wordSpacing={0}
          fill="#fff"
          strokeWidth={0.44381}
        >
          <tspan
            id="tspan1256-80-3-86-0-5-7-3"
            x={220.26299}
            y={53.317116}
            style={{
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal"
            }}
            fontSize="5.2917px"
            fontFamily="Franklin Gothic Medium"
            fill="#fff"
            strokeWidth={0.44381}
          >
            {Valvulas.R2ValvRet}
          </tspan>
        </text>
        <text
          id="uma5_horfunc"
          transform="scale(.70565 1.4171)"
          x={205.12346}
          y={64.163887}
          style={{
            lineHeight: 1.25,
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          xmlSpace="preserve"
          fontSize="5.2917px"
          fontFamily="Franklin Gothic Medium"
          letterSpacing={0}
          wordSpacing={0}
          fill="#fff"
          strokeWidth={0.44381}
        >
          <tspan
            id="tspan1256-80-3-8-7-7-7-7-6"
            x={205.12346}
            y={64.163887}
            style={{
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal"
            }}
            fontSize="5.2917px"
            fontFamily="Franklin Gothic Medium"
            fill="#fff"
            strokeWidth={0.44381}
          >
            {Parametros.HorasFunc} H
          </tspan>
        </text>
        <text
          id="uma5_stfan"
          transform="scale(.70565 1.4171)"
          x={205.28366}
          y={74.97448}
          style={{
            lineHeight: 1.25,
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          xmlSpace="preserve"
          fontSize="5.2917px"
          fontFamily="Franklin Gothic Medium"
          letterSpacing={0}
          wordSpacing={0}
          fill="#fff"
          strokeWidth={0.44381}
        >
          <tspan
            id="tspan1256-80-3-8-4-51-4-8-3-2"
            x={205.28366}
            y={74.97448}
            style={{
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal"
            }}
            fontSize="5.2917px"
            fontFamily="Franklin Gothic Medium"
            fill="#fff"
            strokeWidth={0.44381}
          >
            {Parametros.EstadoFan}
          </tspan>
        </text>
        <text
          id="uma5_por_funcfan"
          transform="scale(.70565 1.4171)"
          x={205.27849}
          y={85.803162}
          style={{
            lineHeight: 1.25,
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          xmlSpace="preserve"
          fontSize="5.2917px"
          fontFamily="Franklin Gothic Medium"
          letterSpacing={0}
          wordSpacing={0}
          fill="#fff"
          strokeWidth={0.44381}
        >
          <tspan
            id="tspan1256-80-3-8-8-38-8-8-1-4"
            x={205.27849}
            y={85.803162}
            style={{
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal"
            }}
            fontSize="5.2917px"
            fontFamily="Franklin Gothic Medium"
            fill="#fff"
            strokeWidth={0.44381}
          >
            {Parametros.PorcFuncFan} %
          </tspan>
        </text>
      </g>
    )
}