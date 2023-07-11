import './SectionTitle.scss'

export default function SectionTitle({children, type}){
    switch (type){
        case "contact":
            return (
                <div className='title title-contact'>
                    <h2>{children}</h2>
                    <div className="title-contact-underline"></div>
                </div>
            )
        default:
            return (
                <div className='title'>
                    <h2>{children}</h2>
                    <div className="title-underline"></div>
                </div>
            )
    }
    
}