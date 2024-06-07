import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class SMSUsers implements Observer {
    private readonly subject: Subject;
    private desc!: string;
    private userInfo: string;

    constructor(subject: Subject, userInfo: string){
        if (!subject){
            throw new Error("No Publisher found.");
        }
        this.subject = subject;
        this.userInfo = userInfo;
    }
    update(desc: string): void {
        this.desc = desc;
        this.display();
    }
    subscribe(): void {
        console.log('Subscribing '+this.userInfo+' to '+
            this.subject.subjectDetails()+'...');
        this.subject.subscribeObserver(this);
        console.log('Subscribe successfully.');
    }
    unSubscribe(): void {
        console.log('Unsubscribing '+this.userInfo+' to '+
            this.subject.subjectDetails()+'...');
        this.subject.unSubscribeObserver(this);
        console.log('Unsubscribe successfully.');
    }
    display(): void {
        console.log('['+this.userInfo+']: '+this.desc);
    }
}