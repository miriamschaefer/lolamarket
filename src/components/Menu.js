import React, { useState } from 'react';
import Submenu from './Submenu';
import chevron from '../images/ic_hide.svg';

const Menu = (props) => {

const [collapsible, setCollapsible] = useState();
// const [isShown, setIsShown] = useState(false);
console.log(props);

    const collapsibleHandler = (clickedId) => {
        if(clickedId !== collapsible) {
            setCollapsible(clickedId);
        } else {
            setCollapsible()
        }
    }

    // const hoverHandler = (hoverId) => {
    //     if(hoverId !== isShown) {
    //         setIsShown(true);
    //     } else {
    //         setIsShown(false);

    //     }
    // }

    const openCollapsible = (ev) => {
        let parsedId = parseInt(ev.currentTarget.id);
        collapsibleHandler(parsedId);
    }

    //   const showChevron = (obj) => {
    //     let parsedId = parseInt(obj.target.id);
    //     console.log(parsedId);
    //     hoverHandler(parsedId);
    //   }

    //   const compareIds = (obj) => {
    //     let parsedId = parseInt(obj.target.id);
    //     if (parsedId === isShown) {
    //         return true
    //     }
    //   }

 const categories = props.categories.map((category, i) => {

    return (
    <li key={i} className="App__menu-content__category">
    <div id={i}
    onClick={openCollapsible}
    className="App__menu-content__category__content"
    // onMouseEnter={showChevron}
    // onMouseLeave={() => setIsShown(false)}
    >

    <div className="App__menu-content__category__content__icon">
        <img src={category.icon} alt={category.name}/>
    </div>
    
    <div className="App__menu-content__category__content__category__right">

    <h3 className="App__menu-content__category__content__category__name">{category.name}</h3>

    <div className="App__menu-content__category__content__chevron">

        <img src={chevron} alt="chevron-down"/>
        </div>
    </div>

    {/* {isShown (<div
       >
        <img src={chevron} alt="chevron-down"/>
            
    </div>)}
         */}
    </div>
    
    <ul className={`${collapsible === i ? "" : "active"}`}>
            <Submenu categories={category.categories}/>
    </ul>
    </li>
    )
    })



    return (
        <>
    <ul className="App__menu-content">
        {categories}
    </ul>

    </>
    )


}

export default Menu;