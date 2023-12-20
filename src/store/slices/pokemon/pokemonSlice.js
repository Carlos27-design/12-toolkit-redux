import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state /* action */) => {
      state.isLoading = true;
    },
    setPokemons: (state, actions) => {
      state.isLoading = false;
      state.page = actions.payload.page;
      state.pokemons = actions.payload.pokemons;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
