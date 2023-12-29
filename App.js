import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";

const HeaderComponent = () => {
  return (
    <div className="header__container">
      <div className="header_image__container">
        <img
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="quick bites"
          className="logo"
        />
      </div>
      <div>
        <h1 className="app_title">QUICK BITES</h1>
      </div>
      <div className="menu_items">
        <ul className="menu_items__list">
          <li>
            <i className="fa fa-home list__icon" aria-hidden="true"></i>Home
          </li>
          <li>
            <i className="fa fa-info-circle list__icon" aria-hidden="true"></i>
            Offers
          </li>
          <li>
            <i className="fa fa-user list__icon" aria-hidden="true"></i>Sign In
          </li>
          <li>
            <i
              className="fa fa-cart-arrow-down list__icon"
              aria-hidden="true"
            ></i>
            Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

const RestoCardComponent = () => {
  return (
    <div className="resto_card__container">
      <div className="resto_card__image">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvk2jlbijyejf09fdqkp"
          alt=""
        />
      </div>
      <div className="resto_card__details">
        <h4 className="resto_card__title">Srikanya</h4>
        <div className="resto_card__rating__details">
          <h4 className="resto_card__title"><i className="fa fa-star-o resto_rating_icon" aria-hidden="true"></i>4.3 </h4>
          <h4 className="resto_card__title"> 20-25 min</h4>
        </div>
        <p className="resto_card__title light_gray">Biryani,Andhra</p>
        <p className="resto_card__title light_gray">Hitech city</p>
      </div>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body_container">
      <div className="body_heading__container">
        <h2>What's on your mind?</h2>
        <div className="body_list_container">
          <ul className="menu_items__list">
            <li className="body_list">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNO97FbHTCFtvxLuqzsHpJaUQyTFJjKNWyDw&usqp=CAU"
                alt="Biryani"
                className="body_items_list"
              ></img>
              <span className="body_item__label">Biryani</span>
            </li>
            <li className="body_list">
              <img
                src="https://i0.wp.com/kabilarestro.com/wp-content/uploads/2023/05/chilli-paneer.jpg?fit=640%2C640&ssl=1"
                alt="Pizza"
                className="body_items_list"
              ></img>
              <span className="body_item__label">Pizza</span>
            </li>
            <li className="body_list">
              <img
                src="https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_1339636625.jpg"
                alt="Shawarma"
                className="body_items_list"
              ></img>
              <span className="body_item__label">Shawarma</span>
            </li>
            <li className="body_list">
              <img
                src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles-recipe.jpg"
                alt="Cinese"
                className="body_items_list"
              ></img>
              <span className="body_item__label">Chinese</span>
            </li>
            <li className="body_list">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKYgFoAiPwlUv5rHesa2w6VQHyn-8XsnlUQ&usqp=CAU"
                alt="North Indian"
                className="body_items_list"
              ></img>
              <span className="body_item__label">North Indian</span>
            </li>
            <li className="body_list">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2On8M34wAOoYnwpAawNKJo4q9_auoBifsww&usqp=CAU"
                alt="South Indian"
                className="body_items_list"
              ></img>
              <span className="body_item__label">South Indian</span>
            </li>
          </ul>
        </div>
        <hr></hr>
        <div>
          <h2>Top restaurants near you</h2>
        </div>
        <div className="body_resto_list__container">
          <ul className="body_resto_list">
            <li className="body_resto_list_item"><RestoCardComponent /></li>
            <li className="body_resto_list_item"><RestoCardComponent /></li>
            <li className="body_resto_list_item"><RestoCardComponent /></li>
            <li className="body_resto_list_item"><RestoCardComponent /></li>
            <li className="body_resto_list_item"><RestoCardComponent /></li>
            <li className="body_resto_list_item"><RestoCardComponent /></li>
            <li className="body_resto_list_item"><RestoCardComponent /></li>
            <li className="body_resto_list_item"><RestoCardComponent /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
      <div>footer</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
