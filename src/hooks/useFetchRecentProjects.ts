import { useEffect, useState } from 'react';

import { ProjectProps } from '../types/projects';

export function useFetchRecentProjects() {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.github.com/users/getuliogutemberg/repos?sort=updated'
      );
      const data = (await response.json()) as ProjectProps[];

      const projetsToShownames: string[] = [
        // 'ClioBalaPage',
        // 'sistema',
        // 'getuliogutemberg',
        // 'liununu',
        // 'lavaexperience',
        // 'openwindows',
        

      ];

      const recentUpdatedProjects = projetsToShownames.length > 0 ? data.filter(project => projetsToShownames.includes(project.name)) : data;

      // .slice(0, 5); // 5 most recent repos on Github, excluding my account repo

      setProjects(recentUpdatedProjects);
    }

    fetchData();
  }, []);

  return { projects };
}
