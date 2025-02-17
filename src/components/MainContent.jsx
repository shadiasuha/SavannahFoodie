import Card from './Card'

const MainContent = ({ restaurants }) => {
  return (
    <div className="cardGrid">
      <div className="cardGridItems">
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default MainContent
