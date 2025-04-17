import React, { useState } from 'react';
import './styles/app.css';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import History from './components/History';
import ExportButton from './components/ExportButton';
import LoadingIndicator from './components/LoadingIndicator';
import GoesLogo from './components/GoesLogo';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);
  const [query, setQuery] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  // Placeholder for backend integration
  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setSummary('');
    // Simulate API call
    setTimeout(() => {
      const fakeSummary = `Summary for: ${query}\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Keyword highlighting demo.`;
      setSummary(fakeSummary);
      setHistory([{ query, summary: fakeSummary }, ...history]);
      setLoading(false);
    }, 1500);
  };

  const handleSelectHistory = (item) => {
    setQuery(item.query);
    setSummary(item.summary);
  };

  return (
    <div
      style={{
        background: darkMode ? '#181a1b' : '#f6f8fa',
        minHeight: '100vh',
        paddingTop: 0,
        color: darkMode ? '#f5f5f5' : '#181a1b',
        transition: 'background 0.3s, color 0.3s',
        position: 'relative',
      }}
    >
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <GoesLogo darkMode={darkMode} />
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 0 8px 0',
          display: 'flex',
          gap: '1.4rem',
          alignItems: 'flex-start',
        }}
      >
        {/* Search History Sidebar */}
        <div
          style={{
            flex: '0 0 260px',
            minHeight: 420,
            paddingRight: 16,
            background: darkMode ? '#23272b' : 'transparent',
            borderRadius: 12,
            boxShadow: darkMode ? '0 2px 12px #1118' : 'none',
            border: darkMode ? '1px solid #333' : 'none',
            transition: 'background 0.3s, box-shadow 0.3s',
          }}
        >
          <History history={history} onSelect={handleSelectHistory} darkMode={darkMode} />
        </div>
        {/* Main Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 0, marginTop: 0 }}>
            <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} loading={loading} darkMode={darkMode} />
          </div>
          <div style={{ marginBottom: 32 }}>
            {loading && <LoadingIndicator darkMode={darkMode} />}
            <Results summary={summary} keywords={query} darkMode={darkMode} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ExportButton summary={summary} disabled={!summary || loading} darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
