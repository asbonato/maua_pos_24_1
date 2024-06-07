import { ScheduleServer } from "../ScheduleServer";

let scheduleServer: ScheduleServer = new ScheduleServer();

scheduleServer.startBooting();
scheduleServer.readSystemConfigFile();
scheduleServer.init();
scheduleServer.initializeContext();
scheduleServer.initializeListeners();
scheduleServer.createSystemObjects();

console.log('Start working...');
console.log('After work done...');