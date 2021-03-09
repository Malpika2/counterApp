import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';
export const  GifExpertApp = () =>  {

    const [categories, setCategories] = useState(['One Puch'])

    return (
        <>
            <h2> GifExpertApp</h2>
            <AddCategory 
                setCategories = {setCategories}
            />
            <hr />
            <ol>
                {
                    categories.map( categorie => 
                        <GifGrid key={categorie} category={categorie} />
                    )
                }
            </ol>
        </>
    )
}
export default GifExpertApp;
