import React from 'react'
import './firstpage.css'
import { Link } from 'react-router-dom'
export default function FirstPage() {
  return (
    <>

    <div className='firstPage'>
      <div className="firstPagecon">
        <div className="img1">
            <img src="/photoGallery/groupIndiaPlaces.png" alt="img" className='groupIndiaPlaces'/>
        </div>
        <div className="tagline">
         <h1 className='taghead'>Discover. Explore. <br/><span id='orangeCol'>Unforgettable</span> <br/>Journeys Await. </h1>
         <p id='tagPara'>Plan your next adventure with precision and passion with our<br/>personalised, well-crafted touring plan for best experiences. </p>
        </div>
      </div>

      <div className="navToPage">
        <Link to={'/business'} className='business'>Business</Link>
        <Link to={'/tourist'} className='tourist'>Tourist</Link>
      </div>
      </div>
    </>
  )
}
