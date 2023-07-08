import type {FC} from 'react';

const navbarItems = ['دوره‌های خودآموز', 'آیلتس', 'سطح بندی', 'کلاس‌های خصوصی', 'همکاری با ما'];

const Navbar: FC = () => {
  return (
    <ul className="hidden max-w-2xl flex-1 flex-row justify-around lg:flex">
      {navbarItems?.map((navbarItem: string) => (
        <li>
          <span className="text-center text-sm font-light text-pen">{navbarItem}</span>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
