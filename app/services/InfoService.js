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
        // this.countQuestions()
    }

    async grabMediumQuestions(){
        let response = await fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple')
        let body = await response.json()
        let questions = await body.results.map(newInfo => new Info(newInfo))
        AppState.InfosMedium = questions
        console.log(AppState.InfosMedium)
    }


    findQuestion(questionId, difficulty){
        console.log(difficulty)
        if(difficulty == 'easy'){
            let question = AppState.Infos
            let active = question.find(needed => needed.id == questionId)
            AppState.activeInfo = active
        }
        if(difficulty == 'medium'){
            let questionMed = AppState.InfosMedium
            let active = questionMed.find(needed => needed.id == questionId)
            AppState.activeInfo = active
        }
    }

    countQuestions(){
        let questionCount = AppState.Infos
        for(let i = 0; i < questionCount.length; i++){
            // console.log(i)
            const info = AppState.Infos[i]
            info.Number = i + 1
            console.log(info)
            
        }
    }



}

export const infoService = new InfoService()