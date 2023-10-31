import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-blue-500 p-4 flex items-center justify-between border-b-2 border-b-green-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contato</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Arena Gastronomica</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>(16) 99286-9585</span>
        </div>
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
