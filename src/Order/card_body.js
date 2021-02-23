import React from 'react';
import { Link } from 'react-router-dom';

function CardBody({ item, price }) {
    return (
        <div className="card-body">

            <h5 class="card-title">{item}</h5>
            <p class="card-text">{price}</p>
            <Link to='/order_form' className="btn btn-primary">Order Now</Link>
        </div>
    );
}

export default CardBody;