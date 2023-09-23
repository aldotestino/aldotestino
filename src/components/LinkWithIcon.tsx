import { IconType } from 'react-icons';

interface LinkWithIconProps {
  icon: IconType
  link: string
}

function LinkWithIcon({ icon: Icon, link }: LinkWithIconProps) {
  return (
    <a href={link} target="_blank" className="bg-white flex items-center justify-center w-[52px] h-[52px] rounded-full transition hover:bg-gray-200 hover:scale-105" rel="noreferrer">
      <Icon className="w-6 h-6" />
    </a>
  );
}

export default LinkWithIcon;