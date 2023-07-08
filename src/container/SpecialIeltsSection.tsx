import type {FC} from 'react';
import {Typography} from '@mui/material';
import Button from '@/components/Button';
import Image from 'next/image';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

const SpecialIeltsSection: FC = () => {
  return (
    <Section varient="white">
      <div className="mb-14 flex flex-col items-center justify-around md:flex-row">
        <div className="flex flex-1 flex-col items-start space-y-8">
          <SectionHeader translate="Special Plan for IELTS" className="text-right">
            برنامه ویژه برای IELTS
          </SectionHeader>
          <Typography variant="body2" className="text-pen">
            همسوترین استاد با اهداف و نیازهایت را از بین صدها استاد ارزیابی‌شده، انتخاب کن و در زمان‌های دلخواه، در کلاس
            زبان آنلاین شرکت کن. همسوترین استاد با اهداف و نیازهایت را از بین صدها استاد ارزیابی‌شده، انتخاب کن و در
            زمان‌های دلخواه، در کلاس زبان آنلاین شرکت کن. همسوترین استاد با اهداف و نیازهایت را از بین صدها استاد
            ارزیابی‌شده، انتخاب کن و در زمان‌های دلخواه، در کلاس زبان آنلاین شرکت کن. همسوترین استاد با اهداف و نیازهایت
            را از بین صدها استاد ارزیابی‌شده، انتخاب کن و در زمان‌های دلخواه.
          </Typography>
          <Button>همین حالا شروع کن</Button>
        </div>
        <div>
          <Image src="/images/ielts.png" width={400} height={320} alt="Picture of the author" />
        </div>
      </div>
    </Section>
  );
};

export default SpecialIeltsSection;
