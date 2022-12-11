import express, { Express, Request, RequestHandler, Response } from 'express';
import dotenv from 'dotenv';
import { Directory } from './directory';
import e from 'express';
dotenv.config();

interface route {
    verb:string;
    url:string;
    controller:RequestHandler;
    middleware?:any;
}


export class Server{

    app:Express;
    port:Number;
    rootdir:string;

    constructor(rootdir:string){
        this.rootdir = rootdir;
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        this.port = 3000;
    }
    deployRoutes(){
        let directory = new Directory(`${this.rootdir}/routes`);
        let files = directory.getFiles();
        for (let index = 0; index < files.length; index++) {
            const element = files[index];
            import(`${this.rootdir}/routes/${element}`).then( ( imported ) => {
                imported.default.map( (r:route) => {
                    switch(r.verb.toLocaleLowerCase()){
                        case 'get':
                            this.app.get(r.url,r.middleware, r.controller)
                            break
                        case 'post':
                            this.app.post(r.url, r.middleware, r.controller)
                            break
                        case 'put':
                            this.app.put(r.url,r.middleware, r.controller)
                            break
                        case 'patch':
                            this.app.patch(r.url,r.middleware, r.controller)
                            break
                        case 'delete':
                            this.app.delete(r.url,r.middleware, r.controller)
                            break
                    }
                })
            })
        }
    }
    start(){
        this.app.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${this.port}`);
        });
    }
}