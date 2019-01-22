# Weekend-challenge-5-feedback

A feedback form modeled after Prime's system feedback. Feedback will be collected over 4 views, and when all steps are complete, the app will save the feedback in the database. In a separate part of the page, the current feedback values and a submit button will be displayed. While there is no nav bar, each part of the form should be at its own route. Clicking next should move the user to the appropriate step in the process. In addition to the multi-step form, the app needs to display the results of each step clearly and at all times. The simplest could be another component on the DOM which shows the results of the current survey and a Submit button.


### SETUP

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

## Built With
React

Redux

Node.js

Express

Material UI

CSS

## Completed Features
Submit Button which is disabled if survey isn't filled out completely.

Next Button routes you to the next step of the survey 

## Author
Victoria Chhieng
