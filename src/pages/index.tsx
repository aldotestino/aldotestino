import { AcademicCapIcon, CodeIcon, MailIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import React, { useMemo, useState } from 'react';
import { useNotify } from '../components/Notification';
import SEO from '../components/SEO';
import StackIcon from '../components/StackIcon';
import { LinkWithIcon, TextWithIcon } from '../components/WithIcon';
import { URI } from '../utils/config';
import { emailSchema } from '../utils/validators';

const jobs = [
  {
    top: 'Liceo Scientifico',
    bot: 'O. Tedone',
    icon: AcademicCapIcon
  },
  {
    top: 'Politecnico di Bari',
    bot: 'Ingegneria Informatica',
    icon: AcademicCapIcon
  },
  {
    top: 'Full Stack Developer',
    icon: CodeIcon
  }
];

const stack = ['TypeScript', 'Next.js', 'GraphQL', 'Tailwindcss', 'Prisma', 'Docker'];

const contacts = [
  {
    text: 'Twitter',
    link: 'https://twitter.com/aldotestino4',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
    </svg>
  },
  {
    text: 'Discord',
    link: 'https://discord.gg/N3hKAKVZ',
    icon: <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"/>
    </svg>
  },
  {
    text: 'GitHub',
    link: 'https://github.com/aldotestino',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  },
  {
    text: 'Email',
    email: 'aldo.testino@libero.it',
    icon: <MailIcon className="w-8 h-8" />
  }
];

export default function Home() {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const error = useMemo(() => emailSchema.check(email) || email === '' ? '' : 'Insert a valid email', [email]);

  const { notify } = useNotify();

  async function handleSubmit(e) {
    e.preventDefault();
    if(!email) {
      return;
    }
    setLoading(true);
    const res = await fetch(URI, {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(r => r.json());
    
    if(res.error) {
      notify({
        type: 'error',
        title: 'Something went wrong!',
        description: res.error,
        duration: 5000
      });
    }else {
      notify({
        title: 'Success!',
        description: 'You will receive an email as soon as possible...',
        duration: 5000
      });
    }

    setLoading(false);
    setEmail('');
  }

  return (
    <>
      <SEO />

      <div className="overflow-hidden bg-gray-50 text-gray-900">
        <div className="min-h-screen py-20 bg-gray-900 text-gray-50">
          <div className="max-w-6xl mx-auto px-5 sm:px-10 sm:flex sm:justify-between">
            <div className="flex-grow sm:max-w-xl sm:pr-10">
              <div>
                <h3 className="text-3xl font-extralight">Aldo Testino</h3>
                <h1 className="mt-2 text-6xl font-extrabold">
                  I'm a <span className="block text-indigo-500">Developer.</span>
                </h1>
              </div>
              <div className="mt-12 space-y-5">
                {jobs.map((j, i) => <TextWithIcon key={i} {...j} />)}
              </div>
              <div className="mt-12">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <input value={email} inputMode='email' onChange={(e) => setEmail(e.target.value)} placeholder="selena@gmail.com" className="transition focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none w-full bg-transparent py-2 px-4 text-lg placeholder-gray-500 shadow-md border-2 border-gray-500 rounded-lg"/>
                    <button disabled={loading || email === ''} type="submit" className="text-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 inline-flex items-center justify-center space-x-2 transition whitespace-nowrap py-2 px-4 text-lg bg-indigo-500 rounded-lg w-auto hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-gray-900 shadow-md focus:ring-offset-2 focus:ring-indigo-400">
                      {loading && 
                        <div>
                          <svg className="spinner" viewBox="0 0 50 50">
                            <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                          </svg>
                        </div>}
                      <span>
                        {!loading ? 'Contact me' : 'Submitting'}
                      </span>
                    </button>
                  </div>
                  {error && <p className="my-1 text-red-300">{error}</p>}
                  <p className="mt-2">We will not share your email.</p>
                </form>
              </div>
            </div>
            <div className="hidden sm:block flex-shrink-0">
              <img src="/homeimage.svg" alt="home-image"/>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-6xl mx-auto px-5 sm:px-10">
          <div className="text-center">
            <h4 className="uppercase text-lg font-medium text-indigo-500 tracking-wider">Stack</h4>
            <h3 className="text-3xl font-semibold mt-2">Technologies that i like to use.</h3>
          </div>
          <section className="mt-10 grid grid-rows-3 gap-4 sm:grid-cols-2 sm:grid-rows-3 md:gap-8 lg:grid-cols-3 lg:grid-rows-2 lg:gap-16">
            {stack.map((s, i) => 
              <div key={i} className={clsx(i > 2 && 'hidden sm:block')}>
                <StackIcon text={s} />
              </div>)}
          </section>
        </div>

        <div className="mt-12 pb-20 max-w-6xl mx-auto px-5 md:px-10">
          <div className="text-center">
            <h4 className="uppercase text-lg font-medium text-indigo-500 tracking-wider">Contacts</h4>
            <h3 className="text-3xl font-semibold mt-2">Get in touch.</h3>
          </div>
          <section className="mt-10 flex flex-col space-y-5 md:flex-row md:space-y-0 md:justify-between">
            {contacts.map((c, i) => <LinkWithIcon key={i} {...c} />)}
          </section>
        </div>
      </div>
    </>
  );
}
