'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import IconButton from '../../atoms/IconButton/page';
import SearchButton from '../../molecules/SearchButton/page';
import Image from 'next/image'
import NavItem from '../../atoms/NavItem/NavITem';

export interface LinkItem {
  id: string;
  name: string,
  href: string;
  isDropdown: boolean,
}

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links: LinkItem[] = [
  {id: 'Category', name: 'By Category', href: '/category', isDropdown: true },
  {id: 'Area', name: 'By Area', href: '/area', isDropdown: true },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className='flex flex-row justify-between items-center p-2 shadow-lg'>
      <Link href="/">
        <Image
          src="https://www.themealdb.com/images/logo-small.png"
          alt="logo"
          className=''
          width={200}
          height={100}
        />
      </Link>
      <div className='flex flex-row gap-x-4 justify-start'>
        {links.map((link) => {
          return (
            <NavItem link={link} key={link.name} />
          );
        })}
      </div>
      <div className=''>
        <SearchButton />
      </div>
    </div>
  );
}
