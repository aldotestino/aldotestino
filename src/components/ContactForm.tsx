import { FormEvent, useMemo, useState } from 'react';
import { useModal } from '../utils/hooks/useModal';
import { trpc } from '../utils/trpc';
import { getErrorMessage } from '../utils/validators';
import { useNotify } from './Notification';

function ContactForm() {

  const [input, setInput] = useState({
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const error = useMemo(() => getErrorMessage(input.email), [input.email]);
  const { isOpen, open, close } = useModal();

  const { mutate } = trpc.useMutation('contact');

  const { notify } = useNotify();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    mutate(input, {
      onSuccess: (res) => {
        notify({
          title: 'Success!',
          description: res.data.message,
          duration: 5000
        });
        setLoading(false);
        close();
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
        setLoading(false);
        close();
        setInput({
          email: '',
          message: ''
        }); 
      },
    });
  }

  return (
    <>
      <form onSubmit={e => {e.preventDefault(); open();}}>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <input value={input.email} inputMode="email" onChange={(e) => setInput(s => ({ ...s, email: e.target.value }))} placeholder="selena@gmail.com" className="transition focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none w-full bg-transparent py-2 px-4 text-lg placeholder-gray-500 shadow-md border-2 border-gray-500 rounded-lg"/>
          <button disabled={input.email === '' || error !== ''} type="submit" className="text-gray-50 disabled:hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 inline-flex items-center justify-center space-x-2 transition whitespace-nowrap py-2 px-4 text-lg bg-indigo-500 rounded-lg w-auto hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-gray-900 shadow-md focus:ring-offset-2 focus:ring-indigo-400">
            Contact me
          </button>
        </div>
        {error && <p className="my-1 text-red-300">{error}</p>}
        <p className="mt-2">We will not share your email.</p>
      </form>

      {
        isOpen && 
        <div className='fixed top-0 left-0 px-4 h-full w-full flex bg-black/60 '>
          <div className='w-full md:w-3/4 lg:w-2/5 bg-gray-900 mx-auto my-auto rounded-lg p-8 '>
            <div className='flex items-center'>
              <label htmlFor="email" className='pr-4 text-lg'>From:</label>
              <input disabled value={input.email} name="email" className="transition focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none w-full bg-transparent py-2 px-4 text-lg placeholder-gray-500 shadow-md border-2 border-gray-500 rounded-lg disabled:text-gray-500"/>
            </div>
            <form className='h-full pt-4' onSubmit={handleSubmit}>
              <textarea value={input.message} autoFocus onChange={(e) => setInput(s => ({ ...s, message: e.target.value }))} name="message" placeholder="Insert your message" className="h-48 ransition focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none w-full bg-transparent py-2 px-4 text-lg placeholder-gray-500 shadow-md border-2 border-gray-500 rounded-lg"></textarea>

              <div className='flex justify-end pt-4'>
                <button disabled={loading || input.email === '' || error !== ''} type="submit" className="text-gray-50 disabled:hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 inline-flex items-center justify-center space-x-2 transition whitespace-nowrap py-2 px-4 text-lg bg-indigo-500 rounded-lg w-auto hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-gray-900 shadow-md focus:ring-offset-2 focus:ring-indigo-400">
                  {loading &&
                    <svg className="spinner" viewBox="0 0 50 50">
                      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                    </svg>           
                  }
                  <span>
                    {!loading ? 'Contact me' : 'Submitting'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  );
}

export default ContactForm;