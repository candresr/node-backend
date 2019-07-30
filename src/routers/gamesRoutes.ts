import { Router } from 'express';
import {gamesController} from '../controllers/gamesController'

class GamesRouters{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getone);
        this.router.post('/', gamesController.create);
        this.router.delete('/:id', gamesController.delete);
        this.router.put('/:id', gamesController.update);
    }
}

const gamesRouters = new GamesRouters();
export default gamesRouters.router;