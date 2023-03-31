import RestaurantCard from "./RestaurantCard";
import { filterData } from "../utils/helper";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useAllRestaurant from "../utils/useAllRestaurant";
import useFilteredRestaurants from "../utils/useFilteredRestaurants";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    setFilteredRestaurants(allRestaurants);
    console.log("body-filteredRestaurants,", filteredRestaurants);
  }, []);

  useEffect(() => {
    //API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline, Please check your internet Connection</h1>;
  }

  //console.log("render");
  //early return(not render component)
  if (!allRestaurants) return null;
  //  if(filteredRestaurants?.length===0) return <h2>No Restaurant match your filter...</h2>
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {console.log("belowshimmer-filteredRestaurants,", filteredRestaurants)}

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            //filter data
            // debugger;
            const data = filterData(searchText, allRestaurants);
            //update the state - restaurants
            console.log("DATA", data);
            setFilteredRestaurants(data);
            console.log("buton", filteredRestaurants);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {console.log("CARD-FILTERED REST", filteredRestaurants)}
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
