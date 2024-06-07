import { Pizza } from "./Pizza";
import { PizzaDecorator } from "./PizzaDecorator";

export class RomaTomatoes extends PizzaDecorator{
    private readonly pizza: Pizza;

    constructor(pizza: Pizza){
        super();
        this.pizza = pizza;
    }

    public getDesc(): string {
        return this.pizza.getDesc() + ', RomaTomatoes (5.20)';
    }

    public getPrice(): number {
        return this.pizza.getPrice() + 5.20;
    }
}