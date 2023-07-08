import type {FC} from 'react';
import {Box, Button} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const CustomButton: FC = ({children, color = ''}) => {
  return (
    <Button variant="contained" className="relative rounded-full bg-[#4385F6] px-12 py-3">
      {children}
      <Box
        bgcolor={color}
        className="absolute -left-[15px] flex h-[35px] w-[35px] items-center justify-center rounded-full border-2 border-white bg-[#4385F6]">
        <KeyboardBackspaceIcon fontSize="medium" />
      </Box>
    </Button>
  );
};

export default CustomButton;
