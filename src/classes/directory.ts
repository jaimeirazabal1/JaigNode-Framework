
import fs from 'fs';

export class Directory{

    folder:string;
    files:string[];

    constructor(url:string){
        this.folder = url;
        this.files = [];
        this.scan();
    }

    scan(){
        this.files = fs.readdirSync(this.folder)
    }

    getFiles(){
        return this.files;
    }
}