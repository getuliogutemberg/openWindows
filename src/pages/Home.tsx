import { useContext, useEffect, useState } from 'react';

import { StartMenu } from '../components/StartMenu';
import { Taskbar } from '../components/Taskbar';

import { AppContext } from '../context/App';
import { appsComponents } from '../data/apps';
import { NotificationsTab } from '../components/NotificationsTab';
import { notificationsProps } from '../data/notifications';
import { t } from 'i18next';


export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notificationShow, setNotificationShow] = useState<notificationsProps>();
  const { openedApp, openApp } = useContext(AppContext);



  function toggleMenu() {
    setIsMenuOpen(previous => !previous);
  }

  useEffect(() => {
    notificationShow !== undefined && setTimeout(() => setNotificationShow(undefined), 5000);
  }
  , [ notificationShow]);
  

  useEffect(() => {

    document.addEventListener('keydown', (event) => {

      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
      if (event.key === 'ArrowUp') {

        setIsMenuOpen(true);

      }
      if (event.key === 'ArrowDown') {
        setIsMenuOpen(false);
        openApp('none');
      }
      if (event.key === 'ArrowLeft') {

        openApp('recentProjects');
      }
      if (event.key === 'ArrowRight') {

        openApp( 'aboutMe');
      }

      if (event.key === ' ') {

        openApp('aboutMe');

      }


    });
  }, [openApp, openedApp]);


  useEffect(() => {
    setIsMenuOpen(false);
  }, [openedApp]);

  return (
    <>

      {openedApp !== 'none' ? <div className='absolute w-full h-full overflow-hidden'>{appsComponents[openedApp]}</div> : null}

      {isMenuOpen ? <div className='absolute w-full h-full md:h-[calc(100vh-50px)]  flex flex-col items-start md:justify-end animate-appear overflow-hidden'> <StartMenu openApp={openApp} closeMenu={() => setIsMenuOpen(false)}  /> </div>: null}
      {isNotificationsOpen ? <div className='absolute w-full h-full md:h-[calc(100vh-50px)]  flex flex-col items-end md:justify-end animate-appear overflow-hidden'><NotificationsTab openNotification={() => setIsNotificationsOpen(false)} setNotificationShow={(data : notificationsProps) => setNotificationShow(data)} /></div> : null}
      {notificationShow ? <div className='absolute animate-appear overflow-hidden bg-white/10 right-10 rounded-xl px-4 py-3 mx-[20px] my-[10px] hover:bg-white/20 transition-all duration-300 hover:cursor-pointer duration-[600ms] w-fit'>{t('notifications.main') + ': '}{notificationShow.content}</div> : null}


      <footer className='absolute bottom-0 w-full h-[100px] sm:h-[50px] overflow-hidden'>
        <Taskbar
          onStartClick={toggleMenu}
          isMenuOpen={isMenuOpen}
          toggleNotifications={() => setIsNotificationsOpen(previous => !previous)}

        />
      </footer>
    </ >
  );
}
