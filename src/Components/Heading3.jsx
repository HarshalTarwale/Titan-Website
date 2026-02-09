import React from 'react'

/**
 * Heading3 Component
 * A large gradient text heading component for product collection pages (e.g., EDGE)
 * Matches Figma design specifications with fade gradient effect
 * 
 * *** CUSTOMIZATION GUIDE ***
 * @param {string} text - Heading text to display (default: 'EDGE')
 * @param {string} className - Additional CSS classes (optional)
 * @param {object} style - Additional inline styles (optional)
 * 
 * *** GRADIENT STYLE ***
 * - Top: White with 60% opacity (fades from bright)
 * - Bottom: Black with 60% opacity (fades to dark)
 * - Creates dramatic fade effect perfect for hero sections
 * 
 * *** RESPONSIVE SIZING ***
 * Font size: clamp(80px, 12vw, 153.467px) - scales smoothly across devices
 * Letter spacing: clamp(10px, 3.5vw, 61.387px) - maintains dramatic spacing
 * 
 * *** EDITING TIP ***
 * - Change gradient colors/opacity in linearGradient
 * - Adjust clamp() values for different size ranges
 * - Modify letter spacing for tighter/wider text
 */

const Heading3 = ({ text = 'EDGE', className = '', style = {} }) => {
  const defaultStyle = {
    background: 'linear-gradient(180.149deg, rgba(255, 255, 255, 0.6) 44.989%, rgba(0, 0, 0, 0.6) 79.775%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: 'clamp(10px, 3.5vw, 61.387px)',
    fontSize: 'clamp(80px, 12vw, 153.467px)',
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

export default Heading3
