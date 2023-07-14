import ServiceCard from '../ServiceCard/ServiceCard'
import './Services.scss'
import { useTranslation } from 'react-i18next';

export default function Services(){
    const { t } = useTranslation()
    const serviceData = t('services', { returnObjects: true });
    return(
        <div className='service-cards'>
            {serviceData.map((elt) => (
                <ServiceCard key={elt.id} title={elt.title} icon={elt.icon} desc={elt.desc} />
            ))}
        </div>
    )
}