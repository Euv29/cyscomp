import React, { useEffect, useRef } from 'react';
import styles from './Popup.module.css';

interface PopupProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupRef, onClose]);

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.show : ''}`}>
      <div className={`${styles.popup} ${isOpen ? styles.show : ''}`} ref={popupRef}>
        <button className={styles.closeButton} onClick={onClose} title="Close">
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;