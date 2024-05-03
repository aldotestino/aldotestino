'use server';

export async function sendMessage({ email, message }: { email: string, message: string }) {
  console.log(email, message);
}