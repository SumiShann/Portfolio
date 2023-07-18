import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useFetch } from '../../utils/useFetch'
import './FooterModal.scss'

export default function FooterModal({t, onClick}){
    function handleClick(e){
        e.stopPropagation()
    }
    const { i18n } = useTranslation()

    const { data, isLoading }  = useFetch('https://api.weatherapi.com/v1/current.json?q=Paris&key=fb5ad99ff3cb448cb4c152300231707')
    const weather = data.current?.condition.icon

    const timezone = 'Europe/Paris'
    const date = new Date()
    const today = new Intl.DateTimeFormat(i18n.resolvedLanguage, {dateStyle: 'short', timeZone: timezone}).format(date)
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
          }, 1000);
          return () => clearInterval(interval);
    }, [])
    

    return (
        <div className='footer-stop' onClick={onClick}>
            <div className='footer-modal'onClick={(e) => handleClick(e)}>
                <FontAwesomeIcon icon={faX} onClick={onClick}/>
                <div className='footer-datetime'>
                    <p>{t('footer.country')}</p>
                    <p>{today}</p>
                    <p>{time.toLocaleTimeString(i18n.resolvedLanguage, {timeZone: timezone})}</p>
                    {isLoading ? 
                    <div class="loader">
                        <div class="loader_circle"></div>
                    </div>
                    :
                    <img src={weather} alt="weather" />
                    }
                </div>
            </div>
        </div>
    )
}