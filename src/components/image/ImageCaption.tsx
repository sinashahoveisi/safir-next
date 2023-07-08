import type {FC} from 'react';
import {Typography} from '@mui/material';
import Image from 'next/image';

interface Props {
  image: string;
  caption: string;
}

const ImageCaption: FC<Props> = ({image, caption}) => {
  return (
    <div className="mx-2 flex flex-col items-center justify-center space-y-2">
      <Image src={image} width={37} height={51} alt="england" />
      <Typography variant="caption" className="font-normal text-pen">
        {caption}
      </Typography>
    </div>
  );
};

export default ImageCaption;
