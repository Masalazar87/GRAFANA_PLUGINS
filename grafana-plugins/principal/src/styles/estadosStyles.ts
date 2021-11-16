import { stylesFactory } from '@grafana/ui';
import { css, keyframes } from 'emotion';

const parpadeo = keyframes`
  0% { opacity: 1.0; };
  100% { opacity: 0.0; };
`;

const getStyles = stylesFactory(() => {
  return {
    sinconexion: css`
      fill: #999;
    `,
    on: css`
      fill: #2fc43b;
      //animation: ${parpadeo} 1s ease infinite;
    `,
    alarma: css`
      fill: red;
      animation: ${parpadeo} 1s ease infinite;
    `,
  };
});

const styles = getStyles();

export default styles;