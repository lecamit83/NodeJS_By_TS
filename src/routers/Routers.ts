import {Application, Request, Response} from 'express';
import { ContactController } from "./../controllers/ContactController";

export class Routers {
    private contactController : ContactController;
    constructor(){
        this.contactController = new ContactController();
    }
    public routers(app : Application) : void {
        app.route('/contact')
            .get(this.contactController.getContacts)
            .post(this.contactController.addContact)
            .delete();

        app.route('/contact/:id')
            .get(this.contactController.getContactByID)
            .post()
            .put(this.contactController.updateContact)
            .delete(this.contactController.removeContact);
    }

}
