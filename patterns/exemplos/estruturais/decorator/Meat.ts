import { Pizza } from "./Pizza";
import { PizzaDecorator } from "./PizzaDecorator";

export class Meat extends PizzaDecorator{
    private readonly pizza: Pizza;

    constructor(pizza: Pizza){
        super();
        this.pizza = pizza;
    }

    public getDesc(): string {
        return this.pizza.getDesc() + ', Meat (14.25)';
    }

    public getPrice(): number {
        return this.pizza.getPrice() + 14.25;
    }
}