import type {FC} from 'react';
import {Typography} from '@mui/material';
import TeacherIcon from '@/assets/icon/TeacherIcon';
import Section from '@/components/Section';
import Card from '@/components/Card';

const StatisticSection: FC = () => {
  return (
    <Section varient="white">
      <div className="flex flex-row flex-wrap items-center justify-around">
        <Card varient="gray" Image={<TeacherIcon />}>
          <Typography variant="h6" className="text-pen">
            216
          </Typography>
          <Typography variant="body2" className="text-pen-light">
            استاد مجرب
          </Typography>
        </Card>
        <Card varient="gray" Image={<TeacherIcon />}>
          <Typography variant="h6" className="text-pen">
            216
          </Typography>
          <Typography variant="body2" className="text-pen-light">
            استاد مجرب
          </Typography>
        </Card>
        <Card varient="gray" Image={<TeacherIcon />}>
          <Typography variant="h6" className="text-pen">
            216
          </Typography>
          <Typography variant="body2" className="text-pen-light">
            استاد مجرب
          </Typography>
        </Card>
        <Card varient="gray" Image={<TeacherIcon />}>
          <Typography variant="h6" className="text-pen">
            216
          </Typography>
          <Typography variant="body2" className="text-pen-light">
            استاد مجرب
          </Typography>
        </Card>
      </div>
    </Section>
  );
};

export default StatisticSection;
