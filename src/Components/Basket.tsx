import { useSelector } from "react-redux"
import { selectedAllKorzinka } from "../features/productSlice"
import Prodyct from "./Prodyct";

const Basket = () => {
  const basket = useSelector(selectedAllKorzinka)

  console.log(basket, 'basket');


  return (
    <div>{basket?.map((item:any, index:any) => (
      <Prodyct key={index} item={item} />
    ))}</div>
  )
}

export default Basket