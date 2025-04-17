import goesLogo from '../assets/goes_logo.png';

const GoesLogo = () => (
  <div style={{ textAlign: 'center', marginTop: 24, marginBottom: 24 }}>
    <img
      src={goesLogo}
      alt="GOES Logo"
      style={{
        maxWidth: 320,
        width: '60%',
        height: 'auto',
        display: 'block',
        margin: '0 auto',
        filter: 'drop-shadow(0 2px 8px #bbb)'
      }}
    />
  </div>
);

export default GoesLogo;
