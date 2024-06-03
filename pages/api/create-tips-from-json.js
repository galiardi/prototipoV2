import firebase from '../../firebase/client';

export default async function handler(req, res) {
  const { tips } = req.body;
  console.log(tips);
  const db = firebase.firestore();
  try {
    const promises = tips.map((tip) => {
      return db.collection('tips').add({ ...tip, date: Date.now() });
    });
    console.log(promises);
    const result = await Promise.all(promises);
    console.log(result);
    return res.status(200).json({ data: result, error: null });
  } catch (error) {
    return res.status(500).json({ data: null, error });
  }
}
