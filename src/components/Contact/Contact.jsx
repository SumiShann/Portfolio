import './Contact.scss'
import { Link } from "react-router-dom"

export default function Contact({t}){
    return(
        <>
        <div className='contact-content'>
            <p>{t('contact.content')}
            <Link to="mailto: violainebarral@yahoo.fr"
            className='contact-email'> violainebarral@yahoo.fr</Link>
            </p>
        </div>
        <form className='form' >
            <label htmlFor="name">{t('contact.name')}</label>
            <input type="text" id="name" placeholder={t('contact.name')} required autoComplete='name'/>
            <label htmlFor="email">{t('contact.email')}</label>
            <input type="email" id="email" placeholder={t('contact.email')} required autoComplete='email'/>
            <label htmlFor="message">{t('contact.message')}</label>
            <textarea id="message" placeholder={t('contact.message')} required/>
            <input type='submit' className='submit' value={t('contact.send')}/>
        </form>
        </>
    )
}