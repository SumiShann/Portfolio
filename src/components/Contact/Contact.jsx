import './Contact.scss'
import { Link } from "react-router-dom"

export default function Contact(){
    return(
        <>
        <div className='contact-content'>
            <p>Interested in making a project together ?
            Contact me via this form, or directly at
            <Link to="mailto: violainebarral@yahoo.fr"
            className='contact-email'> violainebarral@yahoo.fr</Link>
            </p>
        </div>
        <form className='form' >
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" required autoComplete='name'/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" required autoComplete='email'/>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Message" required/>
            <input type='submit' className='submit' value="SEND"/>
        </form>
        </>
    )
}