import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import Pdi from 'components/pdi';

import dataPdi from 'modules/dataPdi';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height,replaceVariables }) => {
 
  const styles = getStyles();

  let pdi = dataPdi(data, options, replaceVariables);
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
    <Pdi
    DatosGenerales={pdi.DatosGenerales}
    Estado={pdi.Estado}
    Panel1_kva = {pdi.Panel1_kva}
    Panel1_kwh = {pdi.Panel1_kwh}
    Panel1_Amps = {pdi.Panel1_Amps}
    Panel2_kva = {pdi.Panel2_kva}
    Panel2_kwh = {pdi.Panel2_kwh}
    Panel2_Amps = {pdi.Panel2_Amps}
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
