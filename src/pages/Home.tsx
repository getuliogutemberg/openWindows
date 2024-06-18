import { useContext, useEffect, useState } from 'react';

import { StartMenu } from '../components/StartMenu';
import { Taskbar } from '../components/Taskbar';

import { AppContext } from '../context/App';
import { appsComponents } from '../data/apps';


export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openedApp, openApp } = useContext(AppContext);

  function toggleMenu() {
    setIsMenuOpen(previous => !previous);
  }

  
  

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
      <div className='absolute w-full h-full md:h-[calc(100vh-50px)]  flex flex-col items-start md:justify-end animate-appear overflow-hidden'>{isMenuOpen ? <StartMenu openApp={openApp} /> : null}</div>

      <div className='absolute w-full h-full overflow-hidden'
      >{openedApp !== 'none' ? appsComponents[openedApp] : null}</div>

      <footer className='absolute bottom-0 w-full h-[100px] sm:h-[50px] overflow-hidden'>
        <Taskbar
          onStartClick={toggleMenu}
          isMenuOpen={isMenuOpen}

        />
      </footer>
    </ >
  );
}
