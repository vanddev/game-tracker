import "./GameCard.css"

const GameCard = ({name, image, genre}) => {
  return (
    <div className="card dark-border">
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
                <span>{name}</span>
                <span>{genre}</span>
            </div>
        </div>
    </div>
  )
}

export default GameCard