import React from 'react';
import {Marker} from 'react-leaflet';
import { IconLocation } from './IconLocation';


 const Markers = () => {
  return (
    <Marker position={{ lat: '-34.90203', lng: '-56.13436' }} icon={IconLocation}/>
  )
}

export default Markers;