import React, {useState, useEffect} from 'react'

//https://finnhub.io/api/v1/news?category=general&token=c0u4t6v48v6qqphtsng0
function Table({name,price, symbol ,marketcap,volume,image,priceChange}) {
    
    return (
        <div>
            <div className = "this">
                <img src = {image} alt = "cry" height = {30} className = "img"/>
                <h3>{name}</h3>
                
            </div>
            <h5>{price} USD</h5>
            
        </div>
    )
}
export default Table
