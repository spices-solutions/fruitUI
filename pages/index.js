import Head from "next/head";
import Intro from "./intro.mdx";
import Config from "./config.mdx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>fruit UI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="stage">
        <h1 className="font-xxxl text-gray-900 text-center mt-12">FruitUI a moduler styling framework </h1>
        <p className="text text-center"><a className="link" href="https://forms.gle/ihDprgoWNfEo2GwQ6">get us your feedback</a> </p>
        <Intro />
        <Config />
      </div>
    </div>
  );
}


