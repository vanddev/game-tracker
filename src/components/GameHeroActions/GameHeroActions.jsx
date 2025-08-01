import './GameHeroActions.css'
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';
import { useState } from 'react';
import { statusList } from '../../models/models';

const GameHeroActions = ( { bgColor, isFloating } ) => {
  const defaultFloatingButtonIcon = mdiStar
  const [isFloatingButtonActive, setFloatingButtonActive] = useState(false)
  const [floatingButtonIcon, setFloatingButtonIcon] = useState(defaultFloatingButtonIcon)
  const [currentStatus, setCurrentStatus] = useState(null)

  const handleFloatingButtonClick = () => {
    setFloatingButtonActive(!isFloatingButtonActive);
  }

  const handleStatusChange = (newStatus) => {
    if (newStatus.label === currentStatus?.label) {
      setCurrentStatus(null);
      setFloatingButtonIcon(defaultFloatingButtonIcon);
    } else { 
      setCurrentStatus(newStatus);
      setFloatingButtonIcon(newStatus.icon);
    }
    
    setFloatingButtonActive(false);
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
              <Icon path={floatingButtonIcon} size={1.2} />
            </button>
          </div>
          <div className={ isFloatingButtonActive ? "dark-film is-active" : "dark-film" }  onClick={handleFloatingButtonClick}/>
          <div className={ isFloatingButtonActive ? "action-list is-active" : "action-list" }>
              {statusList.map((status, index) => (
                <button key={index} className={
                  currentStatus && currentStatus.label === status.label
                  ? `action is-selected`
                  : `action`
                } onClick={() => handleStatusChange(status)}>
                  <Icon path={status.icon} size={1.2}></Icon>
                  <span>{status.label}</span>
                </button>
              ))}
            </div> 
        </> 
        :
        <>
        <div className="buttons has-addons">
          {statusList.map((status, index) => (
            <button
              key={index}
              title={
                currentStatus && currentStatus.label === status.label
                  ? `Remove ${status.label}`
                  : `Mark as ${status.label}`
              }
              className={
                currentStatus && currentStatus.label === status.label
                  ? `button is-light`
                  : `button`
              }
              onClick={() => handleStatusChange(status)}
            >
              <div className="icon">
                <Icon path={status.icon} size={1}></Icon>
              </div>
              <span>{status.label}</span>
            </button>
          ))}
        </div>
        </>
      }
    </div>
    
  )
}

export default GameHeroActions