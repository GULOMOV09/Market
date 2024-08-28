import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Berteg from "../Components/Berteg";


const HomeLayout = () => {

  return (
    <>
      <Nav />
      <Berteg />
    </>
  );
};

export default HomeLayout;
