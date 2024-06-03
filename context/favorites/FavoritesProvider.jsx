import { useEffect, useState } from 'react';
import { FavoritesContext } from '.';
import firebase from '../../firebase/client';
import { useAuth } from '../../context/auth';

export const FavoritesProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    if (!user) return;
    const db = firebase.firestore();
    const unsubscribe = db
      .collection('favoritesByUser')
      .doc(user.uid)
      .onSnapshot((doc) => {
        const data = doc.data();
        if (!data) return;
        setState(data?.favorites);
      });

    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <FavoritesContext.Provider value={{ favorites: [...state] }}>
      {children}
    </FavoritesContext.Provider>
  );
};
