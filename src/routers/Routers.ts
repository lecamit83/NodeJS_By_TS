import {Application, Request, Response} from 'express';

export class Routers {

    constructor(){
        
    }
    public routers(app : Application) : void {
        app.route('/')
            .get((req : Request , res : Response) : void =>{
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })
            .post()
            .delete();
    }
}
