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
    `,
    ok1: css`
      stroke: url(#linearGradient4474); 
    `,
    imagen: css`
      opacity: 1; 
    `,
  };
});

const styles = getStyles();

export default styles;
