import { Pizza } from "./Pizza";
import { PizzaDecorator } from "./PizzaDecorator";

export class FetaCheese extends PizzaDecorator{
    private readonly pizza: Pizza;

    constructor(pizza: Pizza){
        super();
        this.pizza = pizza;
    }

    public getDesc(): string {
        return this.pizza.getDesc() + ', FetaCheese (25.88)';
    }

    public getPrice(): number {
        return this.pizza.getPrice() + 25.88;
    }
}