import React from 'react';

const MenuHeader = (props) => {


const shops = props.shops;


const selectedStore = shops.find(shop => shop.id === props.store_id);
console.log(selectedStore);



     return (
    <div className="menu-header holi"style={{backgroundColor: `rgb(${selectedStore.color})`}}>
    <div className="menu-header__data">
        <div className="menu-header__data__img">
            <img src={selectedStore.icon} alt={selectedStore.name}/>
        </div>
        
        <h1>{selectedStore.name}</h1>
        <h2>Comprando en {props.postalCode}</h2>
    </div>
        <div className="menu-header__nav">
           <a href="#" alt="Cambiar de tienda">Cambiar</a>
        </div>
    </div>
    )

     

// return 'holi';

}

export default MenuHeader;