// SearchResults.js
import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <p>{result.name}</p>
          {/* Tambahkan detail atau tautan ke halaman koin jika diperlukan */}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
