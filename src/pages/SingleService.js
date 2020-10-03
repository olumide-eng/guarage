import React, { Component } from 'react'
import defaultBcg from '../images/room-7.jpeg'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {ServiceContext} from '../context';
import StyledHero from '../components/StyledHero'
export default class SingleService extends Component {
 constructor(props){
  super(props);
  this.state = {
   slug:this.props.match.params.slug,
   defaultBcg
  }
 }
 static contextType = ServiceContext;
// componentDidMount() {}



 render() {
  const {getService} = this.context;
  const service =getService(this.state.slug);
  if(!service){
   return ( <div className="error">
    <h3>no such service found...</h3>
    <Link to='/services' className='btn-primary'>

    </Link>
   </div>
   );
  }
   const {name,description,capacity,size,price,extras,breakfast,pets,images} = service;
const [mainImg,...defaultImg] = images

  return (
       <>
   <StyledHero img={images[0]}>
    <Banner title={`${name} services`}>
     <Link to='/services'className='btn-primary'>
back to services
     </Link>
    </Banner>
   </StyledHero>
   <section className="single-room">
        <div className="single-room-images">
{images.map((item,index)=>{
return <img key={index}src={item} alt={name}/>
})}

        </div>
        <div className="single-room-info">
             <article className="desc">
                  <h3>details</h3>
<p>{description}</p>
             </article>
             <article className="info">
<h3>info</h3>
<h6>price:{price}</h6>
<h6>size:{size}</h6>

             </article>
        </div>
   </section>
   <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
             {extras.map((item,index)=> {
                  return <li key={index}>
                       -{item}
                  </li>;
             })}
        </ul>
   </section>
   </>
  )
 }
}
