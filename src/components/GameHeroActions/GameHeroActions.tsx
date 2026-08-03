import './GameHeroActions.css'
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';
import { useState } from 'react';
import { statusList, type StatusItem } from '../../constants/constants.ts';
import { Link } from 'react-router-dom';
import useURIEncode from '../../hooks/useURIEncode';
import type { Genre, Platform, Theme } from '../../types.ts';

interface GameHeroActionsProps {
  bgColor: string;
  isFloating: boolean;
  genres: Genre[];
  platforms?: Platform[];
  themes?: Theme[];
}

function GameHeroActions( props: GameHeroActionsProps) {
  const defaultFloatingButtonIcon = mdiStar
  const [isFloatingButtonActive, setFloatingButtonActive] = useState(false)
  const [floatingButtonIcon, setFloatingButtonIcon] = useState(defaultFloatingButtonIcon)
  const [currentStatus, setCurrentStatus] = useState<StatusItem | null>(null)

  function handleFloatingButtonClick() {
    setFloatingButtonActive(!isFloatingButtonActive);
  }

  function handleStatusChange(newStatus: StatusItem) {
    if (newStatus.label === currentStatus?.label) {
      setCurrentStatus(null);
      setFloatingButtonIcon(defaultFloatingButtonIcon);
    } else { 
      setCurrentStatus(newStatus);
      setFloatingButtonIcon(newStatus.icon);
    }
    
    setFloatingButtonActive(false);
  }

  function renderGenres() {
    return props.genres?.filter((genre) => !!genre.name).map((genre, index) => (
      <span key={index}>
        {index > 0 && ', '}
        <Link to={`/genres/${useURIEncode(genre.name)}`}>{genre.name}</Link>
      </span>
    ));
  }

  function renderPlatforms() {
    return props.platforms?.filter((platform) => !!platform.name).map((platform, index) => (
      <span key={index}>
        {index > 0 && ', '}
        <Link to={`/platforms/${encodeURIComponent(platform.name)}`}>{platform.name}</Link>
      </span>
    ));
  }

  function renderThemes() {
    return props.themes?.filter((theme) => !!theme.name).map((theme, index) => (
      <span key={index}>
        {index > 0 && ', '}
        <Link to={`/themes/${useURIEncode(theme.name)}`}>{theme.name}</Link>
      </span>
    ));
  }

  // const genres = ['RPG', "Hack'n Slash", 'Adventure'];
  // const platforms = ['PC', 'PS5', 'PS4'];
  // const themes = ['Action', 'Fantasy', 'Historical'];

  return (
    
    <div className="hero-actions" style={props.bgColor ? {backgroundColor: props.bgColor}: {}}>
      <div>
        <p>
          <strong>Genres: </strong>
          { renderGenres() }
        </p>
        <p>
          <strong>Platforms: </strong>
          { renderPlatforms() }
        </p>
        <p>
          <strong>Themes: </strong>
          { renderThemes() }
        </p>
      </div>
      { props.isFloating ?
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