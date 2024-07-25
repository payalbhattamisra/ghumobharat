import React from 'react'
import './topTrendHolidayDest.css'
import { Link } from 'react-router-dom'
export default function TopTrendHolidayDest() {
  return (
    <>
      <section id="trendIndia">
        <div class="headBox">
          <h1>Top Trending Holiday Destination in India </h1>
          <Link class="btn" to="/">View All</Link>
        </div>
        
        <div class="trendCont">
           <div class="trendBox">
            <div class="row">
                <img src="/photoGallery/tourismImg/Kashmir.webp" alt=""/>
                <div class="layer">
                 <Link class="btn" to="/">View Places </Link>
                </div>
            </div> 
               <div class="offerContent">Kashmir</div>
               <div class="description">30 tour places </div>
           </div>
           <div class="trendBox">
               <div class="row">
               <img src="/photoGallery/tourismImg/R.jpeg" alt=""/>
               <div class="layer">
                <Link class="btn" to="/">View Places </Link>
               </div>
            </div>
               <div class="offerContent">Himachal</div>
               <div class="description">20 tour places </div>
           </div>
           <div class="trendBox">
            <div class="row">
                <img src="/photoGallery/tourismImg/Rajasthan.jpg" alt=""/>
                <div class="layer">
                 <Link class="btn" to="/">View Places </Link>
                </div>
             </div>
              
               <div class="offerContent">Rajasthan</div>
               <div class="description">25 tour places </div>
           </div>

           <div class="trendBox">
                    <div class="row">
                        <img src="/photoGallery/tourismImg/KedarNath.jpg" alt=""/>
                        <div class="layer">
                             <Link class="btn" to="/">View Places </Link>
                        </div>
                    </div>           
                    <div class="offerContent">Uttarakhand</div>
                    <div class="description">25 tour places </div>
            </div>

        <div class="trendBox">
            <div class="row">
                <img src="/photoGallery/tourismImg/Taj-Mahal.jpg" alt=""/>
                <div class="layer">
                 <Link class="btn" to="/">View Places </Link>
                </div>
             </div>
            <div class="offerContent">Agra</div>
            <div class="description">10 tour places </div>
        </div>
        </div>
    </section>

    </>
  )
}
