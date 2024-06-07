import { Pizza } from "./Pizza";
import { PizzaDecorator } from "./PizzaDecorator";

export class Ham extends PizzaDecorator{
    private readonly pizza: Pizza;

    constructor(pizza: Pizza){
        super();
        this.pizza = pizza;
    }

    public getDesc(): string {
        return this.pizza.getDesc() + ', Ham (18.12)';
    }

    public getPrice(): number {
        return this.pizza.getPrice() + 18.12;
    }
}