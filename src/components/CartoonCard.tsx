import { useState } from 'react'
import type { CartoonType } from '../types/cartoonInterface'

export default function CartoonCard({ cartoon }: { cartoon: CartoonType }) {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    return (
        <>
            <div className="col-4 mb-4" key={cartoon.id}>
                <div className="card h-100">
                    <div className="card-body">
                        <h2 className="card-title">{cartoon.cim}</h2>
                        <p className="card-text">Studio: {cartoon.studio}</p>
                        <p className="card-text">Megjelenés éve: {cartoon.megjelenesEve}</p>
                        <div className="row d-flex align-items-center">
                            <div className="col-6">
                                <p className={`card-text ${isDetailsVisible ? 'd-block' : 'd-none'}`}>{cartoon.premier}</p>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-primary w-100" onClick={() => setIsDetailsVisible(!isDetailsVisible)}>
                                    {isDetailsVisible ? 'Hide' : 'Show'} Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}