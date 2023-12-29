import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";

const restoList = [
  {
    id: "34633",
    name: "Srikanya",
    cloudinaryImageId: "xvk2jlbijyejf09fdqkp",
    locality: "Opposite Aparna Towers",
    areaName: "Hanuman Nagar",
    costForTwo: "₹400 for two",
    cuisines: ["Biryani", "Andhra"],
    avgRating: 4.1,
    parentId: "7317",
    avgRatingString: "4.1",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 4.6,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "4.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-29 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/srikanya-opposite-aparna-towers-hanuman-nagar-hyderabad-34633",
      type: "WEBLINK",
    },
  },
  {
    id: "27447",
    name: "Pista House Restaurant & Bakery",
    cloudinaryImageId: "v7btfi5brrsijry8j02n",
    locality: "Kondapur",
    areaName: "Kondapur",
    costForTwo: "₹500 for two",
    cuisines: [
      "Biryani",
      "North Indian",
      "Chinese",
      "Kebabs",
      "Mughlai",
      "Tandoor",
    ],
    avgRating: 4.2,
    parentId: "457788",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 33,
      lastMileTravel: 5.5,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "5.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-29 23:59:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹199",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pista-house-restaurant-and-bakery-kondapur-hyderabad-27447",
      type: "WEBLINK",
    },
  },
  {
    id: "343573",
    name: "Theobroma",
    cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
    locality: "Kondapur",
    areaName: "Hitec City",
    costForTwo: "₹400 for two",
    cuisines: ["Desserts"],
    avgRating: 4.5,
    parentId: "1040",
    avgRatingString: "4.5",
    totalRatingsString: "500+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 3.8,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "3.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-29 22:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "newg.png",
          description: "Gourmet",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Gourmet",
                imageId: "newg.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹50 OFF",
      subHeader: "ABOVE ₹399",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/theobroma-kondapur-hitec-city-hyderabad-343573",
      type: "WEBLINK",
    },
  },
  {
    id: "29553",
    name: "Istah - The Mediterranean Way",
    cloudinaryImageId: "9a01f2935fcb5ae05426db8264062102",
    locality: "Madhapur",
    areaName: "Mega Hills",
    costForTwo: "₹250 for two",
    cuisines: [
      "Mediterranean",
      "Snacks",
      "Biryani",
      "Grill",
      "Kebabs",
      "Arabian",
      "Lebanese",
      "Beverages",
      "Desserts",
      "Italian",
      "Turkish",
    ],
    avgRating: 4.3,
    parentId: "3518",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 1.7,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "1.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-30 01:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
          description: "OnlyOnSwiggy",
        },
      ],
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "OnlyOnSwiggy",
                imageId:
                  "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "EVERY ITEM",
      subHeader: "@ ₹139",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},

    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-madhapur-mega-hills-hyderabad-29553",
      type: "WEBLINK",
    },
  },
  {
    id: "61118",
    name: "Telangana Spice Kitchen",
    cloudinaryImageId: "e6ouqiwqpw5vqmfih9s0",
    locality: "JubileeHills check post",
    areaName: "Jubilee Hills",
    costForTwo: "₹1000 for two",
    cuisines: ["Indian", "Chinese"],
    avgRating: 4.3,
    parentId: "19219",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 36,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-29 23:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "newg.png",
          description: "Gourmet",
        },
      ],
    },
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Gourmet",
                imageId: "newg.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/telangana-spice-kitchen-jubileehills-check-post-jubilee-hills-hyderabad-61118",
      type: "WEBLINK",
    },
  },
  {
    id: "300353",
    name: "Barbeque Nation",
    cloudinaryImageId: "wmrvakxsd94zh5hgjrrp",
    locality: "Jubilee Hills",
    areaName: "Jubilee Hills",
    costForTwo: "₹600 for two",
    cuisines: [
      "North Indian",
      "Barbecue",
      "Biryani",
      "Kebabs",
      "Mughlai",
      "Desserts",
    ],
    avgRating: 3.6,
    parentId: "2438",
    avgRatingString: "3.6",
    totalRatingsString: "500+",
    sla: {
      deliveryTime: 34,
      lastMileTravel: 3.8,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "3.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-29 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/barbeque-nation-jubilee-hills-hyderabad-300353",
      type: "WEBLINK",
    },
  },
  {
    id: "61939",
    name: "Tilaks Kitchen",
    cloudinaryImageId: "ykozptgmytnafljvmnne",
    locality: "Ayyappa Society",
    areaName: "Jubilee Hills",
    costForTwo: "₹700 for two",
    cuisines: ["Andhra", "South Indian"],
    avgRating: 4.2,
    parentId: "19218",
    avgRatingString: "4.2",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 31,
      lastMileTravel: 2.2,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "2.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-29 22:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},

    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/tilaks-kitchen-ayyappa-society-jubilee-hills-hyderabad-61939",
      type: "WEBLINK",
    },
  },
  {
    id: "246355",
    name: "Haiking Restaurant",
    cloudinaryImageId: "xavofom1pydewcnfgs6t",
    locality: "Aditya Enclave",
    areaName: "Jubilee Hills",
    costForTwo: "₹1200 for two",
    cuisines: ["Chinese"],
    avgRating: 4.2,
    parentId: "19206",
    avgRatingString: "4.2",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 36,
      lastMileTravel: 3.8,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "3.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-29 22:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},

    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/haiking-restaurant-aditya-enclave-jubilee-hills-hyderabad-246355",
      type: "WEBLINK",
    },
  },
  {
    id: "8785",
    name: "Subway",
    cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
    locality: "Opposite Cyber Gateway",
    areaName: "Hitec City",
    costForTwo: "₹350 for two",
    cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
    avgRating: 3.8,
    parentId: "2",
    avgRatingString: "3.8",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 32,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-30 01:00:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},

    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-opposite-cyber-gateway-hitec-city-hyderabad-8785",
      type: "WEBLINK",
    },
  },
  {
    id: "32126",
    name: "Natural Ice Cream",
    cloudinaryImageId: "rytr0r5ye5zmyj7viicw",
    locality: "Jubilee Hills",
    areaName: "Jubilee Hills",
    costForTwo: "₹150 for two",
    cuisines: ["Ice Cream", "Desserts"],
    avgRating: 4.6,
    parentId: "2093",
    avgRatingString: "4.6",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2.7,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "2.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-29 23:50:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},

    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/natural-ice-cream-jubilee-hills-hyderabad-32126",
      type: "WEBLINK",
    },
  },
  {
    id: "201704",
    name: "The Bowl Company",
    cloudinaryImageId: "bb6049fae59b8a2413a9177eb0338b49",
    locality: "Madhapur",
    areaName: "Mega Hills",
    costForTwo: "₹300 for two",
    cuisines: [
      "Pan-Asian",
      "Continental",
      "North Indian",
      "Desserts",
      "American",
      "Asian",
      "Beverages",
      "Biryani",
      "Chinese",
      "European",
      "Grill",
      "Hyderabadi",
      "Indian",
      "Italian",
      "Kebabs",
      "Lucknowi",
      "Mediterranean",
      "Mexican",
      "Mughlai",
      "Oriental",
      "Pastas",
      "Punjabi",
      "Raja",
    ],
    avgRating: 4.3,
    parentId: "4317",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 23,
      lastMileTravel: 1.7,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "1.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-30 01:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
          description: "OnlyOnSwiggy",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "OnlyOnSwiggy",
                imageId:
                  "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "EVERY ITEM",
      subHeader: "@ ₹139",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},

    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-bowl-company-madhapur-mega-hills-hyderabad-201704",
      type: "WEBLINK",
    },
  },
  {
    id: "444197",
    name: "Wow! Momo",
    cloudinaryImageId: "0984acc0ed7b914206dbbcb90297becc",
    locality: "Jubilee Hills",
    areaName: "Jubilee Hills",
    costForTwo: "₹300 for two",
    cuisines: [
      "Tibetan",
      "Healthy Food",
      "Asian",
      "Chinese",
      "Snacks",
      "Continental",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.3,
    parentId: "1776",
    avgRatingString: "4.3",
    totalRatingsString: "500+",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 2.7,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "2.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-30 00:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},

    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/wow-momo-jubilee-hills-hyderabad-444197",
      type: "WEBLINK",
    },
  },
  {
    id: "9852",
    name: "Baskin Robbins - Ice Cream Desserts",
    cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
    locality: "HUDA Techno Enclave",
    areaName: "Hitec City",
    costForTwo: "₹300 for two",
    cuisines: ["Ice Cream", "Desserts"],
    avgRating: 4.3,
    veg: true,
    parentId: "5588",
    avgRatingString: "4.3",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-30 02:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "D",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "30% OFF",
      subHeader: "UPTO ₹75",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},

    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-huda-techno-enclave-hitec-city-hyderabad-9852",
      type: "WEBLINK",
    },
  },
  {
    id: "238123",
    name: "Sweet Truth - Cake and Desserts",
    cloudinaryImageId: "81cf6bfe2760a45a0caf2e28716ca4d7",
    locality: "Serlingampally",
    areaName: "Hitech City",
    costForTwo: "₹450 for two",
    cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
    avgRating: 4.2,
    parentId: "4444",
    avgRatingString: "4.2",
    totalRatingsString: "500+",
    sla: {
      deliveryTime: 33,
      lastMileTravel: 3.7,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "3.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-29 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹110",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},

    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-serlingampally-hitech-city-hyderabad-238123",
      type: "WEBLINK",
    },
  },
  {
    id: "223425",
    name: "California Burrito",
    cloudinaryImageId: "xctqyz0gmhkpfwz0aax4",
    locality: "Madhapur",
    areaName: "Madhapur",
    costForTwo: "₹250 for two",
    cuisines: [
      "Mexican",
      "American",
      "Salads",
      "Continental",
      "Keto",
      "Healthy Food",
    ],
    avgRating: 4.5,
    parentId: "1252",
    avgRatingString: "4.5",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 29,
      lastMileTravel: 3.8,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "3.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-29 23:00:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},

    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/california-burrito-madhapur-hyderabad-223425",
      type: "WEBLINK",
    },
  },
  {
    id: "1123",
    name: "Ci Gusta!",
    cloudinaryImageId: "1d3161619f27aeb6b9734b665c8a9c99",
    locality: "2nd Phase",
    areaName: "Madhapur",
    costForTwo: "₹700 for two",
    cuisines: ["Italian", "Desserts", "Continental"],
    avgRating: 4.3,
    parentId: "19182",
    avgRatingString: "4.3",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 33,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-30 00:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "newg.png",
          description: "Gourmet",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Gourmet",
                imageId: "newg.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},

    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/ci-gusta-2nd-phase-madhapur-hyderabad-1123",
      type: "WEBLINK",
    },
  },
  {
    id: "18426",
    name: "The Grand Trunk Road",
    cloudinaryImageId: "ty5da315o0thpznwlrgq",
    locality: "Madhapur",
    areaName: "Madhapur",
    costForTwo: "₹300 for two",
    cuisines: ["North Indian", "Chinese", "Desserts", "Beverages"],
    avgRating: 4.3,
    parentId: "4973",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 2.7,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "2.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-30 00:00:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},

    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-grand-trunk-road-madhapur-hyderabad-18426",
      type: "WEBLINK",
    },
  },
  {
    id: "65665",
    name: "Roast ",
    cloudinaryImageId: "4c3c3f544973bcc198947681e81325e4",
    areaName: "Hitech City",
    costForTwo: "₹850 for two",
    cuisines: ["Italian", "Continental"],
    avgRating: 4.4,
    parentId: "9946",
    avgRatingString: "4.4",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-30 01:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "newg.png",
          description: "Gourmet",
        },
      ],
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Gourmet",
                imageId: "newg.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "10% OFF",
      subHeader: "UPTO ₹40",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},

    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/roast-hitech-city-hyderabad-65665",
      type: "WEBLINK",
    },
  },
  {
    id: "54543",
    name: "4 Seasons",
    cloudinaryImageId: "pwgtrym7vnwhtdx157xw",
    locality: "Kohtaguda",
    areaName: "Kothaguda",
    costForTwo: "₹750 for two",
    cuisines: ["Mughlai", "North Indian", "Chinese", "Seafood", "Salads"],
    avgRating: 4.3,
    parentId: "13",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 33,
      lastMileTravel: 3.6,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "3.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-29 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},

    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/4-seasons-kohtaguda-kothaguda-hyderabad-54543",
      type: "WEBLINK",
    },
  },
  {
    id: "7004",
    name: "Almond House",
    cloudinaryImageId: "tli1zbz8llqkztcosyut",
    locality: "Rd Number 36",
    areaName: "Jubilee Hills",
    costForTwo: "₹500 for two",
    cuisines: ["Sweets", "Desserts", "Snacks", "Beverages"],
    avgRating: 4.6,
    veg: true,
    parentId: "40",
    avgRatingString: "4.6",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 4,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "4.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-29 22:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},

    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/almond-house-rd-number-36-jubilee-hills-hyderabad-7004",
      type: "WEBLINK",
    },
  },
];

