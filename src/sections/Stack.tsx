import clsx from 'clsx';
import { stack } from '../utils/constants';
import StackIcon from '../components/StackIcon';

function Stack() {
  return (
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
  );
}

export default Stack;