import './GameHeroActions.css'
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';
import { useState } from 'react';
import { statusList } from '../../contants/contants';
import { Link } from 'react-router-dom';
import useURIEncode from '../../hooks/useURIEncode';

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

  const genres = ['RPG', "Hack'n Slash", 'Adventure'];
  const platforms = ['PC', 'PS5', 'PS4'];
  const themes = ['Action', 'Fantasy', 'Historical'];

  return (
    
    <div className="hero-actions" style={bgColor ? {backgroundColor: bgColor}: {}}>
      <div>
        <p>
          <strong>Genres: </strong>
          {genres.map((genre, index) => (
            <span key={index}>
              {index > 0 && ', '}
              <Link to={`/games/genres/${useURIEncode(genre)}`}>{genre}</Link>
            </span>
          ))}
        </p>
        <p>
          <strong>Platforms: </strong>
          {platforms.map((platform, index) => (
            <span key={index}>
              {index > 0 && ', '}
              <Link to={`/games/platforms/${useURIEncode(platform)}`}>{platform}</Link>
            </span>
          ))}
        </p>
        <p>
          <strong>Themes: </strong>
          {themes.map((theme, index) => (
            <span key={index}>
              {index > 0 && ', '}
              <Link to={`/games/themes/${useURIEncode(theme)}`}>{theme}</Link>
            </span>
          ))}
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