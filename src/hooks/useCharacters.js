import { useState, useEffect } from 'react';

export const useCharacters = function(url) {
  const [characters, setCharacter ] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacter(data.results))
  }, [url])

  return characters
}
