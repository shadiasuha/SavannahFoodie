import './Card.css'

const Card = ({ restaurant }) => {
  return (
    <div>
      <h3>{restaurant.restaurantName}</h3>
      <div>
        <p className="subheading">
          <a href={restaurant.website}>Website</a> &nbsp;&nbsp;&nbsp;&nbsp;
          <a href={restaurant.socialMedia.facebook}>Facebook</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href={restaurant.socialMedia.instagram}>Instagram</a>
        </p>
        <img src={restaurant.restaurantImage} alt="" className="gridImage" />
        <p className="subheading">Rating: {restaurant.restaurantRating}</p>
        <p></p>
        <p className="subheading">
          Menus: &nbsp;&nbsp;&nbsp;&nbsp;
          <a href={restaurant.menus.breakfastOrBrunch}>Breakfast</a>{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href={restaurant.menus.lunch}>Lunch</a> &nbsp;&nbsp;&nbsp;&nbsp;
          <a href={restaurant.menus.dinner}>Dinner</a>
        </p>
        <p></p>
        <p>Address: {restaurant.address}</p>
        <p>Phone Number: {restaurant.phoneNumber}</p>
        <p>Hours: {restaurant.hours}</p>
        <p>Cuisine Type: {restaurant.cuisineType}</p>
        <p>Popular Dishes: {restaurant.popularDishes}</p>
        <p>Dining Options: {restaurant.diningOptions}</p>
        <p>Loyalty Program: {restaurant.loyaltyProgram}</p>
        <p>Wheelchair Accessible: {restaurant.wheelchairAccessible}</p>
      </div>
    </div>
  )
}

export default Card
