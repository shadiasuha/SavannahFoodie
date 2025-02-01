const restaurants = [
  {
    id: 1,
    restaurantImage:
      'https://savannah4visitors.com/wp-content/uploads/2021/06/ardsleystation.jpg',
    restaurantName: 'Ardsley Station',
    restaurantRating: '4.7',
    address: '102 E Victory Drive Savannah, GA 31405',
    phoneNumber: '(912) 777-5888',
    hours: 'Sunday - Saturday 11:00 AM - 1:00 AM',
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
    restaurantRating: '4.5',
    address: '115 E Bay St, Savannah, GA 31401',
    phoneNumber: '(912) 495-5557',
    hours:
      ' Saturday and Sunday 10:00 AM - 1:00 AM, Monday - Friday 11:00 AM - 1:00 AM ',
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
    restaurantRating: '4.6',
    address: ' 23 Abercorn St, Savannah, GA 31401',
    phoneNumber: '(912) 232-4286',
    hours:
      'Sunday and Monday 5:00 PM - 10:30 PM , Tuesday and Wednesday 11:00 AM - 10:30 PM , Thursday 9:00 AM - 10:30 PM, Friday and Saturday 11:00 AM - 11:00 PM ',
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
    restaurantRating: '4.7',
    address: '2401 Bull Street, Savannah, GA 31401',
    phoneNumber: '(912) 777-5888',
    hours:
      'Monday and Tuesday 8:00 AM - 2:00 PM , Wednesday, Thursday, and Sunday 5:00 PM - 9:00 PM, Friday and Saturday 5:00 PM - 10:00 PM ',
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
    restaurantRating: '4.6',
    address: '52 Barnard St. Savannah, GA 31401',
    phoneNumber: '(912) 236-7777',
    hours:
      'Wednesday, Thursday, and Sunday 4:00 PM - 9:00 PM, Friday and Saturday 4:00 PM  - 11:00 PM',
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
    restaurantRating: '4.4',
    address: '109 Martin Luther King Jr Blvd, Savannah, GA 31401',
    phoneNumber: '(912) 662-5999',
    hours:
      'Sunday 11:00 AM - 3:00 PM (brunch) 5:00 PM - 9:00 PM (dinner), Monday Closed, Tuesday - Friday 5:00 PM - 10:00 PM',
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
    restaurantRating: '4.6',
    address: '114 Barnard St, Savannah, GA 31401',
    phoneNumber: '(912) 232-7899',
    hours: 'Monday - Saturday 5:00 PM - 9:30 PM',
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
    restaurantRating: '4.8',
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
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  }
]

export default restaurants
