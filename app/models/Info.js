import { AppState } from "../AppState.js"
import { generateId } from "../utils/GenerateId.js"



export class Info{

    constructor(data, number){
        this.difficulty = data.difficulty
        this.category = data.category
        this.question = data.question
        this.answer = data.correct_answer
        this.wrong = data.incorrect_answers
        this.type = data.type
        this.id = generateId()
        // this.Number = number
    }


    get questionSelect(){
        return`
        <div class="questionCard d-flex fw-bold">
        <span class="">
        <h6 class="ms-4 me-2">Number:</h6>
        <h6>${this.Number ? this.Number : this.NumberMedium}</h6>
    </span>
        <span class="ms-3 me-3">
            <h6 class="fw-bold">Category:</h6>
            <h6>${this.category}</h6>
        </span>
        <span class="me-4 fw-bold">
        <h6 class="ms-4 me-2">Difficulty:</h6>
        <h6>${this.difficulty}</h6>
    </span>
        <button onclick="app.InfoController.findQuestion('${this.id}', '${this.difficulty}')">Open</button>
    </div>
        `
    }
    get questionTemplate(){
        return`
        <div>
        <h4>${this.question}</h4>
        </div>
        `
    }

    get answerTemplate(){
        return`
        <div class="rounded-2 p-2 text-light m-2 answerCard">
        <span class="d-flex">
            <h4 class="me-3">A.</h4>
            <h4>${this.wrong[0]}</h4>
        </span>
    </div>
    <div class="rounded-2 p-2 text-light m-2 answerCard">
        <span class="d-flex">
            <h4 class="me-3">B.</h4>
            <h4>${this.wrong[2]}</h4>
        </span>
    </div>
    <div class="rounded-2 p-2 text-light m-2 answerCard">
        <span class="d-flex">
            <h4 class="me-3">C.</h4>
            <h4>${this.wrong[1]}</h4>
        </span>
    </div>
    <div class="rounded-2 p-2 text-light m-2 answerCard">
        <span class="d-flex">
            <h4 class="me-3">D.</h4>
            <h4>${this.answer}</h4>
        </span>
    </div>
        `
    }

    get questionHomeTemplate(){
        return`
        <div class="text-light rounded-2 questionHome">
        <h3>Question</h3>
        <div id="question-ask"></div>
    </div>
</div>
<div class="text-center mt-2">
    <h3>Choose an answer:</h3>
    <div id="answer-view" class="d-flex flex-column align-items-center">
        `
    }

    get Number(){
        const foundIndex = AppState.Infos.findIndex(info => info.id == this.id)
        return foundIndex + 1
    }

    get NumberMedium(){
        const foundIndex = AppState.InfosMedium.findIndex(info => info.id == this.id)
        return foundIndex + 1
    }
}