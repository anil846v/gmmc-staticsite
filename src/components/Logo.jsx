/**
 * Reusable vector logo for Genius Minds | Making Code
 * Supports:
 * - mode="badge": Full stacked corporate logo matching the user's mockup image.
 * - mode="inline": Horizontal layout ideal for navigation bars.
 * - inverse: true/false (true renders white text/lines, false renders navy text/lines)
 */
export default function Logo({ mode = 'inline', inverse = false, className = '' }) {
  // Color selection based on background
  const mainColor = inverse ? '#FFFFFF' : '#002140';
  const blueColor = '#1E88E5'; // Consistent brand accent

  if (mode === 'badge') {
    return (
      <div className={`flex-center flex-column logo-badge ${className}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        {/* Row 1: GENIUS [DIAMOND] MINDS */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
          <span style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: '500', 
            fontSize: '2rem', 
            color: mainColor, 
            letterSpacing: '0.05em' 
          }}>
            GENIUS
          </span>

          {/* Octahedron SVG Diamond */}
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer Diamond */}
            <path d="M50 5L85 50L50 95L15 50L50 5Z" stroke={mainColor} strokeWidth="3" strokeLinejoin="round" />
            
            {/* Inner Facet Lines */}
            <line x1="15" y1="50" x2="85" y2="50" stroke={mainColor} strokeWidth="2" />
            <line x1="50" y1="5" x2="50" y2="95" stroke={mainColor} strokeWidth="2" />
            
            {/* Triangular facets */}
            <line x1="50" y1="5" x2="32.5" y2="50" stroke={mainColor} strokeWidth="2" />
            <line x1="50" y1="5" x2="67.5" y2="50" stroke={mainColor} strokeWidth="2" />
            <line x1="50" y1="95" x2="32.5" y2="50" stroke={mainColor} strokeWidth="2" />
            <line x1="50" y1="95" x2="67.5" y2="50" stroke={mainColor} strokeWidth="2" />
          </svg>

          <span style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: '500', 
            fontSize: '2rem', 
            color: mainColor, 
            letterSpacing: '0.05em' 
          }}>
            MINDS
          </span>
        </div>

        {/* Row 2: Underline - Blue - Gap - Blue */}
        <div style={{ display: 'flex', width: '100%', maxWidth: '380px', justifyContent: 'space-between', marginTop: '10px', alignItems: 'center' }}>
          <div style={{ height: '3px', width: '40%', backgroundColor: blueColor }}></div>
          <div style={{ height: '3px', width: '40%', backgroundColor: blueColor }}></div>
        </div>

        {/* Row 3: MAKING CODE */}
        <div style={{ 
          marginTop: '12px',
          fontFamily: 'var(--font-heading)', 
          fontWeight: '600', 
          fontSize: '1.6rem', 
          color: mainColor, 
          letterSpacing: '0.15em'
        }}>
          MAKING CODE
        </div>

        {/* Row 4: Tagline */}
        <div style={{ 
          marginTop: '10px',
          fontFamily: 'var(--font-body)', 
          fontStyle: 'italic',
          fontWeight: '400', 
          fontSize: '0.95rem', 
          color: inverse ? 'rgba(255, 255, 255, 0.85)' : 'var(--color-text-secondary)',
          letterSpacing: '0.03em'
        }}>
          Building Smart Solutions for a Future Digital World
        </div>
      </div>
    );
  }

  // Inline mode (Navbar)
  return (
    <div className={`logo-inline ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
      {/* Octahedron SVG Diamond */}
      <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5L85 50L50 95L15 50L50 5Z" stroke={mainColor} strokeWidth="5" strokeLinejoin="round" />
        <line x1="15" y1="50" x2="85" y2="50" stroke={mainColor} strokeWidth="3" />
        <line x1="50" y1="5" x2="50" y2="95" stroke={mainColor} strokeWidth="3" />
        <line x1="50" y1="5" x2="32.5" y2="50" stroke={mainColor} strokeWidth="3" />
        <line x1="50" y1="5" x2="67.5" y2="50" stroke={mainColor} strokeWidth="3" />
        <line x1="50" y1="95" x2="32.5" y2="50" stroke={mainColor} strokeWidth="3" />
        <line x1="50" y1="95" x2="67.5" y2="50" stroke={mainColor} strokeWidth="3" />
      </svg>
      
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
        <div style={{ 
          fontFamily: 'var(--font-heading)', 
          fontWeight: '600', 
          fontSize: '1.15rem', 
          color: mainColor, 
          letterSpacing: '0.05em' 
        }}>
          GENIUS MINDS
        </div>
        <div style={{ 
          fontFamily: 'var(--font-heading)', 
          fontWeight: '500', 
          fontSize: '0.7rem', 
          color: blueColor, 
          letterSpacing: '0.15em' 
        }}>
          MAKING CODE
        </div>
      </div>
    </div>
  );
}
