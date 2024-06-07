import { Pizza } from "./Pizza";
import { PizzaDecorator } from "./PizzaDecorator";

export class RedOnions extends PizzaDecorator{
    private readonly pizza: Pizza;

    constructor(pizza: Pizza){
        super();
        this.pizza = pizza;
    }

    public getDesc(): string {
        return this.pizza.getDesc() + ', RedOnions (3.75)';
    }

    public getPrice(): number {
        return this.pizza.getPrice() + 3.75;
    }
}