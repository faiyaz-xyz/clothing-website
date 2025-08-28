import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <div>Menu</div>
          <ul>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Collections</Link>
            </li>
            <li>
              <Link href="/">New</Link>
            </li>
          </ul>
        </div>
        <div>
          <Image alt="logo" src="/vercel.svg" height={10} width={10}></Image>
        </div>
        <div></div>
      </nav>
    </div>
  );
};

export default Navbar;
