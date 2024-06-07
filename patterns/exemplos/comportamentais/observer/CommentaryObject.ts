import { Commentary } from "./Commentary";
import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class CommentaryObject implements Subject, Commentary {
    private observers: Observer[];
    private desc!: string;
    private details: string;

    constructor(observers: Observer[], subjectDetails: string){
        this.observers = observers;
        this.details = subjectDetails;
    }
    subscribeObserver(observer: Observer): void {
        this.observers = [...this.observers, observer];
    }
    unSubscribeObserver(observer: Observer): void {
        this.observers.splice(this.observers.indexOf(observer));
    }
    notifyObservers(): void {
        console.log('');
        this.observers.forEach(observer => {
            observer.update(this.desc);
        });
    }
    subjectDetails(): string {
        return this.details;
    }
    setDesc(desc: string): void {
        this.desc = desc;
        this.notifyObservers();
    }
}