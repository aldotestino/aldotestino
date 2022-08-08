import Contacts from '../sections/Contacts';
import Hero from '../sections/Hero';
import SEO from '../components/SEO';
import Stack from '../sections/Stack';

export default function Home() {

  return (
    <>
      <SEO />

      <div className="overflow-hidden bg-gray-50 text-gray-900">
        <Hero />
        <Stack />
        <Contacts />
      </div>
    </>
  );
}
