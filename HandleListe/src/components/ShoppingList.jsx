import ShoppingItem from './ShoppingItem';

export default function ShoppingList({liste}) {
    return (
        <ul>
            {liste.map((item) => (
            <ShoppingItem key={item.id} item={item} />
            ))}
        </ul>
    )
}