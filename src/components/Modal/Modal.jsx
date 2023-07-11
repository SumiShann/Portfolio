
import './Modal.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

export default function Modal({onClick, image, content, github}){
    const isPhone = window.matchMedia("(max-width:768px)").matches
    function handleClick(e){
        e.stopPropagation()
    }
    return isPhone ? (
        <div className='modal'>
            <FontAwesomeIcon 
            icon={faArrowLeft} 
            onClick={onClick} 
            className='modal-close'/>
            <div className='modal-content'>
                <img
                src={image}
                alt='project image'
                className='modal-img'
                />
                <div className='modal-line'></div>
                <p className='modal-text'>{content}</p>
                <Link to={github} className='modal-github'>
                    <svg width="53" height="50" viewBox="0 0 93 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="&#240;&#159;&#166;&#134; icon &#34;github&#34;">
                            <path id="Vector" d="M46.1365 0.00288349C20.649 0.00288349 0 20.6691 0 46.1394C0 66.5346 13.2181 83.8214 31.5372 89.92C33.8526 90.3554 34.6889 88.9281 34.6889 87.6939C34.6889 86.5982 34.6629 83.7002 34.6456 79.8536C21.8053 82.6333 19.1005 73.6511 19.1005 73.6511C16.9984 68.3339 13.9649 66.9066 13.9649 66.9066C9.78959 64.0547 14.2965 64.1153 14.2965 64.1153C18.9217 64.4296 21.3554 68.8587 21.3554 68.8587C25.4702 75.9176 32.1514 73.8761 34.7956 72.688C35.1993 69.7151 36.4017 67.6707 37.7108 66.5317C27.4685 65.3754 16.6985 61.4105 16.6985 43.7316C16.6985 38.6826 18.4863 34.5706 21.4419 31.3411C20.9315 30.1848 19.3687 25.4846 21.8485 19.1293C21.8485 19.1293 25.7096 17.8981 34.536 23.8612C38.2298 22.8376 42.1514 22.3272 46.0702 22.3012C49.9918 22.3272 53.9105 22.8404 57.6043 23.8612C66.3789 17.8981 70.237 19.1293 70.237 19.1293C72.714 25.4846 71.1511 30.1819 70.7013 31.3411C73.6281 34.5706 75.4159 38.6854 75.4159 43.7316C75.4159 61.4509 64.6314 65.3581 54.3776 66.4856C55.9809 67.8668 57.4832 70.7071 57.4832 75.0179C57.4832 81.1887 57.4255 86.1599 57.4255 87.6622C57.4255 88.8618 58.2329 90.3035 60.6089 89.8393C79.0635 83.8041 92.2672 66.5029 92.2672 46.1365C92.2672 20.6663 71.6182 0 46.1307 0L46.1365 0.00288349Z"/>
                        </g>
                    </svg>
                    <p className='modal-view'>View on GitHub</p>
                </Link>
            </div>
        </div>
    ) : (
        <div className='stop-prop' onClick={onClick}>
            <div className='modal'onClick={(e) => handleClick(e)}>
                <FontAwesomeIcon 
                icon={faArrowLeft} 
                onClick={onClick} 
                className='modal-close'/>
                <div className='modal-content'>
                    <img
                    src={image}
                    alt='project image'
                    className='modal-img'
                    />
                    <div className='modal-line'></div>
                    <p className='modal-text'>{content}</p>
                    <Link to={github} className='modal-github'>
                        <svg width="53" height="50" viewBox="0 0 93 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="&#240;&#159;&#166;&#134; icon &#34;github&#34;">
                                <path id="Vector" d="M46.1365 0.00288349C20.649 0.00288349 0 20.6691 0 46.1394C0 66.5346 13.2181 83.8214 31.5372 89.92C33.8526 90.3554 34.6889 88.9281 34.6889 87.6939C34.6889 86.5982 34.6629 83.7002 34.6456 79.8536C21.8053 82.6333 19.1005 73.6511 19.1005 73.6511C16.9984 68.3339 13.9649 66.9066 13.9649 66.9066C9.78959 64.0547 14.2965 64.1153 14.2965 64.1153C18.9217 64.4296 21.3554 68.8587 21.3554 68.8587C25.4702 75.9176 32.1514 73.8761 34.7956 72.688C35.1993 69.7151 36.4017 67.6707 37.7108 66.5317C27.4685 65.3754 16.6985 61.4105 16.6985 43.7316C16.6985 38.6826 18.4863 34.5706 21.4419 31.3411C20.9315 30.1848 19.3687 25.4846 21.8485 19.1293C21.8485 19.1293 25.7096 17.8981 34.536 23.8612C38.2298 22.8376 42.1514 22.3272 46.0702 22.3012C49.9918 22.3272 53.9105 22.8404 57.6043 23.8612C66.3789 17.8981 70.237 19.1293 70.237 19.1293C72.714 25.4846 71.1511 30.1819 70.7013 31.3411C73.6281 34.5706 75.4159 38.6854 75.4159 43.7316C75.4159 61.4509 64.6314 65.3581 54.3776 66.4856C55.9809 67.8668 57.4832 70.7071 57.4832 75.0179C57.4832 81.1887 57.4255 86.1599 57.4255 87.6622C57.4255 88.8618 58.2329 90.3035 60.6089 89.8393C79.0635 83.8041 92.2672 66.5029 92.2672 46.1365C92.2672 20.6663 71.6182 0 46.1307 0L46.1365 0.00288349Z"/>
                            </g>
                        </svg>
                        <p className='modal-view'>View on GitHub</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}