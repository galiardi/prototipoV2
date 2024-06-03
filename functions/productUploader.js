import firebase from '../firebase/client';

export const productUplodaer = (formData, setLoading, setFormData) => {
  setLoading(true);
  const db = firebase.firestore();

  upload(db, formData, setLoading, setFormData);
};

const upload = (db, formData, setLoading, setFormData) => {
  const doc = {
    ...formData,
    date: Date.now(),
  };

  db.collection('tips')
    .add(doc)
    .then(() => {
      setFormData({
        category: '',
        title: '',
        description: '',
      });
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
};
