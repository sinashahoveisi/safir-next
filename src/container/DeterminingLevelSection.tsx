import type {FC} from 'react';
import {Typography} from '@mui/material';
import Button from '@/components/Button';
import Image from 'next/image';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

const DeterminingLevelSection: FC = () => {
  return (
    <Section varient="white">
      <div className="flex flex-row items-center justify-between">
        <div className="hidden flex-1 md:block">
          <Image src="/images/world.png" width={222} height={230} alt="Picture of the author" />
        </div>
        <div className="flex flex-[4] flex-col items-center space-y-6 px-20">
          <SectionHeader translate="Determining the Level">تعیین سطح</SectionHeader>
          <Typography variant="body2" className="text-pen">
            همسوترین استاد با اهداف و نیازهایت را از بین صدها استاد ارزیابی‌شده، انتخاب کن و در زمان‌های دلخواه، در کلاس
            زبان آنلاین شرکت کن. همسوترین استاد با اهداف و نیازهایت را از بین صدها استاد ارزیابی‌شده، انتخاب کن و در
            زمان‌های دلخواه، در کلاس زبان آنلاین شرکت کن.
          </Typography>
          <Button>ورود به آزمون تعیین سطح</Button>
        </div>
        <div className="hidden flex-1 md:block">
          <Image src="/images/pen.png" width={222} height={230} alt="Picture of the author" />
        </div>
      </div>
    </Section>
  );
};

export default DeterminingLevelSection;
