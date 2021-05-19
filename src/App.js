import React, { useEffect, useState } from 'react'
import './App.css'
import useDebounce from './hooks/use-debounce';
import {getPhotos, getPhotosByid} from './services/photoApi'
import PicCard from './components/PicCard'
import queryString from 'query-string'
function App({history}) {

  const [pics, setPics] = useState([])
  const [yourQuery, setYourQuery] = useState("")
  const [yourPage, setYourPage] = useState(1)
  const debouncedSearch = useDebounce(yourQuery, 500)

  useEffect(() => {
    const query =  queryString.parse(history.location.search)
    console.log(query)
    setYourQuery(query.search)
  }, [])
  useEffect(() => {
    if (debouncedSearch) {
      history.push({search: `search=${yourQuery}`})
      getPhotos(debouncedSearch, yourPage)
        .then((res) => { console.log(res.data.hits); setPics(res.data.hits) })
    }
    else {
      setPics([])
    }

  }, [debouncedSearch, yourPage])

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

  return (
    <div className="mainDiv">
      <div className="queryContainer">
        <h2 className="headerText"> Введите ключевые слова</h2>
        <div className="inputQuery">
          <input type="text" value={yourQuery} onChange={(e) => { setYourQuery(e.target.value) }} />
        </div>
      </div>
      <div className="allPicturesContainer">
        <ul className="allPictures">
          {
            pics.map((e) => <PicCard pics={e} key={e.id} />)
          }
        </ul>
      </div>
      <div className="buttonsContainer">
        <button disabled={yourPage === 1} className="prevButton" onClick={handleDecrement}>
          prev page
      </button>
        <button disabled={!pics.length} className="nextButton" onClick={handleIncrement}>
          next page
      </button>
      </div>
    </div>
  );
}

export default App;
