import type {FC} from 'react';
import {Typography} from '@mui/material';
import Logo from '@/components/image/Logo';
import Navbar from '@/container/Navbar';
import Button from '@/components/Button';
import Image from 'next/image';
import Section from '@/components/Section';
import LanguageSlider from '@/container/LanguageSlider';

const MainSection: FC = () => {
  return (
    <Section varient="blue">
      <header className="flex flex-col items-center justify-between sm:flex-row">
        <Logo />
        <Navbar />
        <Button>ورود و ثبت نام</Button>
      </header>
      <div className="mb-14 flex flex-col items-center justify-around md:flex-row">
        <div className="flex-1 space-y-8">
          <Typography variant="h2" className="text-[30px] font-bold text-pen">
            آموزش آنلاین زبان همیشه و همه‌جا ، با استادی که دوست داری
          </Typography>
          <Typography variant="body2" className="text-pen">
            همسوترین استاد با اهداف و نیازهایت را از بین صدها استاد ارزیابی‌شده، انتخاب کن و در زمان‌های دلخواه، در کلاس
            زبان آنلاین شرکت کن
          </Typography>
          <Button>همین حالا شروع کن</Button>
        </div>
        <div>
          <Image src="/images/header.png" width={450} height={365} alt="Picture of the author" />
        </div>
      </div>
      <LanguageSlider />
    </Section>
  );
};

export default MainSection;
