import "./PricingCardStyles.css" ;
import { Link } from "react-router-dom" ;
import React from "react";

const PricingCard = () => {
  return (
    <div  className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>-Basic-</h3>
                <span className="bar"></span>
                <p className="btc"> $100</p>
                <p>-3 Days</p>
                <p>-3 Pages</p>
                <p>-Featured</p>
                <p>- Pesponsive design -</p>
                <Link to="/Contact" className="btn"> 
                PURCHASE NOW 
                </Link>
            </div>
            <div className="card">
                <h3>-Premium-</h3>
                <span className="bar"></span>
                <p className="btc"> $300</p>
                <p>-5 Days</p>
                <p>-8 Pages</p>
                <p>- Featured</p>
                <p>- Pesponsive design -</p>
                <Link to="/Contact" className="btn"> 
                PURCHASE NOW 
                </Link>
            </div>
            <div className="card">
                <h3>-Advance -</h3>
                <span className="bar"></span>
                <p className="btc"> $500</p>
                <p>-8 Days</p>
                <p>-10 Pages</p>
                <p>- Featured</p>
                <p>- Pesponsive design -</p>
                <Link to="/Contact" className="btn"> 
                PURCHASE NOW 
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard ;