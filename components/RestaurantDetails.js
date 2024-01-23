import { useParams } from "react-router-dom";
import { MENU_CARD_URL } from "../utils/constants";
import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestaurantDetails = () => {
  const { id } = useParams();
  const restoInfo = useRestaurantDetails(id);

  if (restoInfo == null) return <h1>No Data Available</h1>;
  const {
    name,
    cuisines,
    areaName,
    sla,
    avgRating,
    totalRatingsString,
    expectationNotifiers,
    costForTwoMessage,
  } = restoInfo?.data?.cards[0]?.card?.card?.info;
  const { title, itemCards: restoMenuData } =
    restoInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;
  return (
    <div className="resto_details_container">
      <div className="resto_details_heading">
        <div className="resto_detail_title">
          <h3>{name}</h3>
          <small className="light_gray">{cuisines.join(",")}</small>
          <div>
            <small className="light_gray">
              {areaName} {sla?.lastMileTravelString}
            </small>
          </div>
        </div>
        <div className="resto_detail_rating">
          <div className="resto_details_rating_card">
            <div className="light_gray ">
              {" "}
              <i
                className="fa fa-star-o resto_rating_icon"
                aria-hidden="true"
              ></i>
              {avgRating}
            </div>
            <hr></hr>
            <div className="light_gray ">{totalRatingsString}</div>
          </div>
        </div>
      </div>
      <div className="resto_detail_distance">
        <i className="fa fa-info-circle" aria-hidden="true"></i>{" "}
        <small className="light_gray">{expectationNotifiers[0]?.text}</small>
      </div>
      <hr className="resto_detail_dotted_line"></hr>
      <div className="resto_detail_cost">
        <div className="resto_detail_section2">
          <div className="resto_detail_section2_1">
            <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
            <h4>{sla.slaString}</h4>
          </div>
          <div className="resto_detail_section2_1">
            <h4>{costForTwoMessage}</h4>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="resto_detail_items_container">
        <div>{title}</div>
        <div>
          {restoMenuData.map((item) => {
            return (
              <>
                <div className="resto_menu_block">
                  <div>
                    <div>{item?.card?.info?.name}</div>
                    <div>
                      <i class="fa fa-inr" aria-hidden="true"></i>
                      {item?.card?.info?.price / 100}
                    </div>
                  </div>
                  <div>
                    <img
                      className="menu_img"
                      src={MENU_CARD_URL + item?.card?.info?.imageId}
                      alt={item?.card?.info?.name}
                    />
                  </div>
                </div>
                <hr></hr>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
