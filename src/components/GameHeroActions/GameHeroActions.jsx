import './GameHeroActions.css'
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import { mdiHeartPlus } from '@mdi/js';
import { mdiCheckCircleOutline } from '@mdi/js';
import { mdiClockOutline } from '@mdi/js';
import { mdiThumbDownOutline } from '@mdi/js';
import { useState } from 'react';

const GameHeroActions = ( { bgColor, isFloating } ) => {
  
  const [chevronAngle, setChevronAngle] = useState(0)
  const [isDropdownActive, setDropdownActive] = useState(false)
  const [isFloatingButtonActive, setFloatingButtonActive] = useState(false)

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

  const handleFloatingButtonClick = () => {
    setFloatingButtonActive(!isFloatingButtonActive);
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
        <>
          <div className="floating-button">
            <button className="button is-primary is-rounded" onClick={handleFloatingButtonClick}>
              <Icon path={mdiHeartPlus} size={1.2} />
            </button>
          </div>
          <div className={ isFloatingButtonActive ? "dark-film is-active" : "dark-film" }  onClick={handleFloatingButtonClick}/>
          <div className={ isFloatingButtonActive ? "action-list is-active" : "action-list" }>
              <button className='action'>
                <Icon path={mdiCheckCircleOutline} size={1.2}></Icon>
                <span>Finished</span>
              </button>
              <button className='action'>
                <Icon path={mdiClockOutline} size={1.2}></Icon>
                <span>AAA</span>
              </button>
              <button className='action'>
                <Icon path={mdiThumbDownOutline} size={1.2}></Icon>
                <span>Dropped</span>
              </button>
            </div> 
        </> 
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
              <a href="#" className="dropdown-item"><div className="icon"><Icon path={mdiCheckCircleOutline} size={1}></Icon></div>Finished</a>
              <a href="#" className="dropdown-item"><div className="icon"><Icon path={mdiClockOutline} size={1}></Icon></div>To Be Played</a>
              <a href="#" className="dropdown-item"><div className="icon"><Icon path={mdiThumbDownOutline} size={1}></Icon></div>Dropped</a>
            </div>
          </div>
        </div> 
      }
    </div>
    
  )
}

export default GameHeroActions