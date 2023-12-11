import { AppState } from "../AppState.js"
import { infoService } from "../services/InfoService.js"


function _drawQuestions(){

}

export class InfoController{
    constructor(){
        // debugger
        console.log('controller loaded')
        this.grabQuestions()
        
    }

    grabQuestions(){
        infoService.grabQuestions()
    }
}