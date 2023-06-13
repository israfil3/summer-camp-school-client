import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './Components/home/Home'
import Footer from './Components/footer/Footer'

function App() {


  return (
    <>
      <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
