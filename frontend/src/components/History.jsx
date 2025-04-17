import React from 'react';

const History = ({ history, onSelect }) => (
  <div className="history">
    <h3>Search History</h3>
    <ul>
      {history.length === 0 && <li><em>No history yet.</em></li>}
      {history.map((item, idx) => (
        <li key={idx} onClick={() => onSelect(item)}>
          {item.query}
        </li>
      ))}
    </ul>
  </div>
);

export default History;
