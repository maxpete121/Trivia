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

    drawQuestionHome(){
        let questionHome = AppState.Infos
        let content = ''
        questionHome.find(question => content = question.questionHomeTemplate)
        document.getElementById('question-home').innerHTML = content
        this.drawActive()
    }

    drawQuestions() {
        let questions = AppState.Infos
        let content = ''
        questions.forEach(question => content += question.questionSelect)
        document.getElementById('question-select').innerHTML = content
        console.log('draw')
        this.closeActive()
    }

    drawMediumQuestions(){
        let questions = AppState.InfosMedium
        let content = ''
        questions.forEach(question => content += question.questionSelect)
        document.getElementById('question-select').innerHTML = content
        this.closeActive()
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

    closeActive(){
        let content = ''
        document.getElementById('question-home').innerHTML = content
    }

    findQuestion(questionId, difficulty) {
        infoService.findQuestion(questionId, difficulty)
        this.drawQuestionHome()
    }

    countQuestions() {
        infoService.countQuestions()

    }


}