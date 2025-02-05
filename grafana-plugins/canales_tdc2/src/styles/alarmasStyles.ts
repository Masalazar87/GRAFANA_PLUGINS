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
      fill: red;
      animation: ${parpadeo} 1s ease infinite;
    `,
    on1: css`
      fill: red;
      animation: ${parpadeo} 2s ease infinite;
      background-color: #ffd600;
    //text-shadow: 1px 1px #b80b0eff;
    `,
    on2: css`
      fill: purple;
      animation: ${parpadeo} 1s ease infinite;
    `,
    mant: css`
     fill:gray;
     //animation: ${parpadeo} 3s ease infinite;
    `,
  };
});

const styles = getStyles();

export default styles;