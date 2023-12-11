import { generateId } from "../utils/GenerateId.js"



export class Info{

    constructor(data){
        this.difficulty = data.difficulty
        this.category = data.category
        this.question = data.question
        this.answer = data.correct_answer
        this.wrong = data.incorrect_answers
        this.type = data.type
        this.id = generateId()
    }


    get questionSelect(){
        return`
        <div class="col-2 bg-dark text-light text-center">
        <span class="d-flex">
            <h5 class="ms-4 me-2">Category:</h5>
            <h5>${this.category}</h5>
        </span>
        <span class="d-flex">
        <h5 class="ms-4 me-2">Difficulty:</h5>
        <h5>${this.difficulty}</h5>
    </span>
        <button onclick="app.InfoController.drawActive('${this.id}')">Open</button>
    </div>
        `
    }
    get questionTemplate(){
        return`
        <div>${this.question}</div>
        `
    }
}