import React from "react";
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

class MyCarousel extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={{width:"800px", margin:'auto'}}>
                    <Carousel>
                        <div>
                            <img src="https://source.unsplash.com/1600x900/?coding" alt="" />
                            <p className="legend">Coding Image</p>
                        </div>
                        <div>
                            <img src="https://source.unsplash.com/1600x900/?mobile" alt="" />
                            <p className="legend">Mobile Image</p>
                        </div>
                        <div>
                            <img src="https://source.unsplash.com/1600x900/?laptop" alt="" />
                            <p className="legend">Laptop Image</p>
                        </div>
                    </Carousel>
                </div>
            </React.Fragment>
        )
    }
}

export default MyCarousel