import React from 'react';
import Card from './card';

function Order(){
    return(
        <div>
            <h1>Choose from these items</h1>
            <Card img="/img/ginaling.jpeg" item="Ginaling" price="Php 25.00"/>
            <Card img="/img/rice.jpg" item="Rice" price="Php 10.00"/> 
            <Card img="/img/sisig.jpg" item="Pork Sisig" price="Php 30.00"/>  
            {/* get item from database and put it here */}
        </div>
    );
}

export default Order;