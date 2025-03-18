export type Variable =
    | 'ML Ops'
    | 'Data Pipelines'
    | 'Database'
    | 'Data Viz'
    | 'Storytelling'
    | 'Business Insights'
    | 'Reporting'
    | 'Experimentation'
    | 'Stats'
    | 'ML Modeling'
    | 'Deployment';

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
    { name: "ML Ops", max: 5 },
    { name: "Data Pipelines", max: 5 },
    { name: "Database", max: 5 },
    { name: "Data Viz", max: 5 },
    { name: "Storytelling", max: 5 },
    { name: "Business Insights", max: 5 },
    { name: "Reporting", max: 5 },
    { name: "Experimentation", max: 5 },
    { name: "Stats", max: 5 },
    { name: "ML Modeling", max: 5 },
    { name: "Deployment", max: 5 },
]

export const COLORS = ["green", "#e0ac2b", "#6689c6", "#e85252", "#9a6fb0"];

