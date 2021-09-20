import React from 'react'
import './card.css'
import { AiFillStar } from 'react-icons/ai';
import { useHistory } from 'react-router';



const Card = ({ id, title, image, rating, remove }) => {

    const history = useHistory();

    function movieDetails() {
        history.push({ pathname: '/MoviesDetails', state: id });

    }

    const setMovieToWatchList = (dataToBeAdded) => {
        const data = JSON.parse(localStorage?.getItem('addToWatchList')) || [];
        if (data.length > 0) {
            const filteredData = data.find(item => item?.id === dataToBeAdded?.id);
            if (filteredData?.id !== dataToBeAdded?.id) {
                return localStorage.setItem('addToWatchList', JSON.stringify([...data, filteredData]))
            }
            return;
        }

        return localStorage.setItem('addToWatchList', JSON.stringify([...data, { ...dataToBeAdded }]))




    }

    const removeFromWatchList = (dataToBeAdded) => {
        const data = JSON.parse(localStorage?.getItem('addToWatchList')) || [];
        if (data.length > 0) {
            const filteredData = data.filter(item => item?.id !== dataToBeAdded?.id);

            localStorage.setItem('addToWatchList', JSON.stringify([...filteredData]));;
            return window.location.reload();

        }


    }

    return (
        <>
            <div className="card" style={{ backgroundImage: `url(${image})` }}>
                {/* <img src={image} alt="Avatar" /> */}
                <div className="container"  >
                    <h4 className="movie-name" onClick={movieDetails}>{title}</h4>
                    <div className="rating-wrap">
                        <span><AiFillStar className="icon-rating" /></span>
                        <p className="rating">{rating}/10</p>
                    </div>
                    <div className="btn-wrap">

                        {(!remove) && <button className="btn" onClick={() => setMovieToWatchList({ id, title, image, rating, remove: true })}>Add To Watch List</button>
                        }

                        {remove && <button className="btn" onClick={() => removeFromWatchList({ id })}>Remove From Watch List</button>
                        }
                        <button className="btn">Mark As Watched</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
