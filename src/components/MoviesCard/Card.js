import React from 'react'
import './card.css'

const Card = ({ title, image, rating }) => {
    return (
        <div>
            <div className="card">
                <img src={image} alt="Avatar" />
                <div className="container">
                    <h4 className="movie-name">{title}</h4>
                    <p className='rating'>{rating}</p>
                    <p className="likes">Likes </p>
                    <button className="add-watch-list">add to watch list</button>
                    <button className="add-watched">mark movie as watched</button>
                </div>
            </div>
        </div>
    )
}

export default Card
