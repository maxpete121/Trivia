import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Info } from './models/Info.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  Infos = [
    new Info({
      
    })
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())