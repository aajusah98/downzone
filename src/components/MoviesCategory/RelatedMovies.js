import React from 'react'
import Card from '../MoviesCard/Card'
import useMoviesDetails from "../services/fetch-movies";


const RelatedMovies = ({ id }) => {
    const { loading, moviesDetail, error } = useMoviesDetails(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`);
    const relatedMovies = moviesDetail?.data?.movies;

    return (
        <>
            <div className="action-movie-wrap" >
                {loading ? <p className="Loading">Loading.......</p> : error ? <p className='error'>{error}</p> : <>
                    <div className="related-movies">
                        {relatedMovies?.map((item) => {
                            return <Card key={item.id} id={item.id} rating={item?.rating} title={item?.title} image={item?.medium_cover_image} />
                        })}
                    </div>
                </>
                }
            </div>
        </>
    )
}

export default RelatedMovies
