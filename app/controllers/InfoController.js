import { AppState } from "../AppState.js"
import { infoService } from "../services/InfoService.js"






export class InfoController {
    constructor() {
        // debugger
        console.log('controller loaded')
        this.grabQuestions()
        this.grabMediumQuestions()
        // AppState.on('Infos', this.countQuestions)
        // AppState.on('InfosMedium', this.drawMediumQuestions)


    }
    drawQuestions() {
        let questions = AppState.Infos
        let content = ''
        questions.forEach(question => content += question.questionSelect)
        document.getElementById('question-select').innerHTML = content
        console.log('draw')
    }

    drawMediumQuestions(){
        let questions = AppState.InfosMedium
        let content = ''
        questions.forEach(question => content += question.questionSelect)
        document.getElementById('question-select').innerHTML = content
    }

    grabQuestions() {
        infoService.grabQuestions()
    }

    grabMediumQuestions() {
        infoService.grabMediumQuestions()
    }

    drawActive() {
        const question = AppState.activeInfo
        let content = question.questionTemplate
        document.getElementById('question-ask').innerHTML = content
        let contentTwo = question.answerTemplate
        document.getElementById('answer-view').innerHTML = contentTwo
    }

    findQuestion(questionId, difficulty) {
        infoService.findQuestion(questionId, difficulty)
        this.drawActive()
    }

    countQuestions() {
        infoService.countQuestions()

    }


}