import './GameHeroActions.css'
import Icon from '@mdi/react';
import { mdiChevronDown, mdiGuyFawkesMask } from '@mdi/js';
import { useCallback, useState, useMemo } from 'react';

const GameHeroActions = ( { bgColor } ) => {
  
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
        {/* <div className="buttons">
            <div className="button is-primary">Add as Finished</div>
            <div className="button is-primary">Add as To Be Played</div>
            <div className="button is-primary">Add as Droped</div>
            <div className="button is-primary">Add as Liked</div>
        </div> */}

      {/* <div>
        <div className="tags are-medium tags_container">
          <span className="tag">PC</span>
          <span className="tag">PS5</span>
          <span className="tag">PS4</span>
        </div>
        <div className="tags are-medium tags_container">
          <span className="tag">RPG</span>
          <span className="tag">Hack'n Slash</span>
          <span className="tag">Adventure</span>
        </div>
      </div> */}
      <div>
        <p>
          <strong>Genres: </strong>
          <a>RPG</a>, <a>Hack'n Slash</a>, <a>Adventure</a>
        </p>
        <p>
          <strong>Platforms: </strong>
          <a>PC</a>, <a>PS5</a>, <a>PS4</a>
        </p>
      </div>
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
    </div>
    
  )
}

export default GameHeroActions