import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Button.css';

const Button = ({
  children,
  variant = 'style-one',
  size = 'medium',
  className = '',
  href,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  pulse = false,
  rounded = false,
  light = false,
  hvrLight = false,
  ...props
}) => {
  const baseClasses = ['theme-btn'];
  
  // Add variant class
  baseClasses.push(`btn-${variant}`);
  
  // Add size class
  if (size !== 'medium') {
    baseClasses.push(size);
  }
  
  // Add additional classes
  if (rounded) baseClasses.push('rounded');
  if (light) baseClasses.push('light');
  if (hvrLight) baseClasses.push('hvr-light');
  if (loading) baseClasses.push('btn-loading');
  if (pulse) baseClasses.push('btn-pulse');
  if (icon) baseClasses.push('btn-with-icon');
  if (className) baseClasses.push(className);
  
  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && <i className={icon}></i>}
      <span className="btn-title">{children}</span>
      {icon && iconPosition === 'right' && <i className={icon}></i>}
    </>
  );
  
  // Check if it's an internal route (starts with /) or external link
  if (href) {
    // If it's an internal route (starts with /) and not a hash link, use React Router Link
    if (href.startsWith('/') && !href.startsWith('/#') && !href.includes('#')) {
      return (
        <Link 
          to={href} 
          className={baseClasses.join(' ')}
          onClick={onClick}
          {...props}
        >
          {buttonContent}
        </Link>
      );
    }
    
    // If it's a hash link or external link, use regular anchor tag
    return (
      <a 
        href={href} 
        className={baseClasses.join(' ')}
        onClick={onClick}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {buttonContent}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={baseClasses.join(' ')}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default Button; 