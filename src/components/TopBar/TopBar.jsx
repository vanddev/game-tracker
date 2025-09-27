import SearchBar from "../SearchBar/SearchBar";
import WindowControls from "../WindowControls/WindowControls";
import styles from './TopBar.module.css';
import { useState } from "react";

const TopBar = () => {
  const [trigger, setTrigger] = useState(null);
  const handleDoubleClick = () => {
    // window.runtime.WindowMaximise(); // Wails API
    console.log("Top bar double-clicked");
    setTrigger(!trigger);
  }

  return (
    <header className={styles.topBar} style={{ WebkitAppRegion: 'drag' }} onDoubleClick={handleDoubleClick}>
      <div className={styles.appTitle}>
        <img src='/favicon-196.png' className="logo" alt="Logo" style={{height: '26px', width: 'auto', marginLeft: '10px'}} />
      </div>
       <div style={{ width: '600px'}}>
          <SearchBar></SearchBar>
      </div>
      <div style={{ WebkitAppRegion: 'no-drag', display: 'flex', height: '100%' }}>
        <WindowControls triggerMaximize={trigger}></WindowControls>
      </div>
    </header>
  );
};
export default TopBar;