import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { render } from 'react-dom';
import Head from 'next/head'
import React from 'react';

export default class Home extends React.Component {
  
  render() {
    const { dataProduct } = this.props;
    // console.log(data)
    return (
      <div>
      <h1>Hello, World!</h1>
    </div>
    ) 
  }
}