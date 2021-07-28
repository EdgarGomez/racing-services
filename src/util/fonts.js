import { Global } from "@emotion/react"
const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Lato Black Italic';
        font-style: italic;
        font-weight: 900;
        font-display: swap;
        src: url('/fonts/lato-blackitalic-webfont.eot');
        src: url('/fonts/lato-blackitalic-webfont.eot?#iefix') format('embedded-opentype'),
             url('/fonts/lato-blackitalic-webfont.woff2') format('woff2'),
             url('/fonts/lato-blackitalic-webfont.woff') format('woff'),
             url('/fonts/lato-blackitalic-webfont.ttf') format('truetype'),
             url('/fonts/lato-blackitalic-webfont.svg#latoblack_italic') format('svg');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin */
      @font-face {
        font-family: 'Lato Regular';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/lato-regular-webfont.eot');
        src: url('/fonts/lato-regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/lato-regular-webfont.woff2') format('woff2'),
         url('/fonts/lato-regular-webfont.woff') format('woff'),
         url('/fonts/lato-regular-webfont.ttf') format('truetype'),
         url('/fonts/lato-regular-webfont.svg#latoregular') format('svg');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin */
      @font-face {
        font-family: 'Lato Bold';
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/lato-bold-webfont.eot');
        src: url('/fonts/lato-bold-webfont.eot?#iefix') format('embedded-opentype'),
             url('/fonts/lato-bold-webfont.woff2') format('woff2'),
             url('/fonts/lato-bold-webfont.woff') format('woff'),
             url('/fonts/lato-bold-webfont.ttf') format('truetype'),
             url('/fonts/lato-bold-webfont.svg#latobold') format('svg');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
)
export default Fonts