import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  variant?: 'default' | 'inactive' | 'danger' | 'accept';
  showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, href, variant = 'default', showArrow = false }) => {
  const buttonClass = `${styles.btn} ${styles[variant]} ${className} h-fit`;

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
        {showArrow && <FaArrowRight className={styles.arrow} />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
      {showArrow && <FaArrowRight className={styles.arrow} />}
    </button>
  );
};

export default Button;