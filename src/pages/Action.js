import React from 'react'
import './action.css';
import Card from '../components/MoviesCard/Card'
import useMoviesDetails from "../components/services/fetch-movies";

const Action = () => {
    const { loading, moviesDetail, error } = useMoviesDetails('?genre=action');
    const actionMovies = moviesDetail?.data?.movies;

    return (
        <>
            {
                loading ? <p className="Loading">Loading.......</p> : error ? <p className='error'>{error}</p> : <>
                    <p className="action-cat">Action</p>
                    <div className="sec__one">

                        {actionMovies?.map((item) => {
                            return <Card key={item.id} rating={item?.rating} title={item?.title} image={item?.medium_cover_image} />
                        })}

                    </div>
                </>
            }

        </>
    )
}

export default Action