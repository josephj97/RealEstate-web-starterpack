import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="hero-container paddings innerWidth flexCenter">

                {/* left section */}
                <div className="hero-left flexColStart">
                    <div className="hero-title">
                        <div className="orange-circle"></div>
                        <h1>Discover <br />Most Suitable<br />Property</h1>
                    </div>
                    <div className="hero-des flexColStart">
                        <span>Find a variety of properties that suit you very easilty</span>
                        <span>Forget all difficulties in finding a residence for you</span>
                    </div>
                </div>

                {/* right section */}
                <div className="hero-right">
                    <div className="image-container">
                        <img src="./public/hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero