import React from 'react'
import Card from '../components/MoviesCard/Card'
import useMoviesDetails from "../components/services/fetch-movies";

const Thriller = () => {
    const { loading, moviesDetail, error } = useMoviesDetails('https://yts.mx/api/v2/list_movies.json/?genre=thriller');
    const thrillerMovies = moviesDetail?.data?.movies;

    return (
        <>
            {
                loading ? <p className="Loading">Loading.......</p> : error ? <p className='error'>{error}</p> : <>
                    <p className="action-cat">Thriller</p>
                    <div className="sec__one">

                        {thrillerMovies?.map((item) => {
                            return <Card key={item.id} id={item.id} rating={item?.rating} title={item?.title} image={item?.medium_cover_image} />
                        })}

                    </div>
                </>
            }

        </>
    )
}

export default Thriller
