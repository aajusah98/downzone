import React from 'react'
import Card from '../components/MoviesCard/Card'

const Contact = () => {
    const data = JSON.parse(localStorage.getItem('addToWatchList'));


    return (
        <div className="sec__one">
            {
                data.map(item => <Card id={item.id} title={item.title} image={item.image} rating={item.rating} remove={item.remove} />)
            }
        </div>
    )
}

export default Contact
