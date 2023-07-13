import navLinks from '../../data/navLinks.js'
import './Menu.scss'
import ScrollspyNav from 'react-scrollspy-nav'

export default function Menu({onClick}){
  const isMobile = window.matchMedia("(max-width: 992px").matches
    return isMobile ? (
      <div className='stop' onClick={onClick}>
          <ul className="menu">
          {navLinks.map((link) => {
            return (
                <li key={link.name} 
                >
                    <a
                      className='menu-link'
                      href={link.href}
                      key={link.name}
                      onClick={onClick}
                    >
                      {link.name}
                    </a>
                </li>
            )
          })}
          </ul>
      </div>
    ):(
        <ScrollspyNav
        scrollTargetIds={["about", "services", "projects", "skills", "contact"]}
        activeNavClass="active"
        offset={-50}
        >
          <ul className="menu">
          {navLinks.map((link) => {
            return (
                <li key={link.name} 
                >
                    <a
                      className='menu-link'
                      href={link.href}
                      key={link.name}
                      onClick={onClick}
                    >
                      {link.name}
                    </a>
                </li>
            )
          })}
          </ul>
        </ScrollspyNav>
    )
}