import React from 'react'

const GameCard = ({name, image}) => {
  return (
    <div className="card">
        <div className="card-image">
            <figure className="image is-3by4">
            <img
                src={image}
                alt="Placeholder image"
            />
            </figure>
        </div>
        <div className="card-content">
            <div className="content">
                {name}
            </div>
        </div>
    </div>
  )
}

export default GameCard