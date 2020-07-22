[![Datalayer](https://raw.githubusercontent.com/datalayer/datalayer/main/res/logo/datalayer-25.svg?sanitize=true)](https://datalayer.io)

# Datalayer Library

> Library with materials such as datasets, papers, exercies, dashboards...

Datalayer Library is an open source tools to persist and search Jupyter-like artifacts.

## File System

```
+- library
  +- user-1
    +- .datalayer
      +- datalayer.json
    +- home
      +- datasets
      |  +- dataset-1
      |  |  +- dataset
      |  |  |  +- data.csv
      |  |  +- index.md
      |  +- dataset-2
      |     +- dataset
      |     |  +- data.csv
      |     +- index.md
      +- exercises
      |  +- exercise-1
      |  |  +- index.html
      |  +- exercise-2
      |    +- index.html
      +- projects
        +- project-1
        |  +- paper.md
        +- project-2
          +- paper.md
```

## Model

| | Project |
|-|---------|
|🔴| OwnerId |
|🔴| CreationDate |
|🔴| Tags |

| | Dataset |
|-|---------|
|🔴| OwnerId |
|🔴| CreationDate |
|🔴| Format |
|🔴| Path |
|🔴| Tags |
|🔴| PublicationDate |

| | Exercise |
|-|---------|
|🔴| OwnerId |
|🔴| CreationDate |
|🔴| Format |
|🔴| Path |
|🔴| Tags |
|🔴| PublicationDate |

| | Paper |
|-|---------|
|🔴| OwnerId |
|🔴| CreationDate |
|🔴| ContributorsIds |
|🔴| Tags |
|🔴| PublicationDate |
|🔴| Claps |
