import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController, ExamplesController],
    view: 'app/views/InfoView.html'

  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])