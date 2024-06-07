import { Pizza } from "./Pizza";
import { PizzaDecorator } from "./PizzaDecorator";

export class Chicken extends PizzaDecorator{
    private readonly pizza: Pizza;

    constructor(pizza: Pizza){
        super();
        this.pizza = pizza;
    }

    public getDesc(): string {
        return this.pizza.getDesc() + ', Chicken (12.75)';
    }

    public getPrice(): number {
        return this.pizza.getPrice() + 12.75;
    }
}