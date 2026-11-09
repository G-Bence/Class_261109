import type { CartoonType } from '../types/cartoonInterface'


export default function CartoonStatistics({ cartoons }: { cartoons: CartoonType[] }) {
    const totalCartoons = cartoons.length;
    const oldestPremier = cartoons.reduce((oldest, cartoon) => {
        const premierDate = new Date(cartoon.premier);
        return premierDate < oldest ? premierDate : oldest;
    }, new Date());

    const newestPremier = cartoons.reduce((newest, cartoon) => {
        const premierDate = new Date(cartoon.premier);
        return premierDate > newest ? premierDate : newest;
    }, new Date());

    return (
        <div className="row mx-3 bg-light border border-2 border-muted rounded-4 p-4 mt-4">
            <h2 className="h2 text-center text-dark mb-4">Cartoon Statistics</h2>
            <p>Total Cartoons: {totalCartoons}</p>
            <p>Oldest Premier: {oldestPremier.toDateString()}</p>
            <p>Newest Premier: {newestPremier.toDateString()}</p>
        </div>
    );
}