import React, { useState } from 'react';
import './styles/app.css';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import History from './components/History';
import ExportButton from './components/ExportButton';
import LoadingIndicator from './components/LoadingIndicator';
import GoesLogo from './components/GoesLogo';

function App() {
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
    <div style={{ background: '#f6f8fa', minHeight: '100vh', paddingTop: 40 }}>
      <div style={{ maxWidth: 900, margin: '0 auto', background: '#fff', border: '2px solid #222', borderRadius: 8, boxShadow: '0 2px 12px #bbb', padding: 0 }}>
        <GoesLogo />
        <div style={{ padding: '0 32px 32px 32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} loading={loading} />
          </div>
          <div style={{ display: 'flex', gap: '2rem', marginTop: 32 }}>
            <div style={{ flex: 1, borderRight: '1px solid #ccc', paddingRight: 24 }}>
              <History history={history} onSelect={handleSelectHistory} />
            </div>
            <div style={{ flex: 3, paddingLeft: 24 }}>
              {loading && <LoadingIndicator />}
              <Results summary={summary} keywords={query} />
              <ExportButton summary={summary} disabled={!summary || loading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
