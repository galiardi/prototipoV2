// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  url: string | false;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { body } = req;
  const uid = body?.user?.uid;
  if (uid === process.env.UID1 || uid === process.env.UID2) {
    console.log(uid);
    res.status(200).json({ url: '/admin-dashboard' });
  } else {
    res.status(200).json({ url: false });
    console.log('error en door');
  }
}
