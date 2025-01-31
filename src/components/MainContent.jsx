import Card from './Card'

const MainContent = ({ restaurants }) => {
  return (
    <div className="main">
      <h2 className="subheading">Restaurants</h2>
      <div className="cardGrid">
        <ul>
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} restaurant={restaurant} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MainContent
