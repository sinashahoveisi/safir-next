import type {FC} from 'react';
import {Typography} from '@mui/material';
import Logo from '@/components/image/Logo';
import Navbar from '@/container/Navbar';
import Button from '@/components/Button';
import Image from 'next/image';
import Section from '@/components/Section';
import LanguageSlider from '@/container/LanguageSlider';
import SectionHeader from '@/components/SectionHeader';

const SelfStudySection: FC = () => {
  return (
    <Section varient="white">
      <SectionHeader translate="Self-Study Courses">دوره‌های خودآموز</SectionHeader>
    </Section>
  );
};

export default SelfStudySection;
