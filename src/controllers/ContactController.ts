import { Contact } from "./../models/Contact";
import { Request, Response, NextFunction } from "express";


export class ContactController {

    constructor(){

    }

    public addContact( req : Request, res : Response ) : void {
        let newContact = new Contact(req.body);
        newContact.save((err : any , contact : any)=>{
            if(err){
                res.send(err);
            }    
            res.json(contact);
        });
    }
    /**
     * getContacts
     */
    public getContacts(req : Request, res : Response) : void {
        Contact.find({}, (err: any, contacts : any)=>{
            if(err){
                res.send(err);
            }
            res.send(contacts);
        });
    }
    /**
     * getContactByID
     */
    public getContactByID(req : Request , res : Response) : void {
        let _id = req.params.id;
        Contact.findById({ _id }, (err : any, contact : any)=>{
            if(err){
                res.send(err);
            }
            res.send(contact);
        })
    }
    /**
     * updateContact
     */
    public updateContact(req : Request , res : Response) : void {
        let _id = req.params.id;
        Contact.findByIdAndUpdate({_id} , (err : any, contact : any)=>{

        })
    }
    /**
     * removeContact
     */
    public removeContact(req : Request , res : Response) : void {
        let _id = req.params.id;
        Contact.findByIdAndDelete({_id}, (err : any, contact : any)=>{
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!'});
        })
    }
}