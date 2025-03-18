export type Variable =
    "Cloud Computing & DevOps" |
    "Data Engineering & ETL" |
    "Programming Languages" |
    "Data Science & Machine Learning" |
    "Databases & Storage" |
    "Data Visualization & BI" |
    "Big Data & Streaming" |
    "DevOps & CI/CD" |
    "R Ecosystem" |
    "Web & Frontend" |
    "Other"

export type DataItem<T extends string> = {
    [key in T]: number;
} & {
    name: string;
};

export type Data = DataItem<Variable>[];

export type AxisConfig = {
    name: Variable;
    max: number;
};

export const AXIS_CONFIG: AxisConfig[] = [
    { name: "Cloud Computing & DevOps", max: 100 },
    { name: "Data Engineering & ETL", max: 100 },
    { name: "Programming Languages", max: 100 },
    { name: "Data Science & Machine Learning", max: 100 },
    { name: "Databases & Storage", max: 100 },
    { name: "Data Visualization & BI", max: 100 },
    { name: "Big Data & Streaming", max: 100 },
    { name: "DevOps & CI/CD", max: 100 },
    { name: "R Ecosystem", max: 100 },
    { name: "Web & Frontend", max: 100 },
    { name: "Other", max: 100 },
]

export const COLORS = ["green", "#e0ac2b", "#6689c6", "#e85252", "#9a6fb0"];

