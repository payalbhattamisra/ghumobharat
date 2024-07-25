import React from 'react'
import "./adventure.css"
import { Link } from 'react-router-dom'

export default function Adventure() {
    return (
        <>
            <section id="adventure">
                <div className="headBox">
                    <h1>Adventure Trips</h1>
                    <Link className="btn" to="#">View All</Link>
                </div>
                <div className="advCont">
                    <div className="advBox">
                        <div className="row">
                            <img src="/photogallery/tourismImg/Cruise ship.jpg" alt="" />
                            <div className="layer">
                                <p>Cruise Vacation</p>
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                    </div>
                    <div className="advBox">
                        <div className="row">
                            <img src="/photogallery/tourismImg/Trekking.jpg" alt="" />
                            <div className="layer">
                                <p>Trekking Trips</p>
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                    </div>
                    <div className="advBox">
                        <div className="row">
                            <img src="/photogallery/tourismImg/Skydiving.jpg" alt="" />
                            <div className="layer">
                                <p>Sky Diving</p>
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                    </div>
                    <div className="advBox">
                        <div className="row">
                            <img src="/photogallery/tourismImg/Scuba diving.jpeg" alt="" />
                            <div className="layer">
                                <p>Scuba Diving</p>
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                    </div>
                    <div className="advBox">
                        <div className="row">
                            <img src="/photogallery/tourismImg/Motor Biking.jpg" alt="" />
                            <div className="layer">
                                <p>Motor Biking</p>
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
