import { ScheduleServer } from "./ScheduleServer";
import { ScheduleServerFacade } from "./ScheduleServerFacade";

let scheduleServer: ScheduleServer = new ScheduleServer();
let facadeServer: ScheduleServerFacade = new ScheduleServerFacade(scheduleServer);

facadeServer.startServer();
console.log('............Start working............');
console.log('...........After work done...........');
facadeServer.stopServer();
