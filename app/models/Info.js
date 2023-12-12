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
        <div class="col-2 bg-dark text-light text-center mb-2 ms-2 p-2 rounded-2">
        <span class="d-flex">
            <h5 class="ms-4 me-2">Category:</h5>
            <h5>${this.category}</h5>
        </span>
        <span class="d-flex">
        <h5 class="ms-4 me-2">Number:</h5>
        <h5>${this.Number ? this.Number : this.NumberMedium}</h5>
    </span>
        <span class="d-flex">
        <h5 class="ms-4 me-2">Difficulty:</h5>
        <h5>${this.difficulty}</h5>
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
        <div class="col-2 bg-dark rounded-2 p-2 text-light m-2">
        <span class="d-flex">
            <h4 class="me-3">A.</h4>
            <h4>${this.wrong[0]}</h4>
        </span>
    </div>
    <div class="col-2 bg-dark rounded-2 p-2 text-light m-2">
        <span class="d-flex">
            <h4 class="me-3">B.</h4>
            <h4>${this.wrong[2]}</h4>
        </span>
    </div>
    <div class="col-2 bg-dark rounded-2 p-2 text-light m-2">
        <span class="d-flex">
            <h4 class="me-3">C.</h4>
            <h4>${this.wrong[1]}</h4>
        </span>
    </div>
    <div class="col-2 bg-dark rounded-2 p-2 text-light m-2">
        <span class="d-flex">
            <h4 class="me-3">D.</h4>
            <h4>${this.answer}</h4>
        </span>
    </div>
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