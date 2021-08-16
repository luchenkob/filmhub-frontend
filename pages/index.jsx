import Head from 'next/head'
import Image from 'next/image'
import appConfig from "../configs/appConfig"
import Hero from "../sections/Chakra/WithScreenshotBelow"
import Cta from "../sections/Chakra/CtaSimpleCentered"
import CtaCall from "../sections/Chakra/CtaCallCenter"
import Features from "../sections/Chakra/FeaturesWithTestimonial"
import Newslater from "../sections/Chakra/Newsletter"
import FeaturesOffset from "../sections/Chakra/FeaturesOffset"
import { DarkMode } from '@chakra-ui/react'
import Footer from "../sections/Chakra/FooterWithLogoBelow"

const Home = ({ page }) => {

  return (
    <>
      <Head>
        <title>{appConfig.projectName} - {page.title}</title>
        <meta property="og:description" content={page.description}></meta>
        <meta name="description" content={page.description}></meta>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Hero data={page.hero} />
      <CtaCall data={page.customers} />
      <Cta data={page.cta} />
      <DarkMode><Features/></DarkMode>
      <Newslater/>
      <FeaturesOffset/>
      <DarkMode><Cta data={page.ctaDistributors} /></DarkMode>
      <DarkMode><Footer /></DarkMode>
    </>
  )
}

export default Home;
