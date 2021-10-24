import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
//import { stylesFactory, useTheme } from '@grafana/ui';
import { stylesFactory } from '@grafana/ui';
import Grupalups from './components/grupalups';


import dataGrupalups from 'modules/dataGrupalups';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  //const theme = useTheme();
  const styles = getStyles();

   //console.log("data: ", data)
  //console.log("options: ", options)

  let grupalups = dataGrupalups(data, options);
  
  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <Grupalups
        DatosGenerales={grupalups.DatosGenerales}
        Parametros={grupalups.Parametros}
        Estados={grupalups.Estados}
        Alarmas={grupalups.Alarmas}
        Conexion={grupalups.Conexion}
        Animacion={grupalups.Animacion}
      />
    </div>
  );
};
        
const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
