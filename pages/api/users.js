// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { adminAuth } from '../../firebase/admin';

export default async function handler(req, res) {
  const { user, uids = [] } = req.body;

  // si user.uid no es igual a UID1 o UID2
  if (!(user?.uid === process.env.UID1 || user?.uid === process.env.UID2)) {
    return res.status(401).json({ data: null, error: 'Unauthorized' });
  }

  try {
    const { users, notFound } = await adminAuth.getUsers(uids);

    return res.status(200).json({ data: { users, notFound }, error: null });
  } catch (error) {
    console.log('Error fetching user data:', error);
    return res.status(500).json({ data: null, error: 'Error getting users' });
  }
}
