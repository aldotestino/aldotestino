import { NextApiRequest, NextApiResponse } from 'next';

interface Request extends NextApiRequest {
  body: {
    email: string
  }
}

export default (req: Request, res: NextApiResponse) => {
  console.log(req.body.email);
  
  if(req.method === 'POST') {
    res.status(200).json({
      echo: req.body.email
    });
  }
};
