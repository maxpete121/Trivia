import { AppState } from "../AppState.js";
import { Info } from "../models/Info.js";


class InfoService{


    async grabQuestions(){
        let response = await fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple')
        console.log('api grabbed', response)
        let body = await response.json()
        console.log('body', body)
        let questions = await body.results.map(newInfo => new Info(newInfo))
        console.log(questions)
        AppState.Infos = questions
        console.log(AppState.Infos)
    }

    findQuestion(questionId){
        let question = AppState.Infos
        let active = question.find(needed => needed.id == questionId)
        AppState.activeInfo = active
    }



}

export const infoService = new InfoService()