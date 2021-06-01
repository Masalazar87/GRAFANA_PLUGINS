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
    open: css`
    opacity: 0;
    `,
    close: css`
    stroke: green;
    `,
    onbattery: css`
    stroke: green;
    `,
  };
});

const styles = getStyles();

export default styles;

