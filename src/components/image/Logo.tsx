import type {FC} from 'react';
import LogoIcon from '@/assets/icon/LogoIcon';
import {Typography} from '@mui/material';

const Logo: FC = () => {
  return (
    <div className="flex flex-row flex-row items-center">
      <LogoIcon />
      <div className="mr-3 flex flex-col">
        <Typography className="text-right font-bold text-pen">موسسـه سفیــر</Typography>
        <Typography variant="caption" display="block" color="#212121">
          آموزش زبان‌های خارجی
        </Typography>
      </div>
    </div>
  );
};

export default Logo;
