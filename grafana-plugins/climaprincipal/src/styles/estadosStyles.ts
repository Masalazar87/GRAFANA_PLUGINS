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
    alarma: css`
      fill: red;
      animation: ${parpadeo} 1s ease infinite;
      opacity: {0};
    `,
    mant: css`
      fill: orange;
      animation: ${parpadeo} 1s ease infinite;
      opacity: {0};
    `,
    ok: css`
      fill: #2fc43b;
    `,
    on: css`
      fill: #0066FF;
    `,
    enable: css`
      fill: url(#linearGradient4474);
    `,
  };
});

const styles = getStyles();

export default styles;