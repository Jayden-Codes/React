import { useState } from "react";
import "../CSS/card.css";
import pic from "../images/download.jpeg";
const Card = () => {
  const [quantity, setQuantity] = useState(0,);
  return (
    <div className="card">
      <div className="cardImageContainer">
        <img src={pic} alt="image" srcset="" />
        <button className="cardAddBtn" onClick={ ()=> setQuantity(quantity+1)}>{quantity}</button>
      </div>

      <div className="cardText">
        <h2> Shrek 1</h2>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis quisquam vel vero quas pariatur blanditiis fugiat aliquam sint ad autem praesentium, ab dolor quos et, illum incidunt fugit recusandae!</h4>
      </div>
    </div>
  );
};

export default Card;
