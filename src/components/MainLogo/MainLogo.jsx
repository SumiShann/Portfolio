import bigLogo from "../../assets/logo_big_1000w.webp"
import './MainLogo.scss'

export default function MainLogo(){
    return (
        <div className='about-logo'>
            <div className='top-h'></div><div className='top-v'></div>
            <img
            src={bigLogo}
            alt='logo V web developer'
            className="logo"
            fetchpriority="high"
            />
            <div className='bottom-v'></div><div className='bottom-h'></div>
        </div>
    )
}