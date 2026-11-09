import type { CartoonType } from '../types/cartoonInterface';
import CartoonCard from './CartoonCard';

export default function CartoonList({ cartoons }: { cartoons: CartoonType[] }) {
    return (
        <div className="row mx-auto">
            {cartoons.map((cartoon) => (
                <CartoonCard key={cartoon.id} cartoon={cartoon} />
            ))}
        </div>
    )
}