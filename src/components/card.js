import React from "react";

export default function Card(props) {
  let badgetext = "";
  if (props.item.openSpots === 0) {
    badgetext = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgetext = "ONLINE";
  }

  return (
    <div className="card">
      {badgetext && <div className="sold-out">{badgetext}</div>}
      <img src={props.item.coverImg} className="img-card"></img>
      <div className="rating">
        <img src="Star 1.png" width="14px" className="star"></img>
        <p>
          {props.item.stats.rating}{" "}
          <span className="grey">
            ({props.item.stats.reviewCount}).{props.item.location}
          </span>
        </p>
      </div>
      <p className="card-para card-title">{props.item.title}</p>
      <p className="card-para">
        <strong>From ${props.item.price}</strong>/ person
      </p>
    </div>
  );
}
