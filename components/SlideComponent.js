import React, {useState} from 'react';
import AddToCart from "./addToCart";
const SlideComponent = ({info, image, name, rating, deliveryPrice, deliveryTime, onQuantityAdd, onQuantityRemove}) => {

    const [Qte, setQte] = useState(0);

    const incrementQte = () => {
        setQte(Qte + 1);
        onQuantityAdd(Qte + 1);
    };

    const decrementQte = () => {
        if (Qte > 0) {
            setQte(Qte - 1);
            onQuantityRemove(Qte - 1);
        }
    };
    return(
        <div className="slide-component">
            <div className="img--inner">
                <div className="green-infos">{info}</div>
                <div className="like"></div>
                <div className="img" style={{
                    backgroundImage: `url(${image})`,
                }}></div>
            </div>
            <div className="swiper-body">
                <div className="wrapper-title">
                    <h4>{name}</h4>
                    {rating !== "" ? <span>{rating}</span> : undefined}
                </div>
                <p>Frais de livraisons: {deliveryPrice}€ <span>{deliveryTime}</span></p>
            </div>
            <div className="swiper-footer">
                <div className="add-to-cart">
                    <p>Quantité : {Qte} </p>
                    <div className="wrapper-cta">
                        {Qte !== 0 ? <div className="remove" onClick={decrementQte}> - </div> : null}
                        <div className="add" onClick={incrementQte}>+</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SlideComponent;