export default function ShoppingItem({item}) {
    return(
        <li className="item">
            <label className="item-left">
                <input
                className="item-checkbox"
                type="checkbox"
                defaultChecked={item.krysset}
                />
            </label>
            {item.vare}

            <label>
                <input
                className="item-quantity"
                type="number"
                min="1"
                defaultValue={item.antall}
                />
            </label>
        </li>
    )
}