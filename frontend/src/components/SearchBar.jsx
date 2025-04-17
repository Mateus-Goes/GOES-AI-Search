import React from 'react';

const SearchBar = ({ query, setQuery, onSearch, loading }) => (
  <div className="search-bar" style={{ display: 'flex', gap: 8, width: '100%', maxWidth: 540 }}>
    <input
      type="text"
      placeholder="Digite sua busca..."
      value={query}
      onChange={e => setQuery(e.target.value)}
      disabled={loading}
      style={{
        flex: 1,
        padding: '0.75rem',
        border: '2px solid #b0b0b0',
        borderRadius: 4,
        fontSize: '1.1rem',
        fontFamily: 'Tahoma, Arial, sans-serif',
        background: '#f9f9f9',
        outline: 'none',
        boxShadow: 'inset 1px 1px 2px #eee',
      }}
    />
    <button
      onClick={onSearch}
      disabled={loading || !query.trim()}
      style={{
        padding: '0.75rem 1.5rem',
        background: loading ? '#7ecb8f' : '#3cb371',
        color: '#fff',
        border: '2px solid #246c45',
        borderRadius: 4,
        fontWeight: 'bold',
        fontSize: '1.1rem',
        fontFamily: 'Tahoma, Arial, sans-serif',
        cursor: loading ? 'not-allowed' : 'pointer',
        boxShadow: '1px 2px 0 #b0b0b0',
        transition: 'background 0.2s',
        textShadow: '0 1px 0 #246c45',
        opacity: loading ? 0.7 : 1,
      }}
    >
      {loading ? 'Buscando...' : 'Pesquisar'}
    </button>
  </div>
);

export default SearchBar;
