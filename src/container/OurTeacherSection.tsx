import type {FC} from 'react';
import {Typography} from '@mui/material';
import Button from '@/components/Button';
import Image from 'next/image';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';

const OurTeacherSection: FC = () => {
  return (
    <Section varient="blue" className="items-center justify-center">
      <SectionHeader translate="Our Teachers">اساتید ما</SectionHeader>
      <div className="flex flex-row flex-wrap items-center justify-around">
        <Card varient="white" Image={<Image src="/images/user.png" width={80} height={80} alt="england" />}>
          <Typography variant="h6" className="text-pen">
            شهاب محرابی
          </Typography>
          <Typography variant="body2" className="text-pen-light">
            مدرس زبان ترکی
          </Typography>
        </Card>
        <Card varient="white" Image={<Image src="/images/user.png" width={80} height={80} alt="england" />}>
          <Typography variant="h6" className="text-pen">
            شهاب محرابی
          </Typography>
          <Typography variant="body2" className="text-pen-light">
            مدرس زبان ترکی
          </Typography>
        </Card>
        <Card varient="white" Image={<Image src="/images/user.png" width={80} height={80} alt="england" />}>
          <Typography variant="h6" className="text-pen">
            شهاب محرابی
          </Typography>
          <Typography variant="body2" className="text-pen-light">
            مدرس زبان ترکی
          </Typography>
        </Card>
        <Card varient="white" Image={<Image src="/images/user.png" width={80} height={80} alt="england" />}>
          <Typography variant="h6" className="text-pen">
            شهاب محرابی
          </Typography>
          <Typography variant="body2" className="text-pen-light">
            مدرس زبان ترکی
          </Typography>
        </Card>
      </div>
      <Button>همکاری با ما</Button>
    </Section>
  );
};

export default OurTeacherSection;
