import React from 'react';

const Submenu = (props) => {

    const categories = props.categories;

    const subcategories = categories.map((subcategory, i) => {
     return subcategory.categories;
    })

    console.log(subcategories);

    const subs = subcategories.map(subarray => subarray.map((cat,i) => {
        return  (
            <li key={i}>{cat.name}</li>);
    }))

    console.log(subs)

    return (
        <> <div>
        <ul>{subs}</ul>

    </div>

    </>
    )

}

export default Submenu;