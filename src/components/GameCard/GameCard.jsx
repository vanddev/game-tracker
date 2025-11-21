import "./GameCard.css"
import Icon from "@mdi/react";
import { statusList } from "../../contants/contants";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const GameCard = ({name, image, genre, statusId}) => {

    const status = useMemo(() => statusList.find(status => status.id === statusId), [statusId]);

    return (
        <Link to={"/game"} >
            <div className="card dark-border">
                <div className="card-image">
                    <figure className="image is-3by4">
                        {status && (
                            <div className="status-icons">
                                <Icon path={status.icon} size={0.8} />
                            </div>
                        )}
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
        </Link>
    )
}

export default GameCard