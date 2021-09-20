import React from 'react';
import './Section.css';
import bg from './bg.jpg';

function Section1() {
    return (
        <div>
            <div className="main-bg">
                <img src={bg} alt="meds"/>
                <div className="centered">
                    <div className="quote">
                        <h1 className="line1">The future</h1>
                        <h1 className="middle">of health</h1>
                        <h1 className="quote-end">- is clear.</h1>
                    </div>
                   <div className="btn-sect">
                       <button className="btn">Shop All</button>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Section1
