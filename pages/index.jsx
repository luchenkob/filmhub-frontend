import Head from 'next/head'
import Image from 'next/image'
import appConfig from "../configs/appConfig"
import Hero from "../sections/Chakra/WithScreenshotBelow"

const Home = ({page}) => {

  return (
    <>
      <Head>
        <title>{appConfig.projectName} - {page.title}</title>
        <meta property="og:description" content={page.description}></meta>
        <meta name="description" content={page.description}></meta>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Hero data={page.hero}/>
    </>
  )
}

export default Home;
