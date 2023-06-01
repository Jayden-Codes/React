import "../CSS/card.css";
import pic from "../images/download.jpeg";
const Card = () => {
  return (
    <div className="card">
      <div className="cardImageContainer">
        <img src={pic} alt="image" srcset="" />
      </div>
      <div className="cardText">
        <h2> Shrek 1</h2>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis quisquam vel vero quas pariatur blanditiis fugiat aliquam sint ad autem praesentium, ab dolor quos et, illum incidunt fugit recusandae!</h4>
      </div>
    </div>
  );
};

export default Card;
