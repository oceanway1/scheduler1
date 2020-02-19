import React from "react";
import 'components/DayListItem.scss'
import classNames from "classnames"


const formatSpots = (spot) => {
  if (spot > 1) return `${spot} spots remaining`
  else if (spot > 0) return `${spot} spot remaining`
  else return `no spots remaining`
}
export default function DayListItem(props) {
  const spotsRemaining = formatSpots(props.spots)

  let dayClass = classNames("day-list__item", {
    "--selected": props.selected,
    "--full": props.spots === 0
  })
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{spotsRemaining}</h3>
    </li>
  );
}
