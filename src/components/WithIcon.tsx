import { ReactNode } from 'react';

interface TextWithIconProps {
  sup: string
  bot?: string
  icon: any
}

function TextWithIcon({ sup, bot, icon: Icon }: TextWithIconProps) {
  return (
    <div className="flex space-x-4 items-center">
      <div>
        <Icon className="w-8 h-8" />
      </div>
      <div className="text-lg">
        <p>{sup}</p>
        <p>{bot}</p>
      </div>
    </div>
  );
}

interface LinkWithIconProps {
  link?: string
  email?: string
  text: string
  icon: ReactNode
}

function LinkWithIcon({ link, email, text, icon }: LinkWithIconProps) {
  return (
    <div className="flex space-x-4 items-center">
      <div>
        <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-indigo-500 text-gray-50">
          {icon}
        </div>
      </div>
      <div className="text-lg">
        {link ? <a href={link} target="blank" className="hover:text-indigo-500 hover:underline">{text}</a> : 
          <a href={`mailto:${email}`} className="hover:text-indigo-500 hover:underline">{text}</a>
        }
      </div>
    </div>
  );
}

export {
  TextWithIcon,
  LinkWithIcon
};