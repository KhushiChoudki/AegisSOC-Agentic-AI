import type { CSSProperties } from 'react'

interface LogoProps {
  className?: string
  style?: CSSProperties
}

/** 
 * Globe + Cyber Robot Head Logo Icon (Matching Image 2)
 */
export function AegisLogoMark({ className, style }: LogoProps) {
  return (
    <svg
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', width: '100%', height: '100%', ...style }}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AegisSOC Logo"
    >
      {/* Outer Circle Border */}
      <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="12" fill="none" />

      {/* Latitude Curves */}
      <path d="M 16,72 A 90 35 0 0 1 184,72" stroke="currentColor" strokeWidth="8" fill="none" />
      <path d="M 10,100 L 190,100" stroke="currentColor" strokeWidth="8" />
      <path d="M 23,130 A 90 35 0 0 1 177,130" stroke="currentColor" strokeWidth="8" fill="none" />

      {/* Longitude Arcs */}
      <path d="M 100,10 A 52 90 0 0 0 100,190" stroke="currentColor" strokeWidth="8" fill="none" />
      <path d="M 100,10 A 52 90 0 0 1 100,190" stroke="currentColor" strokeWidth="8" fill="none" />

      {/* Center Vertical Grid Line */}
      <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="8" />

      {/* Antenna Node */}
      <circle cx="100" cy="96" r="9" fill="currentColor" />

      {/* Robot Dome Head at Bottom */}
      <path d="M 38,155 A 64 64 0 0 1 162,155 Z" fill="currentColor" />

      {/* Robot Eyes */}
      <circle cx="78" cy="148" r="8" fill="var(--bg-base, #090a0f)" />
      <circle cx="122" cy="148" r="8" fill="var(--bg-base, #090a0f)" />
    </svg>
  )
}

export function VigilMark(props: LogoProps) {
  return <AegisLogoMark {...props} />
}

export function VigilLogo(props: LogoProps) {
  return <AegisLogoMark {...props} />
}
