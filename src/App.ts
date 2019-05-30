import * as express from 'express';
import { urlencoded, json } from 'body-parser';
class App {
    public app : express.Application;
    constructor(){
        this.app = express();
        this.config();
        this.mountRouters();
    }
    private config() : void {
        this.app.use(json());
        this.app.use(urlencoded({extended : false}));
    }
    private mountRouters() : void {
       this.app.get('/', (req, res)=>{
           res.send({massage : "Hello"})
       });
    }

}

export default new App().app;