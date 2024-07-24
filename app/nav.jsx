"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsTelegram } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const MobileNav = () => (
    <div className="w-full">
      <div className="flex justify-between items-center p-4 bg-white">
        <div className="flex space-x-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <HiOutlineMenuAlt4 className="text-2xl" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="space-y-8 py-10 px-8 m-2 rounded-[32px]">
                    <Link href={"/#map"} className="block w-full text-left">
                      О компании
                    </Link>
                    <Link
                      href={"/#cases"}
                      className="block w-full text-left text-blue-600"
                    >
                      Наши кейсы
                    </Link>
                    <Link href={"/#steps"} className="block w-full text-left">
                      Сотрудничество
                    </Link>
                    <Link href={"/#faq"} className="block w-full text-left">
                      FAQ
                    </Link>
                    <hr className="border w-full" />
                    <div className="text-gray-600">Тел: (495) 555-55-55</div>
                    <div className=" flex space-x-4">
                      <BsTelegram className="text-blue-500 text-2xl" />
                      <Image
                        src="/wApp.svg"
                        alt="WhatsApp"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Image
            src="/logo.svg"
            alt="logo"
            width={80}
            height={40}
            className="sm:!w-[100px] sm:!h-[50px]"
          />
        </div>
        <button className="px-3 py-1 sm:px-4 sm:py-2 bg-customBlack text-white rounded-full text-sm">
          Отправить заявку
        </button>
      </div>
    </div>
  );

  const TabletNav = () => (
    <div className="w-full">
      <div className="flex justify-between items-center p-4 bg-white">
        <div className="flex space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <HiOutlineMenuAlt4 className="text-3xl" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="space-y-8 py-10 px-8 m-2 rounded-[32px]">
                    <Link href={"/#map"} className="block w-full text-left">
                      О компании
                    </Link>
                    <Link
                      href={"/#cases"}
                      className="block w-full text-left text-blue-600"
                    >
                      Наши кейсы
                    </Link>
                    <Link href={"/#steps"} className="block w-full text-left">
                      Сотрудничество
                    </Link>
                    <Link href={"/#faq"} className="block w-full text-left">
                      FAQ
                    </Link>
                    <hr className="border w-full" />
                    <div className="text-gray-600">Тел: (495) 555-55-55</div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Image src="/logo.svg" alt="logo" width={100} height={50} />
        </div>
        <div className="flex space-x-4 items-center">
          <div className=" flex space-x-4">
            <BsTelegram className="text-blue-500 text-2xl" />
            <Image src="/wApp.svg" alt="WhatsApp" width={24} height={24} />
          </div>
          <button className="px-3 py-1 sm:px-4 sm:py-2 bg-customBlack text-white rounded-full text-sm">
            Отправить заявку
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          style={menuStyles}
          className="bg-gray-100 space-y-8 py-10 px-8 m-2 rounded-[32px]"
        >
          <button className="block w-full text-left">О компании</button>
          <button className="block w-full text-left text-blue-600">
            Наши кейсы
          </button>
          <button className="block w-full text-left">Сотрудничество</button>
          <button className="block w-full text-left">FAQ</button>
          <hr className="border w-full" />
          <div className="text-gray-600">Тел: (495) 555-55-55</div>
        </div>
      )}
    </div>
  );

  const DesktopNav = () => (
    <div className="flex max-w-7xl items-center justify-between p-4 mx-auto">
      <Image src="/logo.svg" alt="logo" width={100} height={100} />
      <div className="flex space-x-8 items-center">
        <Link
          href="/#map"
          className="px-2 py-1 hover:bg-textGrey focus:bg-blue-100 rounded-full"
        >
          О компании
        </Link>
        <Link
          href="/#cases"
          className="text-textBlue bg-textGrey py-1 px-2 rounded-full"
        >
          Наши кейсы
        </Link>
        <Link
          href="/#steps"
          className="px-2 py-1 hover:bg-textGrey focus:bg-blue-100 rounded-full"
        >
          Сотрудничество
        </Link>
        <Link
          href="/#faq"
          className="px-2 py-1 hover:bg-textGrey focus:bg-blue-100 rounded-full"
        >
          FAQ
        </Link>
        <button>Круглосуточно: (495) 555-55-55</button>
        <button>
          <BsTelegram className="text-blue-500 text-[32px]" />
        </button>
        <button>
          <Image src="/wApp.svg" alt="WhatsApp" width={32} height={32} />
        </button>
        <Link
          href="/#contact_form"
          className="px-3 py-1 sm:px-4 sm:py-2 bg-customBlack text-white rounded-full hover:bg-slate-600 focus:bg-customYellow focus:text-bl"
        >
          Отправить заявку
        </Link>
      </div>
    </div>
  );

  if (isMobile) {
    return <MobileNav />;
  } else if (isTablet) {
    return <TabletNav />;
  } else {
    return <DesktopNav />;
  }
};

export default Nav;
