import Tag from '../Tag/Tag'
import Modal from '../Modal/Modal'
import { useState } from 'react'
import './ProjectCard.scss'

export default function ProjectCard({cover, title, tags, image, content, github}){
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
            <Modal onClick={() => setIsOpen(false)} image={image} content={content} github={github}/>
        ):(
            <div className='project' onClick={() => setIsOpen(true)}>
                <img
                src={cover}
                width="250"
                height="200"
                alt='web project'
                className='project-img'
                loading='lazy'
                />
                <div className='project-desc'>
                    <div className='project-tags'>
                        {tags.map((tag)  =>
                            <Tag key={tag} tag={tag} />
                        )}
                    </div>
                    <h3 className='project-title'>{title}</h3>
                </div>
            </div>
        )
        
}