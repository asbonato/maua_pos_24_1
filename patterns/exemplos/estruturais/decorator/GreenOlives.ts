import { Pizza } from "./Pizza";
import { PizzaDecorator } from "./PizzaDecorator";

export class GreenOlives extends PizzaDecorator{
    private readonly pizza: Pizza;

    constructor(pizza: Pizza){
        super();
        this.pizza = pizza;
    }

    public getDesc(): string {
        return this.pizza.getDesc() + ', GreenOlives (5.47)';
    }

    public getPrice(): number {
        return this.pizza.getPrice() + 5.47;
    }
}