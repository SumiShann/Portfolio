import { useTranslation } from 'react-i18next'
import './Menu.scss'
import ScrollspyNav from 'react-scrollspy-nav'

export default function Menu({onClick}){
  const { t } = useTranslation()
  const isMobile = window.matchMedia("(max-width: 992px").matches
  const navLinks = t('links', { returnObjects: true });
    return isMobile ? (
      <div className='stop' onClick={onClick}>
        <ScrollspyNav
        scrollTargetIds={["about", "services", "projects", "skills", "contact"]}
        offset={-50}
        scrollDuration="500"
        >
          <ul className="menu">
          {navLinks.map((link) => {
            return (
              <li key={link.href} 
              >
                    <a
                      className='menu-link'
                      href={link.href}
                      key={link.href}
                      onClick={onClick}
                    >
                      {link.name}
                    </a>
                </li>
            )
          })}
          </ul>
        </ScrollspyNav>
      </div>
    ):( 
        <ScrollspyNav
        scrollTargetIds={["about", "services", "projects", "skills", "contact"]}
        activeNavClass="active"
        offset={-50}
        scrollDuration="500"
        >
          <ul className="menu">
          {navLinks.map((link) => {
            return (
                <li key={link.href} 
                >
                    <a
                      className='menu-link'
                      href={link.href}
                      key={link.href}
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