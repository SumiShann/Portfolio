import { useState } from 'react'
import smallLogo from '../../assets/logo_small_300w.webp'
import menuIcon from '../../assets/menu-icon.svg'
import franceIcon from '../../assets/france-icon.png'
import usaIcon from '../../assets/usa-icon.png'
import Menu from '../Menu/Menu'
import './Header.scss'
import { useTranslation } from 'react-i18next'

export default function Header(){
  const isMobile = window.matchMedia("(max-width: 992px)").matches
  const [isOpen, setIsOpen] = useState(false)

  const [offset, setOffset] = useState(false)
  window.onscroll = function() {scrollDown()}
  function scrollDown(){
    if (document.documentElement.scrollTop > 55){
      setOffset(true)
    } else {
      setOffset(false)
    }
  }
  
  const [isOpenLng, setIsOpenLng] = useState(false)
  const lngs = {
    en: { flag: usaIcon },
    fr: { flag: franceIcon }
  }
  const { t, i18n } = useTranslation();

  return (
    <header className="header">
      <div className='header-left'>
        <img
        src={smallLogo}
        alt='logo V'
        fetchpriority="high"
        className='header-logo'
        />
        <div className='header-anim'>
          <p className={`name ${offset ? `name-slideOut`: ``}`}>IOLAINE</p>
        </div>
      </div>
      {isMobile ? 
        <nav className='nav'>
          {isOpenLng ?
            <div className='nav-languages'>
              {Object.keys(lngs).map((lng) => (
                <button key={lng} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                  <img src={lngs[lng].flag} 
                  alt='Language flag' 
                  fetchpriority='high' 
                  className='flag flag-open'
                  onClick={() => setIsOpenLng(false)}/>
                </button>
              ))}
            </div>
          :
            <button onClick={() => setIsOpenLng(true)}>
              <img
              src={i18n.resolvedLanguage === 'en' ? usaIcon : franceIcon}
              alt='Current language flag'
              fetchpriority="high"
              className='nav-link flag'
              />
            </button>
          }
          <button
          onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}
          >
              <img
              src={menuIcon}
              alt='menu icon'
              className='nav-link'
              fetchpriority="high"
              /> 
          </button>
          {isOpen && <Menu onClick={() => setIsOpen(false)} />}
        </nav>
        : 
        <nav className='nav'>
          <Menu />
          {isOpenLng ?
            <div className='nav-languages'>
              {Object.keys(lngs).map((lng) => (
                <button key={lng} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                  <img src={lngs[lng].flag} 
                  alt='Language flag' 
                  fetchpriority='high' 
                  className='flag flag-open'
                  onClick={() => setIsOpenLng(false)}/>
                </button>
              ))}
            </div>
          :
            <button onClick={() => setIsOpenLng(true)}>
              <img
              src={i18n.resolvedLanguage === 'en' ? usaIcon : franceIcon}
              alt='Current language flag'
              fetchpriority="high"
              className='nav-link flag'
              />
            </button>
          }
        </nav>
        }
    </header>
  )
}