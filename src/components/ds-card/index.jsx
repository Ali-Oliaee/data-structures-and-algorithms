import React from "react"
import { Link } from "react-router-dom"
import "./styles.scss"

const DataStructureCard = ({ image, title, description, link }) => {
  return (
    <div className="ds-card">
      <Link to={link}>
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default DataStructureCard
