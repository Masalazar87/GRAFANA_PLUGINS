import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';

import dataClima from 'modules/dataClima';
import Clima from 'components/clima';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  //const theme = useTheme();
  const styles = getStyles();

  let clima = dataClima(data,options);

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
      <Clima
        ParametrosSIS1={clima.ParametrosSIS1}
        ParametrosSIS2={clima.ParametrosSIS2}
        EstadosSIS1={clima.EstadosSIS1}
        EstadosSIS2={clima.EstadosSIS2}
        AlarmasSIS1={clima.AlarmasSIS1}
        AlarmasSIS2={clima.AlarmasSIS2}
        Tuberias={clima.Tuberias}
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
