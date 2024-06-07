import { Pizza } from "./Pizza";

export class SimplyVegPizza implements Pizza{
    getDesc(): string {
        return 'SimplyVegPizza (230)';
    }
    getPrice(): number {
        return 230;
    }
}