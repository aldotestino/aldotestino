import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon, XCircleIcon, XIcon } from '@heroicons/react/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { nanoid } from 'nanoid';
import { createContext, useContext, useState, ReactNode, useCallback, FC } from 'react';

interface NotificationProps {
  type?: 'success' | 'error' | 'warning' | 'info'
  title: string
  description: string
  duration?: number
}

export type NotificationRenderFunction = FC<NotificationProps & {onClose: () => void}>

export interface NotifyOptions extends NotificationProps {
  render?: NotificationRenderFunction
}

interface NotificationI extends NotifyOptions {
  id: string
  onClose: () => void
}

interface NotificationContextI {
  notify: (options: NotifyOptions) => void
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

  const notify = useCallback((options: NotifyOptions): void => {
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

    setTimeout(removeNotification, options.duration || 3000);
  }, []);

  return { notify, notifications };
}

function NotificationProvider({ children }: NotificationProviderProps) {
  
  const { notify, notifications } = useNotifications();

  return (
    <NotificationContext.Provider value={{ notify }}>
      <div className="fixed sm:flex sm:flex-col sm:items-end px-5 w-full top-5 sm:w-auto sm:right-5 sm:px-0 z-50">
        <AnimatePresence>      
          {notifications.map(n => <Notification key={n.id} {...n} />)}
        </AnimatePresence>
      </div>
      {children}
    </NotificationContext.Provider>
  );
}

const icons = {
  success: <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1" />,
  error: <XCircleIcon className="w-6 h-6 text-red-400 mt-1"/>,
  warning: <ExclamationCircleIcon className="w-6 h-6 text-yellow-400 mt-1" />,
  info: <InformationCircleIcon className="w-6 h-6 text-blue-400 mt-1" />
};

function Notification({ render: Render, id, ...props }: NotificationI) {

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, scale: 0.8, x: 300 }} // animate from
      animate={{ opacity: 1, scale: 1, x: 0 }} // animate to
      exit={{ opacity: 0, scale: 0.8, x: 300 }} // animate exit
      // describe transition behavior
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 40,
      }} 
      // auto animates the element when it's position changes
      layout
    >
      {Render ?
        <Render {...props} />
        :
        <div className="bg-gray-100 dark:bg-gray-800 w-full sm:w-80 mb-4 text-gray-900 dark:text-gray-50 shadow-md flex py-2 px-4 rounded-lg space-x-4">
          <div>
            {icons[props.type || 'success']}
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-medium">{props.title}</h3>
            <p className="text-md">{props.description}</p>
          </div>
          <div>
            <button onClick={props.onClose} className="hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-md focus:outline-none focus:ring-offset-1 focus:ring-offset-transparent focus:ring-1 focus:ring-indigo-400">
              <XIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
            </button>
          </div>
        </div>}
    </motion.div>
  );
}

export default NotificationProvider;