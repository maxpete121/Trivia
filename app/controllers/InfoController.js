import { AppState } from "../AppState.js"
import { infoService } from "../services/InfoService.js"



function _drawQuestions(){
    let questions = AppState.Infos
    let content = ''
    questions.forEach(question => content += question.questionSelect)
    document.getElementById('question-select').innerHTML = content
    console.log('draw')
}



export class InfoController{
    constructor(){
        // debugger
        console.log('controller loaded')
        AppState.on('Infos', _drawQuestions())
        this.grabQuestions()
        _drawQuestions()
        
    }

    grabQuestions(){
        infoService.grabQuestions()
    }

    drawActive(questionId){
        let question = AppState.Infos
        let content = ''
        let active = question.find(needed => needed.id == questionId)
        content = active
        document.getElementById('question-ask').innerHTML = content
    }

}