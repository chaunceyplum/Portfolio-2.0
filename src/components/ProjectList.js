import lobby from '../images/lobby_2.png'
import snowrag from '../images/snowrag.png'
import snowdiagram from '../images/snow_diagram.png'
import snowflake from '../images/snowflake.png'
import modernpipe from '../images/Modern_Pipe.png'

const ProjectList = [
  {
    name: 'AEP Edge Personalization Architecture',
    stack: 'AEP, Web SDK (Alloy), Next.js, AWS Lambda, PostgreSQL',
    technologies: 'Adobe Experience Platform, Alloy, Next.js, AWS Lambda, PostgreSQL',
    description:
      'A two-path personalization system combining a nightly audience sync and a runtime edge resolution layer. Audience definitions are pulled from AEP into a relational store via API; at runtime, Web SDK fires a send event, Edge returns segment membership, and a lightweight API route drives CMS personalization decisions.',
    role: 'Designed the overall architecture, built the Lambda sync process, and defined the edge resolution pattern for the runtime path.',
    challenges:
      'Coordinating two independent data flows — batch sync and real-time edge — while keeping CMS personalization decisions free of server-side session dependencies.',
    impact:
      'Enabled on-site content personalization driven by AEP audience membership without full-page redirects or session coupling.',
    image: '',
    architecture: '',
    githubLink: '',
    projectLink: '',
  },
  {
    name: 'Martech Tagging Audit & Data Layer Migration',
    stack: 'Adobe Launch, GTM, AEP, CJA, BigQuery/GCP',
    technologies: 'Adobe Launch, Google Tag Manager, Adobe Experience Platform, Customer Journey Analytics, BigQuery',
    description:
      'Full audit of an enterprise Adobe Launch property, producing a structured findings report and an observability framework covering the full event pipeline. Included architectural planning for a data layer migration spanning GTM, Launch, AEP/CJA, and a cloud data warehouse across multiple team ownership boundaries.',
    role: 'Led the audit, authored the findings report, and developed the observability framework and migration architecture.',
    challenges:
      'Mapping event pipeline ownership across teams with different tooling and release cadences, and designing a migration path that could be adopted incrementally.',
    impact:
      'Gave the client a clear picture of implementation health and a structured roadmap for data layer modernization.',
    image: '',
    architecture: '',
    githubLink: '',
    projectLink: '',
  },
  {
    name: 'AEP Consent Management Architecture',
    stack: 'AEP, Web SDK, OneTrust, XDM',
    technologies: 'Adobe Experience Platform, Alloy, OneTrust, XDM Schema',
    description:
      'Consent architecture mapping a custom CMP vendor consent object to AEP\'s consentStrings schema. Work included resolving the event-level vs. profile-level capture model and ensuring the implementation met GDPR requirements for a European deployment.',
    role: 'Designed the consent mapping approach, defined the XDM target schema, and resolved the architectural question around capture level.',
    challenges:
      'Reconciling a non-standard vendor consent structure with AEP\'s expected schema while making a defensible call on event-level vs. profile-level capture.',
    impact:
      'Delivered a GDPR-compliant consent implementation that integrated cleanly with the existing Web SDK event flow.',
    image: '',
    architecture: '',
    githubLink: '',
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
    technologies: 'RDS, Apache Airflow, S3, Apache Iceberg, Snowflake, Python, SQL',
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