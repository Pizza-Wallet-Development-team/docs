---
sidebar_position: 2
description: Workflow Overview
---

# Workflow

## Tools

- We use **[git](https://git-scm.com/docs)** as our **version controlling system**.
- We use **[GitHub](https://docs.github.com/en)** to **host** all of our code and **CI** workflows.
- We use **[Docker](https://docs.docker.com/)** for **local development.**
- We use **[Fleek](https://docs.fleek.co/)** as our **IPFS gateway**. It also runs all of our **CD** workflows.

## **Git Best Practices**

1. Don’t `git push` straight to `master`. Branch it out!

2. Adequately configure the commit authorship.

3. Write descriptive and meaningful commit messages.

4. Commit only related work.

5. Avoid rewriting the *master’s* history.

6. Rebase your working branch frequently.

7. Know the tool.

## **Local Development Workflow**

Run the following command to develop locally with Docker

```bash
docker-compose -f docker-compose-dev.yml up --build
```

## **CI Workflow**

We use [**GitHub Actions**](https://docs.github.com/en/actions) to run all of our [**CI workflows**](https://github.com/Pizza-Wallet-Development-team/pizza-wallet/blob/main/.github/workflows).

- On Push:
    - **[CodeQL Security Check](https://github.com/Pizza-Wallet-Development-team/pizza-wallet/blob/main/.github/workflows/codeql-analysis.yml)**
- If successful:
    - [**Build Docker Container**](https://github.com/Pizza-Wallet-Development-team/pizza-wallet/blob/main/.github/workflows/build.yml)
- If successful:
    - [**Run Tests**](https://github.com/Pizza-Wallet-Development-team/pizza-wallet/blob/main/.github/workflows/test.yml)

## **CD Workflow**

We use Fleek to run all of our **CD workflows**.

- On Push:
    - If master:
        - Deploy new production environment
    - If another branch:
        - Deploy staging environment