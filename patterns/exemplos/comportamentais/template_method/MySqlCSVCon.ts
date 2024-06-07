import { ConnectionTemplate } from "./ConnectionTemplate";

export class MySqlCSVCon extends ConnectionTemplate {
    public setDBDriver(): void {
        console.log('Setting MySQL DB drivers...');
    }
    public setCredentials(): void {
        console.log('Setting credentials for MySQL DB...');
    }
    public setData(): void {
        console.log('Setting up data from csv file...');
    }
}