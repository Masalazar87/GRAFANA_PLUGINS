import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import Psg from './components/psg';

import dataPsg from 'modules/dataPsg';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, replaceVariables }) => {
  //const theme = useTheme();
  const styles = getStyles();

  let psg= dataPsg(data, options, replaceVariables);

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          //width: ${width}px;
          //height: ${height}px;
        `
      )}
    >
    <Psg
        DatosGenerales={psg.DatosGenerales}
        Principal={psg.Principal}
        Parametros={psg.Parametros}
        Estados={psg.Estados}   
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
