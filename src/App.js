import React, { useEffect, useState } from 'react'
import './App.css'
import useDebounce from './hooks/use-debounce';
import { getPhotos, getPhotosByid } from './services/photoApi'
import PicCard from './components/PicCard'
import GreetingPage from './components/greetingPage'
import queryString from 'query-string'
import { render } from '@testing-library/react';
function App({ history }) {

  const [pics, setPics] = useState([])
  const [yourQuery, setYourQuery] = useState("")
  const [yourPage, setYourPage] = useState(1)
  const debouncedSearch = useDebounce(yourQuery, 500)
  const [renderGreeting, setRenderGreeting] = useState(true)
  const [renderButtons, setRenderButtons] = useState(false)

  useEffect(() => {
    setRenderGreeting(true)
    const query = queryString.parse(history.location.search)
    setYourQuery(query.search)
  }, [history])

  useEffect(() => {
    if (yourQuery === "") {
      
      setRenderGreeting(true)
      setRenderButtons(false)
      history.push({ search: `search=${yourQuery}`})
    }
    else {
      setRenderGreeting(false)
      setRenderButtons(true)
      history.push({ search: `search=${yourQuery}`})
    }
    if (debouncedSearch) {
      getPhotos(debouncedSearch, yourPage)
        .then((res) => { console.log(res.data.hits); setPics(res.data.hits) })
    }
    else {
      setPics([])
    }
  }, [debouncedSearch, yourPage,history,yourQuery])

  const handleDecrement = () => {
    setYourPage(prevState => {
      if (prevState <= 1)
        return 1
      else { return prevState - 1 }
    })
  }
  const handleIncrement = () => {
    setYourPage(prevState => {
      return prevState + 1
    })
  }

  const handleChange = (e) => {
    setYourQuery(e.target.value)
  }
  return (
    <div className="mainDiv">
      <div className="queryContainer">
          <input id = "slideRight" className = "queryInput" placeholder = "Поиск изображений" type="text" value={yourQuery} onChange={handleChange} />
      </div>
      {
        renderButtons ?
          <div className="buttonsContainer">
            <button disabled={yourPage <= 1} className="prevButton" onClick={handleDecrement}>
              prev page
          </button>
            <button disabled={!pics.length} className="nextButton" onClick={handleIncrement}>
              next page
          </button>
          </div> : null
      }
      <div className="contentShell">
        <div className="leftContent">
          
      </div>
        <div className="centerContent">
        {
          renderGreeting ?
            <GreetingPage/> : null
        }
          <div className="allPicturesContainer">
            <ul className="allPictures">
              {
                pics.map((e) => <PicCard pics={e} key={e.id} />)
              }
            </ul>
          </div>
        </div>
        <div className="rightContent">
          
      </div>
      </div>
      {
        renderButtons ?
          <div className="buttonsContainer">
            <button disabled={yourPage <= 1} className="prevButton" onClick={handleDecrement}>
              prev page
          </button>
            <button disabled={!pics.length} className="nextButton" onClick={handleIncrement}>
              next page
          </button>
          </div> : null
      }
    </div>
  );
}

export default App;
