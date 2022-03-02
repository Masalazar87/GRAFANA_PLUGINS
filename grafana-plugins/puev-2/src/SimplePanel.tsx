import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import Pue from './components/pue';

import dataPue from 'modules/dataPue';  

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({options, data, width, height}) => {
  //const theme = useTheme();
  const styles = getStyles();

  let pue = dataPue(data, options);
  
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
      <Pue
        Estado={pue.Estado}
        Principal={pue.Principal}
        //Cargas_kw={pue.Cargas_kw}
        Cargas_kva={pue.Cargas_kva}
        Cargas_uso={pue.Cargas_uso}
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
