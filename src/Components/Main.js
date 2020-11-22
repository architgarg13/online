import React, { Component } from 'react';
import '../App.css'
import { Carousel } from 'react-bootstrap'
import img3 from './img-3.jpeg';
import img2 from './img-2.jpeg';
import img1 from './img-1jpeg.jpeg';
class Main extends Component{
    render(){
        return(<div className="main">
            <div className="container-fluid p-0">
            <div className="site-slider" >
                <div className="slider-one">
                <Carousel >
                 <Carousel.Item className="carousle" interval={3000}>
                 <img
                   className="d-block w-100 p-0"
                  src={img1}
                  alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item className="carousle" interval={3000}>
                <img
                 className="d-block w-100 p-0"
                 src={img2}
                 alt="Third slide"
                 />
                </Carousel.Item>
                 <Carousel.Item className="carousle" interval={3000}>
                  <img
                  className="d-block w-100 p-0"
                   src={img3}
                   alt="Third slide"
                  />
                 </Carousel.Item>
                </Carousel>
                </div>
            </div>
            </div>
            <div className="container-fluid">
              <div className="site-slider-two ">
                <div className="row ">
            
                </div>
              </div>
            </div>
        </div>
       
        );
    }
}
export default Main;