import { IoMdSearch } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { fetchProductsData, selectedAllKorzinka } from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoMdExit } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { BsFileArrowUp } from "react-icons/bs";

const Header = () => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [icon, setIcon] = useState(false)


  const activeBasket = () => {
    setIcon(!icon)
  }

  const korzina = useSelector(selectedAllKorzinka)
  let count = korzina.length




  useEffect(() => {
    dispatch(fetchProductsData({ limit: inputValue, skip: 0, type: "search" }))
  }, [inputValue])


  const handleCloseSearch = () => {
    setInputValue("")

  }

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header_box">
            <NavLink to="/">
              <h2 className="header_title">
                Faxriddinxoja
              </h2>
            </NavLink>

            <div className="header_icon" >
              <div className="header_bn" onClick={() => setActive(true)}>
                <IoMdSearch className="icon" />
              </div>


              <div className="header_icon " onClick={activeBasket}>
                <NavLink to="/Basket">
                  <FaShoppingBasket className="icon" />
                </NavLink>
                <div className="header_d">{count}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`header search ${active && 'active'}`}>
          <div className="header_bac " onClick={() => setActive(false)}>
            <BsFileArrowUp />
          </div>
          <div className="container">
            <input className="header_input" value={inputValue} type="text" placeholder="qidirish.." onChange={(e) => setInputValue(e.target.value)} />
          </div>
          <div className="header_clear" onClick={handleCloseSearch}>
            <IoIosCloseCircleOutline />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header