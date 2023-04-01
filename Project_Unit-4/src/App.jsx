import { Navbar } from './components/Navbar'
import ImageCarousel from './components/ImageCarousel'
import { AllRoutes } from './components/AllRoutes'
import '../public/global.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {/* <ImageCarousel/> */}
    </div>
  )
}

export default App
