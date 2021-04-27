import { AcademicCapIcon, BriefcaseIcon, MailIcon } from '@heroicons/react/outline';
import React from 'react';
import StackIcon from '../components/StackIcon';
import { LinkWithIcon, TextWithIcon } from '../components/WithIcon';

const jobs = [
  {
    sup: 'Liceo Scientifico',
    bot: 'O. Tedone',
    icon: AcademicCapIcon
  },
  {
    sup: 'Politecnico di Bari',
    bot: 'Ingegneria Informatica',
    icon: AcademicCapIcon
  },
  {
    sup: 'Freelancer',
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
    text: 'Send me an email',
    email: 'aldo.testino@libero.it',
    icon: <MailIcon className="w-8 h-8" />
  }
];


export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-gray-50 text-gray-900">
      <div className="py-20 bg-gray-900 text-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 sm:flex">
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
              <form action="#">
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <input type="email" placeholder="selena@gmail.com" className="transition focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none w-full bg-transparent py-2 px-4 text-lg placeholder-gray-500 shadow-md border-2 border-gray-500 rounded-lg"/>
                  <button type="submit" className="text-gray-50 transition whitespace-nowrap py-2 px-4 text-lg bg-indigo-500 rounded-lg w-full sm:w-auto focus:outline-non hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-gray-900 shadow-md focus:ring-offset-2 focus:ring-indigo-400">
                    Contact me
                  </button>
                </div>
              </form>
            </section>
          </div>
          <div className="hidden sm:block mx-auto">
            <svg height="492" viewBox="0 0 321 486" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M182.806 139.122C178.869 136.853 176.043 136.807 174.329 138.937C172.568 141.068 171.734 144.681 171.734 149.729V177.057C171.734 182.245 171.271 186.552 170.298 189.98C169.325 193.546 167.704 196.048 165.48 197.53C163.303 199.058 160.338 199.429 156.585 198.734C152.925 198.086 148.339 196.14 142.872 192.991L140.278 191.462V169.924L143.567 171.823C147.505 174.093 150.099 174.371 151.397 172.75C152.786 171.128 153.481 167.793 153.481 162.745V138.659C153.481 132.36 154.084 127.404 155.334 123.791C156.539 120.132 158.994 117.816 162.654 116.797C158.994 111.563 156.539 106.375 155.334 101.327C154.13 96.2781 153.528 90.6272 153.528 84.328V60.2425C153.528 55.1938 152.833 51.0251 151.443 47.8292C150.146 44.6795 147.505 41.9468 143.614 39.6772L140.324 37.7781V16.2401L142.919 17.7686C148.385 20.9183 152.972 24.2995 156.632 27.866C160.384 31.4788 163.349 35.2769 165.526 39.3529C167.796 43.4289 169.418 47.7828 170.344 52.461C171.317 57.0002 171.781 61.8636 171.781 67.0512V94.379C171.781 99.4277 172.661 104.06 174.375 108.182C176.135 112.304 178.961 115.546 182.853 117.77L182.806 139.122Z" fill="url(#paint0_linear)"/>
              <path opacity="0.4" d="M83.5737 59.9645C87.5115 62.2341 90.3374 62.2804 92.0515 60.1498C93.8119 58.0191 94.6458 54.4063 94.6458 49.3576V22.0298C94.6458 16.8422 95.1091 12.5346 96.082 9.10704C97.0548 5.54053 98.63 3.03935 100.807 1.51084C103.077 0.0286595 106.042 -0.341887 109.702 0.306569C113.455 1.00134 118.087 2.94671 123.554 6.14267L126.148 7.67117V29.2092L122.859 27.3101C118.921 25.0405 116.281 24.7163 114.891 26.3374C113.594 28.0049 112.945 31.3398 112.945 36.4348V60.5203C112.945 66.7733 112.343 71.7757 111.092 75.3885C109.887 79.0476 107.432 81.3635 103.772 82.3825C107.432 87.6165 109.887 92.8041 111.092 97.8528C112.296 102.902 112.899 108.552 112.899 114.852V138.937C112.899 143.986 113.547 148.108 114.844 151.304C116.234 154.5 118.875 157.279 122.813 159.502L126.102 161.402V182.939L123.508 181.411C118.041 178.261 113.408 174.834 109.656 171.267C105.996 167.701 103.031 163.903 100.761 159.78C98.5836 155.751 97.0085 151.397 96.082 146.765C95.1091 142.226 94.6458 137.362 94.6458 132.175V104.847C94.6458 99.7982 93.7656 95.1664 92.0515 91.0441C90.2911 86.9217 87.4651 83.6794 83.5737 81.4562V59.9645Z" fill="url(#paint1_linear)"/>
              <path opacity="0.15" d="M196.195 5.95748L293.991 62.4194L293.945 296.836L196.148 240.421L196.195 5.95748Z" fill="url(#paint2_linear)"/>
              <path d="M177.803 36.6664L255.633 81.5488V103.087L177.803 58.2044V36.6664Z" fill="#6366F1"/>
              <path opacity="0.2" d="M208.935 136.39L282.688 178.956V244.126L208.935 201.56V136.39Z" fill="url(#paint3_linear)"/>
              <path opacity="0.15" d="M208.193 86.4122L283.058 129.627V136.992L208.193 93.7768V86.4122Z" fill="white"/>
              <path opacity="0.15" d="M208.193 101.234L272.912 138.567V145.931L208.193 108.599V101.234Z" fill="white"/>
              <path opacity="0.15" d="M208.193 115.871L263.137 147.552V154.917L208.193 123.235V115.871Z" fill="white"/>
              <path opacity="0.2" d="M196.195 5.95748L293.991 62.4194V93.8232L196.148 37.4076L196.195 5.95748Z" fill="url(#paint4_linear)"/>
              <path opacity="0.2" d="M220.609 35.9717C220.609 40.7424 217.829 42.9657 214.401 40.974C210.973 38.9823 208.193 33.5631 208.193 28.7923C208.193 24.0215 210.973 21.7983 214.401 23.7899C217.829 25.7816 220.609 31.2472 220.609 35.9717Z" fill="white"/>
              <path opacity="0.15" d="M19.9669 77.7508L321 251.444L320.954 486L19.9206 312.306L19.9669 77.7508Z" fill="url(#paint5_linear)"/>
              <path d="M0 135.556L77.7831 180.438V201.976L0 157.14V135.556Z" fill="#4338CA"/>
              <path opacity="0.15" d="M40.2579 194.751L212.965 294.428V301.792L40.2579 202.115V194.751Z" fill="white"/>
              <path opacity="0.15" d="M40.2579 209.573L189.246 295.539V302.904L40.2579 216.937V209.573Z" fill="white"/>
              <path opacity="0.15" d="M40.2579 224.255L167.055 297.438V304.803L40.2579 231.62V224.255Z" fill="white"/>
              <path opacity="0.2" d="M156.817 317.633L308.677 405.267V470.437L156.817 382.803V317.633Z" fill="url(#paint6_linear)"/>
              <path opacity="0.15" d="M168.26 337.133L191.145 350.334V371.872L168.26 358.671V337.133Z" fill="white"/>
              <path opacity="0.15" d="M196.288 354.363L219.173 367.564V389.102L196.288 375.901V354.363Z" fill="white"/>
              <path opacity="0.15" d="M224.454 370.343L247.34 383.544V405.082L224.454 391.881V370.343Z" fill="white"/>
              <path opacity="0.15" d="M252.621 387.342L275.507 400.543V422.081L252.621 408.88V387.342Z" fill="white"/>
              <path opacity="0.2" d="M11.9984 231.574L138.425 304.525V369.695L11.9984 296.697V231.574Z" fill="url(#paint7_linear)"/>
              <path opacity="0.15" d="M24.7383 255.613L125.175 313.557V320.922L24.7383 262.978V255.613Z" fill="white"/>
              <path opacity="0.15" d="M24.7383 270.435L105.162 316.846V324.21L24.7383 277.753V270.435Z" fill="white"/>
              <path opacity="0.2" d="M19.9668 77.7508L320.583 251.259V283.033L19.9668 109.571V77.7508Z" fill="url(#paint8_linear)"/>
              <path opacity="0.2" d="M52.7201 112.536C52.7201 117.307 49.9405 119.53 46.5123 117.538C43.0841 115.547 40.3045 110.127 40.3045 105.357C40.3045 100.586 43.0841 98.3625 46.5123 100.354C49.9405 102.346 52.7201 107.811 52.7201 112.536Z" fill="white"/>
              <defs>
                <linearGradient id="paint0_linear" x1="209.473" y1="9.73962" x2="133.619" y2="141.262" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="0.903" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="165.668" y1="0.823988" x2="89.8058" y2="132.33" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="0.903" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint2_linear" x1="295.83" y1="63.4845" x2="202.343" y2="225.482" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint3_linear" x1="259.933" y1="165.788" x2="233.95" y2="210.811" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint4_linear" x1="229.726" y1="6.44452" x2="259.534" y2="90.8515" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint5_linear" x1="221.25" y1="193.886" x2="171.732" y2="279.713" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint6_linear" x1="246.874" y1="369.593" x2="220.891" y2="414.616" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint7_linear" x1="89.3172" y1="276.171" x2="63.3342" y2="321.195" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint8_linear" x1="94.5563" y1="52.149" x2="208.671" y2="245.489" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-12 max-w-7xl mx-auto px-5 sm:px-10">
        <header className="text-center">
          <h4 className="uppercase text-lg font-medium text-indigo-500 tracking-wider">Stack</h4>
          <h3 className="text-3xl font-semibold mt-2">Technologies that i like to use.</h3>
        </header>
        <section className="mt-10 grid grid-rows-3 gap-5 md:grid-cols-2 md:grid-rows-3 md:gap-10 lg:grid-cols-3 lg:grid-rows-2 lg:gap-20">
          {stack.map((s, i) => <StackIcon key={i} text={s} />)}
        </section>
      </div>

      <div className="mt-12 pb-20 max-w-7xl mx-auto px-5 md:px-10">
        <header className="text-center">
          <h4 className="uppercase text-lg font-medium text-indigo-500 tracking-wider">Contacts</h4>
          <h3 className="text-3xl font-semibold mt-2">Stay in touch.</h3>
        </header>
        <section className="mt-10 flex flex-col space-y-5 md:flex-row md:space-y-0 md:justify-between">
          {contacts.map((c, i) => <LinkWithIcon key={i} {...c} />)}
        </section>
      </div>
    </div>
  );
}
