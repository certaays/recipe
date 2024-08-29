import clsx from "clsx";
import { LinkItem } from "../../organism/Navbar/nav-links";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getListCategory, getListArea } from "@/app/api/getdata";
import Link from "next/link";

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
        <div key={link.name} className='relative'>
            <div
                onClick={handleOpenDropdown}
                className={clsx(
                    ' flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                    {
                        'text-blue-600': pathname === link.href,
                    },

                )}>
                <p className="hidden md:block">{link.name}</p>
            </div>
            { link.isDropdown && openDropdown && (
                <div className='absolute flex flex-col gap-y-2 bg-white'>
                    {data.map((area, index) => {
                        return (
                            <div key={index} className="flex flex-row justify-center w-full hover:bg-blue-300 py-2 px-4">
                                <Link href={`/category/${area[`str${link.id}`]}`}>{area[`str${link.id}`]}</Link>
                            </div>
                        )
            })}
                </div>
            )}
        </div>
    )
}

export default NavItem;