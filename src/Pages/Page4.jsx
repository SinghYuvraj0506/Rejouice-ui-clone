import React from 'react'
import "./Page4.css"

const Page4 = () => {
  return (
    <div className="page4_wrapper">
        <div className='page4_heading'>
            <p>Transforming visions into brands.</p>
            <span>↳ See the work</span>
        </div>

        <div className='card_wrapper_page4'>
            <div>
                <video src="/video1.mp4" autoPlay muted loop></video>
                <img src="/image1.avif" alt="" />
            </div>
            <div>
            <video src="/video2.mp4" autoPlay muted loop></video>
                <img src="/image2.avif" alt="" />
            </div>
            <div>
            <video src="/video3.mp4" autoPlay muted loop></video>
                <img src="/image3.avif" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Page4