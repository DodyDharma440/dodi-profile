import Head from "next/head";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <>
      <Head>
        <title>My Portfolio | Dodi Aditya</title>
        <meta name="theme-color" content="#212f3a" />
        <meta name="title" content="Portfolio - Dodi Aditya" />
        <meta name="site_name" content="Portfolio - Dodi Aditya" />
        <meta
          name="description"
          content="Selamat Datang di Webiste Portfolio - Dodi Aditya"
        />
        <meta name="image" itemProp="image" content={"/images/dodi.jpg"} />
        <meta name="type" content="website" />
        <meta property="og:site_name" content="Portfolio - Dodi Aditya" />
        <meta property="og:title" content="Portfolio - Dodi Aditya" />
        <meta
          property="og:description"
          content="Selamat Datang di Webiste Portfolio - Dodi Aditya"
        />
        <meta
          property="og:image"
          itemProp="image"
          content={"/images/dodi.jpg"}
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio - Dodi Aditya" />
        <meta
          name="twitter:description"
          content="Selamat Datang di Webiste Portfolio - Dodi Aditya"
        />
        <meta name="twitter:image" content={"/images/dodi.jpg"} />
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Timeline />
        <Technologies />
        <Projects />
      </Layout>
    </>
  );
};

export default Home;
