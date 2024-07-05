// import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


import { notifications } from '../data/notifications.ts';

import { notificationsProps } from '../data/notifications.ts';





type NotificationsTab = {
  openNotification: () => void,
  setNotificationShow: (notification: notificationsProps) => void
  
};

export function NotificationsTab({ openNotification, setNotificationShow }: NotificationsTab) {
  const { t } = useTranslation();

  return (
    <div onMouseLeave={() => setTimeout(() => openNotification(), 1000)} onClick={() => openNotification()} className='relative rounded-lg z-50 inset-0  px-0 md:w-fit h-fit md:pl-0  animate-appear-right md:animate-appear-right h-[calc(100vh-100px)] sm:h-[calc(100vh-50px)]  '>
      <section className='p-5 rounded-t-lg space-y-4 sm:space-y-5 bg-start-menu h-full w-[100vw] md:w-[300px] overflow-y-auto'>

        <h3 className='absolute top-5 left-5 font-bold mb-4 sm:mb-8'>
          {t('notifications.main')}
        </h3>

        <ul className='flex gap-3 items-end flex-wrap sm:gap-5 flex-col pt-10  '>
          {notifications.map(notification => (
            <div className='bg-white/10 rounded-3xl p-4 hover:scale-[1.03] hover:bg-white/20 transition-all duration-300 hover:cursor-pointer duration-[600ms]' onClick={() => {
              setNotificationShow(notification);

              openNotification();
            }} key={notification.id}>
              {notification.content}
              <img src={notification.coverImage} alt='notification' className=' w-full h-32' />
              {notification.tags.map(tag =><span key={tag} className='w-6 h-6'> {tag}</span>)}
            </div>
          ))}

          
        </ul>

      </section>

      <footer className='px-0 py-0 flex justify-between items-center bg-zinc-900 rounded-b-lg'>
      
      </footer>
    </div>
  );
}
