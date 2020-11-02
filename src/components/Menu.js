import React from 'react';
import Submenu from './Submenu'


const Menu = (props) => {


 const categories = props.categories.map((category, i) => {

        return (
            
        <ul key={i} >
           <li className="category"> {category.name} </li>
            <Submenu categories={category.categories}/>
            
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