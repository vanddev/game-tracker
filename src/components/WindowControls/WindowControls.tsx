import { Minus, Square, Copy, X } from "lucide-react";
import { useState, useEffect } from "react";
import styles from './WindowControls.module.css';

interface WindowControlsProps {
  triggerMaximize: boolean;
}

function WindowControls({triggerMaximize} : WindowControlsProps) {
  const [isMaximized, setIsMaximized] = useState(false);
  
  useEffect(() => {
    // Listen to Wails window events

    // const offMax = window.runtime.EventsOn("window-maximized", () => {
    //   setIsMaximized(true);
    // });
    // const offUnmax = window.runtime.EventsOn("window-unmaximized", () => {
    //   setIsMaximized(false);
    // });
    // const offRestore = window.runtime.EventsOn("window-restored", () => {
    //   setIsMaximized(false);
    // });
    // return () => {
    //   offMax();
    //   offUnmax();
    //   offRestore();
    // };

  }, []);

  useEffect(() => {
    if (triggerMaximize !== null) handleMaximize();
  }, [triggerMaximize]);

  const handleMinimize = () => {
    console.log("Minimize button clicked");
    // window.runtime.WindowMinimise(); // Wails API
  };

  const handleMaximize = () => {
    if (isMaximized) {
        console.log("Restore button clicked");
        // window.runtime.WindowUnmaximise();
    } else {
        console.log("Maximize button clicked");
        // window.runtime.WindowMaximise();
    }
    setIsMaximized(!isMaximized);
  };

  const handleClose = () => {
    console.log("Close button clicked");
    // window.runtime.Quit(); // Wails API
  };

  return (
    <div className={styles.controls}>
      {/* Minimize */}
      <button
        onClick={handleMinimize}
      >
        <Minus size={14} />
      </button>

      {/* Maximize / Restore */}
      <button
        onClick={handleMaximize}
      >
        {isMaximized ? <Copy size={14} /> : <Square size={14} />}
      </button>

      {/* Close */}
      <button
        className={styles.closeButton}
        onClick={handleClose}
      >
        <X size={18} />
      </button>
    </div>
  );
}

export default WindowControls;