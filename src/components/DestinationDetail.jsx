import React from 'react'
import { useParams } from 'react-router-dom';
import Birds from '../pages/Chaka';
import destinations from '../destinations';
import Hells from '../pages/Hells';


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
        case 1:
            return <Hells />

    } 
    

  return (
    <div>DestinationDetail</div>
  )
}

export default DestinationDetail;