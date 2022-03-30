import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
//import { stylesFactory, useTheme } from '@grafana/ui';
import { stylesFactory } from '@grafana/ui';
import Ecoluz from 'components/ecoluz';

import dataEcoluz from 'modules/dataEcoluz';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  //const theme = useTheme();
  const styles = getStyles();
 
  let ecoluz = dataEcoluz(data, options);
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
    <Ecoluz
    Parametros={ecoluz.Parametros}
    DatosGenerales={ecoluz.DatosGenerales}
    Estados={ecoluz.Estados}
    Alarmas={ecoluz.Alarmas}
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
