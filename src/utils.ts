import { scaleOrdinal } from "d3";

export type Variable =
    "Data Modeling" |
    "ETL/ELT" |
    "Cloud Data" |
    "Big Data" |
    "Orchestration" |
    "Machine Learning" |
    "MLOps" |
    "Deep Learning" |
    "Statistics" |
    "Generative AI" |
    "Bioinformatics" |
    "EDA" |
    "SQL" |
    "BI Tools" |
    "Metadata" |
    "Governance" |
    "Research" |
    "Data Science Tools" |
    "Clinical Data" |
    "SAS";

export const groups = [
    "Data Science",
    "Data Engineering",
    "Data Governance",
    "Data Analysis",
];

type Group = (typeof groups)[number];

export type DataItem<T extends string> = {
    [key in T]: number;
} & {
    name: string;
};

export type Data = DataItem<Variable>[];

export type AxisConfig = {
    name: Variable;
    max: number;
    category: Group;
};

export const AXIS_CONFIG: AxisConfig[] = [
    { name: "Data Modeling", max: 5, category: "Data Engineering" },
    { name: "ETL/ELT", max: 5, category: "Data Engineering" },
    { name: "Cloud Data", max: 5, category: "Data Engineering" },
    { name: "Big Data", max: 5, category: "Data Engineering" },
    { name: "Orchestration", max: 5, category: "Data Engineering" },

    { name: "Machine Learning", max: 5, category: "Data Science" },
    { name: "Statistics", max: 5, category: "Data Science" },
    { name: "Deep Learning", max: 5, category: "Data Science" },
    { name: "MLOps", max: 5, category: "Data Science" },
    { name: "Generative AI", max: 5, category: "Data Science" },

    { name: "Metadata", max: 5, category: "Data Governance" },
    { name: "Governance", max: 5, category: "Data Governance" },
    { name: "Bioinformatics", max: 5, category: "Data Governance" },
    { name: "Clinical Data", max: 5, category: "Data Governance" },
    { name: "Research", max: 5, category: "Data Governance" },

    { name: "EDA", max: 5, category: "Data Analysis" },
    { name: "BI Tools", max: 5, category: "Data Analysis" },
    { name: "Data Science Tools", max: 5, category: "Data Analysis" },
    { name: "SAS", max: 5, category: "Data Analysis" },
    { name: "SQL", max: 5, category: "Data Analysis" },
];



export const COLORS = ["#e0ac2b", "#6689c6", "#e85252", "#9a6fb0"];

export const colorSCale = scaleOrdinal<string, string>()
    .domain(groups)
    .range(COLORS);


export const skillgroups = [
    {
        category: "Data Engineering",
        label: "Data Modeling",
        fullName: "Data Modeling & Schema Design – Crafting normalized, scalable data models and domain schemas.",
        description: "Designing efficient data schemas and normalized models for scalability."
    },
    {
        category: "Data Engineering",
        label: "ETL/ELT",
        fullName: "ETL/ELT Pipeline Development – Building efficient and maintainable data ingestion and transformation flows.",
        description: "Developing robust data ingestion and transformation pipelines."
    },
    {
        category: "Data Engineering",
        label: "Cloud Data",
        fullName: "Cloud Data Platforms – Leveraging AWS, GCP, or Azure services for storage, compute, and data lakes.",
        description: "Using cloud platforms for data storage, compute, and analytics."
    },
    {
        category: "Data Engineering",
        label: "Big Data",
        fullName: "Big Data & Distributed Systems – Working with Spark, Hadoop, and parallel processing architectures.",
        description: "Handling large-scale data processing with distributed systems."
    },
    {
        category: "Data Engineering",
        label: "Orchestration",
        fullName: "Workflow Orchestration & Automation – Automating pipelines using tools like Airflow, Prefect, or dbt.",
        description: "Automating data workflows for efficiency and consistency."
    },

    {
        category: "Data Science",
        label: "Machine Learning",
        fullName: "Machine Learning & Predictive Modeling – Designing, training, and validating ML models.",
        description: "Building and validating machine learning models."
    },
    {
        category: "Data Science",
        label: "MLOps",
        fullName: "MLOps & Model Deployment – Managing lifecycle of ML models including CI/CD, monitoring, and retraining.",
        description: "Deploying and maintaining machine learning models at scale."
    },
    {
        category: "Data Science",
        label: "SAS",
        fullName: "SAS Programming & Statistical Modeling – Conducting analytics in clinical trials, pharma, and highly regulated environments.",
        description: "Performing statistical analysis in regulated industries."
    },
    {
        category: "Data Science",
        label: "Deep Learning",
        fullName: "Deep Learning & Natural Language Processing – Applying neural networks for text, image, and sequence modeling.",
        description: "Applying neural networks for complex data analysis."
    },
    {
        category: "Data Science",
        label: "Statistics",
        fullName: "Statistical Analysis & Experimentation – Conducting hypothesis testing, Bayesian analysis, ANOVA, and structuring A/B tests to evaluate business impact.",
        description: "Performing advanced statistical analysis for decision making."
    },
    {
        category: "Data Science",
        label: "Generative AI",
        fullName: "Generative AI & Large Language Models (LLMs) – Developing and deploying GenAI solutions, fine-tuning LLMs, and building advanced conversational AI systems.",
        description: "Creating AI systems with generative and conversational capabilities."
    },
    {
        category: "Data Science",
        label: "Bioinformatics",
        fullName: "Bioinformatics & Genomic Data Processing – Handling omics datasets, sequencing data, and biological pipelines.",
        description: "Processing and analyzing genomic and biological data."
    },
    {
        category: "Data Analysis",
        label: "EDA",
        fullName: "Exploratory Data Analysis (EDA) – Discovering insights, identifying trends, and aligning results to KPIs.",
        description: "Finding insights through data exploration and analysis."
    },
    {
        category: "Data Analysis",
        label: "SQL",
        fullName: "SQL & Analytical Query Optimization – Writing optimized queries for data analysis.",
        description: "Optimizing SQL queries for efficient data retrieval."
    },
    {
        category: "Data Analysis",
        label: "BI Tools",
        fullName: "BI Tooling & Dashboarding – Building interactive dashboards and KPI-driven visualizations with Tableau, Power BI, or Looker.",
        description: "Creating interactive dashboards for data-driven insights."
    },
    {
        category: "Data Governance",
        label: "Metadata",
        fullName: "Metadata & Lineage Tracking – Ensuring data traceability, cataloging, and process transparency.",
        description: "Managing data lineage and traceability."
    },
    {
        category: "Data Governance",
        label: "Governance",
        fullName: "Data Quality, Privacy, Access & Governance – Establishing secure access controls, maintaining data confidentiality, enforcing encryption standards, and aligning with enterprise governance and compliance requirements.",
        description: "Ensuring data quality, privacy, and compliance."
    },
    {
        category: "Data Science",
        label: "Research",
        fullName: "Statistical Programming for Research – Supporting statistical workflows in epidemiology, public health, and lab sciences.",
        description: "Supporting scientific research with statistical programming."
    },
    {
        category: "Data Science",
        label: "Data Science Tools",
        fullName: "R & Python for Data Science – Leveraging statistical inference, data visualization, reproducible reporting, and domain-specific analytics.",
        description: "Conducting data analysis and visualization with R and Python."
    },
    {
        category: "Data Governance",
        label: "Clinical Data",
        fullName: "Clinical Data Standards & CDISC – Working with SDTM, ADaM, and related standards for regulatory submission.",
        description: "Managing clinical data for regulatory compliance."
    },

];
