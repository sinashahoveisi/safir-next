import type {NextPage} from 'next';
import {Container} from '@mui/material';
import MainSection from '@/container/MainSection';
import SelfStudySection from '@/container/SelfStudySection';
import PrivateClassSection from '@/container/PrivateClassSection';
import DeterminingLevelSection from '@/container/DeterminingLevelSection';
import OurTeacherSection from '@/container/OurTeacherSection';
import SpecialIeltsSection from '@/container/SpecialIeltsSection';
import StatisticSection from '@/container/StatisticSection';

const Home: NextPage = () => {
  return (
    <Container className="space-y-6">
      <MainSection />
      <SelfStudySection />
      <PrivateClassSection />
      <DeterminingLevelSection />
      <OurTeacherSection />
      <StatisticSection />
      <SpecialIeltsSection />
    </Container>
  );
};

export default Home;
