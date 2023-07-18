import './About.scss'
import womanSitting from "../../assets/sitting-floor.png"
import CV from "../../assets/CV_French.pdf"
import { useTranslation, Trans } from 'react-i18next'

export default function About(){
    const { t, i18n } = useTranslation()
    return(
        <div className='about-me'>
            <p>
                <Trans i18nKey="about.p1">
                    As a front-end developer, I’m interested in giving life to your ideas, 
                    wild as they may be, in order to create the website that fits <i>your</i> needs.
                </Trans>
            </p>
            <p>
                {t('about.p2')}
            </p>
            <p>
                {t('about.p3')}
            </p>
            <p>
                <Trans i18nKey="about.p4">
                    Click <a href={CV} target='_blank'rel='noopener noreferrer' aria-label='CV.pdf'>here</a> to view my<br/> resume.
                </Trans>
            </p>
            <img
            src={womanSitting}
            alt="woman sitting on the floor with a laptop and a cup of coffee in hand"
            fetchpriority="high"
            />
        </div>
    )
}