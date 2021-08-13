import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import appConfig from "../configs/appConfig"
import Hero from "../sections/Hero"

const Home = ({page}) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>{appConfig.projectName} - {page.title}</title>
        <meta property="og:description" content={page.description}></meta>
        <meta name="description" content={page.description}></meta>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <Hero />
    </div>
  )
}

export default Home;
