# ImportScheduler
[![Build Status](https://dev.azure.com/philipp-c-moser/ImportScheduler/_apis/build/status/philipp-c-moser.ImportScheduler?branchName=develop)](https://dev.azure.com/philipp-c-moser/ImportScheduler/_build/latest?definitionId=27&branchName=develop)

## Live-Demo

### continuous Integration / continuous Deployment with Azure DevOps
[https://dev.azure.com/philipp-c-moser/ImportScheduler](https://dev.azure.com/philipp-c-moser/ImportScheduler)

Trigger Build when pushing commits to the repository
 1. Build ASP.NET Core Backend
 2. Install node.js and build Angular Client 
 3. Copy all build-files to a staging directory
 4. Publish staging directory as Artifact

### Hosted on Microsoft Azure App Services
[https://importscheduler.azurewebsites.net](https://importscheduler.azurewebsites.net)

Two Release-Pipelines
 - Continuous Deployment to Testinstallation in Azure App Services
 - Manual Deployment 


## What this application will do
This application allows us to schedule a import of mutliple users via CSV-File.
While uploading the CSV-Uploadfile, the user can select out of three different options:

 - Import the Users directly
 - Import the Users at a specific date and time
 - Recommend a date and time to import

The application will import the users to the database at the selected date and time.
Before the user can save the scheduled import, the import file will be evaluated and validated. Only, if the CSV file could resist a import-test, the file will be saved and prepared for the scheduled import.

When the user selects the third option (recommend date and time), the application will select a possible date and time in the current weeek based on the performance of past imports.

Scheduled imports can be reviewed in the Import History.

## What is planned for the future
Currently, it is only planned to import CSV-Files with the correct column structure.
In the future, the user should be able to define his own column-structure for the import. Therefore we need a special editor to make this editable!


## What are the difficulties
First, we need to set up the whole application. The ASP.NET Core + Angular application and the MS SQL Server should run in a docker container and connected with docker-compose.
Inside this container, a Cronjob needs to run and trigger the scheduled tasks. Until the CSV files are not imported, they need to be stored.
