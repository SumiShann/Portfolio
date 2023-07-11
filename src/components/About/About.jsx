import { Link } from "react-router-dom"
import './About.scss'
import womanSitting from "../../assets/sitting-floor.png"
import CV from "../../assets/CV_French.pdf"

export default function About(){
    return(
        <div className='about-me'>
            <p>
                As a front-end developer, I’m interested in giving life to your ideas, 
                wild as they may be, in order to create the website that fits <i>your</i> needs.
            </p>
            <p>
                I mainly use React, and can partner up with a back-end developer 
                for a dynamic website project.
            </p>
            <p>
                If you wish to know more about me, I invite you to scroll down 
                and take a look at my projects and skills.
            </p>
            <p>
                Click <Link to={CV} target='_blank'>here</Link> to view my resume.
            </p>
            <img
            src={womanSitting}
            alt="woman sitting on the floor with a laptop and a cup of coffee in hand"
            />
        </div>
    )
}