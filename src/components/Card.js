import React from "react"

function Card(props) {
    return (
        <section className="card">
            <img src={props.item.image} className="img" />
            <div>
                <div className="location">
                    <img src="./images/location-pin.png" className="marker" />
                    <span className="country" >{props.item.location}</span>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="title">{props.item.title}</h1>
                <p className="dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description">{props.item.description}</p>
            </div>
        </section>
        
    )
}

export default Card