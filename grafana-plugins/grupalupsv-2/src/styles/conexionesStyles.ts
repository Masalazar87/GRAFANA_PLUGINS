import { stylesFactory } from '@grafana/ui';
import { css, keyframes } from 'emotion';

const parpadeo = keyframes`
  0% { opacity: 1.0; };
  100% { opacity: 0.0; };
`;

const getStyles = stylesFactory(() => {
  return {
    on: css`
    stroke: green;
    `,
    off: css`
    stroke: #999;
    `,
    open: css`
    opacity: 0;
    `,
    close: css`
    stroke: green;
    `,
    onbattery: css`
    stroke: red;
    animation: ${parpadeo} 1s ease infinite;
    `,
  };
});

const styles = getStyles();

export default styles;

