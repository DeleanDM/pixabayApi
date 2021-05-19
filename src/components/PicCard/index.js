import React from 'react'
import './PicCard.css'
import {NavLink} from 'react-router-dom'
function Index({pics}) {

    return (
        <li className = "pictureList">
           <div className = "pictureContainer">
             <NavLink to = {`/pixabayapi/img/${pics.id}`}> 
                <img className = "picture" src={pics.largeImageURL} alt='pic' />
             </NavLink> 
           </div>
        </li>
    )
}
export default Index