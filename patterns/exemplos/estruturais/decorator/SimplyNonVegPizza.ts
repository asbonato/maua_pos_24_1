import { Pizza } from "./Pizza";

export class SimplyNonVegPizza implements Pizza{
    getDesc(): string {
        return 'SimplyNonVegPizza (350)';
    }
    getPrice(): number {
        return 350;
    }
}