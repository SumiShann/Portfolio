import argentBank from "../assets/argentBank.png"
import argentBankModal from "../assets/argentBank-modal.png"
import kasa from "../assets/kasa.png"
import kasaModal from "../assets/kasa-modal.png"
import carducci from "../assets/carducci.png"
import carducciModal from "../assets/carducci-modal.png"

const projectsData = [
    {
        cover: argentBank,
        title: 'Mock-up bank application',
        tags: [
            'React',
            'React-Redux'
        ],
        image: argentBankModal,
        content: 'In this mock-up bank application, the tasks given to me were to set up the basic front-end with the html and css pages, and design wireframes already included into React, and then ensure the connection and deconnection of the user, as well as updating their username, using React-Redux. This project allowed me to discover and learn how to use Redux, React-Redux, and Redux Toolkit.',
        github: "https://github.com/OpenClassrooms-Student-Center/ArgentBank-website"
    },
    {
        cover: kasa,
        title: 'Mock-up booking application',
        tags: [
            'React',
            'Sass'
        ],
        image: kasaModal,
        content: "In this mock-up booking application, I had to set up the entire front-end for a booking website including 20 locations, using React and the Figma models.",
        github: "https://github.com/SumiShann/Kasa-OC"
    },
    {
        cover: carducci,
        title: 'Optimizing SEO & Accessibility',
        tags: ['SEO'],
        image: carducciModal,
        github: "https://github.com/SumiShann/Carducci-OC"
    }
]

export default projectsData;