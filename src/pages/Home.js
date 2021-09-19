import React from 'react'
import ImageSlider from '../components/slider/ImageSlider';
import ActionMovie from '../components/MoviesCategory/ActionMovies'
import CrimeMovies from '../components/MoviesCategory/CrimeMovies'
import DramaMovies from '../components/MoviesCategory/DramaMovies'
import ThrillerMovies from '../components/MoviesCategory/ThrillerMovies'
// https://yts.mx/api/v2/list_movies.json?genre=action&&limit=10
import "./home.css"
const Home = () => {

    return (
        <div className="home-wrap">
            <ImageSlider />
            <ActionMovie />
            <CrimeMovies />
            <DramaMovies />
            <ThrillerMovies />
        </div>
    )
}
export default Home