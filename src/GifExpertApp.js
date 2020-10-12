import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Drangon Ball'];
    const [categories, setCategories] = useState(['One Punch']);
    // const handleAdd = () => {
    //     // 'HunterXHunter'
    //     setCategories(cats => [...cats, 'Hunter x Hunter'])
    // }



    return (
        <>
            <h2>Gif Expert App</h2>  
            <AddCategory setCategories= {setCategories}/>
            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map((category) => (<GifGrid category={category} key={category}/>))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;