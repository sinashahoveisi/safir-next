import type {FC} from 'react';
import {Typography} from '@mui/material';
import Button from '@/components/Button';
import Image from 'next/image';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

const PrivateClassSection: FC = () => {
  return (
    <Section varient="yellow">
      <SectionHeader translate="Private Class">کلاس‌های خصوصی</SectionHeader>
      <div className="mb-14 flex flex-col items-center justify-around md:flex-row">
        <div className="flex-1 space-y-8">
          <Typography variant="body2" className="text-pen">
            همسوترین استاد با اهداف و نیازهایت را از بین صدها استاد ارزیابی‌شده، انتخاب کن و در زمان‌های دلخواه، در کلاس
            زبان آنلاین شرکت کن. همسوترین استاد با اهداف و نیازهایت را از بین صدها استاد ارزیابی‌شده، انتخاب کن و در
            زمان‌های دلخواه، در کلاس زبان آنلاین شرکت کن.
          </Typography>
          <Button>ورود به جلسه رایگان</Button>
        </div>
        <div>
          <Image src="/images/class.png" width={400} height={320} alt="Picture of the author" />
        </div>
      </div>
    </Section>
  );
};

export default PrivateClassSection;
