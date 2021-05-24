import React from 'react'
import './PicCard.css'
import {NavLink} from 'react-router-dom'
function Index({pics}) {

    return (
        <li className = "pictureList"  data-title="Нажмите на картинку, чтобы открыть её в полном размере">
           <div className = "pictureContainer">
             <NavLink to = {`/img/${pics.id}`}> 
                <img className = "picture" src={pics.largeImageURL} alt='pic' />
             </NavLink> 
           </div>
        </li>
    )
}
export default Index