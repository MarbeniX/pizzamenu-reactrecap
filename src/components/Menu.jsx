import Pizza from "./Pizza";
import { pizzaData } from "../data";

export default function Menu() {
    return (
        <main className="menu">
            <h2>Pizza menu</h2>
            <ul className="pizzas">
                {pizzaData.map((pizza) => (
                    <Pizza key={pizza.name} props={pizza} />
                ))}
            </ul>
        </main>
    );
}
