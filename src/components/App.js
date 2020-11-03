import React, {useState, useEffect} from 'react';
import  { getToken, getShops, getCategories } from '../services/Api';
import Menu from './Menu'
import MenuHeader from './MenuHeader'
import Loader from './Loader'



const App = () => {

const store_id = 50;
const postalCode = 28010;
// let category_id = 133;

const [token, setToken] = useState('');
const [shops, setShops] = useState([]);
const [categories, setCategories] = useState([]);
// const [products, setProducts] = useState([]);


console.log(shops);


useEffect(() => {
  if (token) {
    getShops(token, postalCode).then((shops) => setShops(shops))
    getCategories(token, postalCode, store_id).then((categories) => setCategories(categories.categories))
    // getProducts(token, postalCode, store_id, category_id).then((products) => setProducts(products) )
  } else {
    getToken().then((data) => {
      setToken(data.token)
    })
  }
}, [token, postalCode]);


console.log(categories);


if(categories.length === 0) {

  return <Loader />

} else {


return (

<div className="App">
  <aside className="App__menu">
    <MenuHeader shops={shops} store_id={store_id} postalCode={postalCode}/>

    <Menu
    shops={shops}
    categories={categories}
    token={token}
    postalCode={postalCode}
    store_id={store_id}
    />
    </aside>
</div>
)
}
}


export default App;