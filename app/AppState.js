import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Info } from './models/Info.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  /**@type {Info[]} */
  Infos = [
    // new Info({
    //   // difficulty: 'Easy',
    //   // category: 'Entertainment: Video Games',
    //   // question: 'How are you?',
    //   // correct_answer: 'Fine',
    //   // incorrect_answers: ['eh', 'alright', 'whatever']
    // })
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())