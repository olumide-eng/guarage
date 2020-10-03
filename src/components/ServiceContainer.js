import React from 'react';
import ServiceList from '../components/ServiceList'
import {withServiceConsumer} from '../context';
import Loading from '../components/Loading';
import Title from '../components/Title';

function ServiceContainer({context}){
const {loading,sortedServices,services} = context;
     if (loading){
      return <Loading/>
     }
     return (
      <>
      <div className="featured-rooms">
      <Title title='services rendered' />
      </div>
      <ServiceList services={sortedServices}/>
     </>
     )
}

export default withServiceConsumer(ServiceContainer)









// import React from 'react';
// import ServiceList from '../components/ServiceList'
// import {ServiceConsumer} from '../context';
// import Loading from '../components/Loading';

// const ServiceContainer = () => {
//  return (
//   <ServiceConsumer>
//    {
//     (value) => {
//      const {loading,sortedServices,services} = value
//      if (loading){
//       return <Loading/>
//      }
//      return (
//       <div>
//       hello from  service container
//       <ServiceList services={sortedServices}/>
//      </div>
//      )
//     }
//    }
//   </ServiceConsumer>
 
//  );
// }

// export default ServiceContainer;
