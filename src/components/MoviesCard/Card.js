import React from 'react'
import './card.css'
import { AiFillStar } from 'react-icons/ai';
import { useHistory } from 'react-router';
import useLocalStorage from '../../components/Hooks/UseLocalStorage'



const Card = ({ id, title, image, rating, remove, removeFromWatchList }) => {
    const [data, setData] = useLocalStorage('addToWatchList', []);
    const [markedData, setMarkedData] = useLocalStorage('addToMarkData', []);


    console.log("remove", remove)
    const history = useHistory();

    function movieDetails() {
        history.push({ pathname: '/MoviesDetails', state: id });

    }
    const removeFromWatchListWhileMarking = (dataToBeAdded) => {
        if (data.length > 0) {
            const filteredData = data?.filter(item => item?.id !== dataToBeAdded?.id);

            setData([...filteredData])

        }
    }
    const isDataAdded = (dataToAdd) => {
        return data.some(item => item?.id === dataToAdd.id);
    }
    const setMovieToWatchList = (dataToBeAdded) => {
        const data = JSON.parse(localStorage?.getItem('addToWatchList')) || [];

        const filteredData = data.some(item => item?.id === dataToBeAdded?.id);

        if (filteredData) {
            return;
        }
        return setData([...data, { ...dataToBeAdded }]);

    }

    const markedList = (dataToBeAdded) => {
        if (remove === undefined) {

            removeFromWatchListWhileMarking(dataToBeAdded)
        } else {
            removeFromWatchList(dataToBeAdded)
        }


        const filteredData = markedData?.some(item => item?.id === dataToBeAdded?.id);

        if (filteredData) {
            return;
        }
        return setMarkedData([...markedData, { ...dataToBeAdded }]);
    }

    const getMarkedData = (id) => {
        return markedData?.some(item => item?.id === id);
    }

    const unMarkList = (id) => {
        const data = markedData?.filter(item => item?.id !== id.id);
        return setMarkedData([...data])
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

                        {!getMarkedData(id) && <>
                            {(!isDataAdded({ id }) || remove !== undefined && !remove) &&
                                <button className="btn"
                                    onClick={() => setMovieToWatchList({ id, title, image, rating, remove: true })}>
                                    Add To Watch List</button>
                            }

                            {(isDataAdded({ id }) && remove === undefined) &&
                                <button className="btn"
                                >
                                    Added To Watch List</button>
                            }

                            {remove && <button className="btn" onClick={() => removeFromWatchList({ id })}>Remove From Watch List</button>
                            }
                        </>}

                        {getMarkedData(id) ? <button className="btn" onClick={() => unMarkList({ id })} >UnMark As Watched</button> : <button className="btn" onClick={() => markedList({ id })}>Mark As Watched</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
