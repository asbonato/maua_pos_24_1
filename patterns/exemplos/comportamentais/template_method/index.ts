import { ConnectionTemplate } from "./ConnectionTemplate";
import { MySqlCSVCon } from "./MySqlCSVCon";
import { OracleTxtCon } from "./OracleTxtCon";

console.log('For MySQL...');
let template: ConnectionTemplate = new MySqlCSVCon();
template.run();

console.log('For Oracle...');
template = new OracleTxtCon();
template.run();