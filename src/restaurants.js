const restaurants = [
  {
    id: 1,
    restaurantImage: '/RestaurantPics/Ardsley.png',
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
    restaurantImage: '/RestaurantPics/Treylor.png',
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
    restaurantImage: '/RestaurantPics/Pink.png',
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
    restaurantImage: '/RestaurantPics/Flora.png',
    restaurantName: 'Flora and Fauna',
    googleReviewRating: '4.7',
    address: '2401 Bull Street, Savannah, GA 31401',
    phoneNumber: '(912) 777-5888',
    hours:
      'Monday and Tuesday 8 AM - 2 PM , Wednesday, Thursday, and Sunday 5 PM - 9 PM, Friday and Saturday 5 PM - 10 PM ',
    cuisineType: 'American Comfort',
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
    restaurantImage: '/RestaurantPics/Jazzd.png',
    restaurantName: 'Jazzd Tapas Bar',
    googleReviewRating: '4.6',
    address: '52 Barnard St. Savannah, GA 31401',
    phoneNumber: '(912) 236-7777',
    hours:
      'Wednesday, Thursday, and Sunday 4 PM - 9 PM, Friday and Saturday 4 PM  - 11 PM',
    cuisineType: 'Spanish',
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
    cuisineType: 'American Southern',
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
    cuisineType: 'Modern Southern',
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
    restaurantName: 'Simple Soul',
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
    diningOptions: 'Dine in, Delivery, Takeout',
    loyaltyProgram: 'No',
    socialMedia: {
      facebook: 'https://www.facebook.com/simplesoulcafe',
      instagram: 'https://www.instagram.com/simplesoulsavannah/'
    }
  },

  {
    id: 9,
    restaurantImage:
      'https://welcometosavannah.com/wp-content/uploads/2022/05/Madame-Butterfly-Restaurant-Hi_Res-4.jpg',
    restaurantName: 'Madame Butterfly',
    googleReviewRating: '4.5',
    address: '110 W Congress St, Savannah, GA 31401',
    phoneNumber: '(912) 999-8539',
    hours:
      'Sunday Wednesday and Thursday 11 AM - 3 PM 5 PM - 10 PM, Monday and Tuesday 5 PM - 10 PM, Friday and Saturday 11 AM - 3 PM 5 PM - 10:30 PM',
    cuisineType: 'Korean Barbecue',
    popularDishes:
      'Crab Rangoon Croquettes, Madame Bang Shrimp, Korean Marinated Short Ribs, Seoul-ful Wagyu Burger with Egg, Bibimbap',
    menus: {
      lunch:
        'https://madamebutterflysavannah.com/savannah-madame-butterfly-food-menu',
      dinner:
        'https://madamebutterflysavannah.com/savannah-madame-butterfly-food-menu'
    },
    diningOptions: 'Dine in, Delivery, Takeout',
    loyaltyProgram: 'Madame Butterfly Rewards',
    website: 'https://madamebutterflysavannah.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/madamebutterflysavannah/#',
      instagram: 'https://www.instagram.com/madamebutterflysavannah/#'
    }
  },

  {
    id: 10,
    restaurantImage:
      'https://i.pinimg.com/564x/94/b6/f5/94b6f51ab7989fe490823abab017abc0.jpg',
    restaurantName: 'Vics On the River',
    googleReviewRating: '4.4',
    address: '26 E Bay St, Savannah, GA 31401',
    phoneNumber: '(912) 721-1000',
    hours: 'Sunday - Saturday 11 AM  - 10 PM ',
    cuisineType: 'Southern',
    popularDishes:
      'Fried Green Tomatoes, Jumbo Lump Crab Cake, Shrimp & Grits, Pecan Fried Flounder, Braised Beef Short Rib',
    menus: {
      lunch: 'https://www.vicsontheriver.com/menu/',
      dinner: 'https://www.vicsontheriver.com/menu/'
    },
    diningOptions: 'Dine in, Takeout',
    loyaltyProgram: 'No',
    website: 'https://www.vicsontheriver.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/VicsOnTheRiverGA',
      instagram: 'https://www.instagram.com/vicsontheriverga/'
    }
  },

  {
    id: 11,
    restaurantImage:
      'https://myareanetwork-photos.s3.amazonaws.com/bizlist_photos/f/282804_1530558020.jpg?0',
    restaurantName: 'Public Kitchen & Bar',
    googleReviewRating: '4.5',
    address: '1 W Liberty St, Savannah, GA 31401',
    phoneNumber: '(912) 200-4045',
    hours:
      'Sunday - Thursday 11 AM - 3:30 PM 4:30 PM - 10:00 PM, Friday and Saturday 11 AM - 3:30 PM 4:30 PM - 10:30 PM ',
    cuisineType: 'American',
    popularDishes:
      'Lamb Burger, Savannah Shrimp & Grits, Grilled Salmon, Pumpkin Curry',
    menus: {
      lunch:
        'https://www.thepublickitchen.com/_files/ugd/5e1d09_be00c63b6bf246069fe0a427d244bf54.pdf',
      dinner:
        'https://www.thepublickitchen.com/_files/ugd/5e1d09_74a5c8e6a62f474eb7400d9868f88c0f.pdf'
    },
    diningOptions: 'Dine in, Delivery, Takeout',
    loyaltyProgram: 'No',
    website: 'https://www.thepublickitchen.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/thepublickitchenandbar',
      instagram:
        'https://www.instagram.com/explore/locations/36207126/the-public-kitchen-and-bar-sav/'
    }
  },

  {
    id: 12,
    restaurantImage:
      'https://images.squarespace-cdn.com/content/v1/552d34c5e4b0e876878ce8e6/1450759742376-HP4YB37KB0L5WAL1ZEKA/32+Crop.jpg?format=2500w',
    restaurantName: 'Cotton & Rye',
    googleReviewRating: '4.7',
    address: '1801 Habersham St, Savannah, GA 31401',
    phoneNumber: ' (912) 777-6286',
    hours: 'Tuesday - Saturday 5 PM - 10 PM ',
    cuisineType: 'American',
    popularDishes:
      'Wagyu Beef Tartare, Savannah Crab Rice, Bucatini & Mussels, Crispy Trout',
    menus: {
      dinner: 'https://www.cottonandrye.com/menus#new-page'
    },
    diningOptions: 'Dine in, Takeout',
    loyaltyProgram: 'No',
    website: 'https://www.cottonandrye.com/',
    socialMedia: {
      facebook: 'hhttps://www.facebook.com/cotrye',
      instagram:
        'https://www.instagram.com/explore/locations/858197970/cotton-rye/'
    }
  },

  {
    id: 13,
    restaurantImage:
      'https://image.resy.com/3/003/2/65856/bc7cb05af94f86a17b35780828566c05c132ef11/jpg/1:1/800',
    restaurantName: 'Husk Savannah',
    googleReviewRating: '4.4',
    address: '12 W Oglethorpe Ave, Savannah, GA 31401',
    phoneNumber: ' (912) 349-2600',
    hours:
      'Monday - Friday 5PM - 9:45 PM, Saturday and Sunday 10 AM - 9:45 PM ',
    cuisineType: 'Modern Southern',
    popularDishes:
      'Southern Caviar, Manchester Farm Quail with Plum, Swordfish, Dark Chocolate Mousse',

    menus: {
      dinner:
        'https://husksavannah.com/wp-content/uploads/2025/02/Dinner-2.1.25.pdf'
    },
    diningOptions: 'Dine in, Delivery, Takeout',
    loyaltyProgram: 'No',
    website: 'https://husksavannah.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/husksavannah',
      instagram:
        'https://www.instagram.com/explore/locations/1682251291895780/husk-savannah/'
    }
  },

  {
    id: 14,
    restaurantImage:
      'https://tdr.aaa.com/tdr-images/variation/1752070?ratio=9:6&rwidth=500',
    restaurantName: 'Saint Bibiana',
    googleReviewRating: '4.8',
    address: '700 Drayton St, Savannah, GA 31401',
    phoneNumber: '(912) 721-5002',
    hours:
      'Monday - Friday 5 PM - 10 PM, Saturday and Sunday 9 AM - 1 PM 5 PM - 10 PM',
    cuisineType: 'Italian',
    popularDishes: 'Grilled Octopus, Campanella, Duck Rotolo',
    menus: {
      lunch: 'https://www.saint-bibiana.com/menu/',
      dinner: 'https://www.saint-bibiana.com/menu/'
    },
    diningOptions: 'Dine in',
    loyaltyProgram: 'No',
    website: 'https://www.saint-bibiana.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/saintbibianasavannah',
      instagram: 'https://www.instagram.com/saintbibiana/?hl=en'
    }
  },

  {
    id: 15,
    restaurantImage:
      'https://jtvsbuilders.com/wp-content/uploads/2021/08/common-thread-portfolio-01.jpg',
    restaurantName: 'Common Thread',
    googleReviewRating: '4.7',
    address: '122 E 37th St, Savannah, GA 31401',
    phoneNumber: ' (912) 944-7482',
    hours: 'Sunday - Thursday 5 PM - 9 PM, Friday and Saturday 5 PM - 10 PM',
    cuisineType: 'American, Seafood',
    popularDishes:
      'Yellowfin Tuna, Flounder Crudo, Poached Shrimp, Striped Bass',
    menus: {
      dinner: 'https://www.commonthreadsavannah.com/dinner'
    },
    diningOptions: 'Dine in',
    loyaltyProgram: 'No',
    website: 'https://www.commonthreadsavannah.com//',
    socialMedia: {
      facebook: 'https://www.facebook.com/commonthreadsavannah',
      instagram: 'https://www.instagram.com/commonthreadsav/?hl=en'
    }
  },

  {
    id: 16,
    restaurantImage:
      'https://images.getbento.com/accounts/d96d0f4a1856c4306881283280d8e69f/media/images/29876IMG_4556.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&h=600',
    restaurantName: 'Chart House Savannah',
    googleReviewRating: '4.1',
    address: '202 W Bay St, Savannah, GA 31401',
    phoneNumber: '(912) 234-6686',
    hours:
      'Monday - Thursday 4:30 PM - 9 PM, Friday 4:30 PM - 10 PM, Saturday 3PM - 10 PM, Sunday 3 PM - 9 PM ',
    cuisineType: 'Seafood, Steakhouse',
    popularDishes:
      'Coconut Crunchy Shrimp, Herb Crusted Prime Rib, Roasted Lamb Chops, Wild Caught King Crab',
    menus: {
      dinner:
        'https://www.chart-house.com/location/chart-house-savannah-ga/#menus/'
    },
    diningOptions: 'Dine in, Takeout, Delivery',
    loyaltyProgram: 'Landrys Select Club',
    website: 'https://www.chart-house.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/ChartHouseSavannah',
      instagram:
        'https://www.instagram.com/explore/locations/790111606/chart-house-savannah/'
    }
  },

  {
    id: 17,
    restaurantImage:
      'https://images.squarespace-cdn.com/content/v1/64a073ebf34ed93ec4021183/1689893531483-AJH6WVQPOYVYQOOTM982/SV+Images+Strangebird-1+-+website.jpg',
    restaurantName: 'Strange Bird Savannah',
    googleReviewRating: '4.7',
    address: '1220 Barnard St, Savannah, GA 31401',
    phoneNumber: ' (912) 250-9500',
    hours: 'Sunday, Monday, Wednesday - Saturday 11 AM - 9 PM',
    cuisineType: 'Mexican',
    popularDishes:
      'Tacos, Birria Burgers, Smokehouse Plate, Crispy Chicken Sandwich',
    menus: {
      lunch: 'https://www.strangebirdsavannah.com/menu',
      dinner: 'https://www.strangebirdsavannah.com/menu'
    },
    diningOptions: 'Dine in, Takeout, Delivery',
    loyaltyProgram: 'No',
    website: 'https://www.strangebirdsavannah.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/strangebirdsavannah',
      instagram: 'https://www.instagram.com/strangebird_savannah/?hl=en'
    }
  },

  {
    id: 18,
    restaurantImage:
      'https://thevendry.com/cdn-cgi/image/width=3840,quality=75,fit=contain,metadata=none,format=auto/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fuploads.thevendry.co%2F24983%2F1678379771110_46470610_10155719703406771_8748619455900155904_n.jpg',
    restaurantName: 'Crystal Beer Parlor',
    googleReviewRating: '4.7',
    address: '301 W Jones St, Savannah, GA 31401',
    phoneNumber: '(912) 349-1000',
    hours: 'Sunday, Tuesday - Saturday 11 AM - 9 PM',
    cuisineType: 'American',
    popularDishes:
      'Creamy Crab Stew, Crystal Crabpuppies, Baked Southern Deviled Crab, Shrimp and Grits',
    menus: {
      lunch: 'https://www.crystalbeerparlor.com/menu/',
      dinner: 'https://www.crystalbeerparlor.com/menu/'
    },
    diningOptions: 'Dine in, Takeout, Delivery',
    loyaltyProgram: 'No',
    website: 'https://www.crystalbeerparlor.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/CrystalBeerParlor/?ref=mf',
      instagram: 'https://www.instagram.com/crystalbeerparlor'
    }
  },

  {
    id: 19,
    restaurantImage:
      'https://jetsetpets.com/wp-content/uploads/elementor/thumbs/Brochus-Family-Tradition-Pet-Friendly-Restaurant-Savannah-GA-qw1n9krsti21dhh966qoab43ig6sr0jspdvwpyl92y.jpg',
    restaurantName: 'Brochus Family Tradition',
    googleReviewRating: '4.7',
    address: '2400 Bull St Suite 8, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Wednesday and Thursday - 5 PM - 9 PM, Friday and Saturday 5 PM  - 10 PM',
    cuisineType: 'American, Seafood, Southern',
    popularDishes:
      'Chicken Dinner, Chicken Liver on Toast, Mahi Mahi, Swordfish, Banana Pudding',
    menus: {
      dinner:
        'https://static1.squarespace.com/static/62cc42e468af4e49eec184d5/t/6797b43241353161ff9ebdc0/1737995314669/Brochus_Menu.pdf'
    },
    diningOptions: 'Dine in, Takeout',
    loyaltyProgram: 'No',
    website: 'https://www.brochusfamilytradition.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/brochusfamilytradition',
      instagram: 'http://www.instagram.com/brochus_restaurant'
    }
  },

  {
    id: 20,
    restaurantImage:
      'https://www.mashed.com/img/gallery/the-untold-truth-of-maple-street-biscuit-company/l-intro-1629217538.jpg',
    restaurantName: 'Maple Street Biscuit Company',
    googleReviewRating: '4.5',
    address: '220 W Broughton St, Savannah, GA 31401',
    phoneNumber: '(912) 349-7301',
    hours: 'Monday - Friday 7 AM - 2 PM, Saturday and Sunday 7 AM - 3 PM',
    cuisineType: 'Southern Comfort',
    popularDishes:
      'Chicken Biscuit, Chicken & Waffles, Smash Browns, Breakfast Tacos',
    menus: {
      breakfastOrBrunch: 'https://www.maplestreetbiscuits.com/menu',
      lunch: 'https://www.maplestreetbiscuits.com/menu'
    },
    diningOptions: 'Dine in, Takeout, Delivery',
    loyaltyProgram: 'Coffee Club',
    website:
      'https://www.maplestreetbiscuits.com/?olonwp=JjBtp_vMLk25gkYh_bnoiQ',
    socialMedia: {
      facebook: 'https://www.facebook.com/profile.php?id=100091579701315',
      instagram:
        'https://www.instagram.com/explore/locations/106714582396594/maple-street-biscuit-company/'
    }
  },

  {
    id: 21,
    restaurantImage:
      'https://www.savannahnow.com/gcdn/authoring/2018/08/14/NSMN/ghows-GA-7367de05-bda5-4306-e053-0100007fe735-4e94d609.jpeg?width=660&height=440&fit=crop&format=pjpg&auto=webp',
    restaurantName: 'Savannah Seafood Shack',
    googleReviewRating: '4.5',
    address: '116 E Broughton St, Savannah, GA 31401',
    phoneNumber: ' (912) 344-4393',
    hours:
      'Monday - Thursday 11 AM - 9 PM, Friday and Saturday 11 AM - 10 PM, Sunday 12 PM - 9 PM',
    cuisineType: 'Southern-Style Seafood',
    popularDishes: 'Low Country Boil, Po Boys, Clam Chowder',
    menus: {
      lunch: 'https://savannahseafoodshack.com/menu/',
      dinner: 'https://savannahseafoodshack.com/menu/'
    },
    diningOptions: 'Dine in, Takeout, Delivery',
    loyaltyProgram: 'Savannah Shack Loyalty Program',
    website: 'https://savannahseafoodshack.com/',
    socialMedia: {
      facebook: 'http://www.facebook.com/4941042',
      instagram: 'http://instagram.com/savannahseafoodshack'
    }
  },

  {
    id: 22,
    restaurantImage: 'https://images.otstatic.com/prod1/32003719/3/huge.jpg',
    restaurantName: 'Elizabeths on 37th',
    googleReviewRating: '4.7',
    address: '105 E 37th St, Savannah, GA 31401',
    phoneNumber: ' (912) 236-5547',
    hours: 'Monday - Thursday 5:30 PM - 9 PM, Friday and Saturday 5 PM - 9 PM',
    cuisineType: 'Southern Seafood',
    popularDishes:
      'Maine Lobster Taco, Filet of Flounder, Pepper Crusted  Beef Tenderloin, Potato Crusted Red Snapper',
    menus: {
      dinner: 'https://www.elizabethon37th.net/menus-1'
    },
    diningOptions: 'Dine in',
    loyaltyProgram: 'No',
    website: 'https://www.elizabethon37th.net/',
    socialMedia: {
      facebook: 'https://www.facebook.com/Elizabeth-On-37th-154352171255708/',
      instagram:
        'https://www.instagram.com/explore/locations/6173819/elizabeth-on-37th/'
    }
  },

  {
    id: 23,
    restaurantImage:
      'https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/68/36/0b/photo9jpg.jpg',
    restaurantName: 'The Collins Quarter',
    googleReviewRating: '4.6',
    address: '151 Bull St, Savannah, GA 31401',
    phoneNumber: '(912) 777-4147',
    hours:
      'Monday and Tuesday 8 AM - 3 PM , Wednesday 8 AM - 3 PM 4PM - 9 PM, Thursday - Saturday 8 AM - 3 PM 5 PM - 10 PM, Sunday 8 AM - 3 PM 5 PM - 10 PM',
    cuisineType: 'Australian',
    popularDishes:
      'Prince Edward Island Mussels, Pear and Goat Cheese Salad, Chicken Roulade, Icelandic Salmon',
    menus: {
      breakfastOrBrunch:
        'https://downtown.thecollinsquarter.com/savannah-collins-quarter-food-menu',
      lunch: 'https://www.florafaunasav.com/supper-club-menu',
      dinner:
        'https://downtown.thecollinsquarter.com/savannah-collins-quarter-food-menu'
    },
    diningOptions: 'Dine in, Takeout',
    loyaltyProgram: 'No',
    website: 'https://downtown.thecollinsquarter.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/thecollinsquarter',
      instagram:
        'https://www.instagram.com/explore/locations/262695088/the-collins-quarter/'
    }
  },

  {
    id: 24,
    restaurantImage:
      'https://thepirateshouse.com/wp-content/uploads/2018/08/IMG_9332-1-min.jpg',
    restaurantName: 'The Pirates House',
    googleReviewRating: '4.3',
    address: '20 E Broad St, Savannah, GA 31401',
    phoneNumber: '(912) 777-3066',
    hours:
      'Sunday - Thursday 11 AM - 9 PM, Friday and Saturday 11 AM - 9:30 PM',
    cuisineType: 'Southern',
    popularDishes:
      'She Crab Soup, Corn Fritters with Blackened Shrimp, Chicken Gumbo, Honey Pecan Fried Chicken',
    menus: {
      lunch: 'https://thepirateshouse.com/lunch-menu/',
      dinner: 'https://thepirateshouse.com/dinner-menu/'
    },
    diningOptions: 'Dine in, Takeout, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thepirateshouse.com/',
    socialMedia: {
      facebook: 'https://www.facebook.com/historicpirateshouse',
      instagram:
        'https://www.instagram.com/explore/locations/737768/the-pirates-house/?hl=en'
    }
  },

  {
    id: 25,
    restaurantImage:
      'https://thevendry.com/cdn-cgi/image/width=3840,quality=75,fit=contain,metadata=none,format=auto/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fuploads.thevendry.co%2F24983%2F1678393036815_SBS-27-copy.jpg',
    restaurantName: 'The Vault',
    googleReviewRating: '4.6',
    address: '2112 Bull St, Savannah, GA 31401',
    phoneNumber: '(912) 201-1950',
    hours:
      'Monday - Thursday 11 AM - 3 PM 5 PM - 10 PM, Friday and Saturday 11 AM - 3 PM 5 PM - 10:30 PM, Sunday 12 PM - 3 PM 5 PM - 10 PM',
    cuisineType: 'American',
    popularDishes:
      'Curry Fish, Turmeric Chicken, Lemon Coconut Soup, Spicy Tuna Tartare',
    menus: {
      breakfastOrBrunch:
        'https://thevaultkitchen.com/savannah-starland-district-the-vault-kitchen-and-market-food-menu',
      lunch:
        'https://thevaultkitchen.com/savannah-starland-district-the-vault-kitchen-and-market-food-menu',
      dinner:
        'https://thevaultkitchen.com/savannah-starland-district-the-vault-kitchen-and-market-food-menu'
    },
    diningOptions: 'Dine in, Takeout, Delivery',
    loyaltyProgram: 'No',
    website: 'https://thevaultkitchen.com/',
    socialMedia: {
      instagram: 'https://www.instagram.com/thevaultkitchen/'
    }
  }
]

export default restaurants
