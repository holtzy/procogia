skills_categories <- list(
  "Cloud Computing & DevOps" = c(
    "AWS (Amazon Web Services) (manual progress)",
    "AWS (Amazon Web Services) for cloud computing and AI services (manual progress)",
    "AWS CloudFormation (manual progress)",
    "AWS Redshift (manual progress)",
    "Azure (manual progress)",
    "Azure AI and Machine Learning services (manual progress)",
    "Azure Blob storage (manual progress)",
    "Azure Data Explorer (ADX) (manual progress)",
    "Azure Data Factory (manual progress)",
    "Azure Data Lake (manual progress)",
    "Azure DevOps (manual progress)",
    "Azure Synapse Analytics (manual progress)",
    "Google Cloud AI and Machine Learning services (manual progress)",
    "Google Cloud Platforms (manual progress)",
    "Kubernetes (manual progress)",
    "Terraform (manual progress)"
  ),
  "Data Engineering & ETL" = c(
    "Apache Airflow (manual progress)",
    "Apache Flink (manual progress)",
    "Apache Kafka (manual progress)",
    "Apache NiFi (manual progress)",
    "Databricks (manual progress)",
    "Dimensional Modeling (manual progress)",
    "ER Modeling (manual progress)",
    "Informatica (manual progress)",
    "Snowflake (manual progress)",
    "Talend (manual progress)"
  ),
  "Programming Languages" = c(
    "Bash (manual progress)",
    "Java (manual progress)",
    "Javascript (manual progress)",
    "Python (manual progress)",
    "R Programming (manual progress)",
    "Scala (manual progress)",
    "Shell scripting (manual progress)"
  ),
  "Data Science & Machine Learning" = c(
    "ARIMA (manual progress)",
    "BERT (manual progress)",
    "CycleGAN (manual progress)",
    "GPT (manual progress)",
    "Hugging Face Transformers (manual progress)",
    "Keras (manual progress)",
    "LightGBM (manual progress)",
    "MLOps dashboards (mlflow, w&b) (manual progress)",
    "Modeling (manual progress)",
    "NLTK (manual progress)",
    "NumPy (Python) (manual progress)",
    "OpenCV (manual progress)",
    "PyTorch (manual progress)",
    "scikit-learn (manual progress)",
    "spaCy (manual progress)",
    "TensorFlow (manual progress)",
    "XGBoost (manual progress)"
  ),
  "Databases & Storage" = c(
    "Cassandra (NoSQL) (manual progress)",
    "Cosmos DB (manual progress)",
    "Google BigQuery (manual progress)",
    "Hadoop (manual progress)",
    "MongoDB (NoSQL) (manual progress)",
    "MySQL (manual progress)",
    "Oracle Database (manual progress)",
    "PostgreSQL (manual progress)",
    "Redis (manual progress)",
    "SQL (Structured Query Language) (manual progress)",
    "SQL Server (manual progress)",
    "TeraData (manual progress)"
  ),
  "Data Visualization & BI" = c(
    "Adobe Analytics (manual progress)",
    "Excel (manual progress)",
    "Google Analytics (manual progress)",
    "Grafana (manual progress)",
    "Looker (manual progress)",
    "Matplotlib (manual progress)",
    "MetaBase (manual progress)",
    "PowerBI (manual progress)",
    "Qlik Sense (manual progress)",
    "QlikView (manual progress)",
    "Seaborn (manual progress)",
    "Tableau (manual progress)"
  ),
  "Big Data & Streaming" = c(
    "Apache Spark (manual progress)",
    "ELK Stack (Elasticsearch, Logstash, Kibana) (manual progress)",
    "OpenSearch (manual progress)",
    "Prometheus (manual progress)",
    "Splunk (manual progress)"
  ),
  "DevOps & CI/CD" = c(
    "Ansible (manual progress)",
    "Chef (manual progress)",
    "CircleCI (manual progress)",
    "Docker (manual progress)",
    "Git (manual progress)",
    "GitHub (manual progress)",
    "GitLab CI (manual progress)",
    "Jenkins (manual progress)",
    "Puppet (manual progress)"
  ),
  "R Ecosystem" = c(
    "Bioconductor (manual progress)",
    "dplyr (R) (manual progress)",
    "ggplot2 (manual progress)",
    "package development (manual progress)",
    "plumber (manual progress)",
    "Shiny (manual progress)",
    "testthat (manual progress)",
    "tidyverse (manual progress)"
  ),
  "Web & Frontend" = c(
    "CSS (manual progress)",
    "HTML (manual progress)",
    "jQuery (manual progress)"
  ),
  "Other" = c(
    "Collibra (manual progress)",
    "KNIME (manual progress)",
    "RapidMiner (manual progress)",
    "Years of Experience (number)"
  )
)

# Load lib and data
library(dplyr)
setwd("/Users/yanholtz/Desktop/procogia/src/data")

# Load raw data.
# Note that spaces and special characters are replcaed by . in the column names
df <- read.csv("raw-data.csv", stringsAsFactors = FALSE, check.names = FALSE)
head(df)
colnames(df)
summary(df)
head(df[,"testthat (manual progress)"])
head(df$Name)

# Initialize an empty data frame for the final aggregated results
aggregated_df <- data.frame(matrix(ncol = length(skills_categories), nrow = nrow(df)))
colnames(aggregated_df) <- names(skills_categories)

# Loop through each category in the skills_categories list
for (category in names(skills_categories)) {
  print(category)
  
  # Get the skills for the current category
  skills <- skills_categories[[category]]
  print(skills)
  
  # Check for missing columns and print them
  missing_columns <- setdiff(skills, colnames(df))
  if (length(missing_columns) > 0) {
    print(paste("Missing columns:", paste(missing_columns, collapse = ", ")))
  }
  
  # Subset the dataframe with the selected skills (columns)
  df_selected <- df[, skills, drop = FALSE]
  
  # Clean the selected columns (remove '%', '-', and convert to numeric)
  df_selected_clean <- lapply(df_selected, function(x) {
    as.numeric(gsub("%", "", gsub("-", "", x)))  # Remove '%' and '-' and convert to numeric
  }) %>% as.data.frame()
  
  # Calculate the row-wise averages for the selected columns
  avgs <- rowMeans(df_selected_clean, na.rm = TRUE)  # na.rm = TRUE to handle any NAs
  
  # Add the results (category averages) to the corresponding column in the aggregated data frame
  aggregated_df[[category]] <- avgs
}
aggregated_df$name = df$Name

# View the final aggregated data frame
print(aggregated_df)

# Convert and save in JSON
library(jsonlite)
js_data_json <- toJSON(aggregated_df, pretty = TRUE)
write(js_data_json, file = "clean_data.json")




