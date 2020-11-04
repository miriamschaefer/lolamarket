import React, {useState, useEffect} from 'react';
import  { getToken, getShops, getCategories } from '../services/Api';
import Menu from './Menu'
import MenuHeader from './MenuHeader'
import Loader from './Loader'
import Store from './Store'



const App = (props) => {

const store_id = 1;
const postalCode = 28012;

const [token, setToken] = useState('');
const [shops, setShops] = useState([]);
const [categories, setCategories] = useState([]);


useEffect(() => {
  if (token) {
    getShops(token, postalCode).then((shops) => setShops(shops))
    getCategories(token, postalCode, store_id).then((categories) => setCategories(categories.categories))
  } else {
    getToken().then((data) => {
      setToken(data.token)
    })
  }
}, [token, postalCode]);


if(categories.length === 0) {

  return <Loader />

} else {


return (

<div className="App">
  <nav className="App__menu">
    <MenuHeader shops={shops} store_id={store_id} postalCode={postalCode}/>

    <Menu
    shops={shops}
    categories={categories}
    token={token}
    postalCode={postalCode}
    store_id={store_id}
    />
    </nav>

<React.Fragment>
  
    <Store />

  </React.Fragment>
</div>
)
}
}


export default App;