import React from "react";

import HeroSlider from "react-slick"

// Import CSS File
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const HeroCarousel=()=>{
    const settings={
        arrows:true,
        centerMode:true,
        centerPadding:"350px",
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
    }

    const images=[
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601643157091-ce5c665179ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ]
    return<>
    <HeroSlider {...settings}>
        {images.map((images)=>(
            <div className="w-20 h-80">
                <img src={images} alt="testing" className="w-full h-full"  />
            </div>
        )

        )}

    </HeroSlider>

    </>
}

export default HeroCarousel;