import { Handler } from "./Handler";
import { File } from "./File";

export class ExcelFileHandler implements Handler {
    private handler!: Handler;
    private handlerName: string;

    constructor(handlerName: string){
        this.handlerName = handlerName;
    }

    public setHandler(handler: Handler): void {
        this.handler = handler;
    }
    public process(file: File): void {
        if(file.getFileType() === 'excel'){
            console.log('Process and saving excel file... by '+
                this.handlerName);
        } else if (this.handler) {
            console.log(this.handlerName+' forwards request to '+
                this.handler.getHandlerName());
            this.handler.process(file);
        } else {
            console.log('File not supported');
        }
    }
    public getHandlerName(): string {
        return this.handlerName;
    }
}