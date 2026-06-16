// Shared tech brand SVG icons used across all service pages
export const TechIcon = ({ name, size = 22 }) => {
  const s = size;
  switch (name.toLowerCase().replace(/[\s._-]/g, '')) {
    case 'react':
    case 'reactjs':
      return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="12" rx="10.5" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)"/>
        <ellipse cx="12" cy="12" rx="10.5" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)"/>
        <ellipse cx="12" cy="12" rx="10.5" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)"/>
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
      </svg>;
    case 'nextjs':
    case 'nextjs':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="#000"/>
        <path d="M9 8.5v7l6-7v7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>;
    case 'typescript':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#3178C6"/>
        <path d="M13.5 13h3.5M15.5 13v5M5 11.5h4M7 11.5V17" stroke="#fff" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>;
    case 'javascript':
    case 'js':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
        <path d="M7 17c.5 1.5 1.5 2 2.8 2 1.5 0 2.7-.8 2.7-2.5V12h-2 .4c0 .7-.3 1.1-.8 1.1-.5 0-.8-.3-1.1-.8L7 17z" fill="#000"/>
        <path d="M14 16.8c.5 1 1.5 1.7 3 1.7 1.6 0 2.8-.9 2.8-2.3 0-1.3-.8-1.9-2.1-2.4l-.6-.3c-.7-.3-.9-.5-.9-.9 0-.3.3-.6.8-.6.5 0 .9.2 1.2.8l1.5-.9c-.6-1.1-1.5-1.5-2.7-1.5-1.7 0-2.7 1-2.7 2.3 0 1.3.8 1.9 1.9 2.3l.6.3c.7.3 1.1.5 1.1 1s-.4.7-1 .7c-.8 0-1.2-.4-1.6-1L14 16.8z" fill="#000"/>
      </svg>;
    case 'nodejs':
    case 'node':
    case 'nodejsjs':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="#339933" opacity=".9"/>
        <path d="M12 5l6 3.5v7L12 19l-6-3.5v-7L12 5z" fill="#fff" opacity=".15"/>
        <text x="7.5" y="15.5" fontSize="6.5" fontWeight="bold" fill="#fff" fontFamily="sans-serif">JS</text>
      </svg>;
    case 'expressjs':
    case 'express':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#1a1a1a"/>
        <text x="3.5" y="15" fontSize="7" fontWeight="bold" fill="#fff" fontFamily="sans-serif">EXP</text>
      </svg>;
    case 'python':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.5 2 8 3.6 8 5v1.5h4V7H5.5C4 7 2 7.8 2 11s2 4 3.5 4H5v1.5C5 19 6 22 12 22s7-3 7-5.5V15h-1.5C16 15 14 14.2 14 11s2-4 3.5-4H17V5.5C17 3 16 2 12 2z" fill="#3776AB"/>
        <path d="M10 4.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" fill="#FFD43B"/>
      </svg>;
    case 'java':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 3c-.5 3-.5 5.5 2 6.5-2 0-4.5 1.5-4 4 0 0 1-1.5 4-1.5 3.5 0 5-2 5-4 0-2.5-2.5-3.5-2.5-5h-4.5z" fill="#ED8B00"/>
        <path d="M7 15.5s-.5 1 2 1.5c2.5.5 4.5 0 6-1 0 0-1.5.5-4 .5-2.5 0-4-.5-4-1zM6.5 18s-.5 1 2.5 1.5c3 .5 5.5 0 7-1 0 0-2 .5-4.5.5-2.5 0-5-1-5-1z" fill="#ED8B00"/>
        <path d="M14 11.5c1.5.5 2.5 2 2 4-1 4-6.5 4-8.5 3.5 0 0 2.5 1 5.5 0 3-1 4-3.5 3-5.5-.5-1-1.5-1.5-2-2z" fill="#5382A1"/>
      </svg>;
    case 'mysql':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8 2 5 4 5 7c0 1.5 1 3 3 4l-1 1c-1.5 1-3 3-3 5 0 3 3 5 8 5s8-2 8-5c0-2-1.5-4-3-5l-1-1c2-1 3-2.5 3-4 0-3-3-5-7-5z" fill="#4479A1"/>
        <path d="M12 4c3 0 5 1.5 5 3 0 1.5-2 3-5 3S7 8.5 7 7c0-1.5 2-3 5-3z" fill="#fff" opacity=".3"/>
        <text x="6.5" y="18" fontSize="5.5" fontWeight="bold" fill="#fff" fontFamily="sans-serif">SQL</text>
      </svg>;
    case 'mongodb':
    case 'mongo':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2c-2 4-4 6-4 10 0 4 2 7 4 10 2-3 4-6 4-10 0-4-2-6-4-10z" fill="#47A248"/>
        <path d="M12 18 " stroke="#47A248" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 3c1 2 2 3 2 5" stroke="#3D8A3D" strokeWidth="1" strokeLinecap="round"/>
      </svg>;
    case 'tailwindcss':
    case 'tailwind':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6c-2.5 0-4 1.25-4.5 3.75.75-1 1.625-1.375 2.625-1.125.57.143.977.557 1.428 1.013C12.327 10.93 13.2 12 15 12c2.5 0 4-1.25 4.5-3.75-.75 1-1.625 1.375-2.625 1.125-.57-.143-.977-.557-1.428-1.013C14.673 7.07 13.8 6 12 6zM7.5 12C5 12 3.5 13.25 3 15.75c.75-1 1.625-1.375 2.625-1.125.57.143.977.557 1.428 1.013C8.327 16.93 9.2 18 11 18c2.5 0 4-1.25 4.5-3.75-.75 1-1.625 1.375-2.625 1.125-.57-.143-.977-.557-1.428-1.013C10.173 13.07 9.3 12 7.5 12z" fill="#38BDF8"/>
      </svg>;
    case 'bootstrap':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#7952B3"/>
        <path d="M7 6h5.5c2.5 0 4 1.2 4 3 0 1.3-.8 2.3-2 2.6 1.5.3 2.5 1.4 2.5 2.9 0 2.1-1.7 3.5-4.5 3.5H7V6zm2 4.5h3c1.2 0 2-.6 2-1.5s-.8-1.5-2-1.5H9v3zm0 5h3.5c1.3 0 2.1-.7 2.1-1.7s-.8-1.8-2.1-1.8H9v3.5z" fill="#fff"/>
      </svg>;
    case 'angular':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 5.5l1.5 13L12 22l8.5-3.5L22 5.5 12 2z" fill="#DD0031"/>
        <path d="M12 2v20l8.5-3.5L22 5.5 12 2z" fill="#C3002F"/>
        <path d="M12 5.5L7 16h2l1-2.5h4L15 16h2L12 5.5zm0 3l1.5 3.5h-3L12 8.5z" fill="#fff"/>
      </svg>;
    case 'hibernate':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#59666C"/>
        <text x="4" y="16" fontSize="7" fontWeight="bold" fill="#BCAE79" fontFamily="sans-serif">HBN</text>
      </svg>;
    case 'dotnet':
    case '.net':
    case 'net':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#512BD4"/>
        <text x="3" y="16" fontSize="7.5" fontWeight="bold" fill="#fff" fontFamily="sans-serif">.NET</text>
      </svg>;
    case 'aws':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 9.5C7.5 8 8.8 7 10.5 7c1.2 0 2.2.6 2.8 1.5.5-.3 1-.5 1.7-.5 1.8 0 3 1.2 3 2.8 0 .2 0 .4-.1.6.6.4 1.1 1 1.1 1.9C19 14.6 18 15.5 16.7 15.5H7.3C6 15.5 5 14.6 5 13.3c0-1 .7-1.9 1.7-2.2-.1-.3-.2-.6-.2-1 0-1 .8-1.9 1.9-2.1C8 9.8 7.5 10.1 7.5 9.5z" fill="#FF9900"/>
        <path d="M8 18l1.5-1 1.5 1 1.5-1 1.5 1 1.5-1 1.5 1" stroke="#FF9900" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      </svg>;
    case 'docker':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12c0 4 4 6 9 6s9-2 9-6" fill="none" stroke="#2496ED" strokeWidth="1.2"/>
        <path d="M9 4h2v2H9zm3 0h2v2h-2zm-3 3h2v2H9zm3 0h2v2h-2zm3 0h2v2h-2zm-6 3h2v2H9zm3 0h2v2h-2z" fill="#2496ED"/>
        <path d="M20 9s2 0 2 3c0 0-1-1-3-1" stroke="#2496ED" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>;
    case 'kubernetes':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3.5 6.5v11L12 22l8.5-4.5v-11L12 2z" fill="#326CE5"/>
        <circle cx="12" cy="12" r="2.5" fill="#fff"/>
        <path d="M12 6v2.5M12 15.5V18M6 12h2.5M15.5 12H18" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>;
    case 'terraform':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 4l6 3.5v7L9 18 z" fill="#7B42BC"/>
        <path d="M3 7.5l5 3v6l-5-3v-6z" fill="#5C4EE5"/>
        <path d="M16 7.5l5 3v6l-5-3v-6z" fill="#4040B2"/>
      </svg>;
    case 'servicenow':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#62D84E"/>
        <text x="3.5" y="15.5" fontSize="6" fontWeight="bold" fill="#fff" fontFamily="sans-serif">NOW</text>
      </svg>;
    case 'firebase':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 20L7.5 5l4 7-6.5 8z" fill="#FFA000"/>
        <path d="M19 20L11.5 12l-4-7L5 20h14z" fill="#FFCA28"/>
        <path d="M11.5 12L14 4l5 16-7.5-8z" fill="#F57C00"/>
      </svg>;
    case 'flutter':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L4 11h6l3-3 3 3h-3l-3 3 3 3h3L13 20l7-7-7-11z" fill="#02569B"/>
        <path d="M13 14l-3 3 3 3 7-7-7 1z" fill="#0175C2" opacity=".8"/>
      </svg>;
    case 'swift':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#FA7343"/>
        <path d="M18 7c-3-1.5-7-1-10 2 3 0 5.5 1 7 3.5-2.5-1.5-6-2-8.5-.5 2 3 5.5 5 9.5 4.5-2 1-4 1-6 .5 2.5 2 6 2.5 8 1C20.5 15 19 9.5 18 7z" fill="#fff"/>
      </svg>;
    case 'kotlin':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2h20L12 12 22 22H2V2z" fill="url(#kg)"/>
        <defs><linearGradient id="kg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#7F52FF"/><stop offset="50%" stopColor="#C757BC"/><stop offset="100%" stopColor="#E44857"/></linearGradient></defs>
      </svg>;
    case 'salesforce':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 5c-1 0-2 .7-2.3 1.7C7 6.3 6.2 6 5.5 6 4 6 3 7 3 8.5c0 .3 0 .5.1.7C2.4 9.7 2 10.5 2 11.5 2 13.4 3.6 15 5.5 15h13c1.9 0 3.5-1.6 3.5-3.5 0-1.5-.9-2.8-2.2-3.3C19.6 7.1 18.4 6 17 6c-.7 0-1.3.2-1.8.6C14.4 5.6 12.9 5 12 5c-.8 0-1.5.3-2 .7C9.7 5.3 9.4 5 10 5z" fill="#00A1E0"/>
      </svg>;
    case 'hubspot':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="8" r="2.5" fill="#FF7A59"/>
        <circle cx="9" cy="16" r="2.5" fill="#FF7A59"/>
        <circle cx="17" cy="16" r="2.5" fill="#FF7A59"/>
        <path d="M15 10.5v3M10.5 14.5L13 13M16.5 13L19 14.5" stroke="#FF7A59" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="13.5" cy="13" r="1.5" fill="#FF7A59"/>
      </svg>;
    case 'googlesearchconsole':
    case 'searchconsole':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#458CF5"/>
        <circle cx="10.5" cy="10.5" r="4" stroke="#fff" strokeWidth="1.5" fill="none"/>
        <line x1="13.5" y1="13.5" x2="17" y2="17" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>;
    case 'googleanalytics4':
    case 'googleanalytics':
    case 'ga4':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#E37400"/>
        <rect x="5" y="10" width="3" height="8" rx="1.5" fill="#fff"/>
        <rect x="10.5" y="6" width="3" height="12" rx="1.5" fill="#fff"/>
        <rect x="16" y="13" width="3" height="5" rx="1.5" fill="#fff"/>
      </svg>;
    case 'googleads':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 16.5L8 6l4 7H8l-2 3.5H2z" fill="#4285F4"/>
        <path d="M12 13l4-7 4 7-4.5 7-3.5-7z" fill="#FBBC04"/>
        <circle cx="18" cy="16.5" r="3" fill="#34A853"/>
      </svg>;
    case 'metaads':
    case 'meta':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 14c0-3 1.5-6 3.5-6 1 0 1.8.8 2.5 2 .7-1.2 1.8-2.5 3-2.5 2.5 0 4 3 4 6 0 2-1 4-2.5 4-.8 0-1.5-.6-2.5-2.5-.8 1.5-1.7 2.5-2.5 2.5C4.5 17.5 3 16 3 14z" fill="#0064E0"/>
      </svg>;
    case 'hotjar':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#FF3C00"/>
        <path d="M8 17c0-3 1-5 4-7-1 2-.5 4 1 5.5S17 13 15 9c2 2 3 4 3 6 0 2.5-2 4-5 4s-5-1.5-5-2z" fill="#fff"/>
      </svg>;
    case 'ahrefs':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#FF8020"/>
        <text x="3.5" y="16" fontSize="8" fontWeight="bold" fill="#fff" fontFamily="sans-serif">Ah</text>
      </svg>;
    case 'semrush':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#FF642D"/>
        <text x="2.5" y="16" fontSize="7" fontWeight="bold" fill="#fff" fontFamily="sans-serif">SEM</text>
      </svg>;
    case 'googletag':
    case 'googletag':
    case 'googletagmanager':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#8AB4F8"/>
        <path d="M12 4l8 8-8 8-8-8 8-8z" fill="#4285F4"/>
        <path d="M12 8l4 4-4 4" fill="none" stroke="#fff" strokeWidth="1.5"/>
      </svg>;
    case 'lenel':
    case 'lenelonguard':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#003087"/>
        <text x="3" y="16" fontSize="6.5" fontWeight="bold" fill="#fff" fontFamily="sans-serif">LNL</text>
      </svg>;
    case 'zebra':
    case 'zebrazc300':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#111"/>
        <path d="M5 6h2v12H5zm3.5 0h1v12h-1zm2.5 0h3v12h-3zm4 0h1v12h-1zm2 0h2v12h-2z" fill="#fff"/>
      </svg>;
    case 'rfid':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="7" width="16" height="10" rx="2" fill="none" stroke="#1A73E8" strokeWidth="1.5"/>
        <rect x="7" y="11" width="4" height="3" rx="0.5" fill="#1A73E8"/>
        <path d="M3 4c4-3 14-3 18 0M5 6.5c3-2 11-2 14 0" stroke="#1A73E8" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      </svg>;
    case 'nfciso14443':
    case 'nfc':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4C7.6 4 4 7.6 4 12s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" fill="none" stroke="#009688" strokeWidth="1.5"/>
        <path d="M9 9v6h1.5v-2.5L13 15h1.5V9H13v2.5L10.5 9H9z" fill="#009688"/>
      </svg>;
    case 'postgresql':
    case 'postgres':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3C7 3 4 5.5 4 9c0 2.5 1.5 5 4 6l-1 4h2l.5-2c.8.1 1.7.2 2.5.2s1.7-.1 2.5-.2L15 19h2l-1-4c2.5-1 4-3.5 4-6 0-3.5-3-6-8-6z" fill="#336791"/>
        <path d="M9 9.5c0-.8.5-1.5 1.5-1.5s1.5.7 1.5 1.5-.5 1.5-1.5 1.5S9 10.3 9 9.5z" fill="#fff"/>
      </svg>;
    case 'powerbi':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="8" width="4" height="10" rx="1" fill="#F2C811"/>
        <rect x="9" y="5" width="4" height="13" rx="1" fill="#F2C811"/>
        <rect x="15" y="11" width="4" height="7" rx="1" fill="#E68A00"/>
        <path d="M3 20h18" stroke="#ccc" strokeWidth="1" strokeLinecap="round"/>
      </svg>;
    case 'zendesk':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6h16L4 16h16" stroke="#03363D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>;
    case 'azure':
    case 'microsoftazure':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 19l5-14 5 8H9.5L14 19H5z" fill="#0089D6"/>
        <path d="M12 5l4 10 3 4H14l-4-7 2-7z" fill="#0089D6" opacity=".7"/>
      </svg>;
    case 'reactnative':
      return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="12" rx="10.5" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)"/>
        <ellipse cx="12" cy="12" rx="10.5" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)"/>
        <ellipse cx="12" cy="12" rx="10.5" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)"/>
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
      </svg>;
    case 'revenuecatapplepay':
    case 'revenuecat':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#E45C2A"/>
        <text x="3.5" y="15.5" fontSize="6.5" fontWeight="bold" fill="#fff" fontFamily="sans-serif">RC</text>
      </svg>;
    case 'googlepay':
    case 'applepay':
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#1a1a1a"/>
        <text x="3" y="15.5" fontSize="6" fontWeight="bold" fill="#fff" fontFamily="sans-serif">Pay</text>
      </svg>;
    default:
      return <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#e2e8f0"/>
        <text x="7" y="16" fontSize="8" fill="#64748b" fontFamily="sans-serif">{name.slice(0,2).toUpperCase()}</text>
      </svg>;
  }
};

