import clsx from "clsx";
import { LinkItem } from "../../organism/Navbar/nav-links";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getListCategory, getListArea } from "@/app/api/getdata";
import Link from "next/link";
import Text from "../../atoms/Text/page";


interface LinkItemProps {
    link: LinkItem,
}

interface List {
    Area: () => Promise<any>,
    Category: () => Promise<any>
}

const list: List = {
    Area: getListArea,
    Category: getListCategory,
}

const NavItem = (props: LinkItemProps) => {
    const [openDropdown, setOpenDropdown] = useState<boolean>(false)
    const pathname = usePathname();
    const link = props.link;
    // GET AREAS / CATEGORIES
    const getData = list[link.id];
    const [data, setData] = useState<Array<any>>([]);
  
    useEffect(() => {
        async function fetchMeals() {
        try {
            console.log("masuk")
            const data: Array<any> = await getData();
            setData(data);
            console.log(data)
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        } 
        }

    fetchMeals();
  }, [getData, link.id]);

    const handleOpenDropdown =  () => {
        setOpenDropdown(!openDropdown)
    }

    return (
        <div key={link.name} className='relative' onMouseEnter={handleOpenDropdown}
        onMouseLeave={handleOpenDropdown}>
            <div
                className={clsx(
                    'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                    {
                        'text-blue-600': pathname === link.href,
                    },

                )}>
                <p className="hidden md:block">
                    <Text variant="h6" className="font-semibold">{link.name}</Text>
                </p>
            </div>
            { link.isDropdown && openDropdown && (
                <div className='absolute grid grid-cols-3 gap-y-2 w-[500px] z-50 -left-[20%] bg-white rounded-lg shadow-lg border border-slate-200'>
                    {data.map((area, index) => {
                        return (
                            <Link key={index} href={`${link.href}/${area[`str${link.id}`]}`}>
                            <div className="hover:bg-blue-300 py-2 px-4">
                                {area[`str${link.id}`]}
                            </div>
                            </Link>
                        )
            })}
                </div>
            )}
        </div>
    )
}

export default NavItem;