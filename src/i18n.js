import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import argentBank from "./assets/argentBank.png";
import argentBankModal from "./assets/argentBank-modal_920w.png";
import kasa from "./assets/kasa.png";
import kasaModal from "./assets/kasa-modal_920w.png";
import carducci from "./assets/carducci.png";
import carducciModal from "./assets/carducci-modal_920w.png";
import { faCode, faMagnifyingGlass, faMobileScreenButton, faUsers } from '@fortawesome/free-solid-svg-icons';


i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          title: {
            about: "about",
            services: "services",
            projects: "projects",
            skills: "skills",
            contact: "contact"
          },
          links: [
            {
              name: "About",
              href: "#about"
            },
            {
              name: "Services",
              href: "#services"
            },
            {
              name: "Projects",
              href: "#projects"
            },
            {
              name: "Skills",
              href: "#skills"
            },
            {
              name: "Contact",
              href: "#contact"
            }
          ],
          about: {
            p1: "As a front-end developer, I’m interested in giving life to your ideas, wild as they may be, in order to create the website that fits <1>your</1> needs.",
            p2: "I mainly use React, and can partner up with a back-end developer for a dynamic website project.",
            p3: "If you wish to know more about me, I invite you to scroll down and take a look at my projects and skills.",
            p4: "Click <1>here</1> to view my</3> resume."
          },
          services: [
            {
              id: "1",
              title: 'Web Development',
              icon: faCode,
              desc: "Web application tailored to the client's needs"
            },
            {
              id: "2",
              title: 'Responsive Design',
              icon: faMobileScreenButton,
              desc: "Compatible with all devices"
            },
            {
              id: "3",
              title: 'SEO',
              icon: faMagnifyingGlass,
              desc: "Easy find"
            },
            {
              id: "4",
              title: 'Accessibility',
              icon: faUsers,
              desc: "Accessible for everyone"
            }
          ],
          projects: [
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
              content: "The tasks of this project were to optimize loading and general SEO for this photographer's portfolio website. Through this project, I found out how to optimize images for the web, lazy loading on multiple devices, accessibility, social media meta tags, and local referencing. I used LightHouse reports, schema.org.",
              github: "https://github.com/SumiShann/Carducci-OC"
            }
          ],
          contact: {
            content: "Interested in making a project together ? Contact me via this form, or directly at",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "SEND",
            success: "Your message was sent succesfully",
            error: "An issue came up. Please try again later"
          },
          footer: {
            country: "France",
            rights: "All rights reserved."
          }
        }
      },
      fr: {
        translation: {
          title: {
            about: "à propos",
            services: "services",
            projects: "projets",
            skills: "compétences",
            contact: "contact"
          },
          links: [
            {
              name: "À propos",
              href: "#about"
            },
            {
              name: "Services",
              href: "#services"
            },
            {
              name: "Projets",
              href: "#projects"
            },
            {
              name: "Compétences",
              href: "#skills"
            },
            {
              name: "Contact",
              href: "#contact"
            }
          ],
          about: {
            p1: "En tant que développeuse front-end, j'aime donner vie à vos idées, aussi folles qu'elles soient, afin de créer le site internet qui correspond à <1>vos</1> besoins.",
            p2: "J'utilise principalement React, et je peux m'associer avec un développeur back-end pour un implémenter un site  web dynamique.",
            p3: "Si vous souhaitez en savoir plus à mon propos, je vous invite à défiler et à jeter un oeil à mes projets et mes compétences.",
            p4: "Cliquez <1>ici</1> pour voir mon</3> CV."
          },
          services: [
            {
              id: "1",
              title: 'Développement Web',
              icon: faCode,
              desc: "Application web taillée pour les besoins du client"
            },
            {
              id: "2",
              title: 'Responsive Design',
              icon: faMobileScreenButton,
              desc: "Compatible avec tous les appareils"
            },
            {
              id: "3",
              title: 'SEO',
              icon: faMagnifyingGlass,
              desc: "Facile à trouver"
            },
            {
              id: "4",
              title: 'Accessibilité',
              icon: faUsers,
              desc: "Accessible pour tous"
            }
          ],
          projects: [
            {
              cover: argentBank,
              title: 'Application bancaire',
              tags: [
                  'React',
                  'React-Redux'
              ],
              image: argentBankModal,
              content: "Dans cette fausse application bancaire, les tâches données étaient d'implémenter le front-end de base avec les pages HTML et CSS ainsi que les wireframes déjà fournies, et ensuite d'assurer la connexion et déconnexion de l'utilisateur, ainsi que la mise à jour de leur nom d'utilisateur, avec React et React-Redux. Ce projet m'a permis de découvrir et d'apprendre comment utiliser Redux, React-Redux et Redux Toolkit.",
              github: "https://github.com/OpenClassrooms-Student-Center/ArgentBank-website"
            },
            {
              cover: kasa,
              title: 'Application de réservations',
              tags: [
                  'React',
                  'Sass'
              ],
              image: kasaModal,
              content: "Durant ce projet, j'ai dû implémenter le front-end d'une application de réservations de logements avec React, en m'aidant des maquettes Figma et d'un fichier json comprenant les données pour 20 logements.",
              github: "https://github.com/SumiShann/Kasa-OC"
            },
            {
              cover: carducci,
              title: "Optimiser le SEO et l'accessibilité",
              tags: ['SEO'],
              image: carducciModal,
              content: "Les tâches de ce projet étaient d'optimiser le chargement et le SEO général du site portfolio d'une photographe. À travers ce projet, j'ai découvert comment optimiser les images pour le web, lazy loading sur divers appareils, comment maximiser l'accessibilité, les balises meta pour les réseaux sociaux, ainsi que le référencement local. Je me suis aidée des rapports Lighthouse et de schema.org.",
              github: "https://github.com/SumiShann/Carducci-OC"
            }
          ],
          contact: {
            content: "Voulez voulez faire un projet ensemble ? Contactez-moi via ce formulaire, ou directement à",
            name: "Nom",
            email: "Email",
            message: "Message",
            send: "ENVOYER",
            success: "Votre message a été envoyé avec succès",
            error: "Un problème est survenu. Veuillez réessayer ultérieurement"
          },
          footer: {
            country: "France",
            rights: "Tous droits réservés."
          }
        }
      }
    }
  });

export default i18n;