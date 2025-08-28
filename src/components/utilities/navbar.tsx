import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuUserRound } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="m-4 select-none">
      <nav className="flex justify-between items-center">
        <div>
          <ul className="flex justify-between items-center gap-[30px]">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/collections">Collections</Link>
            </li>
            <li>
              <Link href="/new">New</Link>
            </li>
          </ul>
        </div>
        <div className="mr-42">
          <Link href="/">
            <h1 className="underline decoration-sky-500">VOILA</h1>
          </Link>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-[30px]">
            <li>
              <Link href="/wishlist">
                <LuHeart />
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <LuShoppingCart />
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <LuUserRound />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
