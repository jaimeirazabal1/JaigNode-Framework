
import {Request, Response} from 'express';

//mandatory format
export default function(req:Request, res:Response, next:Function){
    console.log('headers');
    
    console.log(req.headers)

    next();
}