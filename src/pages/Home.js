
import Card from "../Components/Card";
import "../CSS/cardPanel.css"
import "../CSS/default.css"
export default function Home() {
  function renderCards() {
    const cards = [];
    for (let index = 0; index < 9; index++) {
      cards.push(<Card/>);
    }
    return cards;
  }
  return (
    <body>
      <h1 className="mainTag">Home</h1>

      <div className="cardPanel">
        {renderCards()}
      </div>
      
    </body>
  );
}