const HeaderComponent = () => {
  return (
    <div className="header__container">
      <div className="header_image__container">
        {/* <img
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="quick bites"
          className="logo"
        /> */}
        <svg
          className="_8pSp- logo"
          viewBox="0 0 559 825"
          height="49"
          width="34"
          fill="#fc8019"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
            fill="url(#paint0_linear_19447_66107)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_19447_66107"
              x1="445.629"
              y1="63.8626"
              x2="160.773"
              y2="537.598"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF993A"></stop>
              <stop offset="1" stopColor="#F15700"></stop>
            </linearGradient>
          </defs>
        </svg>
        <div>
       <p className="light_gray">Madhapur, Hitech city...</p>
      </div>
      </div>
      <div className="menu_items">
        <ul className="menu_items__list">
          <li className="light_gray">
            <i className="fa fa-search list__icon" aria-hidden="true"></i>Search
          </li>
          <li className="light_gray">
            <i className="fa fa-info-circle list__icon" aria-hidden="true"></i>
            Offers
          </li>
          <li className="light_gray">
          <i className="fa fa-question list__icon" aria-hidden="true"></i>
            Help
          </li>
          <li className="light_gray">
            <i className="fa fa-user-o list__icon" aria-hidden="true"></i>Sign In
          </li>
          <li className="light_gray">
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

const RestoCardComponent = (props) => {
  const { name, avgRating, sla, cuisines, locality, cloudinaryImageId } =
    props?.restoData;
  return (
    <div className="resto_card__container">
      <div className="resto_card__image">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt=""
        />
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
