import type {FC} from 'react';
import {Typography} from '@mui/material';

interface Props {
  translate: string;
  children: string;
  className?: string;
}

const SectionHeader: FC<Props> = ({translate, children, className}) => {
  return (
    <header className={`flex flex-col items-center justify-center text-center ${className}`}>
      <Typography variant="body2" className="w-full text-sm font-medium text-[#F8BD07]">
        {translate}
      </Typography>
      <Typography variant="h2" className="w-full text-[30px] font-bold text-pen">
        {children}
      </Typography>
    </header>
  );
};

export default SectionHeader;
