import classyBack from '../images/ClassyCutzBack.png'
import lobby from '../images/lobby_2.png'
import snowrag from '../images/snowrag.png'
import snowdiagram from '../images/snow_diagram.png'
import snowflake from '../images/snowflake.png'
import modernpipe from '../images/Modern_Pipe.png'
// import datastack from '../images/datastack.png' // optional: replace with relevant diagram

const ProjectList = [
  {
    name: 'SNOW_RAG (Retrieval Augmented Generation)',
    stack: 'Next.js, FastAPI, Docker, MongoDB, LLaMA 3.2',
    technologies: 'Next.js, FastAPI, LangChain, Docker Compose, MongoDB',
    description:
      'A full-stack RAG app that scrapes, embeds, and semantically retrieves Snowflake documentation using a local LLM.',
    role: 'Built modular FastAPI services for ingestion and querying, and designed a responsive frontend for interactive querying.',
    challenges:
      'Handled token limits, long document chunking, and ensured responsive UI while managing large query payloads.',
    impact:
      'Enabled developers to intuitively search over 6000+ Snowflake docs without needing third-party APIs.',
    image: snowrag,
    architecture: snowdiagram,
    githubLink: 'https://github.com/chaunceyplum/AI/tree/main/SNOW_RAG',
    projectLink: '',
  },
  {
    name: 'Modern Data Stack Architecture',
    stack: 'PostgreSQL, AWS, Apache Iceberg, Snowflake, Airflow',
    technologies:
      'RDS, Apache Airflow, S3, Apache Iceberg, Snowflake, Python, SQL',
    description:
      'End-to-end enterprise data pipeline that ingests transactional data from RDS into Iceberg tables on S3, then builds Snowflake analytical models.',
    role: 'Engineered Airflow DAGs to orchestrate ingestion, built Iceberg tables from raw PostgreSQL data, and modeled analytics in Snowflake.',
    challenges:
      'Coordinating batch dataflow across multiple systems while maintaining schema evolution and data consistency.',
    impact:
      'Enabled scalable, decoupled ELT workflows with cost-efficient storage and high-performance Snowflake querying.',
    image: modernpipe,
    architecture: modernpipe,
    githubLink: 'https://github.com/chaunceyplum/AIRFLOW',
    projectLink: '',
  },
  {
    name: 'Snowflake Scripts',
    stack: 'Snowflake, dbt',
    technologies: 'SQL, dbt, Snowflake Scripting',
    description:
      'A centralized folder containing modular SQL scripts and dbt models for transforming and orchestrating Snowflake data.',
    role: 'Created reusable SQL logic, implemented version-controlled models in dbt, and established a reliable transformation workflow.',
    challenges: 'implementing business logic cleanly',
    impact:
      'Accelerated analytics delivery and ensured consistency across datasets by consolidating logic into one maintainable repo.',
    image: snowflake,
    architecture: '',
    githubLink: 'https://github.com/chaunceyplum/DBT',
    projectLink: '',
  },
  {
    name: 'Lobby (Full Stack)',
    stack: 'MERN',
    technologies: 'MongoDB, Express, React, Node.js, Redux Toolkit, Bootstrap',
    description:
      'A real-time gaming lobby discovery web app with REST API backend, region/game filtering, and user authentication.',
    role: 'Built both frontend and backend; implemented lobby lifecycle logic, user authentication, and responsive UI.',
    challenges:
      'Managing time-based lobby expiration, synchronizing auth state, and ensuring mobile-first responsiveness.',
    impact:
      'Provided a user-friendly way for gamers to find online lobbies without Discord or forums.',
    image: lobby,
    architecture: '',
    githubLink: 'https://github.com/chaunceyplum/Lobby',
    projectLink: 'https://findalobby.netlify.app/',
  },
]

export default ProjectList
