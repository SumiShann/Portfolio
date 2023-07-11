import ServiceCard from '../ServiceCard/ServiceCard'
import { faCode, faMagnifyingGlass, faMobileScreenButton, faUsers } from '@fortawesome/free-solid-svg-icons'
import './Services.scss'

export default function Services(){
    return(
        <div className='service-cards'>
            <ServiceCard title='Web Development' icon={faCode} desc="Web application tailored to the client's needs"/>
            <ServiceCard title='Responsive Design' icon={faMobileScreenButton} desc="Compatible with all devices"/>
            <ServiceCard title='SEO' icon={faMagnifyingGlass} desc="Easy find"/>
            <ServiceCard title='Accessibility' icon={faUsers} desc="Accessible for everyone"/>
        </div>
    )
}