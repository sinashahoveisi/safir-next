import type {FC} from 'react';
import {Box} from '@mui/material';
import ImageCaption from '@/components/image/ImageCaption';

const LanguageSlider: FC = () => {
  return (
    <Box className="flex flex-row flex-wrap items-center justify-around rounded-[50px] bg-white px-8 py-6">
      <ImageCaption caption="انگلیس" image="/images/england.png" />
      <ImageCaption caption="انگلیس" image="/images/england.png" />
      <ImageCaption caption="انگلیس" image="/images/england.png" />
      <ImageCaption caption="انگلیس" image="/images/england.png" />
      <ImageCaption caption="انگلیس" image="/images/england.png" />
      <ImageCaption caption="انگلیس" image="/images/england.png" />
      <ImageCaption caption="انگلیس" image="/images/england.png" />
    </Box>
  );
};

export default LanguageSlider;
