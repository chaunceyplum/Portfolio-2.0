import lobby from '../images/lobby_2.png'
import snowrag from '../images/snowrag.png'
import snowdiagram from '../images/snow_diagram.png'
import snowflake from '../images/snowflake.png'
import modernpipe from '../images/Modern_Pipe.png'

const ProjectList = [
  {
    name: 'AEC_MCP — Adobe Experience Cloud Multi-Agent MCP Server',
    stack: 'AWS Lambda (Python 3.12, arm64), API Gateway, RDS PostgreSQL + pgvector, Voyage AI',
    technologies: 'Model Context Protocol (MCP), AWS SAM, boto3, Adobe IMS OAuth2, Databricks REST API, Snowflake Connector',
    description:
      'A production MCP server deployed on AWS Lambda exposing 139 tools across three specialized agents — Adobe Experience Cloud, AWS, and Data Engineering — to any MCP-compatible client. A semantic knowledge base built on pgvector and Voyage AI embeddings lets the agents retrieve relevant documentation and internal patterns before acting, and a 9-phase orchestrator can drive an entire martech build end-to-end from a single natural-language request: website instrumentation, AEP schemas and datasets, RT-CDP audiences, CJA analytics, and AJO journey activation.',
    role: 'Designed and built the full server — the JSON-RPC protocol handler, all three agent tool registries, the pgvector ingestion/retrieval pipeline, credential isolation via AWS SSM, and the 9-phase build orchestrator.',
    challenges:
      'Running a stateful, multi-step orchestration process on a stateless Lambda architecture; reconciling inconsistent API conventions across Adobe Reactor, Flow Service, Databricks, and Snowflake behind one uniform tool interface; keeping tool schemas compatible with MCP clients that only support string-typed parameters.',
    impact:
      'Gives any MCP-compatible AI client live, authenticated, agentic access to an entire Adobe Experience Cloud + AWS + data warehouse stack — turning multi-day manual configuration work (schemas, segments, dataflows, Launch rules) into tool calls an LLM can execute directly.',
    image: '',
    architecture: '',
    githubLink: '',
    projectLink: '',
  },
  {
    name: 'NEXT_HARNESS — Agentic Web Harness for AEC_MCP',
    stack: 'Next.js, TypeScript, Anthropic / Bedrock / OpenAI APIs',
    technologies: 'Next.js App Router, MCP client, LLM tool-use orchestration, multi-provider model routing',
    description:
      'A Next.js front end that turns natural-language requests into live agent runs against the AEC_MCP server. Rather than a fixed pipeline, a dynamic agent loop semantically shortlists the handful of MCP tools relevant to the request out of the full tool surface, then lets the model call them iteratively until the task completes, with the full tool-call trace rendered live in the UI.',
    role: 'Built the MCP client bridge, the tool-retrieval layer that narrows the full tool surface down to a relevant shortlist per request, the multi-provider model router (swappable per request across Anthropic, Bedrock, and OpenAI), and the execution tracing UI.',
    challenges:
      'Keeping an LLM tool-use loop reliable and bounded against a large tool surface without blowing context or looping indefinitely; gating the full 9-phase autonomous build behind an explicit opt-in since it has real side effects across GitHub, Netlify, Adobe, and AWS.',
    impact:
      'Turns a martech build that would take a team days of manual configuration into a single natural-language request, with a live trace of exactly which tools the agent called and why.',
    image: '',
    architecture: '',
    githubLink: 'https://github.com/chaunceyplum/NEXT_HARNESS',
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
    name: 'Cross-Property Target Delivery Failure (FDE Case Study)',
    stack: 'Adobe Target, Web SDK (Alloy), Adobe Launch',
    technologies: 'Adobe Target, Experience Platform Web SDK, Adobe Launch (Reactor)',
    description:
      'A multi-property Adobe Target implementation had activities intermittently failing to render — flickerless delivery breaking, offers not resolving, and behavior that varied by property despite ostensibly shared configuration.',
    role:
      'Owned the diagnosis solo, working directly in a live production environment with active campaigns running, mid-way through an in-flight Web SDK migration — a rollback wasn\'t an acceptable option.',
    challenges:
      'Traced the failures to configuration bleed between properties: activities on migrated properties were picking up stale or cross-property Target configuration. Diagnosis required correlating Web SDK network payloads, Target response codes, and Launch rule/library state across properties sitting at different migration stages.',
    impact:
      'Isolated the bleed to a specific configuration inheritance pattern introduced mid-migration, corrected it, and restored reliable flickerless delivery without rolling back the Web SDK migration already in progress.',
    image: '',
    architecture: '',
    githubLink: '',
    projectLink: '',
  },
  {
    name: 'Web SDK Migration: Identity & Audience Discrepancy (FDE Case Study)',
    stack: 'AEP, Web SDK (Alloy), Identity Graph, XDM',
    technologies: 'Adobe Experience Platform, Experience Platform Web SDK, Identity Service, Real-Time CDP',
    description:
      'Following a Web SDK migration on a large-scale AEP implementation, downstream teams reported audience membership and profile counts that no longer matched pre-migration baselines.',
    role:
      'Led the diagnostic effort with no single log source covering the full path from browser event to segment membership, and the client\'s next activation cycle already scheduled.',
    challenges:
      'Traced individual identities end-to-end through Web SDK payloads, edge decisioning responses, and profile data to isolate whether the gap originated in identity graph configuration, capture-level differences introduced by the migration, or edge segmentation logic.',
    impact:
      'Traced the discrepancy to a profile-level data collection gap specific to the migrated implementation, corrected the capture configuration, and brought audience counts back in line with expected volume before the next activation cycle.',
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
