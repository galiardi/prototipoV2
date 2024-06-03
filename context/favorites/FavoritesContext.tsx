import { createContext } from 'react';

interface ContextProps {
  favorites: string[];
}

export const FavoritesContext = createContext({} as ContextProps);
