import { ConnectionTemplate } from "./ConnectionTemplate";

export class OracleTxtCon extends ConnectionTemplate {
    public setDBDriver(): void {
        console.log('Setting Oracle DB drivers...');
    }
    public setCredentials(): void {
        console.log('Setting credentials for Oracle DB...');
    }
    public setData(): void {
        console.log('Setting up data from txt file...');
    }
}