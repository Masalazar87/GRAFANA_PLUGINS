import React from 'react'

type DatosGenerales = {
  Nombre: string;
 };

type Estado = {
  Status: string;
  Alarma: string;
  Status_ON: string;
  Tablero1: string;
  Tablero2: string;
  Tablero3: string;
  /*Umbral_10A: string;
  Umbral_16A: string;
  Umbral_20A: string;
  Umbral_32A: string;
  Umbral_40A: string;
  Umbral_63A: string;
  Umbral_100A: string;*/

};  

type Breakers ={
  Q1:number; Q2:number; Q3:number; Q4:number; Q5:number; Q6:number; Q7:number; Q8:number; Q9:number; Q10:number;
  Q11:number; Q12:number; Q13:number; Q14:number; Q15:number; Q16:number; Q17:number; Q18:number; Q19:number; Q20:number;
  Q21:number; Q22:number; Q23:number; Q24:number; Q25:number; Q26:number; Q27:number; Q28:number; Q29:number; Q30:number;
  Q31:number; Q32:number; Q33:number; Q34:number; Q35:number; Q36:number; Q37:number; Q38:number; Q39:number; Q40:number;
  Q41:number; Q42:number; Q43:number; Q44:number; Q45:number; Q46:number; Q47:number; Q48:number; Q49:number; Q50:number;
  Q51:number; Q52:number; Q53:number; Q54:number; Q55:number; Q56:number; Q57:number; Q58:number; Q59:number; Q60:number;
  Q61:number; Q62:number; Q63:number; Q64:number; Q65:number; Q66:number; Q67:number; Q68:number; Q69:number; Q70:number;
  Q71:number; Q72:number; Q73:number; Q74:number; Q75:number; Q76:number; Q77:number; Q78:number; Q79:number; Q80:number;
  Q81:number; Q82:number; Q83:number; Q84:number; Q85:number; Q86:number; Q87:number; Q88:number; Q89:number; Q90:number;
  Q91:number; Q92:number; Q93:number; Q94:number; Q95:number; Q96:number; Q97:number; Q98:number; Q99:number; Q100:number;
  Q101:number; Q102:number; Q103:number; Q104:number; Q105:number; Q106:number; Q107:number; Q108:number; Q109:number; Q110:number;
  Q111:number; Q112:number; Q113:number; Q114:number; Q115:number; Q116:number; Q117:number; Q118:number; Q119:number; Q120:number;
  Q121:number; Q122:number; Q123:number; Q124:number; Q125:number; Q126:number; Q127:number; Q128:number; Q129:number; Q130:number;
  Q131:number; Q132:number; Q133:number; Q134:number; Q135:number; Q136:number; Q137:number; Q138:number; Q139:number; Q140:number;
  Q141:number; Q142:number; Q143:number; Q144:number; Q145:number; Q146:number; Q147:number; Q148:number; Q149:number; Q150:number;
  Q151:number; Q152:number;
};

export interface DataTdc  {
    DatosGenerales: DatosGenerales;
    Estado: Estado;
    Breakers: Breakers;
}

