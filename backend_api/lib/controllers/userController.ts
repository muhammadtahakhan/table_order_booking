import { UserSchema } from './../models/userModel';
import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

const User = mongoose.model('User', UserSchema);
export class UserController{

    public createUser(req: Request, res: Response){
        let newUser = new User(req.body);
        
        newUser.save((err, data) => {
            if(err){
                res.send(err);
            }
            res.json(data);
        });

    }

    public getUser(req:Request, res: Response){
            User.find({}, (err, data)=>{
                if(err) res.send(err);
                res.json(data);
            });

    }

    public getUserById(req: Request, res: Response){
        User.findById(req.params.userId, (err, data)=>{
            if(err){
                res.send(err);
            }
            res.json(data);
        });

    }


}