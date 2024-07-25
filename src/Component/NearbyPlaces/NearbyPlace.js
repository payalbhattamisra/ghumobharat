import React, { useState } from 'react';
import touristPlacesData from './tourist-places.json';
import './NearbyPlace.css'
const NearbyTouristPlaces = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handlePlaceClick = (placeName) => {
    console.log('Clicked:', placeName);
    const placeDetails = touristPlacesData.places.find(
      (place) => place.place_name === placeName
    );
    console.log('Found:', placeDetails);
    setSelectedPlace(placeDetails);
  };

  return (
    <div className='nplace'>
      <h1>Tourist Places Near Bhilai</h1>
      <ul className='nplacelist'>
        {touristPlacesData.places.map((place, index) => (
          <li
            key={index}
            onClick={() => handlePlaceClick(place.place_name)}
            style={{ cursor: 'pointer' }}
          >
            {place.place_name}
          </li>
        ))}
      </ul>
      {selectedPlace && (
        <div className='detailList'>
          <h2>{selectedPlace.place_name}</h2>
          <p><strong>Description:</strong> {selectedPlace.details.description}</p>
          <p><strong>Distance:</strong> {selectedPlace.details.distance}</p>
          <p><strong>Ratings:</strong> {selectedPlace.details.ratings}</p>
        </div>
      )}
    </div>
  );
};

export default NearbyTouristPlaces;
