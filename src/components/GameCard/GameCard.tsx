import "./GameCard.css"
import Icon from "@mdi/react";
import { statusList } from "../../contants/contants";
import { useMemo } from "react";
import { Link } from "react-router-dom";


interface GameCardProps {
    name: string;
    cover: string;
    genres?: string[];
    ggstatus?: string;
}

const GameCard = ({ name, cover, genres, ggstatus }: GameCardProps) => {

    const status = useMemo(() => statusList.find(status => status.id === ggstatus), [ggstatus]);

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
                                src={cover}
                                alt="Placeholder image"
                            />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        <span>{name}</span>
                        {genres && genres.length > 0 &&
                        (<span>{genres[0]}</span>)
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GameCard