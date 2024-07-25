import React from 'react'
import "./beach.css"
import { Link } from 'react-router-dom'

export default function Beach() {
    return (
        <>
            <section id="beaches">
                <div className="headBox">
                    <h1>Beach Packages</h1>
                    <Link className="btn" to="#">View All</Link>
                </div>
                <div className="beachCont">
                    <div className="beachBox">
                        <div className="row">
                            <img src="/photoGallery/tourismImg/andaman-nicobar-beach.jpg" alt="" />
                            <div className="layer">
                                <p>Andaman Nicobar</p>
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                    </div>
                    <div className="beachBox">
                        <div className="row">
                            <img src="/photoGallery/tourismImg/Beach Lakshadweep.jpg" alt="" />
                            <div className="layer">
                                <p>Lakshdweep Island</p>
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                    </div>
                    <div className="beachBox">
                        <div className="row">
                            <img src="/photoGallery/tourismImg/Beach Goa.gif" alt="" />
                            <div className="layer">
                                <p>Goa Beaches</p>
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                    </div>
                    <div className="beachBox">
                        <div className="row">
                            <img src="/photoGallery/tourismImg/Beaches Kerala.jpeg" alt="" />
                            <div className="layer">
                                <p>Kerala Beaches</p>
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                    </div>
                    <div className="beachBox">
                        <div className="row">
                            <img src="/photoGallery/tourismImg/Beach Maharastra.webp" alt="" />
                            <div className="layer">
                                <p>Maharastra Beaches</p>
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
