import './App.css'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import MainContent from './components/MainContent.jsx'
import StarRating from './components/StarRating.jsx'
import Footer from './components/Footer.jsx'
import restaurants from './restaurants.js'

const App = () => {
  console.log(restaurants)
  return (
    <div>
      <Header />
      <Sidebar />
      <MainContent restaurants={restaurants} />
      <StarRating />
      <Footer />
    </div>
  )
}

export default App
