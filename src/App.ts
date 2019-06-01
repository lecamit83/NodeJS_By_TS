import * as express from 'express';
import { urlencoded, json } from 'body-parser';
import * as mongoose from 'mongoose';

import { Routers } from "./routers/Routers";
import { MongoError } from '../node_modules/@types/mongodb';

class App {
    
    public app : express.Application;
    public mongoUrl: string = 'mongodb://127.0.0.1:27017/nodebyts';  


    constructor(){
        this.app = express();
        this.config();
        this.mongoSetup();
        this.mountRouters();
    }
    private config() : void {
        this.app.use(json());
        this.app.use(urlencoded({extended : false}));
    }
    private mongoSetup() : void {
        mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true,
            useCreateIndex: true
        }, (err : MongoError) : void => {
            if(err) {
                throw err;
            }
            console.log('Connected database!');
        });        
    }
    private mountRouters() : void {
        new Routers().routers(this.app);
    }

}

export default new App().app;