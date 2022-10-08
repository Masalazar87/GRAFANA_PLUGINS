import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
//import { stylesFactory, useTheme } from '@grafana/ui';
import { stylesFactory } from '@grafana/ui';
//import Principal from './components/principal';
import Principal2 from './components/principal2';

import dataPrincipal from 'modules/dataPrincipal';
interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  //const theme = useTheme();
  const styles = getStyles();

 let principal = dataPrincipal(data, options);
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
      <Principal2
      ParametrosElec={principal.ParametrosElec}
      ParametrosClima={principal.ParametrosClima}
      ParametrosUPS_SIS1={principal.ParametrosUPS_SIS1}
      ParametrosUPS_SIS2={principal.ParametrosUPS_SIS2}
      ParametrosClima_SIS1={principal.ParametrosClima_SIS1}
      ParametrosClima_SIS2={principal.ParametrosClima_SIS2}
      ParametrosGEN_SIS1={principal.ParametrosGEN_SIS1}
      ParametrosGEN_SIS2={principal.ParametrosGEN_SIS2}
      Estados_Principales={principal.Estados_Principales}
      Estados_SIS1={principal.Estados_SIS1}
      Estados_SIS2={principal.Estados_SIS2}
      Alarmas={principal.Alarmas}
      Alarmas_SIS1={principal.Alarmas_SIS1}
      Alarmas_SIS2={principal.Alarmas_SIS2}
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
