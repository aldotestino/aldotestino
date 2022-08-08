import { contacts } from '../utils/constants';
import { LinkWithIcon } from '../components/WithIcon';

function Contacts() {
  return (
    <div className="mt-12 pb-20 max-w-6xl mx-auto px-5 md:px-10">
      <div className="text-center">
        <h4 className="uppercase text-lg font-medium text-indigo-500 tracking-wider">Contacts</h4>
        <h3 className="text-3xl font-semibold mt-2">Get in touch.</h3>
      </div>
      <section className="mt-10 flex flex-col space-y-5 md:flex-row md:space-y-0 md:justify-between">
        {contacts.map((c, i) => <LinkWithIcon key={i} {...c} />)}
      </section>
    </div>);
}

export default Contacts;