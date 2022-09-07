import React from 'react';

type Estado ={
    Nombre: string;
    Status: string;
};

export interface DataGrupalgen {
    Estado: Estado;
};

export const Variables = ({Estado}: DataGrupalgen) =>{
return (
  <g id="layer3">
  <text
    id="equipo"
    x={35.502651}
    y={46.192722}
    style={{
      lineHeight: 1.25
    }}
    xmlSpace="preserve"
    fill="#fff"
    fontFamily="sans-serif"
    fontSize="21.595px"
    letterSpacing={0}
    strokeWidth={0.36411}
    wordSpacing={0}
  >
    <tspan
      id="tspan6769"
      x={35.502651}
      y={46.192722}
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="21.968px"
      strokeWidth={0.36411}
    >
      {Estado.Nombre}
    </tspan>
  </text>
  <g id="layer4">
        <path
          id="path1056-1-64-0-1-0-9"
          d="M13.721 61.136V29.681l14.816-14.82h105.27V46.77l-15.42 14.971z"
          className={Estado.Status}
          style={{
            mixBlendMode: "normal"
          }}
          fillRule="evenodd"
          fill="url(#linearGradient3230)"
          strokeWidth={0.272}
          stroke="#4ddee5"
        />
      </g>
</g>
)
}
