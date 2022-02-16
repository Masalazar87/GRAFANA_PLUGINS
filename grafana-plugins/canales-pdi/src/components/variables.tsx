import React from 'react'

type DatosGenerales = {
  Nombre: string;
 };
type Estado = {
  Status: string;
  Alarma: string;
  Status_ON: string;
};
type Panel1_kva ={
  CH1:number; CH2:number; CH3:number; CH4:number; CH5:number; CH6:number; CH7:number;
  CH8:number; CH9:number; CH10:number; CH11:number; CH12:number; CH13:number; CH14:number;
  CH15:number; CH16:number; CH17:number; CH18:number; CH19:number; CH20:number; CH21:number;
  CH22:number; CH23:number; CH24:number; CH25:number; CH26:number; CH27:number; CH28:number;
  CH29:number; CH30:number; CH31:number; CH32:number; CH33:number; CH34:number; CH35:number;
  CH36:number; CH37:number; CH38:number; CH39:number; CH40:number; CH41:number; CH42:number;
};
type Panel1_kwh ={
  CH1:number; CH2:number; CH3:number; CH4:number; CH5:number; CH6:number; CH7:number;
  CH8:number; CH9:number; CH10:number; CH11:number; CH12:number; CH13:number; CH14:number;
  CH15:number; CH16:number; CH17:number; CH18:number; CH19:number; CH20:number; CH21:number;
  CH22:number; CH23:number; CH24:number; CH25:number; CH26:number; CH27:number; CH28:number;
  CH29:number; CH30:number; CH31:number; CH32:number; CH33:number; CH34:number; CH35:number;
  CH36:number; CH37:number; CH38:number; CH39:number; CH40:number; CH41:number; CH42:number;
};
type Panel1_Amps ={
  CH1:number; CH2:number; CH3:number; CH4:number; CH5:number; CH6:number; CH7:number;
  CH8:number; CH9:number; CH10:number; CH11:number; CH12:number; CH13:number; CH14:number;
  CH15:number; CH16:number; CH17:number; CH18:number; CH19:number; CH20:number; CH21:number;
  CH22:number; CH23:number; CH24:number; CH25:number; CH26:number; CH27:number; CH28:number;
  CH29:number; CH30:number; CH31:number; CH32:number; CH33:number; CH34:number; CH35:number;
  CH36:number; CH37:number; CH38:number; CH39:number; CH40:number; CH41:number; CH42:number;
};
type Panel2_kva ={
  CH1:number; CH2:number; CH3:number; CH4:number; CH5:number; CH6:number; CH7:number;
  CH8:number; CH9:number; CH10:number; CH11:number; CH12:number; CH13:number; CH14:number;
  CH15:number; CH16:number; CH17:number; CH18:number; CH19:number; CH20:number; CH21:number;
  CH22:number; CH23:number; CH24:number; CH25:number; CH26:number; CH27:number; CH28:number;
  CH29:number; CH30:number; CH31:number; CH32:number; CH33:number; CH34:number; CH35:number;
  CH36:number; CH37:number; CH38:number; CH39:number; CH40:number; CH41:number; CH42:number;
};
type Panel2_kwh ={
  CH1:number; CH2:number; CH3:number; CH4:number; CH5:number; CH6:number; CH7:number;
  CH8:number; CH9:number; CH10:number; CH11:number; CH12:number; CH13:number; CH14:number;
  CH15:number; CH16:number; CH17:number; CH18:number; CH19:number; CH20:number; CH21:number;
  CH22:number; CH23:number; CH24:number; CH25:number; CH26:number; CH27:number; CH28:number;
  CH29:number; CH30:number; CH31:number; CH32:number; CH33:number; CH34:number; CH35:number;
  CH36:number; CH37:number; CH38:number; CH39:number; CH40:number; CH41:number; CH42:number;
};
type Panel2_Amps ={
  CH1:number; CH2:number; CH3:number; CH4:number; CH5:number; CH6:number; CH7:number;
  CH8:number; CH9:number; CH10:number; CH11:number; CH12:number; CH13:number; CH14:number;
  CH15:number; CH16:number; CH17:number; CH18:number; CH19:number; CH20:number; CH21:number;
  CH22:number; CH23:number; CH24:number; CH25:number; CH26:number; CH27:number; CH28:number;
  CH29:number; CH30:number; CH31:number; CH32:number; CH33:number; CH34:number; CH35:number;
  CH36:number; CH37:number; CH38:number; CH39:number; CH40:number; CH41:number; CH42:number;
};


export interface DataPdi  {
    DatosGenerales: DatosGenerales;
    Estado: Estado;
    Panel1_kva: Panel1_kva;
    Panel1_kwh: Panel1_kwh;
    Panel1_Amps: Panel1_Amps;
    Panel2_kva: Panel2_kva;
    Panel2_kwh: Panel2_kwh;
    Panel2_Amps: Panel2_Amps;
    
}