export const Variables = ({ DatosGenerales,Estado,Breakers }: DataTdc) => {
    return (
      <g id="layer2" display="inline">
      <path
        id="st_box"
        display="inline"
        fill="url(#linearGradient4474)"
        fillRule="evenodd"
        strokeWidth={0.262185}
        d="M111.91582 12.427845H145.287822V22.2868347H111.91582z"
      />
      <text
        id="nom_on-5"
        transform="scale(1.0261 .97457)"
        x={111.24417}
        y={19.432632}
        style={{
          lineHeight: 1.25,
          //InkscapeFontSpecification: "'Franklin Gothic Medium, Normal'",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontStyle="normal"
        fontVariant="normal"
        fontWeight={400}
        fontStretch="normal"
        fontSize="6.32666px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#000"
        strokeWidth={0.36412}
      >
        <tspan id="tspan1125" x={111.24417} y={19.432632}>
        {DatosGenerales.Nombre}
        </tspan>
      </text>
      <text
        id="nom_on"
        transform="scale(1.0261 .97457)"
        x={111.18017}
        y={19.654894}
        style={{
          lineHeight: 1.25,
         // InkscapeFontSpecification: "'Franklin Gothic Medium, Normal'",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontStyle="normal"
        fontVariant="normal"
        fontWeight={400}
        fontStretch="normal"
        fontSize="6.32666px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.36412}
      >
        <tspan id="tspan1123" x={111.18017} y={19.654894}>
        {DatosGenerales.Nombre}
        </tspan>
      </text>
      <ellipse
        id="alarma_tablero"
        cx={46.065941}
        cy={21.209869}
        rx={2.6248}
        ry={2.6584997}
        display="inline"
        opacity={0.899}
        fill="#999"
        fillRule="evenodd"
        strokeWidth={1}
        paintOrder="markers stroke fill"
      />
      <ellipse
        id="st_tablero"
        cx={33.075935}
        cy={21.209869}
        rx={2.625}
        ry={2.6584997}
        display="inline"
        opacity={0.899}
        fill="#1ad372"
        fillRule="evenodd"
        strokeWidth={1}
        paintOrder="markers stroke fill"
        className={Estado.Status_ON}
      />
      <ellipse
        id="stbrillo_tablero"
        transform="matrix(.64756 0 0 .38563 -17.314 7.485)"
        cx={78.265999}
        cy={31.379}
        rx={2.3671}
        ry={1.9181}
        display="inline"
        opacity={0.36022}
        fill="#fff"
        fillRule="evenodd"
        strokeWidth={1.5106}
        paintOrder="markers stroke fill"
        filter="url(#filter3102-29-0)"
      />
      <ellipse
        id="alarmabrillo_tablero"
        transform="matrix(.58569 0 0 .34746 .276 8.827)"
        cx={78.265999}
        cy={31.379}
        rx={2.3671}
        ry={1.9181}
        display="inline"
        opacity={0.16667}
        fill="#fff"
        fillRule="evenodd"
        paintOrder="markers stroke fill"
        filter="url(#filter3102-5-0-5)"
      />
      <text
        id="curr_Q2_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={48.567364}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4"
          x={42.035347}
          y={48.567364}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q2}
        </tspan>
      </text>
      <text
        id="curr_Q3_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={53.717571}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9"
          x={42.035347}
          y={53.717571}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q3}
        </tspan>
      </text>
      <text
        id="curr_Q5_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={64.01799}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-6"
          x={42.035347}
          y={64.01799}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q5}
        </tspan>
      </text>
      <text
        id="curr_Q6_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={69.168205}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-3"
          x={42.035347}
          y={69.168205}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q6}
        </tspan>
      </text>
      <text
        id="curr_Q4_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={58.867783}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-5"
          x={42.035347}
          y={58.867783}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q4}
        </tspan>
      </text>
      <text
        id="curr_Q8_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={79.46862}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-8"
          x={42.035347}
          y={79.46862}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
         {Breakers.Q8}
        </tspan>
      </text>
      <text
        id="curr_Q9_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={84.618835}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-2"
          x={42.035347}
          y={84.618835}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
         {Breakers.Q9}
        </tspan>
      </text>
      <text
        id="curr_Q11_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={94.91925}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-6-8"
          x={42.035347}
          y={94.91925}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q11}
        </tspan>
      </text>
      <text
        id="curr_Q12_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={100.06947}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-3-4"
          x={42.035347}
          y={100.06947}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q12}
        </tspan>
      </text>
      <text
        id="curr_Q10_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={89.769043}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-5-1"
          x={42.035347}
          y={89.769043}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
         {Breakers.Q10}
        </tspan>
      </text>
      <text
        id="curr_Q7_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={74.31842}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-3"
          x={42.035347}
          y={74.31842}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q7}
        </tspan>
      </text>
      <text
        id="curr_Q14_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={110.36989}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-1"
          x={42.035347}
          y={110.36989}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q14}
        </tspan>
      </text>
      <text
        id="curr_Q15_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={115.5201}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-1"
          x={42.035347}
          y={115.5201}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q15}
        </tspan>
      </text>
      <text
        id="curr_Q17_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={125.82052}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-6-1"
          x={42.035347}
          y={125.82052}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q17}
        </tspan>
      </text>
      <text
        id="curr_Q18_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={130.97072}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-3-47"
          x={42.035347}
          y={130.97072}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q18}
        </tspan>
      </text>
      <text
        id="curr_Q16_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={120.6703}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-5-5"
          x={42.035347}
          y={120.6703}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q16}
        </tspan>
      </text>
      <text
        id="curr_Q20_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={141.27115}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-8-5"
          x={42.035347}
          y={141.27115}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q20}
        </tspan>
      </text>
      <text
        id="curr_Q21_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={146.42136}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
         
      >
        <tspan
          id="tspan2520-8-5-02-4-9-2-0"
          x={42.035347}
          y={146.42136}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
        >
          {Breakers.Q21}
        </tspan>
      </text>
      <text
        id="curr_Q19_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={136.12094}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-3-2"
          x={42.035347}
          y={136.12094}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q19}
        </tspan>
      </text>
      <text
        id="curr_Q13_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={105.21968}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-0"
          x={42.035347}
          y={105.21968}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q13}
        </tspan>
      </text>
      <text
        id="curr_Q22_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={151.57156}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
         
      >
        <tspan
          id="tspan3053"
          x={42.035347}
          y={151.57156}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
        >
          {Breakers.Q22}
        </tspan>
      </text>
      <text
        id="curr_Q23_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={156.72179}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3085"
          x={42.035347}
          y={156.72179}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q23}
        </tspan>
      </text>
      <text
        id="curr_Q24_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={161.87199}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3117"
          x={42.035347}
          y={161.87199}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q24}
        </tspan>
      </text>
      <text
        id="curr_Q25_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={167.0222}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3149"
          x={42.035347}
          y={167.0222}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q25}
        </tspan>
      </text>
      <text
        id="curr_Q1_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={43.417152}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02"
          x={42.035347}
          y={43.417152}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q1}
        </tspan>
      </text>
      <text
        id="curr_Q27_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={43.417152}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
         
      >
        <tspan
          id="tspan2520-8-5-02-4-4"
          x={88.072945}
          y={43.417152}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
        >
          {Breakers.Q27}
        </tspan>
      </text>
      <text
        id="curr_Q28_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={48.56736}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-4"
          x={88.072945}
          y={48.56736}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q28}
        </tspan>
      </text>
      <text
        id="curr_Q30_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={58.867771}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-6-83"
          x={88.072945}
          y={58.867771}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q30}
        </tspan>
      </text>
      <text
        id="curr_Q31_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={64.017982}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-3-8"
          x={88.072945}
          y={64.017982}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q31}
        </tspan>
      </text>
      <text
        id="curr_Q29_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={53.717567}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-5-17"
          x={88.072945}
          y={53.717567}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
          
        >
          {Breakers.Q29}
        </tspan>
      </text>
      <text
        id="curr_Q33_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={74.318398}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-8-52"
          x={88.072945}
          y={74.318398}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q33}
        </tspan>
      </text>
      <text
        id="curr_Q34_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={79.468605}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-2-9"
          x={88.072945}
          y={79.468605}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q34}
        </tspan>
      </text>
      <text
        id="curr_Q36_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={89.76902}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-6-8-6"
          x={88.072945}
          y={89.76902}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q36}
        </tspan>
      </text>
      <text
        id="curr_Q37_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={94.919228}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-3-4-4"
          x={88.072945}
          y={94.919228}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q37}
        </tspan>
      </text>
      <text
        id="curr_Q35_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={84.618813}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-5-1-4"
          x={88.072945}
          y={84.618813}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
        >
          {Breakers.Q35}
        </tspan>
      </text>
      <text
        id="curr_Q32_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={69.16819}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-3-5"
          x={88.072945}
          y={69.16819}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q32}
        </tspan>
      </text>
      <text
        id="curr_Q39_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={105.21964}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-1-7"
          x={88.072945}
          y={105.21964}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q39}
        </tspan>
      </text>
      <text
        id="curr_Q40_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={110.36985}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-1-3"
          x={88.072945}
          y={110.36985}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q40}
        </tspan>
      </text>
      <text
        id="curr_Q42_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={120.67026}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-6-1-6"
          x={88.072945}
          y={120.67026}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q42}
        </tspan>
      </text>
      <text
        id="curr_Q43_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={125.82047}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-3-47-8"
          x={88.072945}
          y={125.82047}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q43}
        </tspan>
      </text>
      <text
        id="curr_Q41_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={115.52005}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-5-5-1"
          x={88.072945}
          y={115.52005}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
        >
          {Breakers.Q41}
        </tspan>
      </text>
      <text
        id="curr_Q45_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={136.1209}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-8-5-7"
          x={88.072945}
          y={136.1209}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
         {Breakers.Q45}
        </tspan>
      </text>
      <text
        id="curr_Q46_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={141.27109}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-2-0-0"
          x={88.072945}
          y={141.27109}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q46}
        </tspan>
      </text>
      <text
        id="curr_Q44_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={130.97069}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-3-2-0"
          x={88.072945}
          y={130.97069}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q44}
        </tspan>
      </text>
      <text
        id="curr_Q38_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={100.06944}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-0-8"
          x={88.072945}
          y={100.06944}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q38}
        </tspan>
      </text>
      <text
        id="curr_Q47_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={146.4213}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
         
      >
        <tspan
          id="tspan3061"
          x={88.072945}
          y={146.4213}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
        >
          {Breakers.Q47}
        </tspan>
      </text>
      <text
        id="curr_Q48_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={151.5715}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3093"
          x={88.072945}
          y={151.5715}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q48}
        </tspan>
      </text>
      <text
        id="curr_Q49_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={156.72173}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3125"
          x={88.072945}
          y={156.72173}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q49}
        </tspan>
      </text>
      <text
        id="curr_Q50_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={161.87193}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3157"
          x={88.072945}
          y={161.87193}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q50}
        </tspan>
      </text>
      <text
        id="curr_Q53_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={43.417152}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-4-1"
          x={134.11061}
          y={43.417152}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
        {Breakers.Q53}
        </tspan>
      </text>
      <text
        id="curr_Q55_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={53.717571}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-6-83-6"
          x={134.11061}
          y={53.717571}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
         {Breakers.Q55}
        </tspan>
      </text>
      <text
        id="curr_Q56_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={58.867783}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-3-8-6"
          x={134.11061}
          y={58.867783}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q56}
        </tspan>
      </text>
      <text
        id="curr_Q54_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={48.567368}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-5-17-9"
          x={134.11061}
          y={48.567368}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q54}
        </tspan>
      </text>
      <text
        id="curr_Q58_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={69.168205}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-8-52-9"
          x={134.11061}
          y={69.168205}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q58}
        </tspan>
      </text>
      <text
        id="curr_Q59_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={74.318413}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-2-9-1"
          x={134.11061}
          y={74.318413}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q59}
        </tspan>
      </text>
      <text
        id="curr_Q61_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={84.618835}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-6-8-6-3"
          x={134.11061}
          y={84.618835}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q61}
        </tspan>
      </text>
      <text
        id="curr_Q62_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={89.769043}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-3-4-4-3"
          x={134.11061}
          y={89.769043}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q62}
        </tspan>
      </text>
      <text
        id="curr_Q60_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={79.468628}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-5-1-4-9"
          x={134.11061}
          y={79.468628}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q60}
        </tspan>
      </text>
      <text
        id="curr_Q57_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={64.01799}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-3-5-0"
          x={134.11061}
          y={64.01799}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q57}
        </tspan>
      </text>
      <text
        id="curr_Q64_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={100.06947}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-1-7-9"
          x={134.11061}
          y={100.06947}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q64}
        </tspan>
      </text>
      <text
        id="curr_Q65_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={105.21967}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-1-3-6"
          x={134.11061}
          y={105.21967}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
         {Breakers.Q65}
        </tspan>
      </text>
      <text
        id="curr_Q67_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={115.5201}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-6-1-6-6"
          x={134.11061}
          y={115.5201}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q67}
        </tspan>
      </text>
      <text
        id="curr_Q68_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={120.6703}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-3-47-8-4"
          x={134.11061}
          y={120.6703}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q68}
        </tspan>
      </text>
      <text
        id="curr_Q66_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={110.36989}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-5-5-1-96"
          x={134.11061}
          y={110.36989}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q66}
        </tspan>
      </text>
      <text
        id="curr_Q70_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={130.97072}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-8-5-7-1"
          x={134.11061}
          y={130.97072}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q70}
        </tspan>
      </text>
      <text
        id="curr_Q71_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={136.12094}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-2-0-0-6"
          x={134.11061}
          y={136.12094}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q71}
        </tspan>
      </text>
      <text
        id="curr_Q69_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={125.82051}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-3-2-0-6"
          x={134.11061}
          y={125.82051}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q69}
        </tspan>
      </text>
      <text
        id="curr_Q63_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={94.91925}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-0-8-5"
          x={134.11061}
          y={94.91925}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q63}
        </tspan>
      </text>
      <text
        id="curr_Q72_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={141.27115}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3069"
          x={134.11061}
          y={141.27115}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q72}
        </tspan>
      </text>
      <text
        id="curr_Q73_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={146.42136}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3101"
          x={134.11061}
          y={146.42136}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q73}
        </tspan>
      </text>
      <text
        id="curr_Q74_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={151.57156}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3133"
          x={134.11061}
          y={151.57156}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q74}
        </tspan>
      </text>
      <text
        id="curr_Q75_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={156.72177}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3165"
          x={134.11061}
          y={156.72177}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q75}
        </tspan>
      </text>
      <text
        id="curr_Q80_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={48.567368}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-6-83-6-5"
          x={180.14816}
          y={48.567368}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q80}
        </tspan>
      </text>
      <text
        id="curr_Q81_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={53.717571}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-3-8-6-1"
          x={180.14816}
          y={53.717571}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q81}
        </tspan>
      </text>
      <text
        id="curr_Q79_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={43.417152}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-5-17-9-6"
          x={180.14816}
          y={43.417152}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
        >
          {Breakers.Q79}
        </tspan>
      </text>
      <text
        id="curr_Q83_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={64.01799}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-8-52-9-3"
          x={180.14816}
          y={64.01799}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q83}
        </tspan>
      </text>
      <text
        id="curr_Q84_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={69.168205}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-2-9-1-8"
          x={180.14816}
          y={69.168205}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q84}
        </tspan>
      </text>
      <text
        id="curr_Q86_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={79.468628}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-6-8-6-3-0"
          x={180.14816}
          y={79.468628}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
         {Breakers.Q86}
        </tspan>
      </text>
      <text
        id="curr_Q87_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={84.618835}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-3-4-4-3-1"
          x={180.14816}
          y={84.618835}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q87}
        </tspan>
      </text>
      <text
        id="curr_Q85_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={74.318413}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-5-1-4-9-2"
          x={180.14816}
          y={74.318413}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q85}
        </tspan>
      </text>
      <text
        id="curr_Q82_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={58.867779}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-3-5-0-1"
          x={180.14816}
          y={58.867779}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q82}
        </tspan>
      </text>
      <text
        id="curr_Q89_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={94.91925}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-1-7-9-0"
          x={180.14816}
          y={94.91925}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q89}
        </tspan>
      </text>
      <text
        id="curr_Q90_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={100.06947}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-1-3-6-0"
          x={180.14816}
          y={100.06947}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q90}
        </tspan>
      </text>
      <text
        id="curr_Q92_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={110.36989}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-6-1-6-6-2"
          x={180.14816}
          y={110.36989}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q92}
        </tspan>
      </text>
      <text
        id="curr_Q93_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={115.5201}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-3-47-8-4-4"
          x={180.14816}
          y={115.5201}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q93}
        </tspan>
      </text>
      <text
        id="curr_Q91_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={105.21968}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-5-5-1-96-8"
          x={180.14816}
          y={105.21968}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
         {Breakers.Q91}
        </tspan>
      </text>
      <text
        id="curr_Q95_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={125.82052}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-8-5-7-1-9"
          x={180.14816}
          y={125.82052}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q95}
        </tspan>
      </text>
      <text
        id="curr_Q96_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={130.97072}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-4-9-2-0-0-6-3"
          x={180.14816}
          y={130.97072}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
         {Breakers.Q96}
        </tspan>
      </text>
      <text
        id="curr_Q94_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={120.6703}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-3-2-0-6-4"
          x={180.14816}
          y={120.6703}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q94}
        </tspan>
      </text>
      <text
        id="curr_Q88_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={89.769043}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2520-8-5-02-0-8-5-0"
          x={180.14816}
          y={89.769043}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q88}
        </tspan>
      </text>
      <text
        id="curr_Q97_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={136.12094}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3077"
          x={180.14816}
          y={136.12094}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q97}
        </tspan>
      </text>
      <text
        id="curr_Q98_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={141.27115}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3109"
          x={180.14816}
          y={141.27115}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q98}
        </tspan>
      </text>
      <text
        id="curr_Q99_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={146.42136}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3141"
          x={180.14816}
          y={146.42136}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q99}
        </tspan>
      </text>
      <text
        id="curr_Q100_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={151.57156}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3173"
          x={180.14816}
          y={151.57156}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q100}
        </tspan>
      </text>
      <text
        id="curr_Q105_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={43.417152}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3707"
          x={226.18578}
          y={43.417152}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q105}
        </tspan>
      </text>
      <text
        id="curr_Q106_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={48.567364}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3711"
          x={226.18578}
          y={48.567364}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q106}
        </tspan>
      </text>
      <text
        id="curr_Q108_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={58.867779}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3719"
          x={226.18578}
          y={58.867779}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q108}
        </tspan>
      </text>
      <text
        id="curr_Q109_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={64.01799}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3723"
          x={226.18578}
          y={64.01799}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q109}
        </tspan>
      </text>
      <text
        id="curr_Q111_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={74.31842}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3727"
          x={226.18578}
          y={74.31842}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q111}
        </tspan>
      </text>
      <text
        id="curr_Q112_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={79.468628}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3731"
          x={226.18578}
          y={79.468628}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q112}
        </tspan>
      </text>
      <text
        id="curr_Q110_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={69.168205}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3735"
          x={226.18578}
          y={69.168205}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q110}
        </tspan>
      </text>
      <text
        id="curr_Q107_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={53.717571}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3739"
          x={226.18578}
          y={53.717571}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q107}
        </tspan>
      </text>
      <text
        id="curr_Q114_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={89.769043}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3743"
          x={226.18578}
          y={89.769043}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q114}
        </tspan>
      </text>
      <text
        id="curr_Q115_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={94.91925}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3747"
          x={226.18578}
          y={94.91925}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q115}
        </tspan>
      </text>
      <text
        id="curr_Q117_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={105.21968}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3751"
          x={226.18578}
          y={105.21968}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q117}
        </tspan>
      </text>
      <text
        id="curr_Q118_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={110.36989}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3755"
          x={226.18578}
          y={110.36989}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q118}
        </tspan>
      </text>
      <text
        id="curr_Q116_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={100.06947}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3759"
          x={226.18578}
          y={100.06947}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q116}
        </tspan>
      </text>
      <text
        id="curr_Q120_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={120.6703}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3763"
          x={226.18578}
          y={120.6703}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q120}
        </tspan>
      </text>
      <text
        id="curr_Q121_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={125.82051}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3767"
          x={226.18578}
          y={125.82051}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q121}
        </tspan>
      </text>
      <text
        id="curr_Q119_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={115.5201}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3771"
          x={226.18578}
          y={115.5201}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q119}
        </tspan>
      </text>
      <text
        id="curr_Q113_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={84.618835}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3775"
          x={226.18578}
          y={84.618835}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q113}
        </tspan>
      </text>
      <text
        id="curr_Q122_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={130.97072}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3791"
          x={226.18578}
          y={130.97072}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q122}
        </tspan>
      </text>
      <text
        id="curr_Q123_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={136.12094}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3799"
          x={226.18578}
          y={136.12094}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q123}
        </tspan>
      </text>
      <text
        id="curr_Q124_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={141.27115}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3807"
          x={226.18578}
          y={141.27115}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q124}
        </tspan>
      </text>
      <text
        id="curr_Q125_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={146.42136}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan3815"
          x={226.18578}
          y={146.42136}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q125}
        </tspan>
      </text>
      <text
        id="curr_Q132_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={48.53426}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan716"
          x={272.22375}
          y={48.53426}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q132}
        </tspan>
      </text>
      <text
        id="curr_Q133_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={53.686123}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan720"
          x={272.22375}
          y={53.686123}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q133}
        </tspan>
      </text>
      <text
        id="curr_Q135_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={63.989849}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan724"
          x={272.22375}
          y={63.989849}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q135}
        </tspan>
      </text>
      <text
        id="curr_Q136_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={69.141716}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
         
      >
        <tspan
          id="tspan728"
          x={272.22375}
          y={69.141716}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
        >
         {Breakers.Q136}
        </tspan>
      </text>
      <text
        id="curr_Q134_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={58.837982}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan732"
          x={272.22375}
          y={58.837982}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q134}
        </tspan>
      </text>
      <text
        id="curr_Q138_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={79.445442}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan736"
          x={272.22375}
          y={79.445442}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q138}
        </tspan>
      </text>
      <text
        id="curr_Q139_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={84.597305}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan740"
          x={272.22375}
          y={84.597305}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q139}
        </tspan>
      </text>
      <text
        id="curr_Q141_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={94.901031}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
         
      >
        <tspan
          id="tspan744"
          x={272.22375}
          y={94.901031}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
        >
          {Breakers.Q141}
        </tspan>
      </text>
      <text
        id="curr_Q142_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={100.05289}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan748"
          x={272.22375}
          y={100.05289}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q142}
        </tspan>
      </text>
      <text
        id="curr_Q140_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={89.749168}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan752"
          x={272.22375}
          y={89.749168}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q140}
        </tspan>
      </text>
      <text
        id="curr_Q137_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={74.293571}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan756"
          x={272.22375}
          y={74.293571}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
         {Breakers.Q137}
        </tspan>
      </text>
      <text
        id="curr_Q144_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={110.35663}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan760"
          x={272.22375}
          y={110.35663}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q144}
        </tspan>
      </text>
      <text
        id="curr_Q145_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={115.50848}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan764"
          x={272.22375}
          y={115.50848}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q145}
        </tspan>
      </text>
      <text
        id="curr_Q147_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={125.81223}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan768"
          x={272.22375}
          y={125.81223}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q147}
        </tspan>
      </text>
      <text
        id="curr_Q148_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={130.96408}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan772"
          x={272.22375}
          y={130.96408}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q148}
        </tspan>
      </text>
      <text
        id="curr_Q146_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={120.66035}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan776"
          x={272.22375}
          y={120.66035}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
         {Breakers.Q146}
        </tspan>
      </text>
      <text
        id="curr_Q150_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={141.26781}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan780"
          x={272.22375}
          y={141.26781}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q150}
        </tspan>
      </text>
      <text
        id="curr_Q151_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={146.41966}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan784"
          x={272.22375}
          y={146.41966}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
           {Breakers.Q151}
        </tspan>
      </text>
      <text
        id="curr_Q149_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={136.11595}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan788"
          x={272.22375}
          y={136.11595}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
           {Breakers.Q149}
        </tspan>
      </text>
      <text
        id="curr_Q143_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={105.20476}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan792"
          x={272.22375}
          y={105.20476}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
           {Breakers.Q143}
        </tspan>
      </text>
      <text
        id="curr_Q131_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={43.382393}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan796"
          x={272.22375}
          y={43.382393}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q131}
        </tspan>
      </text>
      <text
        id="curr_Q152_S1"
        transform="scale(.84482 1.18368)"
        x={272.22375}
        y={151.57153}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan800"
          x={272.22375}
          y={151.57153}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
           {Breakers.Q152}
        </tspan>
      </text>
      <text
        id="curr_Q26_S1"
        transform="scale(.84482 1.18368)"
        x={42.035347}
        y={172.17241}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2572"
          x={42.035347}
          y={172.17241}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q26}
        </tspan>
      </text>
      <text
        id="curr_Q51_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={167.02214}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2580"
          x={88.072945}
          y={167.02214}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q51}
        </tspan>
      </text>
      <text
        id="curr_Q76_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={161.87199}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2588"
          x={134.11061}
          y={161.87199}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
         {Breakers.Q76}
        </tspan>
      </text>
      <text
        id="curr_Q101_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={156.72177}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2596"
          x={180.14816}
          y={156.72177}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q101}
        </tspan>
      </text>
      <text
        id="curr_Q126_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={151.57156}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2604"
          x={226.18578}
          y={151.57156}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q126}
        </tspan>
      </text>
      <text
        id="curr_Q52_S1"
        transform="scale(.84482 1.18368)"
        x={88.072945}
        y={172.17241}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2625"
          x={88.072945}
          y={172.17241}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q52}
        </tspan>
      </text>
      <text
        id="curr_Q77_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={167.0222}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2637"
          x={134.11061}
          y={167.0222}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q77}
        </tspan>
      </text>
      <text
        id="curr_Q78_S1"
        transform="scale(.84482 1.18368)"
        x={134.11061}
        y={172.17241}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2645"
          x={134.11061}
          y={172.17241}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q78}
        </tspan>
      </text>
      <text
        id="curr_Q102_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={161.87199}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2653"
          x={180.14816}
          y={161.87199}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
          {Breakers.Q102}
        </tspan>
      </text>
      <text
        id="curr_Q103_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={167.0222}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2661"
          x={180.14816}
          y={167.0222}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463} 
           
        >
       {Breakers.Q103}
        </tspan>
      </text>
      <text
        id="curr_Q127_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={156.72177}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2669"
          x={226.18578}
          y={156.72177}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q127}
        </tspan>
      </text>
      <text
        id="curr_Q128_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={161.87199}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2677"
          x={226.18578}
          y={161.87199}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q128}
        </tspan>
      </text>
      <text
        id="curr_Q129_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={167.0222}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2685"
          x={226.18578}
          y={167.0222}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q129}
        </tspan>
      </text>
      <text
        id="curr_Q104_S1"
        transform="scale(.84482 1.18368)"
        x={180.14816}
        y={172.17241}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2693"
          x={180.14816}
          y={172.17241}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
        {Breakers.Q104}
        </tspan>
      </text>
      <text
        id="curr_Q130_S1"
        transform="scale(.84482 1.18368)"
        x={226.18578}
        y={172.17241}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        }}
        xmlSpace="preserve"
        fontSize="3.88067px"
        fontFamily="Franklin Gothic Medium"
        letterSpacing={0}
        wordSpacing={0}
        display="inline"
        fill="#fff"
        strokeWidth={0.687463}
      >
        <tspan
          id="tspan2701"
          x={226.18578}
          y={172.17241}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal"
          }}
          fontSize="3.88067px"
          fontFamily="Franklin Gothic Medium"
          fill="#fff"
          strokeWidth={0.687463}
           
        >
          {Breakers.Q130}
        </tspan>
      </text>
    
    <g id="g1691" fill="#000" fillRule="evenodd">
          <g id="g1784" display="inline">
            <path
              id="tablero_1_0"
              display="inline"
              opacity={0}
              className={Estado.Tablero1}
              strokeWidth={0.280663}
              d="M29.437654 45.521053H47.457967V211.050713H29.437654z"
            />
            <path
              id="tablero_1_1"
              display="inline"
              opacity={0}
              className={Estado.Tablero1}
              strokeWidth={0.280662}
              d="M68.213684 45.521034H86.233997V88.572014H68.213684z"
            />
            <path
              id="tablero_1_3"
              display="inline"
              opacity={0}
              className={Estado.Tablero1}
              strokeWidth={0.280662}
              d="M185.48224 45.521034H203.50255299999998V211.05069400000002H185.48224z"
            />
            <path
              id="tablero_1_4"
              display="inline"
              opacity={0}
              className={Estado.Tablero1}
              strokeWidth={0.280662}
              d="M225.03059 45.521034H243.050903V211.05069400000002H225.03059z"
            />
            <path
              id="tablero_1_2"
              display="inline"
              opacity={0}
              className={Estado.Tablero1}
              strokeWidth={0.280662}
              d="M146.2679 198.18005H164.28821299999998V210.922753H146.2679z"
            />
          </g>
          <g id="g1794" strokeWidth={0.280662}>
            <path
              id="tablero_2_0"
              display="inline"
              opacity={0}
              className={Estado.Tablero2}
              d="M68.213684 88.572006H86.233997V211.034986H68.213684z"
            />
            <path
              id="tablero_2_1"
              display="inline"
              opacity={0}
              className={Estado.Tablero2}
              d="M107.73689 45.521034H125.757203V113.067756H107.73689z"
            />
          </g>
          <g id="g1798" strokeWidth={0.280662}>
            <path
              id="tablero_3_0"
              display="inline"
              opacity={0}
              className={Estado.Tablero3}
              d="M107.73689 113.06776H125.757203V211.02349400000003H107.73689z"
            />
            <path
              id="tablero_3_1"
              display="inline"
              opacity={0}
              className={Estado.Tablero3}
              d="M146.2679 45.521034H164.28821299999998V198.18006400000002H146.2679z"
            />
          </g>
        </g>
        </g>
    )
  }
