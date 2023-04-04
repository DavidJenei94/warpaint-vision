import { ComponentProps } from 'react';

import styles from './Button.module.scss';

interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode;
}

const Button = ({ children, onClick, ...otherProps }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
