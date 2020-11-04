import React from 'react';
import loader from '../images/loader.gif'

const Loader = () => {
    return (  
    
    <div className="loader">
        <div className="loader__container">
            <img src={loader} alt="loading" title="loader"/>
        </div>
    </div>)
}

export default Loader;