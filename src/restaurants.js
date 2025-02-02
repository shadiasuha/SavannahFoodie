const restaurants = [
  {
    id: 1,
    restaurantImage:
      'https://savannah4visitors.com/wp-content/uploads/2021/06/ardsleystation.jpg',
    restaurantName: 'Ardsley Station',
    googleReviewRating: '4.7',
    address: '102 E Victory Drive Savannah, GA 31405',
    phoneNumber: '(912) 777-5888',
    hours: 'Sunday - Saturday 11 AM - 1 AM',
    cuisineType: 'American Southern',
    popularDishes: 'Crab Cakes, Truffle Fries, Shrimp & Grits',
    menus: {
      breakfastOrBrunch: 'https://www.ardsleystation.com/menus/#brunch',
      lunch: 'https://www.ardsleystation.com/menus/#lunch',
      dinner: 'https://www.ardsleystation.com/menus/#dinner'
    },
    diningOptions: 'Dine in, Curbside Pickup, Delivery',
    loyaltyProgram: 'Station Rewards',
    website: 'https://www.ardsleystation.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/ArdsleyStation',
      instagram: 'https://www.instagram.com/ardsley_station/'
    }
  },

  {
    id: 2,
    restaurantImage:
      'https://www.savannah.com/wp-content/uploads/sign-saying-Treylor-Park-with-blue-sky-and-palm-tree.jpg',
    restaurantName: 'Treylor Park',
    googleReviewRating: '4.5',
    address: '115 E Bay St, Savannah, GA 31401',
    phoneNumber: '(912) 495-5557',
    hours: ' Saturday and Sunday 10 AM - 1 AM, Monday - Friday 11 AM - 1 AM',
    cuisineType: 'American',
    popularDishes:
      'PB&J Wings, Savannah Hot Chicken & Waffles, Chicken & Pancake Tacos',
    menus: {
      breakfastOrBrunch:
        'https://www.treylorpark.com/wp-content/uploads/TRP-Savannah-Menu-Brunch-20220413-print.pdf',
      lunch:
        'https://www.treylorpark.com/wp-content/uploads/TRP-Savannah-Menu-Nov2024.pdf',
      dinner:
        'https://www.treylorpark.com/wp-content/uploads/TRP-Savannah-Menu-Nov2024.pdf'
    },
    diningOptions: 'Dine in, Delivery, Takeout',
    loyaltyProgram: 'Ballyhoo Rewards',
    website: 'https://www.treylorpark.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/search/top?q=treylor%20park',
      instagram: 'https://www.instagram.com/treylorparkrestaurants/?hl=en'
    }
  },

  {
    id: 3,
    restaurantImage:
      'https://visitsavannah.com/sites/default/files/styles/video_player_poster/public/listing_images/savannah-555460_489790621037444_2070619977_n0-1c941d915056a36_1c941ecc-5056-a36a-084fb0a35651bbc6.jpg?itok=YV0zTIiB',
    restaurantName: 'The Olde Pink House',
    googleReviewRating: '4.6',
    address: ' 23 Abercorn St, Savannah, GA 31401',
    phoneNumber: '(912) 232-4286',
    hours:
      'Sunday and Monday 5 PM - 10:30 PM , Tuesday and Wednesday 11 AM - 10:30 PM , Thursday 9 AM - 10:30 PM, Friday and Saturday 11 AM - 11 PM',
    cuisineType: 'American Southern',
    popularDishes:
      'Crispy Scored Flounder with Apricot Shallot Sauce, Grilled Pork Tenderloin with Bourbon Molasses',
    menus: {
      lunch: 'https://www.theoldepinkhouserestaurant.com/menus',
      dinner: 'https://www.theoldepinkhouserestaurant.com/menus'
    },
    diningOptions: 'Dine in, Takeout',
    loyaltyProgram: 'No',
    website: 'https://www.theoldepinkhouserestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/theoldepinkhouse/',
      instagram: 'https://www.instagram.com/theoldepinkhouse/?hl=en'
    }
  },

  {
    id: 4,
    restaurantImage:
      'https://eatitandlikeit.com/wp-content/uploads/2024/08/B5C4FC94-8CDF-4C61-87C5-BC7941415420.jpg',
    restaurantName: 'Flora and Fauna Savannah',
    googleReviewRating: '4.7',
    address: '2401 Bull Street, Savannah, GA 31401',
    phoneNumber: '(912) 777-5888',
    hours:
      'Monday and Tuesday 8 AM - 2 PM , Wednesday, Thursday, and Sunday 5 PM - 9 PM, Friday and Saturday 5 PM - 10 PM ',
    cuisineType: '',
    popularDishes:
      'Triple Grilled Cheese Sandwich, Potato Crusted Redfish, Potato Gnocchi',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Curbside Pickup, and Delivery',
    loyaltyProgram: 'No',
    website: 'https://www.florafaunasav.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/florafaunasav',
      instagram: 'https://www.instagram.com/floraandfaunasav/?hl=en'
    }
  },
  {
    id: 5,
    restaurantImage:
      'https://www.indieonthemove.com/resize/images/users/7a572aea-6823-4da2-b4c4-d0956c5b86f2/Ohd5DQvFUIuAhJke5zSl07Q7l0jHA9g9XuUD5bOG.jpg',
    restaurantName: 'Jazzd Tapas Bar',
    googleReviewRating: '4.6',
    address: '52 Barnard St. Savannah, GA 31401',
    phoneNumber: '(912) 236-7777',
    hours:
      'Wednesday, Thursday, and Sunday 4 PM - 9 PM, Friday and Saturday 4 PM  - 11 PM',
    cuisineType: '',
    popularDishes:
      'Crab Stew, Beef Tenderloin with Mushroom Risotto, Lamb Chops with Garlic and Rosemary, Truffle Mac  & Cheese ',
    menus: {
      lunch: 'https://jazzdtapasbar.com/tapas-menu/',
      dinner: 'https://jazzdtapasbar.com/tapas-menu/'
    },
    diningOptions: 'Dine in, Delivery, Takeout',
    loyaltyProgram: 'No',
    website: 'https://jazzdtapasbar.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/JazzdTapas',
      instagram: 'https://www.instagram.com/jazzdtapasbar/'
    }
  },
  {
    id: 6,
    restaurantImage:
      'https://vrconcierge.com/wp-content/uploads/2022/09/the-grey-savannah-ga-exterior-1-768x512.jpg',
    restaurantName: 'The Grey',
    googleReviewRating: '4.4',
    address: '109 Martin Luther King Jr Blvd, Savannah, GA 31401',
    phoneNumber: '(912) 662-5999',
    hours:
      'Sunday 11 AM - 3 PM (brunch) 5 PM - 9 PM (dinner), Tuesday - Friday 5 PM - 10 PM',
    cuisineType: '',
    popularDishes: 'Crab Beignets, Foie Gras, Hoe Cakes, Tuna Crudo ',
    menus: {
      breakfastOrBrunch: 'https://thegreyrestaurant.com/brunch/',
      dinner: 'https://thegreyrestaurant.com/dinner/'
    },
    diningOptions: 'Dine in, Curbside Pickup, and Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/TheGreySavannah',
      instagram: 'https://www.instagram.com/thegreysavannah/?hl=en'
    }
  },

  {
    id: 7,
    restaurantImage:
      'https://d1bb1mccaihlpl.cloudfront.net/variants/92u1ap0wzqlyahvvfr0cew4pqrbm/396b2c567ce2cb22ac6891c1f03012a0e8eba3db6b86ec7f20508076314e8ba2',
    restaurantName: 'Alligator Soul',
    googleReviewRating: '4.6',
    address: '114 Barnard St, Savannah, GA 31401',
    phoneNumber: '(912) 232-7899',
    hours: 'Monday - Saturday 5 PM - 9:30 PM',
    cuisineType: '',
    popularDishes: 'Durham Ranch Bison, Alligator Crab Cake, Oysters A La Soul',
    menus: {
      dinner: 'https://alligatorsoul.com/savannah-alligator-soul-food-menu'
    },
    diningOptions: 'Dine in',
    loyaltyProgram: 'No',
    website: 'https://alligatorsoul.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/AlligatorSoulGA',
      instagram: 'https://www.instagram.com/alligatorsoul/?hl=en'
    }
  },

  {
    id: 8,
    restaurantImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmkw-EI_g6VYf0XOTTkvEORsC0o8bRIE67w&s',
    restaurantName: 'Simple Soul of Savannah',
    googleReviewRating: '4.8',
    address: '1915 Montgomery St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Monday and Tuesday 8 AM - 2 PM , Wednesday, Thursday, and Sunday 5 PM - 9 PM, Friday and Saturday 5 PM - 10 PM ',
    cuisineType: 'Soul Food',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 9,
    restaurantImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmkw-EI_g6VYf0XOTTkvEORsC0o8bRIE67w&s',
    restaurantName: 'Madame Butterfly',
    googleReviewRating: '4.5',
    address: '110 W Congress St, Savannah, GA 31401',
    phoneNumber: '(912) 999-8539',
    hours:
      'Sunday Wednesday and Thursday 11 AM - 3 PM 5 PM - 10 PM, Monday and Tuesday 5 PM - 10 PM, Friday and Saturday 11 AM - 3 PM 5 PM - 10:30 PM',
    cuisineType: 'Korean Barbecue',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      lunch:
        'https://madamebutterflysavannah.com/savannah-madame-butterfly-food-menu',
      dinner:
        'https://madamebutterflysavannah.com/savannah-madame-butterfly-food-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 10,
    restaurantImage:
      'https://i.pinimg.com/564x/94/b6/f5/94b6f51ab7989fe490823abab017abc0.jpg',
    restaurantName: 'Vics On the River',
    googleReviewRating: '4.4',
    address: '1915 Montgomery St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Monday and Tuesday 8:00 AM - 2:00 PM , Wednesday, Thursday, and Sunday 5:00 PM - 9:00 PM, Friday and Saturday 5:00 PM - 10:00 PM ',
    cuisineType: 'Southern',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 11,
    restaurantImage:
      'https://myareanetwork-photos.s3.amazonaws.com/bizlist_photos/f/282804_1530558020.jpg?0',
    restaurantName: 'The Public Kitchen & Bar',
    googleReviewRating: '4.5',
    address: '1915 Montgomery St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Monday and Tuesday 8:00 AM - 2:00 PM , Wednesday, Thursday, and Sunday 5:00 PM - 9:00 PM, Friday and Saturday 5:00 PM - 10:00 PM ',
    cuisineType: 'Soul Food',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 12,
    restaurantImage:
      'https://images.squarespace-cdn.com/content/v1/552d34c5e4b0e876878ce8e6/1450759742376-HP4YB37KB0L5WAL1ZEKA/32+Crop.jpg?format=2500w',
    restaurantName: 'Cotton & Rye',
    googleReviewRating: '4.7',
    address: '1915 Montgomery St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Monday and Tuesday 8:00 AM - 2:00 PM , Wednesday, Thursday, and Sunday 5:00 PM - 9:00 PM, Friday and Saturday 5:00 PM - 10:00 PM ',
    cuisineType: 'Soul Food',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 13,
    restaurantImage:
      'https://image.resy.com/3/003/2/65856/bc7cb05af94f86a17b35780828566c05c132ef11/jpg/1:1/800',
    restaurantName: 'Husk Savannah',
    googleReviewRating: '4.7',
    address: '1915 Montgomery St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Monday and Tuesday 8:00 AM - 2:00 PM , Wednesday, Thursday, and Sunday 5:00 PM - 9:00 PM, Friday and Saturday 5:00 PM - 10:00 PM ',
    cuisineType: 'Modern Southern',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 14,
    restaurantImage:
      'https://tdr.aaa.com/tdr-images/variation/1752070?ratio=9:6&rwidth=500',
    restaurantName: 'Saint Bibiana',
    googleReviewRating: '4.7',
    address: '1915 Montgomery St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Monday and Tuesday 8:00 AM - 2:00 PM , Wednesday, Thursday, and Sunday 5:00 PM - 9:00 PM, Friday and Saturday 5:00 PM - 10:00 PM ',
    cuisineType: 'Italian',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 15,
    restaurantImage:
      'https://jtvsbuilders.com/wp-content/uploads/2021/08/common-thread-portfolio-01.jpg',
    restaurantName: 'Common Thread',
    googleReviewRating: '4.7',
    address: '1915 Montgomery St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Monday and Tuesday 8:00 AM - 2:00 PM , Wednesday, Thursday, and Sunday 5:00 PM - 9:00 PM, Friday and Saturday 5:00 PM - 10:00 PM ',
    cuisineType: 'Soul Food',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 16,
    restaurantImage:
      'https://images.getbento.com/accounts/d96d0f4a1856c4306881283280d8e69f/media/images/29876IMG_4556.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&h=600',
    restaurantName: 'Chart House Savannah',
    googleReviewRating: '4.7',
    address: '1915 Montgomery St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Monday and Tuesday 8:00 AM - 2:00 PM , Wednesday, Thursday, and Sunday 5:00 PM - 9:00 PM, Friday and Saturday 5:00 PM - 10:00 PM ',
    cuisineType: 'Soul Food',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 17,
    restaurantImage:
      'https://images.squarespace-cdn.com/content/v1/64a073ebf34ed93ec4021183/1689893531483-AJH6WVQPOYVYQOOTM982/SV+Images+Strangebird-1+-+website.jpg',
    restaurantName: 'Strange Bird Savannah',
    googleReviewRating: '4.7',
    address: '1915 Montgomery St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Monday and Tuesday 8:00 AM - 2:00 PM , Wednesday, Thursday, and Sunday 5:00 PM - 9:00 PM, Friday and Saturday 5:00 PM - 10:00 PM ',
    cuisineType: 'Soul Food',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 18,
    restaurantImage:
      'https://thevendry.com/cdn-cgi/image/width=3840,quality=75,fit=contain,metadata=none,format=auto/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fuploads.thevendry.co%2F24983%2F1678379771110_46470610_10155719703406771_8748619455900155904_n.jpg',
    restaurantName: 'Crystal Beer Parlor',
    googleReviewRating: '4.7',
    address: '1915 Montgomery St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Monday and Tuesday 8:00 AM - 2:00 PM , Wednesday, Thursday, and Sunday 5:00 PM - 9:00 PM, Friday and Saturday 5:00 PM - 10:00 PM ',
    cuisineType: 'Soul Food',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 19,
    restaurantImage:
      'https://jetsetpets.com/wp-content/uploads/elementor/thumbs/Brochus-Family-Tradition-Pet-Friendly-Restaurant-Savannah-GA-qw1n9krsti21dhh966qoab43ig6sr0jspdvwpyl92y.jpg',
    restaurantName: 'Brochus Family Tradition',
    googleReviewRating: '4.7',
    address: '1915 Montgomery St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Monday and Tuesday 8:00 AM - 2:00 PM , Wednesday, Thursday, and Sunday 5:00 PM - 9:00 PM, Friday and Saturday 5:00 PM - 10:00 PM ',
    cuisineType: 'Soul Food',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 20,
    restaurantImage:
      'https://www.mashed.com/img/gallery/the-untold-truth-of-maple-street-biscuit-company/l-intro-1629217538.jpg',
    restaurantName: 'Maple Street Biscuit Company',
    googleReviewRating: '4.7',
    address: '1915 Montgomery St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Monday and Tuesday 8:00 AM - 2:00 PM , Wednesday, Thursday, and Sunday 5:00 PM - 9:00 PM, Friday and Saturday 5:00 PM - 10:00 PM ',
    cuisineType: 'Soul Food',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 21,
    restaurantImage:
      'https://www.savannahnow.com/gcdn/authoring/2018/08/14/NSMN/ghows-GA-7367de05-bda5-4306-e053-0100007fe735-4e94d609.jpeg?width=660&height=440&fit=crop&format=pjpg&auto=webp',
    restaurantName: 'Savannah Seafood Shack',
    googleReviewRating: '4.7',
    address: '1915 Montgomery St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Monday and Tuesday 8:00 AM - 2:00 PM , Wednesday, Thursday, and Sunday 5:00 PM - 9:00 PM, Friday and Saturday 5:00 PM - 10:00 PM ',
    cuisineType: 'Soul Food',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 22,
    restaurantImage: 'https://images.otstatic.com/prod1/32003719/3/huge.jpg',
    restaurantName: 'Elizabeths on 37th',
    googleReviewRating: '4.7',
    address: '1915 Montgomery St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Monday and Tuesday 8:00 AM - 2:00 PM , Wednesday, Thursday, and Sunday 5:00 PM - 9:00 PM, Friday and Saturday 5:00 PM - 10:00 PM ',
    cuisineType: 'Soul Food',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 23,
    restaurantImage:
      'https://coastalelectricga.com/wp-content/uploads/2019/08/IMG_0133webop.jpg',
    restaurantName: 'Starland Yard',
    googleReviewRating: '4.7',
    address: '1915 Montgomery St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Monday and Tuesday 8:00 AM - 2:00 PM , Wednesday, Thursday, and Sunday 5:00 PM - 9:00 PM, Friday and Saturday 5:00 PM - 10:00 PM ',
    cuisineType: 'Soul Food',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 24,
    restaurantImage:
      'https://thepirateshouse.com/wp-content/uploads/2018/08/IMG_9332-1-min.jpg',
    restaurantName: 'The Pirates House',
    googleReviewRating: '4.7',
    address: '1915 Montgomery St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Monday and Tuesday 8:00 AM - 2:00 PM , Wednesday, Thursday, and Sunday 5:00 PM - 9:00 PM, Friday and Saturday 5:00 PM - 10:00 PM ',
    cuisineType: 'American',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 25,
    restaurantImage:
      'https://thevendry.com/cdn-cgi/image/width=3840,quality=75,fit=contain,metadata=none,format=auto/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fuploads.thevendry.co%2F24983%2F1678393036815_SBS-27-copy.jpg',
    restaurantName: 'The Vault Kitchen & Market',
    googleReviewRating: '4.7',
    address: '1915 Montgomery St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Monday and Tuesday 8:00 AM - 2:00 PM , Wednesday, Thursday, and Sunday 5:00 PM - 9:00 PM, Friday and Saturday 5:00 PM - 10:00 PM ',
    cuisineType: 'Soul Food',
    popularDishes:
      'Fried Chicken, Fried or Grilled Salmon and Grits, Chicken & Waffles, Turkey Wings,  Beef Pot Roast, Red Velvet Cake',
    menus: {
      breakfastOrBrunch: 'https://www.florafaunasav.com/daytime-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner: 'https://www.florafaunasav.com/supper-club-menu'
    },
    diningOptions: 'Dine in, Pickup, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thegreyrestaurant.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  }
]

export default restaurants
