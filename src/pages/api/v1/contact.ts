import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../middleware/mongo';
import Customer from '../../../models/Customer';
import { updateNotionDB } from '../../../utils/notion';
import { emailSchema } from '../../../utils/validators';

interface Request extends NextApiRequest {
  body: {
    email: string
  }
}

const DUPLICATE_ERROR_CODE = 'E11000'; // mongo duplicate key error

const handler = async (req: Request, res: NextApiResponse) => {
  if(req.method === 'POST') {
    const { email } = req.body;

    if(email) {
      try {
        if(!emailSchema.check(email)) {
          res.status(400).json({ error: 'This is not a valid email.' });
          return;
        }
        
        const customer = await new Customer({ email }).save();
        
        updateNotionDB({ email, createdAt: new Date(customer['createdAt']) });

        res.status(200).json(customer);
      }catch (e) {
        if(e.message.includes(DUPLICATE_ERROR_CODE)) {
          res.status(400).json({ error: 'This email is already in use.' });
        } else {
          console.error(e);
          res.status(500).json({ error: 'Somethig went wrong.' });
        }
      }
    } else {
      res.status(400).json({ error: 'Email is not defined.' });
    }
  }
};

export default connectDB(handler);
