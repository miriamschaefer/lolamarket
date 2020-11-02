import React from 'react';

const Submenu = (props) => {
    
    const subs = props.categories.map((sub, i) => {
        return (
            <li key={i}>
                {sub.name}
            </li>
        )
    })

    return (
        <> <div>
        <ul>{subs}</ul>

    </div>

    </>
    )

}

export default Submenu;