export const Variables = ({ DatosGenerales,Estado,Panel1_kva,Panel1_kwh,Panel1_Amps,Panel2_kva,Panel2_kwh,Panel2_Amps }: DataPdi) => {
    return (
<g id="layer11">
            <g
              id="layer2"
              transform="scale(.84482 1.1837)"
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.8807px"
              letterSpacing={0}
              strokeWidth={0.68746}
              wordSpacing={0}
            >
              <text
                id="varp1-A-CH-9"
                x={25.370846}
                y={84.031631}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-7"
                  x={25.370846}
                  y={84.031631}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH9}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-1"
                x={25.370846}
                y={43.468685}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-3"
                  x={25.370846}
                  y={43.468685}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH1}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-2"
                x={25.370846}
                y={48.539055}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-30"
                  x={25.370846}
                  y={48.539055}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH2}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-5"
                x={25.370846}
                y={63.75016}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-79"
                  x={25.370846}
                  y={63.75016}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH5}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-7"
                x={25.370846}
                y={73.890892}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-8"
                  x={25.370846}
                  y={73.890892}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH7}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-6"
                x={25.370846}
                y={68.820526}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-5"
                  x={25.370846}
                  y={68.820526}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH6}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-19"
                x={25.370846}
                y={134.73531}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-75"
                  x={25.370846}
                  y={134.73531}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH19}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-28"
                x={79.820007}
                y={73.889412}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-72"
                  x={79.820007}
                  y={73.889412}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH28}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-3"
                x={25.370846}
                y={53.609428}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-4"
                  x={25.370846}
                  y={53.609428}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH3}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-4"
                x={25.370846}
                y={58.67979}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-89"
                  x={25.370846}
                  y={58.67979}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH4}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-25"
                x={79.820007}
                y={58.678333}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-0"
                  x={79.820007}
                  y={58.678333}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH25}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-35"
                x={79.820007}
                y={109.382}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-045"
                  x={79.820007}
                  y={109.382}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH35}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-41"
                x={79.820007}
                y={139.8042}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-41"
                  x={79.820007}
                  y={139.8042}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH41}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-8"
                x={25.370846}
                y={78.961266}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-47"
                  x={25.370846}
                  y={78.961266}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH8}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-40"
                x={79.820007}
                y={134.73386}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-9"
                  x={79.820007}
                  y={134.73386}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH40}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-31"
                x={79.820007}
                y={89.100525}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-49"
                  x={79.820007}
                  y={89.100525}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH31}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-38"
                x={79.820007}
                y={124.59312}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-2"
                  x={79.820007}
                  y={124.59312}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH38}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-42"
                x={79.820007}
                y={144.87457}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-50"
                  x={79.820007}
                  y={144.87457}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH42}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-23"
                x={79.820007}
                y={48.537594}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-80"
                  x={79.820007}
                  y={48.537594}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH23}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-36"
                x={79.820007}
                y={114.45236}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-82"
                  x={79.820007}
                  y={114.45236}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH36}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-26"
                x={79.820007}
                y={63.748692}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-892"
                  x={79.820007}
                  y={63.748692}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH26}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-14"
                x={25.370846}
                y={109.38346}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-6"
                  x={25.370846}
                  y={109.38346}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH14}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-34"
                x={79.820007}
                y={104.31162}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-02"
                  x={79.820007}
                  y={104.31162}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH34}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-24"
                x={79.820007}
                y={53.607956}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-96"
                  x={79.820007}
                  y={53.607956}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH24}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-33"
                x={79.820007}
                y={99.241264}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-88"
                  x={79.820007}
                  y={99.241264}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH33}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-18"
                x={25.370846}
                y={129.66495}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-62"
                  x={25.370846}
                  y={129.66495}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH18}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-29"
                x={79.820007}
                y={78.959808}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-42"
                  x={79.820007}
                  y={78.959808}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH29}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-27"
                x={79.820007}
                y={68.819054}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-99"
                  x={79.820007}
                  y={68.819054}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH27}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-37"
                x={79.820007}
                y={119.52274}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-995"
                  x={79.820007}
                  y={119.52274}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH37}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-39"
                x={79.820007}
                y={129.66347}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-76"
                  x={79.820007}
                  y={129.66347}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH39}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-11"
                x={25.370846}
                y={94.172356}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-46"
                  x={25.370846}
                  y={94.172356}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH11}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-21"
                x={25.370846}
                y={144.87604}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-23"
                  x={25.370846}
                  y={144.87604}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH21}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-13"
                x={25.370846}
                y={104.3131}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-760"
                  x={25.370846}
                  y={104.3131}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH13}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-12"
                x={25.370846}
                y={99.242737}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-51"
                  x={25.370846}
                  y={99.242737}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH12}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-10"
                x={25.370846}
                y={89.101997}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-48"
                  x={25.370846}
                  y={89.101997}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH10}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-15"
                x={25.370846}
                y={114.45383}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93"
                  x={25.370846}
                  y={114.45383}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH15}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-16"
                x={25.370846}
                y={119.52421}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93-1"
                  x={25.370846}
                  y={119.52421}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH16}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-17"
                x={25.370846}
                y={124.59456}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93-1-0"
                  x={25.370846}
                  y={124.59456}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH17}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-20"
                x={25.370846}
                y={139.80566}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-75-9"
                  x={25.370846}
                  y={139.80566}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH20}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-22"
                x={79.820007}
                y={43.467236}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-23-4"
                  x={79.820007}
                  y={43.467236}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH22}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-30"
                x={79.820007}
                y={84.030167}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-42-5"
                  x={79.820007}
                  y={84.030167}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH30}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-32"
                x={79.820007}
                y={94.170906}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-49-2"
                  x={79.820007}
                  y={94.170906}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_Amps.CH32}
                </tspan>
              </text>
            </g>
            <g
              id="layer2-6-3"
              transform="translate(12) scale(.84482 1.1837)"
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.8807px"
              letterSpacing={0}
              strokeWidth={0.68746}
              wordSpacing={0}
            >
              <text
                id="varp1-KVA-CH-9"
                x={25.370846}
                y={84.031631}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-7-2-5"
                  x={25.370846}
                  y={84.031631}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH9}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-1"
                x={25.370846}
                y={43.468685}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-3-0-7"
                  x={25.370846}
                  y={43.468685}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH1}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-2"
                x={25.370846}
                y={48.539055}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-30-9-5"
                  x={25.370846}
                  y={48.539055}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH2}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-5"
                x={25.370846}
                y={63.75016}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-79-2-6"
                  x={25.370846}
                  y={63.75016}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH5}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-7"
                x={25.370846}
                y={73.890892}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-8-8-2"
                  x={25.370846}
                  y={73.890892}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH7}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-6"
                x={25.370846}
                y={68.820526}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-5-1-7"
                  x={25.370846}
                  y={68.820526}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH6}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-19"
                x={25.370846}
                y={134.73531}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-75-2-8"
                  x={25.370846}
                  y={134.73531}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH19}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-28"
                x={79.820007}
                y={73.889412}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-72-5-2"
                  x={79.820007}
                  y={73.889412}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH28}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-3"
                x={25.370846}
                y={53.609428}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-4-9-3"
                  x={25.370846}
                  y={53.609428}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH3}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-4"
                x={25.370846}
                y={58.67979}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-89-3-8"
                  x={25.370846}
                  y={58.67979}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH4}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-25"
                x={79.820007}
                y={58.678333}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-0-4-1"
                  x={79.820007}
                  y={58.678333}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH25}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-35"
                x={79.820007}
                y={109.382}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-045-8-1"
                  x={79.820007}
                  y={109.382}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH35}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-41"
                x={79.820007}
                y={139.8042}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-41-2-6"
                  x={79.820007}
                  y={139.8042}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH41}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-8"
                x={25.370846}
                y={78.961266}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-47-7-4"
                  x={25.370846}
                  y={78.961266}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH8}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-40"
                x={79.820007}
                y={134.73386}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-9-1-6"
                  x={79.820007}
                  y={134.73386}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH40}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-31"
                x={79.820007}
                y={89.100525}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-49-8-6"
                  x={79.820007}
                  y={89.100525}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH31}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-38"
                x={79.820007}
                y={124.59312}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-2-7-6"
                  x={79.820007}
                  y={124.59312}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH38}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-42"
                x={79.820007}
                y={144.87457}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-50-2-9"
                  x={79.820007}
                  y={144.87457}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH42}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-23"
                x={79.820007}
                y={48.537594}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-80-2-9"
                  x={79.820007}
                  y={48.537594}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH23}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-36"
                x={79.820007}
                y={114.45236}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-82-9-3"
                  x={79.820007}
                  y={114.45236}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH36}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-26"
                x={79.820007}
                y={63.748692}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-892-4-5"
                  x={79.820007}
                  y={63.748692}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH26}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-14"
                x={25.370846}
                y={109.38346}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-6-7-0"
                  x={25.370846}
                  y={109.38346}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH14}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-34"
                x={79.820007}
                y={104.31162}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-02-7-0"
                  x={79.820007}
                  y={104.31162}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH34}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-24"
                x={79.820007}
                y={53.607956}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-96-2-5"
                  x={79.820007}
                  y={53.607956}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH24}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-33"
                x={79.820007}
                y={99.241264}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-88-5-1"
                  x={79.820007}
                  y={99.241264}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH33}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-18"
                x={25.370846}
                y={129.66495}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-62-0-5"
                  x={25.370846}
                  y={129.66495}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH18}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-29"
                x={79.820007}
                y={78.959808}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-42-3-4"
                  x={79.820007}
                  y={78.959808}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH29}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-27"
                x={79.820007}
                y={68.819054}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-99-0-3"
                  x={79.820007}
                  y={68.819054}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH27}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-37"
                x={79.820007}
                y={119.52274}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-995-0-7"
                  x={79.820007}
                  y={119.52274}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH37}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-39"
                x={79.820007}
                y={129.66347}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-76-1-0"
                  x={79.820007}
                  y={129.66347}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH39}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-11"
                x={25.370846}
                y={94.172356}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-46-3-0"
                  x={25.370846}
                  y={94.172356}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH11}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-21"
                x={25.370846}
                y={144.87604}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-23-8-2"
                  x={25.370846}
                  y={144.87604}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH21}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-13"
                x={25.370846}
                y={104.3131}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-760-5-5"
                  x={25.370846}
                  y={104.3131}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH13}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-12"
                x={25.370846}
                y={99.242737}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-51-7-7"
                  x={25.370846}
                  y={99.242737}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH12}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-10"
                x={25.370846}
                y={89.101997}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-48-7-8"
                  x={25.370846}
                  y={89.101997}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH10}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-15"
                x={25.370846}
                y={114.45383}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93-9-5"
                  x={25.370846}
                  y={114.45383}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH15}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-16"
                x={25.370846}
                y={119.52421}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93-1-03-1"
                  x={25.370846}
                  y={119.52421}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH16}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-17"
                x={25.370846}
                y={124.59456}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93-1-0-4-8"
                  x={25.370846}
                  y={124.59456}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH17}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-20"
                x={25.370846}
                y={139.80566}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-75-9-8-0"
                  x={25.370846}
                  y={139.80566}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH20}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-22"
                x={79.820007}
                y={43.467236}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-23-4-0-2"
                  x={79.820007}
                  y={43.467236}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH22}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-30"
                x={79.820007}
                y={84.030167}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-42-5-2-9"
                  x={79.820007}
                  y={84.030167}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH30}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-32"
                x={79.820007}
                y={94.170906}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-49-2-5-8"
                  x={79.820007}
                  y={94.170906}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kva.CH32}
                </tspan>
              </text>
            </g>
            <g
              id="layer2-6-3-5"
              transform="translate(24 -.042) scale(.84482 1.1837)"
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.8807px"
              letterSpacing={0}
              strokeWidth={0.68746}
              wordSpacing={0}
            >
              <text
                id="varp1-KW_H-CH-9"
                x={25.370846}
                y={84.031631}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-7-2-5-2"
                  x={25.370846}
                  y={84.031631}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH9}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-1"
                x={25.370846}
                y={43.468685}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-3-0-7-5"
                  x={25.370846}
                  y={43.468685}
                  dy="0 0 0"
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH1}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-2"
                x={25.370846}
                y={48.539055}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-30-9-5-2"
                  x={25.370846}
                  y={48.539055}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH2}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-5"
                x={25.370846}
                y={63.75016}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-79-2-6-6"
                  x={25.370846}
                  y={63.75016}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH5}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-7"
                x={25.370846}
                y={73.890892}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-8-8-2-8"
                  x={25.370846}
                  y={73.890892}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH7}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-6"
                x={25.370846}
                y={68.820526}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-5-1-7-8"
                  x={25.370846}
                  y={68.820526}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH6}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-19"
                x={25.370846}
                y={134.73531}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-75-2-8-8"
                  x={25.370846}
                  y={134.73531}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH19}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-28"
                x={79.820007}
                y={73.889412}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-72-5-2-5"
                  x={79.820007}
                  y={73.889412}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH28}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-3"
                x={25.370846}
                y={53.609428}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-4-9-3-1"
                  x={25.370846}
                  y={53.609428}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH3}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-4"
                x={25.370846}
                y={58.67979}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-89-3-8-5"
                  x={25.370846}
                  y={58.67979}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH4}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-25"
                x={79.820007}
                y={58.678333}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-0-4-1-7"
                  x={79.820007}
                  y={58.678333}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH25}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-35"
                x={79.820007}
                y={109.382}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-045-8-1-4"
                  x={79.820007}
                  y={109.382}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH35}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-41"
                x={79.820007}
                y={139.8042}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-41-2-6-7"
                  x={79.820007}
                  y={139.8042}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH41}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-8"
                x={25.370846}
                y={78.961266}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-47-7-4-5"
                  x={25.370846}
                  y={78.961266}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH8}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-40"
                x={79.820007}
                y={134.73386}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-9-1-6-3"
                  x={79.820007}
                  y={134.73386}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH40}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-31"
                x={79.820007}
                y={89.100525}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-49-8-6-5"
                  x={79.820007}
                  y={89.100525}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH31}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-38"
                x={79.820007}
                y={124.59312}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-2-7-6-6"
                  x={79.820007}
                  y={124.59312}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH38}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-42"
                x={79.820007}
                y={144.87457}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-50-2-9-6"
                  x={79.820007}
                  y={144.87457}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH42}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-23"
                x={79.820007}
                y={48.537594}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-80-2-9-1"
                  x={79.820007}
                  y={48.537594}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH23}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-36"
                x={79.820007}
                y={114.45236}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-82-9-3-1"
                  x={79.820007}
                  y={114.45236}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH36}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-26"
                x={79.820007}
                y={63.748692}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-892-4-5-4"
                  x={79.820007}
                  y={63.748692}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH26}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-14"
                x={25.370846}
                y={109.38346}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-6-7-0-2"
                  x={25.370846}
                  y={109.38346}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH14}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-34"
                x={79.820007}
                y={104.31162}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-02-7-0-8"
                  x={79.820007}
                  y={104.31162}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH34}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-24"
                x={79.820007}
                y={53.607956}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-96-2-5-5"
                  x={79.820007}
                  y={53.607956}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH24}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-33"
                x={79.820007}
                y={99.241264}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-88-5-1-4"
                  x={79.820007}
                  y={99.241264}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH33}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-18"
                x={25.370846}
                y={129.66495}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-62-0-5-6"
                  x={25.370846}
                  y={129.66495}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH18}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-29"
                x={79.820007}
                y={78.959808}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-42-3-4-5"
                  x={79.820007}
                  y={78.959808}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH29}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-27"
                x={79.820007}
                y={68.819054}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-99-0-3-9"
                  x={79.820007}
                  y={68.819054}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH27}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-37"
                x={79.820007}
                y={119.52274}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-995-0-7-6"
                  x={79.820007}
                  y={119.52274}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH37}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-39"
                x={79.820007}
                y={129.66347}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-76-1-0-5"
                  x={79.820007}
                  y={129.66347}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH39}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-11"
                x={25.370846}
                y={94.172356}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-46-3-0-1"
                  x={25.370846}
                  y={94.172356}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH11}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-21"
                x={25.370846}
                y={144.87604}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-23-8-2-0"
                  x={25.370846}
                  y={144.87604}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH21}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-13"
                x={25.370846}
                y={104.3131}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-760-5-5-6"
                  x={25.370846}
                  y={104.3131}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH13}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-12"
                x={25.370846}
                y={99.242737}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-51-7-7-3"
                  x={25.370846}
                  y={99.242737}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH12}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-10"
                x={25.370846}
                y={89.101997}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-48-7-8-2"
                  x={25.370846}
                  y={89.101997}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH10}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-15"
                x={25.370846}
                y={114.45383}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93-9-5-5"
                  x={25.370846}
                  y={114.45383}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH15}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-16"
                x={25.370846}
                y={119.52421}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93-1-03-1-8"
                  x={25.370846}
                  y={119.52421}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH16}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-17"
                x={25.370846}
                y={124.59456}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93-1-0-4-8-5"
                  x={25.370846}
                  y={124.59456}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH17}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-20"
                x={25.370846}
                y={139.80566}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-75-9-8-0-4"
                  x={25.370846}
                  y={139.80566}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH20}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-22"
                x={79.820007}
                y={43.467236}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-23-4-0-2-1"
                  x={79.820007}
                  y={43.467236}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH22}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-30"
                x={79.820007}
                y={84.030167}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-42-5-2-9-7"
                  x={79.820007}
                  y={84.030167}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH30}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-32"
                x={79.820007}
                y={94.170906}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-49-2-5-8-5"
                  x={79.820007}
                  y={94.170906}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel1_kwh.CH32}
                </tspan>
              </text>
            </g>
            <g
              id="layer2-8"
              transform="translate(97) scale(.84482 1.1837)"
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.8807px"
              letterSpacing={0}
              strokeWidth={0.68746}
              wordSpacing={0}
            >
              <text
                id="varp1-A-CH-9-3"
                x={29.755386}
                y={84.031631}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-7-8"
                  x={29.755386}
                  y={84.031631}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH9}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-1-5"
                x={29.755386}
                y={43.468685}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-3-7"
                  x={29.755386}
                  y={43.468685}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH1}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-2-4"
                x={29.755386}
                y={48.539055}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-30-7"
                  x={29.755386}
                  y={48.539055}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH2}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-5-6"
                x={29.755386}
                y={63.75016}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-79-6"
                  x={29.755386}
                  y={63.75016}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH5}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-7-3"
                x={29.755386}
                y={73.890892}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-8-9"
                  x={29.755386}
                  y={73.890892}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH7}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-6-0"
                x={29.755386}
                y={68.820526}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-5-9"
                  x={29.755386}
                  y={68.820526}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH6}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-19-3"
                x={29.755386}
                y={134.73531}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-75-7"
                  x={29.755386}
                  y={134.73531}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH19}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-28-6"
                x={83.020866}
                y={73.889412}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-72-3"
                  x={83.020866}
                  y={73.889412}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH28}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-3-6"
                x={29.755386}
                y={53.609428}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-4-8"
                  x={29.755386}
                  y={53.609428}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH3}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-4-9"
                x={29.755386}
                y={58.67979}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-89-2"
                  x={29.755386}
                  y={58.67979}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH4}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-25-2"
                x={83.020866}
                y={58.678333}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-0-9"
                  x={83.020866}
                  y={58.678333}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH25}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-35-1"
                x={83.020866}
                y={109.382}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-045-3"
                  x={83.020866}
                  y={109.382}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH35}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-41-1"
                x={83.020866}
                y={139.8042}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-41-27"
                  x={83.020866}
                  y={139.8042}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH41}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-8-4"
                x={29.755386}
                y={78.961266}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-47-2"
                  x={29.755386}
                  y={78.961266}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH8}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-40-9"
                x={83.020866}
                y={134.73386}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-9-8"
                  x={83.020866}
                  y={134.73386}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH40}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-31-6"
                x={83.020866}
                y={89.100525}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-49-5"
                  x={83.020866}
                  y={89.100525}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH31}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-38-3"
                x={83.020866}
                y={124.59312}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-2-5"
                  x={83.020866}
                  y={124.59312}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH38}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-42-2"
                x={83.020866}
                y={144.87457}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-50-1"
                  x={83.020866}
                  y={144.87457}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH42}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-23-1"
                x={83.020866}
                y={48.537594}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-80-0"
                  x={83.020866}
                  y={48.537594}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH23}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-36-4"
                x={83.020866}
                y={114.45236}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-82-7"
                  x={83.020866}
                  y={114.45236}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH36}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-26-1"
                x={83.020866}
                y={63.748692}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-892-7"
                  x={83.020866}
                  y={63.748692}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH26}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-14-5"
                x={29.755386}
                y={109.38346}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-6-4"
                  x={29.755386}
                  y={109.38346}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH14}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-34-2"
                x={83.020866}
                y={104.31162}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-02-4"
                  x={83.020866}
                  y={104.31162}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH34}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-24-6"
                x={83.020866}
                y={53.607956}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-96-25"
                  x={83.020866}
                  y={53.607956}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH24}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-33-4"
                x={83.020866}
                y={99.241264}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-88-4"
                  x={83.020866}
                  y={99.241264}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH33}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-18-4"
                x={29.755386}
                y={129.66495}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-62-3"
                  x={29.755386}
                  y={129.66495}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH18}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-29-9"
                x={83.020866}
                y={78.959808}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-42-4"
                  x={83.020866}
                  y={78.959808}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH29}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-27-0"
                x={83.020866}
                y={68.819054}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-99-9"
                  x={83.020866}
                  y={68.819054}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH27}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-37-3"
                x={83.020866}
                y={119.52274}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-995-1"
                  x={83.020866}
                  y={119.52274}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH37}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-39-4"
                x={83.020866}
                y={129.66347}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-76-7"
                  x={83.020866}
                  y={129.66347}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH39}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-11-6"
                x={29.755386}
                y={94.172356}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-46-9"
                  x={29.755386}
                  y={94.172356}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH11}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-21-4"
                x={29.755386}
                y={144.87604}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-23-2"
                  x={29.755386}
                  y={144.87604}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH21}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-13-4"
                x={29.755386}
                y={104.3131}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-760-9"
                  x={29.755386}
                  y={104.3131}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH13}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-12-8"
                x={29.755386}
                y={99.242737}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-51-2"
                  x={29.755386}
                  y={99.242737}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH12}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-10-7"
                x={29.755386}
                y={89.101997}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-48-9"
                  x={29.755386}
                  y={89.101997}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH10}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-15-9"
                x={29.755386}
                y={114.45383}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93-94"
                  x={29.755386}
                  y={114.45383}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH15}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-16-4"
                x={29.755386}
                y={119.52421}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93-1-1"
                  x={29.755386}
                  y={119.52421}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH16}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-17-2"
                x={29.755386}
                y={124.59456}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93-1-0-9"
                  x={29.755386}
                  y={124.59456}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH17}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-20-8"
                x={29.755386}
                y={139.80566}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-75-9-9"
                  x={29.755386}
                  y={139.80566}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH20}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-22-2"
                x={83.020866}
                y={43.467236}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-23-4-6"
                  x={83.020866}
                  y={43.467236}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH22}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-30-9"
                x={83.020866}
                y={84.030167}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-42-5-1"
                  x={83.020866}
                  y={84.030167}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH30}
                </tspan>
              </text>
              <text
                id="varp1-A-CH-32-6"
                x={83.020866}
                y={94.170906}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-49-2-4"
                  x={83.020866}
                  y={94.170906}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_Amps.CH32}
                </tspan>
              </text>
            </g>
            <g
              id="layer2-6-3-58"
              transform="translate(109) scale(.84482 1.1837)"
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.8807px"
              letterSpacing={0}
              strokeWidth={0.68746}
              wordSpacing={0}
            >
              <text
                id="varp1-KVA-CH-9-2"
                x={29.755386}
                y={84.031631}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-7-2-5-5"
                  x={29.755386}
                  y={84.031631}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH9}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-1-7"
                x={29.755386}
                y={43.468685}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-3-0-7-1"
                  x={29.755386}
                  y={43.468685}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH1}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-2-5"
                x={29.755386}
                y={48.539055}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-30-9-5-3"
                  x={29.755386}
                  y={48.539055}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH2}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-5-8"
                x={29.755386}
                y={63.75016}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-79-2-6-0"
                  x={29.755386}
                  y={63.75016}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH5}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-7-4"
                x={29.755386}
                y={73.890892}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-8-8-2-3"
                  x={29.755386}
                  y={73.890892}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH7}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-6-3"
                x={29.755386}
                y={68.820526}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-5-1-7-1"
                  x={29.755386}
                  y={68.820526}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH6}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-19-0"
                x={29.755386}
                y={134.73531}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-75-2-8-89"
                  x={29.755386}
                  y={134.73531}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH19}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-28-3"
                x={83.020866}
                y={73.889412}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-72-5-2-7"
                  x={83.020866}
                  y={73.889412}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH28}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-3-1"
                x={29.755386}
                y={53.609428}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-4-9-3-7"
                  x={29.755386}
                  y={53.609428}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH3}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-4-4"
                x={29.755386}
                y={58.67979}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-89-3-8-8"
                  x={29.755386}
                  y={58.67979}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH4}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-25-1"
                x={83.020866}
                y={58.678333}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-0-4-1-0"
                  x={83.020866}
                  y={58.678333}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH25}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-35-7"
                x={83.020866}
                y={109.382}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-045-8-1-6"
                  x={83.020866}
                  y={109.382}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH35}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-41-4"
                x={83.020866}
                y={139.8042}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-41-2-6-1"
                  x={83.020866}
                  y={139.8042}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH41}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-8-1"
                x={29.755386}
                y={78.961266}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-47-7-4-1"
                  x={29.755386}
                  y={78.961266}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH8}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-40-4"
                x={83.020866}
                y={134.73386}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-9-1-6-9"
                  x={83.020866}
                  y={134.73386}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH40}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-31-8"
                x={83.020866}
                y={89.100525}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-49-8-6-4"
                  x={83.020866}
                  y={89.100525}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH31}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-38-6"
                x={83.020866}
                y={124.59312}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-2-7-6-7"
                  x={83.020866}
                  y={124.59312}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH38}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-42-0"
                x={83.020866}
                y={144.87457}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-50-2-9-9"
                  x={83.020866}
                  y={144.87457}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH42}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-23-3"
                x={83.020866}
                y={48.537594}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-80-2-9-9"
                  x={83.020866}
                  y={48.537594}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH23}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-36-1"
                x={83.020866}
                y={114.45236}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-82-9-3-5"
                  x={83.020866}
                  y={114.45236}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH36}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-26-3"
                x={83.020866}
                y={63.748692}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-892-4-5-3"
                  x={83.020866}
                  y={63.748692}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH26}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-14-6"
                x={29.755386}
                y={109.38346}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-6-7-0-4"
                  x={29.755386}
                  y={109.38346}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH14}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-34-7"
                x={83.020866}
                y={104.31162}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-02-7-0-9"
                  x={83.020866}
                  y={104.31162}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH34}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-24-5"
                x={83.020866}
                y={53.607956}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-96-2-5-2"
                  x={83.020866}
                  y={53.607956}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH24}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-33-5"
                x={83.020866}
                y={99.241264}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-88-5-1-6"
                  x={83.020866}
                  y={99.241264}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH33}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-18-4"
                x={29.755386}
                y={129.66495}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-62-0-5-8"
                  x={29.755386}
                  y={129.66495}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH18}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-29-6"
                x={83.020866}
                y={78.959808}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-42-3-4-0"
                  x={83.020866}
                  y={78.959808}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH29}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-27-7"
                x={83.020866}
                y={68.819054}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-99-0-3-1"
                  x={83.020866}
                  y={68.819054}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH27}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-37-5"
                x={83.020866}
                y={119.52274}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-995-0-7-4"
                  x={83.020866}
                  y={119.52274}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH37}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-39-2"
                x={83.020866}
                y={129.66347}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-76-1-0-9"
                  x={83.020866}
                  y={129.66347}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH39}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-11-0"
                x={29.755386}
                y={94.172356}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-46-3-0-7"
                  x={29.755386}
                  y={94.172356}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH11}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-21-9"
                x={29.755386}
                y={144.87604}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-23-8-2-2"
                  x={29.755386}
                  y={144.87604}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH21}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-13-2"
                x={29.755386}
                y={104.3131}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-760-5-5-8"
                  x={29.755386}
                  y={104.3131}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH13}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-12-5"
                x={29.755386}
                y={99.242737}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-51-7-7-2"
                  x={29.755386}
                  y={99.242737}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH12}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-10-7"
                x={29.755386}
                y={89.101997}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-48-7-8-9"
                  x={29.755386}
                  y={89.101997}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH10}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-15-3"
                x={29.755386}
                y={114.45383}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93-9-5-9"
                  x={29.755386}
                  y={114.45383}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH15}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-16-9"
                x={29.755386}
                y={119.52421}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93-1-03-1-81"
                  x={29.755386}
                  y={119.52421}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH16}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-17-3"
                x={29.755386}
                y={124.59456}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93-1-0-4-8-0"
                  x={29.755386}
                  y={124.59456}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH17}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-20-3"
                x={29.755386}
                y={139.80566}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-75-9-8-0-7"
                  x={29.755386}
                  y={139.80566}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH20}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-22-0"
                x={83.020866}
                y={43.467236}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-23-4-0-2-8"
                  x={83.020866}
                  y={43.467236}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH22}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-30-3"
                x={83.020866}
                y={84.030167}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-42-5-2-9-8"
                  x={83.020866}
                  y={84.030167}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH30}
                </tspan>
              </text>
              <text
                id="varp1-KVA-CH-32-9"
                x={83.020866}
                y={94.170906}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-49-2-5-8-1"
                  x={83.020866}
                  y={94.170906}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kva.CH32}
                </tspan>
              </text>
            </g>
            <g
              id="layer2-6-3-5-9"
              transform="translate(121 -.042) scale(.84482 1.1837)"
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.8807px"
              letterSpacing={0}
              strokeWidth={0.68746}
              wordSpacing={0}
            >
              <text
                id="varp1-KW_H-CH-9-6"
                x={29.755386}
                y={84.031631}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-7-2-5-2-1"
                  x={29.755386}
                  y={84.031631}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH9}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-1-3"
                x={29.755386}
                y={43.468685}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-3-0-7-5-9"
                  x={29.755386}
                  y={43.468685}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH1}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-2-3"
                x={29.755386}
                y={48.539055}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-30-9-5-2-3"
                  x={29.755386}
                  y={48.539055}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH2}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-5-5"
                x={29.755386}
                y={63.75016}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-79-2-6-6-7"
                  x={29.755386}
                  y={63.75016}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH5}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-7-2"
                x={29.755386}
                y={73.890892}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-8-8-2-8-8"
                  x={29.755386}
                  y={73.890892}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH7}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-6-0"
                x={29.755386}
                y={68.820526}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-5-1-7-8-4"
                  x={29.755386}
                  y={68.820526}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH6}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-19-1"
                x={29.755386}
                y={134.73531}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-75-2-8-8-7"
                  x={29.755386}
                  y={134.73531}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH19}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-28-6"
                x={83.020866}
                y={73.889412}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-72-5-2-5-8"
                  x={83.020866}
                  y={73.889412}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH28}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-3-7"
                x={29.755386}
                y={53.609428}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-4-9-3-1-8"
                  x={29.755386}
                  y={53.609428}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH3}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-4-5"
                x={29.755386}
                y={58.67979}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-89-3-8-5-2"
                  x={29.755386}
                  y={58.67979}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH4}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-25-6"
                x={83.020866}
                y={58.678333}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-0-4-1-7-8"
                  x={83.020866}
                  y={58.678333}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH25}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-35-3"
                x={83.020866}
                y={109.382}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-045-8-1-4-7"
                  x={83.020866}
                  y={109.382}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH35}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-41-6"
                x={83.020866}
                y={139.8042}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-41-2-6-7-3"
                  x={83.020866}
                  y={139.8042}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH41}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-8-2"
                x={29.755386}
                y={78.961266}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-47-7-4-5-2"
                  x={29.755386}
                  y={78.961266}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH8}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-40-1"
                x={83.020866}
                y={134.73386}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-9-1-6-3-8"
                  x={83.020866}
                  y={134.73386}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH40}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-31-3"
                x={83.020866}
                y={89.100525}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-49-8-6-5-3"
                  x={83.020866}
                  y={89.100525}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH31}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-38-0"
                x={83.020866}
                y={124.59312}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-2-7-6-6-0"
                  x={83.020866}
                  y={124.59312}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH38}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-42-4"
                x={83.020866}
                y={144.87457}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-50-2-9-6-0"
                  x={83.020866}
                  y={144.87457}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH42}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-23-7"
                x={83.020866}
                y={48.537594}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-80-2-9-1-1"
                  x={83.020866}
                  y={48.537594}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH23}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-36-4"
                x={83.020866}
                y={114.45236}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-82-9-3-1-6"
                  x={83.020866}
                  y={114.45236}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH36}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-26-0"
                x={83.020866}
                y={63.748692}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-892-4-5-4-9"
                  x={83.020866}
                  y={63.748692}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH26}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-14-0"
                x={29.755386}
                y={109.38346}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-6-7-0-2-1"
                  x={29.755386}
                  y={109.38346}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH14}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-34-7"
                x={83.020866}
                y={104.31162}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-02-7-0-8-0"
                  x={83.020866}
                  y={104.31162}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH34}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-24-6"
                x={83.020866}
                y={53.607956}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-96-2-5-5-0"
                  x={83.020866}
                  y={53.607956}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH24}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-33-8"
                x={83.020866}
                y={99.241264}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-88-5-1-4-8"
                  x={83.020866}
                  y={99.241264}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH33}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-18-7"
                x={29.755386}
                y={129.66495}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-62-0-5-6-1"
                  x={29.755386}
                  y={129.66495}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH18}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-29-6"
                x={83.020866}
                y={78.959808}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-42-3-4-5-1"
                  x={83.020866}
                  y={78.959808}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH29}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-27-0"
                x={83.020866}
                y={68.819054}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-99-0-3-9-4"
                  x={83.020866}
                  y={68.819054}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH27}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-37-8"
                x={83.020866}
                y={119.52274}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-995-0-7-6-5"
                  x={83.020866}
                  y={119.52274}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH37}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-39-9"
                x={83.020866}
                y={129.66347}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-76-1-0-5-1"
                  x={83.020866}
                  y={129.66347}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH39}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-11-4"
                x={29.755386}
                y={94.172356}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-46-3-0-1-2"
                  x={29.755386}
                  y={94.172356}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH11}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-21-2"
                x={29.755386}
                y={144.87604}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-23-8-2-0-5"
                  x={29.755386}
                  y={144.87604}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH21}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-13-0"
                x={29.755386}
                y={104.3131}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-760-5-5-6-7"
                  x={29.755386}
                  y={104.3131}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH13}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-12-1"
                x={29.755386}
                y={99.242737}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-51-7-7-3-8"
                  x={29.755386}
                  y={99.242737}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH12}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-10-3"
                x={29.755386}
                y={89.101997}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-48-7-8-2-7"
                  x={29.755386}
                  y={89.101997}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH10}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-15-5"
                x={29.755386}
                y={114.45383}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93-9-5-5-8"
                  x={29.755386}
                  y={114.45383}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH15}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-16-4"
                x={29.755386}
                y={119.52421}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93-1-03-1-8-8"
                  x={29.755386}
                  y={119.52421}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH16}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-17-6"
                x={29.755386}
                y={124.59456}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-93-1-0-4-8-5-3"
                  x={29.755386}
                  y={124.59456}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH17}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-20-5"
                x={29.755386}
                y={139.80566}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-75-9-8-0-4-9"
                  x={29.755386}
                  y={139.80566}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH20}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-22-0"
                x={83.020866}
                y={43.467236}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-23-4-0-2-1-5"
                  x={83.020866}
                  y={43.467236}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH22}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-30-9"
                x={83.020866}
                y={84.030167}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-42-5-2-9-7-1"
                  x={83.020866}
                  y={84.030167}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH30}
                </tspan>
              </text>
              <text
                id="varp1-KW_H-CH-32-9"
                x={83.020866}
                y={94.170906}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  lineHeight: 1.25
                }}
                xmlSpace="preserve"
                opacity={0.96}
              >
                <tspan
                  id="tspan2520-8-5-02-42-49-2-5-8-5-2"
                  x={83.020866}
                  y={94.170906}
                  style={{
                    fontVariantCaps: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantNumeric: "normal"
                  }}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.8807px"
                  strokeWidth={0.68746}
                >
                  {Panel2_kwh.CH32}
                </tspan>
              </text>
            </g>
            <ellipse
              id="pdu_1b_f3_alarm"
              cx={170.42}
              cy={17.548}
              rx={2.6248}
              ry={2.6585}
              fillRule="evenodd"
              fill="#343434"
              opacity={0.899}
              paintOrder="markers stroke fill"
              className={Estado.Alarma}
            />
            <ellipse
              id="pdu5_out_vol"
              cx={157.43}
              cy={17.548}
              rx={2.625}
              ry={2.6585}
              fillRule="evenodd"
              fill="#1ad372"
              className={Estado.Status}
              opacity={0.899}
              paintOrder="markers stroke fill"
            />
            <ellipse
              id="path2610-3-6-99"
              transform="matrix(.64756 0 0 .38563 107.04 3.823)"
              cx={78.266}
              cy={31.379}
              rx={2.3671}
              ry={1.9181}
              fillRule="evenodd"
              fill="#fff"
              filter="url(#filter3102-29)"
              opacity={0.36022}
              paintOrder="markers stroke fill"
              strokeWidth={1.5106}
            />
            <ellipse
              id="path2610-3-6-9-2"
              transform="matrix(.58569 0 0 .34746 124.63 5.165)"
              cx={78.266}
              cy={31.379}
              rx={2.3671}
              ry={1.9181}
              fillRule="evenodd"
              fill="#fff"
              filter="url(#filter3102-5-0)"
              opacity={0.16667}
              paintOrder="markers stroke fill"
            />
            <path
              id="estado_eq"
              transform="matrix(1 0 0 .99396 0 .792)"
              fillRule="evenodd"
              fill="url(#linearGradient4474)"
              strokeWidth={0.26298}
              className={Estado.Status_ON}
              d="M88.314 8.4258H121.68599999999999V18.344700000000003H88.314z"
            />
            <text
              id="nom_on-5"//sombra
              transform="matrix(1.023 0 0 .97163 0 .792)"
              x={90.061333}
              y={15.320139}
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
              fill="#000"
              fontFamily="sans-serif"
              fontSize="6.3458px"
              letterSpacing={0}
              strokeWidth={0.36522}
              wordSpacing={0}
            >
              <tspan
                id="tspan6769-5"
                x={87.561333}
                y={15.320139}
                fill="#000"
                fontFamily="Franklin Gothic Medium"
                fontSize="5.3458px"
                strokeWidth={0.36522}
              >
                {DatosGenerales.Nombre}
              </tspan>
            </text>
            <text
              id="nom_on"
              transform="matrix(1.023 0 0 .97163 0 .792)"
              x={89.997139}
              y={15.543073}
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="6.3458px"
              letterSpacing={0}
              strokeWidth={0.36522}
              wordSpacing={0}
            >
              <tspan
                id="tspan6769"
                x={87.597139}
                y={15.543073}
                fill="#fff"
                fontFamily="Franklin Gothic Medium"
                fontSize="5.3458px"
                strokeWidth={0.36522}
              >
                {DatosGenerales.Nombre}
              </tspan>
            </text>
                        
          </g>

    )
  }
