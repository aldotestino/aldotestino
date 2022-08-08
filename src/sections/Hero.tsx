import { jobs } from '../utils/constants';
import { TextWithIcon } from '../components/WithIcon';
import ContactForm from '../components/ContactForm';

function Hero() {
  return (
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
            <ContactForm />
          </div>
        </div>
        <div className="hidden sm:block flex-shrink-0">
          <img src="/homeimage.svg" alt="home-image"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;