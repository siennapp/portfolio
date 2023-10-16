import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

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
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        width: 100%; 
        line-height: 1;
        overflow-x: hidden;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    @import url('https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap');
    @font-face {
    font-family: 'KBO-Dia-Gothic_bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/KBO-Dia-Gothic_bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
}
    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;0,800;0,900;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,900;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,800;9..40,1000&family=Tilt+Neon&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Young+Serif&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@900&display=swap');
    /* @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  } */
  @font-face {
    font-family: 'TAEBAEKfont';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/TAEBAEKfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'IAMAPLAYER';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/IAMAPLAYER.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Giants-Inline';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/Giants-Inline.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    //font-family: 'Montserrat', sans-serif;
    //font-family: apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
    
        font-family: 'GmarketSansMedium'
}
  .content{
    overflow-y: auto;
    background: rgba(255,255,255,1); 
    position: absolute;
    width: 100%; height: 100%;
    left: 0; top: 0; 
    padding: 10px 0px 20px 0;
    border-left: solid 1px #000;
    &::-webkit-scrollbar {
        width: 14px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: #ccc;
        border: solid 4px #ffffff;  
    }
    div{
        max-width: 100% !important;
    }
    
    figure{
        max-width: 100% !important;
    }
    .notion-text{
        position: relative;
        padding-left: 90px;

    }
    .notion-text b{
        width: 100px;
        display: flex;
        color:rgb(61, 208, 101);
        position: absolute;
        left: 0;
        
    }
    .notion-h1{
        margin-bottom: 1rem;
        margin-top: 1.25rem;
    }
    .notion-list{
        &:first-of-type{
            margin-top: 22px;
        }
    }
    .notion-asset-wrapper{
        margin-top: 22px;
    }
    .notion-blank{
        display: none;
    }
  }
  /* width */
    ::-webkit-scrollbar {
    width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #3dd065;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #000; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
`


export default GlobalStyles;