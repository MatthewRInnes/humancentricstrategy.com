import React from 'react'

/**
 * GoldAccent component
 * Renders a gold radial background accent, positioned left or right, with optional size and corner.
 * Usage: <GoldAccent position="left" /> or <GoldAccent position="right" size="small" corner="top" />
 * The accent is visually subtle, does not interfere with content, and is easy to maintain.
 */
export const GoldAccent: React.FC<{ position: 'left' | 'right', size?: 'small' | 'large', corner?: 'top' | 'bottom' }> = ({ position, size, corner }) => {
  // Choose position, gradient direction, and size
  if (size === 'small') {
    // Tiny spot in the exact corner, less spread and opacity (British English comment)
    const style = position === 'right'
      ? {
          right: 0,
          [corner === 'bottom' ? 'bottom' : 'top']: 0,
          width: '80px',
          height: '80px',
          background: `radial-gradient(ellipse 40% 40% at 100% ${corner === 'bottom' ? '100%' : '0%'}, rgba(196,163,90,0.10) 0%, transparent 80%)`,
        }
      : {
          left: 0,
          [corner === 'bottom' ? 'bottom' : 'top']: 0,
          width: '80px',
          height: '80px',
          background: `radial-gradient(ellipse 40% 40% at 0% ${corner === 'bottom' ? '100%' : '0%'}, rgba(196,163,90,0.10) 0%, transparent 80%)`,
        }
    return (
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          zIndex: 0,
          pointerEvents: 'none',
          ...style,
        }}
      />
    )
  }
  // Default: large accent on left or right
  const style = position === 'left'
    ? {
        left: 0,
        top: 0,
        width: '60vw',
        height: '60vh',
        background: 'radial-gradient(ellipse 60% 40% at 20% 20%, rgba(196,163,90,0.18) 0%, transparent 80%)',
      }
    : {
        right: 0,
        top: 0,
        width: '60vw',
        height: '60vh',
        background: 'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(196,163,90,0.18) 0%, transparent 80%)',
      }
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        zIndex: 0,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export default GoldAccent 