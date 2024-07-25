import React from 'react'
import './trendingSeasonalPlaces.css'
import { Link } from 'react-router-dom'
export default function TopTrendSeasonalPlaces() {
  return (
    <>
      <section id="tsp_trendIndia">
        <div class="tsp_headBox">
          <h1>Top Trending Seasonal Places </h1>
          <Link class="tsp_btn" to="/">View All</Link>
        </div>
        
        <div class="tsp_trendCont">
           <div class="tsp_trendBox">
            <div class="tsp_row">
                <img src="/photoGallery/tourismImg/gulmarg1.jpg" alt=""/>
                <div class="tsp_layer">
                 <Link class="tsp_btn" to="/tourist/gulmarg">View Places </Link>
                </div>
            </div> 
               <div class="tsp_offerContent">Gulmarg</div>
               <div class="tsp_description">Jammu And Kashmir</div>
           </div>
           <div class="tsp_trendBox">
               <div class="tsp_row">
               <img src="/photoGallery/tourismImg/HM-Manali.jpg" alt=""/>
               <div class="tsp_layer">
                <Link class="tsp_btn" to="/">View Place </Link>
               </div>
            </div>
               <div class="tsp_offerContent">Manali</div>
               <div class="tsp_description">Himarchal Pradesh</div>
           </div>
           <div class="tsp_trendBox">
            <div class="tsp_row">
                <img src="/photoGallery/tourismImg/auli.webp " alt=""/>
                <div class="tsp_layer">
                 <Link class="tsp_btn" to="/">View Places </Link>
                </div>
             </div>
              
             <div class="tsp_offerContent">Auli</div>
               <div class="tsp_description">Uttrakhand</div>
           </div>

           <div class="tsp_trendBox">
                    <div class="tsp_row">
                        <img src="/photoGallery/tourismImg/runnOfKutch.jpg" alt=""/>
                        <div class="tsp_layer">
                             <Link class="tsp_btn" to="/">View Places </Link>
                        </div>
                    </div>           
                    <div class="tsp_offerContent">Rann of kutch</div>
                    <div class="tsp_description">Gujrat</div>
            </div>

        <div class="tsp_trendBox">
            <div class="tsp_row">
                <img src="/photoGallery/tourismImg/munar.webp" alt=""/>
                <div class="tsp_layer">
                 <Link class="tsp_btn" to="/">View Places </Link>
                </div>
             </div>
            <div class="tsp_offerContent">Munnar</div>
            <div class="tsp_description">Kerla </div>
        </div>
        </div>
    </section>

    </>
  )
}
