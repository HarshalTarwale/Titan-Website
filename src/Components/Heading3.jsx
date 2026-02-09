import React from 'react'

/**
 * Heading3 Component
 * A large gradient text heading component for product collection pages (e.g., EDGE)
 * Matches exact Figma design specifications with fade gradient effect
 * 
 * *** EXACT FIGMA SPECIFICATIONS ***
 * @param {string} text - Heading text to display (default: 'EDGE')
 * @param {string} className - Additional CSS classes (optional)
 * @param {object} style - Additional inline styles (optional)
 * 
 * *** GRADIENT STYLE (EXACT FROM FIGMA) ***
 * - Direction: 180.149deg (slightly offset from vertical)
 * - Stop 1: White 60% opacity at 44.989%
 * - Stop 2: Black 60% opacity at 79.775%
 * - Creates dramatic fade from bright white to dark
 * 
 * *** TYPOGRAPHY (EXACT FROM FIGMA) ***
 * - Font: Zen Dots (Regular)
 * - Font size: 153.467px
 * - Letter spacing: 61.387px (ultra-wide spacing)
 * - Line height: normal
 * - Text fill: transparent with gradient background clip
 */

const Heading3 = ({ text = 'EDGE', className = '', style = {} }) => {
  const defaultStyle = {
    backgroundImage: 'linear-gradient(180.149deg, rgba(255, 255, 255, 0.6) 44.989%, rgba(0, 0, 0, 0.6) 70.775%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '50.387px',
    fontSize: '153.467px',
    lineHeight: 'normal',
    marginRight: '-50.387px', // Compensate for trailing letter-spacing
    ...style
  };

  return (
    <p 
      className={`zen text-center whitespace-pre-wrap ${className}`}
      style={defaultStyle}
    >
      {text}
    </p>
  )
}

export default Heading3
