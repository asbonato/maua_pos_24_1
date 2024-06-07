import { Handler } from "./Handler";
import { File } from "./File";

export class AudioFileHandler implements Handler {
    private handler!: Handler;
    private handlerName: string;

    constructor(handlerName: string){
        this.handlerName = handlerName;
    }

    public setHandler(handler: Handler): void {
        this.handler = handler;
    }
    public process(file: File): void {
        if(file.getFileType() === 'audio'){
            console.log('Process and saving audio file... by '+
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