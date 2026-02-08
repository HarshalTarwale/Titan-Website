import React from 'react'

/**
 * Heading2 Component
 * A large gradient text heading component matching Figma design specifications
 * 
 * *** EDIT TEXT HERE ***
 * @param {string} text - Heading text to display (default: 'TITAN')
 * @param {string} className - Additional CSS classes (optional)
 * @param {object} style - Additional inline styles (optional)
 * 
 * *** EDIT RESPONSIVE SIZE AND SPACING HERE ***
 * Font size: clamp(60px, 15vw, 191.856px) - scales from mobile to desktop
 * Letter spacing: clamp(10px, 3vw, 38.37px) - proportional spacing
 */

const Heading2 = ({ text = 'TITAN', className = '', style = {} }) => {
  const defaultStyle = {
    background: 'radial-gradient(294.23% 75.43% at 49.98% 50.22%, rgba(255, 255, 255, 0.9) 19.18%, rgba(0, 0, 0, 0.9))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: 'clamp(10px, 3vw, 38.37px)',
    fontSize: 'clamp(60px, 15vw, 191.856px)',
    ...style
  };

  return (
    <p 
      className={`zen text-center leading-normal whitespace-pre-wrap ${className}`}
      style={defaultStyle}
    >
      {text}
    </p>
  )
}

export default Heading2
