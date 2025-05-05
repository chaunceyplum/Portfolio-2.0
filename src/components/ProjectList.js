import classy from '../images/ClassyCutz.png'
import classyBack from '../images/ClassyCutzBack.png'
import game from '../images/gameHop.png'
import crypto from '../images/cryptoApp.png'
import famous from '../images/famous.png'
import lobby from '../images/lobby_2.png'
import mediaHive from '../images/MediaHive.png'
import snowrag from '../images/snowrag.png'
import snowdiagram from '../images/snow_diagram.png'

const ProjectList = [
  {
    name: 'SNOW_RAG (front-end)',
    stack: 'Next.JS',
    technologies: 'Next.JS, Docker',
    description:
      'The front end of the application is built using Next.js, serving as the primary interface for users to interact with the RAG system. It provides a clean, responsive UI where users can input natural language queries related to Snowflake documentation. These queries are sent as API calls to the FastAPI backend, which handles the processing and retrieval workflow. The frontend handles both the request and response cycles, displaying AI-generated answers returned by the LLaMA model.',
    githubLink:
      'https://github.com/chaunceyplum/AI/tree/main/SNOW_RAG_FRONT/snow_rag_front',
    image: snowrag,
  },
  {
    name: 'SNOW_RAG (back-end)',
    stack: 'Fastapi, MongoDB, llama3.2, Docker',
    technologies: 'Bootstrap, Next.JS  ',
    description:
      'The backend of this RAG (Retrieval-Augmented Generation) application is built as a modular, containerized system using Docker Compose. A central FastAPI server coordinates microservices for scraping, vectorizing, querying, and deleting documentation. Scraped Snowflake docs are embedded into vectors and stored in MongoDB, which serves as the vector database. User queries are processed through semantic search to retrieve the most relevant content, which is passed to a locally hosted LLaMA 3.2 model to generate context-aware responses. This architecture demonstrates best practices in microservices, vector search, and local LLM integration.',
    githubLink: 'https://github.com/chaunceyplum/AI/tree/main/SNOW_RAG',
    image: snowdiagram,
  },
  {
    name: 'Lobby',
    stack: 'MERN',
    technologies:
      'Bootstrap, Redux-Toolkit, MongoDB, Express, User Authentication,  ',
    description:
      'Find a Lobby is a responsive, single-page web application built with React and powered by a custom Express.js API. It enables users to discover and join active online gaming lobbies in real time, displaying lobby data such as game titles, player counts, and regions. Deployed via Netlify and hosted on a separate server for the backend, the application showcases full-stack development proficiency, including RESTful API design, client-server integration, and responsive UI/UX implementation.',
    githubLink: 'https://github.com/chaunceyplum/Lobby',
    projectLink: 'https://findalobby.netlify.app/',
    image: lobby,
  },
  // {
  //   name: 'Classy Cutz Front End',
  //   stack: 'Next, Python, Flask, Postgres',
  //   technologies: 'Bootstrap, Python, Flask, Postgres',
  //   description:
  //     'Barbershop landing page built using React.Users can authenticate and make appointments',
  //   githubLink: 'https://github.com/chaunceyplum/ReactProject',
  //   projectLink: 'https://classycutz.netlify.app',
  //   image: classy,
  // },
  {
    name: 'Lobby Backend',
    stack: 'Node',
    technologies: 'Express',
    description:
      'The Find a Lobby backend is a lightweight, RESTful API built with Express.js and designed to support real-time lobby discovery and management for multiplayer games. It handles the full lifecycle of a lobby—from creation and retrieval to automatic cleanup of inactive sessions.  Built with modular, maintainable code and hosted separately from the frontend, this backend demonstrates core backend engineering skills including route handling, custom logic implementation, and integration with frontend clients in a full-stack environment.',
    githubLink: 'https://github.com/chaunceyplum/ReactProjectBackend',
    projectLink: '',
    image: classyBack,
  },
  // {
  //   name: 'Classy Cutz Back End',
  //   stack: 'Python, Postgres',
  //   technologies: 'Flask',
  //   description:
  //     'Used Python and Flask to build a backend server for my Classy Cutz Front End application ',
  //   githubLink: 'https://github.com/chaunceyplum/hairbackend',
  //   projectLink: '',
  //   image: classyBack,
  // },
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
  // {
  //   name: 'Coincap Cryptocurrency App',
  //   stack: 'React',
  //   technologies: 'Bootstrap, Axios',
  //   description:
  //     'React app built to display the top 100 cryptocurrency coins using the CoinCap 2.0 REST API',
  //   githubLink: 'https://github.com/chaunceyplum/GameHop',
  //   projectLink: 'https://top100coinapp.netlify.app/',
  //   image: crypto,
  // },
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
