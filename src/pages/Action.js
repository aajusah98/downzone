import React from 'react'
import './action.css';
import Card from '../components/MoviesCard/Card'
import useMoviesDetails from "../components/services/fetch-movies";
import useLocalStorage from '../components/Hooks/UseLocalStorage';


const Action = () => {
    const [data, setData] = useLocalStorage('addToWatchList', []);

    const setMovieToWatchList = (dataToBeAdded) => {
        const data = JSON.parse(localStorage?.getItem('addToWatchList')) || [];

        const filteredData = data.some(item => item?.id === dataToBeAdded?.id);

        if (filteredData) {
            return setData([...data, filteredData]);
        }
        return setData([...data, { ...dataToBeAdded }]);




    }
    const { loading, moviesDetail, error } = useMoviesDetails('https://yts.mx/api/v2/list_movies.json/?genre=action');
    const actionMovies = moviesDetail?.data?.movies;
    return (
        <>
            {
                loading ? <p className="Loading">Loading.......</p> : error ? <p className='error'>{error}</p> : <>
                    <p className="action-cat">Action</p>
                    <div className="sec__one">
                        {actionMovies?.map((item) => {
                            return <Card setMovieToWatchList={setMovieToWatchList} key={item.id} id={item.id} rating={item?.rating} title={item?.title} image={item?.medium_cover_image} />
                        })}

                    </div>
                </>
            }

        </>
    )
}

export default Action