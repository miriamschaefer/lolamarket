import React from 'react';
import '../stylesheets/App.scss';
import getInfo from '../services/Api';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    
    }
  }

  componentDidMount() {
    getInfo().then((data) => {
      this.setState({
        data,
      })
    })
  }


  render() {
    console.log(this.state)
    return ( 
    
    <div className="App">
     Holi
    </div>

    )
  }

}

export default App;