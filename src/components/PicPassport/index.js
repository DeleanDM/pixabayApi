import React,{useState, useEffect} from 'react'

import {getPhotosByid} from '../../services/photoApi'
import "./picPassportStyle.css"
export default function Index(props) {
    const [currentPicture, setCurrentPicture] = useState(null)
   
    useEffect(() => {
        getPhotosByid(props.match.params.id)
        .then((res)=>{console.log(res);setCurrentPicture(res.data.hits)})
        
    }, [props.match.params.id])
    return (
        <div className = "picPassport">
            {
                currentPicture?.map((e)=>{
                    return(
                        <img  width = {e.imageWidth} key = {e.id} src = {e.largeImageURL} alt = "currentPic"></img>
                    )
                })
            }
        </div>
    )
}
