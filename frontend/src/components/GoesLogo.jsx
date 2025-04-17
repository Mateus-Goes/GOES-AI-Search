import goesLogo from '../assets/goes_logo.png';

const GoesLogo = ({ darkMode }) => (
  <div style={{ textAlign: 'center', marginTop: -50, marginBottom: -120 }}>
    <img
      src={goesLogo}
      alt="GOES Logo"
      style={{
        maxWidth: 450,
        width: '90%',
        height: 'auto',
        display: 'block',
        margin: '0 auto',
        filter: darkMode
          ? 'drop-shadow(0 6px 24px #111b)'
          : 'drop-shadow(0 6px 24px #b7b7b7)'
      }}
    />
  </div>
);




export default GoesLogo;
