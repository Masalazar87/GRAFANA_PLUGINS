import React from 'react';

type ParametrosPrincipales ={
    Energia_total: number;
    Energia_sg: number;
    Energia_ti: number;
    Energia_ups: number;
    Energia_aacc: number;
    PUE: number;
    DCIE: number;
    costo_rack: number;
    Energia_rack: number;
};

export interface DataReporte {
    ParametrosPrincipales: ParametrosPrincipales;
}
    
export const Variables = ({ParametrosPrincipales}: DataReporte) => {

return (
<g
id="layer7"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
      >
        <text
          id="tmin"
          x={395.95575}
          y={202.34538}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.7611px"
          strokeWidth={0.28478}
        >
          <tspan
            id="tspan3239-1-9-7"
            x={395.95575}
            y={202.34538}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.7611px"
            strokeWidth={0.28478}
          >
            {"10\xB0"}
          </tspan>
        </text>
        <text
          id="tpro"
          x={432.78073}
          y={202.34492}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.7611px"
          strokeWidth={0.28478}
        >
          <tspan
            id="tspan3239-1-9-1"
            x={432.78073}
            y={202.34492}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.7611px"
            strokeWidth={0.28478}
          >
            {"21\xB0"}
          </tspan>
        </text>
        <text
          id="tmax"
          x={469.14563}
          y={202.34492}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.7611px"
          strokeWidth={0.28478}
        >
          <tspan
            id="tspan3239-1-9-9"
            x={469.14563}
            y={202.34492}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.7611px"
            strokeWidth={0.28478}
          >
            {"15\xB0"}
          </tspan>
        </text>
        <text
          id="hmin"
          x={395.03088}
          y={234.77939}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.7611px"
          strokeWidth={0.28478}
        >
          <tspan
            id="tspan3239-1-9-5"
            x={395.03088}
            y={234.77939}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.7611px"
            strokeWidth={0.28478}
          >
            {"50%"}
          </tspan>
        </text>
        <text
          id="hpro"
          x={431.15317}
          y={234.80592}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.7611px"
          strokeWidth={0.28478}
        >
          <tspan
            id="tspan3239-1-9-10"
            x={431.15317}
            y={234.80592}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.7611px"
            strokeWidth={0.28478}
          >
            {"74%"}
          </tspan>
        </text>
        <text
          id="hmax"
          x={467.69159}
          y={234.80592}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.7611px"
          strokeWidth={0.28478}
        >
          <tspan
            id="tspan3239-1-9-3"
            x={467.69159}
            y={234.80592}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.7611px"
            strokeWidth={0.28478}
          >
            {"64%"}
          </tspan>
        </text>
        <text
          id="pue"
          x={44.246849}
          y={183.47972}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-7-9"
            x={44.246849}
            y={183.47972}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "center"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
            textAnchor="middle"
          >
            {ParametrosPrincipales.PUE}
          </tspan>
        </text>
        <text
          id="dcie"
          x={122.18771}
          y={183.47972}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-7-9-2"
            x={122.18771}
            y={183.47972}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "center"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
            textAnchor="middle"
          >
            {ParametrosPrincipales.DCIE}%
          </tspan>
        </text>
        <text
          id="elec_gasto"
          x={86.910439}
          y={50.8242}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8"
            x={86.910439}
            y={50.8242}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
          >
            {"4527.93 $"}
          </tspan>
        </text>
        <text
          id="elec_consumo"
          x={179.60794}
          y={50.434822}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-1"
            x={179.60794}
            y={50.434822}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {ParametrosPrincipales.Energia_total}Kw/h
          </tspan>
        </text>
        <text
          id="ilu_gasto"
          x={35.524597}
          y={97.439201}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-2"
            x={35.524597}
            y={97.439201}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
          >
            {"4527.93 $"}
          </tspan>
        </text>
        <text
          id="ilu_consumo"
          x={127.16381}
          y={97.050064}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-1-7"
            x={127.16381}
            y={97.050064}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {ParametrosPrincipales.Energia_sg}Kw/h
          </tspan>
        </text>
        <text
          id="ups_gasto"
          x={5.0975118}
          y={143.4772}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4"
            x={5.0975118}
            y={143.4772}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
          >
            {"4527.93 $"}
          </tspan>
        </text>
        <text
          id="ups_consumo"
          x={97.26593}
          y={143.08755}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-1-6"
            x={97.26593}
            y={143.08755}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {ParametrosPrincipales.Energia_ups}Kw/h
          </tspan>
        </text>
        <text
          id="aacc_gasto"
          x={337.32474}
          y={50.8242}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-7"
            x={337.32474}
            y={50.8242}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
          >
            {"4527.93 $"}
          </tspan>
        </text>
        <text
          id="aacc_consumo"
          x={428.43484}
          y={50.434906}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-1-1"
            x={428.43484}
            y={50.434906}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {ParametrosPrincipales.Energia_aacc}Kw/h
          </tspan>
        </text>
        <text
          id="ti_gasto"
          x={390.53583}
          y={97.439201}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-8"
            x={390.53583}
            y={97.439201}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
          >
            {"4527.93 $"}
          </tspan>
        </text>
        <text
          id="ti_consumo"
          x={481.64594}
          y={97.049904}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-1-4"
            x={481.64594}
            y={97.049904}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {ParametrosPrincipales.Energia_ti}Kw/h
          </tspan>
        </text>
        <text
          id="ssgg_gasto"
          x={54.399288}
          y={323.7077}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8"
            x={54.399288}
            y={323.7077}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
          >
            {"4527.93 $"}
          </tspan>
        </text>
        <text
          id="ssgg_consumo"
          x={146.56699}
          y={323.31891}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-1-6-0"
            x={146.56699}
            y={323.31891}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"53775.93 Kw/h"}
          </tspan>
        </text>
        <text
          id="gen_gasto"
          x={54.399288}
          y={279.44141}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-9"
            x={54.399288}
            y={279.44141}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
          >
            {"4527.93 $"}
          </tspan>
        </text>
        <text
          id="gen_consumo"
          x={146.56723}
          y={279.05191}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-1-6-0-4"
            x={146.56723}
            y={279.05191}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"53775.93 Kw/h"}
          </tspan>
        </text>
        <text
          id="ti2_gasto"
          x={54.399288}
          y={379.66876}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-9-6"
            x={54.399288}
            y={379.66876}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
          >
            {"4527.93 $"}
          </tspan>
        </text>
        <text
          id="ti2_consumo"
          x={146.56699}
          y={379.27991}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-1-6-0-4-3"
            x={146.56699}
            y={379.27991}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"53775.93 Kw/h"}
          </tspan>
        </text>
        <text
          id="aacc2_gasto"
          x={350.59509}
          y={284.64902}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-9-0"
            x={350.59509}
            y={284.64902}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
          >
            {"4527.93 $"}
          </tspan>
        </text>
        <text
          id="aacc2_consumo"
          x={445.08252}
          y={284.25992}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-1-6-0-4-1"
            x={445.08252}
            y={284.25992}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"53775.93 Kw/h"}
          </tspan>
        </text>
        <text
          id="ups2_gasto"
          x={350.59528}
          y={343.7688}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-9-7"
            x={350.59528}
            y={343.7688}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
          >
            {"4527.93 $"}
          </tspan>
        </text>
        <text
          id="ups2_consumo"
          x={445.08301}
          y={343.37991}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-1-6-0-4-5"
            x={445.08301}
            y={343.37991}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"53775.93 Kw/h"}
          </tspan>
        </text>
        <text
          id="hot_gasto"
          x={399.88214}
          y={151.33698}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-8-3"
            x={399.88214}
            y={151.33698}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
          >
            {"4527.93 $"}
          </tspan>
        </text>
        <text
          id="hot_consumo"
          x={490.99225}
          y={150.94791}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-1-4-7"
            x={490.99225}
            y={150.94791}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"53775.93 Kw/h"}
          </tspan>
        </text>
        <text
          id="rack_gasto"
          x={44.247246}
          y={226.82626}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-7-9-9"
            x={44.247246}
            y={226.82626}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "center"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
            textAnchor="middle"
          >
            {ParametrosPrincipales.costo_rack}
          </tspan>
        </text>
        <text
          id="rack_consumo"
          x={122.18771}
          y={226.82626}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-7-9-2-9"
            x={122.18771}
            y={226.82626}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "center"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            strokeWidth={0.26458}
            textAnchor="middle"
          >
            {ParametrosPrincipales.Energia_rack}%
          </tspan>
        </text>
        <text
          id="aacc_per"
          transform="rotate(52.605)"
          x={417.19467}
          y={-32.585976}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="6.35px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-7-9-7-9-2-97"
            x={417.19467}
            y={-32.585976}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "center"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.26458}
            textAnchor="middle"
          >
            {"1.87"}
          </tspan>
        </text>
        <text
          id="ups_per"
          transform="rotate(-54.462)"
          x={-130.14211}
          y={446.5238}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="6.35px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-7-9-7-9-2-9"
            x={-130.14211}
            y={446.5238}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "center"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.26458}
            textAnchor="middle"
          >
            {"1.87"}
          </tspan>
        </text>
        <text
          id="ti_per"
          transform="rotate(40.971)"
          x={417.39465}
          y={137.86365}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="6.35px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-7-9-7-9-2"
            x={417.39465}
            y={137.86365}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "center"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.26458}
            textAnchor="middle"
          >
            {"1.87"}
          </tspan>
        </text>
        <text
          id="ssgg_per"
          transform="rotate(-67.339)"
          x={-216.15892}
          y={321.33813}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="6.35px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-7-9-7-9"
            x={-216.15892}
            y={321.33813}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "center"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.26458}
            textAnchor="middle"
          >
            {"1.87"}
          </tspan>
        </text>
        <text
          id="gen_per"
          transform="rotate(-20.345)"
          x={115.34983}
          y={365.38867}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontSize="6.35px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-7-9-7"
            x={115.34983}
            y={365.38867}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "center"
            }}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.26458}
            textAnchor="middle"
          >
            {"1.87"}
          </tspan>
        </text>
        <text
          id="ssgg_gasto1"
          x={86.397133}
          y={333.05289}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-0"
            x={86.397133}
            y={333.05289}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {"8.9k$"}
          </tspan>
        </text>
        <text
          id="ssgg_gasto2"
          x={86.397133}
          y={338.19995}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-4"
            x={86.397133}
            y={338.19995}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {"8.9k$"}
          </tspan>
        </text>
        <text
          id="ssgg_gasto3"
          x={86.397133}
          y={343.34695}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-9-1"
            x={86.397133}
            y={343.34695}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {"8.9k$"}
          </tspan>
        </text>
        <text
          id="ssgg_gasto4"
          x={86.397133}
          y={348.49393}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-1-9"
            x={86.397133}
            y={348.49393}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {"8.9k$"}
          </tspan>
        </text>
        <text
          id="ssgg_consumo1"
          x={143.78368}
          y={332.7973}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25,
            textAlign: "end"
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-0-3"
            x={143.78368}
            y={332.7973}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"158.6 kw/h"}
          </tspan>
        </text>
        <text
          id="ssgg_consumo2"
          x={143.78368}
          y={337.94431}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25,
            textAlign: "end"
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-4-3"
            x={143.78368}
            y={337.94431}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"158.6 kw/h"}
          </tspan>
        </text>
        <text
          id="ssgg_consumo3"
          x={143.78368}
          y={343.09131}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25,
            textAlign: "end"
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-9-1-1"
            x={143.78368}
            y={343.09131}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"158.6 kw/h"}
          </tspan>
        </text>
        <text
          id="ssgg_consumo4"
          x={143.78368}
          y={348.23831}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25,
            textAlign: "end"
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-1-9-0"
            x={143.78368}
            y={348.23831}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"158.6 kw/h"}
          </tspan>
        </text>
        <text
          id="aacc2_gasto1"
          x={378.84213}
          y={294.60794}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="gray"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-4-5"
            x={378.84213}
            y={294.60794}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="gray"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {"8.9k$"}
          </tspan>
        </text>
        <text
          id="aacc2_gasto2"
          x={378.84213}
          y={299.75494}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="gray"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-9-1-6"
            x={378.84213}
            y={299.75494}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="gray"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {"8.9k$"}
          </tspan>
        </text>
        <text
          id="aacc2_gasto3"
          x={378.84213}
          y={304.90195}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="gray"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-1-9-3"
            x={378.84213}
            y={304.90195}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="gray"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {"8.9k$"}
          </tspan>
        </text>
        <text
          id="aacc2_consumo1"
          x={443.55667}
          y={294.35233}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25,
            textAlign: "end"
          }}
          xmlSpace="preserve"
          fill="gray"
          fontSize="4.9389px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-4-3-7"
            x={443.55667}
            y={294.35233}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="gray"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"158.6 kw/h"}
          </tspan>
        </text>
        <text
          id="aacc2_consumo2"
          x={443.55667}
          y={299.4993}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25,
            textAlign: "end"
          }}
          xmlSpace="preserve"
          fill="gray"
          fontSize="4.9389px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-9-1-1-0"
            x={443.55667}
            y={299.4993}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="gray"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"158.6 kw/h"}
          </tspan>
        </text>
        <text
          id="aacc2_consumo3"
          x={443.55667}
          y={304.6463}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25,
            textAlign: "end"
          }}
          xmlSpace="preserve"
          fill="gray"
          fontSize="4.9389px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-1-9-0-0"
            x={443.55667}
            y={304.6463}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="gray"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"158.6 kw/h"}
          </tspan>
        </text>
        <text
          id="ups2_gasto1"
          x={378.84213}
          y={359.12128}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-4-5-6"
            x={378.84213}
            y={359.12128}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {"8.9k$"}
          </tspan>
        </text>
        <text
          id="ups2_gasto2"
          x={378.84213}
          y={364.26794}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-9-1-6-7"
            x={378.84213}
            y={364.26794}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {"8.9k$"}
          </tspan>
        </text>
        <text
          id="ups2_gasto3"
          x={378.84213}
          y={369.41495}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-1-9-3-6"
            x={378.84213}
            y={369.41495}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {"8.9k$"}
          </tspan>
        </text>
        <text
          id="ups2_consumo1"
          x={443.55667}
          y={358.86533}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25,
            textAlign: "end"
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-4-3-7-5"
            x={443.55667}
            y={358.86533}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"158.6 kw/h"}
          </tspan>
        </text>
        <text
          id="ups2_consumo2"
          x={443.55667}
          y={364.0123}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25,
            textAlign: "end"
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-9-1-1-0-7"
            x={443.55667}
            y={364.0123}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"158.6 kw/h"}
          </tspan>
        </text>
        <text
          id="ups2_consumo3"
          x={443.55667}
          y={369.1593}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25,
            textAlign: "end"
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-1-9-0-0-2"
            x={443.55667}
            y={369.1593}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"158.6 kw/h"}
          </tspan>
        </text>
        <text
          id="gen_gasto1"
          x={86.397133}
          y={291.61334}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-1-9-34"
            x={86.397133}
            y={291.61334}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {"8.9k$"}
          </tspan>
        </text>
        <text
          id="gen_consumo1"
          x={143.78368}
          y={291.3573}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25,
            textAlign: "end"
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-1-9-0-2"
            x={143.78368}
            y={291.3573}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"158.6 kw/h"}
          </tspan>
        </text>
        <text
          id="ti2_gasto2"
          x={86.397133}
          y={389.73318}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-1-9-34-6"
            x={86.397133}
            y={389.73318}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {"8.9k$"}
          </tspan>
        </text>
        <text
          id="ti2_consumo2"
          x={143.78368}
          y={389.29724}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25,
            textAlign: "end"
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-1-9-0-2-3"
            x={143.78368}
            y={389.29724}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"158.6 kw/h"}
          </tspan>
        </text>
        <text
          id="gen_gasto2"
          x={86.397133}
          y={296.75964}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-1-9-34-0"
            x={86.397133}
            y={296.75964}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {"8.9k$"}
          </tspan>
        </text>
        <text
          id="gen_consumo2"
          x={143.78368}
          y={296.5043}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25,
            textAlign: "end"
          }}
          xmlSpace="preserve"
          fill="#999"
          fontSize="4.9389px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          <tspan
            id="tspan3239-1-9-0-0-7-8-4-8-8-5-1-9-0-2-6"
            x={143.78368}
            y={296.5043}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              textAlign: "end"
            }}
            fill="#999"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
            textAnchor="end"
          >
            {"158.6 kw/h"}
          </tspan>
        </text>
      </g>
    )
  }
