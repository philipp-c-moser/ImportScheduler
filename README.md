# ImportScheduler
[![Build Status](https://dev.azure.com/philipp-c-moser/ImportScheduler/_apis/build/status/philipp-c-moser.ImportScheduler?branchName=develop)](https://dev.azure.com/philipp-c-moser/ImportScheduler/_build/latest?definitionId=27&branchName=develop)


## What this application will do
This application allows us to schedule a import of mutliple users via CSV-File.
While uploading the CSV-Uploadfile, the user can select out of three different options:

 - Import the Users directly
 - Import the Users at a specific date and time
 - Recommend a date and time to import

The application will import the users to the database at the selected date and time.

When the user selects the third option (recommend date and time), the application will select a possible date and time in the current weeek based on the performance of past imports.

Scheduled imports can be reviewed in the Import History.