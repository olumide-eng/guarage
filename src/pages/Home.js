import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Service from '../components/Service';
import FeaturedServices from '../components/FeaturedServices';

const Home = () => {
 return (
  <>
  <Hero hero='defaultHero'>

<Banner title='Kola international limited' subtitle='we offer best automobile services'>
<Link to='/services' className='btn-primary'>
 our services
</Link>
</Banner>

 </Hero>
<Service/>
<FeaturedServices/>



 </>
 )
}

export default Home