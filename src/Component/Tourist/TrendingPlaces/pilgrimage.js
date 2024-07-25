import React from 'react'
import "./pilgrimage.css"
import { Link } from 'react-router-dom'

export default function Pilgrimage() {
    return (
        <>
            <section id="Pilgrimage">
                <div className="headBox">
                    <h1>Trending <span>Spritual </span>Packages</h1>
                    <Link className="btn" to="#">View All</Link>
                </div>
                <div className="pilgrimageCont">
                    <div className="pilgrimageBox">
                        <div className="row">
                            <img src="/photoGallery/tourismImg/12 Jyotirlinga.jpeg" alt="" />
                            <div className="layer">
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                        <div className="offerContent">12 Jyotirlinga Darshan</div>
                        <div className="description">10 tour packages</div>
                    </div>
                    <div className="pilgrimageBox">
                        <div className="row">
                            <img src="/photoGallery/tourismImg/KedarNath.jpg" alt="" />
                            <div className="layer">
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                        <div className="offerContent">Char Dham yatra</div>
                        <div className="description">15 tour packages</div>
                    </div>
                    <div className="pilgrimageBox">
                        <div className="row">
                            <img src="/photoGallery/tourismImg/Char Dham(Jagannath Puri).jpg" alt="" />
                            <div className="layer">
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>

                        <div className="offerContent">Char Dham Yatra</div>
                        <div className="description">10 tour packages</div>
                    </div>
                    <div className="pilgrimageBox">
                        <div className="row">
                            <img src="/photoGallery/tourismImg/nau-devi-darshan-yatra.jpg" alt="" />
                            <div className="layer">
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                        <div className="offerContent">Nau Devi Darshan Yatra</div>
                        <div className="description">15 tour packages</div>
                    </div>
                    <div className="pilgrimageBox">
                        <div className="row">
                            <img src="/photoGallery/tourismImg/Buddhist pilgrimage.jpg" alt="" />
                            <div className="layer">
                                <Link className="btn" to="#">View Packages</Link>
                            </div>
                        </div>
                        <div className="offerContent">Buddhist Pilgrimage</div>
                        <div className="description">7 tour packages</div>
                    </div>
                </div>
            </section>
        </>
    )
}
