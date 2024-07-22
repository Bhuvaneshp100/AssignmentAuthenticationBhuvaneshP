# AuthenticatingAssignment

## Introduction

This Framework utilizes Cucumber's BDD approach for defining the behavior of API and Playwright for automating the browser interactions. It provides a comprehensive framework for testing both API and UI aspects of application.

## Prerequisites

- Node.js version 
- npm (Node Package Manager)
- Playwright
- Cucumber

## Environment

Ensure that all necessary dependencies are installed by running:

npm run DependencyInstall

## Environment local 

To run code :
- For Plywright run :npm run test
- For Cucumber run  :npm run cucumber

## Environment git 

To run code :
- For Playwright run :  git - actions workflows -Objective:(Option 1) --**Run workflow**
- For Cucumber run  :git - actions workflows -Objective:(Option 2) --**Run workflow**

## Performance jmeter
To run code :
- Download code in local mechine
- Use jmeter tool and import jmx file and run code :ctrl+R

## Genetrate Reopty in Git 
To view report :
- After execution complete in Git 
- Click on Summary : Botton of page can see artifact report 
- Download report from artifact

## Folder Structure
-Here is an high level overview of the project directory structure:
```bash
playwright-framework/
│
├── .github/               # CI/CD pipeline to run code in GitHub and on push.
│
├── Backend/               # For Cucumber
│ ├── feature/             # All feature files
│ └── step/                # Step definitions
│
├── Common/                # Common methods for both API and UI
│ ├── apibase/             # Code for all APIs inside API base
│ └── uibase/              # Code for all UI inside UI base
│
├── Elementry/             # All locators stored
│
├── Frontend/              # UI and API spec files
│ ├── api.spec.ts          # Code for running API tests
│ └── ui.spec.ts           # Code for running UI tests
│
├── node_modules/          # All modules
│
├── PerformanceJmeter/     # jmx file for Jmeter script
│
├── resource/              # Contains all API JSON files and UI data
│
├── test-result/           # Playwright framework results in local run
│
├── .gitignore             # Specifies intentionally untracked files to ignore
│
├── package.json           # Project metadata and dependencies
│
├── package-lock.json      # Lock file for npm dependencies
│
├── playwright.config.ts   # Playwright configuration file
│
└── README.md              # High-level documentation for the project
