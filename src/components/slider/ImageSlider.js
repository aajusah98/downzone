import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import useMoviesDetails from "../services/fetch-movies";
import "./slider.css";


const ImageSlider = () => {

    const [current, setCurrent] = useState(0);
    const { loading, moviesDetail, error } = useMoviesDetails('https://yts.mx/api/v2/list_movies.json/?sort=desc&limit=4');
    const SliderData = moviesDetail?.data?.movies;
    const length = SliderData?.length || 0;
    const slides = SliderData;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            {loading ? <p className="Loading">Loading.......</p> : error ? <p className='error'>{error}</p> : <>
                <p className="action-cat">UpComing Movies</p>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                {SliderData.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide.large_cover_image} alt='travel' className='image' />
                            )}
                        </div>
                    );
                })}
            </>}
        </section>
    );
};

export default ImageSlider;