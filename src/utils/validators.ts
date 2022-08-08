import * as z from 'zod';

const emailSchema = z.string().email();

const zValidateEmail = (email: string) => emailSchema.safeParse(email).success;

export const getErrorMessage = (email: string) => zValidateEmail(email) || email === '' ? '' : 'Insert a valid eamil';