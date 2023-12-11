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
        AppState.on('Infos', _drawQuestions)
        this.grabQuestions()
        _drawQuestions()
        
    }

    grabQuestions(){
        infoService.grabQuestions()
    }

    drawActive(){
        const question = AppState.activeInfo
        let content = question.questionTemplate
        document.getElementById('question-ask').innerHTML = content
        let contentTwo = question.answerTemplate
        document.getElementById('answer-view').innerHTML = contentTwo
    }

    findQuestion(questionId){
        infoService.findQuestion(questionId)
        this.drawActive()
    }

}