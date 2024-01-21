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
          <Image width={400} height={70} src="/a1.jpg" alt="" />

          <Image width={400} height={120} src="/a2.jpg" alt="" />

          <Image width={400} height={70} src="/a3.jpg" alt="" />

          <Image width={400} height={70} src="/a4.jpg" alt="" />
        </Slider>
      </div>
    );
  }
}
