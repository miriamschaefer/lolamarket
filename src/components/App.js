import React, {useState, useEffect} from 'react';
import '../stylesheets/App.scss';
import getToken from '../services/Api';



const App = (props) => {


const [token, setToken] = useState('')

useEffect(() => {
  getToken().then((data) => {
   setToken({ data })
 });
}, [])


if (token) {
  console.log(token.data.token)
}


return (
  <div className="App">
    Holi 
  </div>
)


}

export default App;