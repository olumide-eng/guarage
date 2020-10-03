import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
const Servicee = ({service}) => {
const{name,slug,images,price} = service;
 return (
  <article className='room'>
<div className="img-container">
<img src={images[0]} alt="single service"/>
<div className="price-top">
 <h6>Premium Service</h6>

</div>
<Link to={`/services/${slug}`} className='btn-primary room-link'>
  Festures
</Link>
</div>
 <p className="room-info">{name}</p>
  </article>
 );
}
Servicee.propTypes = {
  service:PropTypes.shape({
    name:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    price:PropTypes.number.isRequired,
  })
  
}


export default Servicee;
