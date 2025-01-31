import Card from './Card'

const MainContent = ({ restaurants }) => {
  return (
    <div className="main">
      <h1>Restaurants</h1>
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
