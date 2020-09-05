import React, { useEffect, useState } from 'react'

import GaleryItem from './GaleryItem'
import getRandomImages from '../../services/getRandomImages';

import './Galery.css'

function Galery({selectedBreed}){
    
    const [images,setImages] = useState([]);

    useEffect(() =>{
        if(selectedBreed){
        getRandomImages(selectedBreed).then( images => setImages(images))
        .catch(console.error())
        }
    },[selectedBreed]);
    
    return <div >
        <h1>Galería</h1>
        {
        console.log(images)
        }
        <div className="Galery">
        {
            
            images.map( image  => 
               <GaleryItem image={image}></GaleryItem>
            )
        }
        </div>
    </div>
}

export default Galery