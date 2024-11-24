import React from "react";
import { useParams } from "react-router-dom";
import DESTINATIONS from "../destinations";

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = DESTINATIONS.find((dest) => dest.id === parseInt(id));

  if (destination == null) {
    return <div> Destination not Found! </div>;
  }

  const Component = destination.Component;
  if (Component != null) {
    return <Component />;
  }

  //TODO: Add destination detail component
  return <div>DestinationDetail</div>;
};

export default DestinationDetail;
