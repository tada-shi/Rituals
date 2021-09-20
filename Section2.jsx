import React from 'react';
import './Section.css';
import bg from './bg.jpg'

function Section2() {
    const data = [
        {
            id:1,
            info:"Shop Multivitamin",
            offer: ""
        },
        {
            id:2,
            info:"Shop Protein",
            offer: 'new'
        },
        {
            id:3,
            info:"Shop Pregnancy",
            offer: ''
        },
        {
            id:4,
            info:"Shop Bundles",
            offer: 'save $14'
        },
    ]
    return (
        <div className="slider">
            {data.map((datum) => {
                return(
                    <div key={datum.id}>
                    <div className="image">
                        <img src={bg} alt="" />
                    </div>
                    <p className="info">{datum.info}</p>
                    {datum.offer && <p className="offer">{datum.offer}</p>}
                    </div>
                )
            })}
        </div>
    )
}

export default Section2
