//Austin Edwards
//Organizations Class
//9/19/2022

import readlineSync = require('readline-sync');
import { Members } from './members';
import { Gatherings } from './gatherings';

export class Organizations {

    private name: String
    private MembersArray: Array<Members>
    private GatheringArray: Array<Gatherings>

    constructor() {
        this.name = this.enterName()
        
    }

    enterName() {
        let response = readlineSync.question("What is the name of the Organization: ")
        return response
    }

    addGatherings() {
        var gath = new Gatherings()
        return gath
    }

    addMembers() {
        var mem = new Members()
        return mem
    }
}