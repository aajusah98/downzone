import React, { useRef } from 'react'
import Card from '../MoviesCard/Card'
import useMoviesDetails from "../services/fetch-movies";
import './actionMovies.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useHistory } from 'react-router';


function sideScroll(element, speed, distance, step) {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
        element.scrollLeft += step;
        scrollAmount += Math.abs(step);
        if (scrollAmount >= distance) {
            clearInterval(slideTimer);
        }
    }, speed);
}



const ThrillerMovies = () => {

    const allDataRef = useRef(null);
    const { loading, moviesDetail, error } = useMoviesDetails('https://yts.mx/api/v2/list_movies.json/?genre=thriller&&limit=10');
    const thrillerMovies = moviesDetail?.data?.movies;

    const history = useHistory();
    function seemoreButton() {
        history.push('/Thriller');
    }

    return (
        <>
            <div className="action-movie-wrap" >
                {
                    loading ? <p className="Loading">Loading.......</p> : error ? <p className='error'>{error}</p> : <>
                        <p className="action-cat">Thriller
                            <button className="seeMorebtn" onClick={seemoreButton} style={{ color: 'white', fontSize: '20px' }}>See More</button>
                        </p>
                        <FaArrowAltCircleLeft className='left-arrow-category' onClick={() => { sideScroll(allDataRef.current, 100, 350, -80); }} />
                        <div className="action-category" ref={allDataRef}>

                            {thrillerMovies?.map((item) => {
                                return <Card key={item.id} id={item.id} rating={item?.rating} title={item?.title} image={item?.medium_cover_image} />
                            })}
                            <FaArrowAltCircleRight className='right-arrow-category' onClick={() => { sideScroll(allDataRef.current, 100, 350, 80); }} />

                        </div>
                    </>
                }

            </div>



        </>
    )
}

export default ThrillerMovies
