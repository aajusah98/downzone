import React from 'react'
import ImageSlider from '../components/slider/ImageSlider';
import ActionMovie from '../components/MoviesCategory/ActionMovies'
// https://yts.mx/api/v2/list_movies.json?genre=action&&limit=10
import "./home.css"
const Home = () => {

    return (
        <div className="home-wrap">
            <ImageSlider />
            <ActionMovie />
            {/* <section className="crime-category">
                <p>Crime</p>
            </section>
            <section className="drama-category">
                <p>Drama</p>
            </section>
            <section className="thriller-category">
                <p>Thriller </p>
            </section> */}
        </div>
    )
}
export default Home