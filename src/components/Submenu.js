import React from 'react';

const Submenu = (props) => {

    
    const subs = props.categories.map((sub, i) => {
        return (
    
             <li key={i}     className="App__menu-content__category__submenu">
                 <div className="App__menu-content__category__submenu__content">
                <p>{sub.name}</p>
                </div>
            </li>
     
        )
    })

    return (
        <>
        {subs}
        <li className="App__menu-content__category__submenu">
        <div className="App__menu-content__category__submenu__content">
           <p> Ver toda la sección</p>

            </div>
        </li>
        </>

    )


}

export default Submenu;