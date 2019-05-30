import * as express from 'express';
import { urlencoded, json } from 'body-parser';

import { Routers } from "./routers/Routers";

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
        new Routers().routers(this.app);
    }

}

export default new App().app;