import React from 'react'
import Card from '../components/MoviesCard/Card'
import useMoviesDetails from "../components/services/fetch-movies";

const Drama = () => {
    const { loading, moviesDetail, error } = useMoviesDetails('?genre=drama');
    const dramaMovies = moviesDetail?.data?.movies;

    return (
        <>
            {
                loading ? <p className="Loading">Loading.......</p> : error ? <p className='error'>{error}</p> : <>
                    <p className="action-cat">Drama</p>
                    <div className="sec__one">

                        {dramaMovies?.map((item) => {
                            return <Card key={item.id} rating={item?.rating} title={item?.title} image={item?.medium_cover_image} />
                        })}

                    </div>
                </>
            }

        </>
    )
}

export default Drama