import React from 'react';

const MenuHeader = (props) => {

// console.log(props)

const shops = props.shops;

// async function renderHeader() {
//      const selectedStore = shops.find(shop => shop.id === props.store_id);

//      return (
//         <div>
//             {selectedStore.name}
//             <img src={selectedStore.icon} alt={selectedStore.name}/>
//         </div>
//     )
// }

// renderHeader();



const selectedStore = shops.find(shop => shop.id === props.store_id);
console.log(selectedStore);



     return (
        <div style={{backgroundColor: `rgb(${selectedStore.color})`}}>
            <img src={selectedStore.icon} alt={selectedStore.name}/><br/>
            <span>Comprando en {props.postalCode}</span>
            
            <h1>{selectedStore.name}</h1>
            
        </div>
    )

     

// return 'holi';

}

export default MenuHeader;