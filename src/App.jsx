import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Home from './Pages/Home/Home'
import Nav from './Components/Nav/Nav'
import Gallery from './Pages/Gallery/Gallery'
import Shop from './Pages/Shop/Shop'
import Footer from './Pages/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Home />
      <Gallery />
      <Shop />
      <Footer />
    </>
  )
}

export default App
