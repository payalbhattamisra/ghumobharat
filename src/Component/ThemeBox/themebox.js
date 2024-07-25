import React from 'react'
import './themebox.css'
import { Link } from 'react-router-dom'
export default function Themebox() {
    return (
        <>
            <section className="themebox">

                <h1>Themes you can explore</h1>
                <div className="themboxCont">
                    <div className="pilgrimage box">
                        <img src="/photoGallery/tourismImg/pilgrimage-tour-01.svg" alt="" className='themeIcon' />
                        <Link to="#pilgrimage">Pilgrimage</Link>
                    </div>
                    <div className="beach box">
                        <img src="/photoGallery/tourismImg/beach-tour.svg" alt="" className='themeIcon' />
                        <Link to="#beach">Beach</Link>
                    </div>
                    <div className="hillstation box">
                        <img src="/photoGallery/tourismImg/hill-station-tour.svg" alt="" className='themeIcon' />
                        <Link to="#hillstation">Hill Station</Link>
                    </div>
                    <div className="wildlife box">
                        <img src="/photoGallery/tourismImg/wildlife-tour.svg" alt="" className='themeIcon' />
                        <Link to="#wildlife">Wildlife</Link>
                    </div>
                    <div className="adventure box">
                        <img src="/photoGallery/tourismImg/adventure-tour.svg" alt="" className='themeIcon' />
                        <Link to="#adventure">Adventure</Link>
                    </div>

                </div>

            </section>
        </>
    )
}
