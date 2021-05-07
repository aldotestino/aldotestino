// using `/api/v1` for prod (mongoose)
// using `/api/v2` for dev (prisma^2.22.0)
export const URI = process.env.NODE_ENV === 'production' ? '/api/v1/contact' : '/api/v2/contact';
