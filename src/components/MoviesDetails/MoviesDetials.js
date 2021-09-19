import React from 'react'
import './moviesDetaols.css';
import { useLocation } from 'react-router';
import { AiFillStar } from 'react-icons/ai';


// https://yts.mx/api/v2/list_movies.json/${condition}
const MoviesDetials = () => {

    const location = useLocation();
    const id = location.state;
    return (
        <>
            <section className="movie-details-wrap">
                <div className="movie-details-section-wrap">
                    <div className="justify-center-wrap font40-white-text movie-title">
                        <p>3 Idiot</p>
                    </div>

                    <div className="movie-rating-genre-wrap">
                        <div className="justify-center-wrap font40-white-text movie-rating ">
                            <span><AiFillStar className="icon-rating" /></span> <p>9/10</p>
                        </div>
                        <div className="justify-center-wrap font40-white-text movie-year">
                            <p>Year : 2017</p>
                        </div>

                        <div className="justify-center-wrap font40-white-text movie-genre">
                            <p>Genre:</p>
                            <div className="gener-name">
                                Action
                            </div>
                            <div className="gener-name">
                                Action
                            </div>
                            <div className="gener-name">
                                Action
                            </div>
                        </div>
                    </div>

                    <div className="justify-center-wrap font40-white-text movie-description">
                        <h2> About Movie </h2>
                        <p>HelloHelloHelloHelloHelloHelloHelloHelloHello
                            HelloHelloHelloHelloHelloHelloHelloHelloHelloHello
                            HelloHelloHelloHelloHello
                        </p>
                    </div>

                    <div className="add-btn-wrap-detaiils">
                        <button className="btn">add List</button>
                        <button className="btn">Add Watched</button>
                    </div>

                </div>

                <div className="movie-details-tariler-wrap">
                    <iframe width="100%" height="100%" className="iframe" src="https://www.youtube.com/embed/0mVbNp1ol_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="bottom-wrapper">
                <div className="download-quality-wrap">
                    <div className="justify-center-wrap font40-white-text download_name">
                        <p>Download : 3 Idio </p>
                    </div>

                    <div className="justify-center-wrap font40-white-text download_name">
                        <p>Quality : 1080p, Size:1.3gb</p>
                    </div>

                </div>

                <div className="download_link">
                    <p>Download Links</p>
                    <a href="#">Ajat</a>
                    <a href="#">Ajat</a>
                    <a href="#">Ajat</a>
                </div>
            </section>
        </>
    )
}

export default MoviesDetials
