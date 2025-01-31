import '../App.css'

const Card = ({ restaurant }) => {
  return (
    <div>
      <img src={restaurant.restaurantImage} alt="" />
      <h3>{restaurant.restaurantName}</h3>
      <p>Rating: {restaurant.restaurantRating}</p>
      <p>Address: {restaurant.address}</p>
      <p>Phone Number: {restaurant.phoneNumber}</p>
      <p>Hours of Operation: {restaurant.hoursOfOperation}</p>
      <p>Cuisine Type: {restaurant.cuisineType}</p>
      <p>Popular Dishes: {restaurant.popularDishes}</p>
      <p>Breakfast Menu: {restaurant.menus.breakfastOrBrunch}</p>
      <p>Lunch Menu: {restaurant.menus.lunch}</p>
      <p>Dinner Menu: {restaurant.menus.dinner}</p>
      <p>Dining Options: {restaurant.diningOptions}</p>
      <p>Loyalty Program: {restaurant.loyaltyProgram}</p>
      <p>Wheelchair Accessible: {restaurant.wheelchairAccessible}</p>
      <p>Website: {restaurant.website}</p>
      <p>Facebook: {restaurant.socialMedia.facebook}</p>
      <p>Instagram: {restaurant.socialMedia.instagram}</p>
    </div>
  )
}

export default Card
