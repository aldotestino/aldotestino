import { CheckCircleIcon, ExclamationIcon, InformationCircleIcon, XCircleIcon, XIcon } from '@heroicons/react/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { nanoid } from 'nanoid';
import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface NotificationOptions {
  type?: 'success' | 'error' | 'warning' | 'info'
  title: string,
  description: string,
  duration?: number
}

interface NotificationI extends NotificationOptions {
  id: string
  onClose: () => void
}

interface NotificationContextI {
  notify: (options: NotificationOptions) => void
}

const NotificationContext = createContext<NotificationContextI>({} as NotificationContextI);

export function useNotify() {
  return useContext(NotificationContext);
}

interface NotificationProviderProps {
  children: ReactNode
}

function useNotifications() {
  const [notifications, setNotifications] = useState<NotificationI[]>([]);

  const notify = useCallback((options: NotificationOptions): void => {
    const id = nanoid();

    function removeNotification() {
      setNotifications(notifications => notifications.filter(n => n.id !== id));
    }

    const newNotification = {
      ...options,
      id,
      onClose: removeNotification
    };

    setNotifications(notifications => [newNotification, ...notifications]);

    setTimeout(removeNotification, options.duration);
  }, []);

  return { notify, notifications };
}

function NotificationProvider({ children }: NotificationProviderProps) {
  
  const { notify, notifications } = useNotifications();

  return (
    <NotificationContext.Provider value={{ notify }}>
      <div className="fixed px-5 w-full top-6 right-auto sm:w-auto left-auto sm:right-6 sm:px-0">
        <AnimatePresence>
          {notifications.map(n => <Notification key={n.id} {...n} />)}
        </AnimatePresence>
      </div>
      {children}
    </NotificationContext.Provider>
  );
}

const icons = {
  success: <CheckCircleIcon className="w-6 h-6 text-green-400" />,
  error: <XCircleIcon className="w-6 h-6 text-red-400"/>,
  warning: <ExclamationIcon className="w-6 h-6 text-yellow-400" />,
  info: <InformationCircleIcon className="w-6 h-6 text-blue-400" />
};

function Notification({ onClose, title, description, type = 'success' }: NotificationI) {

  return (
    <motion.div 
      /* initial={{ opacity: 0, scale: 0.8, x: 300 }} // animate from
      animate={{ opacity: 1, scale: 1, x: 0 }} // animate to
      exit={{ opacity: 0, scale: 0.8, x: 300 }} // animate exit
      // describe transition behavior
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 40,
      }} */
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 500 }}
      transition={{ duration: 0.5 }}
      // auto animates the element when it's position changes
      layout
      className="bg-gray-50 w-full sm:max-w-xs mb-4 text-gray-900 shadow-md flex py-2 px-4 rounded-lg space-x-4">
      <div>
        {icons[type]}
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-md">{description}</p>
      </div>
      <div>
        <button onClick={onClose} className="hover:bg-gray-200 p-1 rounded-md focus:outline-none focus:ring-offset-1 focus:ring-offset-transparent focus:ring-1 focus:ring-indigo-400">
          <XIcon className="w-6 h-6 text-gray-900" />
        </button>
      </div>
    </motion.div>
  );
}

export default NotificationProvider;
