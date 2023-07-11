import './Home.scss'
import Header from '../../components/Header/Header'
import MainLogo from '../../components/MainLogo/MainLogo'
import About from '../../components/About/About'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Services from '../../components/Services/Services'
import Projects from '../../components/Projects/Projects'
import Skills from '../../components/Skills/Skills'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <>
    <Header />
    <main className="main">
      <section id='about' className="about" >
        <MainLogo />
        <div className="hero">

          <h1 className="h1">
            <span className="violaine">VIOLAINE</span>
            <br/>
            <span className="barral">BARRAL</span>
          </h1>
          <About />
        </div>
      </section>
      <section id='services' className="services" >
        <SectionTitle>SERVICES</SectionTitle>
        <Services />
      </section>
      <section id='projects' className="projects" >
        <SectionTitle>PROJECTS</SectionTitle>
        <Projects />
      </section>
      <section id='skills' className="skills" >
        <SectionTitle>SKILLS</SectionTitle>
        <Skills />
      </section>
      <section id='contact' className="contact" >
        <SectionTitle type="contact">CONTACT</SectionTitle>
        <Contact />
      </section>
    </main>
    <Footer />
    </>
  )
}