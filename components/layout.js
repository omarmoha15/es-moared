/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import logo from '../public/logo-white.svg';
import Image from 'next/image';
import { BsArrowRightShort, BsChevronBarDown, BsDashCircle, BsSearch } from "react-icons/bs";
import { IoCalendarOutline , 
  IoDocumentTextOutline,
  IoGitPullRequestSharp,
  IoStarHalfOutline,
  IoHandLeftOutline,
  IoBodyOutline,
  IoBagOutline,
  IoCaretUpCircleOutline,
  IoPricetagsOutline } from "react-icons/io5";
import {BiSolidLogIn} from "react-icons/bi"
import {GiAchievement} from "react-icons/gi"
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

function App({ children }) {
  const Menu = [
  
    { title: "بياناتي الشخصية", icon: <BsDashCircle />, href: "/employerInfo" },
    {title:"الانتدابات" ,
    icon:<IoBagOutline/>,
      submenu: true,
      submenuItem:[
        {title:"تقديم انتدابات" ,href: "/assignments"},
        {title:"عرض انتداباتي",href: "/MyAssignment"},
      ]
     },
     {title:"الاجازات" ,
     icon: <IoCalendarOutline/>,
     submenu: true,
     submenuItem:[
       {title:"تقديم اجازة",href: "/employerCalendar"},
       {title:" اجازاتي" ,href: "/employerVacations"},
     ]
    },
    {title:"التقيم الوظيفي" ,
    icon:<IoStarHalfOutline/>,
     submenu: true,
     submenuItem:[
       {title:"تقديم تقييم" ,href: "/employerRate"},
       {title:" تقيماتي",href: "/eRate"},
     ]
    },
    {title:"الوثائق الرسمية " ,
    submenu: true,
    icon:<IoDocumentTextOutline/>,
    submenuItem:[
      {title:" تعريف الراتب عربي",href: "/employerDoc"},
      {title:" تعريف الراتب انجليزي",href: "/employerDoc"},
      {title:" بيان الخدمة  ",href: "/0"},
      {title:" التقارير الطبية من صحتي" ,href: "/0"},
    ]
   },
   {title:"التدريب " ,
   icon:<IoBodyOutline/>,
     submenu: true,
     submenuItem:[
       {title:"سجلي التدريبي",href: "/employerTraining"},
       {title:" رفع طلب اضافة دوره" ,href: "/employerTraining"},
       {title:"رفع طلب ابتعاث",href: "/employerTraining"},
       {title:"طلب التسجيل في دورات ",href: "/employerTraining"},
       {title:""},
     ]
    },
    {title:"التقاعد " ,
    icon:<GiAchievement/>,
     submenu: true,
     submenuItem:[
       {title:"رفع طلب استقاله واخلاء طرف",href: "/0"},
       {title:"رفع طلب تقاعد مبكر واخلاء طرف",href: "/0"},
       {title:"رفع طلب تقاعد واخلاء طرف",href: "/0"},
     ]
    },
    {title:"طلباتي " ,
    icon:<IoPricetagsOutline/>,
    submenu: true,
    submenuItem:[
      {title:"رفع طلب تصحيح بيانات",href: "/0"},
      {title:"طلبات اخرى",href: "/0"},
    ]
   },
   {title:"القرارات" ,
   submenu: true,
   icon:<IoHandLeftOutline/>,
   submenuItem:[
     {title:"قرارات العقوبات",href: "/0"},
     {title:"اخرى",href: "/employerIfo"},
   ]
  },
  {title:"الترقيات  " ,
  icon:<IoCaretUpCircleOutline/>,
  submenu: true,
  submenuItem:[
    {title:"التسجيل في محضر الترقية",href: "/0"},
    {title:"سجل الترقيات",href: "/employerIfo"},
    {title:"طلب الترقية استثنائية",href: "/0"},
  ]
 },
 {title:"التواصل الداخلي" ,
 icon:<IoGitPullRequestSharp/>,
 submenu: true,
 submenuItem:[
   {title:"اعلانات الموارد البشرية",href: "/0"},
   {title:"برنامج خصومات الولاء",href: "/0"},
 ]
},

 
  
   
    
  ];


  const [open, setOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Track the active submenu
  const router = useRouter();

  const toggleSubmenu = (index) => {
    if (activeSubmenu === index) {
      // Clicking on the active submenu closes it
      setActiveSubmenu(null);
    } else {
      // Clicking on a different submenu opens it
      setActiveSubmenu(index);
    }
  };

  async function logout() {
    try {
      const response = await fetch('http://10.0.0.215:7000/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        // Clear the JWT token cookie
        Cookies.remove('jwtToken');
        router.push('/login');
        
      } else {
        console.error('Logout failed');
        // Handle other status codes, if needed
        if (response.status === 401) {
          // Unauthorized - handle accordingly
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle network errors or other issues
    }
  }

  return (
    <div dir="rtl" className="flex h-screen">
  <div className={`bg-gradient-to-t from-slate-800 via-teal to-teal-800 p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowRightShort
          className={`bg-white text-slate-400 text-3xl rounded-full absolute -left-3 top-9 border border-teal-800 cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <Image
            src={logo}
            height={250}
            width={250}
            className={`text-4xl rounded cursor-pointer block float-right mr-2 duration-500 ${open && "rotate-[360deg]"}`}
          />
        </div>

        <div className={`flex items-center rounded-3xl bg-neutral-400 mt-6 ${!open ? "px2.5" : "px-4"} py-1`}>
          <BsSearch className={`text-white text-lg block float-right cursor-pointer ${!open && "mr-2"}`} />
          <input
            placeholder="البحث"
            type={"search"}
            className={`text-base bg-transparent w-full text-white text-right focus:outline-none ${!open && "hidden"}`}
          />
        </div>
        <ul className="pt-2">
          {Menu.map((menu, index) => (
            <li key={index} className="relative">
              <div
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer hover:bg-gray-700 rounded-full mt-5`}
                onClick={() => toggleSubmenu(index)}
              >
                <span className="text-2xl block float-right">{menu.icon ? menu.icon : <BsDashCircle size={20} />}</span>
                <span className={`text-base font flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
                {menu.submenu && (
                  <BsChevronBarDown className={activeSubmenu === index ? "rotate-180" : ""} />
                )}
              </div>
              {menu.submenu && activeSubmenu === index && (
                <ul className="pl-5">
                  {menu.submenuItem.map((submenuItem, subIndex) => (
                    <li key={subIndex}>
                      <Link href={submenuItem.href}>
                        <span className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2  px-5 hover:bg-gray-700 rounded-full">
                          {submenuItem.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div
          onClick={logout}
          className={`text-gray-300 text-sm  items-center gap-x-2 cursor-pointer p-1 hover:bg-gray-700 rounded-2xl mt-10`}
        >
          <span className="text-2xl block float-right ml-3"><BiSolidLogIn size={20} /></span>
          <span className={`text-base font-bold flex-1 duration-300 ${!open && "hidden"}`}>تسجيل الخروج</span>
        </div>
      </div>

      <main className="flex-grow overflow-y-auto py-10 px-4 sm:px-6 lg:px-8">
        
          {children}
        
      </main>
    </div>
  );
}

export default App;