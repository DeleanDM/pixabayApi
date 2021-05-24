import React from 'react'
import './greetingStyle.css'
import foxPic from './fox.png'
export default function Index() {
    return (
        <div className="greetingMain">
            <div className="greeting" >
                <p id="slideLeft" className="greetingText">
                    Ищите потрясающие бесплатные изображения с помощью <a target="blank" href="https://pixabay.com/ru/">pixabay API</a>
                </p>
            </div>
            <img className="foxPic" src={foxPic} alt="fox"></img>
        </div>
    )
}
