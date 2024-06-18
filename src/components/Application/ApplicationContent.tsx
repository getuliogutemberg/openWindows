import { ReactNode } from 'react';

type ApplicationContentProps = {
  children: ReactNode;
};

export function ApplicationContent({ children }: ApplicationContentProps) {
  return (
    <div className='max-h-[calc(100vh-100px)] overflow-y-auto mt-4  pb-10  lg:px-12'>
      {children}
    </div>
  );
}
