import React from "react";
import "./trendingSeasonalPlaces.css";
import { Link } from "react-router-dom";
export default function BudgetTrendingPlaces() {
  return (
    <>
      <section id="tsp_trendIndia">
        <div class="tsp_headBox">
          <h1>Budget Trending Places </h1>
          <Link class="tsp_btn" to="/">
            View All
          </Link>
        </div>

        <div class="tsp_trendCont">
          <div class="tsp_trendBox">
            <div class="tsp_row">
              <img src="/photoGallery/tourismImg/varanasi.jpg" alt="" />
              <div class="tsp_layer">
                <Link class="tsp_btn" to="/">
                  View Places{" "}
                </Link>
              </div>
            </div>
            <div class="tsp_offerContent">Varanasi</div>
            <div class="tsp_description">Uttar Pradesh</div>
          </div>
          <div class="tsp_trendBox">
            <div class="tsp_row">
              <img src="/photoGallery/tourismImg/kasol.jpeg" alt="" />
              <div class="tsp_layer">
                <Link class="tsp_btn" to="/">
                  View Places{" "}
                </Link>
              </div>
            </div>
            <div class="tsp_offerContent">Kasol</div>
            <div class="tsp_description">Himachal Pradesh</div>
          </div>
          <div class="tsp_trendBox">
            <div class="tsp_row">
              <img src="/photoGallery/tourismImg/pondicherry.jpeg" alt="" />
              <div class="tsp_layer">
                <Link class="tsp_btn" to="/">
                  View Place{" "}
                </Link>
              </div>
            </div>
            <div class="tsp_offerContent">Pondicherry</div>
            <div class="tsp_description">Tamil Nadu</div>
          </div>
          <div class="tsp_trendBox">
            <div class="tsp_row">
              <img src="/photoGallery/tourismImg/alleppey.jpg " alt="" />
              <div class="tsp_layer">
                <Link class="tsp_btn" to="/">
                  View Places{" "}
                </Link>
              </div>
            </div>

            <div class="tsp_offerContent">Alleppey</div>
            <div class="tsp_description">Kerla</div>
          </div>

          <div class="tsp_trendBox">
            <div class="tsp_row">
              <img src="/photoGallery/tourismImg/pushkar.jpg" alt="" />
              <div class="tsp_layer">
                <Link class="tsp_btn" to="/">
                  View Places{" "}
                </Link>
              </div>
            </div>
            <div class="tsp_offerContent">Pushkar</div>
            <div class="tsp_description">Rajasthan</div>
          </div>
        </div>
      </section>
    </>
  );
}
