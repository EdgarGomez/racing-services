import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import Fonts from "../src/util/fonts"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    body: "Lato Regular",
    heading: "Lato Black Italic",
    mono: "Lato Bold",
  },
})

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}><Fonts /><Component {...pageProps} /></ChakraProvider>
}

export default MyApp
