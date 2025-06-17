import './GameHeroActions.css'
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import { mdiHeartPlus } from '@mdi/js';
import { useState } from 'react';

const GameHeroActions = ( { bgColor, isFloating } ) => {
  
  const [chevronAngle, setChevronAngle] = useState(0)
  const [isDropdownActive, setDropdownActive] = useState(false)

  const changeDropdownStatus = () => {
    if (chevronAngle == 0){
      setChevronAngle(180)
      setDropdownActive(true)
    } 
    else {
      setChevronAngle(0)
      setDropdownActive(false)
    }
  }

  return (
    
    <div className="hero-actions" style={bgColor ? {backgroundColor: bgColor}: {}}>
      <div>
        <p>
          <strong>Genres: </strong>
          <a>RPG</a>, <a>Hack'n Slash</a>, <a>Adventure</a>
        </p>
        <p>
          <strong>Platforms: </strong>
          <a>PC</a>, <a>PS5</a>, <a>PS4</a>
        </p>
        <p>
          <strong>Themes: </strong>
          <a>Action</a>, <a>Fantasy</a>, <a>Historical</a>
        </p>
      </div>
      { isFloating ? 
        <div className="floating-button">
          <button className="button is-primary is-rounded">
            <Icon path={mdiHeartPlus} size={1.5} />
          </button>
        </div> 
        : 
        <div className={isDropdownActive ? "dropdown is-active" : "dropdown"}>
          <div className="dropdown-trigger">
            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={changeDropdownStatus}>
              <span>Mark as</span>
              <span className="icon is-small">
                <Icon path={mdiChevronDown} size={0.5} rotate={chevronAngle}></Icon>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a href="#" className="dropdown-item">Finished</a>
              <a className="dropdown-item">To Be Played</a>
              <a href="#" className="dropdown-item">Dropped</a>
              <a href="#" className="dropdown-item">Liked</a>
            </div>
          </div>
        </div> 
      }
    </div>
    
  )
}

export default GameHeroActions