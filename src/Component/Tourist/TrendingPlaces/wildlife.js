import React from 'react'
import "./wildlife.css"
import { Link } from 'react-router-dom'

export default function Wildlife() {
    return (
        <>
            <section id="wildlife">
                <div className="headBox">
                    <h1>Wildlife Tours</h1>
                    <Link className="btn" to="#">View All</Link>
                </div>
                <div className="WLCont">
                    <div className="WLBox">
                        <div className="row">
                            <img src="/photoGallery/tourismImg/National-Parks-in-India.jpg" alt="" />
                            <div className="layer">
                                <p>National Parks</p>
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                    </div>
                    <div className="WLBox">
                        <div className="row">
                            <img src="/photoGallery/tourismImg/Sundarban national park.jpg" alt="" />
                            <div className="layer">
                                <p>Mysterious Sunderbans</p>
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                    </div>
                    <div className="WLBox">
                        <div className="row">
                            <img src="/photoGallery/tourismImg/Bird-Santuary.webp" alt="" />
                            <div className="layer">
                                <p>Bird Watching</p>
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                    </div>
                    <div className="WLBox">
                        <div className="row">
                            <img src="/photoGallery/tourismImg/Rnathambore-National-Park.jpeg" alt="" />
                            <div className="layer">
                                <p>Ranthambore Wildlife</p>
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                    </div>
                    <div className="WLBox">
                        <div className="row">
                            <img src="/photoGallery/tourismImg/Gir-National-Park.png" alt="" />
                            <div className="layer">
                                <p>Gir Wildlife</p>
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
