import React, {useState, useEffect} from 'react';
import '../stylesheets/App.scss';
import getInfo from '../services/Api';


const App = () => {

 const [token, setToken] = useState('')

useEffect(() => {
  getInfo().then((data) => {
   setToken({ data })
 });
}, [])


console.log(token);


return (
  <div className="App">
    Holi
  </div>
)


}

export default App;