import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

/**
 * Button1 Component
 * A reusable button component with customizable text and navigation
 * 
 * *** EDIT TEXT AND LINK HERE WHEN USING ***
 * 
 * @param {string} text - Button text to display (required)
 * @param {string} linkPath - Path to navigate when clicked (optional)
 * @param {function} onClick - Custom click handler (optional, overrides linkPath)
 * @param {string} variant - Button style variant: 'primary', 'secondary', 'outline' (default: 'primary')
 * @param {string} size - Button size: 'small', 'medium', 'large' (default: 'medium')
 * @param {string} className - Additional CSS classes (optional)
 * @param {boolean} disabled - Disable button (default: false)
 * 
 * Usage Examples:
 * <Button1 text="Shop Now" linkPath="/all-products" />
 * <Button1 text="Learn More" linkPath="/about" variant="outline" />
 * <Button1 text="Submit" onClick={handleSubmit} variant="primary" size="large" />
 */

const Button1 = ({ 
  text, 
  linkPath = null, 
  onClick = null,
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false
}) => {
  const navigate = useNavigate()

  // Size configurations
  const sizeStyles = {
    small: 'px-[3vh] py-[1vh] text-[1.6vh] rounded-[2vh]',
    medium: 'px-[4vh] py-[1.5vh] text-[1.9vh] rounded-[3vh]',
    large: 'px-[5vh] py-[2vh] text-[2.2vh] rounded-[4vh]'
  }

  // Variant configurations
  const variantStyles = {
    primary: 'bg-white text-black hover:bg-white/90 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]',
    secondary: 'bg-white/10 backdrop-blur-md text-white border-[0.5px] border-white/30 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]',
    outline: 'bg-transparent text-white border-[1.5px] border-white hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]'
  }

  // Base button styles
  const baseStyles = `
    ${sizeStyles[size]} 
    ${variantStyles[variant]}
    font-medium
    transition-all 
    duration-300 
    cursor-pointer
    inline-block
    text-center
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  // Handle click
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault()
      return
    }
    
    if (onClick) {
      onClick(e)
    } else if (linkPath) {
      navigate(linkPath)
    }
  }

  // If linkPath is provided and no custom onClick, use Link
  if (linkPath && !onClick && !disabled) {
    return (
      <Link 
        to={linkPath} 
        className={baseStyles}
      >
        {text}
      </Link>
    )
  }

  // Otherwise use button element
  return (
    <button 
      onClick={handleClick}
      className={baseStyles}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button1
