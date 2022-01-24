import { NextApiRequest, NextApiResponse } from 'next';
import { emailSchema } from '../../../utils/validators';
import { updateNotionDB } from '../../../utils/notion';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Request extends NextApiRequest {
  body: {
    email: string
  }
}

export default async function(req: Request, res: NextApiResponse) {
  if(req.method === 'POST') {
    const { email } = req.body;

    if(email) {
      try {
        if(!emailSchema.check(email)) {
          res.status(400).json({ error: 'This is not a valid email.' });
          return;
        }

        // manually checking for existing customer as `@unique` with mongo doesn't work in prisma yet
        // currently `prisma^2.22.0`
        const customerExists = await prisma.customer.findUnique({
          where: {
            email
          }
        });

        if(customerExists) {
          res.status(400).json({ error: 'This email is already in use.' });
          return;
        }

        const customer = await prisma.customer.create({
          data: {
            email
          }
        });

        const notion = await updateNotionDB({ email: customer.email, createdAt: customer.createdAt });
        console.log(notion);

        res.status(200).json(customer);
      } catch(e) {
        console.error(e);
        res.status(500).json({ error: 'Somethig went wrong.' });
      }
    } else {
      res.status(400).json({ error: 'Email is not defined.' });
    }
  }
}
