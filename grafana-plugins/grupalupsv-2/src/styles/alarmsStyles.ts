import { stylesFactory } from '@grafana/ui';
import { css, keyframes } from 'emotion';

const parpadeo = keyframes`
  0% { opacity: 1.0; };
  100% { opacity: 0.0; };
`;

const getStyles = stylesFactory(() => {
  return {
    off: css`
      fill: #999;
    `,
    on: css`
      fill: orange;
      animation: ${parpadeo} 1s ease infinite;
    `,
    on2: css`
      stroke: green;
      animation: ${parpadeo} 1s ease infinite;
    `,
    on3: css`
      fill: red;
      stroke:red;
      animation: ${parpadeo} 1s ease infinite;
    `,
    on4: css`
      fill: yellow;
      animation: ${parpadeo} 1s ease infinite;
    `,
    off1: css`
      stroke: #999;
    `,
    off2: css`
      opacity:0;
      `,
    on1: css`
      stroke: orange;
      animation: ${parpadeo} 1s ease infinite;
    `,
  };
});

const styles = getStyles();

export default styles;