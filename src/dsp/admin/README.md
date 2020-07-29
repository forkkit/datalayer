[![Datalayer](https://raw.githubusercontent.com/datalayer/datalayer/main/res/logo/datalayer-25.svg?sanitize=true)](https://datalayer.io)

# Datalayer DSP Admin

Datalayer `DSP Admin` is an open source tool to create and manage the Datalayer Science Platform.

```bash
# Help.
dsp -h
```

## IAM

```bash
# IAM Help.
dsp iam -h
```

```bash
# Operate LDAP users.
dsp iam init-ldap-users
# List LDAP users.
dsp iam list-ldap-users
dsp iam list-ldap-users -f ech --log-level debug
dsp iam list-ldap-users -d
# Export/Import LDAP users.
dsp iam export-ldap-users
dsp iam import-users
```

```bash
# List users.
dsp iam list-users
dsp iam list-users -q id:eric
```

```bash
# Delete users.
dsp iam delete-users -q id:eric
```

```bash
# Communicate with users.
dsp iam mail-users
```

## Library

```bash
dsp library -h
```

```bash
# Library Dataset.
dsp library create-dataset
dsp library delete-dataset
dsp library list-datasets
```

```bash
# Library Project.
dsp library create-project
dsp library delete-project
dsp library list-projects
```

```bash
# Library Exercise.
dsp library create-exercise
dsp library delete-exercise
dsp library list-exercises
```

```bash
# Library Paper.
dsp library create-paper
dsp library delete-paper
dsp library list-papers
```
