import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import './ServiceCard.scss'

export default function ServiceCard({title, icon, desc}){
    const [isShown, setIsShown] = useState(false)

    return(
        <div className={`service ${isShown ? `hover` : `` }`}
            onMouseEnter={(e) => setIsShown(true)}
            onMouseLeave={(e) => setIsShown(false)}>
            <h3 className='service-title'>{title}</h3>
            {isShown ? 
            <p className='service-desc'>{desc}</p>
            : 
            <FontAwesomeIcon icon={icon} className='service-icon'/>
            }
        </div>
    )
}