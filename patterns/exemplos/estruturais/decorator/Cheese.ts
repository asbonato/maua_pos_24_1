import { Pizza } from "./Pizza";
import { PizzaDecorator } from "./PizzaDecorator";

export class Cheese extends PizzaDecorator{
    private readonly pizza: Pizza;

    constructor(pizza: Pizza){
        super();
        this.pizza = pizza;
    }

    public getDesc(): string {
        return this.pizza.getDesc() + ', Cheese (20.72)';
    }

    public getPrice(): number {
        return this.pizza.getPrice() + 20.72;
    }
}