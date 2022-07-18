import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { render } from 'react-dom';
import Head from 'next/head'
import React from 'react';

export default class Home extends React.Component {
  static async getInitialProps() {
    const getData = await fetch('https://api.ilufa.co.id/api/product');
    const data = await getData.json();

    return {
      dataProduct : data.data.carousel
    }
  }

  render() {
    const { dataProduct } = this.props;
    // console.log(data)
    return (
      <div className='text-black'>
        <Swiper
           spaceBetween={50}
           slidesPerView={1}
           onSlideChange={() => console.log('slide change')}
           onSwiper={(swiper) => console.log(swiper)}
         >
        {dataProduct.map((data) => (
           <SwiperSlide key={data.product_id}>
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-wrap my-4">
                <img src={data.image_relasi[0].link_url} className="m-auto md:w-1/2" />
                <div className="m-auto py-5">
                  <span className="text-2xl md:text-4xl font-medium">{ data.category_name }</span><br />
                  <span className="text-xl md:text-2xl">{ data.product_name }</span><br />
                  <button
                    className="bg-orange-500 my-5 px-6 py-2 rounded hover:bg-orange-400 text-white">Selengkapnya</button>
                </div>
              </div>
            </div>
            </SwiperSlide>
        ))}
        </Swiper>
      </div>
    ) 
  }
}