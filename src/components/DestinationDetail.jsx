import React from 'react'
import { useParams } from 'react-router-dom';
import Birds from '../pages/Chaka';
import destinations from '../destinations';


const DestinationDetail = () => {
    const {id} = useParams();
    const destination = destinations.find(dest => dest.id === parseInt(id));

    if (!destination) {
        return 
        <div> Destination not Found! </div>
    }
    switch(destination.id) {
        case 5:
            return <Birds />
    }

    // if (destination.id === 5) {
    //     return <Birds />
    // }

  return (
    <div>DestinationDetail</div>
  )
}

export default DestinationDetail;