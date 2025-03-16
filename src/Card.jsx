import starImg from "./assets/Star_fill.svg"
import noStarImg from "./assets/Star.svg"

export function Card({ coffee }) {
  return (
    <div style={{position: "relative"}}>
      {coffee.popular ? <p className="popular-tag">Popular</p> : null}
      <img src={coffee.image}></img>
      <div className="info">
        <p className="coffee-name">{coffee.name}</p>
        <p className="coffee-price">{coffee.price}</p>
      </div>
      <div className="rating">
        <img style={{width: '20px'}} src={coffee.rating ? starImg : noStarImg}></img>
        <p>{coffee.rating}</p>
        <p className="votes">{coffee.rating ? `(${coffee.votes} votes)` : "No ratings"}</p>
        <p className="sold-out">{coffee.available ? "" : "Sold out"}</p>
      </div>
    </div>
  )
}