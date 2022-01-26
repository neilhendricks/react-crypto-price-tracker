import React from "react"

function CoinCardComponent({name, price, icon}) {
    return (
        <div className="coin">
            <h1>Name:{name}</h1>
            <img src={icon} />
            <h2>Price: {price} </h2>
        </div>
    )
}

export default CoinCardComponent;