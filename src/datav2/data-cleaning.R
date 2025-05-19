# Load libraries
library(dplyr)
library(readxl)
library(jsonlite)

# Set working directory
setwd("/Users/yanholtz/Desktop/procogia/src/datav2")

# Load raw data
# Note that spaces and special characters are replaced by . in the column names
df <- read_excel("raw-data.xlsx")
head(df)
colnames(df)
summary(df)

# Define the mapping
skill_labels <- c(
  "ID",
  "Start time",
  "Completion time",
  "Email",
  "Name",
  "Last modified time",
  "Experience",
  "Data Modeling",
  "ETL/ELT",
  "Cloud Data",
  "Big Data",
  "Orchestration",
  "Machine Learning",
  "MLOps",
  "Deep Learning",
  "Statistics",
  "Generative AI",
  "Bioinformatics",
  "SAS",
  "Data Science Tools",
  "Clinical Data",
  "Research",
  "EDA",
  "SQL",
  "BI Tools",
  "Metadata",
  "Governance"
)
colnames(df) <- skill_labels
head(df)
colnames(df)
summary(df)

# Example skill levels
skill_levels <- c("novice", "fundamental awareness", "intermediate", "advanced", "expert")
skill_map <- setNames(1:length(skill_levels), skill_levels)


# Select relevant columns: Name + skills (20 skill columns)
skill_cols <- c(
  "Data Modeling", "ETL/ELT", "Cloud Data", "Big Data", "Orchestration", 
  "Machine Learning", "MLOps", "Deep Learning", "Statistics", "Generative AI",
  "Bioinformatics", "SAS", "Data Science Tools", "Clinical Data", "Research",
  "EDA", "SQL", "BI Tools", "Metadata", "Governance"
)
library(stringr)

df_skills <- df %>%
  select(Name, all_of(skill_cols)) %>%
  mutate(across(all_of(skill_cols), ~ {
    # Clean text: trim and lowercase
    cleaned <- str_trim(tolower(as.character(.x)))
    # Map using skill_map; unknown levels become NA
    skill_map[cleaned]
  }))

# Check for unmapped values
if (any(is.na(df_skills))) {
  warning("Some skill values did not match known levels and became NA.")
}

# Convert data frame rows to list of named lists
data_list <- split(df_skills, seq(nrow(df_skills)))
data_list <- lapply(data_list, function(row) as.list(row))

# Write JSON as an array (not named object)
write_json(data_list, "clean_data.json", pretty = TRUE, auto_unbox = TRUE)
