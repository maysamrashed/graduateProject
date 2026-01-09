import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from "../components/ScrollToTop.jsx";

export default function Root() {
  return (
    <>
        <Navbar/>
         <ScrollToTop />
        <Outlet/>
        <Footer/>
    </>
  )
}
