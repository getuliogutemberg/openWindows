import { Application } from './Application';
import { useTranslation } from 'react-i18next';

import { GithubIcon } from 'lucide-react';
import { useFetchRecentProjects } from '../hooks/useFetchRecentProjects';
import { useEffect, useState } from 'react';



export function RecentProjects() {
  const { projects } = useFetchRecentProjects();
  const [gitHubUrl, setGitHubUrl] = useState<string | null>(null);
  


  useEffect(() => {
    console.log(gitHubUrl);
  }, [gitHubUrl]);


  const { t } = useTranslation();

  return (
    <Application.Root>
      <Application.Header>{t('apps.recent-projects')}</Application.Header>

      <Application.Content>
        <div className={` ${gitHubUrl !== null && 'lg:grid grid-cols-3'} lg:grid-cols-[3fr 1fr] gap-6`}>


          <ul className='list-none space-y-6 px-2 pt-1 md:px-6 md:flex md:flex-col right-0  '>
            {projects.map(project => (
              <li
                onClick={() => setGitHubUrl(project.homepage)}
                key={project.id}
                className={`animate-appear bg-white/10 rounded-2xl p-2 hover:scale-[1.03] hover:bg-white/20 transition-all duration-[600ms] lg:p-6  w-full ${project.homepage ? 'cursor-pointer' : 'cursor-not-allowed'} `}
              >

                <h4 className='flex items-center gap-1 text-lg font-semibold break-all hover:underline xl:text-xl pl-4 pb-2'>
                  <GithubIcon />
                  {project.name}
                </h4>

                <p className='text-ellipsis whitespace-nowrap overflow-hidden lg:overflow-visible lg:whitespace-normal text-start mb-10'>
                  {project.description}
                </p>

                <div className='flex gap-2 flex-row flex-wrap overflow-hidden'>
                  {project.topics && project.topics.length > 0 ? (
                    project.topics.slice(0, 3).map(topic => (

                      <span
                        className='py-1 px-2 text-xs font-light break-all rounded-full bg-indigo-500 cursor-default lg:text-sm'
                        key={topic}
                      >
                        {topic}
                      </span>

                    ))

                  ) : (
                    <span className=' py-1 px-2 text-xs font-light break-all rounded-full bg-gray-200/20 cursor-default lg:text-sm'>
                      No topics found
                    </span>
                  )}
                </div>

                <div className='flex flex-row flex-wrap gap-2  m-5'>

                  <div className='flex gap-2 flex-row justify-between w-full align-end'>
                    {project.html_url && <a
                      target='_blank'
                      rel='noreferrer'
                      href={project.html_url}
                      className='p-2 bg-indigo-950 hover:bg-indigo-800 transition-colors  py-2 rounded-lg text-center text-white'
                    > git repo</a>}

                    {project.homepage && <a
                      target='_blank'
                      rel='noreferrer'


                      href={project.homepage}
                      className='p-2 bg-green-950 hover:bg-green-800 transition-colors  py-2 rounded-lg text-center text-white'
                    > live site</a>}
                  </div>





                </div>


              </li>
            ))}
          </ul>

          {gitHubUrl !== null ?


            <iframe src={gitHubUrl} className='absolute rounded-2xl animate-appear-down bg-white/10 right-10 w-[calc(2/3*100vw-30px)] h-[calc(100vh-125px)]'>

            </iframe>

            : null}

        </div>
      </Application.Content>
    </Application.Root>
  );
}
