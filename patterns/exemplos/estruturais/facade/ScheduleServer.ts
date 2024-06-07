export class ScheduleServer{
    public startBooting(): void {
        console.log('Start booting...');
    }

    public readSystemConfigFile(): void {
        console.log('Reading system configuration file...');
    }

    public init(): void {
        console.log('Initializing...');
    }

    public initializeContext(): void {
        console.log('Initializing context...');
    }

    public initializeListeners(): void {
        console.log('Initializing listeners...');
    }

    public createSystemObjects(): void {
        console.log('Creating system objects...')
    }

    public releaseProcesses(): void {
        console.log('Releasing processes...');
    }

    public destroy(): void {
        console.log('Destroying...');
    }

    public destroySystemObjects(): void {
        console.log('Destroying system objects...');
    }

    public destroyListeners(): void {
        console.log('Destroying listeners...');
    }

    public destroyContext(): void {
        console.log('Destroying context...');
    }

    public shutdown(): void {
        console.log('Shutting down');
    }
}