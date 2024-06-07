import { ScheduleServer } from "../ScheduleServer";

let scheduleServer: ScheduleServer = new ScheduleServer();

scheduleServer.releaseProcesses();
scheduleServer.destroy();
scheduleServer.destroySystemObjects();
scheduleServer.destroyListeners();
scheduleServer.destroyContext();
scheduleServer.shutdown();
