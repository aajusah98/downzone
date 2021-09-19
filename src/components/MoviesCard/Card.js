import React from 'react'
import './card.css'
import { AiFillStar } from 'react-icons/ai';



const Card = ({ title, image, rating }) => {
    return (
        <>
            <div className="card" style={{ backgroundImage: `url(${image})` }}>
                {/* <img src={image} alt="Avatar" /> */}
                <div className="container"  >
                    <h4 className="movie-name">{title}</h4>
                    <div className="rating-wrap">
                        <span><AiFillStar className="icon-rating" /></span>
                        <p className="rating">{rating}/10</p>
                    </div>
                    <div className="btn-wrap">
                        <button className="btn">add List</button>
                        <button className="btn">Add Watched</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
