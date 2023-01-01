import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        body {
          font-family: 'Noto Sans KR', sans-serif;
          background-color: #0f0921;
          ::-webkit-scrollbar {
            display: none;
          }
        }

        a {
          text-decoration: none;
          color: #ffffff;
        }

        button {
          font-family: 'Noto Sans KR', sans-serif;
        }

        input {
          font-family: 'Noto Sans KR', sans-serif;
        }
      `}
    />
  );
}
