import { useEffect, useState } from "react";

const useRestaurantDetails = (restoId) => {
    const [restoInfo, setRestoInfo] = useState(null)
  useEffect(() => {
    fetchRestoDetails();
  }, []);

  const fetchRestoDetails = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4556724&lng=78.3991533&restaurantId=${restoId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await data.json();
    setRestoInfo(jsonData)
  };
  return restoInfo;
};

export default useRestaurantDetails;
