import { FormEvent, useState } from 'react';
import { trpc } from '../lib/trpc';
import { useNotify } from '../context/notification-context';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

function ContactForm() {

  const [input, setInput] = useState({
    email: '',
    message: ''
  });

  const { mutate, isLoading } = trpc.useMutation('contact');

  const { notify } = useNotify();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    mutate(input, {
      onSuccess: (res) => {
        notify({
          title: 'Success!',
          description: res.data.message,
          duration: 5000
        });

        setInput({
          email: '',
          message: ''
        }); 
      },
      onError: (error) => {
        notify({
          type: 'error',
          title: 'Error!',
          description: error.message,
          duration: 5000
        });
        setInput({
          email: '',
          message: ''
        }); 
      },
    });
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex text-lg text-gray-50 flex-col gap-4 items-end">
        <input value={input.email} required type="email" onChange={(e) => setInput(s => ({ ...s, email: e.target.value }))} placeholder="Your email"
          className="transition focus:ring-violet-400 focus:border-violet-400 focus:outline-none w-full bg-transparent py-2 px-4 text-lg placeholder-gray-500 shadow-md border-2 border-gray-700 rounded-lg"/>
        <textarea value={input.message} required autoFocus onChange={(e) => setInput(s => ({ ...s, message: e.target.value }))} name="message" placeholder="Send me a message"
          className="h-32 transition focus:ring-violet-400 focus:border-violet-400 focus:outline-none w-full bg-transparent py-2 px-4 text-lg placeholder-gray-500 shadow-md border-2 border-gray-700 rounded-lg"/>
        <button 
          type="submit" 
          className="text-gray-50 text-xl flex items-center gap-2 transition py-2 px-4 bg-violet-400 rounded-full w-auto hover:bg-violet-500 focus:bg-violet-300 focus:outline-none focus:ring-2 focus:ring-offset-gray-900 shadow-md focus:ring-offset-2 focus:ring-violet-300">
          <span>
            Submit
          </span>
          {isLoading ?
            <svg className="spinner" viewBox="0 0 50 50">
              <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg> : <PaperAirplaneIcon className='w-6 h-6' />
          }
        </button>
      </div>
    </form>
  );
}

export default ContactForm;