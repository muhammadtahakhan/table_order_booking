
import {Request, Response} from "express";
import { ContactController } from "../controllers/crmController";
import { UserController } from '../controllers/userController';


export class Routes {
    public contactController: ContactController = new ContactController();
    public userController : UserController = new UserController();

    public routes(app): void {


        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        });

        // Contact
        app.route('/contact')
        // GET endpoint
        .get(this.contactController.getContacts)
        // POST endpoint
        .post(this.contactController.addNewContact);
        // Contact detail
        app.route('/contact/:contactId')
        // edit specific contact
        .get(this.contactController.getContactWithID)
        .put(this.contactController.updateContact)
        .delete(this.contactController.deleteContact);

        // User
        app.route('/user')
        .get(this.userController.getUser)
        .post(this.userController.createUser);    

        app.route('/user/:userId')
        .get(this.userController.getUserById);

    }


}