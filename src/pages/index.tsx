import { AcademicCapIcon, BriefcaseIcon, MailIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import SEO from '../components/SEO';
import StackIcon from '../components/StackIcon';
import { LinkWithIcon, TextWithIcon } from '../components/WithIcon';

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
    top: 'Freelancer',
    icon: BriefcaseIcon
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

  function handleSubmit(e) {
    e.preventDefault();
    if(email) {
      console.log(email);
      fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }

  return (
    <>
      <SEO />

      <div className="min-h-screen overflow-hidden bg-gray-50 text-gray-900">
        <div className="py-20 bg-gray-900 text-gray-50">
          <div className="max-w-6xl mx-auto px-5 sm:px-10 sm:flex sm:justify-between">
            <div className="flex-grow sm:max-w-xl sm:pr-10">
              <header>
                <h3 className=" text-3xl font-extralight">
                 Aldo Testino
                </h3>
                <h1 className="mt-2 text-6xl font-extrabold">
                 I'm a <span className="block text-indigo-500">Developer.</span>
                </h1>
              </header>
              <section className="mt-12 space-y-5">
                {jobs.map((j, i) => <TextWithIcon key={i} {...j} />)}
              </section>
              <section className="mt-12">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="selena@gmail.com" className="transition focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none w-full bg-transparent py-2 px-4 text-lg placeholder-gray-500 shadow-md border-2 border-gray-500 rounded-lg"/>
                    <button type="submit" className="text-gray-50 transition whitespace-nowrap py-2 px-4 text-lg bg-indigo-500 rounded-lg w-full sm:w-auto focus:outline-non hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-gray-900 shadow-md focus:ring-offset-2 focus:ring-indigo-400">
                      Contact me
                    </button>
                  </div>
                  <p className="mt-2">You will be contacted as soon as possible.</p>
                </form>
              </section>
            </div>
            <div className="hidden sm:block flex-shrink-0">
              <img src="/homeimage.svg" alt="home-image"/>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-6xl mx-auto px-5 sm:px-10">
          <header className="text-center">
            <h4 className="uppercase text-lg font-medium text-indigo-500 tracking-wider">Stack</h4>
            <h3 className="text-3xl font-semibold mt-2">Technologies that i like to use.</h3>
          </header>
          <section className="mt-10 grid grid-rows-3 gap-5 md:grid-cols-2 md:grid-rows-3 md:gap-10 lg:grid-cols-3 lg:grid-rows-2 lg:gap-20">
            {stack.map((s, i) => <StackIcon key={i} text={s} />)}
          </section>
        </div>

        <div className="mt-12 pb-20 max-w-6xl mx-auto px-5 md:px-10">
          <header className="text-center">
            <h4 className="uppercase text-lg font-medium text-indigo-500 tracking-wider">Contacts</h4>
            <h3 className="text-3xl font-semibold mt-2">Stay in touch.</h3>
          </header>
          <section className="mt-10 flex flex-col space-y-5 md:flex-row md:space-y-0 md:justify-between">
            {contacts.map((c, i) => <LinkWithIcon key={i} {...c} />)}
          </section>
        </div>
      </div>
    </>
  );
}
