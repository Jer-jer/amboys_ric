import React from 'react';
import CardImage from './img';
import CardBody from './card_body';

function Card({img, item, price}){
    return(
        <div className="card" style={{width: '18rem'}}>
            <CardImage src={img}/>
            <CardBody item={item} price={price}/>
        </div>
    );
}
export default Card;