import { AppState } from "../AppState.js"
import { infoService } from "../services/InfoService.js"



function _drawQuestions(){
    let questions = AppState.Infos
    let content = ''
    questions.forEach(question => content += question.questionSelect)
    document.getElementById('question-select').innerHTML = content
    console.log('draw')
}

function _drawActive(){

}

export class InfoController{
    constructor(){
        // debugger
        console.log('controller loaded')
        AppState.on('Infos', _drawQuestions)
        this.grabQuestions()
        
    }

    grabQuestions(){
        infoService.grabQuestions()
    }
}