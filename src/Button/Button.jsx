// src\Button\Button.jsx
import React from 'react';
import './Button.css'


/**
 * props:
 * - type: 'button' | 'submit' | 'reset' (defalt: 'button')
 * - variant: 'solid' | 'outline' | 'ghost'
 * - size: 'sm' | 'md' | 'lg'
 * - fullWidth: boolean
 * - as: 'button' | 'a'  (For a button-like link)
 * - href: When as='a'
*/

const Button = ({children, onClick, type = 'button', variant = 'solid', size = 'md',
                                fullWidth = false, as = 'button', href, className = '', ...rest}) => {
  const classes = ['btn', `btn-${variant}`, `btn-${size}`, fullWidth ? 'btn-block' : '', className,].join(' ').trim();
  if (as === 'a') {
      return (
          <a className={classes} href={href} {...rest}> {children} </a>
        );
    }
    
    return (
        <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
};


export default Button