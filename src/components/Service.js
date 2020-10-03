import React, { Component } from 'react';
import { FaOilCan, FaCarCrash,  FaWrench, FaWhmcs  } from "react-icons/fa";
import Title from './Title'
export default class Service extends Component {
 state={
  service:[
   {
   icon: <FaWrench />,
   title:'General Maintenence',
   info: 'lorem ipsum some test about the free services or supposedly free according to bla bla dont mind this gubbrish i am writing jor'
  },
  {
   icon: <FaOilCan />,
   title:'Oil and Lub Services',
   info: 'lorem ipsum some test about the free services or supposedly free according to bla bla dont mind this gubbrish i am writing jor'
  },
  {
   icon: <FaCarCrash />,
   title:'Accidented Vehicle Repair',
   info: 'lorem ipsum some test about the free services or supposedly free according to bla bla dont mind this gubbrish i am writing jor'
  },
  {
   icon: <FaWhmcs />,
   title:'Engine Overhaul',
   info: 'lorem ipsum some test about the free services or supposedly free according to bla bla dont mind this gubbrish i am writing jor'
  }
  ]
 }
 render() {
  return (
   <section className="services">
    <Title title='services'/>
    <div className="services-center">
     {this.state.service.map((item,index) =>{
return <article key={index} className='service' >
<span>{item.icon}</span>
     <h6>{item.title}</h6>
     <p>{item.info}</p>
</article>
     })}
    </div>
   </section>
  )
 }
}
