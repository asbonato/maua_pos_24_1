import { ScheduleServer } from "./ScheduleServer";

export class ScheduleServerFacade {
    private readonly scheduleServer: ScheduleServer;

    constructor(scheduleServer: ScheduleServer){
        this.scheduleServer = scheduleServer;
    }

    public startServer(): void {
        this.scheduleServer.startBooting();
        this.scheduleServer.readSystemConfigFile();
        this.scheduleServer.init();
        this.scheduleServer.initializeContext();
        this.scheduleServer.initializeListeners();
        this.scheduleServer.createSystemObjects();
    }

    public stopServer(): void {
        this.scheduleServer.releaseProcesses();
        this.scheduleServer.destroy();
        this.scheduleServer.destroySystemObjects();
        this.scheduleServer.destroyListeners();
        this.scheduleServer.destroyContext();
        this.scheduleServer.shutdown();
    }
}