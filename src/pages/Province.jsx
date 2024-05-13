import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../components/Home/Banner';
import Gallery from '../components/Province/Gallery';

const Province = (data) => {
  const slug = useParams().slug;
  const foundProvince = data.provinces.find(item => item.slug === slug);

  console.log(foundProvince);
  return (
    <>
      <Banner src={foundProvince.image} text={foundProvince.name} />
      <Gallery />
    </>
    
  )
}

export default Province