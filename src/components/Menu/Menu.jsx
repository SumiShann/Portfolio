import navLinks from '../../data/navLinks.js'
import { HashLink } from 'react-router-hash-link'
import './Menu.scss'

export default function Menu({onClick}){
    return (
        <ul className="menu">
          {navLinks.map((link) => {
            return (
                <li key={link.name} 
                // className={isActive ? 'active': ''}
                >
                    <HashLink
                      className='menu-link'
                      to={link.href}
                      key={link.name}
                      onClick={onClick}
                    >
                      {link.name}
                    </HashLink>
                </li>
            )
          })}
        </ul>
    )
}