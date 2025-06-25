import './GameHeroActions.css'
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import { mdiHeartPlus } from '@mdi/js';
import { mdiCheckCircleOutline } from '@mdi/js';
import { mdiClockOutline } from '@mdi/js';
import { mdiThumbDownOutline } from '@mdi/js';
import { useState } from 'react';

const GameHeroActions = ( { bgColor, isFloating } ) => {
  const [isDropdownActive, setDropdownActive] = useState(false)
  const [isFloatingButtonActive, setFloatingButtonActive] = useState(false)
  const [floatingButtonIcon, setFloatingButtonIcon] = useState(mdiHeartPlus)
  const [currentStatus, setCurrentStatus] = useState(null)

  const changeDropdownStatus = () => {
    setDropdownActive(!isDropdownActive)
  }

  const handleFloatingButtonClick = () => {
    setFloatingButtonActive(!isFloatingButtonActive);
  }

  const statusList = [
    { icon: mdiCheckCircleOutline, label: 'Finished', class: 'is-success' },
    { icon: mdiClockOutline, label: 'Want Play', class: 'is-warning' },
    { icon: mdiThumbDownOutline, label: 'Dropped', class: 'is-danger' },
  ];

  const handleStatusChange = (newStatus) => {
    if (newStatus.label === currentStatus?.label) {
      setCurrentStatus(null);
    } else { 
      setCurrentStatus(newStatus);
    }
    
    setFloatingButtonIcon(newStatus.icon);
    setFloatingButtonActive(false);
    setDropdownActive(false);
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
                <button key={index} className='action' onClick={() => handleStatusChange(status)}>
                  <Icon path={status.icon} size={1.2}></Icon>
                  <span>{status.label}</span>
                </button>
              ))}
            </div> 
        </> 
        :
        <>
        <div className="actions-buttons">
          {statusList.map((status, index) => (
            <button
              key={index}
              className={
                currentStatus && currentStatus.label === status.label
                  ? `button ${status.class}`
                  : `button ${status.class} is-outlined`
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
        {/* <div className={isDropdownActive ? "dropdown is-active" : "dropdown"}>
          <div className="dropdown-trigger">
            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={changeDropdownStatus}>
              <span>{currentStatus ? currentStatus.label : 'Mark as'}</span>
              <span className="icon is-small">
                <Icon path={mdiChevronDown} size={0.5} vertical={isDropdownActive}></Icon>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              {statusList.map((status, index) => (
                <>
                  <a key={index} href="#" className="dropdown-item" onClick={() => handleStatusChange(status)}>
                    <div className="icon">
                      <Icon path={status.icon} size={1}></Icon>
                    </div>
                    {status.label}
                  </a>
                </>
              ))}
            </div>
          </div>
        </div>  */}
        </>
      }
    </div>
    
  )
}

export default GameHeroActions