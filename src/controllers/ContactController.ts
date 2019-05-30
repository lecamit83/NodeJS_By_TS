import { Contact } from "./../models/Contact";
import { Request, Response, NextFunction } from "express";


export class ContactController {
    constructor(){

    }

    public addNewContact( req : Request, res : Response ) : void {
        let newContact = new Contact(req.body);
        newContact.save((err : any , contact : any)=>{
            if(err){
                res.send(err);
            }    
            res.json(contact);
        });
    }
}