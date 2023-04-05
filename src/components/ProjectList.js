import classy from '../images/ClassyCutz.png'
import classyBack from '../images/ClassyCutzBack.png'
import game from '../images/gameHop.png'
import crypto from '../images/cryptoApp.png'
import famous from '../images/famous.png'
import lobby from '../images/lobby.png'
const ProjectList = [
  {
    name: 'Lobby',
    stack: 'MERN',
    technologies:
      'Bootstrap, Redux-Toolkit, MongoDB, Express, User Authentication,  ',
    description:
      'Web app for gamers to find gamers to play games with. This app features user authentication and a post system where players can connect. Backend Code can be found in the Classy Cutz backend app. ',
    githubLink: 'https://github.com/chaunceyplum/Lobby',
    projectLink: 'https://findalobby.netlify.app/',
    image: lobby,
  },
  {
    name: 'Classy Cutz Front End',
    stack: 'React',
    technologies: 'Bootstrap, axios, React-router, React-Redux-Form ',
    description: 'Barbershop landing page built using React. ',
    githubLink: 'https://github.com/chaunceyplum/ReactProject',
    projectLink: 'https://classycutz.netlify.app',
    image: classy,
  },
  {
    name: 'Classy Cutz Back End',
    stack: 'Node',
    technologies: 'Express',
    description:
      'Used Node and Express to build a REST API to display content on the portfolio page of the Classy Cutz front end',
    githubLink: 'https://github.com/chaunceyplum/ReactProjectBackend',
    projectLink: 'https://classycutzbackend.herokuapp.com/',
    image: classyBack,
  },
  // {
  //   name: 'GameHop',
  //   stack: 'React',
  //   technologies: 'Bootstrap, Axios, React-router',
  //   description:
  //     'Ecommerce game app built using react with a shopping cart component',
  //   githubLink: 'https://github.com/chaunceyplum/GameHop',
  //   projectLink: 'https://gamehop.netlify.app/',
  //   image: game,
  // },
  {
    name: 'Coincap Cryptocurrency App',
    stack: 'React',
    technologies: 'Bootstrap, Axios',
    description:
      'React app built to display the top 100 cryptocurrency coins using the CoinCap 2.0 REST API',
    githubLink: 'https://github.com/chaunceyplum/GameHop',
    projectLink: 'https://top100coinapp.netlify.app/',
    image: crypto,
  },
  // {
  //   name: 'Famous Deli',
  //   stack: 'HTML, CSS',
  //   technologies: 'Bootstrap',
  //   description: 'Static website made using HTML, CSS and Bootstrap',
  //   githubLink: 'https://github.com/chaunceyplum/project-1',
  //   projectLink: 'https://chaunceyplum.github.io/project-1/',
  //   image: famous,
  // },
]
export default ProjectList
