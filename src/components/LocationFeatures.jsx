import React from 'react';

const LocationFeatures = ({location}) => {
  return (
    <div className='locationFeatures'>
       <div>
        <h3>Name:</h3>
        <h2>{location.name}</h2>
       </div>
       <div>
        <h3>type:</h3>
        <h2>{location.type}</h2>
       </div>
       <div>
        <h3>dimension:</h3>
        <h2>{location.dimension}</h2>
       </div>
       <div>
        <h3>poblation:</h3>
        <h2>{location?.residents?.length}</h2>
       </div>
    </div>
  );
};

export default LocationFeatures;