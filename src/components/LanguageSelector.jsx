import React, { useState, useEffect } from 'react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'Hindi' },
  { code: 'es', label: 'Spanish' },
  { code: 'fr', label: 'French' },
  { code: 'de', label: 'German' },
  { code: 'zh-CN', label: 'Chinese' },
  { code: 'ar', label: 'Arabic' },
  { code: 'ru', label: 'Russian' },
  { code: 'pt', label: 'Portuguese' },
  { code: 'ja', label: 'Japanese' },
];

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    // Read the current language from the googtrans cookie
    const match = document.cookie.match(/(^|;) ?googtrans=([^;]*)(;|$)/);
    if (match) {
      const parts = match[2].split('/');
      if (parts.length === 3) {
        setCurrentLang(parts[2]);
      }
    }
  }, []);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setCurrentLang(lang);
    
    if (lang === 'en') {
      // Clear cookie for English (default language)
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=' + window.location.hostname + '; path=/;';
    } else {
      // Set cookie for translation
      document.cookie = `googtrans=/en/${lang}; path=/`;
    }
    
    // Reload to apply translation
    window.location.reload();
  };

  return (
    <select 
      value={currentLang} 
      onChange={handleLanguageChange}
      style={{
        background: 'var(--bg-card)',
        color: 'var(--text-main)',
        border: '1px solid var(--border-light)',
        padding: '8px 12px',
        borderRadius: '20px',
        outline: 'none',
        cursor: 'pointer',
        fontSize: '13px',
        fontFamily: 'inherit',
        fontWeight: '500',
        appearance: 'none',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        textAlign: 'center',
      }}
    >
      {languages.map(l => (
        <option key={l.code} value={l.code}>{l.label}</option>
      ))}
    </select>
  );
}
