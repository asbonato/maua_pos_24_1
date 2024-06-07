import { Pizza } from "./Pizza";

export abstract class PizzaDecorator implements Pizza{
    public getDesc(): string {
        return "Toppings";
    }

    public abstract getPrice(): number;
}