//Austin Edwards
//Member Class
//9/19/2022

import readlineSync = require('readline-sync');

export class Members {

    private emailAdress: String
    private firstName: String
    private lastName: String

    constructor() {
        this.emailAdress = this.enterEmail()
        this.firstName = "default"
        this.lastName = "default"
    }
    enterEmail() {
        let response = readlineSync.question("What is your Email: ")
        return response
    }

    enterFirstName() {
        let response = readlineSync.question("What is your First Name: ")
        return response
    }

    enterLastName() {
        let response = readlineSync.question("What is your Last Name: ")
        return response
    }
}