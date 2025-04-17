import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <div
    style={{
      position: 'fixed',
      top: 18,
      right: 36,
      display: 'flex',
      alignItems: 'center',
      zIndex: 2000,
      userSelect: 'none',
    }}
  >
    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        style={{ display: 'none' }}
        aria-label="Alternar dark mode"
      />
      <span
        style={{
          width: 44,
          height: 24,
          background: darkMode ? '#333a45' : '#e0e0e0',
          borderRadius: 16,
          display: 'inline-block',
          position: 'relative',
          transition: 'background 0.3s',
          boxShadow: darkMode ? '0 1px 6px #111b' : '0 1px 6px #bbb8',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 3.5,
            left: darkMode ? 23 : 4,
            width: 17,
            height: 17,
            borderRadius: '50%',
            background: darkMode ? '#e0e0e0' : '#fff',
            boxShadow: darkMode ? '0 2px 6px #111b' : '0 2px 6px #bbb8',
            transition: 'left 0.3s, background 0.3s',
          }}
        />
      </span>
      <span
        style={{
          marginLeft: 12,
          color: darkMode ? '#fff' : '#222',
          fontWeight: 500,
          fontSize: '1.18rem',
          letterSpacing: 0.5,
          fontFamily: 'Tahoma, Arial, sans-serif',
          textShadow: darkMode ? '0 1px 2px #111b' : 'none',
          transition: 'color 0.3s',
        }}
      >
        Dark Mode
      </span>
    </label>
  </div>
);


export default DarkModeToggle;
