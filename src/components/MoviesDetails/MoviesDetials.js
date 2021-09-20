import React from 'react'
import './moviesDetaols.css';
import { useLocation } from 'react-router';
import { AiFillStar } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { AiOutlineDownload } from 'react-icons/ai';
import useMoviesDetails from "../services/fetch-movies";
import RelatedMovies from '../MoviesCategory/RelatedMovies';

const MoviesDetials = () => {

    const location = useLocation();
    const id = location.state;
    const { loading, moviesDetail, error } = useMoviesDetails(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const movieDetails = moviesDetail?.data?.movie;
    console.log(movieDetails);

    return (
        <>
            {
                loading ? <p className="Loading">Loading.......</p> : error ? <p className='error'>{error}</p> : <>
                    <section className="movie-details-wrap">
                        <div className="movie-details-section-wrap">
                            <div className="justify-center-wrap font40-white-text movie-title">
                                <p>{movieDetails?.title}</p>
                            </div>

                            <div className="movie-rating-genre-wrap">
                                <div className="justify-center-wrap font40-white-text movie-rating ">
                                    <span><AiFillStar className="icon-rating" /></span> <p>{movieDetails?.rating}/10</p>

                                    <div className="justify-center-wrap font40-white-text movie-rating ">
                                        <span><AiFillLike className="icon-rating" /></span> <p>{movieDetails?.like_count}</p>
                                    </div>

                                    <div className="justify-center-wrap font40-white-text movie-rating ">
                                        <span><AiOutlineDownload className="icon-rating" /></span> <p>{movieDetails?.download_count}</p>
                                    </div>
                                </div>

                                <div className="justify-center-wrap font40-white-text movie-year">
                                    <p>Year : {movieDetails?.year}</p>
                                </div>

                                <div className="justify-center-wrap font40-white-text movie-genre">
                                    <p>Genre:</p>

                                    {movieDetails?.genres?.map((item) => {
                                        return <div key={item} className="gener-name"> {item}</div>
                                    })}
                                </div>
                            </div>

                            <div className="justify-center-wrap font40-white-text movie-description">
                                <h2> About Movie </h2>
                                <p>{movieDetails?.description_full}</p>
                            </div>
                        </div>

                        <div className="movie-details-tariler-wrap">
                            <iframe width="100%" height="100%" className="iframe" src={`https://www.youtube.com/embed/${movieDetails?.yt_trailer_code}`} title="YouTube video player"></iframe>
                        </div>
                    </section>

                    <section className="bottom-wrapper">
                        <div className="download_link">
                            <p>Download {movieDetails?.title}</p>
                            {movieDetails?.torrents?.map((links) => {
                                return <div key={links} className="justify-center-wrap font40-white-text download_name">
                                    <p>Quality : {links?.quality}, Size:{links?.size}</p>
                                    <a href={links.url}>{links.url}</a>
                                </div>
                            })}
                        </div>
                        <p className="suggestion">You May Also Like</p>
                        <RelatedMovies id={id} />
                    </section>
                </>
            }

        </>
    )
}

export default MoviesDetials
