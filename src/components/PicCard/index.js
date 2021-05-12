import React from 'react'
import './PicCard.css'
function Index({pics}) {
    return (
        <li className = "pictureList">
           <div className = "pictureContainer">
             <img className = "picture" src={pics.largeImageURL} alt='pic' />
           </div>
        </li>
    )
}
export default Index