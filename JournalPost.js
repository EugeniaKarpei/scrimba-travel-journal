import React from "react"

export default function JournalPost(props){
    const post = props.post
    
    return (
        <div className="travel-post">
                <img className="location-img" src={post.imageUrl}/>
                <div className="travel-info-box">
                    <div className="location">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="location-name">{post.location}</p>
                        <a className="google-map-link" href={post.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className="title">{post.title}</h1>
                    <p className="dates">{`${post.startDate} - ${post.endDate}`}</p>
                    <p className="info">{post.description}</p>
                </div>
        </div>  
    )
}