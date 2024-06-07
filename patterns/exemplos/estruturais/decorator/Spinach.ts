import { Pizza } from "./Pizza";
import { PizzaDecorator } from "./PizzaDecorator";

export class Spinach extends PizzaDecorator{
    private readonly pizza: Pizza;

    constructor(pizza: Pizza){
        super();
        this.pizza = pizza;
    }

    public getDesc(): string {
        return this.pizza.getDesc() + ', Spinach (7.92)';
    }

    public getPrice(): number {
        return this.pizza.getPrice() + 7.92;
    }
}