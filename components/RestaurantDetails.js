import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_CARD_URL } from "../utils/constants";

const RestaurantDetails = () => {
  const [restoHeadingData, setRestoHeadingData] = useState(null);
  const [restoMenuData, setRestoMenuData] = useState(null);
  const [isRestoDataAvailable, setIsRestoDataAvailable] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    fetchRestoDetails();
  }, []);

  const fetchRestoDetails = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4556724&lng=78.3991533&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await data.json();
    setRestoHeadingData(jsonData?.data?.cards[0]?.card?.card?.info);
    setRestoMenuData(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    console.log(restoHeadingData);
    setIsRestoDataAvailable(true);
  };

  return isRestoDataAvailable == true ? (
    <div className="resto_details_container">
      <div className="resto_details_heading">
        <div className="resto_detail_title">
          <h3>{restoHeadingData?.name}</h3>
          <small className="light_gray">
            {restoHeadingData?.cuisines.join(",")}
          </small>
          <div>
            <small className="light_gray">
              {restoHeadingData?.areaName}{" "}
              {restoHeadingData?.sla?.lastMileTravelString}
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
              {restoHeadingData?.avgRating}
            </div>
            <hr></hr>
            <div className="light_gray ">
              {restoHeadingData?.totalRatingsString}
            </div>
          </div>
        </div>
      </div>
      <div className="resto_detail_distance">
        <i className="fa fa-info-circle" aria-hidden="true"></i>{" "}
        <small className="light_gray">
          {restoHeadingData?.expectationNotifiers[0]?.text}
        </small>
      </div>
      <hr className="resto_detail_dotted_line"></hr>
      <div className="resto_detail_cost">
        <div className="resto_detail_section2">
          <div className="resto_detail_section2_1">
            <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
            <h4>{restoHeadingData?.sla.slaString}</h4>
          </div>
          <div className="resto_detail_section2_1">
            <h4>{restoHeadingData?.costForTwoMessage}</h4>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="resto_detail_items_container">
        <div>{restoMenuData[1]?.card?.card?.title}</div>
        <div>
          {restoMenuData[1]?.card?.card?.itemCards?.map((item) => {
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
                  <img className="menu_img"
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
  ) : (
    <h1>No Data Available</h1>
  );
};

export default RestaurantDetails;
