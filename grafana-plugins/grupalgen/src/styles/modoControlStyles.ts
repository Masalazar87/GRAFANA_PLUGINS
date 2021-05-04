import { stylesFactory } from '@grafana/ui';
import { css } from 'emotion';

const getStyles = stylesFactory(() => {
  return {
    SinConexion: css`
      fill: #999;
    `,
    On: css`
      fill: green;
    `,
    On2: css`
      fill: red;
    `,
    On3: css`
      fill: orange;
    `,
  };
});

const styles = getStyles();

export default styles;
