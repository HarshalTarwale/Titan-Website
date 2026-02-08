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
 * *** EDIT SIZE AND SPACING HERE ***
 * Text size: text-[191.856px] or adjust in defaultStyle
 * Letter spacing: tracking-[38.3711px] or adjust letterSpacing below
 */

const Heading2 = ({ text = 'TITAN', className = '', style = {} }) => {
  const defaultStyle = {
    background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(223,223,223,1) 10%, rgba(191,191,191,1) 20%, rgba(159,159,159,1) 30%, rgba(128,128,128,1) 40%, rgba(96,96,96,1) 50%, rgba(64,64,64,1) 60%, rgba(48,48,48,1) 70%, rgba(32,32,32,1) 80%, rgba(16,16,16,1) 90%, rgba(8,8,8,1) 95%, rgba(0,0,0,1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '38.37px',
    fontSize: '191.856px',
    opacity: '0.6',
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
