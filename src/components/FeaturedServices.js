import React, { Component } from 'react'
import {ServiceContext} from '../context';
import Title from '../components/Title';
import Servicee from '../components/Servicee'
import Loading from '../components/Loading';
export default class FeaturedServices extends Component {
 static contextType =ServiceContext
 render() {

let {loading,featuredServices:services}=this.context;
services = services.map(service => {
 return <Servicee key={service.id} service={service}/>
})
  return (
   <section className='featured-rooms' > 
<Title title='featured services'/>
<div className="featured-rooms-center">
 {loading?<Loading/>:services}
</div>


   </section>
   
  )
 }
}
