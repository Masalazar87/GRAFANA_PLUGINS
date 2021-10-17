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
      fill: red;
      animation: ${parpadeo} 1s ease infinite;
    `,
    on1: css`
      fill: green;
    `,
    on2: css`
      fill: url(#linearGradient4474);
    `,
  };
});

const styles = getStyles();

export default styles;