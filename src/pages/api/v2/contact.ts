import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

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

        await prisma.$connect();

        const customer = await prisma.customer.create({
          data: {
            email
          }
        });

        res.status(200).json(customer);

      } catch(e) {
        res.status(500).json({ error: e.message });
      } finally {
        await prisma.$disconnect();
      }
    } else {
      res.status(400).json({ error: 'Email is not defined' });
    }
  }
}