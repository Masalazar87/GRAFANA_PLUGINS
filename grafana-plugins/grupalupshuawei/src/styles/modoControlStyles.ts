import { stylesFactory } from '@grafana/ui';
import { css } from 'emotion';

const getStyles = stylesFactory(() => {
  return {
    SinConexion: css`
    fill: #999;
    `,
    SinConexion2: css`
    stroke: #999;
    `,
    On: css`
      fill: green;
    `,
    Off: css`
      fill: yellow;
    `,
  };
});

const styles = getStyles();

export default styles;

