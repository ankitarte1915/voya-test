# Voya Test

This project contains the test code submitted to Voya.
This project aims specifically to verify the **RXJS functionality** 

## Development server

Use `git pull` to get the latest code from main branch.
Run `npm install` to install the packages and dependencies.
Run `ng serve` for a dev server. 
Navigate to `http://localhost:4200/`. 

## Description

On the homepage you will see a button to 'display the users'. This button is styled using ***SCSS Mixins***. Clicking on this button, will open a modal window which is **centerred on the screen**. It has 2 buttons in the footer - confirm and cancel. 

I have demonstrated the RXJS functionality for **subscribe/observable** and have also used RXJS operator **filter**.

On the confirm click, I am using http.get method to call a demo json file. This method returns an observable, which is then subscribed in the user component to populate the data on the screen.
The first table will display all the data, and the second table will display only the data where users are more than 30 years old. 


## Screenshots

I have also included screenshots on the pages and saved them under 'screenshots' folder.

