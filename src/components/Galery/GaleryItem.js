import React from 'react'
import './GaleryItem.css'

function GaleryItem({image}){
    return <div className="GaleryItem">
        <img src={image} alt="dog"></img> 
    </div>
}

export default GaleryItem