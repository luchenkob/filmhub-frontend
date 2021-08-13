import { useRouter } from "next/router";
import '../styles/globals.css'
import { pages } from "../configs/pages/dynamic"
import { filterIt } from '../utils'
import ScrollBarWrapper from "../components/ScrollbarWrapper"
import { extendTheme, ChakraProvider } from "@chakra-ui/react"
import Navbar from "../components/Chakra/NavbarWithSubmenu/index"

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  blue: {
    500: "#17a2b8",
    600: "#24bcd4"
  },
}

const theme = extendTheme({ colors })

function App({ Component, pageProps }) {
  const router = useRouter();
  const page = filterIt(pages, router.pathname, "link")[0]

  return <ScrollBarWrapper>
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} page={page} />
    </ChakraProvider>
  </ScrollBarWrapper>
}

export default App
