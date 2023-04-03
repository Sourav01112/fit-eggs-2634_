import { Navbar } from './components/Navbar'
import { AllRoutes } from './components/AllRoutes'
// import { NavbarCart } from './components/Cart/Navbar'
import '../public/global.css'
// import Cart from './components/Cart/Cart'

function App() {

  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  )
}

export default App
