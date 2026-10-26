import { Header } from "@/components/site/Header"
import { ScrollProgress } from "@/components/site/ScrollProgress"
import { Hero } from "@/components/site/Hero"
import { About } from "@/components/site/About"
import { Stats } from "@/components/site/Stats"
import { ClientShowcase } from "@/components/site/ClientShowcase"
import { Services } from "@/components/site/Services"
import { ApproachSection } from "@/components/site/Approach"
import { WhoIWorkWith } from "@/components/site/WhoIWorkWith"
import { Contact } from "@/components/site/Contact"
import { Footer } from "@/components/site/Footer"
import { Reveal } from "@/components/site/Reveal"

function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Reveal>
          <Stats />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <ClientShowcase />
        <Services />
        <Reveal>
          <ApproachSection />
        </Reveal>
        <Reveal>
          <WhoIWorkWith />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  )
}

export default App
