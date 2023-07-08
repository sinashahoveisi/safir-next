import type {FC} from 'react';

const Card: FC = ({Image, children, varient = 'gray'}) => {
  return (
    <div className="mx-2 flex flex-col items-center">
      <div className={`z-10 -mb-[50px] rounded-full ${varient === 'white' ? 'bg-[#E3EDFE] p-2' : 'bg-white p-4'}`}>
        {Image}
      </div>
      <div
        className={`flex w-1/3 w-full min-w-[200px] max-w-[250px] flex-col items-center justify-center rounded-xl pb-6 pt-16 ${
          varient === 'white' ? 'bg-white' : 'bg-[#F5F8FE]'
        }`}>
        {children}
      </div>
    </div>
  );
};

export default Card;
