import { useContext, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { getCurrentDate } from '../utils/getCurrentDate';
import { getCurrentTime } from '../utils/getCurrentTime';
import { appsIcons } from '../data/apps';
import { AppContext } from '../context/App';
import { getTranslatedAppName } from '../utils/getTranslatedAppName';

import { XIcon } from 'lucide-react';

import startMenuIcon from '/start-menu-icon.svg';
import wifiIcon from '/wifi-icon.svg';
import notificationsIcon from '/notifications-icon.svg';

type TaskbarProps = {
  onStartClick: () => void;
  isMenuOpen: boolean;
};

export function Taskbar({ onStartClick, isMenuOpen }: TaskbarProps) {




  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const { openedApp, closeApp } = useContext(AppContext);

  const ONE_SECOND_IN_MILLISECONDS = 1000;
  setInterval(
    () => setCurrentTime(getCurrentTime()),
    ONE_SECOND_IN_MILLISECONDS
  );

  function handleChangeLanguage() {
    const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';

    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  }





  return (
    <section className='group p-4 flex items-center sm:justify-between justify-around bg-[#2222] backdrop-blur-[50px] sm:h-[50px] h-[100px] animate-appear-down'



    >
      <div className='flex items-center  gap-4'>
        <img
          src={startMenuIcon}
          alt='Start Menu Icon'
          title={t('title.start')}
          className={`h-fit cursor-pointer hover:brightness-200 hover:shadow-start-menu transition-all duration-[500ms]  ${isMenuOpen && 'shadow-start-menu'}`}
          onClick={onStartClick}
        />


        {openedApp !== 'none' && (
          <div className='hidden relative p-1 bg-white/10 rounded-lg sm:block gap-2'>
            <div
              className='flex flex-col items-start gap-1 h-[40px]'
              title={t(getTranslatedAppName(openedApp))}
            >
              <div className='flex align-middle gap-1 h-[40px] animate-appear min-w-[200px] justify-between p-2'>
                <div className=''>{appsIcons[openedApp]}</div>
                <div className='w-[100%] text-start pl-2 pr-4'>{t(getTranslatedAppName(openedApp))}</div>
              </div>
              <div className='bg-white h-[3px] absolute inset-x-0 top-0' />
            </div>

            <div
              title={t('title.close-app')}
              onClick={closeApp}
            >
              <XIcon className='hidden group-hover:block absolute inset-0 left-[calc(100%-30px)] top-1/4 cursor-pointer rounded-md hover:bg-red-400 hover:bg-opacity-30 transition-colors' />

            </div>
          </div>
        )}
      </div>

      <div className='flex items-center gap-4'>
        <button
          className='hover:bg-gray-200/10 rounded-xl px-2 py-1 transition-colors duration-200'
          onClick={handleChangeLanguage}
        >
          {language === 'pt' ? 'PT-BR' : 'EN-US'}
        </button>

        <img
          src={wifiIcon}
          alt='Wi-fi Icon'
          className='w-5 h-5'
          title={t('title.wi-fi')}
          // onMouseEnter={() => alert('Conexão Wi-Fi: ' + t('title.wi-fi'))}
          // onMouseLeave={() => alert('Conexão Wi-Fi: ' + t('title.wi-fi'))}
          // onMouseUp={() => alert('Conexão Wi-Fi: ' + t('title.wi-fi'))}
          // onMouseDown={() => alert('Conexão Wi-Fi: ' + t('title.wi-fi'))}
          // onAuxClick={() => alert('Conexão Wi-Fi: ' + t('title.wi-fi'))}
          // onClick={() => alert('Conexão Wi-Fi: ' + t('title.wi-fi'))}
          // onDoubleClickCapture={() => alert('Conexão Wi-Fi: ' + t('title.wi-fi'))}
          // onDoubleClick={() => alert('Conexão Wi-Fi: ' + t('title.wi-fi'))}
          // onMouseOver={() => alert('Conexão Wi-Fi: ' + t('title.wi-fi'))}

          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              alert('Conexão Wi-Fi: ' + t('title.wi-fi'));
            }
          }}
        />

        <div className='text-sm text-end tracking-wide'>
          <p className='font-sans cursor-default select-none'>{currentTime}</p>
          <p className='font-sans cursor-default select-none'>
            {getCurrentDate()}
          </p>
        </div>

        <img
          src={notificationsIcon}
          alt='Notifications Icon'
          title={t('title.notifications')}
          className='w-5 h-5'
        />
      </div>
    </section>
  );
}
