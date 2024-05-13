import { stylesFactory } from '@grafana/ui';
import { css, keyframes } from 'emotion';

const parpadeo = keyframes`
  0% { opacity: 1.0; };
  100% { opacity: 0.0; };
`;

const getStyles = stylesFactory(() => {
  return {
    sinConexion: css`
      fill: #999;
    `,
    sinConexion2: css`
      stroke: #999;
    `,
    alarma: css`
      fill: orange;
      animation: ${parpadeo} 1s ease infinite;
    `,
    ok: css`
      fill: green;
    `,
    alarma1: css`
      stroke: orange;
      animation: ${parpadeo} 1s ease infinite;
    `,
    ok1: css`
      stroke: red;
      animation: ${parpadeo} 1s ease infinite;
    `,
    off: css`
      opacity:0;
      `,
  };
});

const styles = getStyles();

export default styles;
