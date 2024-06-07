import { Cheese } from "./Cheese";
import { GreenOlives } from "./GreenOlives";
import { Ham } from "./Ham";
import { Meat } from "./Meat";
import { Pizza } from "./Pizza";
import { RomaTomatoes } from "./RomaTomatoes";
import { SimplyNonVegPizza } from "./SimplyNonVegPizza";
import { SimplyVegPizza } from "./SimplyVegPizza";
import { Spinach } from "./Spinach";

let pizza: Pizza = new SimplyVegPizza()

pizza = new RomaTomatoes(pizza);
pizza = new GreenOlives(pizza);
pizza = new Spinach(pizza);

console.log("Desc:", pizza.getDesc())
console.log("Price:", pizza.getPrice().toFixed(2));

pizza = new SimplyNonVegPizza()

pizza = new Meat(pizza);
pizza = new Cheese(pizza);
pizza = new Cheese(pizza);
pizza = new Ham(pizza);

console.log("Desc:", pizza.getDesc())
console.log("Price:", pizza.getPrice().toFixed(2));
