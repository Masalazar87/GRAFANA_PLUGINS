import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
// import { stylesFactory, useTheme } from '@grafana/ui';
import { stylesFactory } from '@grafana/ui';
import Chiller from 'components/chiller'

//import { DataChiller } from 'components/variables'
import dataChiller from 'modules/dataChiller';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  // const theme = useTheme();
  const styles = getStyles();

  //console.log("data: ", data)
  //console.log("options: ", options)
  
  let chiller = dataChiller(data, options);

  

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
      <Chiller
        DatosGenerales={chiller.DatosGenerales}
        Compresor1={chiller.Compresor1}
        Compresor2={chiller.Compresor2}
        Principal={chiller.Principal}
        Alarmas={chiller.Alarmas}
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
