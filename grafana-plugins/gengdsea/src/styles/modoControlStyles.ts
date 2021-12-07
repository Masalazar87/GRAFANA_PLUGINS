import { stylesFactory } from '@grafana/ui';
import { css, keyframes } from 'emotion';

const parpadeo = keyframes`
  0% { opacity: 1.0; };
  100% { opacity: 0.0; };
`;

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
      fill: green;
      animation: ${parpadeo} 1s ease infinite;
    `,
    alarma1: css`
      fill: yellow;
      animation: ${parpadeo} 1s ease infinite;
    `,
    alarma2: css`
      fill: red;
      animation: ${parpadeo} 1s ease infinite;
    `,
    alarma3: css`
      fill: purple;
      animation: ${parpadeo} 1s ease infinite;
    `,
  };
});

const styles = getStyles();

export default styles;
