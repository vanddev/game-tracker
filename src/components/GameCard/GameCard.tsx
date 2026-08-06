import "./GameCard.css"
import Icon from "@mdi/react";
import { statusList } from "../../constants/constants";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import GameImg from "../GameImg/GameImg";
import type { Genre } from "../../types";


interface GameCardProps {
    id: number;
    name: string;
    cover: string;
    genres?: Genre[];
    ggstatus?: string;
}

const GameCard = ({ id, name, cover, genres, ggstatus }: GameCardProps) => {

    const status = useMemo(() => statusList.find(status => status.id === ggstatus), [ggstatus]);

    return (
        <Link to={`/game/${id}`} >
            <div className="card dark-border">
                <div className="card-image">
                    <figure className="image is-3by4">
                        {status && (
                            <div className="status-icons">
                                <Icon path={status.icon} size={0.8} />
                            </div>
                        )}
                            <GameImg
                                imageId={cover}
                                altText="Placeholder image"
                            />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        <span>{name}</span>
                        {genres && genres.length > 0 &&
                        (<span>{genres[0].name}</span>)
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GameCard