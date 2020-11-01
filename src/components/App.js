import React, {useState, useEffect} from 'react';
import '../stylesheets/App.scss';
import  { getToken, getShops, getCategories } from '../services/Api';



const App = (props) => {

const store_id = 1;
let postalCode = 28010;

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

console.log(token);
console.log(shops);
console.log(categories);


return (
  <div className="App">
Holi
  </div>
)


}

export default App;