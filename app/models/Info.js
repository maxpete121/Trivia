


export class Info{

    constructor(data){
        this.difficulty = data.difficulty
        this.category = data.category
        this.question = data.question
        this.answer = data.correct_answer
        this.wrong = data.incorrect_answers
        this.type = data.type
    }
}