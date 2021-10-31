import React from 'react'
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
//import { stylesFactory, useTheme } from '@grafana/ui';
import { stylesFactory } from '@grafana/ui';
import Rectifier from './components/rectifier';

//import { DataUps } from 'components/variables';
import dataRectifier from 'modules/dataRectifier';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({options, data, width, height, replaceVariables }) => {
  
  const styles = getStyles();

  let rectifier = dataRectifier(data, options, replaceVariables);
      
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
      <Rectifier
        DatosGenerales={rectifier.DatosGenerales}
        Principal={rectifier.Principal}
        Parametros={rectifier.Parametros}
        Alarmas={rectifier.Alarmas}    
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
