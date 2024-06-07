export abstract class ConnectionTemplate {
    public run(): void {
        this.setDBDriver();
        this.setCredentials();
        this.connect();
        this.preparedStatement();
        this.setData();
        this.insert();
        this.close();
        this.destroy();
    }

    public abstract setDBDriver(): void;

    public abstract setCredentials(): void;

    public connect(): void {
        console.log('Setting connection...');
    }

    public preparedStatement(): void {
        console.log('Preparing insert statement...');
    }

    public abstract setData(): void;

    public insert(): void {
        console.log('Insert data...');
    }

    public close(): void {
        console.log('Closing connections...');
    }

    public destroy(): void {
        console.log('Destroying connection objects...');
    }
}