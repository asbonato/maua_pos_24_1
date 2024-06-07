import { Observer } from "./Observer";
export interface Subject {
    subscribeObserver(observer: Observer): void;
    unSubscribeObserver(observer: Observer): void;
    notifyObservers(): void;
    subjectDetails(): string;
}