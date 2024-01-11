import RestoCardComponent from "./RestoCardComponent";
import { carousalList } from "../utils/mockData";
import Search from "./Search";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const BodyComponent = () => {
  const [restoOList, setRestoList] = useState([]);
  console.log("usestae",useState());

  useEffect(() => {
    fetchRestoData();
  }, []);

  const fetchRestoData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4556724&lng=78.3991533&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTI"
    );
    const jsonData = await data.json();
    setRestoList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  function searchItem(data) {
    if (data != "") {
      str = data.toLowerCase();
      const dataa = restoOList.filter((item) => {
        return item.info.cuisines.some((cuisine) => {
          return (
            cuisine.toLowerCase().includes(str) ||
            item.info.name.toLowerCase().includes(str)
          );
        });
      });
      if(dataa.length == 0){
        fetchRestoData();
      }
      else{
        setRestoList(dataa);
      }
    } else {
      fetchRestoData();
    }
  }

  return (
    <div className="body_container">
      <div className="body_heading__container">
        <div className="body_search_container">
          <Search onSearch={searchItem} />
        </div>
        <h2>What's on your mind?</h2>
        <div className="body_list_container">
          <ul className="menu_items__list">
            {carousalList.map((list_item) => {
              return (
                <li className="body_list menu_item" key={list_item.id}>
                  <img
                    src={list_item.url}
                    alt={list_item.alt}
                    className="body_items_list"
                  ></img>
                  <span className="body_item__label">{list_item.alt}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <hr></hr>
        <div>
          <h2>Top restaurants near you</h2>
        </div>
        <div className="body_resto_list__container">
          <ul className="body_resto_list">
            {restoOList.length === 0 ? (
              <ShimmerUI />
            ) : (
              restoOList.map((restaurant) => {
                return (
                  <li className="body_resto_list_item" key={restaurant.info.id}>
                    <RestoCardComponent restoData={restaurant.info} />
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
