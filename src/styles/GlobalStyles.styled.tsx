import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: SUITE-Regular, sans-serif;

    &::-webkit-scrollbar {
      width: 10px;
      height: 8px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.4);
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 6px;
    }
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box; 
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    -o-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
  }

  ol, ul, li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  textarea:focus, input:focus {
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @font-face {
      font-family: 'IBM Plex Sans KR';
      src: url('../assets/font/IBM Plex Sans KR/IBMPlexSansKR-Regular.ttf') format('truetype');
  }

  @font-face {
      font-family: 'IBM Plex Sans KR';
      font-weight: bold;
      src: url('../assets/font/IBM Plex Sans KR/IBMPlexSansKR-Bold.ttf') format('truetype');
  }
`;
