import Card from './Card'

const MainContent = ({ restaurants }) => {
  return (
    <div className="main">
      <h2 className="subheading">
        25 Must-Try Restaurants for Local and Visting Foodies
      </h2>
      <div className="cardGrid">
        <div className="cardGridItems">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainContent
