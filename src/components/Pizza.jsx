export default function Pizza({ props }) {
    return (
        <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
            <img src={props.photoName} alt={props.photoName} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.soldOut ? "Sold out" : props.price + "€"}</span>
            </div>
        </li>
    );
}
