import lobby from '../images/lobby_2.png'
import snowrag from '../images/snowrag.png'
import snowdiagram from '../images/snow_diagram.png'
import snowflake from '../images/snowflake.png'
import modernpipe from '../images/Modern_Pipe.png'

const ProjectList = [
  {
    name: 'AEC_MCP: Adobe Experience Cloud MCP Server',
    stack: 'AWS Lambda (Python 3.12, arm64), API Gateway, RDS PostgreSQL + pgvector, Voyage AI',
    technologies: 'Model Context Protocol (MCP), AWS SAM, boto3, Adobe IMS OAuth2, Databricks REST API, Snowflake Connector',
    description:
      'An MCP server running on AWS Lambda that gives any MCP client access to 139 tools, split across three agents: Adobe Experience Cloud, AWS, and Data Engineering. Before the agents do anything, they pull relevant docs and internal patterns from a knowledge base I built on pgvector and Voyage AI embeddings. There\'s also a 9 phase orchestrator that can take one plain English request and run a whole martech build: site instrumentation, AEP schemas and datasets, RT CDP audiences, CJA analytics, and AJO journeys.',
    role: 'I built the whole thing. That includes the JSON RPC handler, the tool registries for all three agents, the pgvector ingestion and retrieval pipeline, credential isolation through AWS SSM, and the build orchestrator.',
    challenges:
      'The hardest part was running a long, multi step process on Lambda, which doesn\'t hold state between calls. On top of that, Adobe Reactor, Flow Service, Databricks, and Snowflake all have their own API quirks, and I had to wrap them in one consistent tool interface. Some MCP clients only accept string parameters, so the tool schemas had to work around that too.',
    impact:
      'An AI client can now work directly against a live Adobe Experience Cloud, AWS, and data warehouse stack. Setup work that usually takes days (schemas, segments, dataflows, Launch rules) becomes a handful of tool calls.',
    image: '',
    architecture: '',
    githubLink: '',
    projectLink: '',
  },
  {
    name: 'NEXT_HARNESS: Agent Web App for AEC_MCP',
    stack: 'Next.js, TypeScript, Anthropic / Bedrock / OpenAI APIs',
    technologies: 'Next.js App Router, MCP client, LLM tool use orchestration, model routing across providers',
    description:
      'A Next.js app where you type what you want and it kicks off a live agent run against the AEC_MCP server. There\'s no fixed pipeline. For each request it picks out the few tools that actually matter from the full set, then lets the model keep calling them until the job is done. Every tool call shows up in the UI as it happens.',
    role: 'I built the MCP client bridge, the tool retrieval layer that narrows things down to a short list per request, a model router that lets you switch between Anthropic, Bedrock, and OpenAI on any request, and the tracing UI.',
    challenges:
      'Keeping the agent loop reliable with that many tools available, without running out of context or getting stuck in a loop. I also put the full autonomous build behind an explicit opt in, since it makes real changes in GitHub, Netlify, Adobe, and AWS.',
    impact:
      'A martech build that would normally take a team several days of manual setup can start from one request, and you can see exactly which tools the agent used and why.',
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
      'A full stack RAG app that scrapes the Snowflake docs, embeds them, and lets you search them in plain English using a local LLM.',
    role: 'I built separate FastAPI services for ingestion and querying, plus a responsive frontend for asking questions.',
    challenges:
      'Working within token limits, chunking really long docs, and keeping the UI snappy while handling large query payloads.',
    impact:
      'Developers can search more than 6,000 Snowflake docs in a natural way without paying for a third party API.',
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
      'A personalization setup with two paths. Every night, audience definitions get pulled from AEP into a Postgres database through the API. At runtime, Web SDK sends an event, Edge comes back with the visitor\'s segments, and a small API route tells the CMS what content to show.',
    role: 'I designed the overall architecture, built the Lambda sync job, and defined how the runtime edge lookup works.',
    challenges:
      'Keeping the nightly batch sync and the live edge flow in step with each other, while making sure the CMS never had to rely on a server side session.',
    impact:
      'The site can personalize content based on AEP audiences with no full page redirects and no session coupling.',
    image: '',
    architecture: '',
    githubLink: '',
    projectLink: '',
  },
  {
    name: 'Martech Tagging Audit and Data Layer Migration',
    stack: 'Adobe Launch, GTM, AEP, CJA, BigQuery/GCP',
    technologies: 'Adobe Launch, Google Tag Manager, Adobe Experience Platform, Customer Journey Analytics, BigQuery',
    description:
      'A full audit of an enterprise Adobe Launch property. I delivered a findings report and a monitoring framework covering the whole event pipeline, then planned out a data layer migration that touched GTM, Launch, AEP and CJA, and a cloud data warehouse, with several different teams owning different pieces.',
    role: 'I led the audit, wrote the findings report, and put together the monitoring framework and migration plan.',
    challenges:
      'Figuring out who owned what when every team had its own tools and release schedule, and planning a migration they could roll out in stages.',
    impact:
      'The client finally had a clear view of how healthy their implementation was and a realistic roadmap for modernizing their data layer.',
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
      'Consent setup that maps a custom CMP vendor\'s consent object to AEP\'s consentStrings schema. A big part of the work was deciding whether to capture consent at the event level or the profile level, and making sure it all held up under GDPR for a European rollout.',
    role: 'I designed the consent mapping, defined the target XDM schema, and made the call on where consent should be captured.',
    challenges:
      'The vendor\'s consent structure didn\'t look anything like what AEP expects, and the event vs. profile decision had to be one we could defend.',
    impact:
      'Delivered a GDPR compliant consent setup that plugged right into the existing Web SDK event flow.',
    image: '',
    architecture: '',
    githubLink: '',
    projectLink: '',
  },
  {
    name: 'Adobe Target Failures Across Properties (Case Study)',
    stack: 'Adobe Target, Web SDK (Alloy), Adobe Launch',
    technologies: 'Adobe Target, Experience Platform Web SDK, Adobe Launch (Reactor)',
    description:
      'A client running Adobe Target across several properties had activities randomly failing to render. Flicker handling was breaking, offers weren\'t resolving, and each property behaved differently even though they were supposed to share the same config.',
    role:
      'I handled the diagnosis on my own, in production, with live campaigns running and a Web SDK migration already halfway done. Rolling back wasn\'t an option.',
    challenges:
      'The root cause was config leaking between properties. Activities on the migrated properties were picking up old settings or settings from other properties. Finding it meant lining up Web SDK network payloads, Target response codes, and Launch rule and library state across properties that were all at different points in the migration.',
    impact:
      'I tracked the leak down to a specific config inheritance pattern that came in during the migration, fixed it, and got Target delivering reliably again without touching the rollout that was already in progress.',
    image: '',
    architecture: '',
    githubLink: '',
    projectLink: '',
  },
  {
    name: 'Web SDK Migration: Identity and Audience Mismatch (Case Study)',
    stack: 'AEP, Web SDK (Alloy), Identity Graph, XDM',
    technologies: 'Adobe Experience Platform, Experience Platform Web SDK, Identity Service, Real Time CDP',
    description:
      'After a Web SDK migration on a large AEP implementation, other teams started noticing that audience sizes and profile counts didn\'t match what they saw before the migration.',
    role:
      'I led the investigation. There was no single log that covered the path from a browser event to segment membership, and the client\'s next activation was already on the calendar.',
    challenges:
      'I followed individual identities through Web SDK payloads, edge responses, and profile data to figure out whether the gap was coming from the identity graph setup, a change in how data was being captured after the migration, or the edge segmentation logic.',
    impact:
      'The gap turned out to be missing profile level data on the migrated implementation. I fixed the capture config and audience counts were back where they should be before the next activation went out.',
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
      'One repo holding reusable SQL scripts and dbt models for transforming and orchestrating data in Snowflake.',
    role: 'I wrote the reusable SQL, set up the dbt models under version control, and built a transformation workflow the team could count on.',
    challenges: 'Keeping the business logic clean and easy to follow.',
    impact:
      'Analytics got delivered faster and the numbers stayed consistent across datasets since all the logic lives in one place.',
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
      'A data pipeline that moves transactional data from RDS into Iceberg tables on S3, then builds analytics models on top of it in Snowflake.',
    role: 'I wrote the Airflow DAGs for ingestion, built the Iceberg tables from the raw Postgres data, and modeled the analytics layer in Snowflake.',
    challenges:
      'Coordinating batch jobs across several systems while handling schema changes and keeping the data consistent.',
    impact:
      'A scalable ELT setup with cheap storage and fast queries in Snowflake, where each piece can change without breaking the others.',
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
      'A web app for finding online gaming lobbies in real time, with a REST API, filters by region and game, and user accounts.',
    role: 'I built the frontend and backend, including the lobby lifecycle logic, authentication, and a responsive UI.',
    challenges:
      'Expiring lobbies on a timer, keeping auth state in sync, and making it work well on mobile first.',
    impact:
      'Gamers get an easy way to find people to play with without digging through Discord servers or forums.',
    image: lobby,
    architecture: '',
    githubLink: 'https://github.com/chaunceyplum/Lobby',
    projectLink: 'https://findalobby.netlify.app/',
  },
]

export default ProjectList
