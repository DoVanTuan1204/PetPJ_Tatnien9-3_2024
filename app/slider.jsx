"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

export default class VerticalMode extends Component {
  render() {
    const settings = {
      draggable: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      arrows: false,
      verticalSwiping: true,
      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      },
    };
    return (
      <div className="h-full">
        <Slider className="h-full w-full" {...settings}>
          <div>
            <Image width={400} height={100} src="/s1.jpg" alt="" />
          </div>
          <div>
            <Image width={400} height={100} src="/t1.jpg" alt="" />
          </div>
          <div>
            <Image width={400} height={70} src="/s2.JPG" alt="" />
          </div>
          <div>
            <Image width={400} height={100} src="/t2.jpg" alt="" />
          </div>
          <div>
            <Image width={400} height={70} src="/s3.jpg" alt="" />
          </div>
          <div>
            <Image width={400} height={100} src="/t3.jpg" alt="" />
          </div>
          <div>
            <Image width={400} height={70} src="/s4.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
