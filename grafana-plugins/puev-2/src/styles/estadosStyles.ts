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
    gen: css`
      fill: orange;
      animation: ${parpadeo} 2s ease infinite;
    `,
    eee: css`
      stroke: url(#linearGradient4474);
      animation: ${parpadeo} 2s ease infinite; 
    `,
    reactor_on: css`
    fill: #87CDDE;
    animation: ${parpadeo} 2s ease infinite;
    `,
    reactor_gen: css`
    fill: white;
    animation: ${parpadeo} 2s ease infinite;
    `,
  };
});

const styles = getStyles();

export default styles;