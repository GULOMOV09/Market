import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import Nav from "../Components/Nav"

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Home