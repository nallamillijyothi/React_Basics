import { CARD_URL } from "../utils/constants.js";

const RestoCardComponent = (props) => {
  const { name, avgRating, sla, cuisines, locality, cloudinaryImageId } =
    props?.restoData;
  return (
    <div className="resto_card__container">
      <div className="resto_card__image">
        <img src={CARD_URL + cloudinaryImageId} alt="" />
      </div>
      <div className="resto_card__details">
        <h4 className="resto_card__title">{name}</h4>
        <div className="resto_card__rating__details">
          <h4 className="resto_card__title">
            <i
              className="fa fa-star-o resto_rating_icon"
              aria-hidden="true"
            ></i>
            {avgRating}{" "}
          </h4>
          <h4 className="resto_card__title"> {sla?.slaString}</h4>
        </div>
        <p className="resto_card__title light_gray resto_cuisine">
          {cuisines.join(", ")}
        </p>
        <p className="resto_card__title light_gray">{locality}</p>
      </div>
    </div>
  );
};

export default RestoCardComponent;
