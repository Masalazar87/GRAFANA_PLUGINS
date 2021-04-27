import { stylesFactory } from '@grafana/ui';
import { css, keyframes } from 'emotion';

const parpadeo = keyframes`
  0% { opacity: 1.0; };
  100% { opacity: 0.0; };
`;

const getStyles = stylesFactory(() => {
  return {
    on: css`
    fill: green;
    animation: ${parpadeo} 1s ease infinite;
    `,
    off: css`
    fill: #999;
    opacity: 0; 
    `,
  };
});

const styles = getStyles();

export default styles;

