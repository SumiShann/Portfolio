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
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
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
        <SectionTitle>{t('title.services')}</SectionTitle>
        <Services />
      </section>
      <section id='projects' className="projects" >
        <SectionTitle>{t('title.projects')}</SectionTitle>
        <Projects />
      </section>
      <section id='skills' className="skills" >
        <SectionTitle>{t('title.skills')}</SectionTitle>
        <Skills />
      </section>
      <section id='contact' className="contact" >
        <SectionTitle type="contact">{t('title.contact')}</SectionTitle>
        <Contact t={t}/>
      </section>
    </main>
    <Footer t={t}/>
    </>
  )
}