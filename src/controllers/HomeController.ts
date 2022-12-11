
import { Request, Response } from 'express'
//mandatory format
export class HomeController {
    constructor(){
        console.log('constructor de home controller')
    }

    static index(req: Request, res: Response){
       
        res.send('Hola mundo')
    }
    static getpost(req: Request, res: Response){
    
        res.send(req.body);
    }
}