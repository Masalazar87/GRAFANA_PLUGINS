import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import Tpdu_sec from './components/tpdu_sec';

import dataTpdu_sec from 'modules/dataTpdu_sec';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, replaceVariables }) => {
  //const theme = useTheme();
  const styles = getStyles();

  let tpdu_sec= dataTpdu_sec(data, options, replaceVariables);

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
    <Tpdu_sec
        DatosGenerales={tpdu_sec.DatosGenerales}
        Principal={tpdu_sec.Principal}
        Parametros={tpdu_sec.Parametros}
        Estados={tpdu_sec.Estados}   
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
