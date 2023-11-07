import logo from './logo.svg';
import './App.css';
import Header from "./components/partials/header";
import './scss/general.scss'
import './scss/buttons.scss'
import data from './dataRestaurants/restaurants.json'
import SecondarySlider from "./components/secondarySlider";
import {useState} from "react";

function App() {
    const [totalQte, setTotalQte] = useState(0)


    const updateTotal = () => {
        setTotalQte(totalQte + 1)
    }

    return (
        <div className="App">
            <Header total={totalQte} />
            <div className="main-content">
                {data.offerType.map((offer, index) => (
                    <SecondarySlider title={offer.title} index={index}/>
                ))}
            </div>
        </div>
    );
}
export default App;
