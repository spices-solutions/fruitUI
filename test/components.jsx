import Head from "next/head"
import Intro from "./md/code/intro.mdx"
import NavbarCode from "./md/code/navbar.mdx"
import Buttons from "./md/button"
import Forms from "./md/code/forms.mdx"
import Checkers from "./md/code/checkers.mdx"
import Card from "./md/code/card.mdx"
import Badge from "./md/code/badge.mdx"
import Table from "./md/code/table.mdx"
import SliderCode from "./md/code/sliderCode.mdx"
import ElNavbar from './components/docs/ElNavbar'
import ElSlider  from './components/docs/ElSlider'
import Alerts  from './md/alerts'

function Spacer({ gap }) {
  return (
    <>
      <br className={gap} /> 
      <br className={gap} /> 
    </>
  )
}

export default function Components() {
  return (
    <div>
      <Head>
        <title>components</title>
        <meta name="description" content="fruitUI" />
        <link rel="icon" type="image/png" href="/fruitUI.png" />
      </Head>
      <div className="stage anim-slide-right anim-break">
        <h1 className="text-center h2">components</h1>
        <Intro />
        <Spacer gap="my-8"/>
        <ElNavbar />
        <Spacer />
        <NavbarCode />
        <Spacer /> 
        <Buttons />
        <Spacer /> 
        <Card />
        <Spacer /> 
        <Checkers />
        <Spacer /> 
        <Forms />
        <Spacer /> 
        <ElSlider />
        <Spacer /> 
        <SliderCode /> 
        <Spacer /> 
        <Table /> 
        <Spacer /> 
        <Badge /> 
        <Alerts /> 
        <Spacer /> 
      </div>
    </div>
  );
}


