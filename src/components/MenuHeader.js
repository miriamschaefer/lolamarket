import React from 'react';
import Loader from './Loader'

const MenuHeader = (props) => {


const shops = props.shops;

let selectedStore = shops.find(shop => shop.id === props.store_id);

if (selectedStore === undefined) {
    return <Loader />
} else {



     return (
    <div className="App__menu-header" style={{backgroundColor: `rgb(${selectedStore.color})`}}>

    <div className="App__menu-header__img">
            <img src={selectedStore.icon} alt={selectedStore.name}/>
        </div>

    <div className="App__menu-header__data">
       
        
        <h1>{selectedStore.name}</h1>
        <p>Comprando en {props.postalCode}</p>
    </div>
        <div className="App__menu-header__nav">
           <a href="#" alt="Cambiar de tienda">Cambiar</a>
        </div>
    </div>
    )

     

// return 'holi';
     }

}

export default MenuHeader;