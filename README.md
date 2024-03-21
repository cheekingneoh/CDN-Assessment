# CDN-Assessment

This project is for a fictional company known as Complete Developer Network (CDN) where it serves the purpose of maintaining a list of freelancers for job opportunities. 

# Installation (For running locally)

Step 1: Open the solution file on visual studio

Step 2: Create new PostgresSql Database for the project 

Step 3: Get the connection string and paste it in the appsettings.json file (CDN-Assessment-Server -> appsettings.json)
``` json
    {
        "ConnectionStrings":{
            "DbConnection":"{insert ADO connection string here}"
        }
    }
```

Step 4: Run the "Update-database" command in the Package Manager Console. This is to update the schema of the database and add the user table
(For Visual Studio 2022: View -> Other Windows -> Package Managere Console)

Step 5: Run the program by presssing the "Start" button on the top toolbar or the "Start Debugging" button in the Debug menu.

# How does the application work?

For viewing, it is just the table on the bottom of the page displaying all the users and their details.

For creating new users, updating user details or deleting users. First, you will need to authenticate the request by pressing the "Authenticate" button which will fetch a JWT token from the server for Authentication purposes. 

For creating new users, just fill in the fields in the first section and click the "Add New User" button and the new user will be added to the database.

For Updating or Deleting a user, click on the user that you want to act upon from the table. It will then bring up a window where you can update the user details or delete the user.


# Notes (Important)
The CRUD of the users will only be updated on the page once the page is refreshed.

This application is for simple installation and testing thus the key for the JWT token is just stored in appsettings.json. If you are planning to use this in a real deployment, ensure that the key is properly protected and kept a secret by using something like Azure Key Vault or Secret Manager.
