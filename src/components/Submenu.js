import React from 'react';

const Submenu = (props) => {

    
    const subs = props.categories.map((sub, i) => {
        return (
            <li key={i} className="subcategory">
                {sub.name}
            </li>
        )
    })

    return (
        <ul>{subs}</ul>
    )

}

export default Submenu;