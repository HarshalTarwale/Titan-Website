import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Button1 Component
 * A reusable button component with customizable text and navigation
 * 
 * *** EDIT TEXT AND LINK HERE ***
 * @param {string} text - Button text to display (default: 'Button')
 * @param {string} to - Navigation path (default: null, makes button non-clickable)
 * @param {function} onClick - Optional click handler (alternative to 'to')
 * @param {string} className - Additional CSS classes (optional)
 * 
 * *** EDIT BUTTON STYLE HERE ***
 * Main styling: bg, padding, rounded, text size, colors below
 */

const Button1 = ({ 
  text = 'Button', 
  to = null, 
  onClick = null,
  className = '' 
}) => {
  const buttonClasses = `
    bg-transparent 
    backdrop-blur-md 
    px-[4vh] 
    py-[1.4vh] 
    rounded-[15px] 
    border-[1px] 
    border-white 
    hover:bg-white/20 
    transition-all 
    duration-300 
    cursor-pointer 
    zen 
    text-[2vh]
    ${className}
  `.trim().replace(/\s+/g, ' ')

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault()
      onClick()
    }
  }

  // If 'to' prop is provided, render as Link
  if (to) {
    return (
      <Link 
        to={to} 
        className={buttonClasses}
        onClick={handleClick}
      >
        {text}
      </Link>
    )
  }

  // Otherwise, render as button
  return (
    <button 
      className={buttonClasses}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button1
