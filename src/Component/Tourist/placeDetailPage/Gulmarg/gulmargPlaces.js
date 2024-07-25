// import React, { useState, useEffect } from 'react';
// import './gulmargPlaces.css';

// const GulmargPlaces = () => {
//   const gulmargPlaces = {
//     "Gulmarg Gondola": {
//       "description": "The Gulmarg Gondola is one of the highest cable cars in the world, offering breathtaking views of the Himalayas.",
//       "category": "Adventure, Sightseeing",
//       "ratings": {
//         "overall": 4.5,
//         "scenery": 5,
//         "adventure": 4,
//         "accessibility": 4
//       }
//     },
//     "Alpather Lake": {
//       "description": "Alpather Lake is a scenic high-altitude lake surrounded by picturesque snow-capped mountains, offering a serene environment.",
//       "category": "Nature, Sightseeing",
//       "ratings": {
//         "overall": 4.8,
//         "scenery": 5,
//         "serenity": 5,
//         "accessibility": 4
//       }
//     },
//     "Khilanmarg": {
//       "description": "Khilanmarg is a beautiful valley carpeted with flowers in spring and snow in winter, offering stunning views of the surrounding peaks.",
//       "category": "Nature, Trekking",
//       "ratings": {
//         "overall": 4.3,
//         "scenery": 5,
//         "trekking": 4,
//         "natural beauty": 4
//       }
//     },
//     "Baba Reshi Shrine": {
//       "description": "Baba Reshi Shrine is a sacred religious site dedicated to the Sufi saint Baba Reshi, known for its historical and spiritual significance.",
//       "category": "Religious, Historical",
//       "ratings": {
//         "overall": 4.6,
//         "spirituality": 5,
//         "historical significance": 4,
//         "serenity": 4
//       }
//     },
//     "Golf Course": {
//       "description": "The Gulmarg Golf Course is one of the highest in the world, surrounded by stunning natural beauty and snow-capped peaks.",
//       "category": "Recreation, Sports",
//       "ratings": {
//         "overall": 4.7,
//         "scenery": 5,
//         "golfing experience": 5,
//         "ambiance": 4
//       }
//     }
//   }
  
//   const [selectedPlace, setSelectedPlace] = useState(null);

//   const handlePlaceClick = (placeName) => {
//     setSelectedPlace(placeName);
//   };

//   return (
//     <div className='gulmargPlaceList'>
//       <h2>Recommended Places in Gulmarg</h2>
//       <div className='contentG'>
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
//           <p><strong>Description:</strong> {gulmargPlaces[selectedPlace].description}</p>
//           <p><strong>Category:</strong> {gulmargPlaces[selectedPlace].category}</p>
//           <p><strong>Ratings:</strong></p>
//           <ul>
//             {Object.entries(gulmargPlaces[selectedPlace].ratings).map(
//               ([rating, value]) => (
//                 <li key={rating}>
//                   {rating}: {value}
//                 </li>
//               )
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };
//export default GulmargPlaces;


import React, { useState } from 'react';
import './gulmargPlaces.css';
import nearbyShopPlaceDetail from './nearbyShopPlaceDetail.json'; // Import the nearby shop data

const GulmargPlaces = () => {
  const gulmargPlaces = {
    "Gulmarg Gondola": {
      "description": "The Gulmarg Gondola is one of the highest cable cars in the world, offering breathtaking views of the Himalayas.",
      "category": "Adventure, Sightseeing",
      "ratings": {
        "overall": 4.5,
        "scenery": 5,
        "adventure": 4,
        "accessibility": 4
      }
    },
    "Alpather Lake": {
      "description": "Alpather Lake is a scenic high-altitude lake surrounded by picturesque snow-capped mountains, offering a serene environment.",
      "category": "Nature, Sightseeing",
      "ratings": {
        "overall": 4.8,
        "scenery": 5,
        "serenity": 5,
        "accessibility": 4
      }
    },
    "Khilanmarg": {
      "description": "Khilanmarg is a beautiful valley carpeted with flowers in spring and snow in winter, offering stunning views of the surrounding peaks.",
      "category": "Nature, Trekking",
      "ratings": {
        "overall": 4.3,
        "scenery": 5,
        "trekking": 4,
        "natural beauty": 4
      }
    },
    "Baba Reshi Shrine": {
      "description": "Baba Reshi Shrine is a sacred religious site dedicated to the Sufi saint Baba Reshi, known for its historical and spiritual significance.",
      "category": "Religious, Historical",
      "ratings": {
        "overall": 4.6,
        "spirituality": 5,
        "historical significance": 4,
        "serenity": 4
      }
    },
    "Golf Course": {
      "description": "The Gulmarg Golf Course is one of the highest in the world, surrounded by stunning natural beauty and snow-capped peaks.",
      "category": "Recreation, Sports",
      "ratings": {
        "overall": 4.7,
        "scenery": 5,
        "golfing experience": 5,
        "ambiance": 4
      }
    }
  };

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [nearbyShops, setNearbyShops] = useState(null);

  const handlePlaceClick = (placeName) => {
    setSelectedPlace(placeName);
   
    setNearbyShops(nearbyShopPlaceDetail[placeName]);
  
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <div className='gulmargPlaceList'>
      <h2>Recommended Places in Gulmarg</h2>
      <div className='contentG'>
        {Object.keys(gulmargPlaces).map((place) => (
          <span
            key={place}
            className='placeName'
            onClick={() => handlePlaceClick(place)}
          >
            {place}
          </span>
        
        ))}
      </div>
      {selectedPlace && (
        <div className='placeDetails'>
          <h3>{selectedPlace}</h3>
      
          <p><strong>Description:</strong> {gulmargPlaces[selectedPlace].description}</p>
          <p><strong>Category:</strong> {gulmargPlaces[selectedPlace].category}</p>
   
          {nearbyShops && (
            <div>
              
              <h4>Nearby Shops</h4>

              <div className='subcategoryButtons'>
             
                {Object.keys(nearbyShops).map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => handleSubcategoryClick(subcategory)}
                  id='btn1'>
                    {subcategory}
                  </button>
                ))}
               
              </div>
            
              {selectedSubcategory && (
                <div className='listitem'>
                  <h5>{selectedSubcategory}</h5>
                  {Object.values(nearbyShops[selectedSubcategory]).map((shop, index) => (
                    <div key={index}>
                      <p><strong>Shop Name:</strong> {shop['Shop Name']}</p>
                      <p><strong>Closing Time:</strong> {shop['Closing Time']}</p>
                      <p><strong>Website:</strong> <a href={shop['Website']} target="_blank" rel="noopener noreferrer">{shop['Website']}</a></p>
                      <p><strong>Location:</strong> {shop['Location']}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GulmargPlaces;
