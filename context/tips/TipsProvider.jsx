import { useEffect, useState } from 'react';
import { TipsContext } from '.';
import firebase from '../../firebase/client';

export const TipsProvider = ({ children }) => {
  const [state, setState] = useState({ tips: [] });
  const db = firebase.firestore();

  useEffect(() => {
    const unsubscribe = db
      .collection('tips')
      .orderBy('date', 'desc')
      .onSnapshot((querySnapshot) => {
        const temp = [];
        querySnapshot.forEach((doc) => {
          const id = doc.id;
          const data = doc.data();
          temp.push({ id, ...data });
        });
        let luisTips = [];
        let vulgarTips = [];
        temp.forEach((tip) => {
          if (tip.author === 'Luis') {
            luisTips.push(tip);
          } else {
            vulgarTips.push(tip);
          }
        });
        const sortedTips = [...luisTips, ...vulgarTips];
        setState({ tips: sortedTips });
      });

    return () => {
      unsubscribe();
    };
  }, [db]);

  const tipsByIdObj = state.tips.reduce(
    (acc, el) => ({ ...acc, [el.id]: el }),
    {}
  );

  const tipsByCategoryObj = state.tips.reduce(
    (acc, el) => ({ ...acc, [el.category]: el }),
    {}
  );

  return (
    <TipsContext.Provider
      value={{
        ...state,
        ...tipsByIdObj,
        ...tipsByCategoryObj,
        tipsByIdObj,
      }}
    >
      {children}
    </TipsContext.Provider>
  );
};
