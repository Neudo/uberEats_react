// import React, { useState } from 'react';
// import '../scss/components/addToCart.scss';
//
// const AddToCart = ({onIncrementQte}) => {
//     const [Qte, setQte] = useState(0);
//     const incrementQte = () => {
//         setQte(Qte + 1);
//         onIncrementQte();
//
//     };
//     const decrementQte = () => {
//         if (Qte > 0) {
//             setQte(Qte - 1);
//         }
//     };
//
//     return (
//         <div className="add-to-cart">
//             <p>Quantité : {Qte} </p>
//             <div className="wrapper-cta">
//                 {Qte !== 0 ? <div className="remove" onClick={decrementQte}> - </div> : null}
//                 <div className="add" onClick={incrementQte}>+</div>
//             </div>
//         </div>
//     );
// }
//
// export default AddToCart;
