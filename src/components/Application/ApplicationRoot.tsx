import { ReactNode } from 'react';

type ApplicationRootProps = {
  children: ReactNode;
};

export function ApplicationRoot({ children }: ApplicationRootProps) {
  return (
    <div className='h-full bg-[#222222c4] backdrop-blur-[15px] animate-appear-left'>
      <div className='px-4 pt-5'>{children}</div>
    </div>
  );
}
