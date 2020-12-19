import React, { useState, useReducer, useRef, useMemo, useCallback } from 'react';
import {useCharacters} from '../../hooks';
import Search from './Search';

const API = 'https://rickandmortyapi.com/api/character';

const initialState = {
  favorites: []
}

function favoritesReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites , action.payload]
      }
    default:
      return state;
  } 
}

export default function Characters() {
  const characters = useCharacters(API);
  const [search, setSearch] = useState('');
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);
  const searchInput = useRef(null)

  function handleFavorites(favorite) {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: favorite }); 
  }

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, [])

  const filteredUser = useMemo(() => 
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase())
    }),
    [characters, search]
  )

  console.log(characters)

  return (
    <div>
      {favorites.favorites.length !== 0 &&
        <>
          <h2>Favoritos</h2>
          {favorites.favorites.map(favorite => 
            <div key={favorite.id}>
              <p>{favorite.name}</p>
            </div>
          )}
        </>
      }
      <div>
        <h2>Buscar personaje</h2>
        <Search 
          search={search}
          searchInput={searchInput}
          handleSearch={handleSearch}
        />
      </div>
      {filteredUser.map(character => {
        return (
          <div key={character.id}>
            <p>{character.name}</p>
            <button 
              onClick={() => handleFavorites(character)}
            >
              Agregar a favoritos
            </button>
          </div>
        )
      })}
    </div>
  )
}
