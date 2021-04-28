import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../middleware/mongo';
import Customer from '../../../models/Customer';

interface Request extends NextApiRequest {
  body: {
    email: string
  }
}

const handler = async (req: Request, res: NextApiResponse) => {
  if(req.method === 'POST') {
    const { email } = req.body;

    if(email) {
      try {
        const customer = await new Customer({ email }).save();
        res.status(200).json(customer);
      }catch (e) {
        res.status(500).json({ error: e.message });
      }
    }else {
      res.status(400).json({ error: 'Email is not defined' });
    }
  }
};

export default connectDB(handler);
