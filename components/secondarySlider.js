import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../scss/components/secondarySlider.scss'
import 'swiper/css';
import {Pagination} from "swiper/modules";
import SlideComponent from "./SlideComponent";
import data from '../dataRestaurants/restaurants.json'

const SecondarySlider = ({title, index }) => {

    let [total, setTotal] = useState(0)

    const addTotal = (quantity) => {
        setTotal(total += 1)
    }

    const removeTotal = (quantity) => {
        setTotal(total -= 1)
    }

    return(
    <section className="secondary-slider">
        <h1>TOTAL : {total}</h1>
        <div className="title">
        <h2>{title}</h2>

            <a href="#">Tout afficher</a>
        </div>

        <Swiper
            spaceBetween={20}
            slidesPerView={4}
            modules={[Pagination]}
            pagination={{ clickable: true }}
        >
            {data.offerType[index].restaurants.map((restaurant, i) => (
                <SwiperSlide key={i}>
                    <SlideComponent
                        info={restaurant.infos}
                        image={restaurant.image}
                        name={restaurant.name}
                        rating={restaurant.rating}
                        deliveryPrice={restaurant.deliveryPrice}
                        deliveryTime={restaurant.deliveryTime}
                        onQuantityAdd={addTotal}
                        onQuantityRemove={removeTotal}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
)};

export default SecondarySlider;
