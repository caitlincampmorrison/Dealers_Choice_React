import React from "react"

function FlowerDetails(props){
    return (
        <div className="flowerdetails">
            <img src={`../../public/images/${props.image}`}/>
            <h3>{props.name}</h3>
            <p>color: {props.color}</p>
            <small>cost: ${props.cost}</small>
        </div>
    )
}

export default FlowerDetails