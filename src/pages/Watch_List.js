import React, { useEffect, useState, useMemo } from 'react'
import Card from '../components/MoviesCard/Card'
import useLocalStorage from '../components/Hooks/UseLocalStorage';


const Contact = () => {
    const [data, setData] = useLocalStorage('addToWatchList', []);

    const removeFromWatchList = (dataToBeAdded) => {
        const data = JSON.parse(localStorage?.getItem('addToWatchList')) || [];
        if (data.length > 0) {
            const filteredData = data?.filter(item => item?.id !== dataToBeAdded?.id);

            setData([...filteredData])

        }


    }



    return (
        <div className="sec__one">
            {
                data?.map(item => <Card id={item?.id} title={item?.title} image={item?.image} rating={item?.rating} remove={item?.remove}
                    removeFromWatchList={removeFromWatchList} />)
            }
        </div>
    )
}

export default Contact
