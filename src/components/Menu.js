import React from 'react';
import Submenu from './Submenu'

const Menu = (props) => {


    console.log('soy el menú:', props.categories)


    const categories = props.categories.map((category, i) => {
        return (
        <ul key={i}>
            {category.name}
            <Submenu categories={category.categories}/>
        </ul>
        )
    })

    return (
       <> 
            {categories}      
        </>
    )


}

export default Menu;