// Shared form component used by all service pages
export function ServiceForm({ title, options, selectLabel, submitLabel, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="svc-form-v2">
      <div className="svc-form-header">
        <div className="svc-form-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <div>
          <h4 className="svc-form-title">{title}</h4>
          <p className="svc-form-sub">Free consultation · No commitment</p>
        </div>
      </div>
      <div className="svc-form-fields">
        <div className="svc-field-row">
          <div className="svc-field-group">
            <label className="svc-field-label">Company Name <span>*</span></label>
            <input type="text" required placeholder="e.g. Acme Corp" className="svc-field-input"/>
          </div>
          <div className="svc-field-group">
            <label className="svc-field-label">Work Email <span>*</span></label>
            <input type="email" required placeholder="you@company.com" className="svc-field-input"/>
          </div>
        </div>
        <div className="svc-field-group">
          <label className="svc-field-label">{selectLabel}</label>
          <select className="svc-field-input">
            {options.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <button type="submit" className="svc-form-submit">
          {submitLabel}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
      <style>{`
        .svc-form-v2 { background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:28px; box-shadow:0 4px 20px rgba(15,23,42,0.06); }
        .svc-form-header { display:flex; align-items:center; gap:14px; margin-bottom:22px; padding-bottom:18px; border-bottom:1px solid #f1f5f9; }
        .svc-form-icon { width:44px; height:44px; border-radius:10px; background:rgba(30,136,229,0.1); color:var(--color-blue); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .svc-form-title { font-size:1.05rem; font-weight:700; color:var(--color-navy); margin:0 0 3px; }
        .svc-form-sub { font-size:0.78rem; color:#94a3b8; margin:0; }
        .svc-form-fields { display:flex; flex-direction:column; gap:14px; }
        .svc-field-row { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
        .svc-field-group { display:flex; flex-direction:column; gap:6px; }
        .svc-field-label { font-size:0.8rem; font-weight:600; color:#475569; }
        .svc-field-label span { color:#ef4444; }
        .svc-field-input { padding:10px 14px; border:1.5px solid #e2e8f0; border-radius:8px; font-size:0.875rem; color:var(--color-text-primary); background:#fafafa; outline:none; transition:border-color 0.2s,background 0.2s; }
        .svc-field-input:focus { border-color:var(--color-blue); background:#fff; }
        .svc-form-submit { display:flex; align-items:center; justify-content:center; gap:8px; background:var(--color-blue); color:#fff; border:none; padding:13px 20px; border-radius:8px; font-weight:700; font-size:0.9rem; cursor:pointer; transition:background 0.2s,transform 0.15s; margin-top:4px; }
        .svc-form-submit:hover { background:var(--color-blue-hover); transform:translateY(-1px); }
        @media(max-width:600px) { .svc-field-row { grid-template-columns:1fr; } }
      `}</style>
    </form>
  );
}

export function FormSuccess({ message = "Request Received!" }) {
  return (
    <div style={{textAlign:'center',padding:'40px 20px',display:'flex',flexDirection:'column',alignItems:'center',gap:'14px',background:'#fff',borderRadius:'14px',border:'1px solid #e2e8f0'}}>
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="20 6 9 17 4 12"/>
      </svg>
      <h4 style={{color:'var(--color-navy)',fontSize:'1.1rem',margin:0}}>{message}</h4>
      <p style={{color:'var(--color-text-secondary)',fontSize:'0.9rem',margin:0}}>We'll contact you within 24 business hours.</p>
    </div>
  );
}
