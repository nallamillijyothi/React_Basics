import RestoCardComponent from "./RestoCardComponent";
import { restoList, carousalList } from "../utils/mockData";

const BodyComponent = () => {
  return (
    <div className="body_container">
      <div className="body_heading__container">
        <h2>What's on your mind?</h2>
        <div className="body_list_container">
          <ul className="menu_items__list">
            {carousalList.map((list_item) => {
              return (
                <li className="body_list" key={list_item.id}>
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
            {restoList.map((restaurant) => {
              return (
                <li className="body_resto_list_item" key={restaurant.id}>
                  <RestoCardComponent restoData={restaurant} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
