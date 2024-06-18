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
        'responsive-layout',
        'next-social-api',
        'biketrack-telemetry-app',
        'socketapp',
        'dashboard',
        'lavaexperience',
      ];

      const projectsToNotShowNames: string[] = [
        'openWindows',
        'crepsesalgados',
        'ClioBalaPage',
        'sistema',
        'getuliogutemberg',
        'liununu',
        'viteApp',
        'virtualizedCoop',
        'next-social-apirest',
        'Clone-Dall-e---Client',
        'new-util',
        'nodeChat',
        'react-dos',
        'next-form-builder',
        'fullCycle',
        'ReactHub',
      ];

      const recentUpdatedProjects = projetsToShownames.length > 0 ? data.filter(project => projetsToShownames.includes(project.name)) : data;

      const resuts = recentUpdatedProjects.filter(project => !projectsToNotShowNames.includes(project.name));

      // .slice(0, 5); // 5 most recent repos on Github, excluding my account repo

      setProjects(resuts);
    }

    fetchData();
  }, []);

  return { projects };
}
