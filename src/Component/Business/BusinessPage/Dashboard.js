// import React, { useState } from 'react';

// const GulmargPlaces = () => {
//   const gulmargPlaces = {
//     "Gulmarg Gondola": {
//         "Medical Shops": {
//           "Shop Name": "Maqbool shah medical store.",
//           "Closing Time": "Closes at 8 pm",
//           "Website": "https://maqbool-shah-medical-store.business.site/?utm_source=gmb&utm_medium=referral",
//           "Location":"Tangmarg, Jammu and Kashmir 193402"
//         },
//         "Grocery": {
//           "Shop Name": "First Choice Departmental Store.",
//           "Closing Time": "Closes at 8:30pm.",
//           "Website": "https://first-choice-departmental-store.business.site/?utm_source=gmb&utm_medium=referral",
//           "Location": "Chandilora Tangmarg Tangmarg, Gulmarg, Jammu and Kashmir 193402"
//         },
//         "Shopping Malls": {
//           "Name": "Mohammadia Shopping Complex",
//           "Closing Time":"Closes at 7pm",
//           "Website": "N.A",
//           "Location":"Srinagar - Gulmarg Rd, Kunzer, Jammu and Kashmir 193401"

//         },
//         "Food Stalls": {
//           "Name": "Miasa Cafe",
//           "Closing Time":"Closes at 8pm",
//           "Website": "N.A",
//           "Location": "29XJ+86V, Gulmarg, Jammu and Kashmir 193403"
//         },
//         "Famous Sports": {
//           "Sports Name": "Gulmarg Snow Sports",
//           "Timing": "Open 24 hours",
//           "Website": "N.A",
//           "Location":"Near, Hotel Khyber Rd, Gulmarg, Forest Block, Jammu and Kashmir 193403"
//         },
//     }               
//   }

//   const [selectedPlace, setSelectedPlace] = useState(null);

//   const handlePlaceClick = (placeName) => {
//     setSelectedPlace(placeName);
//   };

//   return (
//     <div>
//       <h2>Gulmarg Tourist Places</h2>
//       <div className='content'>
//         {Object.keys(gulmargPlaces).map((place) => (
//           <span
//             key={place}
//             className='placeName'
//             onClick={() => handlePlaceClick(place)}
//           >
//             {place}
//           </span>
//         ))}
//       </div>
//       {selectedPlace && (
//         <div className='placeDetails'>
//           <h3>{selectedPlace}</h3>
//           <p>Description: {gulmargPlaces[selectedPlace].description}</p>
//           <p>Category: {gulmargPlaces[selectedPlace].category}</p>
//           <p>Location: {gulmargPlaces[selectedPlace].location}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GulmargPlaces;
import React from 'react'
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div>
      <img src="/photoGallery/Dashboard.svg" alt="" id='dashboardimg'/>
    </div>
  )
}

export default Dashboard
