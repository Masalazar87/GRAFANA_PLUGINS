import { stylesFactory } from '@grafana/ui';
import { css } from 'emotion';

const getStyles = stylesFactory(() => {
  return {
    on: css`
    stroke: green;
    `,
    off: css`
    stroke: #999;
    `,
  };
});

const styles = getStyles();

export default styles;

