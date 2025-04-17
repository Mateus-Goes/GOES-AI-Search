import React from 'react';

// Simulação de links para visual retrô
const fakeLinks = [
  'https://pt.wikipedia.org/wiki/Sport_Club_Corinthians_Paulista_in_international_football',
  'https://www.meutimao.com.br/mundial-de-clubes',
  'https://pt.wikipedia.org/wiki/Copa_do_Mundo_de_Clubes_da_FIFA_de_2012',
  'https://en.wikipedia.org/wiki/2000_FIFA_Club_World_Championship',
  'https://www.meutimao.com.br/titulos-do-corinthians/mundial_de_clubes_da_fifa_2000'
];

const highlightText = (text, keywords) => {
  if (!keywords) return text;
  const regex = new RegExp(`(${keywords.split(' ').join('|')})`, 'gi');
  return text.split(regex).map((part, i) =>
    regex.test(part) ? <mark key={i}>{part}</mark> : part
  );
};

const Results = ({ summary, keywords, darkMode }) => (
  <div className="results" style={{ marginTop: 16 }}>
    <div style={{
      border: darkMode ? '2px solid #333' : '2px solid #222',
      borderRadius: 6,
      background: darkMode ? '#23272b' : '#f9f9f9',
      padding: '18px 18px 10px 18px',
      marginBottom: 18,
      fontFamily: 'Tahoma, Arial, sans-serif',
      boxShadow: darkMode ? '1px 2px 0 #111' : '1px 2px 0 #bbb',
      color: darkMode ? '#f5f5f5' : '#222',
      transition: 'background 0.3s, color 0.3s, border 0.3s',
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: 8 }}>
        Referências encontradas para sua pesquisa:
      </div>
      <ol style={{ paddingLeft: 20, marginBottom: 16 }}>
        {fakeLinks.map((link, idx) => (
          <li key={idx} style={{ marginBottom: 3 }}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: darkMode ? '#7abaff' : '#1a0dab', textDecoration: 'underline', fontSize: '1rem', fontFamily: 'Tahoma, Arial, sans-serif', transition: 'color 0.3s' }}
            >
              Link ({idx + 1}): {link}
            </a>
          </li>
        ))}
      </ol>
      <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: 6 }}>
        Resumo do ChatGPT baseado nos sites acima:
      </div>
      <div className="summary-text" style={{
        background: darkMode ? '#181a1b' : '#fff',
        border: darkMode ? '1px solid #444' : '1px solid #ccc',
        borderRadius: 5,
        padding: '12px 14px',
        fontSize: '1.05rem',
        minHeight: 52,
        fontFamily: 'Tahoma, Arial, sans-serif',
        color: darkMode ? '#f5f5f5' : '#222',
        transition: 'background 0.3s, color 0.3s, border 0.3s',
      }}>
        {summary ? highlightText(summary, keywords) : <em style={{ color: darkMode ? '#bbb' : '#888' }}>No results yet.</em>}
      </div>
    </div>
  </div>
);


export default Results;
