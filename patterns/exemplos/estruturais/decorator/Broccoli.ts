import { Pizza } from "./Pizza";
import { PizzaDecorator } from "./PizzaDecorator";

export class Broccoli extends PizzaDecorator{
    private readonly pizza: Pizza;

    constructor(pizza: Pizza){
        super();
        this.pizza = pizza;
    }

    public getDesc(): string {
        return this.pizza.getDesc() + ', Broccoli (9.25)';
    }

    public getPrice(): number {
        return this.pizza.getPrice() + 9.25;
    }
}