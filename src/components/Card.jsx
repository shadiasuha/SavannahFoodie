import '../App.css'

const Card = ({ restaurant }) => {
  return (
    <div>
      <h3>{restaurant.restaurantName}</h3>
      <div>
        <div className="cardGrid">
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
          <p>
            <strong>Address: </strong>
            {restaurant.address}
          </p>
          <p>
            <strong>Phone Number:</strong> {restaurant.phoneNumber}
          </p>
          <p>
            <strong>Hours:</strong> {restaurant.hours}
          </p>
          <p>
            <strong>Cuisine Type:</strong> {restaurant.cuisineType}
          </p>
          <p>
            <strong>Popular Dishes:</strong> {restaurant.popularDishes}
          </p>
          <p>
            <strong>Dining Options:</strong> {restaurant.diningOptions}
          </p>
          <p>
            <strong>Loyalty Program:</strong> {restaurant.loyaltyProgram}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
