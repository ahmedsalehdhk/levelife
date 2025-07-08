import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    // <nav className="w-full flex flex-col justify-between items-center bg-black text-white">
    //   <div className="container max-w-7xl p-6 flex justify-between items-center">
    //     <ul className="flex space-x-4">
    //       <li>
    //         <Link href="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link href="/quests">Quests</Link>
    //       </li>
    //       <li>
    //         <Link href="/rewards">Rewards</Link>
    //       </li>
    //     </ul>
    //     <div className="logo">LEVELIFE</div>
    //     <div className="">
    //       <Link href="/login">Login</Link>
    //     </div>
    //   </div>
    // </nav>

    <nav className="w-full flex justify-center items-center bg-black text-white">
      <div className="container flex justify-between min-w-7xl max-w-7xl">
        <ul className="flex items-center space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/quests">Quests</Link></li>
          <li><Link href="/rewards">Rewards</Link></li>
        </ul>
        <h1 className="logo text-3xl">Levelife</h1>
        <div className="flex items-center">
          <h1><Link href="/login">Login</Link></h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
