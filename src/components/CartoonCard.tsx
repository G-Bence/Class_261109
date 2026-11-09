import { useState } from 'react'
import type { CartoonType } from '../types/cartoonInterface'

export default function CartoonCard({ cartoon }: { cartoon: CartoonType }) {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={cartoon.id}>
                <div className="card h-100 overflow-hidden">
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
                        <p
                            className={`badge position-absolute ${new Date(cartoon.premier).getFullYear() < 2000 ? 'bg-warning' : new Date(cartoon.premier).getFullYear() >= 2000 && new Date(cartoon.premier).getFullYear() < 2010 ? 'bg-success' : 'bg-primary'}`}
                            style={{ top: '30px', right: '-30px', width: '140px', transform: 'rotate(45deg)' }}
                        >
                            {new Date(cartoon.premier).getFullYear() < 2000 ? 'Classic Cartoon' : new Date(cartoon.premier).getFullYear() >= 2000 && new Date(cartoon.premier).getFullYear() < 2010 ? 'Older Cartoon' : 'Modern Cartoon'}
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}