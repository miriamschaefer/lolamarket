import React, {useState, useEffect} from 'react';
import  { getToken, getShops, getCategories } from '../services/Api';
import Menu from './Menu'



const App = () => {

const store_id = 1;
let postalCode = 28010;

const [token, setToken] = useState('');
const [shops, setShops] = useState([]);
const [categories, setCategories] = useState([]);


// let category = categories.map((category) => category);


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


return (
  <div className="App">
Holi
<Menu 
shops={shops}
categories={categories}
token={token}
postalCode={postalCode}
store_id={store_id}
/>
  </div>
)


}

export default App;