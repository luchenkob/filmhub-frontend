import Head from 'next/head'
import Image from 'next/image'
import appConfig from "../configs/appConfig"
import Hero from "../sections/Chakra/WithScreenshotBelow"
import Cta from "../sections/Chakra/CtaSimpleCentered"
import CtaCall from "../sections/Chakra/CtaCallCenter"
import Features from "../sections/Chakra/FeaturesWithTestimonial"

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
      <Features/>
    </>
  )
}

export default Home;
