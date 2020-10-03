import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import ServiceContainer from '../components/ServiceContainer'


const Services = () => {
 return( 
 <>
 <Hero hero='roomsHero'>
  <Banner title='our services' >
  <Link to='/' className='btn-primary'>
   return home
  </Link>

  </Banner>
 </Hero>
 <ServiceContainer/>
 </>
 )
}

export default Services
