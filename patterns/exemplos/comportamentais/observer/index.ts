import { CommentaryObject } from "./CommentaryObject";
import { Subject } from "./Subject";
import { Observer } from "./Observer";
import { SMSUsers } from "./SMSUsers";
import { Commentary } from "./Commentary";

let subject: Subject = new CommentaryObject([], 'Soccer Match [2014AUG24]');
let observer: Observer = new SMSUsers(subject, "Adam Warner [New York]");
observer.subscribe();
console.log('');

let observer2: Observer = new SMSUsers(subject, "Tim Ronney [London]");
observer2.subscribe();

let cObject: Commentary = <Commentary><unknown>subject;
cObject.setDesc('Welcome to live Soccer match');
cObject.setDesc('Current score 0-0');
console.log('');

observer2.unSubscribe();
console.log('');

cObject.setDesc("It's goal!!!");
cObject.setDesc('Current score 1-0');
console.log('');

let observer3: Observer = new SMSUsers(subject, "Marrie [Paris]");
observer3.subscribe();
console.log('');

cObject.setDesc("It's another goal!!!");
cObject.setDesc('Half-time score 2-0');