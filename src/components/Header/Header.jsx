import { useState } from 'react'
import smallLogo from '../../assets/logo_small.png'
import menuIcon from '../../assets/menu-icon.svg'
import franceIcon from '../../assets/france-icon.png'
import Menu from '../Menu/Menu'
import './Header.scss'

export default function Header(){
  const isMobile = window.matchMedia("(max-width: 992px)").matches
  const [offset, setOffset] = useState(false)
  window.onscroll = function() {scrollDown()}
  function scrollDown(){
    if (document.documentElement.scrollTop > 55){
      setOffset(true)
    } else {
      setOffset(false)
    }
  }
  const [isOpen, setIsOpen] = useState(false)
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
          <img
          src={franceIcon}
          alt='French flag'
          fetchpriority="high"
          className='nav-link'
          />
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
          <img
          src={franceIcon}
          alt='French flag'
          className='nav-link'
          fetchpriority="high"
          />
        </nav>}
    </header>
  )
}