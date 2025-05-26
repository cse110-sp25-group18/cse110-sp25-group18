# Phase 2 CI/CD Pipeline Report

![CI/CD Pipeline Diagram](./phase1.drawio.png)

## Overview

Our team has improved on the second phase of our CI/CD pipeline as part of our software engineering project. This pipeline is currently triggered by the creation of a Pull Request and automates several key tasks to improve the maintainability and quality of our codebase.

## Functional Components

### Code Linting with ESLint
- When creating a Pull Request, ESLint is ran automatically.
- ESLint checks that the code is valid, including syntax warnings and enforcing commit message formats.

### End-to-End Testing with Puppeteer
- This is tested automatically after making a Pull Request.
- Puppeteer will test the user experience by running several automated tests on how certain functionalities will behave.

## Planned/Upcoming Features

These features are not implemented yet but are considered for future phases:

### 🔜 Future CI/CD Additions
- **Code quality tools** (e.g., CodeClimate, SonarCloud) to evaluate maintainability and complexity.
- **Code coverage** tracking to ensure test thoroughness.
- **Branch protection rules** to enforce successful pipeline runs before merges.

## Technical Details

- The pipeline is implemented as a **GitHub Actions workflow**.
- Additional branches are used for testing the pipeline before integration into `main`.

## Conclusion

This Phase 2 pipeline is an improvement on our CI/CD workflow from phase 1. By expanding our automated testing, and code linting actions, we are streamlining our CI/CD pipeline.

---