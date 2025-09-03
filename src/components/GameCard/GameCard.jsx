import "./GameCard.css"
import Icon from "@mdi/react";
import { statusList } from "../../models/models";
import { useMemo } from "react";

const GameCard = ({name, image, genre, statusId}) => {

    const status = useMemo(() => statusList.find(status => status.id === statusId), [statusId]);

    return (
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
    )
}

export default GameCard