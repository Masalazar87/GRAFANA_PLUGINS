import { stylesFactory } from '@grafana/ui';
import { css, keyframes } from 'emotion';

const parpadeo = keyframes`
  0% { opacity: 1.0; };
  100% { opacity: 0.0; };
`;

const getStyles = stylesFactory(() => {
  return {
    SinConexion: css`
      fill: #999;
    `,
    On: css`
      fill: green;
    `,
    On2: css`
      fill: red;
    `,
    On3: css`
      fill: orange;
    `,
    On4: css`
      fill: yellow;
      animation: ${parpadeo} 1s ease infinite;
    `,
    On5: css`
      fill: green;
      animation: ${parpadeo} 1s ease infinite;
    `,
  };
});

const styles = getStyles();

export default styles;
