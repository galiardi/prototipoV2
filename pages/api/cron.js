import firebase from '../../firebase/client';

export default async function handler(req, res) {
  try {
    // IPC general variación anual
    const generalIPCresponse = await fetch(
      `https://si3.bcentral.cl/SieteRestWS/SieteRestWS.ashx?user=${process.env.BANCO_CENTRAL_USER}&pass=${process.env.BANCO_CENTRAL_PASSWORD}&timeseries=G073.IPC.V12.2023.M`
    );
    const { Series: generalIPC } = await generalIPCresponse.json();

    const db = firebase.firestore();
    await db
      .collection('economic-indicators')
      .doc('generalIPCSerie')
      .set({ ...generalIPC, date: Date.now() });

    return res.status(200).json({ data: { generalIPC }, error: null });
  } catch (error) {
    console.log('Error fetching user data:', error);
    return res.status(500).json({ data: null, error: 'Error getting users' });
  }
}
