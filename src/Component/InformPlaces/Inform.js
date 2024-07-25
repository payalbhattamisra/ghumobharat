import React, { useState } from "react";
import "./Inform.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const TouristPlaceForm = () => {
  const [touristPlaceData, setTouristPlaceData] = useState({
    name: "",
    state: "",
    city: "",
    description: "",
    thingsToDo: "",
    bestTimeToVisit: "",
    nearbyAttractions: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTouristPlaceData({
      ...touristPlaceData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response =
      await axios.post(
        "http://localhost:5000/informplace",
        touristPlaceData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );



      const messageElement = document.createElement("div");
      messageElement.id = "signupMessage";
      messageElement.textContent = `application sumited`;
      document.body.appendChild(messageElement);



      setTimeout(() => {

        document.body.removeChild(messageElement);
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="info">
      <span>Inform nearby places</span>

      <form onSubmit={handleSubmit} className="informform">

        <input
          type="text"
          name="name"
          value={touristPlaceData.name}
          onChange={handleChange}
          placeholder=" Name of the Place"
        />
        <input
          type="text"
          name="state"
          value={touristPlaceData.state}
          onChange={handleChange}
          placeholder="state"
        />

        <input
          type="text"
          name="city"
          value={touristPlaceData.city}
          onChange={handleChange}
          placeholder="city"
        />

        <textarea
          name="description"
          value={touristPlaceData.description}
          onChange={handleChange}
          placeholder="description"
        />

        <input
          type="text"
          name="thingsToDo"
          value={touristPlaceData.thingsToDo}
          onChange={handleChange}
          placeholder="thingsToDo"
        />

        <input
          type="text"
          name="bestTimeToVisit"
          value={touristPlaceData.bestTimeToVisit}
          onChange={handleChange}
          placeholder=" Best Time to Visit"
        />

        <input
          type="text"
          name="nearbyAttractions"
          value={touristPlaceData.nearbyAttractions}
          onChange={handleChange}
          placeholder="  Nearby Attractions"
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default TouristPlaceForm;
