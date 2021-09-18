import React, { useRef } from 'react'
import Card from '../MoviesCard/Card'
import useMoviesDetails from "../services/fetch-movies";
import './actionMovies.css'

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

const ActionMovies = () => {

    const allDataRef = useRef(null);
    const { loading, moviesDetail, error } = useMoviesDetails('?genre=action&&limit=10');
    const actionMovies = moviesDetail?.data?.movies;
    const length = actionMovies?.length || 0;
    console.log(actionMovies);

    // const movieData=[
    //     'movie_name':title
    //     'image':medium_cover_image
    //     'rating':rating
    //     'likes':


    // ]
    return (
        <>

            <p>Action</p>
            {/* <div style={{ display: 'flex', alignItems: 'center' }}> */}

            <div style={{ position: 'relative' }} >
                <button style={{ position: 'absolute', top: '45%', zIndex: 100, left: 0 }}
                    onClick={() => {
                        sideScroll(
                            allDataRef.current,
                            100,
                            350,
                            -80
                        );
                    }}>Left </button>
                <div className="action-category" ref={allDataRef}>

                    {actionMovies?.map((item) => {
                        return <Card key={item.id} rating={item?.rating} title={item?.title} image={item?.medium_cover_image} />
                    })}
                    {/* {['Raju', "Kaju", "Maju", "Taju", "Mist", "List", "Pist", "tist", 'Raju', "Kaju", "Maju", "Taju", "Mist", "List", "Pist", "tist"].map(item => {
                        return <div>
                            <div className="card">
                                <img alt="Avatar" />
                                <div className="container">
                                    <h4 className="movie-name">{item}</h4>
                                    <p className='rating'>{item}</p>
                                    <p className="likes">Likes </p>
                                    <button className="add-watch-list">add to watch list</button>
                                    <button className="add-watched">mark movie as watched</button>
                                </div>
                            </div>
                        </div>
                    })} */}

                </div>
                <button style={{ position: 'absolute', top: ' 45%', zIndex: 100, right: 0 }} onClick={() => {
                    sideScroll(
                        allDataRef.current,
                        100,
                        350,
                        80
                    );
                }}>Right </button>

            </div>


        </>
    )
}

export default ActionMovies
