import { useRef, useState } from 'react';
import { Link } from "react-router-dom"
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import './Contact.scss'

export default function Contact({t}){
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    function handleClick(e){
        e.stopPropagation()
    }

    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs.sendForm('service_1icki7r', 'template_su1262s', form.current, '-6kvR4MY86AoQ9OLY')
        .then((result) => {
            console.log(result.text)
            e.target.reset()
            setIsSuccess(true)
        }, (error) => {
            console.log(error.text)
            setIsError(true)
        })
    }

    return(
        <>
        <div className='contact-content'>
            <p>{t('contact.content')}
            <Link to="mailto: violainebarral@yahoo.fr"
            className='contact-email'> violainebarral@yahoo.fr</Link>
            </p>
        </div>
        <form ref={form} className='form' onSubmit={sendEmail}>
            <label htmlFor="name">{t('contact.name')}</label>
            <input type="text" name="name" id="name" placeholder={t('contact.name')} required autoComplete='name'/>
            <label htmlFor="email">{t('contact.email')}</label>
            <input type="email" name="email" id="email" placeholder={t('contact.email')} required autoComplete='email'/>
            <label htmlFor="message">{t('contact.message')}</label>
            <textarea name="message" id="message" placeholder={t('contact.message')} required/>
            <input type='submit' className='submit' value={t('contact.send')}/>
        </form>
        {isSuccess && 
            <div className='form-stop' onClick={() => setIsSuccess(false)}>
                <div className='form-modal' onClick={(e) => handleClick(e)}>
                    <FontAwesomeIcon icon={faX} onClick={() => setIsSuccess(false)}/>
                    <p>{t('contact.success')}</p>
                </div>
            </div>
        }
        {isError && 
            <div className='form-stop' onClick={() => setIsError(false)}>
                <div className='form-modal' onClick={(e) => handleClick(e)}>
                    <FontAwesomeIcon icon={faX} onClick={() => setIsError(false)}/>
                    <p>{t('contact.error')}</p>
                </div>
            </div>
        }
        </>
    )
}