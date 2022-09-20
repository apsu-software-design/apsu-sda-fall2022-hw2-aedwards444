//Austin Edwards
//Gathering Class
//9/19/2022

import readlineSync = require('readline-sync');
import { Members } from './members';

export class Gatherings {

    private name: String
    private time: String
    private membersArray: Array<Members>

    constructor() {
        this.name = this.enterName()
        this.time = this.enterTime()

        var flag1 = true
        var count = 0
        while (flag1) {
            let response = readlineSync("Do you want to add a new member (Y/N): ")
            if (response == "Y") {
                this.membersArray[0] = this.addMembers()
            }
            else
            {
                flag1 = false
			}
		}
    }
    enterName() {
        let response = readlineSync.question("What is the name of the event: ")
        return response
    }

    enterTime() {
        let response = readlineSync.question("What is the time of the event: ")
        return response
    }

    addMembers() {
        var mem = new Members()
        return mem
    }
}