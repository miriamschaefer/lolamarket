import React, { useState } from 'react';
import Submenu from './Submenu'


const Menu = (props) => {

const [collapsible, setCollapsible] = useState();

    const collapsibleHandler = (clickedId) => {

        if(clickedId !== collapsible) {
            setCollapsible(clickedId);
        } else {
            setCollapsible()
        }
    }
    const openCollapsible = (ev) => {
        let parsedId = parseInt(ev.currentTarget.id);
        collapsibleHandler(parsedId);
    } 

 const categories = props.categories.map((category, i) => {

    return (
    <ul key={i} className="container">
        <li id={i} onClick={openCollapsible} className="category menu"> {category.name} </li>
        <div className={`${collapsible === i ? "" : "active"}`}>
            <Submenu categories={category.categories}/>
        </div>
    </ul>
    )
    })



    return (
        <>
    <nav>
        {categories}
    </nav>

    </>
    )


}

export default Menu;