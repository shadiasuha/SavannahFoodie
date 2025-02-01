import './App.css'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import restaurants from './restaurants.js'

const App = () => {
  console.log(restaurants)
  return (
    <div>
      <Header />
      <MainContent restaurants={restaurants} />
      <Footer />
    </div>
  )
}

export default App
