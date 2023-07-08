import type {FC, ReactNode} from 'react';

interface Props {
  className?: string;
  varient?: 'blue' | 'yellow' | 'white';
  children: ReactNode;
}

const Section: FC<Props> = ({children, varient = 'blue', className}) => {
  const bgColor = {
    blue: 'bg-[#E3EDFE]',
    yellow: 'bg-[#FFF4D2]',
    white: 'bg-white'
  };
  return (
    <section className={`flex flex-col space-y-6 rounded-[50px] px-10 py-6 ${bgColor?.[varient]} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
