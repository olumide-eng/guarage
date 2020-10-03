import React from 'react';
import { FaRegCommentDots } from 'react-icons/fa';
import Servicee from '../components/Servicee';
const ServiceList = ({services}) => {
 return (
  <>
  <section className="roomslist">
  <div className="roomslist-center">
   {
    services.map(item=> {
     return <Servicee key={item.id} service={item}/>
    })
   }
  </div>
 </section>
  </>
 );
 
}

export default ServiceList;
