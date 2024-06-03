import firebase from '../../firebase/client';

export const getGeneralIpcSerie = async () => {
  const db = firebase.firestore();
  try {
    const response = await db
      .collection('economic-indicators')
      .doc('generalIPCSerie')
      .get();

    const data = response.data();

    return { data, error: null };
  } catch (e) {
    console.log(e);
    return { data: null, error: e };
  }
};
