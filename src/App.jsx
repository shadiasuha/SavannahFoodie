import './App.css'
import Header from './components/Header.jsx'
import Sidebar from './Sidebar.jsx'
import Card from './components/Card.jsx'
import Restaurant from './components/Restaurant.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Card />
      <Restaurant />
      <Footer />
    </div>
  )
}

export default App
