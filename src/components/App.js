import React, {useState, useEffect} from 'react';
import '../stylesheets/App.scss';
import getData from '../services/Api';



const App = (props) => {

const initialState = {
  
}


const [token, setToken] = useState('')

useEffect(() => {
  getData().then((token) => {
   setToken({ token })
 });
}, [])


if (token) {
  console.log(token)
}


return (
  <div className="App">
    Holi 
  </div>
)


}

export default App;