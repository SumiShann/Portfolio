import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useState } from 'react'
import FooterModal from '../FooterModal/FooterModal'

export default function Footer({t}){
    const [isOpen, setIsOpen] = useState(false)
    
    return(
        <footer className='footer'>
            {isOpen && <FooterModal t={t} onClick={() => setIsOpen(false)} />}
            <ul className='footer-link'>
                <li>
                    <FontAwesomeIcon icon={faLocationDot} onClick={() => setIsOpen(true)}/>
                </li>
                <li>
                    <Link to="https://github.com/SumiShann" aria-label='my GitHub account'>
                        <svg width="43" height="40" viewBox="0 0 93 90" xmlns="http://www.w3.org/2000/svg" fill='none'>
                            <g id="&#240;&#159;&#166;&#134; icon &#34;github&#34;">
                                <path id="Vector" d="M46.1365 0.00288349C20.649 0.00288349 0 20.6691 0 46.1394C0 66.5346 13.2181 83.8214 31.5372 89.92C33.8526 90.3554 34.6889 88.9281 34.6889 87.6939C34.6889 86.5982 34.6629 83.7002 34.6456 79.8536C21.8053 82.6333 19.1005 73.6511 19.1005 73.6511C16.9984 68.3339 13.9649 66.9066 13.9649 66.9066C9.78959 64.0547 14.2965 64.1153 14.2965 64.1153C18.9217 64.4296 21.3554 68.8587 21.3554 68.8587C25.4702 75.9176 32.1514 73.8761 34.7956 72.688C35.1993 69.7151 36.4017 67.6707 37.7108 66.5317C27.4685 65.3754 16.6985 61.4105 16.6985 43.7316C16.6985 38.6826 18.4863 34.5706 21.4419 31.3411C20.9315 30.1848 19.3687 25.4846 21.8485 19.1293C21.8485 19.1293 25.7096 17.8981 34.536 23.8612C38.2298 22.8376 42.1514 22.3272 46.0702 22.3012C49.9918 22.3272 53.9105 22.8404 57.6043 23.8612C66.3789 17.8981 70.237 19.1293 70.237 19.1293C72.714 25.4846 71.1511 30.1819 70.7013 31.3411C73.6281 34.5706 75.4159 38.6854 75.4159 43.7316C75.4159 61.4509 64.6314 65.3581 54.3776 66.4856C55.9809 67.8668 57.4832 70.7071 57.4832 75.0179C57.4832 81.1887 57.4255 86.1599 57.4255 87.6622C57.4255 88.8618 58.2329 90.3035 60.6089 89.8393C79.0635 83.8041 92.2672 66.5029 92.2672 46.1365C92.2672 20.6663 71.6182 0 46.1307 0L46.1365 0.00288349Z"/>
                            </g>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.linkedin.com/in/violaine-barral-502398136/" aria-label='my LinkedIn account'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 448 512" fill='none'>
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                        </svg>
                    </Link>
                </li>
            </ul>
            <div className='footer-rights'>
                <p>© 2023 Violaine BARRAL, {t('footer.rights')}</p>
                <p>Logo © 2023 Sara OUASTI, {t('footer.rights')}</p>
            </div>
        </footer>
    )
}